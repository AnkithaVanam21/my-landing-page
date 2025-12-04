export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
        Build Stunning Landing Pages
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Create modern, responsive, and fast landing pages using Next.js and Tailwind CSS with ease.
      </p>

      <button className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
}
