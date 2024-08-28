import React from 'react'

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
 
  return (
    <>
   <main className='container-fluid'>
        <div className='row'>
          <div className='col-12 mt-2 text-center'>
                <form className='formBoxes'>
                <select
                  name="native"
                  id="native"
                  value={filter}
                  onChange={handleFilterChange}
                  className='selectStyle'
                  required

                >
                  <option value="">Select</option>
                  <option value="IMP">IMP</option>
                  <option value="KM Patti">KM Patti</option>
                  <option value="SelvalPatti">SelvalPatti</option>
                  <option value="VBK">VBK</option>
                  <option value="Varaganoor">Varaganoor</option>
                  <option value="Sivaksi">Sivaksi</option>
                </select>
                </form>
            </div>
        </div>
    </main>
    </>
  )
}

export default Filter