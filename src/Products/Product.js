import React from "react";

const Product = ({items = []}) =>{
    if(items.length <= 0){
        return <div>No item found!</div> 
    }else{
        return <div>{items.map( (item,index) => {
            //return <h4 key={index} >item</h4>
            return <ol>
            
                <li >{item}</li>
            </ol>
        } )}</div>
    }
}
export default Product




