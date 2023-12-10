import { useState } from "react";

function Navbar({currentPage, logoType}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleHamburger = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <section className='navbar'>
      <a href="/" className={`logo ${logoType}`} alt='logo' width="500" height="600"></a>

      <div className="nav_box">
        <a href="/" className={`nav_link`}>
          <div className="nav_current" style={{opacity: (currentPage === 'home') ? 1:0}}></div>
          Home
        </a>
        <a href="/products" className="nav_link">
          <div className='nav_current' style={{opacity: (currentPage === 'products') ? 1:0}}></div>
          Products
        </a>
        <a href="/supports" className="nav_link">
          <div className='nav_current' style={{opacity: currentPage == 'supports' ? 1:0}}></div>
          Supports
        </a>
        <a href="/info" className="nav_link">
          <div className='nav_current' style={{opacity: currentPage == 'info' ? 1:0}}></div>
          Info
        </a>
      </div>

      <div className="hamburger-container">
        <div className={`hamburger-box ${menuOpen ? 'hamburger_menu-open' : ''}`} onClick={handleHamburger}>
          <div className="hamburger-line hamburger-line_top"></div>
          <div className="hamburger-line hamburger-line_middle"></div>
          <div className="hamburger-line hamburger-line_bottom"></div>
        </div>
      </div>

      <div className={`menu-container ${menuOpen ? 'menu-container_open' : ''}`}>
        <a href="/" className={`menu_link`}>
          <div className="nav_current" style={{opacity: (currentPage === 'home') ? 1:0}}></div>
          Home
        </a>
        <a href="/products" className={`menu_link`}>
          <div className='nav_current' style={{opacity: (currentPage === 'products') ? 1:0}}></div>
          Products
        </a>
        <a href="/supports" className={`menu_link`}>
          <div className='nav_current' style={{opacity: currentPage == 'supports' ? 1:0}}></div>
          Supports
        </a>
        <a href="/info" className={`menu_link`}>
          <div className='nav_current' style={{opacity: currentPage == 'info' ? 1:0}}></div>
          Info
        </a>
      </div>
    </section>
  )
}

export default Navbar