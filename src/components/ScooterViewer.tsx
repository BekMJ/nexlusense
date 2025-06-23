'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Stars } from '@react-three/drei';
import { Suspense } from 'react';

function ScooterModel() {
  // Load the scooter.glb file
  const { scene } = useGLTF('/scooter.glb');
  
  return <primitive object={scene} />;
}

export default function ScooterViewer() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-gray-900 dark:via-green-900/20 dark:to-teal-900/20 shadow-2xl border border-white/20 dark:border-gray-700/30">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          {/* Animated background stars */}
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1}
          />
          
          {/* Main 3D Model */}
          <ScooterModel />
          
          {/* Enhanced lighting setup */}
          <Environment preset="dawn" />
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.5} 
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight 
            position={[-10, -10, -5]} 
            intensity={0.8} 
            color="#10b981"
          />
          <pointLight 
            position={[10, -10, 5]} 
            intensity={0.6} 
            color="#06b6d4"
          />
          
          {/* Rim lighting for dramatic effect */}
          <spotLight 
            position={[0, 10, 0]} 
            angle={0.3} 
            penumbra={1} 
            intensity={0.8} 
            color="#ffffff"
          />
          
          {/* Additional accent lighting */}
          <pointLight 
            position={[0, 5, 10]} 
            intensity={0.4} 
            color="#f59e0b"
          />
        </Suspense>
        
        {/* Enhanced controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minDistance={1.5}
          maxDistance={8}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
      
      {/* Overlay gradient for extra aesthetic */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-green-50/20 dark:to-green-900/10 rounded-2xl"></div>
    </div>
  );
} 