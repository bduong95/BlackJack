import "../styles/MainPage.css"
import Card from "./Card";

function MainPage() {
    return(
        <div>
            <h1 className="temp-title">Black Jack Bruv V.0</h1>
            {/* Deal Button */}
            <div className="deal-button">
                <button>Deal</button>
            </div>
            {/* Playing Table */}
            <div className="playing-table">
                <div className="player-box">
                    <h4>Player</h4>
                    <div className="player-card"><Card /></div>
                </div>
                <div className="player-box">
                    <h4>Dealer</h4>
                    <div className="player-card"><Card /></div>
                </div>
            </div>
            
        </div>
    )
}

export default MainPage;