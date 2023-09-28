import "./header.css"

function Header() {
    return (
        <>
            <div className="navigation">
                <a href="#home"><img src="" alt="mypicture" className="mypicture" /></a>
                <div className="desktop-navigation">
                    <li><a href="#home" className="box">Home</a></li>
                    <li><a href="#about" className="box">About</a></li>
                    <li><a href="#project" className="box">Project</a></li>
                    <li><a href="#contact" className="box">Contact</a></li>
                    <li><a href="https://lawrenceprieto.github.io/blogs" rel="noreferrer" target="_blank" className="box">Blogs</a></li>
                </div>
            </div>
        </>
    );
}

export default Header