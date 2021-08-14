import React from 'react';
import logo from "../../logo.svg";
import "./cover.styles.scss";
const Cover = ({children}) => {
    return(
        <div className="cover">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title">{children}</h1>
        </div>
    )
}

export default Cover;