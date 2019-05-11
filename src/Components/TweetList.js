import React from 'react'

const TweetList = (props) => {
  if (props.loading) {
    return <div> Sit tight it is loading.... </div>
  }

  return props.tweets.map( tweet => (
      <div className="tweet-list__tweet--container" key={`tweet_${tweet.id}`}>
        <h5 className="tweet-list__tweet--author"> {tweet.author}</h5>
        <span className='tweet-list__tweet--message'>{tweet.message}</span>
        </div>
    ))

}


export default TweetList
