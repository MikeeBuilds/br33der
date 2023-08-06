import React from 'react';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#91e8cf', color: '#e891aa', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1>Welcome to P0xLL3N DEX</h1>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Login</h2>
        <button>Login</button>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>DEX</h2>
        <button>Explore Seeds</button>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Checkout</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
}
