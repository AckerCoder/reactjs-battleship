import React from 'react';
import "./custom-button.styles.scss"
const CustomButton = ({children}) => {
    return(
        <div className="custom-button">
            <button className="main-button">{children}</button>
        </div>
    )
}

export default CustomButton;