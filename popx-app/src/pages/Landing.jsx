import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="screen-wrapper" style={{ justifyContent: 'flex-end', paddingBottom: '30px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 className="title">Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/signup" className="btn btn-primary">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Already Registered? Login
        </Link>
      </div>
    </div>
  );
}

