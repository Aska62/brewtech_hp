import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";

function Info() {
  const { language } = useContext(LanguageContext);

  switch (language) {
    case 'en':
      return (
        <>
          <Navbar currentPage={'info'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main">
              <div className="image-container">
                <div className="image-cover image-cover_info">
                  <h2 className="info_h2">Info</h2>
                  <div className="info-wrapper style-font">
                    <p>Ibaraki - Japan</p>
                    <p>Email : info@brewtech-supports.com</p>
                  </div>
                </div>
                <div className="image-box image-box_contact"></div>
              </div>
            </main>
            <Footer />
          </div>
        </>
      )
      break;
    case 'cn':
      return (
        <>
          <Navbar currentPage={'info'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main">
              <div className="image-container">
                <div className="image-cover image-cover_info">
                  <h2 className="info_h2 style-font">Info</h2>
                  <div className="info-wrapper style-font">
                    <p>日本 - 茨城</p>
                    <p>Email : info@brewtech-supports.com</p>
                  </div>
                </div>
                <div className="image-box image-box_contact"></div>
              </div>
            </main>
            <Footer />
          </div>
        </>
      )
      break;
    default:
      return (
        <>
          <Navbar currentPage={'info'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main">
              <div className="image-container">
                <div className="image-cover image-cover_info">
                  <h2 className="info_h2 style-font">Info</h2>
                  <div className="info-wrapper style-font">
                    <p>茨城</p>
                    <p>Email : info@brewtech-supports.com</p>
                  </div>
                </div>
                <div className="image-box image-box_contact"></div>
              </div>
            </main>
            <Footer />
          </div>
        </>
      )
  }
}

export default Info