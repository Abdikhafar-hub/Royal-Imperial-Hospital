import React, { useState } from 'react';

const PatientsList = () => {
  const [patients, setPatients] = useState([
    { patient_id: 1, name: 'John Mwangi', date_of_birth: '1990-05-20', address: '123 Street, Nairobi', contact_number: '+254701234567', email: 'john@example.com' },
    { patient_id: 2, name: 'Ali Ahmed', date_of_birth: '1985-10-15', address: '456 Avenue, Mombasa', contact_number: '+254712345678', email: 'ali@example.com' },
  ]);

  const [newPatient, setNewPatient] = useState({
    name: '', date_of_birth: '', address: '', contact_number: '', email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, { ...newPatient, patient_id: patients.length + 1 }]);
    setNewPatient({ name: '', date_of_birth: '', address: '', contact_number: '', email: '' });
  };

  const handleDelete = (patient_id) => {
    const updatedPatients = patients.filter(patient => patient.patient_id !== patient_id);
    setPatients(updatedPatients);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-left">Patients List</h2>
      <ul className="space-y-4">
        {patients.map((patient) => (
          <li key={patient.patient_id} className="p-4 border rounded shadow text-left">
            <strong>Name:</strong> {patient.name} <br />
            <strong>Date of Birth:</strong> {patient.date_of_birth} <br />
            <strong>Address:</strong> {patient.address} <br />
            <strong>Contact:</strong> {patient.contact_number} <br />
            <strong>Email:</strong> {patient.email} <br />
            <button onClick={() => handleDelete(patient.patient_id)} className="mt-2 bg-red-500 text-white py-1 px-3 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-left">Add New Patient</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newPatient.name} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="date_of_birth" value={newPatient.date_of_birth} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={newPatient.address} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Contact Number:</label>
          <input type="text" name="contact_number" value={newPatient.contact_number} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={newPatient.email} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Add Patient
        </button>
      </form>
    </div>
  );
};

export default PatientsList;
