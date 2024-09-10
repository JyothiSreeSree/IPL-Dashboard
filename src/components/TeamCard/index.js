import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamsData} = props
  const {name, id, teamImageUrl} = teamsData
  return (
    <li className="teamCard">
      <Link to={`/team-matches/${id}`} className="teamCardLink">
        <img src={teamImageUrl} alt={name} className="teamCardImage" />
        <p className="teamCardName">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
