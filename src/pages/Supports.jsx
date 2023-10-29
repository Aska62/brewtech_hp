import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Supports() {
  return (
    <>
    <Navbar currentPage={'supports'} logoType={'logo_w'} />

    <main className="main">
      <div className="image-container">
        <div className="image-cover image-cover_products">
          <div className="copy-container copy-container_supports">
            <ul>
              <h2>Engineering Support</h2>
              <li>Malting System & Equipment</li>
              <li>Brewing System & Equipment</li>
              <li>Distilling System & Equipment</li>
            </ul>
            <ul>
              <h2>Technical Support</h2>
              <li>Malting</li>
              <li>Craft Beer Brweing</li>
              <li>Whisky Distilling</li>
            </ul>
          </div>
        </div>
        <div className="image-box image-box_supports"></div>
      </div>
    </main>

      <Footer/>
    </>
  )
}

export default Supports