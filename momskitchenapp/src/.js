import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
//import axios from "axios";


const Store1 = () => {
const [loading, setLoading] = useState(false)

const momsKitchen = async() => {
}

useEffect(() => {
  momsKitchen()
})

if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
)
  
return (
    <div className="flex justify-center">
        <div className="px-5 container">
          <br/><br/>
          <h2>Martina's Spanish Food</h2>
          <br/> <br/>
          <table align="center">
            <tr>
            <td><img src='./indian_food.jpg' width="200px" height="200px" /></td>
            <td><img src='./spanish_food.jpg' width="200px" height="200px" /></td>
            <td><img src='./kazakh_food.jpg' width="200px" height="200px" /></td>
            <td><img src='./england_food.jpg' width="200px" height="200px" /></td>
            </tr>
          </table>
          <br/> <br/>

        </div>
    </div>
  );
}
export default Store1