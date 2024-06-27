
import { useState } from "react";
import 



const CakeContainer = () => {
    const [CakeType, putCakes] = useState( [
        // Victora Sponge
        {
            cakeName: "Victoria Sponge",
               ingredients: [
                   "eggs",
                  "butter",
                  "sugar",
                      "self-raising flour",
                  "baking powder",
                  "milk"
              ],
              price: 5
               rating: 5
        },
    
        // Tea Loaf
        {
             cakeName: "Tea Loaf",
               ingredients: [
                   "eggs",
                  "oil",
                  "dried fruit",
                      "sugar",
                  "self-raising flour",
                  "strong tea",
              ],
              price: 2,
              rating: 3
        },
    
        // Carrot Cake
        {
             cakeName: "Carrot Cake",
               ingredients: [
                    "carrots",
                      "walnuts",
                  "oil",
                      "cream cheese",
                      "flour",
                  "sugar",
               ],
               price: 8,
               rating: 5
        }
    ] 

)


return(
    <>
        <h2> Cakes for sale: </h2>
    
    </>

    );

};

export default CakeContainer;





