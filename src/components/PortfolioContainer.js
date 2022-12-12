import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Contact from './views/Contact';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import Resume from './views/Resume';
import Footer from './Footer';



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  

    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      return <Resume />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    const styles = {
      all:{
        height: "100%",
        overflow: "auto",
      },
    };

    return (
      <div style={styles.all}>
        {}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {}
        {renderPage()}
        <Footer/>
      </div>
    );
  }