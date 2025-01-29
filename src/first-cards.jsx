import manCards from "./images/first-card.png";
import women from "./images/3.png";
import women2 from "./images/4.png";
import manCards2 from "./images/5.png";

function FirstCards() {
  return (
      <div className="cards">
        <div className="card">
            <img src={manCards} alt="onecards" />
            <div className="down">
                <img src={women} alt="women" />
                <img src={women2} alt="women2" />
            </div>
        </div>
        <div className="man2">
            <img src={manCards2} alt="man2" />
            <button>CATAGORY NAME</button>
        </div>
      </div>
  );
}

export default FirstCards;


