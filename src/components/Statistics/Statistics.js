import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.container}>
      <div className={s.titleWrapper}>
        {title ? (
          <h2 className={s.title}>{title}</h2>
        ) : (
          <h2 className={s.title}>Upload stats</h2>
        )}
      </div>

      <ul className={s.stats}>
        {stats.map(item => {
          return (
            <li
              className={s.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={s.label}>{item.label}</span>
              <span className={s.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};

function getRandomColor() {
  return '#' + Math.random().toString(16).slice(2, 8);
}

export default Statistics;
