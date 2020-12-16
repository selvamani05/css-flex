import React from 'react'

function PropsTesting(props) {
    console.log('props',props);
    let {showOne,showTwo} = props;
    console.log('showOne',showOne);
    console.log('showTwo',showTwo);
    return (
        <div>
        {showOne && <p> 1 </p>}
        {showTwo &&  <p> 2 </p>}

        <div>
            .....
        </div>
            
           
        </div>
    )
}

export default PropsTesting
