import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: formattedData, isLoading: false})
  }

  render() {
    const {teamsData, isLoading} = this.state
    return (
      <div className="homeContainer">
        {isLoading ? (
          <div className="loaderContainer" data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="bgContainer">
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                  className="iplLogo"
                />
                <h1 className="dashboardHeading">IPL Dashboard</h1>
              </div>
              <ul className="teamsList">
                {teamsData.map(eachItem => (
                  <TeamCard teamsData={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Home
