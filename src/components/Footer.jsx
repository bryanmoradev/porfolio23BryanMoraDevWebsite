import React from "react";
import "./footer.css";
import github from "/public/img/icons8-github-50.png";
import linkedin from "/public/img/icons8-linkedin-50.png";
import wpp from "/public/img/icons8-whatsapp-50.png";









const Footer=()=>{
    return (
        <div className="footer" id="social">
            <div className="sb_footer section_padding">
                <div className="sb_footer_links">
                <div className="sb_footer-links-div">
                    <h4>Social</h4>
                    <div className="socialMedia">
                        <p><a href="https://github.com/bryanmoradev" target="_blank" rel="noopener noreferrer"><img src={github} alt="logo-github"></img></a></p>
                        
                        <p><a href="https://www.linkedin.com/in/bryan-mora-901976265/" target="_blank" rel="noopener noreferrer"><img src={linkedin}alt="logo-linkedin"></img></a></p>
                        
                        <p><a href="https://wa.me/593998292682?/Hola-es-un-placer-atenderle." target="_blank" rel="noopener noreferrer"><img src={wpp} alt="logo-Whatsapp"></img></a></p>
                    </div>  
                </div>
                <div className="sb_footer-links-div">
                    <h4>Services</h4>
                    <a href="/web"></a>
                    <p>Web development</p>
                    <a href="/web"></a>
                    <p>UX | UI Design </p>
                    <a href="/web"></a>
                    <p>Multimedia Art</p>
                </div>
                <div className="sb_footer-links-div">
                    <h4>Contact</h4>
                    <p><a href="./public/img/CV-Bryan-Mora-dev.pdf" download>Résumé</a></p>
                    
                    <p><a href="https://www.linkedin.com/in/bryan-mora-901976265/">Linkedin</a></p>
                    
                    <p><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcRzBxtbwTgzmtXbRRJwvnXgsRvvDlmNXQFlRtjNtfBrJLKtHmHqDrvWTvXGhvFSzznkgvCQc" target="_blank" rel="noopener noreferrer">negociosdigitalec@gmail.com</a></p>
                </div>
                </div>
                <hr></hr>
                 <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>@{new Date().getFullYear()}BryanMoraDev. All right reserved.</p>
                    </div>
                   
                 </div>
            </div>
    </div>
    )
}
export default Footer;