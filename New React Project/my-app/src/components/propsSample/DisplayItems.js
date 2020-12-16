import React,{useState,useEffect} from 'react';

export default function DisplayItems(props) {
    //const { myItems} = props.items;
    return (
        <div>
            {props.items.map(e=> 
                <li key={ e.id }>{e.fruit}</li>
            )}

            {/* {myItems.map(e=> 
                <li key={ e.id }>{e.fruit}</li>
            )} */}
        </div>

       
    )
}