import { useNavigate, useLocation } from 'react-router-dom';

function Navbar({currentPage}) {

  return (
    <section className='navbar'>
      <div className="logo" alt='logo' width="500" height="600"></div>
      <div className="nav_box">
        <a href="/" className={`nav_link`}>
          <div className='nav_current' style={{opacity: (currentPage === 'home') ? 1:0}}></div>
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
        <a href="/contact" className="nav_link">
          <div className='nav_current' style={{opacity: currentPage == 'contact' ? 1:0}}></div>
          Contact
        </a>
      </div>
    </section>
  )
}

export default Navbar