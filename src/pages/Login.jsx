import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/profile');
    }
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <div className="screen-wrapper">
      <div style={{ marginTop: '20px', marginBottom: '30px' }}>
        <h1 className="title">Signin to your<br/>PopX account</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>

      <form onSubmit={handleLogin} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="input-group">
          <label className="input-label">Email Address</label>
          <input
            type="email"
            className="input-field"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className={`btn ${isFormValid ? 'btn-primary' : 'btn-disabled'}`}
          disabled={!isFormValid}
          style={{ marginTop: '10px' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
