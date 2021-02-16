import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.item}>
      {isOnline ? (
        <span className={`${s.status} ${s.online}`}></span>
      ) : (
        <span className={`${s.status} ${s.offline}`}></span>
      )}

      <img
        className={s.avatar}
        src={avatar}
        alt={`${name} avatar`}
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    'https://nop4you.com/Themes/QuickTemplate/Content/images/thumbs/no-avatar.png',
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
