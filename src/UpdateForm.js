import React, { useState } from 'react'
import './UpdateForm.css';

const UpdateForm = () => {
    const [updateSubject, setUpdateSubject] = useState('');
    const [updatePredicate, setUpdatePredicate] = useState('');
    const [updateObject, setUpdateObject] = useState('');

    const handleUpdate = () => {
        console.log(`Performing update with subject: ${updateSubject}, predicate: ${updatePredicate}, object: ${updateObject}`);
    }
  return (
    <div className="container mt-4">
            <h3>Update Triples</h3>
            <div className="input-group mb-3">
                <input type="text" className="form-control update-form" value={updateSubject} onChange={(e) => setUpdateSubject(e.target.value)} placeholder="Subject" />
                <input type="text" className="form-control update-form" value={updatePredicate} onChange={(e) => setUpdatePredicate(e.target.value)} placeholder="Predicate" />
                <input type="text" className="form-control update-form" value={updateObject} onChange={(e) => setUpdateObject(e.target.value)} placeholder="Object" />
                <button className="btn btn-primary update-form-btn" type="button" onClick={handleUpdate}>Update</button>
            </div>
        </div>
  )
}

export default UpdateForm