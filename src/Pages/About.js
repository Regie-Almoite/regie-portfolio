import React from "react";
import html5Icon from "../Assets/images/html5-icon.png";
import cssIcon from "../Assets/images/css-icon.png";
import javascriptIcon from "../Assets/images/js-icon.png";
import bootstrapIcon from "../Assets/images/bootstrap-icon.png";
import sassIcon from "../Assets/images/sass-icon.png";
import reactIcon from "../Assets/images/react-icon.png";
import nodeIcon from "../Assets/images/node-icon.png";
import Button from "../Components/Button";
import Icon from "../Components/Icon";

const About = () => {
    return (
        <div className="about-container" id="about">
            <h2>ABOUT</h2>
            <div className="about-body">
                <div className="leftAbout-container">
                    <h3>Introduction</h3>
                    <p className="about-text">
                        I work on projects in front end web development,
                        websites and web apps.
                    </p>
                    <p className="about-text">
                        When I'm not writing code, I watch online courses in
                        youtube about front end web development. I also enjoy
                        watching one piece and read manga.
                    </p>
                    <Button
                        className="downloadCV button"
                        url="https://drive.google.com/uc?id=1XUwmUbQ9Z-YbVucrjMiIs6_tuug-sWY4&export=download"
                        text="DOWNLOAD CV"
                        icon="fa-solid fa-download"
                    />
                </div>
                <div className="rightAbout-container">
                    <h3>Technology Stack</h3>
                    <div className="techStack-container">
                        <Icon src={html5Icon} name="html5" />
                        <Icon src={cssIcon} name="css" />
                        <Icon src={javascriptIcon} name="javascript" />
                        <Icon src={bootstrapIcon} name="bootstrap" />
                        <Icon src={sassIcon} name="sass" />
                        <Icon src={reactIcon} name="react" />
                        <Icon src={nodeIcon} name="node" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
