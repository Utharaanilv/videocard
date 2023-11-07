import React from 'react'
import { PlusCircle } from 'react-feather'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo } from '../services/allapi';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add({handleresponse}) {

    const [show, setShow] = useState(false);
    const[uploadData,setuploadData]=useState({
      id:"",caption:"",thumbnail:"",url:""

    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setInput=(e)=>{
      // console.log(e.target.value);

      const{name,value}=e.target
                    //... spread operator
      setuploadData({...uploadData,[name]:value})
      
    }
    console.log(uploadData);

    const extractUrl=(e)=>{
       let youtubeUrl=e.target.value
       
       //original- https://www.youtube.com/watch?v=tQPmDiI1f_M

       //i frame- src="https://www.youtube.com/embed/tQPmDiI1f_M"

       if(youtubeUrl.includes("v=")){

        let index=youtubeUrl.indexOf("v=")
        console.log(index);

        let videoUrl=youtubeUrl.substring(index+2,index+13)

        console.log(videoUrl);

        let videodata=uploadData

        videodata.url=`https://www.youtube.com/embed/${videoUrl}`

        setuploadData(videodata)

        

       }

       console.log(uploadData);

      
    }
    

    const handleAdd=async()=>{
      const{id,caption,thumbnail,url}=uploadData
      if(!id||!caption||!thumbnail||!url){
        toast("please fill the form completely")
      }
      else{
           // make an api call to allapi.js
      const response=await addVideo(uploadData)
      // console.log(response.data);/
      if(response.status>=200 && response.status<300){
        // console.log();
        handleresponse(response.data)
        setShow(false)
        toast.success("new video uploaded successfully",{position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",})
      }
      else{
        toast("provide a unique id!!! ")
      }
           
      }
    }


  return (
   <>
        <div onClick={handleShow} className='btn'>
           <PlusCircle color='green' size={50}/> 
        </div>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        
         <Form>

         <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Id">
        <Form.Control type="text" placeholder="Video Id" name='id' onChange={setInput} />
        </FloatingLabel>

        <FloatingLabel className='mb-3' controlId="floatingCaption" label="Uploading video caption">
        <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={setInput} />
        </FloatingLabel>

        <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading video cover image url">
        <Form.Control type="text" placeholder="Video Cover Imagr Url" name='thumbnail' onChange={setInput} />
        </FloatingLabel>

        <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading video Link">
        <Form.Control type="text" placeholder="Video Link" name='url' onChange={extractUrl} />
        </FloatingLabel>




         </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      
      <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />


   </>
  )
}

export default Add