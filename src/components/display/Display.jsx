import React, { useState } from 'react';

function Display() {
  // State to manage input values
  const [formData, setFormData] = useState({
     date: '',
    description: '',
    category: '',
    amount: '' });
  // State to manage table data
  const [tableData, setTableData] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add new data to the table
    setTableData([...tableData, formData]);
    // Clear the form
    setFormData({ 
      date: '',
    description: '',
    category: '',
    amount: '' });
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div  className='form2'>
      <form className='form'  onSubmit={handleSubmit}>
        <label>
         
          <input
            placeholder='Date'
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </label>
        <label>
         
          <input
            placeholder='Description'
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
         
          <input
            placeholder='Category'
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
          placeholder='Amount'
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
        <button className='btn'  type="submit">Add Transaction</button>
      </form>
     
      <table className='tb'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Display;
