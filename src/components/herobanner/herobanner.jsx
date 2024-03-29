import "./herobanner.css"
import TypewriterComponent from "typewriter-effect";

function Herobanner() {
    return (
        <>
            <div className="container-fluid home" id="home">
                <div className="d-flex justify-content-center flex-column">
                    <div className="text-uppercase pb-2" style={{fontSize: "20px", letterSpacing: "3px" }}>Hello There!</div>
                    <div className="text-uppercase fw-bold heading">i'm Lawrence, a junior developer</div>
                    <div className="text-secondary sub-head">
                        <TypewriterComponent
                            options={{
                            strings: ['Front-End Developer', 'Data Entry Specialist', "Web Researcher"],
                            pauseFor: (300),
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </div>
                </div>
                {/* <div className="d-flex gap-3 mt-5">
                    <button className="btn btn-outline-secondary px-4" style={{borderRadius: "0%", borderColor: "gainsboro"}}><a style={{textDecoration: "none", color: "gainsboro"}} href="#contact">Contact</a></button>
                    <button className="btn btn-outline-secondary px-4" style={{borderRadius: "0%", borderColor: "gainsboro", color: "gainsboro"}}>Resume</button>
                </div> */}
            </div>
        </>
    );
}

export default Herobanner;