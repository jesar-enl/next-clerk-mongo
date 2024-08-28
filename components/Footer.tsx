export default function Footer() {
  return (
    <div className="rounded-b-lg bg-cyan-950 text-white shadow-md">
      <div className="mx-auto max-w-screen-xl p-4">
        <span className="block text-sm text-center">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
