import React, { PropsWithChildren, useEffect } from 'react';
import styles from './styles.css';
import Avatar from '../../containers/AvatarContainer';

interface IProfileLayoutReduxProps {
 username : string;
 profileId : number;
 boy_name : string;
 girl_name : string;  
 getNotes : (profileId : number) => void;
}

export const ProfileLayout : React.FunctionComponent<PropsWithChildren<IProfileLayoutReduxProps>> = (props) => {
  const { children, username, profileId, boy_name, girl_name, getNotes } = props;

  useEffect(() => {
    profileId !== 0 && getNotes(profileId);
  }, [profileId]);

  return (
    <section className={styles.profile__container}>
      <div className={styles.profile__info}>
        <Avatar />
        <div>
          <h2>{username}</h2>
          <span>{girl_name} ❤️ ️{boy_name}</span>
        </div>
      </div>
      {children}
    </section>
  );
};