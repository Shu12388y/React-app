import Product from "../components/Product"
import"./About.css"
import data from "../database/data.json"


export default function About() {
  return (
    <div className="align__parent">
      <div className="flex__row">
       {/* <Product/>
       <Product/>
       <Product/>
       <Product/> */}

       {
        data.map((Products)=><Product key={Products._id.$oid} prods={data}/>)

       }
      </div>
      {/* <div className="flex__row">
       <Product/>
       <Product/>
       <Product/>
       <Product/>
      </div><div className="flex__row">
       <Product/>
       <Product/>
       <Product/>
       <Product/>
      </div><div className="flex__row">
       <Product/>
       <Product/>
       <Product/>
       <Product/>
      </div> */}
       
      
    </div>
  )
}
