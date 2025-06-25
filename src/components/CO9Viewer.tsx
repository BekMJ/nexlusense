'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function CO9Model() {
  // Load the CO.glb file
  const { scene } = useGLTF('/CO.glb');
  
  return <primitive object={scene} />;
}

export default function CO9Viewer() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden">
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
          {/* Main 3D Model */}
          <CO9Model />
          
          {/* Simple lighting setup */}
          <Environment preset="studio" />
          <ambientLight intensity={0.6} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1.0}
          />
        </Suspense>
        
        {/* Enhanced controls */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          autoRotateSpeed={0.5}
          minDistance={1.5}
          maxDistance={8}
          dampingFactor={0.05}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
} 