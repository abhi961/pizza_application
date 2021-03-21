import React from 'react';
const Footer =() => {
    return(
           <>
            <div className="yellow-footer">
                <div className="footer-content">
                    <div className="form-box">
                        <h1>Request A <span>Call Back</span></h1>
                        <form>
                        <input type="text" className="fname" name="fname" placeholder="Name"/><br></br>
                        <input type="text" className="fname" name="email" placeholder="Enter email"/><br></br>
                        <input type="text" className="fname" name="phone"placeholder="Enter Phone Number"/><br></br>
                        <textarea name="comment" form="usrform" id="txt-area">Enter text here...</textarea><br></br>
                        <input type="submit" className="btn-submit" value="Send"/>  
                        </form>
                    </div>
                    <div className="footer-image">
                        <div className="footer-img">
                            <img src="/images/img.jpg" alt="img"/>
                        </div>
                    </div>
                   
                </div>
                 <div className="footer-logo">
                        <div className="logo-box">
                            <img src="/images/logo.png" alt="logo"/>
                        </div>
                    </div>
                    <hr></hr>
            </div>
           </>

    );
}
export default Footer;