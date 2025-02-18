import { usePatientStore } from "../store"
import PatientDetails from "./PatientsDetails"

export default function PatientList() {
    
    const patients = usePatientStore(state => state.patients)
    console.log(patients)

    return(
        <div className="md:w1/2 lg:3/5 md:max-h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {""}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                    {patients.map(patient => (
                        <PatientDetails
                            key={patient.id}
                            patient={patient}

                        />
                    ))}
                </>
            ):(
                <>
                    <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza Agregando Pacientes {""}
                        <span className="text-indigo-600 font-bold">y apareceran en este lugar </span>
                    </p>
                </>
            )}
        </div>
    )
}