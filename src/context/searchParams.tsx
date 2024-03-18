import { createContext, FC, ReactNode, useContext } from 'react';
import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

type SearchParamsContextType = {
  searchParams: URLSearchParams;
  setSearchParams: (newParams: URLSearchParamsInit) => void;
};

const SearchParamsContext = createContext<SearchParamsContextType | null>(null);

export const useUrlSearchParamsContext = () => {
  const context = useContext(SearchParamsContext);
  if (!context) {
    throw new Error(
      'useSearchParamsContext must be used within a SearchParamsProvider',
    );
  }
  return context;
};

export const SearchParamsContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SearchParamsContext.Provider
      value={{
        searchParams,
        setSearchParams,
      }}
    >
      {children}
    </SearchParamsContext.Provider>
  );
};
