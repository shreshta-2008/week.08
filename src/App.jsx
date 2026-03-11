import { useHouse } from './HouseContext';
import './App.css';

function App() {
  const { house, points, switchHouse, addPoints, theme } = useHouse();

  return (
    <div style={{ textAlign: 'center', color: theme.accent }}>
      {/* Visual representation of the animated background elements */}
      <div className="candle" style={{ left: '10%', animationDelay: '0s' }}></div>
      <div className="candle" style={{ left: '30%', animationDelay: '2s' }}></div>
      <div className="candle" style={{ left: '70%', animationDelay: '1s' }}></div>
      <div className="candle" style={{ left: '90%', animationDelay: '3.5s' }}></div>

      <h1 style={{ fontSize: '4rem', textShadow: `2px 2px 10px ${theme.color}` }}>
        The Great Hall
      </h1>
      
      <div className="card" style={{ border: `3px solid ${theme.color}`, padding: '20px', background: 'rgba(255,255,255,0.1)' }}>
        <h2>Current House: {house}</h2>
        <h3>House Points: {points}</h3>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={() => addPoints(10)}>Award 10 Points!</button>
          
          <button 
            onClick={() => switchHouse(house === 'Gryffindor' ? 'Slytherin' : 'Gryffindor')}
            style={{ borderColor: theme.color }}
          >
            Sort to {house === 'Gryffindor' ? 'Slytherin' : 'Gryffindor'}
          </button>
        </div>
      </div>

      <p className="read-the-docs">
        "It is our choices, Harry, that show what we truly are, far more than our abilities."
      </p>
    </div>
  );
}

export default App;