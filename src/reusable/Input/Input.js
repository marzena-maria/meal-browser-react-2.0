import React from 'react';
import './input.scss';

const Input = (props) => {

    return (
        <div className='inputContainer'>
            <label 
                htmlFor='inputLabel'
                className='inputLabel'>
                    
                    Search:   

            </label>
            <input 
                value={props.inputValue}
                onChange={event => {props.onChange(event.target.value)}}
                className='inputField'
                type='text'
                id='inputField' />
        </div>
    )
}

export default Input;
