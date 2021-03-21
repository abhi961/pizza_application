import React from 'react';

const Banner =()=> {
    return(
       <>
       <div className="banner-conatner">
           <div className="text-container">
               <div className="main-txt-container">
                   <h1><span> Discover</span> Restaurants That deliver near You</h1>
                   <p>It is a long established fact that a reader 
                    will be distracted by the readable content of a page when looking at its layout.</p> 
                 </div> 
                    <a href="#">Order Now</a>
           </div>
           <div className="banner-image">
          <img src="/images/burger_slide.png" alt="burder"/>
          </div>
       </div>
       </>
    );
}
export default Banner;