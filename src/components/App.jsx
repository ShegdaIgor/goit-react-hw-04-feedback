import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section } from './Section/Section.jsx';
import { Notification } from './Notification/Notification';
import { useState } from 'react';
import css from '../components/App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);

        break;
      case 'neutral':
        setNeutral(prev => prev + 1);

        break;
      case 'bad':
        setBad(prev => prev + 1);

        break;

      default:
        break;
    }
  };

  const totalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const positivePercentage = () => {
    return Math.round((good / totalFeedback()) * 100);
  };

  return (
    <div className={css.app_style}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
