import React from 'react';
import './App.css';
import Banner from './Banner';
import Header from './Header';
import Product from './Product';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';
import Checkout from './Checkout';

function App() {
  return (
    <main className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Switch>
            <Route path="/">
              <Header />
              <div className="app__body">
                <Route exact path="/">
                  <Banner />
                  <div className="app__item__container">
                    <section className="app__row">
                      <Product key={1}
                        id="1"
                        name="Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage)"
                        price={250}
                        image="https://www.notebookcheck.net/fileadmin/Notebooks/Samsung/Galaxy_A50/4_zu_3_Samsung_Galaxy_A50.png"
                        rating={5}
                        brand="Samsung"
                      />
                      <Product key={2}
                        id="2"
                        name="LG 7 kg Semi-Automatic Top Loading Washing Machine (P7010RRAA, Burgundy)"
                        price={350}
                        image="https://images-na.ssl-images-amazon.com/images/I/61FI1iqZkML._SL1500_.jpg"
                        rating={3}
                        brand="LG"
                      />
                      <Product key={3}
                        id="3"
                        name="LG 687 L Frost Free Side-by-Side Refrigerator(GC-B247SLUV.APZQEBN, Platinum Silver, Inverter Compressor)"
                        price={600}
                        image="https://www.lg.com/in/images/refrigerators/md06235056/gallery/GL-T402JDSY-Refrigerators-Front-View-D-01.jpg"
                        rating={4}
                        brand="LG"
                      />
                    </section>
                    <section className="app__row">
                      <Product key={4}
                        id="4"
                        name="Dove Intense Repair Shampoo, 650ml"
                        price={11}
                        image="https://images-na.ssl-images-amazon.com/images/I/51lBobSmiDL._SL1000_.jpg"
                        rating={4}
                        brand="Dove"
                      />
                      <Product key={5}
                        id="5"
                        name="Savlon Glycerine Soap, 125g"
                        price={4}
                        image="https://jstclick.com/image/cache/Fairness%20Cream/savlon%20soap-800x800.jpg"
                        rating={5}
                        brand="Savlon"
                      />
                    </section>
                    <section className="app__row">
                      <Product key={6}
                        id="6"
                        name="IndoPrimo Men's Fit Casual Shirt"
                        price={20}
                        image="https://cdn11.bigcommerce.com/s-pkla4xn3/images/stencil/1280x1280/products/11753/114434/2018-Fashion-New-Male-Shirt-Long-Sleeve-Mens-Clothes-Oblique-Button-Dress-Shirts-Mandarin-Collar-Men__86562.1537167882.jpg?c=2?imbypass=on"
                        rating={4}
                        brand="IndoPrimo"
                      />
                      <Product key={7}
                        id="7"
                        name="Ben Martin Men's Fit Trouser"
                        price={50}
                        image="https://www.lordsindia.com/image/cache/1/TROUSER/NEW%20TROUSER%202019/a480b0c2e22dcccf2276c4116ad6ff10-500x500.jpg"
                        rating={5}
                        brand="Ben Martin"
                      />
                      <Product key={8}
                        id="8"
                        name="Asian Wonder-13 Grey Firozi"
                        price={55}
                        image="https://images-na.ssl-images-amazon.com/images/I/61utX8kBDlL._UY500_.jpg"
                        rating={4}
                        brand="Asian"
                      />
                      <Product key={9}
                        id="9"
                        name="BRUSTRO Artist Drawing"
                        price={5}
                        image="https://kali.training/wp-content/uploads/2017/06/kali-linux-revealed-book-mock-3.png"
                        rating={5}
                        brand="BRUSTRO"
                      />
                    </section>
                    <section className="app__row">
                      <Product key={10}
                        id="10"
                        name="Onida 80 cm (32 Inches) Fire TV Edition HD Ready Smart IPS LED TV 32HIF (Black) (2019)"
                        price={1000}
                        image="https://cdn1.smartprix.com/rx-id0EG4oIx-w1200-h1200/detel-di32wipf-32-in.jpg"
                        rating={4}
                        brand="Onida"
                      />
                    </section>
                  </div>
                </Route>
                <Route path="/checkout">
                  <Checkout />
                </Route>
              </div>
            </Route>
          </Switch>

        </Switch>
      </Router>
    </main>
  );
}

export default App;
