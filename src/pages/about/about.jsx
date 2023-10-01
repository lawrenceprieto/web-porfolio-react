import "./about.css"
import image from "../../assets/picture.jpg"
import html from "../../assets/tech-icon/html5.png"
import css from "../../assets/tech-icon/css3.png"
import javascript from "../../assets/tech-icon/javascript.png"
import react from "../../assets/tech-icon/react.png"
import bootstrap from "../../assets/tech-icon/bootstrap.png"
import adobe from "../../assets/tool-icon/adobe-express.jpg"
import canva from "../../assets/tool-icon/canva.png"
import clipchamp from "../../assets/tool-icon/clipchamp.png"
import excel from "../../assets/data-icon/excel.png"
import word from "../../assets/data-icon/word.png"

function About() {
    
    const data = {
        hobbies: [
            {"icon": "fa-2x fa-sharp fa-solid fa-laptop-file", "name": "Learning"},
            {"icon": "fa-2x fa-solid fa-clapperboard", "name": "Movies"}, 
            {"icon": "fa-2x fa-solid fa-headphones", "name": "Music"},
            {"icon": "fa-2x fa-solid fa-gamepad", "name": "Games"}, 
        ],
        techs: [
            {"icon": html, "name": "HTML"},
            {"icon": css, "name": "CSS"}, 
            {"icon": javascript, "name": "Javascript"}, 
            {"icon": react, "name": "React"}, 
            {"icon": bootstrap, "name": "Bootstrap"}, 
        ],
        tools: [
            {"icon": adobe, "name": "Adobe Express"},
            {"icon": canva, "name": "Canva"}, 
            {"icon": clipchamp, "name": "Clipchamp"}, 
        ],
        entrys: [
            {"icon": excel, "name": "Excel"},
            {"icon": word, "name": "Word"}
        ]
    }

    return (
        <>
            <div className="about" id="about">
                <div className="d-flex align-items-center gap-3 border-bottom mb-5">
                    <div className="rectangle"></div>
                    <h1>ABOUT</h1>
                </div>
                <div className="d-flex gap-3 mobile">
                    <img src={image} className="image desk" alt="my-picture" />
                    <div className="">
                    <p className="pb-1" style={{fontSize: "17px"}}>
                        Hello, Lawrence here, a junior front-end developer with a burning curiosity                        for all things tech-related. My journey into the world of web development began 
                        with a simple fascination for how websites worked.  I am always eager to learn 
                        new techniques and technologies. Every project I undertake is not just a task 
                        but an opportunity to expand my skill set and grow as a developer.
                    </p>
                    <h3 className="mob mtop" style={{color: "#444444"}}>Interest and Hobbies</h3>
                    <div className="d-flex flex-wrap gap-1 center">
                        {
                            data.hobbies.map((hobby, index) => (
                                <div className="icon" key={index}>
                                    <i className={hobby.icon} style={{color: "white"}}></i>
                                    <h3 className="mt-1" style={{fontSize: "17px", color: "#b8b8b8"}}>{hobby.name}</h3>
                                </div> 
                            ))
                        }
                    </div>
                    </div>
                </div>

                <div className="d-flex flex-wrap gap-4 mt-4 pt-3">
                    <div className="">
                        <h3 className="mob mtop" style={{color: "#444444"}}>Development tool i used</h3>
                        <div className="d-flex flex-wrap gap-1 center">
                            {
                                data.techs.map((tech, index) => (
                                    <div className="icon" key={index}>
                                        <img src={tech.icon} alt="html" height="50px" width="50px" />
                                        <span className="mt-1" style={{color: "#b8b8b8"}}>{tech.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="">
                        <h3 className="mob mtop" style={{color: "#444444"}}>Editing tool i used</h3>
                        <div className="d-flex flex-wrap gap-1 center">
                            {
                                data.tools.map((tool, index) => (
                                    <div className="icon" key={index}>
                                    <img src={tool.icon} alt="html" height="50px" width="50px" />
                                    <span className="mt-1" style={{color: "#b8b8b8"}}>{tool.name}</span>
                                </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="">
                        <h3 className="mob mtop" style={{color: "#444444"}}>Data entry tool i used</h3>
                        <div className="d-flex flex-wrap gap-1 center">
                            {
                                data.entrys.map((entry, index) => (
                                    <div className="icon" key={index}>
                                    <img src={entry.icon} alt="html" height="50px" width="50px" />
                                    <span className="mt-1" style={{color: "#b8b8b8"}}>{entry.name}</span>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;