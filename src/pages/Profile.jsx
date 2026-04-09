import { Camera } from 'lucide-react';

export default function Profile() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
      <header style={{ 
        padding: '15px 20px', 
        fontSize: '16px', 
        fontWeight: '500',
        color: 'var(--text-dark)',
        borderBottom: '1px solid #EAEAEA'
      }}>
        Account Settings
      </header>

      <div style={{ padding: '24px 20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '50%', 
            backgroundColor: '#F3F3F3', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden',
            border: '1px solid #EAEAEA'
          }}>
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#CBCBCB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div style={{ 
            position: 'absolute', 
            bottom: '2px', 
            right: '-2px', 
            backgroundColor: '#FFFFFF',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <Camera size={14} color="var(--primary-purple)" />
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '16px', fontWeight: '500', margin: '0 0 2px 0', color: 'var(--text-dark)' }}>Marry Doe</h2>
          <p style={{ fontSize: '13px', margin: '0', color: 'var(--text-grey)' }}>Marry@Gmail.Com</p>
        </div>
      </div>
      
      <div style={{ 
        padding: '24px 20px',
        borderTop: '1px dashed #CBCBCB',
        marginTop: '10px'
      }}>
        <p style={{ fontSize: '14px', color: 'var(--text-grey)', lineHeight: '1.6' }}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
      <div style={{ margin: 'auto 20px 20px 20px', borderTop: '1px dashed #CBCBCB', paddingTop: '10px' }}></div>
    </div>
  );
}
