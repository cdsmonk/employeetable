// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { FaEdit, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa";

// const API = "https://jsonplaceholder.typicode.com/users";

// export default function App() {
//   const [employees, setEmployees] = useState([]);
//   const [formData, setFormData] = useState({ name: "", email: "", salary: "", hidden: false });
//   const [editId, setEditId] = useState(null);
//   const [showForm, setShowForm] = useState(false);

//   const fetchData = async () => {
//     const res = await axios.get(API);
//     const dummyData = res.data.slice(0, 5).map((e) => ({
//       ...e,
//       salary: Math.floor(Math.random() * 100000),
//       hidden: false,
//     }));
//     setEmployees(dummyData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//    const handleSave = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.salary) {
//       return toast.error("Fill all fields");
//     }

//     if (editId) {
//       const updated = { ...formData, id: editId };
//       await axios.put(`${API}/${editId}`, updated); // ✅ Fixed interpolation
//       setEmployees((prev) =>
//         prev.map((emp) => (emp.id === editId ? updated : emp))
//       );
//       toast.success("Employee updated");
//     } else {
//       const newEmp = { ...formData, id: Date.now() };
//       await axios.post(API, newEmp);
//       setEmployees([...employees, newEmp]);
//       toast.success("Employee added");
//     }

//     setFormData({ name: "", email: "", salary: "", hidden: false });
//     setEditId(null);
//     setShowForm(false);
//   };

//   const handleEdit = (emp) => {
//     setFormData(emp);
//     setEditId(emp.id);
//     setShowForm(true);
//   };
//     const handleDelete = async (id) => {
//     await axios.delete(`${API}/${id}`); // ✅ Fixed interpolation
//     setEmployees(employees.filter((e) => e.id !== id));
//     toast.info("Employee deleted");
//   };

//   const toggleHide = (id) => {
//     setEmployees((prev) =>
//       prev.map((e) => (e.id === id ? { ...e, hidden: !e.hidden } : e))
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <ToastContainer />
//       <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold">Employee Manager</h1>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             onClick={() => {
//               setFormData({ name: "", email: "", salary: "", hidden: false });
//               setEditId(null);
//               setShowForm(true);
//             }}
//           >
//             + Add Employee
//           </button>
//         </div>
//              {showForm && (
//           <form
//             onSubmit={handleSave}
//             className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded"
//           >
//             <input
//               className="p-2 border rounded"
//               placeholder="Name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             />
//             <input
//               className="p-2 border rounded"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//             <input
//               className="p-2 border rounded"
//               placeholder="Salary"
//               type="number"
//               value={formData.salary}
//               onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
//             />
//             <div className="col-span-full flex justify-end gap-3">
//               <button type="button" onClick={() => setShowForm(false)} className="border px-4 py-2 rounded">
//                 Cancel
//               </button>
//               <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
//                 {editId ? "Update" : "Save"}
//               </button>
//                </div>
//           </form>
//         )}

//         <table className="w-full border text-left">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Email</th>
//               <th className="p-2 border">Salary (₹)</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id} className={emp.hidden ? "bg-gray-100 text-gray-400" : ""}>
//                 <td className="p-2 border">{emp.name}</td>
//                 <td className="p-2 border">{emp.email}</td>
//                 <td className="p-2 border">₹ {emp.salary}</td>
//                 <td className="p-2 border">{emp.hidden ? "Hidden" : "Visible"}</td>
//                 <td className="p-2 border space-x-2 text-lg flex gap-3 items-center">
//                   <button onClick={() => handleEdit(emp)} className="text-yellow-600 hover:text-yellow-800">
//                     <FaEdit />
//                   </button>
//                   <button onClick={() => handleDelete(emp.id)} className="text-red-600 hover:text-red-800">
//                     <FaTrash />
//                   </button>
//                   <button onClick={() => toggleHide(emp.id)} className="text-blue-600 hover:text-blue-800">
//                     {emp.hidden ? <FaEye /> : <FaEyeSlash />}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {employees.length === 0 && (
//               <tr>
//                 <td colSpan="5" className="text-center p-4 text-gray-500">
//                   No employees found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React from "react";
import Employee from "./components/Employee";

function App() {
  return (
    <div className="App">
      <Employee />
    </div>
  );
}
