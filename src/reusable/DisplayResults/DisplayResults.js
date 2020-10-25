import React from 'react';
import './displayResults.scss';

    const DisplayResults = ({ listOfResults, onClick }) => {


        return (
            <div className='resultsContainer'>
                <ul className='displayResults'>
                    { listOfResults ? (
                        listOfResults.map(mealData  => (
                            <li 
                                onClick={() => onClick(mealData)}
                                key={mealData.idMeal}>
                                    {mealData.strMeal}
                            <p>{mealData.strCategory} ● {mealData.strArea}</p>
                            </li>
                        ))) : <li className='noResultFound'>No results found</li>
                    }
                </ul>
            </div>
        );
    };


    export default DisplayResults;
