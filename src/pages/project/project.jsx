import "./project.css"
import { useState } from "react"
import treelife from "../../assets/project-image/tree-life.gif"
import mini from "../../assets/project-image/mini-project.gif"
import capstone from "../../assets/project-image/capstone.gif"
import Card from "../../components/card"
import Modal from "react-bootstrap/Modal"


function Project() {

    const projects = [
        {
            "title": "Tree Life",
            "description": "This is our mini-project, i created a multi web page porfolio using html css and javascript",
            "thumbnail": treelife,
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
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject && selectedProject.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={selectedProject && selectedProject.thumbnail} alt={selectedProject && selectedProject.title} />
                    <h2>{selectedProject && selectedProject.description}</h2>
                </Modal.Body>
                <Modal.Footer>
                    <a href={selectedProject && selectedProject.github} rel="noreferrer" target="_blank">Github</a>
                    <a href={selectedProject && selectedProject.demo} rel="noreferrer" target="_blank">Demo</a>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Project