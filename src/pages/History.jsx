import React, { useEffect } from 'react'
import { useState } from 'react'
import { gethistory } from '../services/allapi'


function History() {

    const[history,setHistory]=useState([])

    const getwatchHistory=async()=>{
    const{data} =await   gethistory()
     setHistory(data)
    }
    console.log(history);
    useEffect(() => {
      
        getwatchHistory()
    
    }, [])
    
  return (
    <>
    <h1>Watch history</h1>
    <table className='table shadow m-3 rounded border'>
        <thead>
            <tr>
                <th>ID</th>
                <th>CardName</th>
                <th>Url</th>
                <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {
                history?.map((item,index)=>(

                    <tr>
                    <td>{index+1}</td>
                    <td>{item?.cardName}</td>
                    <td>{item?.url}</td>
                    <td>{item?.date}</td>
                </tr>

))
            }
            
         
        </tbody>

    </table>
    
    </>
  )
}

export default History