import "./header.css"
import logo from "../../assets/logo.png"

function Header() {
    const facebook = "https://www.facebook.com/lawrenxceprieto";
    const linkedin = "https://www.linkedin.com/in/lawrenxce/";
    const github = "https://github.com/lawrenceprieto";
    return (
        <>
            <div className="header">
                <div className="navigation">
                    <span style={{fontSize: "30px", letterSpacing: "7px", fontWeight: "bolder", color: "gainsboro"}}>L.dev</span>
                    <div className="desktop-navigation">
                        <span className="navi"><a href="#home" className="h-u-a">Home</a></span>
                        <span className="navi"><a href="#about" className="h-u-a">About</a></span>
                        <span className="navi"><a href="#project" className="h-u-a">Project</a></span>
                        <span className="navi"><a href="#contact" className="h-u-a">Contact</a></span>
                        <span className="navi"><a href="https://lawrenceprieto.github.io/blogs" className="h-u-a" rel="noreferrer" target="_blank">Blogs</a></span>
                    </div>
                    <div className="m-nav">
                        <input id="checkbox2" type="checkbox" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" />
                        <label class="toggle toggle2" for="checkbox2">
                            <div id="bar4" class="bars"></div>
                            <div id="bar5" class="bars"></div>
                            <div id="bar6" class="bars"></div>
                        </label>
                    </div>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item navi py-1 pt-3"><a class="nav-link h-u-a" href="#home">Home</a></li>
                        <li class="nav-item navi py-1"><a class="nav-link h-u-a" href="#about">About</a></li>
                        <li class="nav-item navi py-1"><a class="nav-link h-u-a" href="#project">Project</a></li>
                        <li class="nav-item navi py-1"><a class="nav-link h-u-a" href="#contact">Contact</a></li>
                        <li class="nav-item navi py-1 pb-5"><a class="nav-link h-u-a" href="https://lawrenceprieto.github.io/blogs" target="_blank">Blog</a></li>
                    </ul>
                    <ul className="justify-content-center list-unstyled d-flex pt-3 pb-3" style={{backgroundColor: "gainsboro", boxShadow: "0px 4px 7px 1px #000"}}>
                        <li className="ms-3"><a href={facebook} className="text-body-secondary" target="_blank"><i className="fa-xl fa-brands fa-facebook" style={{color: "#3b5998"}}></i></a></li>
                        <li className="ms-3"><a href={linkedin} className="text-body-secondary" target="_blank" ><i className="fa-xl fa-brands fa-linkedin" style={{color: "#0077b5"}}></i></a></li>
                        <li className="ms-3"><a href={github} className="text-body-secondary" target="_blank"><i className="fa-xl fa-brands fa-github" style={{color: "#171515"}}></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Header