
import './App.css'
import ProcesszorForm from './components/ProcesszorForm'
import { useState } from 'react'
import { useEffect } from 'react'
import ProcesszorTable from './components/ProcesszorTable'
function App() {
  const url = 'http://localhost:8000/api/processzors'

  const [processzorok, setProcesszorok] = useState([]);
  const [updateId, setupdateId] = useState(0);
  const [updateProcesszor, setupdateProcesszorData] = useState({});
  useEffect(() => {
    listProcesszorok();
  }, []);
  const listProcesszorok = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProcesszorok(data);
    console.log(data);
  }
  const processzorUpload = async (processzor) => {
    console.log(processzor);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(processzor),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    const data = await response.json();
    if (response.ok) {
      listProcesszorok();
      return true
    } else {
      alert(data.message)
      return false
    } 
  }
  const deleteProcesszor = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      listProcesszorok();
    }
    else {
      const data = await response.json();
      alert(data.message);
    }
  }

  const loadUpdateForm = async (id) => {
    setupdateId(id);
  }
  const processzorUpdate = async (processzor) => {
    const response = await fetch(`${url}/${updateId}`, {
      method: 'PUT',
      body: JSON.stringify(processzor),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    if (response.ok) {
      listProcesszorok();
      setupdateId(0);
      return true
    }
    else {
      alert(data.message);
      return false
    }
  }

  const readSingleProcesszor = async () => {
    const response = await fetch(`${url}/${updateId}`, {
      headers: {
        Accept: 'application/json'
      }
    })
    const data = await response.json();
    if (response.ok) {
      setupdateProcesszorData(data);
    }
    else {
      alert(data.message);
    }
  }
  useEffect(() => {
    if(updateId == 0) {
      setupdateProcesszorData({});
    }
    else {
      readSingleProcesszor(updateId);
    }
  }, [updateId]);
  return (
    <main className='container'>
    <section>
    {
      updateId == 0 ?    
    <>

      <ProcesszorForm onSubmit={processzorUpload}/>
    </>
    :
    <>
      <ProcesszorForm onSubmit={processzorUpdate} processzor={updateProcesszor} buttontext={'Módosítás'}/>
    </>
    }
    </section>

      <section className='container text-center mt-3 mb-3'>
      <h2>Processzorok</h2>
        <div className='row row-cols-lg-2 row-cols-1 gy-3' >
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Gyártó</th>
                <th>Típus</th>
                <th>Órajel</th>
                <th>Architektúra</th>
                <th>Megjelenés dátuma</th>
              </tr>
            </thead>
            <tbody>
              {processzorok.map((processzor) => (
                <ProcesszorTable key={processzor.id} processzor={processzor} updateClick={loadUpdateForm} deleteClick={deleteProcesszor}/>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
    
  )
}

export default App
