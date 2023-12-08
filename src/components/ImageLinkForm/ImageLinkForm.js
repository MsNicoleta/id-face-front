import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className=' mt-6 mb-12 text-3xl'>
        {'Upload an image to detect a face.'} </p>
      <div className='my-4'>
        <div className='mx-auto form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <input className='shadow appearance-none mt-5 rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='text' onChange={onInputChange} placeholder='Image URL' />
          <button
            className='w-full mt-2 mb-4 shadow bg-yellow-500 bg-yellow text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline '
            onClick={onButtonSubmit}
          > Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
