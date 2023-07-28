import React, { createContext, useState } from 'react';

export const TextContext = createContext();

const Context = ({ children }) => {
  const [textValue, setTextValue] = useState('');
  return (
    <div>
      <TextContext.Provider value={[textValue, setTextValue]}>
        {children}
      </TextContext.Provider>
    </div>
  );
};

export default Context;
