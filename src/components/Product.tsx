import img from "../images/png-transparent-pizza-margherita-sushi-pizza-pizza-delivery-pizza-thumbnail.png";
import "./Product.css";
// import {useState,useEffect} from "react"
// import data from "../database/data.json"
// console.log(data)
let name=""
const Product=(props: any)=>{
    // const {products,setproducts}=useState([])
    // setproducts(data)
    // console.log(props)
    
// setproducts(name)
    
    return (
        <>
        <div className="prods">
            <img className="pizza__img" src={img} alt="" />
            <div className="wrap">
                <h3>{name}</h3>
                <h4>Rank-2</h4>

            </div>
            <div className="lower__wrap">
                <div className="price">Rs. 200</div>
                <div className="add">Add To Cart</div>
            </div>

        </div>
        </>

    )
}

export default Product