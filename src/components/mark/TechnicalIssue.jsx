import React, { useState } from 'react';

const TechnicalIssue = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const displaySuccessMessage = () => {
    setSuccessMessageVisible(true);
  };

  return (
    <div 
    // style={{ marginT : "300px", padding: '20px', backgroundColor: '#f2f2f2' }}
    >
      <h1 style={{ textAlign: 'center' }}>Report Technical Issues</h1>

      <form
        onSubmit={displaySuccessMessage}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          marginTop: '100px',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '4px',
          boxShadow: '0 0 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <label htmlFor="issueType"
        //  style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Issue Type:
        </label>
        <select id="issueType" name="issueType" required>
          <option value="">-- Select Issue Type --</option>
          <option value="bug">Bug</option>
          <option value="error">Error</option>
          <option value="performance">Performance Issue</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />

        <label htmlFor="description" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Issue Description:
        </label>
        <textarea
          id="description"
          name="description"
          required
          style={{ width: '50%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', height: '150px' }}
        ></textarea>
        <br />
        <br />

        <input
          type="submit"
          value="Submit Report"
          style={{
            padding: '10px 20px',
            backgroundColor: '#0033ff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        />
      </form>

      <div
        id="successMessage"
        className="success-message"
        style={{ display: successMessageVisible ? 'block' : 'none', marginTop: '20px', padding: '10px', backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', borderRadius: '4px', textAlign: 'center' }}
      >
        Report submitted successfully!
      </div>
    </div>
  );
};

export default TechnicalIssue;
