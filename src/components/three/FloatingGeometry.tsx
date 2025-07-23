import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

// Custom 3D Geometric Shape Component
const GeometricShape = ({ section }: { section: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Different geometries for different sections
  const getGeometry = () => {
    switch (section) {
      case 'hero':
        return new THREE.IcosahedronGeometry(1, 0);
      case 'works':
        return new THREE.OctahedronGeometry(1, 0);
      case 'contact':
        return new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16);
      case 'bio':
        return new THREE.ConeGeometry(0.8, 1.5, 8);
      default:
        return new THREE.TetrahedronGeometry(1, 0);
    }
  };

  // Dynamic material based on section
  const getMaterial = () => {
    const baseColor = section === 'hero' ? '#6366f1' : 
                     section === 'works' ? '#8b5cf6' :
                     section === 'contact' ? '#06b6d4' :
                     '#10b981';
    
    return new THREE.MeshStandardMaterial({
      color: baseColor,
      metalness: 0.7,
      roughness: 0.2,
      envMapIntensity: 1,
    });
  };

  // Animation loop
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation based on time
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
      
      // Subtle floating motion
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Update geometry when section changes
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.geometry = getGeometry();
      meshRef.current.material = getMaterial();
    }
  }, [section]);

  // Responsive scaling based on viewport
  const scale = Math.min(viewport.width, viewport.height) * 0.2;

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh
        ref={meshRef}
        geometry={getGeometry()}
        material={getMaterial()}
        scale={[scale, scale, scale]}
      >
        {/* Add subtle wireframe overlay for modern look */}
        <meshBasicMaterial
          attach="material"
          color="#ffffff"
          opacity={0.1}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  );
};

// Particle System for ambient effect
const Particles = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesCount = 50;

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6366f1"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Main 3D Scene Component
interface FloatingGeometryProps {
  section: string;
  className?: string;
}

const FloatingGeometry = ({ section, className = "" }: FloatingGeometryProps) => {
  return (
    <div className={`three-canvas-container ${className}`}>
      <Canvas
        camera={{ 
          position: [0, 0, 3], 
          fov: 45,
          near: 0.1,
          far: 100 
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6366f1" />
        
        {/* Environment for reflections */}
        <Environment preset="studio" />
        
        {/* Main geometric shape */}
        <GeometricShape section={section} />
        
        {/* Ambient particles */}
        <Particles />
        
        {/* Controls for desktop interaction */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default FloatingGeometry;