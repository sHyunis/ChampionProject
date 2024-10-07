export default function Footer() {
  return (
    <footer className="text-center mt-8 mb-8 font-korean">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} sHyunis. All rights reserved.
      </p>
      <p className="text-gray-600 text-sm">Designed by sHyunis</p>
    </footer>
  );
}
