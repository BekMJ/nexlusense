export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About NexLuSense
        </h1>

        <div className="prose prose-lg dark:prose-invert">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            NexLuSense is a professor-student-led innovation studio founded by a tight-knit team of electrical and computer engineering enthusiasts dedicated to pushing the boundaries of photonic sensing and autonomous systems.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            To empower industries and communities with reliable, high-precision environmental insights and autonomous solutions—enabling smarter decisions, safer operations, and more sustainable futures.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We combine cutting-edge photonic technologies with advanced data analytics to create solutions that push the boundaries of what&apos;s possible.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our professor-student partnership model fosters a unique environment where academic expertise meets practical innovation.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Impact
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We focus on creating solutions that make a real difference in industries and communities, from environmental monitoring to autonomous systems.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Excellence
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every product we create is built with the highest standards of quality, reliability, and performance in mind.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">
            Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Our team consists of passionate professors and students from electrical and computer engineering backgrounds, working together to create innovative solutions that address real-world challenges. We combine academic expertise with practical experience to deliver cutting-edge products that make a difference.
          </p>

          <div className="mt-12">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 