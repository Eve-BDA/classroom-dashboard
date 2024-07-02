import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import './Footer.css';

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="d-flex flex-row justify-content-center pt-5">
                <div>
                <a
                    className="btn rounded-pill mx-3"
                    id="socials"
                    href="#!"
                    role="button"
                    >
                    <FontAwesomeIcon className="fa-2x justify-content-center py-1" style={{color: '#95216A'}} icon={faPhone} />
                </a>
                </div>
            
                <p className="fs-2 mx-2">0333 40 4555</p>
            </div>

            <div className="container p-4 pb-0">
            <section className="m-4 d-flex flex-row justify-content-center">
                <div>
                <a
                    className="btn rounded-pill mx-2"
                    id="socials"
                    href="https://www.facebook.com/bdadyslexia"
                    role="button"
                    >
                        <FontAwesomeIcon className="fa-2x justify-content-center p-1" style={{color: '#4267B2'}} icon={faFacebookF} />
                </a>
                </div>
                <div>
                <a
                    className="btn rounded-pill mx-2"
                    id="socials"
                    href="https://twitter.com/BDAdyslexia"
                    role="button"
                    >
                        <FontAwesomeIcon className="fa-2x justify-content-center py-1" style={{color: '#000'}} icon={faXTwitter} />
                </a>
                </div>
                <div>
                <a
                    className="btn rounded-pill mx-2"
                    id="socials"
                    href="https://www.instagram.com/bdadyslexia/"
                    role="button"
                    >
                        <FontAwesomeIcon className="fa-2x justify-content-center py-1" style={{color: '#C13584'}} icon={faInstagram} />
                </a>
                </div>
                <div>
                <a
                    className="btn rounded-pill mx-2"
                    id="socials"
                    href="https://uk.linkedin.com/company/british-dyslexia-association"
                    role="button"
                    >
                        <FontAwesomeIcon className="fa-2x justify-content-center py-1" style={{color: '#0072B1'}} icon={faLinkedinIn} />
                </a>
                </div>
                <div>
                <a
                    className="btn rounded-pill mx-2"
                    id="socials"
                    href="https://www.youtube.com/channel/UC_VUqQhD2oS0Zi-H47v8NKg"
                    role="button"
                    >
                        <FontAwesomeIcon className="fa-2x justify-content-center py-1" style={{color: '#FF0000'}} icon={faYoutube} />
                </a>
                </div>
                </section>
            </div>

            <div className="copyright text-center p-3">
                <p className="fw-bold">© 2024 Copyright<br></br>
                <a className="text-white" href="https://www.bdadyslexia.org.uk/">British Dyslexia Association</a></p>
                <p className="small lh-sm">The British Dyslexia Association is a registered charity in England and Wales (289243).
                <br></br>Registered England and Wales as a company limited by guarantee (1830587).
                <br></br>Registered office: 1, Friar Street, Reading, England, RG1 1DA</p>
            </div>
        </footer>
    );
}

export default Footer;