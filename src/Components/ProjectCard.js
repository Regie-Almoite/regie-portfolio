import React from "react";
import Button from "./Button";

const ProjectCard = (props) => {
    return (
        <div className="card">
            <a className="card-img" href={props.projectURL} target="_blank">
                <span className="img-text" href="">
                    Go to Website
                </span>
                <img src={props.imgURL} />
            </a>
            <div className="card-body">
                <div>
                    <h4>{props.title}</h4>
                    <h5>Languages</h5>
                    <div className="techs">
                        {props.techs.map((tech, key) => {
                            return <p key={key}>{tech}</p>;
                        })}
                    </div>
                </div>
                <div className="card-button">
                    <Button
                        className="repoBtn button"
                        url={props.projectRepoURL}
                        text="REPOSITORY"
                        icon="fa-brands fa-github"
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
