import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

function Home() {
  const [imageDisp, setImageDisp] = useState(1);
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);

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

  const imageRotate = (count) => {
    console.log(count);
    if (imageDisp === 3) {
      console.log('3dayo')
      setImageDisp(1);
    } else {
      setImageDisp(imageDisp+1);
    }
  };


  return (
    <div className="main_container">
      <Navbar currentPage={'home'} />
      <main className="home_main">
        <div className="image_container">
          <div className="image_cover image_cover_top">
            Environment, Science, Future
          </div>
          {/* <div className="image_cover image_cover_right"></div>
          <div className="image_cover image_cover_bottom"></div>
          <div className="image_cover image_cover_left"></div> */}
          <div className="image_box">
            <div className={`image ${imageDisp === 1 ? 'image_show':''}`} id="image_1"></div>
            <div className={`image ${imageDisp === 2 ? 'image_show':''}`} id="image_2"></div>
            <div className={`image ${imageDisp === 3 ? 'image_show':''}`} id="image_3"></div>
          </div>
        </div>
        <div className="image_navi_container">
          <div className={`image_navi image_navi_1 ${imageDisp === 1 ? 'select_image':''}`}></div>
          <div className={`image_navi image_navi_2 ${imageDisp === 2 ? 'select_image':''}`}></div>
          <div className={`image_navi image_navi_3 ${imageDisp === 3 ? 'select_image':''}`}></div>
        </div>
      </main>
    </div>
  )
}

export default Home