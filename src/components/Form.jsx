import { useState, useEffect } from "react";
import ErrorForm from "./ErrorForm";

const Form = ({currentPatient, patients, setPatients, setCurrentPatient }) => {
  const [patient, setPatient] = useState(currentPatient);

  const [valid, setValid] = useState(true);

  useEffect(()=>{
    if(Object.keys(currentPatient).length !== 0){
      setPatient(currentPatient)
    }
  }, [currentPatient])

  const { patientName, ownerName, email, date, symptoms } = patient;

  const onChangeHandler = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //validations
    const values = [
      patientName.trim(),
      ownerName.trim(),
      email.trim(),
      date.trim(),
      symptoms.trim(),
    ];

    if (values.includes("")) {
      setValid(false);
      return;
    }

    setValid(true);

    if(patient.id){
      //edit patient
      const patientsUpdated = patients.map(patientState => patientState.id === patient.id ? patient : patientState)
      setPatients(patientsUpdated)
    }else{
      //save patient
      patient.id = generateId()
      setPatients([...patients, patient]);
    }
    
    
    //clean form
    setPatient({
      patientName: '',
      ownerName: '',
      email: '',
      date: '',
      symptoms: '',
    });

    setCurrentPatient({
      patientName: '',
      ownerName: '',
      email: '',
      date: '',
      symptoms: '',
    })
  };

  const generateId = () => {
    const random = Math.random().toString(36).slice(2)
    const date = Date.now().toString(36)
    return `${random}${date}`
  }

  return (
    <div className="md:w-1/2 lg:w2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg my-5 text-center">
        Agrega pacientes y {""}
        <span className="text-indigo-600 font-bold">administralos</span>
      </p>

      <form
        className="bg-white shadow rounded px-10 py-5"
        onSubmit={onSubmitHandler}
      >
        {!valid && (
          <ErrorForm><p>Todos los campos son requeridos</p></ErrorForm>
        )}
        <div className="mb-5">
          <label
            htmlFor="patientName"
            className="block text-gary-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            type="text"
            id="patientName"
            name="patientName"
            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            value={patientName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="ownerName"
            className="block text-gary-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            value={ownerName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gary-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email contacto propietario"
            value={email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gary-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={onChangeHandler}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gary-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="symptoms"
            name="symptoms"
            className="w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Sintomas..."
            cols="10"
            rows="3"
            onChange={onChangeHandler}
            value={symptoms}
          ></textarea>
        </div>

        <input
          type="submit"
          className=" bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all mb-10"
          value={!patient.id ? 'Agregar paciente' : 'Editar paciente'}
        />
      </form>
    </div>
  );
};

export default Form;
