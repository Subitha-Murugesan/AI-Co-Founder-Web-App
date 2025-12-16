import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const data = [
  { name: 'Students', value: 25, color: '#6366f1' },
  { name: 'Professionals', value: 40, color: '#8b5cf6' },
  { name: 'Small Businesses', value: 25, color: '#ec4899' },
  { name: 'Enterprises', value: 10, color: '#f59e0b' },
];

export function AudienceBreakdownChart() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-4">Target Audience Breakdown</h3>
      
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      
      <div className="grid grid-cols-2 gap-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-gray-600">
              {item.name} <span className="font-semibold">{item.value}%</span>
            </span>
          </div>
        ))}
      </div>
      
      <p className="text-sm text-gray-600 mt-4">
        <span className="font-semibold text-gray-900">Professionals</span> represent your primary audience, offering clear targeting opportunities.
      </p>
    </div>
  );
}
