import React from 'react';

const Client =()=>{
    return(
        <>
           <div className="clients-section">
               <div className="img-clients">
                   <img src="/images/side_img.png" alt="img"/>
               </div>
               <div className="clients-head">
                   <div className="client-img top">
                       <img src="/images/title.png" alt="img" />
                   </div>
                   <div className="title-txt">
                       <h2>Our Clients</h2>
                   </div>
               </div>
               </div> 
               <div className="testimonials-container">
                   <div className="testi-box">
                      <div className="clent-box-img">
                      <img src="/images/client.jpg" alt="img"/>
                      </div>
                      <h2>John Joe</h2>
                      <p>There are many variations of passages of Lorem Ipsum available, but
                      the majority have suffered alteration in some form, by injected humour,
                      or randomised words which don’t look even slightly believable. If you are
                      going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything
                      embarrassing hidden in the middle of text.</p>
                      <div className="client-icon">
                          <img src="/images/client_icon.png" alt="img"/>
                      </div>
                   </div>
                   </div> 
        </>
    );
}
export default Client;