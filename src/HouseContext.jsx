import { createContext, useState, useContext } from 'react';

const HouseContext = createContext();

export const HouseProvider = ({ children }) => {
  const [house, setHouse] = useState('Gryffindor');
  const [points, setPoints] = useState(100);

  const switchHouse = (newHouse) => setHouse(newHouse);
  const addPoints = (amt) => setPoints(prev => prev + amt);

  // Values shared across the Great Hall (App)
  const magicValues = {
    house,
    points,
    switchHouse,
    addPoints,
    theme: house === 'Gryffindor' ? { color: '#740001', accent: '#eeba30' } : { color: '#1a472a', accent: '#aaaaaa' }
  };

  return (
    <HouseContext.Provider value={magicValues}>
      {children}
    </HouseContext.Provider>
  );
};

export const useHouse = () => useContext(HouseContext);