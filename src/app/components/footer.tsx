export default function Footer() {
  return (
    <footer className="bg-transparent text-alt-600 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} Hajoon Park. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
