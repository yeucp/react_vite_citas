import { Fragment } from "react";
import Patient from "./Patient";

const PatientsList = ({ patients, setCurrentPatient, deletePatient }) => {

  const arePatients = patients.length !== 0;

  return (
    <div className="md:w-1/2 lg:w3/5 md:h-screen overflow-y-scroll">
      {arePatients ? (
        <Fragment>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg my-5 text-center">
            Administra tus pacientes y {""}
            <span className="text-indigo-600 font-bold">citas</span>
          </p>

          {patients.map((patient) => (
            <Patient 
              key={patient.id} 
              patient={patient}
              setCurrentPatient={setCurrentPatient}
              deletePatient={deletePatient}
            />
          ))}
        </Fragment>
      ) : (
        <Fragment>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg my-5 text-center">
            Agrega un paciente {""}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default PatientsList;
