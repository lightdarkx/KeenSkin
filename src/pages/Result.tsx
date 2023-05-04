import Swithcher from '../components/Switcher';
import { useAppSelector } from '../hooks/reduxHooks';
import { Link } from 'react-router-dom';
import Chart from '../components/Chart';
import { useState } from 'react';
import { max2d } from '../utils/helper';

const Result = () => {
  const [isChart, setIsChart] = useState(false);
  const preds = useAppSelector((state) => {
    return state.data.preds;
  });
  const img = useAppSelector((state) => {
    return state.data.image;
  });

  const preds2 = max2d(preds);

  console.log('p2: ', preds2);
  console.log('p1: ', preds);

  return (
    <>
      {!isChart && (
        <div className='border-cyan-600 border-2 rounded-xl bg-indigo-50 dark:bg-[#020e28] grid justify-center justify-items-center h-full mx-36 xl:mx-[32rem] p-0'>
          <Swithcher />
          <h1 className='-mt-20 mb-20 text-6xl font-semibold dark:text-gray-200'>
            Results
          </h1>

          {img && (
            <img
              className='-mt-16 shadow-2xl shadow-blue-700/20 dark:shadow-blue-300/20 max-h-96 h-[228px] w-[228px] border-2 border-blue-700 dark:border-blue-300 dark:bg-blue-950 rounded-xl'
              src={img}
              alt='cancer-image'
            />
          )}
          <div>
            <p className='text-red-700 dark:text-red-400 text-xl text-center uppercase font-semibold'>
              prediction:
            </p>
            <p className='dark:text-gray-300 text-xl text-center'>
              {preds2.name}: {preds2.val}%
            </p>
          </div>
          <div>
            <Link to='/'>
              <button className='mr-2 h-16 w-28 border-1 rounded-3xl text-2xl bg-indigo-500 text-gray-200'>
                Back
              </button>
            </Link>
            <button
              onClick={() => setIsChart(true)}
              className='ml-2 h-16 w-28 border-1 rounded-3xl text-2xl bg-indigo-500 text-gray-200'
            >
              Details
            </button>
          </div>
        </div>
      )}
      {isChart && <Chart setIsChart={setIsChart} obj={preds2} />}
    </>
  );
};

export default Result;
