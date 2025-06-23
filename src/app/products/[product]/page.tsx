import { Metadata } from 'next';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the CO9Viewer component to avoid SSR issues
const CO9Viewer = dynamic(() => import('@/components/CO9Viewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl flex items-center justify-center">
      <div className="text-white text-lg">Loading 3D Scene...</div>
    </div>
  ),
});

interface ProductPageProps {
  params: Promise<{
    product: string;
  }>;
}

const productData = {
  'methane-detection': {
    title: 'Methane Emission Detection',
    description: 'Advanced methane detection system for industrial and environmental monitoring.',
    features: [
      'Real-time methane concentration monitoring',
      'Multi-parameter environmental sensing',
      'Cloud-based data analytics',
      'Long battery life',
      'Ruggedized design for harsh environments'
    ],
    applications: [
      'Oil & Gas leak detection',
      'Landfill monitoring',
      'Industrial compliance',
      'Environmental research'
    ]
  },
  'xhale-health': {
    title: 'XHale-Health',
    description: 'Next-generation CO monitoring breath analyzer for personal health tracking.',
    features: [
      'Precise CO breath analysis',
      'Real-time health metrics',
      'Mobile app integration',
      'Personal health insights',
      'Cloud data synchronization'
    ],
    applications: [
      'Personal health monitoring',
      'Medical research',
      'Smoking cessation programs',
      'Athletic performance tracking'
    ]
  },
  'oke-ride': {
    title: 'OKE-Ride Scooter System',
    description: 'Autonomous three-legged scooter platform with advanced navigation capabilities.',
    features: [
      'Autonomous navigation',
      'Terrain adaptation',
      'Payload customization',
      'Long-range operation',
      'Smart obstacle avoidance'
    ],
    applications: [
      'Last-mile delivery',
      'Industrial inspection',
      'Research platform',
      'Custom payload deployment'
    ]
  }
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productData[resolvedParams.product as keyof typeof productData];
  
  return {
    title: `${product.title} | NexLuSense`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = productData[resolvedParams.product as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  // All available images for methane detection
  const methaneImages = [
    'methane1.jpg',
    '0210E4E8-03DF-47D3-A726-33AED4A9D659.jpg',
    '06968581-D52D-472D-AEA6-640442A7090A.jpg',
    '1FE7C302-3CF0-43BF-891C-AA7C7F698345.jpg',
    '3AFEC446-0AE7-4193-A986-EAED4C5684A5.jpg',
    '3D1117A4-156E-4F50-9BA4-6F0BEF2419D1.jpg',
    '3D61800D-5EB7-4AD4-85B6-840D47998CB2.jpg',
    '533C70D0-B66B-4BF9-A960-675C7E92637B.jpg',
    '881FB684-E8B6-44AB-9720-540340C85854.jpg',
    '8EEAB92A-94B9-4165-B210-3E5947C020A0.jpg',
    '9E5362C0-C5BC-45D2-A0B3-B7F583312791.jpg',
    'C53535FA-C739-44A4-B674-484C0064B35B.jpg',
    'C561C44C-A772-4583-9FEC-2A5A5500ABA9.jpg',
    'C853E8DA-9CEE-4FB0-92DB-8C31A45ADEF9.jpg',
    'CDB2F166-157A-4FED-A628-2155B996598D.jpg',
    'D1404A8E-9D72-48B9-93FC-1D20FBF87A96.jpg',
    'D68EC82D-E704-460B-82FB-F0AF573E9E89.jpg',
    'EF5D6CEF-4912-4428-B2C2-ADFF3F2867EE.jpg',
    'F164DBF0-E166-4552-A50B-AC0E9E3ABFD0.jpg',
    'methane2.jpg'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image/3D Viewer with Enhanced Styling */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-[500px] rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-2xl">
                {resolvedParams.product === 'methane-detection' ? (
                  <Image
                    src="/methane1.jpg"
                    alt="Methane Detection System"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                ) : resolvedParams.product === 'xhale-health' ? (
                  <CO9Viewer />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Product Image Placeholder
                  </div>
                )}
              </div>
            </div>

            {/* Product Info with Enhanced Typography */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Advanced Technology
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  {product.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Enhanced Features Section */}
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Applications Section */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200/50 dark:border-blue-700/30">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <svg className="w-8 h-8 text-indigo-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Applications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Image Gallery for Methane Detection */}
      {resolvedParams.product === 'methane-detection' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Product Gallery
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of methane detection system images showcasing advanced technology and precision engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {methaneImages.map((image, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={`/${image}`}
                  alt={`Methane Detection System - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Image {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3D Scene Information for XHale-Health */}
      {resolvedParams.product === 'xhale-health' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Interactive 3D Model
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our CO9 breath analyzer in 3D. Use your mouse to rotate, zoom, and pan around the model to see every detail of our advanced CO monitoring technology.
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Rotate</h3>
                <p className="text-gray-600 dark:text-gray-300">Click and drag to rotate the model</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Zoom</h3>
                <p className="text-gray-600 dark:text-gray-300">Scroll to zoom in and out</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Pan</h3>
                <p className="text-gray-600 dark:text-gray-300">Right-click and drag to pan</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 