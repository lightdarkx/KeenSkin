import Swithcher from '../components/Switcher';
import { useAppSelector } from '../hooks/reduxHooks';
import { predsDetails } from '../utils/helper';

const Chart = ({ setIsChart, obj }) => {
  const preds = useAppSelector((state) => {
    return state.data.preds;
  });
  console.log(typeof obj.name);
  const details = predsDetails(obj.name);
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
      <h1 className='-mt-5 mb-5 text-6xl font-semibold dark:text-gray-200'>
        Details
      </h1>
      <p className='pt-4 px-6 dark:text-gray-300 text-justify'>{details}</p>
      <button
        className='-mt-10 h-16 w-28 border-1 rounded-3xl text-2xl bg-indigo-500 text-gray-200'
        onClick={() => setIsChart(false)}
      >
        Back
      </button>
    </div>
  );
};

export default Chart;
