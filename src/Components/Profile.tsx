import React from 'react';
import "../Styles/profile.css";

const Profile = (props : any) : JSX.Element => {
  return (
    <div className="profile smartWage-align-horizontal">
      <img className="avatarPicture" src={props.profilePic} alt={"profilePicture"}/>
      <section className='profile-info'>
        <p className="profile-name sw-mt-20 smartWage-typography-normal">Mike Metelerkamp</p>
        <p className="profile-client-name smartWage-typography-light">McDonalds</p>
      </section>
    </div>
  )
}

export default Profile