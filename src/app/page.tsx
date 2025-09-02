import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden p-0">
        {/* Animated background */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-bg.jpg"
            alt="Circuit board background"
            fill
            priority
            className="object-cover object-center"
            style={{ filter: 'brightness(0.4) blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-pink-900/60" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-8 animate-fade-in-up">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image 
                  src="/logo-Picsart-BackgroundRemover.png" 
                  alt="NexLuSense Logo" 
                  fill 
                  className="object-contain drop-shadow-lg" 
                />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg animate-slide-in-top">
              <span className="gradient-text">NexLuSense</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto drop-shadow animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A professor-student-led innovation studio that bridges the gap between academic research and real-world applications, specializing in cutting-edge technology solutions across multiple domains.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-lift hover-glow text-lg"
              >
                Get Started
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover-lift glass text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Capabilities
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Examples of our innovative solutions for environmental monitoring and autonomous systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Environmental Sensing */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden hover-lift animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              <Image src="/environment-monitoring-system-1000x1000.webp" alt="Environmental Sensing" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h3 className="text-3xl font-bold text-white mb-3">Environmental Sensing</h3>
                <p className="text-white/80 mb-6 max-w-md">Autonomous environmental monitoring solutions for industrial and environmental applications.</p>
                <div className="flex items-center gap-6">
                  <Link href="/capabilities/environmental-sensing" className="inline-flex items-center text-white font-semibold group">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center text-white/80 hover:text-white group">
                    Contact
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Health Sensing */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden hover-lift animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Image src="/breath.png" alt="Health Sensing" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h3 className="text-3xl font-bold text-white mb-3">Health Sensing</h3>
                <p className="text-white/80 mb-6 max-w-md">Portable sensor devices with BLE connectivity and cross-platform mobile apps.</p>
                <div className="flex items-center gap-6">
                  <Link href="/capabilities/health-sensing" className="inline-flex items-center text-white font-semibold group">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center text-white/80 hover:text-white group">
                    Contact
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Smart Navigation */}
            <div className="relative h-[520px] rounded-3xl overflow-hidden hover-lift animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <Image src="/smart%20navi.tiff" alt="Smart Navigation" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h3 className="text-3xl font-bold text-white mb-3">Smart Navigation</h3>
                <p className="text-white/80 mb-6 max-w-md">Autonomous mobility platforms with MQTT connectivity and intelligent control.</p>
                <div className="flex items-center gap-6">
                  <Link href="/capabilities/smart-navigation" className="inline-flex items-center text-white font-semibold group">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link href="/contact" className="inline-flex items-center text-white/80 hover:text-white group">
                    Contact
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Why Choose NexLuSense?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Combining academic expertise with practical innovation to create real-world solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cutting-edge solutions that push boundaries
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Expertise
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professor-student partnership model
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Quality
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                High-precision, reliable solutions
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Real-world solutions that make a difference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 animate-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Contact us to learn more about our innovative solutions and how we can help bring your ideas to life
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 border-2 border-white text-xl font-semibold rounded-full text-white bg-white/20 hover:bg-white/30 transition-all duration-300 hover-lift hover-glow"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
