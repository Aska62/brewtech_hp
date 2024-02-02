import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";

function Products() {
  const { language } = useContext(LanguageContext);

  const [tableOpen, setTableOpen] = useState([
    false,
    false,
    false
  ]);

  const onTitleClick = (id) => {
    let newTableOpen = [...tableOpen];
    newTableOpen[id] = !tableOpen[id];
    setTableOpen(newTableOpen);
  }

  switch (language) {
    case 'en':
      return (
        <>
          <Navbar currentPage={'products'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main main_products">
              <div className="image-container image-container_products">
                <div className="image-cover image-cover_products">
                  <div className="copy-container copy-container_products">
                    <h2 className="products-copy style-font" id="products-copy_1">Malting Garage &minus; Ibaraki, Japan</h2>
                    <p className="products-copy style-font" id="products-copy_2">Lots of great things starts from a garage.</p>
                  </div>
                  <div className="product-detail-cotainer">
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(0)}>
                        <h3 className="product-category style-font">Whisky Material</h3>
                        <div className={`table-control-container ${tableOpen[0] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[0] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[0] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <div className={`product-type-wrapper ${tableOpen[0] ? "product-type-wrapper_open":""}`}>
                        <div className={`product-type-box ${tableOpen[0] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">Distilling Malt&nbsp;&minus;&nbsp;650JPY/kg</h4>
                          </div>
                          <div className="product-table">
                              <p className="product-table-element">Moisture:&nbsp;5.0% max</p>
                              <p className="product-table-element">EBC:&nbsp;3-5</p>
                              <p className="product-table-element">Phenols:&nbsp;XXXX ppm</p>
                          </div>
                        </div>
                        <div className={`product-type-box ${tableOpen[0] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">Lightly Peated Malt&nbsp;&minus;&nbsp;780JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">Moisture:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-5</p>
                            <p className="product-table-element">Phenols:&nbsp;5-15 ppm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(1)}>
                        <h3 className="product-category style-font">Beer Material</h3>
                        <div className={`table-control-container ${tableOpen[1] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[1] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[1] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <div className={`product-type-wrapper ${tableOpen[1] ? "product-type-wrapper_open":""}`}>
                        <div className={`product-type-box ${tableOpen[1] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">Pilsner Malt&nbsp;&minus;&nbsp;650JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">Moisture:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-5</p>
                            <p className="product-table-element">Phenols::&nbsp;ppm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(2)}>
                        <h3 className="product-category style-font">OEM</h3>
                        <div className={`table-control-container ${tableOpen[2] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[2] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[2] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <div className={`product-type-wrapper ${tableOpen[2] ? "product-type-wrapper_open":""}`}>
                        <div className={`product-type-box ${tableOpen[2] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">Customization-Base Malt&nbsp;&minus;&nbsp;600JPY/kg</h4>
                          </div>
                            <div className="product-table">
                              <p className="product-table-element">Moisture:&nbsp;5.0% max</p>
                              <p className="product-table-element">EBC:&nbsp;3-10</p>
                              <p className="product-table-element">Phenols:&nbsp;XXXX ppm</p>
                            </div>
                          </div>
                        <div className={`product-type-box ${tableOpen[2] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">Customization-Smoked Malt&nbsp;&minus;&nbsp;730JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">Moisture:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-5</p>
                            <p className="product-table-element">Phenols:&nbsp;5-15 ppm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box image-container_garage"></div>
              </div>
            </main>
            <Footer/>
          </div>
        </>
      )
      break;
    case 'cn':
      return (
        <>
          <Navbar currentPage={'products'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main main_products">
              <div className="image-container image-container_products">
                <div className="image-cover image-cover_products">
                  <div className="copy-container copy-container_products">
                    <h2 className="products-copy style-font" id="products-copy_1">Malting Garage &minus; Ibaraki, Japan</h2>
                    <p className="products-copy style-font" id="products-copy_2">Lots of great things starts from a garage.</p>
                  </div>
                  <div className="product-detail-cotainer">
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(0)}>
                        <h3 className="product-category style-font_cn">威士忌用</h3>
                        <div className={`table-control-container ${tableOpen[0] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[0] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[0] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <div className={`product-type-wrapper ${tableOpen[0] ? "product-type-wrapper_open":""}`}>
                        <div className={`product-type-box ${tableOpen[0] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">蒸馏麦芽&nbsp;&minus;&nbsp;650JPY/kg</h4>
                          </div>
                          <div className="product-table">
                              <p className="product-table-element">含水量:&nbsp;5.0% max</p>
                              <p className="product-table-element">EBC:&nbsp;3-5</p>
                              <p className="product-table-element">酚类:&nbsp;XXXX ppm</p>
                          </div>
                        </div>
                        <div className={`product-type-box ${tableOpen[0] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">轻度泥煤麦芽&nbsp;&minus;&nbsp;780JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">含水量:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-5</p>
                            <p className="product-table-element">酚类:&nbsp;5-15 ppm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(1)}>
                        <h3 className="product-category style-font_cn">啤酒用</h3>
                        <div className={`table-control-container ${tableOpen[1] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[1] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[1] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <div className={`product-type-wrapper ${tableOpen[1] ? "product-type-wrapper_open":""}`}>
                        <div className={`product-type-box ${tableOpen[1] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">皮尔森麦芽&nbsp;&minus;&nbsp;650JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">含水量:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-5</p>
                            <p className="product-table-element">酚类:&nbsp;ppm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(2)}>
                        <h3 className="product-category style-font_cn">OEM</h3>
                        <div className={`table-control-container ${tableOpen[2] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[2] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[2] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <div className={`product-type-wrapper ${tableOpen[2] ? "product-type-wrapper_open":""}`}>
                        <div className={`product-type-box ${tableOpen[2] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">接受定制-基础麦芽&nbsp;&minus;&nbsp;600JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">含水量:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-10</p>
                            <p className="product-table-element">酚类:&nbsp;XXXX ppm</p>
                          </div>
                        </div>
                        <div className={`product-type-box ${tableOpen[2] ? "product-type-box_open":""}`}>
                          <div className="product-title-contaienr">
                            <h4 className="product-title">接受定制-烟熏麦芽&nbsp;&minus;&nbsp;730JPY/kg</h4>
                          </div>
                          <div className="product-table">
                            <p className="product-table-element">含水量:&nbsp;5.0% max</p>
                            <p className="product-table-element">EBC:&nbsp;3-5</p>
                            <p className="product-table-element">酚类:&nbsp;5-15 ppm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box image-container_garage"></div>
              </div>
            </main>
            <Footer/>
          </div>
        </>
      )
    break;
  default:
    return (
      <>
      <Navbar currentPage={'products'} logoType={'logo_bt'} />
      <div className="main-container">
        <LangBar />
        <main className="main main_products">
          <div className="image-container image-container_products">
            <div className="image-cover image-cover_products">
              <div className="copy-container copy-container_products">
                <h2 className="products-copy style-font" id="products-copy_1">Malting Garage &minus; Ibaraki, Japan</h2>
                <p className="products-copy style-font" id="products-copy_2">Lots of great things starts from a garage.</p>
              </div>
              <div className="product-detail-cotainer">
                <div className="product-detail-box">
                  <div className="product-category_box" onClick={()=>onTitleClick(0)}>
                    <h3 className="product-category style-font_jp">ウイスキー用</h3>
                    <div className={`table-control-container ${tableOpen[0] ? "table-control-container_open":""}`}>
                      <div className={`table-controle-line table-controle-line_left ${tableOpen[0] ? "table-controle-line_left_open":""}`}></div>
                      <div className={`table-controle-line table-controle-line_right ${tableOpen[0] ? "table-controle-line_right_open":""}`}></div>
                    </div>
                  </div>
                  <div className={`product-type-wrapper ${tableOpen[0] ? "product-type-wrapper_open":""}`}>
                    <div className={`product-type-box ${tableOpen[0] ? "product-type-box_open":""}`}>
                      <div className="product-title-contaienr">
                        <h4 className="product-title">ディスティリング・モルト&nbsp;&minus;&nbsp;650JPY/kg</h4>
                      </div>
                      <div className="product-table">
                          <p className="product-table-element">含水率:&nbsp;5.0% max</p>
                          <p className="product-table-element">EBC:&nbsp;3-5</p>
                          <p className="product-table-element">フェノール:&nbsp;XXXX ppm</p>
                      </div>
                    </div>
                    <div className={`product-type-box ${tableOpen[0] ? "product-type-box_open":""}`}>
                      <div className="product-title-contaienr">
                        <h4 className="product-title">ライト・ピーテッド・モルト&nbsp;&minus;&nbsp;780JPY/kg</h4>
                      </div>
                      <div className="product-table">
                        <p className="product-table-element">含水率:&nbsp;5.0% max</p>
                        <p className="product-table-element">EBC:&nbsp;3-5</p>
                        <p className="product-table-element">フェノール:&nbsp;5-15 ppm</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail-box">
                  <div className="product-category_box" onClick={()=>onTitleClick(1)}>
                    <h3 className="product-category style-font_jp">ビール用</h3>
                    <div className={`table-control-container ${tableOpen[1] ? "table-control-container_open":""}`}>
                      <div className={`table-controle-line table-controle-line_left ${tableOpen[1] ? "table-controle-line_left_open":""}`}></div>
                      <div className={`table-controle-line table-controle-line_right ${tableOpen[1] ? "table-controle-line_right_open":""}`}></div>
                    </div>
                  </div>
                  <div className={`product-type-wrapper ${tableOpen[1] ? "product-type-wrapper_open":""}`}>
                    <div className={`product-type-box ${tableOpen[1] ? "product-type-box_open":""}`}>
                      <div className="product-title-contaienr">
                        <h4 className="product-title">ピルスナー・モルト&nbsp;&minus;&nbsp;650JPY/kg</h4>
                      </div>
                      <div className="product-table">
                        <p className="product-table-element">含水率:&nbsp;5.0% max</p>
                        <p className="product-table-element">EBC:&nbsp;3-5</p>
                        <p className="product-table-element">フェノール:&nbsp;ppm</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-detail-box">
                  <div className="product-category_box" onClick={()=>onTitleClick(2)}>
                    <h3 className="product-category style-font_jp">OEM</h3>
                    <div className={`table-control-container ${tableOpen[2] ? "table-control-container_open":""}`}>
                      <div className={`table-controle-line table-controle-line_left ${tableOpen[2] ? "table-controle-line_left_open":""}`}></div>
                      <div className={`table-controle-line table-controle-line_right ${tableOpen[2] ? "table-controle-line_right_open":""}`}></div>
                    </div>
                  </div>
                  <div className={`product-type-wrapper ${tableOpen[2] ? "product-type-wrapper_open":""}`}>
                    <div className={`product-type-box ${tableOpen[2] ? "product-type-box_open":""}`}>
                      <div className="product-title-contaienr">
                        <h4 className="product-title">オーダーメイド・ベース・モルト&nbsp;&minus;&nbsp;600JPY/kg</h4>
                      </div>
                        <div className="product-table">
                          <p className="product-table-element">含水率:&nbsp;5.0% max</p>
                          <p className="product-table-element">EBC:&nbsp;3-10</p>
                          <p className="product-table-element">フェノール:&nbsp;XXXX ppm</p>
                        </div>
                      </div>
                    <div className={`product-type-box ${tableOpen[2] ? "product-type-box_open":""}`}>
                      <div className="product-title-contaienr">
                        <h4 className="product-title">オーダーメイド・スモーク・モルト&nbsp;&minus;&nbsp;730JPY/kg</h4>
                      </div>
                      <div className="product-table">
                        <p className="product-table-element">含水率:&nbsp;5.0% max</p>
                        <p className="product-table-element">EBC:&nbsp;3-5</p>
                        <p className="product-table-element">フェノール:&nbsp;5-15 ppm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="image-box image-container_garage"></div>
          </div>
        </main>
        <Footer/>
      </div>
    </>
    )
  }
}

export default Products