import React from "react";
const Button = (props) => {
    return (
        <a
            className={props.className}
            href={props.url}
            target={props.target}
            download
        >
            <span className="btn-text">{props.text}</span>
            <span className="btn-icon">
                <i className={props.icon}></i>
            </span>
        </a>
    );
};

export default Button;
