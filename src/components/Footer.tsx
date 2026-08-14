export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-emerald-100 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold text-white">StärkenHandeln e.V.</p>
          <p className="text-sm text-emerald-300">Gemeinsam Stärken erkennen und handeln</p>
        </div>
        <div className="text-sm text-emerald-300">
          <p>© {new Date().getFullYear()} StärkenHandeln e.V.</p>
        </div>
      </div>
    </footer>
  );
}
