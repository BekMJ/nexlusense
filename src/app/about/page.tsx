import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About NexLuSense
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A professor-student-led innovation studio that bridges the gap between academic research and real-world applications.
            </p>
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              NexLuSense is a professor-student-led innovation studio that bridges the gap between academic research and real-world applications. We specialize in developing cutting-edge technology solutions across three key domains.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Environmental Sensing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Environmental Sensing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Advanced environmental monitoring solutions for industrial and environmental applications. We specialize in multi-parameter environmental sensing, cloud-based data analytics, long battery life, and ruggedized design for harsh environments.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">Methane Emission Detection System - designed for oil & gas leak detection, landfill monitoring, industrial compliance, and environmental research.</span>
              </div>
              <div className="mt-6">
                <a
                  href="/capabilities/environmental-sensing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Learn more about Environmental Sensing
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Health Sensing */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Health Sensing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Next-generation health monitoring and breath analysis solutions for personal health tracking. We develop innovative devices that offer precise health metrics, real-time monitoring, and personal health insights with cloud data synchronization.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">XHale-Health CO Monitor - designed for personal health monitoring, medical research, smoking cessation programs, and athletic performance tracking.</span>
              </div>
              <div className="mt-6">
                <a
                  href="/capabilities/health-sensing"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group"
                >
                  Learn more about Health Sensing
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Smart Navigation */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Smart Navigation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Autonomous navigation platforms with advanced mobility and payload capabilities. We create revolutionary mobility solutions featuring autonomous navigation, terrain adaptation, payload customization, long-range operation, and smart obstacle avoidance.
              </p>
              <div className="mt-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">OKE-Ride Autonomous Platform - designed for last-mile delivery, industrial inspection, research platform development, and custom payload deployment.</span>
              </div>
              <div className="mt-6">
                <a
                  href="/capabilities/smart-navigation"
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold group"
                >
                  Learn more about Smart Navigation
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Our Capabilities
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center leading-relaxed">
              These three core areas represent examples of our broader capabilities in developing innovative technology solutions. We have the expertise to create custom solutions across various domains, leveraging our core competencies in sensor technology, autonomous systems, and mobile application development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                We combine theoretical expertise with practical implementation, creating solutions that make a meaningful impact on society. Our professor-student partnership model enables us to push the boundaries of what&apos;s possible in photonic sensing and autonomous systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We believe that the best innovations come from combining theoretical expertise with practical implementation, creating solutions that make a meaningful impact on society.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Research Excellence</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Innovation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Impact</span>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Innovation at Scale
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Transforming research into real-world solutions that address global challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our work and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We constantly push the boundaries of what&apos;s possible, exploring new technologies 
                and approaches to solve complex problems.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our professor-student partnership model fosters knowledge sharing and 
                creates an environment where learning and innovation thrive together.
              </p>
            </div>

            <div className="text-center group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We focus on creating solutions that make a real difference in the world, 
                addressing critical challenges in environmental monitoring and autonomous systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To pioneer the future of photonic sensing and autonomous systems through innovative research and cutting-edge technology development, creating solutions that address critical challenges in environmental monitoring, personal health, and autonomous mobility.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              How we combine academic expertise with practical innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Research-Driven Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our projects start with cutting-edge research, ensuring that every solution 
                  is built on solid scientific foundations and the latest technological advances.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover-lift">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Practical Implementation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We translate research into practical, deployable solutions that can be 
                  immediately applied to real-world problems and challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass rounded-3xl p-12 animate-scale-in">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Ready to explore the future of photonic sensing and autonomous systems? 
              Let&apos;s work together to create innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-lift text-lg"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 hover-lift text-lg"
              >
                View Our Products
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 