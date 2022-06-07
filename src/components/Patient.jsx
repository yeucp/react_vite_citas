const Patient = ({patient, setCurrentPatient, deletePatient}) => {

  const {id, patientName, ownerName, email, date, symptoms} = patient

  const handleDelete = id => {
    const confirmDelete = confirm('Desea eliminar este paciente?')
    if(confirmDelete){
      deletePatient(id)
    }
  }

  return (
    <div className="mx-3 mb-3 bg-white shadow rounded px-10 py-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {''}
        <span className="font-normal normal-case">{patientName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {''}
        <span className="font-normal normal-case">{ownerName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de alta: {''}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {''}
        <span className="font-normal normal-case">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button 
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
          onClick={() => setCurrentPatient(patient)}
        >Editar</button>
        <button 
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded"
          onClick={()=> handleDelete(id)}
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Patient;
