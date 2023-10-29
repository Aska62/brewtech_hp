import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Navbar currentPage={'products'} logoType={'logo_r'} />

      <main className="main">
        <div className="image-container">
          <div className="image-cover image-cover_products">
            <div className="copy-container">
              <p className="products-copy" id="products-copy_1"><span>Malting Garage </span><br />- Ibaraki, Japan</p>
              <p className="products-copy" id="products-copy_2">Lots of great things are <br />produced in a garage.</p>
            </div>
          </div>
          <div className="image-box image-container_garage"></div>
        </div>
        <table className="table_products">
          <thead>
            <tr>
              <th>Malt</th>
              <th>EBC</th>
              <th>Price/kg</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pilsner</td>
              <td>2-5</td>
              <td>550-700 USD</td>
            </tr>
            <tr>
              <td>Peated</td>
              <td>3-8</td>
              <td>1000-2500 USD</td>
            </tr>
          </tbody>
        </table>
      </main>

      <Footer/>
    </>
  )
}

export default Products