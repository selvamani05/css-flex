import React from 'react';

function ProductComponent(props) {
    
    // console.log(props.data.title)
    return (
        
        <div>
            <div className="todo-data">
             <p>UserName :-{props.data.userId}</p>
            <p>Id :-{props.data.id}</p>
            <p>Title :-{props.data.title}</p>
            <p>{props.data.completed}</p>
            
        
        </div>
        </div>
    )
}

export default ProductComponent
