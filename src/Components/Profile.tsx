import React from 'react';
import "../Styles/profile.css";

const Profile = (props : any) : JSX.Element => {
  return (
    <div className="profile smartWage-align-horizontal">
      <img className="avatarPicture sw-icon-width" src={props.profilePic} alt={"profilePicture"}/>
      <section className='profile-info'>
        <p className="profile-name sw-mt-20 smartWage-typography-normal">Mike Metelerkamp</p>
        <p className="profile-client-name smartWage-typography-light">McDonalds</p>
      </section>
      <img className='selectorIcon sw-icon sw-mt-20' src={props.SelectorIcon} alt="selectorIcon" />
    </div>
  )
}

export default Profile