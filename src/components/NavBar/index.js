// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav className="navbar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">One Piece Anime Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score-1">Score: {currentScore}</p>
            <p className="score-2">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
