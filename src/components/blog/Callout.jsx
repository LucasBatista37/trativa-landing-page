export default function Callout({ stat, label }) {
  return (
    <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
      {stat && (
        <span className="flex-shrink-0 text-3xl sm:text-4xl font-black text-brand-600 tabular-nums leading-none">
          {stat}
        </span>
      )}
      <p className="text-sm sm:text-base text-brand-900 leading-relaxed font-medium">
        {label}
      </p>
    </div>
  );
}
