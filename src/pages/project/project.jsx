import "./project.css"
import { useState } from "react"
import treelife from "../../assets/project-image/tree-life.gif"
import mini from "../../assets/project-image/mini-project.gif"
import capstone from "../../assets/project-image/capstone.gif"
import Card from "../../components/card"
import Modal from "react-bootstrap/Modal"

import html from "../../assets/tech-icon/html5.png"
import css from "../../assets/tech-icon/css3.png"
import javascript from "../../assets/tech-icon/javascript.png"
import react from "../../assets/tech-icon/react.png"
import bootstrap from "../../assets/tech-icon/bootstrap.png"


function Project() {

    const projects = [
        {
            "title": "Tree Life",
            "description": "Treelife is a website that aims to protecting trees",
            "thumbnail": treelife,
            "techs": [javascript, react, bootstrap],
            "github": "https://github.com/lawrenceprieto/tree-life?search=1",
            "demo": "https://lawrenceprieto.github.io/tree-life"
        },
        {
            "title": "Jennie's Pizza",
            "description": "This project is created using html, css and javascript",
            "thumbnail": mini,
            "github": "https://github.com/Ierie/jenniespizza?search=1",
            "demo": "https://ierie.github.io/jenniespizza/#home"
        },
        {
            "title": "CourseCraft",
            "description": "This project is created using react js for the frontend and laravel for the backend",
            "thumbnail": capstone
        },
    ];

    const [modalShow, setModalShow] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    function handleModal(project) {
        setSelectedProject(project);
        setModalShow(true);
        console.log(project);
    }

    function closeModal() {
        setSelectedProject(null);
        setModalShow(false);
    }


    return (
        <>
            <div className="project" id="project">
                <div className="d-flex align-items-center gap-3">
                    <div className="rectangle"></div>
                    <h1>PROJECT</h1>
                </div>

                <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-2">
                    {
                        projects.map((project, index) => (
                            <Card
                                key={index}
                                title={project.title}
                                description={project.description}
                                thumbnail={project.thumbnail}
                                modal={() => handleModal(project)}
                                // offcanvas={() => handleOffcanvas(project)}
                            />
                        ))
                    }
                </div>
            </div>
            
            <Modal 
                show={modalShow} onHide={closeModal}
                size="lg"
                backdrop="static"
                keyboard={false}
                dialogclassname="modal"
                centered>
                <Modal.Header closeButton dialogclassname="modal-header">
                    <Modal.Title>{selectedProject && selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex gap-3">
                        <img height="250px" width="450px" src={selectedProject && selectedProject.thumbnail} alt={selectedProject && selectedProject.title} />
                        <div className="">
                            <h3 style={{fontSize: "15px"}}>{selectedProject && selectedProject.description}</h3>
                            <h3 style={{fontSize: "15px"}}>tech used</h3>
                            <div className="d-flex gap-1">
                                {selectedProject && selectedProject.techs.map((tech, index) => (
                                        <img key={index} src={tech} alt={tech} style={{ height: "50px", width: "50px" }} />
                                    )) 
                                }
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer dialogclassname="modal-footer">
                    <a href={selectedProject && selectedProject.github} rel="noreferrer" target="_blank">Github</a>
                    <a href={selectedProject && selectedProject.demo} rel="noreferrer" target="_blank">Demo</a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Project