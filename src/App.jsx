import { useEffect, useState } from 'react';
import AddGuest from './Components/AddGuest';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Missing from './Components/Missing';
import ShowList from './Components/ShowList';
import Total from './Components/Total';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ShowDetails from './Components/ShowDetails';
import EditList from './Components/EditList';
import Loading from './Components/Loading';
import FetchDataError from './Components/FetchDataError';

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');  
  const [addGuest, setAddGuest] = useState({
    guestName: '',
    native: '',
    moi: ''
  });
  const [editGuest, setEditGuest] = useState({
    guestName: '',
    native: '',
    moi: ''
  });

  const [list, setList] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    try {
      const storedList = JSON.parse(localStorage.getItem('guestList')) || [];
      setList(storedList);
      setFetchError(null);
    } catch (err) {
      console.log(`Error: ${err.message}`);
      setFetchError(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveToLocalStorage = (list) => {
    localStorage.setItem('guestList', JSON.stringify(list));
  };

  const addNewGuest = (addGuest) => {
    const getNextId = () => {
      const maxId = list.reduce((max, guest) => (Number(guest.id) > max ? Number(guest.id) : max), 0);
      return String(maxId + 1);
    };

    const addNewId = getNextId();
    const insertNewGuest = { id: addNewId, name: addGuest.guestName, native: addGuest.native, gift: addGuest.moi };
    const updatedList = [insertNewGuest, ...list];
    setList(updatedList);
    saveToLocalStorage(updatedList);
  };

  const handleSubmitFormADD = (e) => {
    e.preventDefault();
    const trimLeadingTrailingSpaces = (str) => {
      return str.replace(/^\s+|\s+$/g, '');
    };
    const trimmedGuestName = trimLeadingTrailingSpaces(addGuest.guestName);
    if (!trimmedGuestName || !addGuest.native || !addGuest.moi) return;
    const updatedAddGuest = { ...addGuest, guestName: trimmedGuestName };
    addNewGuest(updatedAddGuest);
    setAddGuest({ guestName: '', native: '', moi: '' });
    navigate('/showlist');
  };

  const handleDelete = (id) => {
    const newList = list.filter((guest) => guest.id !== id);
    setList(newList);
    saveToLocalStorage(newList);
    navigate('/showlist');
  };

  const handleEdit = (id) => {
    const trimLeadingTrailingSpaces = (str) => {
      return str.replace(/^\s+|\s+$/g, '');
    };

    const trimmedGuestName = trimLeadingTrailingSpaces(editGuest.guestName);
    if (!trimmedGuestName || !editGuest.native || !editGuest.moi) return;

    const newEditGuest = { id, name: editGuest.guestName, native: editGuest.native, gift: editGuest.moi };
    const updatedList = list.map(item => item.id === id ? { ...newEditGuest } : item);
    const reorderedList = [newEditGuest, ...updatedList.filter(item => item.id !== id)];
    setList(reorderedList);
    saveToLocalStorage(reorderedList);
    setEditGuest({ guestName: '', native: '', moi: '' });
    navigate('/showlist');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='showlist'>
          <Route
            index
            element={
              isLoading ? (
                <Loading />
              ) : fetchError ? (
                <FetchDataError error={fetchError} />
              ) : (
                <ShowList list={list} search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
              )
            }
          />
          <Route path=":id" element={<ShowDetails list={list} handleDelete={handleDelete} fetchError={fetchError} isLoading={isLoading} />} />
        </Route>
        <Route path="/addguest" element={<AddGuest addGuest={addGuest} setAddGuest={setAddGuest} handleSubmitFormADD={handleSubmitFormADD} />} />
        <Route path='/edit/:id' element={<EditList editGuest={editGuest} list={list} setEditGuest={setEditGuest} handleEdit={handleEdit}/>} />
        <Route path="/total" element={<Total list={list} total={total} setTotal={setTotal} />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
