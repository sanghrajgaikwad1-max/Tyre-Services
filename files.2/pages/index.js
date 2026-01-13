import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Craft fast, modern websites — effortlessly
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A minimal, responsive Next.js + Tailwind starter. Built for speed,
            accessibility, and easy customization.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#features"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
            >
              Explore features
            </a>
            <a
              href="#get-started"
              className="inline-block border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition"
            >
              Get started
            </a>
          </div>
        </section>

        <section id="features" className="mt-16 grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Fast dev experience</h3>
            <p className="text-gray-600">Next.js dev server, file-based routing, and instant feedback.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Responsive by default</h3>
            <p className="text-gray-600">Tailwind utility classes make responsive design simple.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Easy deploy</h3>
            <p className="text-gray-600">Deploy with Vercel, Netlify, or any static host supporting Next.js.</p>
          </div>
        </section>

        <section id="get-started" className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to build?</h2>
          <p className="text-gray-600 mb-6">Customize the content, add pages, and deploy to your provider.</p>
          <a
            href="/about"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Create your site
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}