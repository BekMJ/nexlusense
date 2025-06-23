'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

// Dynamically import the CO9Viewer component to avoid SSR issues
const CO9Viewer = dynamic(() => import('@/components/CO9Viewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl flex items-center justify-center">
      <div className="text-white text-lg">Loading 3D Scene...</div>
    </div>
  ),
});

// Dynamically import the ScooterViewer component to avoid SSR issues
const ScooterViewer = dynamic(() => import('@/components/ScooterViewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl flex items-center justify-center">
      <div className="text-white text-lg">Loading 3D Scene...</div>
    </div>
  ),
});

interface ProductViewerProps {
  product: string;
}

export default function ProductViewer({ product }: ProductViewerProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative h-[500px] rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl">
        {product === 'methane-detection' ? (
          <Image
            src="/methane1.jpg"
            alt="Methane Detection System"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        ) : product === 'xhale-health' ? (
          <CO9Viewer />
        ) : product === 'oke-ride' ? (
          <ScooterViewer />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Product Image Placeholder
          </div>
        )}
      </div>
    </div>
  );
} 