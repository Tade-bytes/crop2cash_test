import React from 'react';

const Button =({children, classname,styles})=>{
    return(
        <button style={styles}  className={classname } >{children}</button>
    )
}
export default Button;