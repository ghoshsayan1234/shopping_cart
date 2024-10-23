import React from 'react';  // Corrected 'React' to 'react'
// import './newCollections.css';
// import newCollection from '../assets/new_collections';
import Item from '../item/Item';
import new_collections from '../assets/new_collections';

const NewCollections = () => {
    return (
        <>
            <div className='new-collections'>
                <h1>New Collections</h1>  {/* Fixed typo */}
                <hr />
                <div className="collections">
                    {new_collections.map((item, i) => {
                        console.log(item);  // Logging item for debugging
                        console.log(i)
                        {/* return (
                            <Item key={i} id={item.id} name={item.name} />
                        ); */}
                    })}
                </div>
            </div>
        </>
    );
};

export default NewCollections;
