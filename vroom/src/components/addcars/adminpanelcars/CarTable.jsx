import React, { useState ,Fragment} from 'react'
import AddCars from '../AddCars'
import ReadOnlyCars from '../ReadOnlyCars'
import {nanoid} from "nanoid";
import data from "./Car-data.json"
const CarTable = () => {
  
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      carName: "",
      price: "",
      seats: "",
      type: "",
    });
  
    const [editFormData
      
      
      , setEditFormData] = useState({
      carName: "",
      price: "",
      seats: "",
      type: "",
    });
  
    const [editContactId, setEditContactId] = useState(null);
  
    const handleAddFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...addFormData };
      newFormData[fieldName] = fieldValue;
  
      setAddFormData(newFormData);
    };
  
    const handleEditFormChange = (event) => {
      event.preventDefault();
  
      const fieldName = event.target.getAttribute("name");
      const fieldValue = event.target.value;
  
      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;
  
      setEditFormData(newFormData);
    };
  
    const handleAddFormSubmit = (event) => {
      event.preventDefault();
  
      const newContact = {
        id: nanoid(),
        carName: addFormData.carName,
        price: addFormData.price,
        seats: addFormData.seats,
        type: addFormData.type,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        carName: editFormData.carName,
        price: editFormData.price,
        seats: editFormData.seats,
        type: editFormData.email,
      };
  
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === editContactId);
  
      newContacts[index] = editedContact;
  
      setContacts(newContacts);
      setEditContactId(null);
    };
  
    const handleEditClick = (event, contact) => {
      event.preventDefault();
      setEditContactId(contact.id);
  
      const formValues = {
        carName: contact.carName,
        price: contact.price,
        seats: contact.seats,
        email: contact.email,
      };
  
      setEditFormData(formValues);
    };
  
    const handleCancelClick = () => {
      setEditContactId(null);
    };
  
    const handleDeleteClick = (contactId) => {
      const newContacts = [...contacts];
  
      const index = contacts.findIndex((contact) => contact.id === contactId);
  
      newContacts.splice(index, 1);
  
      setContacts(newContacts);
    };
  
    return (
      <div className="app-container">
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Car Name</th>
                <th>Price</th>
                <th>Number of Seats</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <AddCars
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyCars
                      contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
  
        <h2>Add a car</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="carName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="price"
            required="required"
            placeholder="Enter an price..."
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="seats"
            required="required"
            placeholder="Enter number of Seats..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="type"
            required="required"
            placeholder="Enter car type..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
  )
}

export default CarTable