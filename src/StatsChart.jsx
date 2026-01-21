import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: '00:00', traffic: 400 },
  { name: '04:00', traffic: 300 },
  { name: '08:00', traffic: 900 },
  { name: '12:00', traffic: 1500 },
  { name: '16:00', traffic: 1200 },
  { name: '20:00', traffic: 1800 },
  { name: '23:59', traffic: 1100 },
];

const StatsChart = () => {
  return (
    <div style={{ width: '100%', height: 250, backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '10px' }}>
      <h4 style={{ textAlign: 'center', marginBottom: '10px' }}>Umumiy tarmoq yuklamasi (Gbps)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="traffic" stroke="#8884d8" fillOpacity={1} fill="url(#colorTraffic)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;