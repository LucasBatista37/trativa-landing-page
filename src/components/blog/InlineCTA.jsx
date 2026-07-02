import { ArrowRight } from 'lucide-react';

export default function InlineCTA({ heading, text, buttonLabel, buttonHref }) {
  return (
    <div className="mt-8 rounded-2xl bg-gray-900 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
      <div>
        <p className="text-white font-semibold text-base sm:text-lg mb-1.5">{heading}</p>
        {text && (
          <p className="text-gray-300 text-sm leading-relaxed max-w-xl">{text}</p>
        )}
      </div>
      <a
        href={buttonHref}
        className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm px-5 py-3 rounded-xl transition-all hover:bg-gray-100 flex-shrink-0"
      >
        {buttonLabel}
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </div>
  );
}
