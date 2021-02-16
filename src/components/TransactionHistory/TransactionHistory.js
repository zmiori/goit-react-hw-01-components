import PropTypes from 'prop-types';

import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table class="transaction-history" className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.item}>Type</th>
          <th className={s.item}>Amount</th>
          <th className={s.item}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(t => {
          return (
            <tr className={s.bodyItem}>
              <td className={s.item}>
                {t.type[0].toUpperCase() + t.type.slice(1)}
              </td>
              <td className={s.item}>{t.amount}</td>
              <td className={s.item}>{t.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;
