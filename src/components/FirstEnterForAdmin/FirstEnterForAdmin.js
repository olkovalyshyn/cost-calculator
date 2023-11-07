import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { APIURL } from '../../helpers/constants.js';
import { Role } from '../../helpers/enum.js';
import { setIsAdmin } from '../../store/sliceUser.js';

export default function FirstEnterForAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        console.log('### ПЕРЕД АКСІОС ЗАПИТОМ FirstEnterForAdmin!');

        const response = await axios.post(`${APIURL}/api/get-admin`);
        dispatch(setIsAdmin(response.data[0].role === Role.ADMIN));
        console.log('### response in FirstEnterForAdmin!', response);
        console.log('!!response.data[0].role', !!response.data[0].role);
      } catch (error) {
        console.log('### error in FirstEnterForAdmin!', error);
      }
    }

    fetchData();
  });
}
