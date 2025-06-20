import { Metadata } from 'next';

interface ProductPageProps {
  params: {
    product: string;
  };
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
  const product = productData[params.product as keyof typeof productData];
  
  return {
    title: `${product.title} | NexLuSense`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productData[params.product as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Product Image Placeholder
          </div>
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
    </div>
  );
} 