function Footer() {
    const facebook = "https://www.facebook.com/lawrenxceprieto";
    const linkedin = "https://www.linkedin.com/in/lawrenxce/";
    const github = "https://github.com/lawrenceprieto";
    return (
        <>
            <footer className="container text-center">
                <div className="col-lg-6 mx-auto">
                    <p>
                        Looking ahead, my goal is to continue developing my expertise 
                        in front end development and contribute to projects that make 
                        a positive impact. I'm excited about the possibilities in the 
                        tech world and am eager to explore new avenues for growth.
                    </p>
                    <ul className="justify-content-center list-unstyled d-flex border-top pt-3 pb-5">
                        <li className="ms-3"><a href={facebook} className="text-body-secondary" target="_blank"><i className="fa-xl fa-brands fa-facebook" style={{color: "#3b5998"}}></i></a></li>
                        <li className="ms-3"><a href={linkedin} className="text-body-secondary" target="_blank" ><i className="fa-xl fa-brands fa-linkedin" style={{color: "#0077b5"}}></i></a></li>
                        <li className="ms-3"><a href={github} className="text-body-secondary" target="_blank"><i className="fa-xl fa-brands fa-github" style={{color: "#171515"}}></i></a></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;