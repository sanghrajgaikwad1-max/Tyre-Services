export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-6 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Site Craft. All rights reserved.</p>
      </div>
    </footer>
  );
}