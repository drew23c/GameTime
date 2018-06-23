import React from 'react';
import Videos from './Videos';
import Upload from './Upload';
import './Styles/Profile.css';

const Profile = ({name}) =>{
    return(
        <div className="Profile">
            <h1 className="welcome">Welcome, {name}</h1>
            <a href="/logout">Logout</a>

            <p>Videos</p>
            <p>Likes</p>
            <p>Watch Later</p>
            <Upload/>
        </div>
    )
}
export default Profile;