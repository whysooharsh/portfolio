import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export function Cursor() {
  const particlesRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();

  const particlesCount = 5000;

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [particlesCount]);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.position.x = (mouse.x * viewport.width) / 2;
      particlesRef.current.position.y = (mouse.y * viewport.height) / 2;
      particlesRef.current.rotation.x += 0.001;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <primitive
          object={new THREE.BufferAttribute(particlePositions, 3)}
          attach="attributes-position"
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
