import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });
  
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="screen-wrapper">
      <h1 className="title" style={{ marginTop: '20px', marginBottom: '30px' }}>Create your<br/>PopX account</h1>

      <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="input-group">
          <label className="input-label label-required">Full Name</label>
          <input
            type="text"
            className="input-field"
            name="fullName"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label label-required">Phone number</label>
          <input
            type="tel"
            className="input-field"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label label-required">Email address</label>
          <input
            type="email"
            className="input-field"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label label-required">Password</label>
          <input
            type="password"
            className="input-field"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label non-active">Company name</label>
          <input
            type="text"
            className="input-field"
            name="company"
            placeholder="Enter company name"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div style={{ marginBottom: '30px' }}>
          <p style={{ fontSize: '13px', marginBottom: '12px', fontWeight: '500' }}>
            Are you an Agency?<span style={{color:'var(--error)'}}>*</span>
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleInputChange}
                style={{ accentColor: 'var(--primary-purple)', width: '18px', height: '18px' }}
              />
              Yes
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleInputChange}
                style={{ accentColor: 'var(--primary-purple)', width: '18px', height: '18px' }}
              />
              No
            </label>
          </div>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
