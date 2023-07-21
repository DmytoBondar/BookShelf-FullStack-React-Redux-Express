import MainLout from './layout/MainLout'
import { addUser } from './redux/features/auth/authSlice';
import { useAppDispatch } from './redux/hook';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = localStorage.getItem('token')
    if(data){
      dispatch(addUser(JSON.parse(data)))
    }
  }, [dispatch])

  return (
    <>
      <MainLout />
    </>
  )
}
export default App;