export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Site Craft" className="h-8 w-8" />
          <span className="font-semibold text-lg">Site Craft</span>
        </a>
        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
          <a href="#" className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm">Sign up</a>
        </nav>
        <div className="md:hidden">
          {/* Minimal mobile affordance — expand later */}
          <button aria-label="Open menu" className="text-gray-700">☰</button>
        </div>
      </div>
    </header>
  );
}