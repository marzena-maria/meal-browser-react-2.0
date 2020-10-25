import React, { useState, useEffect } from 'react';
import './searchByName.scss';

import Input from '../../reusable/Input/Input';
import DisplayResults from '../../reusable/DisplayResults/DisplayResults';
import SingleRecipe from '../../reusable/SingleRecipe/SingleRecipe';


// to URL
const parameter = 's';

const SearchByName = () => {
    return (
        <div>
            <h1>Search by Name</h1>
        </div>,

        <Input />,
        <DisplayResults />,
        <SingleRecipe/>
    )
};

export default SearchByName;