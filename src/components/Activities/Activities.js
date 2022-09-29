import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import List from '../List/List';
import Work from '../work/Work';
import './Activities.css'

const Activities = () => {
    const [works, setWorks] = useState([]);
    const [list,setList]=useState()

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setWorks(data));
    }, []);
    const handleAddToList = (work) => {
        console.log(work);
        const newList = [...list, work];
        setList(newList);
    }
    return (
        <div className='activities'>

            <div>
                <Header></Header>
                 <div className="works-container">
                {
                    works.map(work => <Work
                        key={work.id} 
                        work={work} 
                        handleAddToList={handleAddToList}
                    ></Work>)
                }
            </div>
           </div>
            <div className="list-container">
           <List></List>
            </div>
        </div>
    );
};

export default Activities;