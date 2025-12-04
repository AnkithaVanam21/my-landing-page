export default function Footer() {
  return (
    <footer id="contact" className="w-full py-8 mt-20 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">
          © 2025 <span className="text-blue-400">MyLanding</span>. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a className="hover:text-white cursor-pointer">Privacy Policy</a>
          <a className="hover:text-white cursor-pointer">Terms</a>
          <a className="hover:text-white cursor-pointer">Contact</a>
        </div>

      </div>
    </footer>
  );
}
