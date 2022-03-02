import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Albums from './components/Albums';
import Samples from './components/Samples';
import Dashboard from './components/Dashboard';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
const [currentPage, handlePageChange] = useState("About");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
 
    switch (currentPage) {
        case "About":
            return <About />;
            case "Albums":
                return <Albums />;
                case "Samples":
                    return <Samples />;
                    case "Dashboard":
                        return <Dashboard />;
                        case "Socials":
                            return <Socials />;

                            default:
                                return null;
    
    }
  }; 

  return (
    <div>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
      </div>

      
        <main>
          <div>
          {renderPage(currentPage)}
          </div>
        </main>
      

      <div>
      { <Footer></Footer> }
    </div>

    </div>
  );
}

export default App;
