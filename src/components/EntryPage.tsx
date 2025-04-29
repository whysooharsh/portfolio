import { useEffect, useRef, useState } from "react";

interface Star {
  orbital: number;
  x: number;
  y: number;
  yOrigin: number;
  speed: number;
  rotation: number;
  startRotation: number;
  id: number;
  collapseBonus: number;
  color: string;
  hoverPos: number;
  expansePos: number;
  prevR: number;
  prevX: number;
  prevY: number;
  draw: () => void;
}

interface EntryPageProps {
  onComplete: () => void;
}

const EntryPage: React.FC<EntryPageProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const centerxRef = useRef<number>(0);
  const centeryRef = useRef<number>(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(onComplete, 1000); 
    }, 5000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const maxorbit = 255;
    const stars: Star[] = []; 
    let collapse = false; 
    let expanse = false;
    let startTime = new Date().getTime();
    let currentTime = 0;

     const updateCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerxRef.current = canvas.width / 2;
      centeryRef.current = canvas.height / 2;
    };
 
    updateCanvasDimensions();
     
    window.addEventListener('resize', updateCanvasDimensions);

    function rotate(cx: number, cy: number, x: number, y: number, angle: number) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const nx = (cos * (x - cx)) + (sin * (y - cy)) + cx;
      const ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
      return [nx, ny];
    }

    class Star {
      orbital: number;
      x: number;
      y: number;
      yOrigin: number;
      speed: number;
      rotation: number;
      startRotation: number;
      id: number;
      collapseBonus: number;
      color: string;
      hoverPos: number;
      expansePos: number;
      prevR: number;
      prevX: number;
      prevY: number;
      
      constructor() {
        const rands = [];
        rands.push(Math.random() * (maxorbit/2) + 1);
        rands.push(Math.random() * (maxorbit/2) + maxorbit);
        
        this.orbital = (rands.reduce((p, c) => p + c, 0) / rands.length);
        this.x = centerxRef.current;
        this.y = centeryRef.current + this.orbital;
        this.yOrigin = centeryRef.current + this.orbital;
        this.speed = (Math.floor(Math.random() * 2.5) + 1.5) * Math.PI/180;
        this.rotation = 0;
        this.startRotation = (Math.floor(Math.random() * 360) + 1) * Math.PI/180;
        this.id = stars.length;
        
        this.collapseBonus = this.orbital - (maxorbit * 0.7);
        if (this.collapseBonus < 0) {
          this.collapseBonus = 0;
        }
        
        stars.push(this);
        this.color = `rgba(255,255,255,${1 - (this.orbital / 255)})`;
        this.hoverPos = centeryRef.current + (maxorbit/2) + this.collapseBonus;
        this.expansePos = centeryRef.current + (this.id % 100) * -10 + (Math.floor(Math.random() * 20) + 1);
        
        this.prevR = this.startRotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
      
      draw() {
        if (!context) return;
        
        if (!expanse) {
          this.rotation = this.startRotation + (currentTime * this.speed);
          if (!collapse) {  
            if (this.y > this.yOrigin) {
              this.y -= 2.5;
            }
            if (this.y < this.yOrigin - 4) {
              this.y += (this.yOrigin - this.y) / 10;
            }
          } else { 
            if (this.y > this.hoverPos) {
              this.y -= (this.hoverPos - this.y) / -5;
            }
            if (this.y < this.hoverPos - 4) {
              this.y += 2.5;
            }
          }
        } else {
          this.rotation = this.startRotation + (currentTime * (this.speed / 2));
          if (this.y > this.expansePos) {
            this.y -= Math.floor(this.expansePos - this.y) / -140;
          }
        }
        
        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const oldPos = rotate(centerxRef.current, centeryRef.current, this.prevX, this.prevY, -this.prevR);
        context.moveTo(oldPos[0], oldPos[1]);
        context.translate(centerxRef.current, centeryRef.current);
        context.rotate(this.rotation);
        context.translate(-centerxRef.current, -centeryRef.current);
        context.lineTo(this.x, this.y);
        context.stroke();
        context.restore();
        
        this.prevR = this.rotation;
        this.prevX = this.x;
        this.prevY = this.y;
      }
    }
     
    function init() {
      if (!context) return;
      context.fillStyle = 'rgba(25,25,25,1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
       
      const starCount = Math.min(2500, Math.floor((canvas.width * canvas.height) / 1000));
      
      for (let i = 0; i < starCount; i++) {
        new Star();
      }
      
      requestAnimationFrame(loop);
    }
    
    function loop() {
      if (!context) return;
      
      const now = new Date().getTime();
      currentTime = (now - startTime) / 50;
      
      context.fillStyle = 'rgba(25,25,25,0.2)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < stars.length; i++) {
        stars[i].draw();
      }
      
      requestAnimationFrame(loop);
    }


    
    const handleMouseOver = () => {
        collapse = false;
      expanse = true;
      setIsOpen(true);
      setTimeout(onComplete, 1000);
      if (!expanse) {
        collapse = true;
      }
    };
    
    const handleMouseOut = () => {
      if (!expanse) {
        collapse = false;
      }
    };
     
    setTimeout(() => {
      const enterButton = document.querySelector('.centerHover');
      if (enterButton) {
    
        enterButton.addEventListener('mouseover', handleMouseOver);
        enterButton.addEventListener('mouseout', handleMouseOut);
      }
    }, 100);
    
    init();
    
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
      const enterButton = document.querySelector('.centerHover');
      if (enterButton) {
         enterButton.removeEventListener('mouseover', handleMouseOver);
        enterButton.removeEventListener('mouseout', handleMouseOut);
      }
    };
  }, [onComplete]);
  
  return (
    <div 
      id="blackhole" 
      className={`fixed inset-0 z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ 
        transition: 'opacity 5s ease-in-out',
        backgroundColor: 'rgba(25,25,25,1)',
        height: '100vh',
        width: '100vw'
      }}
    >
      <div 
        className={`centerHover ${isOpen ? 'open' : ''}`}
        style={{
          width: '255px',
          height: '255px',
          backgroundColor: 'transparent',
          borderRadius: '50%',
          position: 'absolute',
          left: '50%',
          top: '50%',
          marginTop: '-128px',
          marginLeft: '-128px',
          zIndex: 2,
          cursor: 'pointer',
          lineHeight: '255px',
          textAlign: 'center',
          transition: 'all 5000ms',
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? 'none' : 'auto'
        }}
      >
        <span style={{
          color: '#666',
          fontFamily: 'serif',
          fontSize: '18px',
          position: 'relative',
          transition: 'all 5000ms',
          display: 'inline-block'
        }}>
         
        </span>
      </div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          margin: 'auto'
        }}
      />
    </div>
  );
};

export default EntryPage;