import { Metadata } from 'next';
import Image from 'next/image';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          {resolvedParams.product === 'methane-detection' ? (
            <Image
              src="/methane1.jpg"
              alt="Methane Detection System"
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Product Image Placeholder
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <ul className="space-y-3">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Applications
            </h2>
            <ul className="space-y-3">
              {product.applications.map((application, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{application}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>

      {/* Image Gallery for Methane Detection */}
      {resolvedParams.product === 'methane-detection' && (
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Product Gallery
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {methaneImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Image
                  src={`/${image}`}
                  alt={`Methane Detection System - Image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 