import React from "react";
import ProjectCard from "../Components/ProjectCard";

import tripleR from "../Assets/images/TripleR.png";
import parogie from "../Assets/images/parogie.png";

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <h2>PROJECTS</h2>
            <h3>Bootcamp projects I worked on</h3>
            <div className="projects">
                <ProjectCard
                    imgURL={parogie}
                    title="PAROGIE"
                    projectURL="https://regie-almoite.github.io/Parogie/"
                    projectRepoURL="https://github.com/Regie-Almoite/Parogie"
                    techs={["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT"]}
                />
                <ProjectCard
                    imgURL={tripleR}
                    title="TRIPLE R FASTFOOD"
                    projectURL="https://regie-almoite.github.io/TripleR/"
                    projectRepoURL="https://github.com/Regie-Almoite/TripleR"
                    techs={["HTML", "CSS", "BOOTSTRAP"]}
                />
            </div>
        </div>
    );
};

export default Projects;
