
export default function Footer({ isLoading }) {
  if (isLoading) {
    return null; // Footer render footer while loading
  }

  return (
    <footer>
      <div className="text-center justify-center">
        <p>Copyrights &copy; by Developer Darshan 😎</p>
      </div>
    </footer>
  );
}
