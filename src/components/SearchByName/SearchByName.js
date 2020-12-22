import React, { useState, useEffect, useCallback } from 'react';
import './searchByName.scss';

import axios from 'axios';
import debounce from 'lodash.debounce';

import Input from '../../reusable/Input/Input';
import DisplayResults from '../../reusable/DisplayResults/DisplayResults';
import SingleRecipe from '../../reusable/SingleRecipe/SingleRecipe';


const SearchByName = () => {

    const [inputValue, setInputValue] = useState('');
    const [meals, setMeals] = useState([]);
    const [clickedMeal, setClickedMeal] = useState({});

    console.log(inputValue);
    console.log(meals);

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    const handleDataFetching = async query => {
        try {
            const result = await axios (`${url}${query}`);
            setMeals(result.data.meals);
            return result;
        }
            catch(error) {
            console.log(error)
        }
    };

    const handleDelayedDataFetching = useCallback(
        debounce
        (query => handleDataFetching(query), 700), 
    []);

    useEffect(() => {
        handleDelayedDataFetching(inputValue);
    }, [inputValue, handleDelayedDataFetching]);

    return (
        <div>
            <h1>Search by Name</h1>
            <Input onChange={value => setInputValue(value)}/>
            <main className='main'>
                <DisplayResults 
                    onClick={setClickedMeal}
                    listOfResults={meals}/>
                <SingleRecipe singleRecipe={clickedMeal}/>
            </main>
        </div>
    )
};

export default SearchByName;