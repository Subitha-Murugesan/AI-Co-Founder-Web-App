import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'TAM', value: 100, label: 'Total Available Market' },
  { name: 'SAM', value: 60, label: 'Serviceable Available' },
  { name: 'SOM', value: 25, label: 'Serviceable Obtainable' },
];

export function MarketSizeChart() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Market Size Overview</h3>
      
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
          <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="mt-4 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-indigo-600" />
            <span className="text-xs text-gray-600">
              <span className="font-semibold">{item.name}:</span> {item.label}
            </span>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 mt-4">
        Your addressable market shows <span className="font-semibold text-gray-900">medium-to-large potential</span> with clear path to capture market share.
      </p>
    </div>
  );
}
