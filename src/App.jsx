import { useState, useEffect } from "react";

import Form from "./components/Form";
import Header from "./components/Header";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [currentPatient, setCurrentPatient] = useState({
    patientName: '',
    ownerName: '',
    email: '',
    date: '',
    symptoms: '',
  });

  useEffect(()=>{
    const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? []
    setPatients(patientsLocalStorage)
  }, [])

  useEffect(()=>{
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])

  const deletePatient = id => {
    const patientsUpdated = patients.filter(patientState => id !== patientState.id)
    setPatients(patientsUpdated)
  }

  return (
    <div className="container bg-gray-100 mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          currentPatient={currentPatient} 
          setCurrentPatient={setCurrentPatient}
          patients={patients} 
          setPatients={setPatients}
        />
        <PatientsList 
          patients={patients}
          setCurrentPatient={setCurrentPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
