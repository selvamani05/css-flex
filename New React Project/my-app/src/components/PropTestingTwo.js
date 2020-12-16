import React from 'react'

function PropTestingTwo({showOne=false,showTwo=true,showThree=true}) {
    console.log('showOne 2',showOne);
    console.log('showTwo 2',showTwo);
    return (
        <div>
        {showOne && <p> 1 </p>}
        {showTwo &&  <p> 2 </p>}
        {showThree ? <p>Show 3 True</p> : <p>Show 3 false</p> }

        <div>
            .....
        </div>
            
           
        </div>
    )
}

export default PropTestingTwo
