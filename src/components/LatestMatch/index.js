import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchData

  return (
    <div className="latestMatchContainer">
      <h1 className="latestMatchHeading">Latest Matches</h1>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="latestMatchLogo"
      />
      <div className="matchDetailsContainer">
        <div className="inningsDetails">
          <p className="inningsTitle">First Innings</p>
          <p className="inningsResult">{firstInnings}</p>
          <p className="inningsTitle">Second Innings</p>
          <p className="inningsResult">{secondInnings}</p>
        </div>
        <div className="additionalDetails">
          <p className="detailTitle">Man Of The Match</p>
          <p className="detailValue">{manOfTheMatch}</p>
          <p className="detailTitle">Umpires</p>
          <p className="detailValue">{umpires}</p>
        </div>
        <div className="teamInfo">
          <p className="competingTeamName">{competingTeam}</p>
          <p className="matchDate">{date}</p>
          <p className="matchResult">{result}</p>
          <p className="matchVenue">{venue}</p>
          <p
            className={`matchStatus ${
              matchStatus === 'Won' ? 'statusWon' : 'statusLost'
            }`}
          >
            {matchStatus}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
