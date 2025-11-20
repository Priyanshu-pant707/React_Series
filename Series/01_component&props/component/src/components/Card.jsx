import React from 'react'
import '/src/index.css'
const Card = (props) => {
  return <>

  <div className="card">
    <div className="image">
<img src="https://i.pinimg.com/736x/c2/8c/f6/c28cf69b2fdf5d4d99db016aa603444b.jpg"   alt="image loading" />
    </div>
    <div className="content">
        <div className="left">
            {props.name}
            <br/>
            {props.description}
        </div>
          <div className="right">
            {props.gmail}
            <br/>
            {props.insta}
        </div>
    </div>
  </div>
  </>
}

export default Card