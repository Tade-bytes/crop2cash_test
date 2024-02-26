import React from 'react';

const Button =({children, className})=>{
    return(
        <button  className={`${className} m-1 p-2 border-solid border-2 font-Helvetica`} >{children}</button>
    );
}
export default Button;