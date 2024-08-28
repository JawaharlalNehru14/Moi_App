import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditList = ({editGuest,list,setEditGuest,handleEdit}) => {
    const {id} = useParams()
    const findList = list.find(item=>(item.id).toString() === id)

    useEffect(()=>{
        if(findList){
            setEditGuest({guestName: findList.name,native: findList.native,moi: findList.gift});
        }
    },[list,setEditGuest])

    const[errors,setErrors] =  useState({
        guestName: '',
        moi:'',
      })
      const handleEditGuestFormChange = (e) => {
        const { name, value } = e.target;
        
        // Validation logic
        if (name === 'guestName') {
          const isValidName = /^[A-Za-z\s,._&()-]*$/.test(value);
          if (!isValidName) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              guestName: 'Enter the name properly & Not accept number',
            }));
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              guestName: '',
            }));
          }
        } else if (name === 'moi') {
          const isValidMoi = /^[0-9]*$/.test(value);
          if (!isValidMoi) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              moi: 'Moi should accept numbers only',
            }));
          } else {
            setErrors((prevErrors) => ({
              ...prevErrors,
              moi: '',
            }));
          }
        }
    
        setEditGuest({
          ...editGuest,
          [name]: value,
        });
      };

  return (
    <>
    {editGuest && 
    <main className='container'>
        <div className="row">
          <div className='col-1'></div>
          <div className="col-10 addMoiStyle">
            <h1 className='fw-bold welcomeFont text-center'>Add Guest "MOI"</h1>
            <form className='mt-4' onSubmit={(e)=>e.preventDefault()}>
              <div className='mb-4'>
                <label className='labelFont'>Name:</label>
                <input
                  className="labelInput"
                  type="text"
                  id="guestName"
                  name="guestName"
                  value={editGuest.guestName}
                  onChange={handleEditGuestFormChange}
                  required
                />
                 {errors.guestName && (
                  <p className="error text-danger">{errors.guestName}</p>
                )}
              </div>
              <div className='mb-4'>
                <label className='labelFont'>Native:</label>
                <select
                  name="native"
                  id="native"
                  value={editGuest.native}
                  onChange={handleEditGuestFormChange}
                  required
                >
                  <option value="" disabled>Select</option>
                  <option value="IMP">IMP</option>
                  <option value="KM Patti">KM Patti</option>
                  <option value="SelvalPatti">SelvalPatti</option>
                  <option value="VBK">VBK</option>
                  <option value="Varaganoor">Varaganoor</option>
                  <option value="Sivaksi">Sivaksi</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='labelFont'>Moi:</label>
                <input
                  className="labelInput"
                  type="number"
                  name="moi"
                  value={editGuest.moi}
                  onChange={handleEditGuestFormChange}
                  required
                />
                {errors.moi && (
                  <p className="error text-danger">{errors.moi}</p>
                )}
              </div>
              <button onClick={()=>handleEdit(id)} className="mt-4 guestSubmit">Update</button>
            </form>
          </div>
          <div className='col-1'></div>
        </div>
        </main>
   }
   {!editGuest &&
   <main className='container'>
   <div className="row">
       <div className='col-1'></div>
       <div className="col-10 addMoiStyle">
           <h1 className='fw-bold welcomeFont text-center'>Something Edit Option's are wrong</h1>
               <div className='mt-4 totalStyle'>
                   <Link to="/"><p className='totalFont'>May Be Go and Back Check</p></Link>
               </div>
       </div>
       <div className='col-1'></div>
   </div>
 </main>
   } 
   </>
  )
}

export default EditList

