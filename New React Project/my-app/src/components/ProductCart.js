import React,{useState, useEffect} from 'react';


function ProductCart() {
  
    const [totalcart, settotalcart] = useState(0)

    useEffect(() => {
        settotalcart(totalcart)
        
    }, [totalcart])

//Product 1
    const [product1, setproduct1] = useState(0)

//Product 1 UseEffect

/* useEffect(() => {
    settotalcart(product1)
}, [product1]) */

//Product 2
     const [product2, setproduct2] = useState(0)

//Product 2 UseEffect

/* useEffect(() => {
    settotalcart(product2)
}, [product2]) */

//Product 3
const [product3, setproduct3] = useState(0)

//Product 3 UseEffect

useEffect(() => {
    settotalcart( product1 + product2 + product3)
}, [product1 , product2 ,product3])




//Product 1
    const additionProduct1 = () => {
        setproduct1(product1 + 1);
    }

    const subractionProduct1 = () => {
        if(product1>0){
            setproduct1(product1 -1)
        }
    }

//Product 2
const additionProduct2 = () => {
    setproduct2(product2 + 1);
}

const subractionProduct2 = () => {
    if(product2>0){
        setproduct2(product2 -1)
    }
}

//Product 3

const additionProduct3 = () => {
    setproduct3(product3 + 1);
}

const subractionProduct3 = () => {
    if(product3>0){
        setproduct3(product3 -1)
    }
}

    const cart = () => {
        settotalcart(product1 + product2 + product3)
    }

    const deletecart = () => {
        setproduct1(0);
        setproduct2(0);
        setproduct3(0);
        

    }
    

    return (
        <div>

        {/* Total Cart */}
        
        {/* <p>Total Cart{totalcart}</p> */}

        {/* <button onClick={cart}>Total Cart Buton</button> */}
        <p>{totalcart}</p>

       
        <button onClick={deletecart}>Clear cart</button>
       
        

        
        {/*Product One  */}
        <div>
        <input type="number" min="0"/>
        <button value = {product1} onClick={additionProduct1}>Add Product 1</button>
        <button value = {product1} onClick={subractionProduct1}>Delete Product 1</button>
        <span>{product1}</span>
        </div>
        <br/>

        {/* {Product Two} */}
        <div>
        <input type="number" min="0"/>
        <button value = {product2} onClick={additionProduct2}>Add Product 1</button>
        <button value = {product2} onClick={subractionProduct2}>Delete Product 1</button>
        <span>{product2}</span>
        </div>
        <br/>

        {/* Product Three */}
        <div>
        <input type="number" min="0"/>
        <button value = {product3} onClick={additionProduct3}>Add Product 1</button>
        <button value = {product3} onClick={subractionProduct3}>Delete Product 1</button>
        <span>{product3}</span>
        </div>
        <br/>


        </div>
    )
}

export default ProductCart
