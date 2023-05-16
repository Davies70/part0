import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = (props) => {
  const { good, bad, neutral } = props;
  const all = good + bad + neutral;
  const average = (good - bad) / all + ' %';
  const positive = (good / all) * 100;
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />

          <StatisticLine text="neutral" value={neutral} />

          <StatisticLine text="bad" value={bad} />

          <StatisticLine text="all" value={all} />

          <StatisticLine text="average" value={average} />

          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

export default Statistics;
