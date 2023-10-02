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
import laravel from "../../assets/tech-icon/laravel.png"
import mysql from "../../assets/tech-icon/mysql.png"
import php from "../../assets/tech-icon/php.png"


function Project() {

    const projects = [
        {
            "title": "Tree Life",
            "description": "Treelife is a website that aims to protecting trees",
            "thumbnail": treelife,
            "techs": [javascript, react, bootstrap],
            "github": "https://github.com/lawrenceprieto/tree-life?search=1",
            "demo": ""
        },
        {
            "title": "React",
            "description": "This project is created using html, css and javascript",
            "thumbnail": mini,
            "techs": [html, css, javascript],
            "github": "https://github.com/Ierie/jenniespizza?search=1",
            "demo": ""
        },
        {
            "title": "CourseCraft",
            "description": "This project is created ushis project is created using react js for the frontend and laravel for the backending react js for the frontend and laravel for the backendhis project is created using react js for the frontend and laravel for the backend",
            "thumbnail": capstone,
            "techs": [javascript, react, laravel , mysql, php, bootstrap],
            "github": "https://github.com/KeLsGaming23/CourseCraft?search=1",
            "demo": "null"
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
                <div className="d-flex align-items-center gap-3 border-bottom mb-5">
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
                <Modal.Body dialogclassname="modal-body">
                    <div className="d-flex gap-3 pb-3 p-2 screen">
                        <img style={{border: "2px solid black"}} height="250px" width="auto" src={selectedProject && selectedProject.thumbnail} alt={selectedProject && selectedProject.title} />
                        <div className="d-flex flex-column justify-content-between">
                            <div className="">
                            <h3 style={{fontSize: "17px" ,fontWeight: "bold"}}>Project description:</h3>
                            <p className="mb-4" style={{fontSize: "16px"}}>{selectedProject && selectedProject.description}</p>
                            <h3 style={{fontSize: "17px", fontWeight: "bold"}}>Project tech used:</h3>
                            <div className="d-flex flex-wrap gap-1 mb-5">
                                {selectedProject && selectedProject.techs.map((tech, index) => (
                                        <img key={index} src={tech} alt={tech} style={{ height: "50px", width: "50px" }} />
                                    )) 
                                }
                            </div>
                            </div>
                            <div className="d-flex gap-3">
                                <a className="button text-center w-50" href={selectedProject && selectedProject.github} rel="noreferrer" target="_blank"><span>Github</span></a>
                                <a className="button text-center w-50" href={selectedProject && selectedProject.demo} rel="noreferrer" target="_blank"><span>Demo</span></a>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer dialogclassname="modal-footer">
                    <a className="button text-center" href={selectedProject && selectedProject.github} rel="noreferrer" target="_blank">Github</a>
                    <a className="button text-center" href={selectedProject && selectedProject.demo} rel="noreferrer" target="_blank">Demo</a>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}

export default Project