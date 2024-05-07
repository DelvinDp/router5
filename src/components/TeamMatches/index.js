// Write your code here
import {Component} from 'react'

class RecentMatch extends Component {
  state = {recentMatchDetails: {}}

  componentDidMount() {
    this.getRecentData()
  }

  getRecentData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    this.setState({
      recentMatchDetails: data.recent_matches,
    })
  }

  render() {
    const {recentMatchDetails} = this.state
    return (
      <div>
        <img src={recentMatchDetails.competing_team_logo} alt="Team Banner" />
        <p>{recentMatchDetails.result}</p>
        <h2>{recentMatchDetails.match_status}</h2>
      </div>
    )
  }
}
export default RecentMatch
