import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner';



const Spinner = (props) => {

    return(
        <TailSpin  {...props}/>
    )
}

export default Spinner;
