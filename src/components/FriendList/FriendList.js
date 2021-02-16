import PropTypes from 'prop-types';

import s from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem.js';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(f => {
        return (
          <FriendListItem
            // avatar={f.avatar}
            name={f.name}
            isOnline={f.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;
