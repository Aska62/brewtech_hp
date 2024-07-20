import { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LangBar from "../components/LangBar";
import LanguageContext from "../context/LanguageContext";
import {
  whiskyMaltsData,
  beerMaltsData,
  oemMaltsData
} from "../lib/constants.js";

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
                      <table className={`product-type-wrapper ${tableOpen[0] ? "product-type-wrapper_open":""}`}>
                        <thead>
                          <tr className="product-table_tr">
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                            <th className="product-table_cell product-table_cell_header"><p>Moisture</p><span className="product-table_span">(% max)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>EBC</p></th>
                            <th className="product-table_cell product-table_cell_header"><p>Total Phenols</p><span className="product-table_span">(ppm)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>Price</p><span className="product-table_span">(JPY/kg)</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {whiskyMaltsData.map((data) =>(
                            <tr className="product-table_tr" key={data.nameEN}>
                              <th className="product-table_cell product-table_cell_header product-table_cell_type"><h4 className="product-table_cell_type_en">{data.nameEN}</h4></th>
                              <td className="product-table_cell">{data.moisture}</td>
                              <td className="product-table_cell">{data.ebc}</td>
                              <td className="product-table_cell">{data.phenoles}</td>
                              <td className="product-table_cell">{data.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(1)}>
                        <h3 className="product-category style-font">Beer Material</h3>
                        <div className={`table-control-container ${tableOpen[1] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[1] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[1] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <table className={`product-type-wrapper ${tableOpen[1] ? "product-type-wrapper_open":""}`}>
                        <thead>
                          <tr className="product-table_tr">
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                            <th className="product-table_cell product-table_cell_header"><p>Moisture</p><span className="product-table_span">(% max)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>EBC</p></th>
                            <th className="product-table_cell product-table_cell_header"><p>Total Phenols</p><span className="product-table_span">(ppm)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>Price</p><span className="product-table_span">(JPY/kg)</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {beerMaltsData.map((data) =>(
                            <tr className="product-table_tr" key={data.nameEN}>
                              <th className="product-table_cell product-table_cell_header product-table_cell_type"><h4 className="product-table_cell_type_en">{data.nameEN}</h4></th>
                              <td className="product-table_cell">{data.moisture}</td>
                              <td className="product-table_cell">{data.ebc}</td>
                              <td className="product-table_cell">{data.phenoles}</td>
                              <td className="product-table_cell">{data.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(2)}>
                        <h3 className="product-category style-font">OEM (Customization)</h3>
                        <div className={`table-control-container ${tableOpen[2] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[2] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[2] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <table className={`product-type-wrapper ${tableOpen[2] ? "product-type-wrapper_open":""}`}>
                        <thead>
                          <tr className="product-table_tr">
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                            <th className="product-table_cell product-table_cell_header"><p>Moisture</p><span className="product-table_span">(% max)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>EBC</p></th>
                            <th className="product-table_cell product-table_cell_header"><p>Total Phenols</p><span className="product-table_span">(ppm)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>Price</p><span className="product-table_span">(JPY/kg)</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {oemMaltsData.map((data) =>(
                            <tr className="product-table_tr" key={data.nameEN}>
                              <th className="product-table_cell product-table_cell_header product-table_cell_type"><h4 className="product-table_cell_type_en">{data.nameEN}</h4></th>
                              <td className="product-table_cell">{data.moisture}</td>
                              <td className="product-table_cell">{data.ebc}</td>
                              <td className="product-table_cell">{data.phenoles}</td>
                              <td className="product-table_cell">{data.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                        <h3 className="product-category style-font_cn">威士忌用麦芽</h3>
                        <div className={`table-control-container ${tableOpen[0] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[0] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[0] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <table className={`product-type-wrapper ${tableOpen[0] ? "product-type-wrapper_open":""}`}>
                        <thead>
                          <tr className="product-table_tr">
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                            <th className="product-table_cell product-table_cell_header"><p>含水量</p><span className="product-table_span">(% max)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>EBC</p></th>
                            <th className="product-table_cell product-table_cell_header"><p>酚类</p><span className="product-table_span">(ppm)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>价格</p><span className="product-table_span">(JPY/kg)</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {whiskyMaltsData.map((data) => (
                            <tr className="product-table_tr" key={data.nameEN}>
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"><h4 className="product-table_cell_type_cn">{data.nameCN}</h4></th>
                            <td className="product-table_cell">{data.moisture}</td>
                            <td className="product-table_cell">{data.ebc}</td>
                            <td className="product-table_cell">{data.phenoles}</td>
                            <td className="product-table_cell">{data.price}</td>
                          </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(1)}>
                        <h3 className="product-category style-font_cn">啤酒用麦芽</h3>
                        <div className={`table-control-container ${tableOpen[1] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[1] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[1] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <table className={`product-type-wrapper ${tableOpen[1] ? "product-type-wrapper_open":""}`}>
                        <thead>
                          <tr className="product-table_tr">
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                            <th className="product-table_cell product-table_cell_header"><p>含水量</p><span className="product-table_span">(% max)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>EBC</p></th>
                            <th className="product-table_cell product-table_cell_header"><p>酚类</p><span className="product-table_span">(ppm)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>价格</p><span className="product-table_span">(JPY/kg)</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {beerMaltsData.map((data) => (
                            <tr className="product-table_tr" key={data.nameEN}>
                              <th className="product-table_cell product-table_cell_header product-table_cell_type"><h4 className="product-table_cell_type_cn">{data.nameCN}</h4></th>
                              <td className="product-table_cell">{data.moisture}</td>
                              <td className="product-table_cell">{data.ebc}</td>
                              <td className="product-table_cell">{data.phenoles}</td>
                              <td className="product-table_cell">{data.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="product-detail-box">
                      <div className="product-category_box" onClick={()=>onTitleClick(2)}>
                        <h3 className="product-category style-font_cn">OEM麦芽 (接受定制)</h3>
                        <div className={`table-control-container ${tableOpen[2] ? "table-control-container_open":""}`}>
                          <div className={`table-controle-line table-controle-line_left ${tableOpen[2] ? "table-controle-line_left_open":""}`}></div>
                          <div className={`table-controle-line table-controle-line_right ${tableOpen[2] ? "table-controle-line_right_open":""}`}></div>
                        </div>
                      </div>
                      <table className={`product-type-wrapper ${tableOpen[2] ? "product-type-wrapper_open":""}`}>
                        <thead>
                          <tr className="product-table_tr">
                            <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                            <th className="product-table_cell product-table_cell_header"><p>含水量</p><span className="product-table_span">(% max)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>EBC</p></th>
                            <th className="product-table_cell product-table_cell_header"><p>酚类</p><span className="product-table_span">(ppm)</span></th>
                            <th className="product-table_cell product-table_cell_header"><p>价格</p><span className="product-table_span">(JPY/kg)</span></th>
                          </tr>
                        </thead>
                        <tbody>
                          {oemMaltsData.map((data) => (
                            <tr className="product-table_tr" key={data.nameEN}>
                              <th className="product-table_cell product-table_cell_header product-table_cell_type"><h4 className="product-table_cell_type_cn">{data.nameCN}</h4></th>
                              <td className="product-table_cell">{data.moisture}</td>
                              <td className="product-table_cell">{data.ebc}</td>
                              <td className="product-table_cell">{data.phenoles}</td>
                              <td className="product-table_cell">{data.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
                    <h3 className="product-category style-font_jp">ウイスキー用モルト</h3>
                    <div className={`table-control-container ${tableOpen[0] ? "table-control-container_open":""}`}>
                      <div className={`table-controle-line table-controle-line_left ${tableOpen[0] ? "table-controle-line_left_open":""}`}></div>
                      <div className={`table-controle-line table-controle-line_right ${tableOpen[0] ? "table-controle-line_right_open":""}`}></div>
                    </div>
                  </div>
                  <table className={`product-type-wrapper ${tableOpen[0] ? "product-type-wrapper_open":""}`}>
                    <thead>
                      <tr className="product-table_tr">
                        <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>含水率</p><span className="product-table_span">(% max)</span></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>EBC</p></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm product-table_cell_header_lg"><p>フェノール</p><span className="product-table_span">(ppm)</span></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>価格</p><span className="product-table_span">(円/kg)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {whiskyMaltsData.map((data) => (
                        <tr className="product-table_tr" key={data.nameEN}>
                          <th className="product-table_cell product-table_cell_header product-table_cell_type product-table_cell_type_jp"><h4>{data.nameJP}</h4></th>
                          <td className="product-table_cell ">{data.moisture}</td>
                          <td className="product-table_cell ">{data.ebc}</td>
                          <td className="product-table_cell ">{data.phenoles}</td>
                          <td className="product-table_cell ">{data.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="product-detail-box">
                  <div className="product-category_box" onClick={()=>onTitleClick(1)}>
                    <h3 className="product-category style-font_jp">ビール用モルト</h3>
                    <div className={`table-control-container ${tableOpen[1] ? "table-control-container_open":""}`}>
                      <div className={`table-controle-line table-controle-line_left ${tableOpen[1] ? "table-controle-line_left_open":""}`}></div>
                      <div className={`table-controle-line table-controle-line_right ${tableOpen[1] ? "table-controle-line_right_open":""}`}></div>
                    </div>
                  </div>
                  <table className={`product-type-wrapper ${tableOpen[1] ? "product-type-wrapper_open":""}`}>
                    <thead>
                      <tr className="product-table_tr">
                        <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>含水率</p><span className="product-table_span">(% max)</span></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>EBC</p></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm product-table_cell_header_lg"><p>フェノール</p><span className="product-table_span">(ppm)</span></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>価格</p><span className="product-table_span">(円/kg)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {beerMaltsData.map((data) => (
                        <tr className="product-table_tr" key={data.nameEN}>
                          <th className="product-table_cell product-table_cell_header product-table_cell_type product-table_cell_type_jp"><h4>{data.nameJP}</h4></th>
                          <td className="product-table_cell ">{data.moisture}</td>
                          <td className="product-table_cell procuct-table_cell_elem_jp">{data.ebc}</td>
                          <td className="product-table_cell ">{data.phenoles}</td>
                          <td className="product-table_cell ">{data.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="product-detail-box">
                  <div className="product-category_box" onClick={()=>onTitleClick(2)}>
                    <h3 className="product-category style-font_jp">OEMモルト (オーダーメイド)</h3>
                    <div className={`table-control-container ${tableOpen[2] ? "table-control-container_open":""}`}>
                      <div className={`table-controle-line table-controle-line_left ${tableOpen[2] ? "table-controle-line_left_open":""}`}></div>
                      <div className={`table-controle-line table-controle-line_right ${tableOpen[2] ? "table-controle-line_right_open":""}`}></div>
                    </div>
                  </div>
                  <table className={`product-type-wrapper ${tableOpen[2] ? "product-type-wrapper_open":""}`}>
                    <thead>
                      <tr className="product-table_tr">
                        <th className="product-table_cell product-table_cell_header product-table_cell_type"></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>含水率</p><span className="product-table_span">(% max)</span></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>EBC</p></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm product-table_cell_header_lg"><p>フェノール</p><span className="product-table_span">(ppm)</span></th>
                        <th className="product-table_cell product-table_cell_header product-table_cell_sm"><p>価格</p><span className="product-table_span">(円/kg)</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {oemMaltsData.map((data) => (
                        <tr className="product-table_tr" key={data.nameEN}>
                          <th className="product-table_cell product-table_cell_header product-table_cell_type product-table_cell_type_jp"><h4>{data.nameJP}</h4></th>
                          <td className="product-table_cell ">{data.moisture}</td>
                          <td className="product-table_cell ">{data.ebc}</td>
                          <td className="product-table_cell ">{data.phenoles}</td>
                          <td className="product-table_cell ">{data.price}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="product-table_cell product-table_cell_fullwidth" colSpan="5">
                          <div>
                            <p className="product-table_note-head">注意事項</p>
                            <ul className="product-table_note_ul">
                              <li className="product-table_note_li">
                                お客様の穀物を麦芽にするために事前に穀物の検査をいたします。<br/>
                                異物が多い・発芽率が低い・虫が発生している・赤カビがある場合は加工をお断りする場合がございます。
                              </li>
                              <li className="product-table_note_li">
                                通常、完成した麦芽の収率は約<span className="product-table_note_num-span">85&#037;</span>となります。<br/>
                                &#032;例&#041;大麦<span className="product-table_note_num-span">100kg</span>から麦芽が<span className="product-table_note_num-span">85kg</span>できます。
                              </li>
                              <li className="product-table_note_li">
                                製造費用計算方法<br/>
                                お客様の穀物&#040;大麦を含む&#041;を使用する場合や、特別な麦芽製法のリクエストがある場合：
                                <ul className="product-table_note_ul_sm">
                                  <li className="product-table_note_li_sm">【ベース・モルト】&emsp;<br/>大麦重量<span className="product-table_note_num-span">kg&#040;原料&#041;&times;85&#037;&#040;収率&#041;&times;400円&#040;単価&#041;</span><span className="product-table_note_num-span">&#061;</span>製造費用</li>
                                  <li className="product-table_note_li_sm">【スモーク・モルト】<br/>大麦重量<span className="product-table_note_num-span">kg&#040;原料&#041;&times;85&#037;&#040;収率&#041;&times;435-2000円&#040;単価&#041;</span><span className="product-table_note_num-span">&#061;</span>製造費用</li>
                                </ul>
                              </li>
                              <li className="product-table_note_li">
                                注意
                                <ul className="product-table_note_ul_md">
                                  <li className="product-table_note_li_md">お客様の大麦を麦芽にする場合、穀物の種類と質によっては収率が<span className="product-table_note_num-span">80&#037;</span>を下回ることがありますが、工数が変わらないため上記「製造費用計算方法」で製造費用を計算いたします。</li>
                                  <li className="product-table_note_li_md">お客様の穀物&#040;大麦を含む&#041;を使用する場合と、特別な麦芽製法のリクエストがある場合は、麦芽の品質は弊社が保証しかねません。</li>
                                  <li className="product-table_note_li_md">穀物の種類と麦芽製法により、製造費用が異なる場合があります。</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
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