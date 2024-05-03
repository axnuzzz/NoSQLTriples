import React, { useState } from 'react';
import './MergeControls.css'

const MergeControls = () => {

    const [mergeServerId, setMergeServerId] = useState('');

    const handleMerge = () => {
        console.log(`Performing merge with server id: ${mergeServerId}`);
    }

  return (
    <div className="container mt-4">
        <h3>Merge Servers</h3>
        <div className="input-group mb-3">
            <input type="text" className="form-control merge-form" value={mergeServerId} onChange={(e) => setMergeServerId(e.target.value)} placeholder="Server ID" />
            <button className="btn btn-primary merge-form-btn" type="button" onClick={handleMerge}>Merge</button>
        </div>
    </div>
  )
}

export default MergeControls