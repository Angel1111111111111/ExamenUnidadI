import {useState} from 'react';

export const useTemperatura = () => {
  const [temperatura, setTemperatura] = useState<number>(20);

  const getTemperatura = (temp: number): string => {
    if (temp < 15) return 'blue';
    if (temp <= 25) return 'green';
    return 'red';
  };

  return {
    temperatura,
    setTemperatura,
    getTemperatura,
  };
};
