import { FC } from 'react';

import { SearchParamsContextProvider } from '@/context/searchParams';
import { StoreContextProvider } from '@/context/store';

import { Content } from './components/Content';

export const Layout: FC = () => {
  return (
    <SearchParamsContextProvider>
      <StoreContextProvider>
        <Content />
      </StoreContextProvider>
    </SearchParamsContextProvider>
  );
};
