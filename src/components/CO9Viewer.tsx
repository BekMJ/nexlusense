'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, Stars } from '@react-three/drei';
import { Suspense } from 'react';

function CO9Model() {
  // Load the CO.glb file
  const { scene } = useGLTF('/CO.glb');
  
  return <primitive object={scene} />;
}

export default function CO9Viewer() {
  return (
    <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 shadow-2xl border border-white/20 dark:border-gray-700/30">
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
          <CO9Model />
          
          {/* Enhanced lighting setup */}
          <Environment preset="sunset" />
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
            color="#3b82f6"
          />
          <pointLight 
            position={[10, -10, 5]} 
            intensity={0.6} 
            color="#8b5cf6"
          />
          
          {/* Rim lighting for dramatic effect */}
          <spotLight 
            position={[0, 10, 0]} 
            angle={0.3} 
            penumbra={1} 
            intensity={0.8} 
            color="#ffffff"
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
      
      {/* Overlay gradient for extra aesthetic */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-transparent via-transparent to-blue-50/20 dark:to-blue-900/10 rounded-2xl"></div>
    </div>
  );
} 