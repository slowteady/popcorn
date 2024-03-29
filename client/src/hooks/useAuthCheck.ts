import { useState } from 'react';
import { useQuery } from 'react-query';
import { Location } from 'react-router-dom';
import { authCheck } from '../service/userService';
import { errorHandler } from '../utils/exceptionHandler';
import { objValidation } from '../utils/validation';

const RESPONSE_DATA_KEY = 'user';

const useAuthCheck = (location: Location) => {
  const [isLogined, setIsLogined] = useState(false);

  const { isLoading } = useQuery(['authCheck', location.pathname], authCheck, {
    onSuccess: (payload) => {
      const { data } = payload;
      const validation = objValidation(data);
      const userData = data.user;

      if (validation.isNotEmpty() && typeof userData === 'object' && validation.hasKey(RESPONSE_DATA_KEY)) {
        setIsLogined(true);
      } else {
        setIsLogined(false);
      }
    },
    onError: (error: Error) => {
      errorHandler(error);
    }
  });

  return { isLogined, isLoading };
};

export default useAuthCheck;
