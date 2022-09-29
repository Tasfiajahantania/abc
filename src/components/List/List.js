import React from 'react';
import './List.css';

const List = (props) => {
    const { list } = props;
    let total = 0;
    for (const work of list) {
        total = total + work.duration;
    }
    // const breakTime = [10, 20, 30, 40];

    // const addToBreakTime = (time) => {
    //     console.log(time);
    // }

    const breakTime = [
        {id:1, time: 10},
        {id:2, time: 15},
        {id:3, time: 20},
        {id:4, time: 30},

    ];
    
    const addToBreakTime = (props) => {
        console.log(props);
    }
    return (
        <div className='list-container'>
            <div className="details">
                <h3>Alisha</h3>
                
            </div>
            <h3>Add a break</h3>
            {/* <div className="btn-container">
                {
                    breakTime.map(time=><button onClick={()=> addToBreakTime} className='btn-style'>{time}s</button>)
                }
            </div> */}
            <div className="btn-container">
                {
                    breakTime.map(timeOO => <button 
                        key={timeOO.id}
                        className='btn-style'
                        onClick={() =>(addToBreakTime(timeOO.time))}
                    >{timeOO.time}</button>)
                }
                
            </div>
            <h4>Activities Details</h4>
            <p>Works Time: {total} min</p>
            <p>Break Time:</p>
            <button className='btn-completed'>Activity Completed</button>
            {/* <p>list {props.length}</p> */}
        </div>
    );
};

export default List;