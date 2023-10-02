import "./contact.css"

function Contact() {
    return (
        <> 
            <div className="contact" id="contact">
                <div className="d-flex align-items-center gap-3 border-bottom mb-5">
                    <div className="rectangle"></div>
                    <h1>CONTACT</h1>
                </div>
                <div className="contact-content fs-5">
                    I'm always open to collaboration and new opportunities. 
                    Feel free to reach out to me here, <a href="mailto:keithprietolawrence@gmail.com" target="_parent">keithprietolawrence@gmail.com</a>. 
                    Let's work together to turn ideas into reality.
                </div>
            </div>
        </>
    );
}

export default Contact