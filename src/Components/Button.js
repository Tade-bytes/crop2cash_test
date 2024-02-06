import React from 'react';

const Button =({children, classname,styles})=>{
    return(
        <button class="border-solid border-1 round-1"  className={classname } >{children}</button>
    )
}
export default Button;