import React from 'react';
import './singleRecipe.scss';

const SingleRecipe = (props) => {

    const singleRecipe = props.singleRecipe;

    const measures = [];
    Object.keys(singleRecipe).map((key) => {
        if (key.startsWith('strMeasure') && singleRecipe[key].trim()) {
            measures.push(singleRecipe[key])
        }
    });

    const ingredients = [];
    Object.keys(singleRecipe).map((key) => {
        if (key.startsWith('strIngredient') && singleRecipe[key]) {
            ingredients.push(singleRecipe[key])
        }
    });

    const measuresAndIngredients = measures.map((element, index) => {
        return `${element} ${ingredients[index]}`;
    });

    //console.log(measuresAndIngredients);

    if (Object.keys(singleRecipe).length) {
        return (
            <div className='singleRecipe'>
                
                <h2>{singleRecipe.strMeal}</h2>
                <p>{singleRecipe.strCategory} ● {singleRecipe.strArea}</p>

                <ul className='measuresAndIngredients'>
                    {measuresAndIngredients.map(element => (
                        <li>{element}</li>
                    ))}
                </ul>
                <p className='instruction'>{singleRecipe.strInstructions}</p>

                <img src={singleRecipe.strMealThumb} />
                <br />
                <a href={singleRecipe.strYoutube} target="_blank">See Video</a>
                <p>Source: {singleRecipe.strSource}</p>
            </div>
        );
    }
    
    return <p className='clickRecipe'>Click on the name to see the recipe</p>
};

export default SingleRecipe;
