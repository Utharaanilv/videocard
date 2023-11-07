import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../services/allapi'




function View({serverRes}) {

  // create state for holding api response

  const[allVideos,setallVideos]=useState([])
  const[deleteStatus,setdeleteStatus]=useState(false)

  const handledeletestatus=(res)=>{

    setdeleteStatus(res)

  }
  
  // hook
  useEffect(() => {

    // call back function body
    getallVideos()

  
   
  }, [serverRes,deleteStatus])
  


  const getallVideos=async()=>{
    let response=  await getVideo()

    setallVideos(response.data);
  }

  console.log(allVideos);



  return (
    <div className='border p-3 rounded ms-4'>

        <Row>

          {
            allVideos.map(video=>(
            <Col className='ps-3 mb-3' sm={12} md={6}>

              <Videocard card={video} handledeletestatus={handledeletestatus}/>
          
          </Col>



            ))
          
          }


        </Row>


    </div>
  )
}

export default View