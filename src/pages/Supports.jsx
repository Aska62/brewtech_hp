import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";

function Supports() {
  const { language } = useContext(LanguageContext);

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
                      <h2 className="supports-h2_en style-font">Supports</h2>
                      <p className="note note_supports">Notice: The services below are exclusively for our existing customers.</p>
                      <ul>
                        <h3 className="supports-h3_en">Engineering Support</h3>
                        <li className="supports-li_en">Designing, planning, production of Systems and Equipment for “Malting, Brewing, and Distilling”.</li>
                      </ul>
                      <ul>
                        <h3 className="supports-h3_en">Technical Support</h3>
                        <p className="supports_ul_p_en">Production technology provision and process design for:</p>
                        <li className="supports-li_en li_bullet">Malt</li>
                        <li className="supports-li_en li_bullet">Craft Beer</li>
                        <li className="supports-li_en li_bullet">Whisky</li>
                      </ul>
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
                      <h2  className="supports-h2_cn">服务/技术支持</h2>
                      <p className="note note_supports note_supports_cn">注意：以下内容的服务对象仅限于与本公司有过生意往来的客户</p>
                      <ul>
                        <h3 className="supports-h3_cn">设备技术支持</h3>
                        <li className="supports-li_cn">提供关于“制麦，酿造，蒸馏”的生产系统和设备的设计，立案，制作等服务</li>
                      </ul>
                      <ul>
                        <h3 className="supports-h3_cn">生产技术支持</h3>
                        <p className="supports_ul_p_cn">提供以下产品的生产技术支持，工序设计等服务</p>
                        <li className="supports-li_cn li_bullet">麦芽</li>
                        <li className="supports-li_cn li_bullet">精酿啤酒</li>
                        <li className="supports-li_cn li_bullet">威士忌</li>
                      </ul>
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
                      <h2 className="supports-h2_jp">サポート</h2>
                      <p className="note note_supports note_supports_jp">注意: 下記サービスの対象は、弊社との取引実績があるお客様に限らせていただきます。</p>
                      <ul>
                        <h3 className="supports-h3_jp">エンジニアリング・サポート</h3>
                        <li className="supports-li_jp">“製麦、醸造、蒸留”における、システムと設備の設計、計画、製作等のサポート</li>
                      </ul>
                      <ul>
                        <h3 className="supports-h3_jp">技術サポート</h3>
                        <p className="supports_ul_p_jp">下記製品に関する生産技術、プロセス設計等のサポート:</p>
                        <li className="supports-li_jp li_bullet">モルト</li>
                        <li className="supports-li_jp li_bullet">クラフト・ビール</li>
                        <li className="supports-li_jp li_bullet">ウイスキー</li>
                      </ul>
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