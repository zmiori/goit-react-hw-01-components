import PropTypes from 'prop-types';

import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img
          src={avatar}
          alt={`Аватар пользователя ${name}`}
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={`tag ${s.text}`}>@{tag}</p>
        <p className={`location ${s.text}`}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

Profile.defaultProps = {
  name: 'Anonymous',
  stats: {
    followers: '-',
    views: '-',
    likes: '-',
  },
  avatar:
    'https://nop4you.com/Themes/QuickTemplate/Content/images/thumbs/no-avatar.png',
};

export default Profile;
