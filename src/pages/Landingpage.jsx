import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'



function Landingpage() {

  // useNavigate is hook
  const navigate=useNavigate()

  const handleNavigate=()=>{
    navigate('/home')
  }
  
  
  return (
    <div>
        <Row className='align-item-center'>

          <Col></Col>
          <Col lg-={6}>
            <h1>welcome to video.com</h1>
            <p style={{textAlign:"justify"}} >when user can use their favourite videos user csn upload youtube videos by copy and paste their url 
        video.com allow to add and remove their uploaded videos and also arrange them in different 
        categories by drag and drop .it is free try it now   </p>

        <button onClick={handleNavigate} className='btn btn-success'>Click here to know more !!!</button>
          </Col>

          <Col lg={4}>
            <img className='img-fluid' src="https://images.media.io/img2022/vocal-remover/banner.png" width={500} alt="" />
          </Col>

        </Row>
    </div>
  )
}

export default Landingpage