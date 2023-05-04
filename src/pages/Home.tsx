import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { dataActions } from '../store/data-slice';
import Swithcher from '../components/Switcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const dispatch = useAppDispatch();
  /* const preds = useAppSelector((state) => {
    return state.data.preds;
  });
  const img = useAppSelector((state) => {
    return state.data.image;
  }); */

  // Effect for loading image and displaying it
  useEffect(() => {
    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const clickHandler = () => {
    return;
  };

  // Effect for requesting data from API
  useEffect(() => {
    if (!file) {
      return;
    }
    console.log(file);

    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);

    fetch('http://localhost:8080/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success! ', result);
        dispatch(dataActions.setPreds(result.result));
        //dispatch(dataActions.setImage(formData));
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, [file]);

  //console.log('Preds: ', preds);
  dispatch(dataActions.setImage(previewUrl));
  //console.log('Img: ', img);

  return (
    <div className='border-cyan-600 border-2 rounded-xl bg-indigo-50 dark:bg-[#020e28] grid justify-center justify-items-center h-full mx-36 xl:mx-[32rem] p-0'>
      <Swithcher />
      <h1 className='dark:text-gray-100 text-6xl text-center font-semibold '>
        Keen Skin
      </h1>
      <p className='text-2xl text-start dark:text-gray-300'>
        A skin lesion classifier
      </p>
      {!previewUrl && (
        <div className='shadow-2xl shadow-blue-700/20 dark:shadow-blue-300/20 max-h-96 h-[228px] w-[228px] border-2 border-blue-700 dark:border-blue-300 dark:bg-blue-950 rounded-xl'></div>
      )}
      {previewUrl && (
        <img
          className='max-h-96 object-contain border-2 border-blue-700 dark:border-blue-300 rounded-xl'
          src={previewUrl}
          alt='cancer-image'
        />
      )}
      {!previewUrl && (
        <label
          htmlFor='file'
          className='flex justify-center items-center mx-8 p-4 gap-3 rounded-3xl border border-gray-300 dark:border-gray-50 border-dashed bg-gray-50 dark:bg-gray-500 cursor-pointer h-20 w-52'
        >
          <FontAwesomeIcon icon={faFileArrowUp} size='2xl' />
          <div className='space-y-2'>
            <h4 className='text-base font-semibold text-gray-700 dark:text-gray-100'>
              Upload a file
            </h4>
            <span className='text-sm text-gray-500 dark:text-gray-100'>
              Max 2 MB
            </span>
          </div>
          <input
            className='file:display file:rounded-full file:bg-violet-50 hover:file:bg-violet-100 file:text-violet-700 cursor-pointer hidden'
            type='file'
            id='file'
            name='file'
            accept='image/*'
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      )}
      {previewUrl && (
        <Link to='result'>
          <button
            onClick={clickHandler}
            className='h-20 w-32 border-1 rounded-3xl text-2xl bg-indigo-500 text-gray-200'
          >
            Check
          </button>
        </Link>
      )}
      <p className='text-center px-5 dark:text-gray-200'>
        <p className='font-bold uppercase  text-red-700 dark:text-red-400'>
          Disclaimer:{' '}
        </p>
        This is a primary test application. Please check with your doctor for
        more information
      </p>
    </div>
  );
}

export default Home;
