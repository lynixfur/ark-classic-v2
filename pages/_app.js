import '../styles/globals.css'
import Layout from '../components/layout'
import { useState, useEffect } from "react";
import { AppContext } from "../context/AuthContext";
import auth_service from '../services/auth_service';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    load_app();
  }, [])

  const load_app = async() => {
    const data = await auth_service.fetchSession();
    if(data.user) setUser(data.user);
  }

  return (
    <AppContext.Provider value={{user, setUser}}>
        <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp