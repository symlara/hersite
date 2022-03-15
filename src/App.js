import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import Ably from './Ably';
import Dashboard from './components/Dashboard';
// import './index.css';

import Samples from './components/Samples';
import Header from './components/Header'
import About from './components/About';
import Albums from './components/Albums';
// import Socials from './Socials';
import Footer from './components/Footer';


class App extends Component {
//       constructor(props) {
//     super(props)
//     this.handleAddComment = this.handleAddComment.bind(this)
// // {/* an array of comments which is empty by default but updates as users add comments */}
//     this.state = {
//       comments: []
//     }
//   }

//   componentDidMount() {
//   const channel = Ably.channels.get("comments")

//   channel.attach()
//   channel.once("attached", () => {
//     channel.history((err, page) => {
//             // create a new array with comments in reverse order (old to new)
//         const comments = Array.from(page.items, (item) => item.data)
//         this.setState({ comments })
//         channel.subscribe((msg) => {
//           this.handleAddComment(msg.data)
//         })
//       })
//     })
//   }

//   handleAddComment(comment) {
//     this.setState(prevState => {
//       return {
//         comments: [comment].concat(prevState.comments),
//       }
//     })
//   }

 
  render() {
    return (
      <div>
      <HashRouter basmane="/">
        <div className="app">
          <Header />

          <main>
            <Route exact path="/about" component={About} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/samples" component={Samples} />
            <Route exact path="/dashboard" component={Dashboard} />
          </main>
          
          <Footer />
        </div>
      </HashRouter>
    </div>
   
    );
  }
}


export default App;