import React, { useState} from 'react';
import './QueryForm.css'

const QueryForm = () => {
    const [queryInput, setQueryInput] = useState("")

    const handleQuery = () => {
        console.log(`Performing query with subject: ${queryInput}`);
    }

  return (
    <div className="container mt-4">
        <h3>Query Triples</h3>
        <div className="input-group mb-3">
            <input type="text" className="form-control query-form" value={queryInput} onChange={(e) => setQueryInput(e.target.value)} placeholder="Query"/>
            <button className="btn btn-primary query-form-btn" type="button" onClick={handleQuery}>Query</button>
        </div>
    </div>
  )
}

export default QueryForm