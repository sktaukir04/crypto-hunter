import React from 'react'


const Footer = () => {
    const data = ['Shaikh','Taukir','Ahmad']
  return (
    <div style={{ marginTop:"20px"}}>
        {/* <marquee behavior="" direction="">Shaikh Taukir Ahmad</marquee> */}
        <p style={{display:'flex',gap:'10px',justifyContent:'center',margin:'auto',width:'100%'}}><span>&copy;</span><span>Shaikh Taukir Ahmad</span></p>
    </div>
  )
} 

export default Footer