import { createContext, FC, ReactNode, useState } from 'react';

type StoreContextType = {
  counter: number;
  setCounter: (value: number | ((prevState: number) => number)) => void;
};

const defaultStoreValue: StoreContextType = {
  counter: 0,
  setCounter: () => {
    //
  },
};

export const StoreContext = createContext<StoreContextType>(defaultStoreValue);

export const StoreContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [counter, setCounter] = useState(0);

  return (
    <StoreContext.Provider value={{ counter, setCounter }}>
      {children}
    </StoreContext.Provider>
  );
};
