import React from 'react'
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addhistory, deleteVideo } from '../services/allapi';
import { v4 as uuidv4 } from 'uuid';

function Videocard({card,handledeletestatus,insidecategory}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow =async () => {setShow(true);
  
    const uid=uuidv4();
    console.log(uid);

    let cardTime=new Date()
    console.log(cardTime);

    const {caption,url}=card

    if(uid!=""&&caption!=""&&url!=""&&cardTime!=""){
        const body={
          id:uid,
          cardName:caption,
          url,
          date:cardTime

        }
   const response= await  addhistory(body)
   console.log(response);
    }
  
  
  }

  // video remove

  const removeItem=async(id)=>{
    // make call to allapi
 let response= await  deleteVideo(id)
//  console.log(response);
if(response.status>=200 && response.status<300){
  handledeletestatus(true)
}
  }

  // dragStarted

  const dragStarted=(e,id)=>{
   console.log("dragStarted & source card id:",id);
   e.dataTransfer.setData("cardId",id)
  }




  return (
    <>
        
        <div>

        <Card  draggable onDragStart={e=>dragStarted(e,card?.id)} 
        
        className='shadow'>
      <Card.Img onClick={handleShow} variant="top" height={'200px'} src={card?.thumbnail} />
      <Card.Body>
        <Card.Title>
          <span>
            {card?.caption}
          </span>
        </Card.Title>

   {  
   insidecategory?"":     
     <Trash2 onClick={()=>removeItem(card?.id)} color='red' style={{float:'right'}}/>
   }
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <iframe width={'100%'} height={'400px'} src={`${card?.url}?autoplay=1`} title="Venmegham Video Song | 2018 | Tovino Thomas | Jude Anthany Joseph | Nobin Paul | Joe Paul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>
       
      </Modal>



        
        </div>
    </>
  )
}

export default Videocard