import React from 'react';

const Input = () => {
    return (
        <form>
            <input type='text' placeholder='eg. walk dogs...' required />
            <button type='submit'>Add</button>
        </form>
    );
};

export default Input;
