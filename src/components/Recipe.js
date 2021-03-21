import React from 'react';
import Data from "./Data";

const Recipe =()=> {
    return(
        <>
        <div className="recipe-main">
            <div className="recipe-heading">
            <h1>Our Recipes</h1>
             <div className="food-items">
                 <ul className="all-food-items" >
                    {
                        Data.recipe.map(recipe =>
                            <li>
                                <div className="recipes-items">
                                    <img src={recipe.image} alt="recipe-img" />
                                      <div className="recipe-name"><h3>{recipe.name}</h3></div>
                                         <div className="recipe-price"><h4><span>&#x20B9;</span>{recipe.price}</h4></div>
                                         <div className="add-btn">< a href>{recipe.button}</a></div>
                                </div>
                         </li>
                       )
                     }
                 </ul>
             </div>
            </div>
        </div>
        <div className="side-image">
            <img src="/images/side_img.png" alt="img"/>
        </div>
        </>
    );
}
  export default Recipe;