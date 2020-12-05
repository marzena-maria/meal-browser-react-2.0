import React, { useState, useEffect } from 'react';
import './searchByFirstLetter.scss';

import axios from 'axios';

import DisplayResults from '../../reusable/DisplayResults/DisplayResults';
import SingleRecipe from '../../reusable/SingleRecipe/SingleRecipe';


const SearchByFirstLetter = () => {

    const [meals, setMeals] = useState([]);
    console.log(meals);
    const [clickedMeal, setClickedMeal] = useState({});
    const [firstLetter, setFirstLetter] = useState('a');
    console.log(firstLetter);

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';

    const handleDataFetching = async firstLetter => {
        try {
            const result = await axios (`${url}${firstLetter}`);
            await setMeals(result.data.meals);
            console.log(result);
            return result;
        }
            catch(error) {
            console.log(error)
        }
    };


    useEffect(() => {
        handleDataFetching();
    }, [firstLetter]);

    

    return (
        <div>
            <h1>Search by First Letter</h1>
            {/* <Input onChange={value => setInputValue(value)}/> */}

            <div>
                <ul>
                    <button 
                        onClick={() => {setFirstLetter('a')}}>
                            A
                    </button>

                    <button 
                        onClick={() => {setFirstLetter('b')}}>
                            B
                    </button>

                    <button 
                        onClick={() => {setFirstLetter('c')}}>
                            C
                    </button>                   

                    <button>D</button>
                    <button>E</button>
                    <button>F</button>
                    <button>G</button>
                    <button>H</button>
                    <button>I</button>
                    <button>J</button>
                    <button>K</button>
                    <button>L</button>
                    <button>M</button>
                    <button>N</button>
                    <button>O</button>
                    <button>P</button>
                    <button>Q</button>
                    <button>R</button>
                    <button>S</button>
                    <button>T</button>
                    <button>U</button>
                    <button>V</button>
                    <button>W</button>
                    <button>X</button>
                    <button>Y</button>
                    <button>Z</button>
                </ul>
            </div>

            <DisplayResults 
                onClick={setClickedMeal}
                listOfResults={meals}/>
            <SingleRecipe singleRecipe={clickedMeal}/>
        </div>
    )
}

export default SearchByFirstLetter;