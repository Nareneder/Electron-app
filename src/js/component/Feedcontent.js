import React from 'react';


export default function Feed() {
  return(
      <div className="fed_contnt">
        <div className="frd_top_cont">
        <img src='src/js/img/doremon.png' alt="icon" />
         
         <div className="prof_dtail">
           <ul>
             <li>Name</li>
             <li>Email<span className="prof_in_dtil">abc@gmail.com</span></li>
             <li>Phone<span className="prof_in_dtil">1234567890</span></li>
             <li>Adderss<span className="prof_in_dtil"></span></li>
           </ul>
         </div>
        </div>
        </div>
  )
}