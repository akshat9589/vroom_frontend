import React, { useState ,Fragment} from 'react'
import AddBikes from '../AddBikes'
import ReadOnlyRow from '../ReadOnlyRows'
import {nanoid} from "nanoid";
import data from "../mock-data.json"

const BikeTable = () => {
  
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
      bikeName: "",
     price: "",
     type: "",
      km: "",
    });
  
    const [editFormData
      
      
      , setEditFormData] = useState({
      bikeName: "",
     price: "",
     type: "",
      km: "",
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
        bikeName: addFormData.bikeName,
       price: addFormData.address,
       type: addFormData.phoneNumber,
        km: addFormData.km,
      };
  
      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
    };
  
    const handleEditFormSubmit = (event) => {
      event.preventDefault();
  
      const editedContact = {
        id: editContactId,
        bikeName: editFormData.bikeName,
       price: editFormData.address,
       type: editFormData.phoneNumber,
        km: editFormData.km,
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
        bikeName: contact.bikeName,
       price: contact.address,
       type: contact.phoneNumber,
        km: contact.km,
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
                <th>Name</th>
                <th>Price</th>
                <th>Type</th>
                <th>km</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <Fragment>
                  {editContactId === contact.id ? (
                    <AddBikes
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
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
  
        <h2>Add a Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="bikeName"
            required="required"
            placeholder="Enter a name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="address"
            required="required"
            placeholder="Enter anprice..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="phoneNumber"
            required="required"
            placeholder="Enter a phone number..."
            onChange={handleAddFormChange}
          />
          <input
            type="km"
            name="km"
            required="required"
            placeholder="Enter an km..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
  )
}

export default BikeTable