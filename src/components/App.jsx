import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = (type) => {
    setGood(prevState => ({
      [type]: prevState[type] + 1,
    }))
    setNeutral(prevState => ({
      [type]: prevState[type] + 1,
    }))
    setBad(prevState => ({
      [type]: prevState[type] + 1,
    }))
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOption
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={updateFeedback}
          feedback={feedback}
        /> 
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback!" />
        ) : (
         <FeedbackStatistic  good={good}
         neutral={neutral}
         bad={bad}
         total={total}
         positivePercentage={positivePercentage}/>
        )}
      </Section>


      <GlobalStyle />
    </div>
  );
};
