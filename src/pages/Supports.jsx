import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";

function Supports() {
  const { language } = useContext(LanguageContext);

  const [detailOpen, setDetailOpen] = useState([
    false,
    false
  ]);

  const onTitleClick = (id) => {
    let newDetailOpen = [...detailOpen];
    newDetailOpen[id] = !detailOpen[id];
    setDetailOpen(newDetailOpen);
  }

  switch (language) {
    case 'en':
      return (
        <>
          <Navbar currentPage={'supports'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main">
              <div className="image-container">
                <div className="image-cover image-cover_products">
                  <div className="copy-container copy-container_supports">
                    <div className="main-container_supports">
                      <div className="support-container">
                        <div className="support-lead-box">
                          <h2 className="supports-copy style-font">Supports</h2>
                          <p className="note note_supports">Notice: The services below are exclusively for our existing customers.</p>
                        </div>
                        <div className="support-content-container">
                          <div className="support-content-box">
                            <div className="support-title-box" onClick={()=>onTitleClick(0)}>
                              <h3 className="supports-h3 style-font">Engineering Support</h3>
                              <div className={`detail-control-container ${detailOpen[0] ? "detail-control-container_open":""}`}>
                                <div className={`detail-controle-line detail-controle-line_left ${detailOpen[0] ? "detail-controle-line_left_open":""}`}></div>
                                <div className={`detail-controle-line detail-controle-line_right ${detailOpen[0] ? "detail-controle-line_right_open":""}`}></div>
                              </div>
                              <div className={`supports-detail-container ${detailOpen[0] ? "supports-detail-container_open":""}`}>
                                <p className="supports-detail-text">Designing, Planning, Production of Systems and Equipment for:</p>
                                <ul className="supports-detail-ul">
                                  <li className="supports-detail-li">Malting</li>
                                  <li className="supports-detail-li">Brewing</li>
                                  <li className="supports-detail-li">Distilling</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="support-content-box">
                            <div className="support-title-box" onClick={()=>onTitleClick(1)}>
                              <h3 className="supports-h3 style-font">Technical Support</h3>
                              <div className={`detail-control-container ${detailOpen[1] ? "detail-control-container_open":""}`}>
                                <div className={`detail-controle-line detail-controle-line_left ${detailOpen[1] ? "detail-controle-line_left_open":""}`}></div>
                                <div className={`detail-controle-line detail-controle-line_right ${detailOpen[1] ? "detail-controle-line_right_open":""}`}></div>
                              </div>
                              <div className={`supports-detail-container ${detailOpen[1] ? "supports-detail-container_open":""}`}>
                                <p className="supports-detail-text">Production technology provision and Process design for:</p>
                                <ul className="supports-detail-ul">
                                  <li className="supports-detail-li">Malt</li>
                                  <li className="supports-detail-li">Craft Beer</li>
                                  <li className="supports-detail-li">Whisky</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box image-box_supports"></div>
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
          <Navbar currentPage={'supports'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main">
              <div className="image-container">
                <div className="image-cover image-cover_products">
                  <div className="copy-container copy-container_supports">
                    <div className="main-container_supports">
                      <div className="support-container">
                        <div className="support-lead-box">
                          <h2 className="supports-copy style-font_cn">服务/技术支持</h2>
                          <p className="note note_supports">注意：以下内容的服务对象仅限于与本公司有过生意往来的客户</p>
                        </div>
                        <div className="support-content-container">
                          <div className="support-content-box">
                            <div className="support-title-box" onClick={()=>onTitleClick(0)}>
                              <h3 className="supports-h3 style-font_cn">设备技术支持</h3>
                              <div className={`detail-control-container ${detailOpen[0] ? "detail-control-container_open":""}`}>
                                <div className={`detail-controle-line detail-controle-line_left ${detailOpen[0] ? "detail-controle-line_left_open":""}`}></div>
                                <div className={`detail-controle-line detail-controle-line_right ${detailOpen[0] ? "detail-controle-line_right_open":""}`}></div>
                              </div>
                              <div className={`supports-detail-container ${detailOpen[0] ? "supports-detail-container_open":""}`}>
                                <p className="supports-detail-text">提供关于“制麦，酿造，蒸馏”的生产系统和设备的设计，立案，制作等服务</p>
                                {/* <ul className="supports-detail-ul">
                                  <li className="supports-detail-li">Malting</li>
                                  <li className="supports-detail-li">Brewing</li>
                                  <li className="supports-detail-li">Distilling</li>
                                </ul> */}
                              </div>
                            </div>
                          </div>
                          <div className="support-content-box">
                            <div className="support-title-box" onClick={()=>onTitleClick(1)}>
                              <h3 className="supports-h3 style-font_cn">生产技术支持</h3>
                              <div className={`detail-control-container ${detailOpen[1] ? "detail-control-container_open":""}`}>
                                <div className={`detail-controle-line detail-controle-line_left ${detailOpen[1] ? "detail-controle-line_left_open":""}`}></div>
                                <div className={`detail-controle-line detail-controle-line_right ${detailOpen[1] ? "detail-controle-line_right_open":""}`}></div>
                              </div>
                              <div className={`supports-detail-container ${detailOpen[1] ? "supports-detail-container_open":""}`}>
                                <p className="supports-detail-text">提供以下产品的生产技术支持，工序设计等服务</p>
                                <ul className="supports-detail-ul">
                                  <li className="supports-detail-li">麦芽</li>
                                  <li className="supports-detail-li">精酿啤酒</li>
                                  <li className="supports-detail-li">威士忌</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box image-box_supports"></div>
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
          <Navbar currentPage={'supports'} logoType={'logo_bt'} />
          <div className="main-container">
            <LangBar />
            <main className="main">
              <div className="image-container">
                <div className="image-cover image-cover_products">
                  <div className="copy-container copy-container_supports">
                    <div className="main-container_supports">
                      <div className="support-container">
                        <div className="support-lead-box">
                          <h2 className="supports-copy style-font_jp">サポート</h2>
                          <p className="note note_supports">注意: 下記サービスの対象は、弊社との取引実績があるお客様に限らせていただきます。</p>
                        </div>
                        <div className="support-content-container">
                          <div className="support-content-box">
                            <div className="support-title-box" onClick={()=>onTitleClick(0)}>
                              <h3 className="supports-h3 style-font_jp">エンジニアリング・サポート</h3>
                              <div className={`detail-control-container ${detailOpen[0] ? "detail-control-container_open":""}`}>
                                <div className={`detail-controle-line detail-controle-line_left ${detailOpen[0] ? "detail-controle-line_left_open":""}`}></div>
                                <div className={`detail-controle-line detail-controle-line_right ${detailOpen[0] ? "detail-controle-line_right_open":""}`}></div>
                              </div>
                              <div className={`supports-detail-container ${detailOpen[0] ? "supports-detail-container_open":""}`}>
                                <p className="supports-detail-text">下記におけるシステムと設備の設計・計画・製作等のサポート</p>
                                <ul className="supports-detail-ul">
                                  <li className="supports-detail-li">製麦</li>
                                  <li className="supports-detail-li">醸造</li>
                                  <li className="supports-detail-li">蒸留</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="support-content-box">
                            <div className="support-title-box" onClick={()=>onTitleClick(1)}>
                              <h3 className="supports-h3 style-font_jp">技術サポート</h3>
                              <div className={`detail-control-container ${detailOpen[1] ? "detail-control-container_open":""}`}>
                                <div className={`detail-controle-line detail-controle-line_left ${detailOpen[1] ? "detail-controle-line_left_open":""}`}></div>
                                <div className={`detail-controle-line detail-controle-line_right ${detailOpen[1] ? "detail-controle-line_right_open":""}`}></div>
                              </div>
                              <div className={`supports-detail-container ${detailOpen[1] ? "supports-detail-container_open":""}`}>
                                <p className="supports-detail-text">下記製品に関する生産技術、プロセス設計等のサポート</p>
                                <ul className="supports-detail-ul">
                                  <li className="supports-detail-li">モルト</li>
                                  <li className="supports-detail-li">クラフトビール</li>
                                  <li className="supports-detail-li">ウイスキー</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image-box image-box_supports"></div>
              </div>
            </main>
            <Footer/>
          </div>
        </>
      )
  }
}

export default Supports