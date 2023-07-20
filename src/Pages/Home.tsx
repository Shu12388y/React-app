
import img from "../images/pngtree-modern-traditional-food-sasami-pizza-3d-model-png-image_6651528.png"


const styled={
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:"10rem 1rem",
  // flexWrap:"wrap"
  textAlign:"left",
  fontSize:"1rem",
  gap:"2rem",
  fontWeight:"600"


}
const header={
fontSize:"3rem",
fontWeight:"700",
marginBottom:"2rem"
}



export default function Home() {
  return (
    <div style={styled}>
      <div className="righ__side" style={{width:500}}>
      <h1 style={header}>
        Pizza Shop
      </h1 >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero adipisci illo repudiandae, est, dolore recusandae sapiente aut, sint harum repellat corrupti voluptas nesciunt?

      </div>
      <div className="left__side">
        <img src={img} alt="" />
      </div>
      
    </div>
  )
}


