import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";

function Home() {
  const { language } = useContext(LanguageContext);

  const [imageDisp, setImageDisp] = useState(1);
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1);
    }, delay);
    return () => {
      clearInterval(interval);
      if ((count % 7) === 0) {
        imageRotate(count);
      }
    }
  }, [count]);

  let languageSetting = language;

  // Rotate images to display
  const imageRotate = (count) => {
    if (imageDisp === 3) {
      setImageDisp(1);
    } else {
      setImageDisp(imageDisp+1);
    }
  };

  // Click photo navigation to change photos to display
  const onPhotoNaviClick = (photoId) => {
    setImageDisp(photoId);
    setCount(1);
  }

  // Get touch start point
  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
  }

  // Get touch end point
  const onTouchMove = (e) => {
    setEndX(e.changedTouches[0].pageX);
  }

  const onTouchEnd = () => {
    const minimumDistance = 30; // Minimum swipe distance to activate swipe move
    const distanceX = Math.abs(endX - startX); // Swipe distance

    if (distanceX > minimumDistance) {
      setCount(1);
      if (endX > startX) {
        // If the swipe move is from left to right
        if (imageDisp === 3) {
          setImageDisp(1);
        } else {
          setImageDisp(imageDisp+1);
        }
      } else {
        // If the swipe move is from right to left
        if (imageDisp === 1) {
          setImageDisp(3);
        } else {
          setImageDisp(imageDisp-1);
        }
      }
    }

    setStartX(0);
    setEndX(0);
  };

  return (
    <>
      <Navbar currentPage={'home'} logoType={'logo_bt'} />
      <div className="main-container">
        <LangBar />
        <div className="main">
          <div className="image-container image-container_home">
            <div className="image-cover image-cover_home"
              onTouchStart={e => onTouchStart(e)}
              onTouchMove={e => onTouchMove(e)}
              onTouchEnd={onTouchEnd}
              >
              <div className="home-heading_wrapper">
                <h2 className="home-heading style-font" id="home-heading_1">Nature</h2>
                <h2 className="home-heading style-font" id="home-heading_2">Science</h2>
                <h2 className="home-heading style-font" id="home-heading_3">Future</h2>
              </div>
            </div>
            <div className="image-slider-container">
              <div
                className={`image-box image-box_home ${imageDisp === 1 ? 'image_show':''}`}
                id="image_1">
              </div>
              <div
                className={`image-box image-box_home ${imageDisp === 2 ? 'image_show':''}`}
                id="image_2"
                >
              </div>
              <div
                className={`image-box image-box_home ${imageDisp === 3 ? 'image_show':''}`}
                id="image_3"
                >
              </div>
            </div>
          </div>
          <div className="image_navi_container">
            <div className={`image_navi image_navi_1 ${imageDisp === 1 ? 'select_image':''}`} onClick={()=>onPhotoNaviClick(1)}></div>
            <div className={`image_navi image_navi_2 ${imageDisp === 2 ? 'select_image':''}`} onClick={()=>onPhotoNaviClick(2)}></div>
            <div className={`image_navi image_navi_3 ${imageDisp === 3 ? 'select_image':''}`} onClick={()=>onPhotoNaviClick(3)}></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home