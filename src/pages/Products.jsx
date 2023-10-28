import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Products() {
  return (
    <>
      <Navbar currentPage={'products'} />

      <main className="main">
        <div className="products-image-container">
          <div className="image-cover image-cover_products">
            <div className="products-copy-container">
              <p className="products-copy" id="products-copy_1"><span>Malting Garage </span><br />- Ibaraki, Japan</p>
              <p className="products-copy" id="products-copy_2">Lots of great things are produced in a garage.</p>
            </div>
          </div>
          <div className="garage_image"></div>
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