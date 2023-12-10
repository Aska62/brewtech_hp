import { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";

function Products() {
  const { language } = useContext(LanguageContext);

  switch (language) {
    case 'en':
      return (
        <>
          <Navbar currentPage={'products'} logoType={'logo_bt'} />
          <div className="main-container main-container_products">
            <LangBar />
            <main className="main main_products">
              <div className="image-container image-container_products">
                <div className="image-cover image-cover_products">
                  <div className="copy-container">
                    <p className="products-copy style-font" id="products-copy_1"><span>Malting Garage </span><br />- Ibaraki, Japan</p>
                    <p className="products-copy style-font" id="products-copy_2">Lots of great things<br />starts from a garage.</p>
                  </div>
                </div>
                <div className="image-box image-container_garage"></div>
                <div className="table-container">
                  <table className="table_products product-table_en">
                  <thead>
                      <tr>
                        <th></th>
                        <th>Malt</th>
                        <th>Moisture</th>
                        <th>EBC</th>
                        <th>Phenols(ppm)</th>
                        <th>Price/kg(JPY)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2">Whisky Material</td>
                        <td>Distilling Malt</td>
                        <td>5.0% max</td>
                        <td>3-5</td>
                        <td></td>
                        <td></td>

                      </tr>
                      <tr>
                        <td>Lightly Peated Malt</td>
                        <td>5.0% max</td>
                        <td>3-5</td>
                        <td>5-15</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Beer Material</td>
                        <td>Pilsner Malt</td>
                        <td>5.0% max</td>
                        <td>3-5</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td rowSpan="2">OEM</td>
                        <td>Customization-Base Malt</td>
                        <td>5.0% max</td>
                        <td>3-10</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>Customization-Smoked Malt</td>
                        <td>5.0% max</td>
                        <td>3-10</td>
                        <td>5-15</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                  <div className="copy-container">
                    <p className="products-copy style-font" id="products-copy_1"><span>Malting Garage </span><br />- Ibaraki, Japan</p>
                    <p className="products-copy style-font" id="products-copy_2">Lots of great things<br />starts from a garage.</p>
                  </div>
                </div>
                <div className="image-box image-container_garage"></div>
                <div className="table-container">
                  <table className="table_products product-table_cn">
                    <thead>
                      <tr>
                        <th></th>
                        <th>麦芽</th>
                        <th>含水量</th>
                        <th>EBC</th>
                        <th>酚类(ppm)</th>
                        <th>价格/kg(JPY)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2">威士忌用</td>
                        <td>蒸馏麦芽</td>
                        <td>5.0% max</td>
                        <td>3-5</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>轻度泥煤麦芽</td>
                        <td>5.0% max</td>
                        <td>3-5</td>
                        <td>5-15</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>啤酒用</td>
                        <td>皮尔森麦芽</td>
                        <td>5.0% max</td>
                        <td>3-5</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td rowSpan="2">OEM</td>
                        <td>接受定制-基础麦芽</td>
                        <td>5.0% max</td>
                        <td>3-10</td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>接受定制-烟熏麦芽</td>
                        <td>5.0% max</td>
                        <td>3-10</td>
                        <td>5-15</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
              <div className="copy-container">
                <p className="products-copy style-font" id="products-copy_1"><span>Malting Garage </span><br />- Ibaraki, Japan</p>
                <p className="products-copy style-font" id="products-copy_2">Lots of great things<br />starts from a garage.</p>
              </div>
            </div>
            <div className="image-box image-container_garage"></div>
              <div className="table-container">
                <table className="table_products product-table_jp">
                  <thead>
                    <tr>
                      <th></th>
                      <th>モルト</th>
                      <th>含有率</th>
                      <th>EBC</th>
                      <th className="product-table-th_ppm_jp">フェノール(ppm)</th>
                      <th>価格/kg(円)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowSpan="2" className="product-table_td_jp">ウイスキー用</td>
                      <td className="product-table_td_jp">ディスティリング・モルト</td>
                      <td>5.0% max</td>
                      <td>3-5</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="product-table_td_jp">ライト・ピーテッド・モルト</td>
                      <td>5.0% max</td>
                      <td>3-5</td>
                      <td>5-15</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="product-table_td_jp">ビール用</td>
                      <td className="product-table_td_jp">ピルスナー・モルト</td>
                      <td>5.0% max</td>
                      <td>3-5</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td rowSpan="2">OEM</td>
                      <td className="product-table_td_jp">オーダーメイド・ベース・モルト</td>
                      <td>5.0% max</td>
                      <td>3-10</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td className="product-table_td_jp">オーダーメイド・スモーク・モルト</td>
                      <td>5.0% max</td>
                      <td>3-10</td>
                      <td>5-15</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </main>
          <Footer/>
        </div>
      </>
    )
  }
}

export default Products