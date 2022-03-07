import React, { Component } from 'react'
import filterBadWords from './ProfanityFilter';


{/* This component renders a single comment that is supplied to it using props. */}

class Comment extends Component {
  constructor(params) {
    super(params)
    this.messageDate = this.messageDateGet()

    this.userName = filterBadWords(this.props.comment.name)
    this.commentText = filterBadWords(this.props.comment.comment)
  }
   /* { function is a utility function for converting the message timestamp into a human-readable date and time format. } */
messageDateGet() {
    const date = new Date(this.props.comment.timestamp)
    const dateTimeFormatOptions = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }
    const localeString = date.toLocaleString(undefined, dateTimeFormatOptions)
    return localeString
  }
  render() {
    return (
      <article className="media">
        <figure className="media-left">
        </figure>
        <div className="media-content">
          <div className="content">
            <span className="user-name">{this.userName} </span>
            <span className="message-date">{this.messageDate}</span>
            <p>{this.commentText}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Comment