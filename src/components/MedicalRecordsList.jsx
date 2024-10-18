import React, { useState } from 'react';

const MedicalRecordsList = () => {
  const [medicalRecords, setMedicalRecords] = useState([
    { record_id: 1, patient_name: 'Allan Musau', date_created: '2024-10-10', notes: 'General Checkup', diagnosis: 'Flu' },
    { record_id: 2, patient_name: 'Jane Wanjiku', date_created: '2024-10-11', notes: 'Headache', diagnosis: 'Migraine' },
  ]);

  const [newRecord, setNewRecord] = useState({
    patient_name: '', date_created: '', notes: '', diagnosis: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicalRecords([...medicalRecords, { ...newRecord, record_id: medicalRecords.length + 1 }]);
    setNewRecord({ patient_name: '', date_created: '', notes: '', diagnosis: '' });
  };

  const deleteRecord = (id) => {
    const updatedRecords = medicalRecords.filter(record => record.record_id !== id);
    setMedicalRecords(updatedRecords);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-left">Medical Records</h2>
      <ul className="space-y-4">
        {medicalRecords.map((record) => (
          <li key={record.record_id} className="p-4 border rounded shadow text-left">
            <strong>Patient:</strong> {record.patient_name} <br />
            <strong>Date:</strong> {record.date_created} <br />
            <strong>Notes:</strong> {record.notes} <br />
            <strong>Diagnosis:</strong> {record.diagnosis} <br />
            <button onClick={() => deleteRecord(record.record_id)} className="mt-2 bg-red-500 text-white py-1 px-3 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-left">Add New Medical Record</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label>Patient's Name:</label>
          <input type="text" name="patient_name" value={newRecord.patient_name} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date_created" value={newRecord.date_created} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Notes:</label>
          <input type="text" name="notes" value={newRecord.notes} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Diagnosis:</label>
          <input type="text" name="diagnosis" value={newRecord.diagnosis} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Add Record
        </button>
      </form>
    </div>
  );
};

export default MedicalRecordsList;
