import { useSelector } from 'react-redux';

export default function Greeting() {
  const userEmail = useSelector(state => state.data.user.email);

  return <h3>Користувач: {userEmail}</h3>;
}
