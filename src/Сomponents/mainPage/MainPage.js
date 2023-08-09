import Header from "./Header";
import MainText from "./MainText";
import Banner from "./Banner";

function MainPage({ onLogin }) {
  return (
    <div className="main-page">
      <Header onLogin={onLogin} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <MainText />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <Banner />
      </div>
    </div>
  );
}

export default MainPage;