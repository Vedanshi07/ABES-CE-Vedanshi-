import React from 'react'
import './book.css'
function book(props) {
  return (
    <div id="book">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnVp3abpKHU6VI-9TV3Rova8rKtVHp-b0Sg&s" alt="" height={100} width={100}/>
        <h1>Title:{props.title}</h1>
        <h1>Price:{props.price}</h1>
        <div>
            <button>+</button>
            <span>0</span>
            <button>-</button>
        </div>
    </div>
  )
}

export default book