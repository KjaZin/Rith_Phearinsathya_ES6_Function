import React, { useState } from "react";
import TweetForm from "./components/TweetForm";
import TweetCard from "./components/TweetCard";

// This is an example of tweet objects
const INITIAL_TWEETS = [
  {
    id: 0,
    title: "React JS exam on going",
    read: false,
  },
  {
    id: 1,
    title: "KNY Holidays tomorow!",
    read: false,
  },
  {
    id: 2,
    title: "Review you Web Dev course !",
    read: true,
  },
];

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style
// Components are missing properties, states, callbacks... Update them accordingly.

export default function App() {
  const [tweets, setTweets] = useState(INITIAL_TWEETS);

  const handleAddTweet = (newTitle) => {
    const newTweet = {
      id: tweets.length,
      title: newTitle,
      read: false,
    };
    setTweets([newTweet, ...tweets]);
  };
  const handleToggleRead = (id) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === id ? { ...tweet, read: !tweet.read } : tweet
    );
    setTweets(updatedTweets);
  };
  return (
    <>
      <header>
        <h1>CADT Tweets</h1>
      </header>
      <TweetForm onAddTweet={handleAddTweet}></TweetForm>

      <div className="tweet-list">
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            id={tweet.id}
            title={tweet.title}
            read={tweet.read}
            onToggleRead={handleToggleRead}
          />
        ))}
      </div>
    </>
  );
}
