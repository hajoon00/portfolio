export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 bg-surface py-8">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Hajoon Park. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
