import { useState } from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { Buffer } from 'buffer';
import axios from "axios";

const CreateStore = ({ marketplace, nft }) => {
  const [metadataUploadStatus, setMetadataUploadStatus] = useState(false)
  const [metadataURI, setMetadataURI] = useState('')
  const [imageUploadStatus, setImageUploadStatus] = useState(false)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [description, setDescription] = useState('')


  const createMyCompany = async () => {
    console.log("metadataURI: ", metadataURI)

    //if (!metadataUploadStatus) return;

    // metadataURI points to the NFT metadata on IPFS.
    // mint nft 
    await(await nft.mint(metadataURI)).wait()
    // get tokenId of new nft 
    const id = await nft.tokenCount()
    console.log("minted SKALE nft id: ", id)
    //mintToNFTPortPolygon();
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control 
                onChange={(e) => setName(e.target.value)} 
                size="lg" 
                required type="text" 
                placeholder="Name" 
              />
              <Form.Control 
                onChange={(e) => setDescription(e.target.value)} 
                size="lg" 
                required as="textarea" 
                placeholder="Description" 
              />
              <div className="d-grid px-0">
                <Button onClick={createMyCompany} variant="primary" size="lg">
                CreateMyCompany On SKALE Network
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
}
export default CreateStore