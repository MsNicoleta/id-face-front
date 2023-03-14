import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3'>
                  {'This magic Brain will detect faces in your pictures. Give it a try!'}
            </p>
            &nbsp;
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className=' f4 pa2 w-75 center' type='tex' onChange={onInputChange}/>
                    &nbsp;
                    <button
                        className='w-23 grow br2 f4 link ph3 pv2 dib white bg-gold ba b--white-025'
                        onClick={onButtonSubmit}
                    > Detect</button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm;