import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { month: 'Jan', interest: 45 },
  { month: 'Feb', interest: 52 },
  { month: 'Mar', interest: 58 },
  { month: 'Apr', interest: 65 },
  { month: 'May', interest: 71 },
  { month: 'Jun', interest: 78 },
];

export function TrendChart() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Trend & Growth Signal</h3>
        <div className="flex items-center gap-1 text-emerald-600">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-semibold">Growing</span>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" stroke="#6b7280" fontSize={12} />
          <YAxis stroke="#6b7280" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '12px',
            }}
          />
          <Line
            type="monotone"
            dataKey="interest"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <p className="text-sm text-gray-600 mt-4">
        Market interest has grown <span className="font-semibold text-emerald-600">+73%</span> over the past 6 months, indicating strong momentum and timing.
      </p>
    </div>
  );
}
