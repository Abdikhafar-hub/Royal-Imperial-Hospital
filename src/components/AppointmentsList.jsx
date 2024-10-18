import React, { useState } from 'react';

const AppointmentsList = () => {
  const [appointments, setAppointments] = useState([
    { appointment_id: 1, doctor_name: 'Dr. Alice Mwangi', patient_name: 'John Mwangi', appointment_date: '2024-10-20', appointment_time: '09:30', reason: 'General Checkup', status: 'Scheduled' },
    { appointment_id: 2, doctor_name: 'Dr. Duncan Gikonyo', patient_name: 'Ali Ahmed', appointment_date: '2024-10-21', appointment_time: '10:00', reason: 'Follow-up', status: 'Confirmed' }
  ]);

  const [newAppointment, setNewAppointment] = useState({
    doctor_name: '',
    patient_name: '',
    appointment_date: '',
    appointment_time: '',
    reason: '',
    status: 'Scheduled'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { ...newAppointment, appointment_id: appointments.length + 1 }]);
    setNewAppointment({
      doctor_name: '',
      patient_name: '',
      appointment_date: '',
      appointment_time: '',
      reason: '',
      status: 'Scheduled'
    });
  };

  const deleteAppointment = (id) => {
    const updatedAppointments = appointments.filter(appointment => appointment.appointment_id !== id);
    setAppointments(updatedAppointments);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-left">Appointments List</h2>
      <ul className="space-y-4">
        {appointments.map((appointment) => (
          <li key={appointment.appointment_id} className="p-4 border rounded shadow text-left">
            <strong>Doctor:</strong> {appointment.doctor_name} <br />
            <strong>Patient:</strong> {appointment.patient_name} <br />
            <strong>Date:</strong> {appointment.appointment_date} <br />
            <strong>Time:</strong> {appointment.appointment_time} <br />
            <strong>Reason:</strong> {appointment.reason} <br />
            <strong>Status:</strong> {appointment.status} <br />
            <button
              onClick={() => deleteAppointment(appointment.appointment_id)}
              className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-6 text-left">Add New Appointment</h3>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label>Doctor's Name:</label>
          <input type="text" name="doctor_name" value={newAppointment.doctor_name} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Patient's Name:</label>
          <input type="text" name="patient_name" value={newAppointment.patient_name} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="appointment_date" value={newAppointment.appointment_date} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="appointment_time" value={newAppointment.appointment_time} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Reason:</label>
          <input type="text" name="reason" value={newAppointment.reason} onChange={handleChange} required className="border p-2 w-full" />
        </div>
        <div>
          <label>Status:</label>
          <select name="status" value={newAppointment.status} onChange={handleChange} required className="border p-2 w-full">
            <option value="Scheduled">Scheduled</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
          Add Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentsList;
