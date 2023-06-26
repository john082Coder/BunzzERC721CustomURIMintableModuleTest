import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getERC721MintRoleContract, mint, tokenURI  } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const erc721MintRoleContract = getERC721MintRoleContract(bunzz);

    const [mintAddress, setMintAddress] = useState("");
    const [mintId, setMintId] = useState(0);
    const [tokenId, setTokenId] = useState(0);
  

    const [pendingMint, setPendingMint] = useState(false);
    const [pendingTokenURI, setPendingTokenURI] = useState(false);
    const [uriString, setUriString] = useState("");
  
  
   
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Address" value={mintAddress} onChange={(val) => setMintAddress(val.target.value)} />
                            <Form.Label>Input Id</Form.Label>
                            <Form.Control type="email" placeholder="Enter Id" value={mintId} onChange={(val) => setMintId(val.target.value)} />
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingMint(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await mint(
                                        erc721MintRoleContract,
                                        mintAddress,
                                        mintId,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input tokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={tokenId} onChange={(val) => setTokenId(val.target.value)} />
                        </Form.Group>

                        {!pendingTokenURI ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingTokenURI(true);
                                try {
                                    let uri;
                                    
                                    uri = await tokenURI(
                                        erc721MintRoleContract,
                                        tokenId
                                    );
                                        setUriString(uri);
                                    console.log("uri = ", uri);
                                    setPendingTokenURI(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingTokenURI(false);
                                    
                                }
                            }}>
                                TokenURI
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} TokenURI
                            </Button>
                        }
                       
                        
                     
                    </Form>
                    <div>{uriString}</div>
                   


                </Col>
            </Row>
        </Container>
    )
}

export default Creator;