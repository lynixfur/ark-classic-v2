import React from 'react';
import Fade from "react-reveal/Fade";
import { useAuth } from '../../context/AuthContext';
import GitHubIcon from '@mui/icons-material/GitHub';
import auth_service from '../../services/auth_service';
import { PrimaryButton, SecondaryButton } from "../index";

function Landing() {
    const { user, setUser, setModalOpen } = useAuth();

    const handleLogout = async() => {
      try {
        const data = await auth_service.logout();
        if(data.success) setUser(data.user);
        else throw new Error("Something went wrong...");
      } catch (err) {
        console.error(err);
      }
    }

    return (
      <div className='app_wrapper'>
        <Fade duration={1000} top distance="20px">
        <div className='app_content'>
          {user ? <><img src={user.avatar} alt={user.username} style={{marginBottom: '30px'}}/><h1>Welcome back, {user.username} !</h1></> : <h1>The next generation of <br/> ShadowmaneAPI.</h1>}
          <p>Implement a secure authentication system for Bloody ARK Hub built with<br/>Passport that supports custom credentials and third party logins.<br></br><br></br>Ready for the next Generation of Unreal Engine & ARK 2</p>
        </div>
        </Fade>
      </div>
    )
}

export default Landing;