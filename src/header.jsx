import poics from "./images/search.png";
import head from "./images/favorite.png";
import cart from "./images/shopping_cart.png";

function Header() {
  return (
    <header className="head">
      <section className="section1">
        <h2 className="logo">YOUR LOGO</h2>
        <ul className="nav">
          <li>HOME</li>
          <li>SHOP</li>
          <li>LOOKBOOK</li>
          <li>FEATURES</li>
          <li>PAGES</li>
          <li>BLOG</li>
        </ul>
        <div className="menu">
            <img src={poics} alt="" />
            <img src={head} alt="" />
            <img src={cart} alt="" />
        </div>
      </section>
      <section className="section2">
        <div className="content">
          <span>NEW TREND</span>
          <h1>COLLUSION</h1>
          <p>An exclusive selection of this season's trends.</p>
          <div className="buttons">
            <button>DISCOVER</button>
            <button>SHOP NOW</button>
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
