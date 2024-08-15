import './Footer.css'
const Footer = () => {
    return <>

        <footer>
            <div className="main-div">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="navigation-links" >
                                <p>
                                    <a href="#">About</a>
                                </p>
                                <p>.</p>
                                <p>
                                    <a href="#">Contact</a>
                                </p>
                                <p>.</p>
                                <p>
                                    <a href="#">Terms Of Use</a>
                                </p>
                                <p>.</p>
                                <p>
                                    <a href="#">Privacy Policy</a>
                                </p>
                            </div>
                            <div className="copyright">
                                <p>© Your Website 2023. All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="social-media-link">
                                <p>
                                    <i className="fa-brands fa-facebook fa-2x" style={{ color: '#0b5ed7' }}></i>
                                </p>
                                <p>
                                    <i className="fa-brands fa-twitter fa-2x" style={{ color: "#0b5ed7" }}></i>
                                </p>
                                <p>
                                    <i className="fa-brands fa-instagram fa-2x" style={{ color: "#0b5ed7" }}></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}

export default Footer