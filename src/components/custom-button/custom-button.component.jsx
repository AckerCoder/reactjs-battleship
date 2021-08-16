import React from 'react';
import "./custom-button.styles.scss"
const CustomButton = ({children, main, setting, label, ...otherProps}) => {
    return(
        <div className="custom-button">
            {
                label?<span className="label">{label}</span>:null
            }
            <button className={`${main?  'main':''} ${setting?  'setting':''}`} {...otherProps}>{children}</button>
        </div>
    )
}

export default CustomButton;