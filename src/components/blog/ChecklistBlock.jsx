import { CheckCircle2 } from 'lucide-react';

export default function ChecklistBlock({ items }) {
  if (!items?.length) return null;

  return (
    <ul className="mt-5 space-y-3" role="list">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-gray-600 leading-relaxed">
          <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
