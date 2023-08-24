import { useState } from "react";
import { GlobalStyle } from './globalStyled';
import { FeedbackOption } from '../Feedback/feedback';
import { Section } from './Section/section';
import { FeedbackStatistic } from './Statistic/statistic';
import { Notification } from './Notification/notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = (type) => {
  if(type === 'good'){
    setGood(prevGood => prevGood + 1);
  }else if(type === 'neutral'){
    setNeutral(prevNeutral => prevNeutral + 1);
  }else if(type === 'bad'){
    setBad(prevBad => prevBad + 1)
  }
  };

  const countTotalFeedback = () => {
    const  totalFeedback = good + neutral + bad;
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);;
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedback}
        /> 
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback!" />
        ) : (
         <FeedbackStatistic  good={good}
         neutral={neutral}
         bad={bad}
         total={countTotalFeedback}
         positivePercentage={countTotalFeedback}/>
        )}
      </Section>

      <GlobalStyle />
    </div>
  );
};
