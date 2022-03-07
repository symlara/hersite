import React, { Component } from 'react';
import Ably from './Ably';
// import Comment from './Comment'
import CommentBox from './CommentBox';
import Comments from './Comments'

class Dashboad extends Component {
    constructor(props) {
        super(props)
        this.handleAddComment = this.handleAddComment.bind(this)
    {/* an array of comments which is empty by default but updates as users add comments */}
        this.state = {
          comments: []
        }
      }
    
      componentDidMount() {
      const channel = Ably.channels.get("comments")
    
      channel.attach()
      channel.once("attached", () => {
        channel.history((err, page) => {
                // create a new array with comments in reverse order (old to new)
            const comments = Array.from(page.items, (item) => item.data)
            this.setState({ comments })
            channel.subscribe((msg) => {
              this.handleAddComment(msg.data)
            })
          })
        })
      }
    
      handleAddComment(comment) {
        this.setState(prevState => {
          return {
            comments: [comment].concat(prevState.comments),
          }
        })
      }

      render() {
        return (
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="dashboard center">
                  <p>
                  <CommentBox /> 
                  {/* This is how the Comments component receives the comments it renders. */}
                  <Comments comments={this.state.comments} />
                  </p>
                </div>
              </div>
            </div>
          </section>
        )
      }
}

export default Dashboad