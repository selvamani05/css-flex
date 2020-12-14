import React,{useState} from 'react';

function Products() {

    const [netAmount, setNetAmount] = useState()
    const [netquantity,setNetquantity] = useState();

    const [firstUnit, setFirstunit] = useState();
    const [firstPrice, setFirstprice] = useState();    
    const [firstTotal, setFirstTotal] = useState(0);
    

    /* const firstCalculation = () => {
            
        
    } */
    const firstSelectOnChange = (e) => {
        if(e.target.value=== '1'){
            setFirstprice(4)
        } else if(e.target.value === '2'){
            setFirstprice(16)
        }else if(e.target.value === '3'){
            setFirstprice(30)
        }else if(e.target.value === '4'){
            setFirstprice(45)
        } else {
            setFirstprice(20)
        }
    }

     //Second Calculation:-//

     const [secondUnit, setSecondunit] = useState();
     const [secondprice, setSecondprice] = useState();
     const [secondTotal, setSecondTotal] = useState(0);

    /* const secondCalculation = () => {
        setSecondTotal(secondUnit * secondprice)
    } */
    const secondSelectOnChange = (e) => {
        if(e.target.value=== '1'){
            setSecondprice(4)
        } else if(e.target.value === '2'){
            setSecondprice(16)
        }else if(e.target.value === '3'){
            setSecondprice(30)
        }else if(e.target.value === '4'){
            setSecondprice(45)
        } else {
            setFirstprice(20)
        }
    }

    

//Third Calculation//

const [thirdUnit, setthirdUnit] = useState();
const [thirdPrice, setThirdPrice] = useState();
const [thirdTotal, setthirdTotal] = useState(0);

/* const thirdCalculation = () => {
    
 } */
 const thirdSelectOnChange = (e) => {
    if(e.target.value=== '1'){
        setThirdPrice(4)
    } else if(e.target.value === '2'){
        setThirdPrice(16)
    }else if(e.target.value === '3'){
        setThirdPrice(30)
    }else if(e.target.value === '4'){
        setThirdPrice(45)
    } else {
        setThirdPrice(20)
    }
}

//Fourth Calculcation//

const [fourthUnit, setFourthunit] = useState();
const [fourthPrice, setFourthprice] = useState();
const [fourthTotal, setFourthtotal] = useState(0);

/* const fourthCalculation = () => {
    
 } */
 const fourthSelectOnChange = (e) => {
    if(e.target.value=== '1'){
        setFourthprice(4)
    } else if(e.target.value === '2'){
        setFourthprice(16)
    }else if(e.target.value === '3'){
        setFourthprice(30)
    }else if(e.target.value === '4'){
        setFourthprice(45)
    } else {
        setFirstprice(20)
    }
 }

 // Fifth Calculation//

 const [fifthUnit, setfifthunit] = useState();
const [fifthprice, setfifthprice] = useState();
const [fifthtotal, setfifthtotal] = useState(0);

const fifthCalculation = () => {
/*    setfifthtotal(fifthUnit * fifthprice) */
}
const fifthSelectOnChange = (e) => {
   if(e.target.value=== '1'){
       setfifthprice(4)
   } else if(e.target.value === '2'){
       setfifthprice(16)
   }else if(e.target.value === '3'){
       setfifthprice(30)
   }else if(e.target.value === '4'){
       setfifthprice(45)
   } else {
       setfifthprice(20)
   }
}


 //Net Amount Calculation//
const netAmountCalculation = () => {
    setFirstTotal(firstUnit * firstPrice) 
    setSecondTotal(secondUnit * secondprice)
    setthirdTotal(thirdUnit * thirdPrice)
    setFourthtotal(fourthUnit  * fourthPrice)
    setfifthtotal(fifthUnit * fifthprice)

    setNetAmount(firstTotal+secondTotal+thirdTotal+fourthTotal+fifthtotal);

}

//Net Quantity Calculation//

const netQuantitycalculation = () => {
    setNetquantity(parseInt(firstUnit) + parseInt(secondUnit) + parseInt(thirdUnit) + parseInt(fourthUnit) + parseInt(fifthUnit));
}
    return (
        <div>

        {/* First Calculation */}
        
        <select name="Products" id="products" onChange={firstSelectOnChange }>
          <option value="1">Shampoo</option>          
          <option value="2">hair Dye</option>  
          <option value="3">Soap</option>
          <option value="4">paste</option>
          <option value="5">Tooth Brush</option>
            </select>

            <input type="number" value={firstUnit} onChange={e => {setFirstunit(e.target.value === "" ? 0 : 1)}} />
            <input type="number" value={firstPrice} disabled onChange={e => setFirstprice(e.target.value)}/>
            {/* <button onClick={firstCalculation}> Get Product Price </button> */}
            <span>{firstTotal}</span>
            <br/>

            {/* Second Calculation */}

            <select name="Products" id="products" onChange={secondSelectOnChange}>
          <option value="1">Shampoo</option>          
          <option value="2">Hair Dye</option>
          <option value="3">Soap</option>
          <option value="4">Hair Dye</option>
          <option value="5">Tooth Brush</option>
            </select>
            <input type="number" value={secondUnit} onChange={e => setSecondunit(e.target.value === "" ? 0 : 1)} />
            <input type="number" value={secondprice} disabled onChange={e => setSecondprice(e.target.value)}/>
            {/* <button onClick={secondCalculation}> Get Product Price </button> */}
            <span>{secondTotal}</span>
            <br/>

             {/* Third Calculation */}

 <select name="Products" id="products" onChange={thirdSelectOnChange}>
 <option value="1">Shampoo</option>          
 <option value="2">Hair Dye</option>
 <option value="3">Soap</option>
 <option value="4">Hair Dye</option>
 <option value="5">Tooth Brush</option>
   </select>
   <input type="number" value={thirdUnit} onChange={e => setthirdUnit(e.target.value)} />
   <input type="number" value={thirdPrice} disabled onChange={e => setThirdPrice(e.target.value)}/>
   {/* <button onClick={thirdCalculation}> Get Product Price </button> */}
   <span>{thirdTotal}</span>
   <br/>
 
 {/* Fourth Calculation */}
 
   <select name="Products" id="products" onChange={fourthSelectOnChange}>
 <option value="1">Shampoo</option>          
 <option value="2">Hair Dye</option>
 <option value="3">Soap</option>
 <option value="4">Hair Dye</option>
 <option value="5">Tooth Brush</option>
   </select>
   <input type="number" value={fourthUnit} onChange={e => setFourthunit(e.target.value)} />
   <input type="number" value={fourthPrice} disabled onChange={e => setFourthprice(e.target.value)}/>
   {/* <button onClick={fourthCalculation}> Get Product Price </button> */}
   <span>{fourthTotal}</span>
   <br/>
 
 
             {/* Fifth Calculation */}
 
             <select name="Products" id="products" onChange={fifthSelectOnChange}>
 <option value="1">Shampoo</option>          
 <option value="2">Hair Dye</option>
 <option value="3">Soap</option>
 <option value="4">Hair Dye</option>
 <option value="5">Tooth Brush</option>
   </select>
 
 
   <input type="number" value={fifthUnit} onChange={e => setfifthunit(e.target.value)} />
   <input type="number" value={fifthprice} disabled onChange={e => setfifthprice(e.target.value)}/>
   {/* <button onClick={fifthCalculation}> Get Product Price </button> */}
   <span>{fifthtotal}</span>
   <br/>


 

           
        
           

            
           
            <div>
            <p>{netquantity}</p>
                <button onClick={netQuantitycalculation}>Total Quantity Button </button> 
            </div>


            <div>
            <p>{firstTotal+secondTotal+thirdTotal+fourthTotal+fifthtotal}</p>
            <button onClick={netAmountCalculation}>Total Amount Button </button> 
            </div>


        </div>
    )
}

export default Products
