import React, { useState } from 'react';

const AddGuest = ({ addGuest, setAddGuest, handleSubmitFormADD }) => {

  const[errors,setErrors] =  useState({
    guestName: '',
    moi:'',
  })
  const handleAddGuestFormChange = (e) => {
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

    setAddGuest({
      ...addGuest,
      [name]: value,
    });
  };

  return (
    <>
      <main className='container'>
        <div className="row">
          <div className='col-1'></div>
          <div className="col-10 addMoiStyle">
            <h1 className='fw-bold welcomeFont text-center'>Add Guest "MOI"</h1>
            <form className='mt-4' onSubmit={handleSubmitFormADD}>
              <div className='mb-4'>
                <label className='labelFont'>Name:</label>
                <input
                  className="labelInput"
                  type="text"
                  id="guestName"
                  name="guestName"
                  value={addGuest.guestName}
                  onChange={handleAddGuestFormChange}
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
                  value={addGuest.native}
                  onChange={handleAddGuestFormChange}
                  className='selectStyle2'
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
                  value={addGuest.moi}
                  onChange={handleAddGuestFormChange}
                  required
                />
                {errors.moi && (
                  <p className="error text-danger">{errors.moi}</p>
                )}
              </div>
              <button type='submit' className="mt-4 guestSubmit">Submit</button>
            </form>
          </div>
          <div className='col-1'></div>
        </div>
      </main>
    </>
  );
};

export default AddGuest;
