import React from 'react';
import "./custom-input.styles.scss"

const CustomInput = ({children, label, ...otherProps}) => {
    return(
        <div className="custom-input">
            {
                label?<span className="label">{label}</span>:null
            }
            <input {...otherProps}>{children}</input>
        </div>
    )
}

export default CustomInput;