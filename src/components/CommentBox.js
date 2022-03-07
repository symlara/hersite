import React, { Component } from 'react';
import Ably from './Ably';


{/* renders a comment form */}

class CommentBox extends Component {
    constructor(props) {
      super(props)
      this.addComment = this.addComment.bind(this)
    }
    async addComment(e) {
        e.preventDefault()
        const comment = e.target.elements.comment.value.trim()
        const name = e.target.elements.name.value.trim()
        const timestamp = Date.now()
    
       
    
        if (name && comment) {
          // include the avatar image in the commentObject
          const commentObject = { name, comment, timestamp }
          console.log(commentObject)
    
          const channel = Ably.channels.get("comments")
          channel.publish("add_comment", commentObject, (err) => {
            if (err) {
              console.log("Unable to publish message err = " + err.message)
            }
          })
          e.target.elements.name.value = ""
          e.target.elements.comment.value = ""
        }
      }

    render() {
      return (
        <div>
          <h1 className="title">Leave your comment below!</h1>
          <form onSubmit={this.addComment}>
            <div className="field">
              <div className="control" id="name">
                <input
                  type="text"
                  className="input"
                  name="name"
                  placeholder="Your name"
                />
              </div>
              <br></br>
            </div>
            <div className="field">
              <div className="control" id="comment">
                <textarea
                  className="textarea"
                  name="comment"
                  placeholder="Add a comment"
                ></textarea>
              </div>
            </div>
            <br></br>
            <div className="field">
              <div className="control">
                <button className="button is-primary bg-black white">Submit</button>
              </div>
            </div>
          </form>
          </div>
        );
    }
}

export default CommentBox;