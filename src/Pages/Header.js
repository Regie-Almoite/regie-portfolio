import React from "react";
import myImage from "../Assets/images/myImage.png";
import Button from "../Components/Button";

const Header = () => {
    return (
        <div className="header-container" id="header">
            <div className="leftIntro-container">
                <h1>
                    Hello, I'am <span>Regienald Almoite</span>
                </h1>
                <p>I'am a Front End Web Developer based in Rosario, La Union</p>
                <div className="button-container">
                    <Button
                        className="button downloadCV"
                        url="https://drive.google.com/uc?id=1XUwmUbQ9Z-YbVucrjMiIs6_tuug-sWY4&export=download"
                        text="DOWNLOAD CV"
                        icon="fa-solid fa-download"
                        target="_blank"
                    />
                    <Button
                        className="button goToProject"
                        url="#projects"
                        text="GO TO PROJECTS"
                        icon="fa-solid fa-briefcase"
                        target="_self"
                    />
                </div>
            </div>
            <div className="rightIntro-container">
                <div className="image-container">
                    <img className="my-image" src={myImage}></img>
                </div>
            </div>
        </div>
    );
};

export default Header;
