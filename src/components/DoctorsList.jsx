import React from 'react';

const DoctorsList = () => {
  const doctors = [
    { doctor_id: 1, name: 'Dr. Alice Mwangi', specialization: 'Cardiologist', contact_number: '+254701234567', department: 'Cardiology' },
    { doctor_id: 2, name: 'Dr. Issack Ali', specialization: 'Neurologist', contact_number: '+254712345678', department: 'Neurology' },
    { doctor_id: 3, name: 'Dr. Milton Obilo', specialization: 'Orthopedic surgeon', contact_number: '+254722345679', department: 'Orthopedics' },
    { doctor_id: 4, name: 'Dr. Wambua Steven', specialization: 'Dermatologist', contact_number: '+254733456789', department: 'Dermatology' },
    { doctor_id: 5, name: 'Dr. Elizabeth Anyango', specialization: 'Pediatrician', contact_number: '+254744567890', department: 'Pediatrics' },
    { doctor_id: 6, name: 'Dr. Frank Martin', specialization: 'Ophthalmologist', contact_number: '+254755678901', department: 'Ophthalmology' },
    { doctor_id: 7, name: 'Dr. Grace Wambui', specialization: 'Gynecologist', contact_number: '+254766789012', department: 'Gynecology' },
    { doctor_id: 8, name: 'Dr. Henry Elvis', specialization: 'General Surgeon', contact_number: '+254777890123', department: 'Surgery' },
    { doctor_id: 9, name: 'Dr. Duncun Gikonyo', specialization: 'Psychiatrist', contact_number: '+254788901234', department: 'Psychiatry' },
    { doctor_id: 10, name: 'Dr. James Kelvin', specialization: 'Endocrinologist', contact_number: '+254799012345', department: 'Endocrinology' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Doctors List</h2>
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-4">Name</th>
            <th className="border-b p-4">Specialization</th>
            <th className="border-b p-4">Contact Number</th>
            <th className="border-b p-4">Department</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.doctor_id} className="hover:bg-gray-100">
              <td className="border-b p-4">{doctor.name}</td>
              <td className="border-b p-4">{doctor.specialization}</td>
              <td className="border-b p-4">{doctor.contact_number}</td>
              <td className="border-b p-4">{doctor.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsList;
