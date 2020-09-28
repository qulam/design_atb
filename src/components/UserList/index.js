import React from 'react';
import './style.scss';

import removeIcon from '../../assets/images/icons/removeIcon.svg';

const UserList = (props) => {
    const {user, removeUser} = props;

    return (
        <div className="userListComponent">
            {user.user_full_name}
            <img onClick={(e) => removeUser(user.id)} className="removeIcon" src={removeIcon} alt=""/>
        </div>
    )

};

export default UserList;