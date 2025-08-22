export default function Footer() {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800">
      <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
        © {new Date().getFullYear()} NextAuth Products. All rights reserved.
      </p>
    </footer>
  );
}
