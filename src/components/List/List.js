import React from 'react';
import './List.css';

const List = () => {
    const breakTime = [10, 20, 30, 40];
    const addToBreakTime = () => {
        console.log('click');
    }
    return (
        <div className='list-container'>
            <h3>Add a break</h3>
            <div className="btn-container">
                {
                    breakTime.map(time=><button onClick={addToBreakTime} className='btn-style'>{time}</button>)
                }
            </div>
            <h2>Activities Details</h2>
            <p>Works Time</p>
        </div>
    );
};

export default List;