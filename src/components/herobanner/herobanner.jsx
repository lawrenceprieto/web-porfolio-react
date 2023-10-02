import "./herobanner.css"
import Typewriter from 'typewriter-effect'

function Herobanner() {
    return (
        <>
            <div className="home" id="home">
                <div className="">
                    <div className="text-uppercase pb-2" style={{fontSize: "20px", letterSpacing: "3px" }}>Hello There!</div>
                    <div className="text-uppercase fw-bold" style={{fontSize: "40px", letterSpacing: "5px"}}>i'm Lawrence, a junior developer</div>
                    <div className="text-secondary" style={{fontSize: "40px", letterSpacing: "5px"}}>
                        <Typewriter
                            options={{
                            strings: ['Front-End Developer', 'Data Entry Specialist', "Web Researcher"],
                            pauseFor: (300),
                            autoStart: true,
                            loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className="d-flex gap-3 mt-5">
                    <button className="btn btn-outline-secondary" style={{borderRadius: "0%"}}>Contact</button>
                    <button className="btn btn-outline-secondary" style={{borderRadius: "0%"}}>Resume</button>
                </div>
            </div>
        </>
    );
}

export default Herobanner;