import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import axios from "axios";

const ListMenu = ({ marketplace, nft }) => {

const [firstTime, setFirstTime] = useState(true)

const [loading, setLoading] = useState(false)
const [items, setItems] = useState([])
const [metadata, setMetadata] = useState([])

const sleep = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const getNFTDetails=() => {

  let url = 'https://api.nftport.xyz/v0/nfts/0x2d22add30b7922a81e7256f3435fed9890277c4a/' + "928455260396703010431"; 
  console.log(url)

  const options = {
    method: 'GET',
    url: url,
    params: {chain: 'polygon'},
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'a6425758-88b5-446c-957d-5a6481d3faf7'
    }
  };
  console.log("In getNFTDetails: before axios.request")

  axios.request(options).then(function (response) {
    console.log("In getNFTDetails: after axios.request")


    console.log(response.data)

    console.log(response.data.nft.metadata.name)
    console.log(response.data.nft.metadata.description)
    console.log(response.data.nft.metadata.image)
      
    items.push({
      name: response.data.nft.metadata.name,
      description: response.data.nft.metadata.description,
      image: response.data.nft.metadata.image
    })
    setItems(items)
    if (items.length > 0) {
        setLoading(false)
    }

  }).catch(function (error) {
    console.error(error);
  });
  //await sleep(1000);

  }

const getMetaData = () => {

  const options = {
    method: 'GET',
    url: 'https://api.nftport.xyz/v0/me/mints',
    params: {chain: 'polygon'},
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'a6425758-88b5-446c-957d-5a6481d3faf7'
    }
  };

  console.log("In getMetaData: before loading check")

  if (loading) return

  console.log("In getMetaData: before axios.request")
  setLoading(true)

  axios.request(options).then(function (response) {
    console.log("In getMetaData: after axios.request")


      /*
    console.log(response.data.total)
    console.log(response.data.minted_nfts[0].token_id)
    console.log(response.data.minted_nfts[0].contract_name)
    console.log(response.data.minted_nfts[0].metadata_uri)
      */
    console.log(response.data)

   metadata.push({
      metadata_uri: response.data.minted_nfts[0].metadata_uri,
      token_id: response.data.minted_nfts[0].token_id
    })
    setMetadata(metadata)
    getNFTDetails()
  }).catch(function (error) {
    console.error(error);
  });

  }

const loadMarketplaceItems = async() => {
  let metadata = null
  let items = null

  if (firstTime) {
    setFirstTime(false)
    getMetaData()
}
  sleep(1000);

  //console.log("number of items:" + items.length)
}


  const loadSKALENFTs = async() => {
    const tokenCount = await nft.tokenCount()
    console.log("number of NFTs:" + tokenCount)

    for (let i = tokenCount; i > 0; i--) {
      const token = await nft.tokenURI(i)
      console.log("NFT: " + i + " " + token)
    }
  }

  useEffect(() => {
 //   async function fetchData() {
 //     console.log('start');
        // loadMarketplaceItems() // via NFTPort
        loadSKALENFTs()
      //await sleep(1000);
      //setLoading(false)

  //    console.log('end');
  //  }

    //fetchData();
  })

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )
  
  return (
    <div className="flex justify-center">
      {items.length > 0 ?
        <div className="px-5 container">
          <br/><br/>
          <h2>My Properties</h2>
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body color="secondary">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-grid'>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
        )}
    </div>
  );
}
export default ListMenu