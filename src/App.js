import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Ably from './Ably';
import Dashboard from './components/Dashboard';
import Samples from './components/Samples';
import About from './components/About';
import Videos from './components/Videos';
import Albums from './components/Albums';
import Footer from './components/Footer';
// import './index.css';

const Header = React.lazy(() => import("./components/Header"));





// const Header = lazy(() => import ('./components/Header'));
// const Samples = lazy(() => import('./components/Samples'));
// const Albums = lazy(() => import('./components/Albums'));
// const Footer = lazy(() => import ('./components/Footer'));


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
      <Router>
      <div>
        <div className="app">
        <React.Suspense fallback={<p>LOADING page...</p>}>

          <Header />
         
        
          <main>
            <Route exact path="/about" component={About} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/samples" component={Samples} />
            <Route exact path="/videos" component={Videos} />
          </main>
          
          </React.Suspense>
          <Route exact path="/dashboard" component={Dashboard} />
          <Footer />
        </div>
      
    </div>
    </Router>
    
   
    );
  }
}


export default App;