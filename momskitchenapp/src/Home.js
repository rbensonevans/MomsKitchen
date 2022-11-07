import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
//import Web3Auth from "@web3auth/web3auth";
//import axios from "axios";


const Home = () => {
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
          <h2>A Global Descentralized Restaurant</h2>
          <br/><br/><br/>
          <h1>MomsKitchen</h1>
          <br/> <br/>
          <table align="center">
            <tr>
            <td><img src='./indian_food.jpg' width="200px" height="200px" /></td>
            <td><img src='./spanish_food.jpg' width="200px" height="200px" /></td>
            <td><img src='./kazakh_food.jpg' width="200px" height="200px" /></td>
            <td><img src='./england_food.jpg' width="200px" height="200px" /></td>
            </tr>
          </table>

        </div>
    </div>
  );
}
export default Home