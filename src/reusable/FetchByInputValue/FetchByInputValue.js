import React, { useState, useEffect, useCallback } from "react";
import "./fetchByInputValue.css";

import axios from 'axios';
import debounce from 'lodash.debounce';

import SearchByName from '../../components/SearchByName/SearchByName';
import SearchByMainIngredient from '../../components/SearchByMainIngredient/SearchByMainIngredient';

const FetchByInputValue = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [meals, setMeals] = useState([]);
    const [clickedMeal, setClickedMeal] = useState({});

    // console.log(inputValue);
    // console.log(meals);

    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

    
    const handleDataFetching = async query => {
        try {
            const result = await axios (`${url}${parameter}${query}`);
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
        <SearchByName />,
        <SearchByMainIngredient />
    )
};

export default FetchByInputValue;



  


