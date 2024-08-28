import React from 'react'

const Search = ({ search, setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
    <main className='container-fluid'>
        <div className='row'>
            <div className='col-12 mt-2 text-center'>
                <form className='formBoxes' onSubmit={(e)=>e.preventDefault()}>
                    <input type='text' placeholder='Search Guest' id="search" value={search} onChange={handleSearchChange}/>
                </form>
            </div>
        </div>
    </main>
    </>
  )
}

export default Search