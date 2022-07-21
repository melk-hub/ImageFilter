import React from 'react';
import '../css/App.css';

const Diplay = ({url}) => {  
    return <div className="flex items-center p-4 m-2 w-auto justify-center">
        <img src={url} className="max-h-[200px]" alt="" />
    </div>
}

export default Diplay;