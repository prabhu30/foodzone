import Navbar from './components/Navbar';

import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useContext, useState } from 'react';

function App() {

  const { username } = useContext(UserContext);
  const [user, setUser] = useState(username);

  return (
    <>
      <UserContext.Provider value={{username: user, setUser}}>
        <Navbar />
        <Outlet />
      </UserContext.Provider>
    </>
  )
}

export default App;