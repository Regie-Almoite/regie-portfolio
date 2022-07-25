import React from "react";
const Icon = (props) => {
    return (
        <div className="icon-container">
            <img src={props.src} alt={`${props.name} icon`} />
        </div>
    );
};

export default Icon;
