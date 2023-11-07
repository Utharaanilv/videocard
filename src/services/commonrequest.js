// import axios library package

import axios from "axios";

// create a function common api request
export const commonRequest=async (method,url,body)=>{
   
   // request configoration  :::::object

   let reqConfig={
    method,
    // methode means get,put,post,delete
    url,
    // http://localhost:4000 
    data:body,
    
    headers:{
        "Content-type":"application/json"
    }
   }

   // create axios instance

   // api call

return await axios(reqConfig).then((response)=>{
    return response
   }).catch((err)=>{
    return err
   })

}