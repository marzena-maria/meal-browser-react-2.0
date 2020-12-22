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
        handleDataFetching(firstLetter);
    }, [firstLetter]);

    const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWYZ';
    const oneLetter = allLetters.split('');
    const setOneLetter = oneLetter.map(letter => (
        <button 
            onClick={() => {setFirstLetter(letter)}}>
            {letter}
        </button>
    ));

    return (
        <div>
            <h1>Search by First Letter</h1>
            {/* <Input onChange={value => setInputValue(value)}/> */}

            <div>
                <ul>
                    {setOneLetter}
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