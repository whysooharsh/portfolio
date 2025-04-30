import { useEffect, useRef } from 'react';

interface InterstellarLinkedInButtonProps {
  href: string;
}

export default function InterstellarLinkedInButton({ href }: InterstellarLinkedInButtonProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;
    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; hue: number }[] = [];

    const w = canvas.width;
    const h = canvas.height;

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 + 180,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, w, h);
      const centerX = w / 2;
      const centerY = h / 2;
      const blackHoleRadius = 20;

      const numSpirals = 3;
      const spiralSpacing = 5;

      for (let j = 0; j < numSpirals; j++) {
        ctx.beginPath();
        for (let i = 0; i < 200; i++) {
          const angle = 0.1 * i + (Date.now() * 0.001) + (j * Math.PI * 2 / numSpirals);
          const radius = spiralSpacing * Math.sqrt(i) + blackHoleRadius;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          const gradient = ctx.createRadialGradient(centerX, centerY, blackHoleRadius, centerX, centerY, w * 0.7);
          gradient.addColorStop(0, 'rgba(20, 20, 20, 0.9)');
          gradient.addColorStop(0.5, 'rgba(50, 50, 50, 0.6)');
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.fillStyle = gradient;
          ctx.fillRect(x - 2, y - 2, 4, 4);
        }
        ctx.stroke();
      }

      particles.forEach(p => {
        const dx = p.x - centerX;
        const dy = p.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const gravity = 0.02;

        if (distance > blackHoleRadius) {
          const angle = Math.atan2(dy, dx);
          const pull = gravity * (1 / Math.max(distance / 10, 1));

          p.x -= Math.cos(angle) * pull * distance;
          p.y -= Math.sin(angle) * pull * distance;

          p.x += Math.cos(angle + Math.PI / 2) * pull * 2;
          p.y += Math.sin(angle + Math.PI / 2) * pull * 2;
        } else {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
        }

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        const opacity = Math.min(1, 3 / (distance / blackHoleRadius));
        ctx.fillStyle = `hsla(${p.hue}, 0%, 60%, ${opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      const bhGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, blackHoleRadius);
      bhGrad.addColorStop(0, 'rgba(0, 0, 0, 1)');
      bhGrad.addColorStop(0.7, 'rgba(30, 30, 30, 0.8)');
      bhGrad.addColorStop(1, 'rgba(60, 60, 60, 0)');

      ctx.beginPath();
      ctx.fillStyle = bhGrad;
      ctx.arc(centerX, centerY, blackHoleRadius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-40 h-40">
      <canvas
        ref={canvasRef}
        width={200}
        height={200}
        className="absolute top-0 left-0 w-full h-full"
        style={{ background: 'black', borderRadius: '50%' }}
      />
      <a
        href={href} // Use the href prop here instead of hardcoded value
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="white"
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
            2.239 5 5 5h14c2.762 0 5-2.239 
            5-5v-14c0-2.761-2.238-5-5-5zm-11 
            19h-3v-11h3v11zm-1.5-12.268c-.966 
            0-1.75-.79-1.75-1.764s.784-1.764 
            1.75-1.764 1.75.79 1.75 
            1.764-.783 1.764-1.75 
            1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
            0v5.604h-3v-11h3v1.765c1.396-2.586 
            7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
    </div>
  );
}
