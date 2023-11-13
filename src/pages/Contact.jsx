import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar currentPage={'contact'} logoType={'logo_bt'} />
        <main className="main">
          <div className="image-container">
            <div className="image-cover image-cover_products">
              <div>contact</div>
            </div>
            <div className="image-box image-box_contact"></div>
          </div>
        </main>
      <Footer />
    </>
  )
}

export default Contact