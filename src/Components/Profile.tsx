import React from 'react';
import { useSelector } from 'react-redux';
import "../Styles/profile.css";
import {UserModel} from "../Utility/UserModel";

const Profile = (props : any) : JSX.Element => {
  const profileInfo : any = useSelector<UserModel>((state) => state);

  return (
    <div className="profile smartWage-align-horizontal">
      <img className="avatarPicture sw-icon-width" src={props.profilePic} alt={"profilePicture"}/>
      <section className='profile-info'>
        <p className="profile-name sw-mt-20 smartWage-typography-normal">{profileInfo.user}</p>
        <p className="profile-client-name smartWage-typography-light">{profileInfo.company}</p>
      </section>
      <img className='selectorIcon sw-icon sw-mt-20' src={props.SelectorIcon} alt="selectorIcon" />
    </div>
  )
}

export default Profile