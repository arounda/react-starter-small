import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Common/Footer/Footer';
import { Header } from '@/components/Common/Header/Header';

const OutletContent: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export const Content = memo(OutletContent);
