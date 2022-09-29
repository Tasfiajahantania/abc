import React from 'react';
import './Work.css';
const Work = (props) => {
    const {work,handleAddToList } = props;
    const {img,title,pera,duration} = work;
    return (
        <div className='work'>
            <img src={img} alt="" />
            <div className="work-info">
                <h3>{title}</h3>
                 <p>{pera}</p>
                 <h4>Time duration: {duration} hour</h4>
            </div>
            <button onClick={ ()=>handleAddToList(work)} className='btn-list'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Work;