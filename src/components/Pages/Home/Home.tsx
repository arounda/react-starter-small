import { useQuery } from '@tanstack/react-query';
import { FC, useContext } from 'react';

import { getData } from '@/apis/getData';
import { StoreContext } from '@/context/store';

import s from './Home.module.scss';

const url = `${import.meta.env.VITE_API_URL}/starships/9`;

export const Home: FC = () => {
  const store = useContext(StoreContext);
  const { counter, setCounter } = store || {};

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['userData', url],
    queryFn: getData,
  });

  return (
    <div className={s.root}>
      <div>
        <h1 className={s.heading}>React Context test counter: {counter}</h1>
        <div className={s.buttonsGroup}>
          <button
            className={`${s.button} ${s.primary}`}
            onClick={() => setCounter((prevState) => prevState + 1)}
          >
            Increase
          </button>
          <button
            className={`${s.button} ${s.secondary}`}
            onClick={() => setCounter((prevState) => prevState - 1)}
          >
            Decrease
          </button>
        </div>
        <div className={s.card}>
          {isLoading ? (
            <div className={s.text}>Loading...</div>
          ) : (
            <>
              {isSuccess ? (
                <>
                  <h2 className={s.heading2}>SWAPI API test: get starship</h2>
                  <div className={s.items}>
                    <div className={s.item}>Name: {data.name}</div>
                    <div className={s.item}>Model: {data.model}</div>
                    <div className={s.item}>
                      Manufactered: {data.manufacturer}
                    </div>
                  </div>
                </>
              ) : (
                <div className={s.text}>
                  Failed to fetch data for some reasone
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
