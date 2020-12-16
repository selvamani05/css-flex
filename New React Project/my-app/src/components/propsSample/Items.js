import React,{useState,useEffect} from 'react';
import DisplayItems from './DisplayItems';


export default function Items() {

    const [items, setitems] = useState([
        
        {
        "fruit":"apple",
        "id":1
        },

        {
        "fruit":"mango",
        "id":2
        }
        ])

    return (
        <div>
            <DisplayItems items={items} />
        </div>
    )
}
