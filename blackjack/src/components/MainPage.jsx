import "../styles/MainPage.css"

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
                    <img className="player-card" src="images/purple card.JPG"/>
                </div>
                <div className="player-box">
                    <h4>Dealer</h4>
                    <img className="player-card" src="images/purple card.JPG"/>
                </div>
            </div>
        </div>
    )
}

export default MainPage;