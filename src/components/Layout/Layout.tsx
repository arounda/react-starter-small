import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { SearchParamsContextProvider } from '@/context/searchParams';
import { StoreContextProvider } from '@/context/store';

import { Footer } from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header';

export const Layout: FC = () => {
  return (
    <SearchParamsContextProvider>
      <StoreContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </StoreContextProvider>
    </SearchParamsContextProvider>
  );
};
