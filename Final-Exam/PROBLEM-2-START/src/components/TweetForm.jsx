import React, { useState } from "react";

// The bellow code is given JUST AS EXAMPLE, to help you to build your HTML with the CSS style

export default function TweetForm({ onAddTweet }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onAddTweet(input);
    setInput("");
  };

  return (
    <form className="tweet-form" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="What's happening?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        style={{
          backgroundColor: input.trim() ? "#8A2BE2" : "#D3B8E4",
          cursor: input.trim() ? "pointer" : "not-allowed",
          opacity: input.trim() ? 1 : 0.5,
        }}
        disabled={!input.trim()}
      >
        Tweet
      </button>
    </form>
  );
}
