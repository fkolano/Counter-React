 import React, { useEffect } from "react";
 import PropTypes from "prop-types";

 const SimpleCounter = () => {
     useEffect(() => {
         let interval = setInterval(function () {
             setCounter((number) => number + 1);
         }, 1000);
         return () => clearInterval(interval);
     }, [counter]);
     console.log(counter);
   const four = Math.floor(counter / 10000);
   const three = Math.floor(counter / 1000);
   const two = Math.floor(counter / 100);
   const one = Math.floor(counter / 10);

   return (
     <div className="bigCounter">
       <div className="clock">
         <FontAwesomeIcon icon="fa-regular fa-clock" />
       </div>
       <div className="four">{ four % 10}</div>
       <div className="three">{three % 10}</div>
       <div className="two">{two % 10}</div>
       <div className="one">{one % 10}</div>
     </div>
   );
 };



export default SimpleCounter;
