// src/Popup.js
import React from 'react';


const Popup = ({ open, onClose }) => {
    if (!open) return null; // Do not render anything if not open or //Conditional Rendering: Your conditional rendering with if (!open) return null; is perfect for not rendering the popup when it is closed.
    
  return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            // onClick={onClose} // Close on backdrop click OR outside background click it close the dailog box.
        >
         
        
            <div
                className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-md"
               
                 onClick={(e) => e.stopPropagation()} // Prevent click from closing if clicking inside the dialog
            >
               <div className="text-slate-800   flex justify-end z-0 
               items-end ">
                   
                   <i className="material-icons text-white cursor-pointer flex justify-center 
               items-center   mt-[-30px] mr-[-25px]  border-4  rounded-3xl border-orange-900  bg-orange-900"  onClick={onClose} >clear</i>
                </div>

                <div className="text-slate-800 py-5">
                  <h1 className='text-orange-600 text-lg text-center'>Please Provide Information About Yourself !</h1>
                 
                </div>
                
         

                <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
                  <img src="https://th.bing.com/th/id/OIP.XFHx3PRF6fYq-UmgcfpazwHaFj?rs=1&pid=ImgDetMain" alt="" />
                </div>

                {/* <div className="flex shrink-0 flex-wrap items-center bg-red-400 justify-end  "> */}
                    {/* <Button
                        className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100"
                        onClick={onClose} // Close the dialog
                    > */}
                  
                    {/* </Button> */}
                  
                {/* </div> */}
            </div>
        </div>
    );
};

export default Popup;
