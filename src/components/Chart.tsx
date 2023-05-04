import Swithcher from '../components/Switcher';
import { useAppSelector } from '../hooks/reduxHooks';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

const Chart = ({ setIsChart }) => {
  const preds = useAppSelector((state) => {
    return state.data.preds;
  });

  const preds2 = [];
  preds.map((item) => {
    preds2.push({ name: item[0], val: item[1] });
  });

  console.log('p2: ', preds2);

  return (
    <div
      className='border-cyan-600 border-2 rounded-xl bg-indigo-50 dark:bg-[#020e28] 
    grid grid-rows-[auto_auto_500px_auto_50px] justify-items-center h-full mx-36 xl:mx-[32rem] p-0'
    >
      <Swithcher />
      <h1 className='text-5xl font-semibold dark:text-gray-200'>Chart</h1>
      <ResponsiveContainer width='100%' height='100%'>
        <BarChart
          width={300}
          height={200}
          data={preds2}
          margin={{
            top: 5,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='val' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>

      <button
        className='h-16 w-28 border-1 rounded-3xl text-2xl bg-indigo-500 text-gray-200'
        onClick={() => setIsChart(false)}
      >
        Back
      </button>
    </div>
  );
};

export default Chart;
