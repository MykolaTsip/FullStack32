import {useRef} from 'react';
import { createPortal } from 'react-dom';

import { Port } from './Portt'; 

export const Text = () => {
    const tagP = useRef();

    console.log(tagP);

    // createPortal(<Port/>, document.getElementById('hell'))

    return (
    <>
        dfslgmsf
        <p ref={tagP}>
            dfsdmgg
            { createPortal(<Port/>, document.getElementById('hell')) }
        </p>
        <div> dslgs gkmfd</div>
    </>
)}