export default function ComparisonTable({ headers, rows, caption }) {
  if (!headers?.length || !rows?.length) return null;

  return (
    <div className="mt-6">
      <div className="overflow-x-auto rounded-2xl border border-gray-100">
        <table className="w-full text-sm text-left border-collapse min-w-[560px]">
          <caption className="sr-only">{caption || 'Tabela comparativa'}</caption>
          <thead>
            <tr className="bg-gray-50">
              {headers.map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={`px-4 sm:px-5 py-3.5 font-semibold text-gray-900 ${i === 0 ? '' : 'text-brand-700'}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-gray-100">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 sm:px-5 py-3.5 text-gray-600 leading-relaxed ${ci === 0 ? 'font-medium text-gray-800' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
