import { BoltIcon, DevicePhoneMobileIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Features() {
  return (
    <section id="features" className="w-full py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 grid gap-8 grid-cols-1 md:grid-cols-3">

        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center">
          <BoltIcon className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Fast</h3>
          <p className="text-gray-600">
            Blazing fast performance with Next.js and optimized builds.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center">
          <DevicePhoneMobileIcon className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Responsive</h3>
          <p className="text-gray-600">
            Mobile-first components that look great on any screen.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center text-center">
          <SparklesIcon className="w-10 h-10 text-blue-600 mb-3" />
          <h3 className="text-xl font-semibold mb-2">Easy to Customize</h3>
          <p className="text-gray-600">
            Tailwind utility classes make styling quick and consistent.
          </p>
        </div>

      </div>
    </section>
  );
}
