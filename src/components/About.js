import React from 'react';
import Data from "./Data";

const About =()=>{

    return(
        <>
        <div className="About-section">
            <div className="about-icon">
                <img src="/images/title.png" alt="icon"/>
            </div>
            <div className="about-text">
                <h1>About Our Food & Restaurant</h1>
                <p>It is a long established fact that a reader will be distracted <br></br>by the readable content of a
                  page when looking at its layout. The point of using Lorem</p>
            </div>
        </div>
        <div className="best-food">
            <div className="Best-food-txt">
                <h2>Best Food</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                 Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
                 Hampden-Sydney College in Virginia, looked up one of the more obscureContrary to popular belief, Lorem Ipsum 
                 is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000
                 years old. Richard</p>
                 <a href="#">Read More</a>
            </div>
            <div className="yellow-bg">
                <div className="best-food-img">
                    <img src="/images/img.jpg" alt="bestimg"/>
                </div>
            </div>
        </div>
        </>
    );
}
export default About;