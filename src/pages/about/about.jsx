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

function About() {
    
    const data = {
        hobbies: [
            {"icon": "fa-2x fa-solid fa-gamepad", "name": "games"}, 
            {"icon": "fa-2x fa-solid fa-clapperboard", "name": "movies"}, 
            {"icon": "fa-2x fa-solid fa-headphones", "name": "music"}, 
            {"icon": "fa-2x fa-sharp fa-solid fa-laptop-file", "name": "learning"},
        ],
        techs: [
            {"icon": html, "name": "HTML"},
            {"icon": css, "name": "CSS"}, 
            {"icon": javascript, "name": "JAVASCRIPT"}, 
            {"icon": react, "name": "REACT"}, 
            {"icon": bootstrap, "name": "BOOTSTRAP"}, 
        ] ,
        tools: [
            {"icon": adobe, "name": "ADOBE EXPRESS"},
            {"icon": canva, "name": "CANVA"}, 
            {"icon": clipchamp, "name": "CLIPCHAMP"}, 
        ]
    }

    return (
        <>
            <div className="about" id="about">
                <div className="d-flex align-items-center gap-3">
                    <div className="rectangle"></div>
                    <h1>ABOUT</h1>
                </div>
                <div className="d-flex gap-3 mobile">
                    <img src={image} className="image desk" alt="my-picture" />
                    <div className="">
                    <p className="">
                        Hello, Lawrence here, a junior front-end developer with a burning curiosity                        for all things tech-related. My journey into the world of web development began 
                        with a simple fascination for how websites worked.  I am always eager to learn 
                        new techniques and technologies. Every project I undertake is not just a task 
                        but an opportunity to expand my skill set and grow as a developer.
                    </p>
                    <h2 className="mob mtop">Hobbies and Interest</h2>
                    <div className="d-flex gap-1 center">
                        {
                            data.hobbies.map((hobby, index) => (
                                <div className="icon" key={index}>
                                    <i className={hobby.icon} style={{color: "white"}}></i>
                                    <h3 className="text-white" style={{fontSize: "18px"}}>{hobby.name}</h3>
                                </div> 
                            ))
                        }
                    </div>
                    </div>
                </div>
                
                <div className="d-flex align-items-center gap-3 center">
                    <div className="rectangle desk"></div>
                    <h2 className="mob mtop">Tech i used</h2>
                </div>
                <div className="d-flex flex-wrap gap-1 center">
                    {
                        data.techs.map((tech, index) => (
                            <div className="icon" key={index}>
                                <img src={tech.icon} alt="html" height="50px" width="50px" />
                                <span className="text-white">{tech.name}</span>
                            </div>
                        ))
                    }
                </div>

                <div className="d-flex align-items-center gap-1 center">
                    <div className="rectangle desk"></div>
                    <h2 className="mob mtop">Tool i used</h2>
                </div>
                <div className="d-flex flex-wrap gap-1 center">
                    {
                        data.tools.map((tech, index) => (
                            <div className="icon" key={index}>
                            <img src={tech.icon} alt="html" height="50px" width="50px" />
                            <span className="text-white">{tech.name}</span>
                        </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default About;