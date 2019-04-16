import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div style={{ width: 135, margin: '0 auto' }}>
        <div
          style={{
            width: 40,
            height: 40,
            border: '2px solid',
            borderColor: '#343851',
            borderRadius: 10,
            fontSize: 25,
            textAlign: 'center',
            paddingTop: 3,
            margin: '0 auto',
            marginBottom: 5,
            opacity: 0.2,
          }}
        >
          ↑
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              width: 40,
              height: 40,
              border: '2px solid',
              borderColor: '#343851',
              borderRadius: 10,
              fontSize: 25,
              textAlign: 'center',
              paddingTop: 3,
              margin: '0 auto',
              marginBottom: 5,
              opacity: 0.2,
            }}
          >
            ←
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              border: '2px solid',
              borderColor: '#343851',
              borderRadius: 10,
              fontSize: 25,
              textAlign: 'center',
              paddingTop: 3,
              margin: '0 auto',
              marginBottom: 5,
              opacity: 0.2,
            }}
          >
            ↓
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              border: '2px solid',
              borderColor: '#343851',
              borderRadius: 10,
              fontSize: 25,
              textAlign: 'center',
              paddingTop: 3,
              margin: '0 auto',
              marginBottom: 5,
              opacity: 0.7,
            }}
          >
            →
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          fontSize: 19,
          marginTop: 10,
        }}
      >
        Utilisez le clavier pour naviguer vers le prochain slide.
      </div>
    </footer>
  );
};

export default Footer;
