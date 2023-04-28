// import React, {useState, useEffect} from "react";
// import { Slide } from "react-slideshow-image";

// import { urlFor } from "../lib/client";

// const Slideshow = () => {
//   const [domLoaded, setDomLoaded] = useState(false);

//   useEffect(() => {
//     setDomLoaded(true);
//   }, []);


//   return (
//     <>
//       {domLoaded && (
//         <Slide >
//           <div className="slideshow" id="intro">
//             {SlideshowData?.map((item, index) => (
//               <img
//                 src={urlFor(item.image && item.image[0])}
//                 alt={item.name}
//                 className="slideshow__image"
//               ></img>
//             ))}
//           </div>
//         </Slide>
//       )}
//     </>
//   );
// };
// export default Slideshow;
