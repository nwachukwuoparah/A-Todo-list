import React from 'react';
import './App.css'
const Header = ({Click,val,set}) => {

    return (
        <div>
            <header>
                <h1>Todo App</h1>
            </header>
            <div className='input'>
                <input aria-required value={val}
                    onChange={(e) => set(e.target.value)}
                    type='text' placeholder='add-todo' />
                <button onClick={Click}>+</button>
            </div>
        </div>
    );
};

export default Header;
