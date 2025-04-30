import { useEffect, useRef, useState } from "react";

interface EntryPageProps {
  onComplete: () => void;
}

const EntryPage: React.FC<EntryPageProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const centerxRef = useRef(0);
  const centeryRef = useRef(0);
  const expanseRef = useRef(false);
  const collapseRef = useRef(false);
  const starsRef = useRef<any[]>([]);
  const animationCompleteRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const stars = starsRef.current;
    const maxorbit = 350;
    let startTime = Date.now();
    let currentTime = 0;

    const updateCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerxRef.current = canvas.width / 2;
      centeryRef.current = canvas.height / 2;
    };

    updateCanvasDimensions();
    window.addEventListener("resize", updateCanvasDimensions);

    const rotate = (cx: number, cy: number, x: number, y: number, angle: number) => {
      const cos = Math.cos(angle), sin = Math.sin(angle);
      return [(cos * (x - cx)) + (sin * (y - cy)) + cx, (cos * (y - cy)) - (sin * (x - cx)) + cy];
    };

    const randomAngle = () => Math.random() * Math.PI * 2;
    const randomRadius = (min: number, max: number) => min + Math.sqrt(Math.random()) * (max - min);

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
      opacity: number;
      expanded: boolean;

      constructor() {
        const angle = randomAngle();
        const radius = randomRadius(10, maxorbit);
        const cx = centerxRef.current;
        const cy = centeryRef.current;
        const w = canvas ? canvas.width : 0;
        const h = canvas ? canvas.height : 0;

        this.orbital = radius;
        this.x = cx;
        this.y = cy + radius;
        this.yOrigin = cy + radius;
        this.speed = (Math.floor(Math.random() * 1.5) + 0.8) * Math.PI / 180;
        this.rotation = angle;
        this.startRotation = angle;
        this.id = stars.length;
        this.collapseBonus = Math.max(0, radius - (maxorbit * 0.7));
        stars.push(this);

        const baseOpacity = 1 - (radius / (maxorbit * 1.2));
        this.opacity = baseOpacity * (0.7 + Math.random() * 0.3);
        this.color = `rgba(255,255,255,${this.opacity})`;

        this.hoverPos = cy + (maxorbit / 2) + this.collapseBonus;

        const spread = Math.max(w, h) * 0.8;
        const a = Math.random() * Math.PI * 2;
        const d = Math.random() * spread;
        this.expansePos = cy + (Math.sin(a) * d);

        this.prevR = angle;
        this.prevX = this.x;
        this.prevY = this.y;
        this.expanded = false;
      }

      draw() {
        if (!context) return;
        const speedMult = expanseRef.current ? 0.35 : 1;
        const distFactor = 0.8 + (this.orbital / maxorbit) * 0.4;

        if (!expanseRef.current) {
          this.rotation = this.startRotation + (currentTime * this.speed * distFactor * speedMult);
          if (!collapseRef.current) {
            if (this.y > this.yOrigin) this.y -= 1.2;
            else if (this.y < this.yOrigin - 4) this.y += (this.yOrigin - this.y) / 20;
          } else {
            if (this.y > this.hoverPos) this.y -= (this.hoverPos - this.y) / -10;
            else if (this.y < this.hoverPos - 4) this.y += 1.2;
          }
        } else {
          this.rotation = this.startRotation + (currentTime * this.speed * 0.4);
          const d = Math.abs(this.y - this.expansePos);
          if (d < 20) {
            this.expanded = true;
            this.opacity = Math.max(0, this.opacity - 0.01);
            this.color = `rgba(255,255,255,${this.opacity})`;
          }
          const drift = (this.expansePos - this.y) / 200;
          this.y += drift;
        }

        context.save();
        context.fillStyle = this.color;
        context.strokeStyle = this.color;
        context.beginPath();
        const [ox, oy] = rotate(centerxRef.current, centeryRef.current, this.prevX, this.prevY, -this.prevR);
        context.moveTo(ox, oy);
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

    const init = () => {
      if (!context) return;
      context.fillStyle = 'rgba(25,25,25,1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      const count = Math.min(3500, Math.floor((canvas.width * canvas.height) / 800));
      for (let i = 0; i < count; i++) new Star();
      requestAnimationFrame(loop);
    };

    const loop = () => {
      if (!context) return;
      currentTime = (Date.now() - startTime) / 120;
      context.fillStyle = 'rgba(25,25,25,0.15)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < stars.length; i++) stars[i].draw();

      if (expanseRef.current && !animationCompleteRef.current) {
        const expandedCount = stars.filter(s => s.expanded).length;
        if (expandedCount / stars.length > 0.7) {
          animationCompleteRef.current = true;
          setIsOpen(true);
          setTimeout(onComplete, 500);
        }
      }
      requestAnimationFrame(loop);
    };

    const handleEnterClick = () => {
      collapseRef.current = false;
      expanseRef.current = true;
    };

    const autoStartTimer = setTimeout(() => {
      if (!expanseRef.current) handleEnterClick();
    }, 3000);

    setTimeout(() => {
      const el = document.querySelector('.centerHover');
      if (el) {
        el.addEventListener('click', handleEnterClick);
        el.addEventListener('mouseover', () => {
          collapseRef.current = false;
          expanseRef.current = true;
        });
        el.addEventListener('mouseout', () => {
          if (!expanseRef.current) collapseRef.current = false;
        });
      }
    }, 100);

    init();

    return () => {
      clearTimeout(autoStartTimer);
      window.removeEventListener("resize", updateCanvasDimensions);
      const el = document.querySelector('.centerHover');
      if (el) {
        el.removeEventListener('click', handleEnterClick);
        el.removeEventListener('mouseover', () => {});
        el.removeEventListener('mouseout', () => {});
      }
    };
  }, [onComplete]);

  return (
    <div
      id="blackhole"
      className={`fixed inset-0 z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{
        transition: 'opacity 1s ease-in-out',
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
          transition: 'all 0.5s ease-in-out',
          opacity: isOpen ? 0 : 1,
          pointerEvents: isOpen ? 'none' : 'auto'
        }}
      />
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
