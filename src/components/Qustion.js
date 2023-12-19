import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Qustion() {
const [Qustions,setQustions]=useState()
const fetchQustions= async ()=>{

     const result= await axios.get('./qustion.json')

   
     setQustions(result.data)
   

}
console.log(Qustions);
useEffect(()=>{
    fetchQustions()
},[])

 return (
    <div>
        {
        Qustions ? Qustions .map((item,index)=>{
    <div >
             <h3>{item[3].question}</h3>
          <div >
                <ol>
                 {/* <li className='option'>{item.answers}</li> */}
                    </ol>
          </div>

            </div>
         }) :''} 
      
  </div>
  )
}

export default Qustion