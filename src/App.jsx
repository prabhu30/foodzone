import Navbar from './components/Navbar';

import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useContext, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {

  const { username } = useContext(UserContext);
  const [user, setUser] = useState(username);

  return (
    <>
      <Provider store={appStore}>
        <UserContext.Provider value={{username: user, setUser}}>
          <Navbar />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  )
}

export default App;