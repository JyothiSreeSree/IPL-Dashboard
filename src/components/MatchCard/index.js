import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const matchStatusClassName = matchStatus === 'Won' ? 'matchWon' : 'matchLost'

  return (
    <li className="matchCardContainer">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeamLogo"
      />
      <p className="competingTeamName">{competingTeam}</p>
      <p className="matchResult">{result}</p>
      <p className={`matchStatus ${matchStatusClassName}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
