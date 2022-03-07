import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Ably from './Ably';
import CommentBox from './CommentBox';
import Dashboard from './Dashboard';
// import './index.css';

import Samples from './Samples';
import Header from './Header';
import About from './About';
import Albums from './Albums';
// import Socials from './Socials';
import Footer from './Footer';


class App extends Component {
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


       <div>

      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <CommentBox /> 
              {/* This is how the Comments component receives the comments it renders. */}
              {/* <Dashboard comments={this.state.comments} /> */}
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
   
    );
  }
}



// function App () { 
// const [currentPage, handlePageChange] = useState("About");

//   // The renderPage method uses a switch statement to render the appropriate current page
//   const renderPage = () => {
 
//     switch (currentPage) {
//         case "About":
//             return <About />;
//             case "Albums":
//                 return <Albums />;
//                 case "Samples":
//                   return <Samples />;
//                     case "Dashboard":
//                         return <Dashboard />;                  

//                             default:
//                                 return null;
    
//     }
//   }; 

//   return (
//     <div>
//       <div>
//         <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
//       </div>

      
//         <main>
//           <div>
//           {renderPage(currentPage)}
//           {/* <Samples></Samples> */}
//           </div>
//         </main>
      

//       <div>
//       { <Footer></Footer> }
//     </div>

//     </div>
//   );


export default App;