import React from 'react';
const Blog =()=>{
    return(
        <>
        <div className="blog-container">
            <div className="blog-img">
                <img src="/images/title.png" alt="img"/>
            </div>
            <div className="blog-text">
                <h2>Our Blog</h2>
                <p>when looking at its layout. The point of using Lorem</p>
            </div>
        </div>
        <div className="Blog-content">
                 <div className="blog-items">
                     <div className="blog-img-cont">
                    <img src="/images/blog_img1.png" alt="blog"/>
                     <div className="date-box">
                          <h3>20 Dec</h3>
                          <h4>2020</h4>
                      </div>
                </div>
                      <div className="title-head">
                          <h2>Spicy Burger</h2>
                          <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide a valid href, but still need the element
                            to resemble a link, use a button</p>
                      </div>
                     
                </div> 

                 <div className="blog-items">
                     <div className="blog-img-cont">
                    <img src="/images/blog_img2.png" alt="blog"/>
                     <div className="date-box">
                          <h3>20 Dec</h3>
                          <h4>2020</h4>
                      </div></div>
                      <div className="title-head">
                          <h2>Egg & Tosh</h2>
                          <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide a valid href, but still need the element
                            to resemble a link, use a button</p>
                      </div>
                     
                </div> 
                <div className="blog-items">
                     <div className="blog-img-cont">
                    <img src="/images/blog_img3.png" alt="blog"/>
                     <div className="date-box">
                          <h3>20 Dec</h3>
                          <h4>2020</h4>
                      </div></div>
                      <div className="title-head">
                          <h2>Pizza</h2>
                          <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable
                            address as the href value. If you cannot provide a valid href, but still need the element
                            to resemble a link, use a button</p>
                      </div>
                     
                </div>          
        </div>
      
        </>
    );
}
export default Blog;