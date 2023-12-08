import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  console.log('ok', imageUrl);
  return (
    <div className='flex justify-center items-center m-auto'>
      <div className='relative mt-2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
        <div className='bounding-box' style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
