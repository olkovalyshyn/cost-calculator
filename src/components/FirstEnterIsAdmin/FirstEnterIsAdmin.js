import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { APIURL } from '../../helpers/constants.js';
import { Role } from '../../helpers/enum.js';
import {
  resetToInitialState,
  setIsAdmin,
  setIsShowChoiceBtnsForAdmin,
  setUserInStore,
} from '../../store/sliceUser.js';

export default function FirstEnterForAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        // dispatch(resetToInitialState());
        console.log('### ПЕРЕД АКСІОС ЗАПИТОМ FirstEnterForAdmin!');

        const response = await axios.post(`${APIURL}/api/get-admin`);
        console.log('### response in FirstEnterForAdmin!', response);

        console.log(
          '### response.data[0]?.role in FirstEnterForAdmin!',
          response.data[0]?.role,
        );
        // dispatch(setUserInStore(response.data[0]));
        dispatch(setIsAdmin(response.data[0]?.role === Role.ADMIN));
        // dispatch(
        //   setIsShowChoiceBtnsForAdmin(response.data[0]?.role === Role.ADMIN),
        // );

        console.log('!!response.data[0].role', !!response.data[0]?.role);
      } catch (error) {
        console.log('### error in FirstEnterForAdmin!', error);
      }
    }

    fetchData();
  });
}
