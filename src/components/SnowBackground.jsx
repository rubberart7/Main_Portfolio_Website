import { useEffect, useRef } from "react";

export const SnowBackground = () => {
  const canvasRef = useRef(null);
  const snowflakes = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initSnowflakes();
    };

    const initSnowflakes = () => {
      snowflakes.current = [];
      const numFlakes = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < numFlakes; i++) {
        snowflakes.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          speedY: Math.random() * 1 + 0.5,
          speedX: Math.random() * 1 - 0.5, // horizontal drift for wind
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      snowflakes.current.forEach(flake => {
        ctx.globalAlpha = flake.opacity;
        ctx.moveTo(flake.x, flake.y);
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      });
      ctx.fill();
      ctx.globalAlpha = 1;
      update();
      requestAnimationFrame(draw);
    };

    const update = () => {
      snowflakes.current.forEach(flake => {
        flake.y += flake.speedY;
        flake.x += flake.speedX; // wind effect
        if (flake.y > canvas.height) flake.y = 0;
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;
      });
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    draw();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
