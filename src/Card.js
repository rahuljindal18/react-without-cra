/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import MatchGeneralInfo from './MatchGeneralInfo';
import MatchStatistics from './MatchStatistics';
//import ToggleButton from './ToggleButton';

import './Card.css'

class Card extends React.Component{
    constructor(props){
        super(props);

        
    }

    

    render(){
        const matchGeneralInfo = {
            home_team_country : this.props.obj.home_team_country,
            away_team_country: this.props.obj.away_team_country,
            home_team_goals: this.props.obj.home_team.goals,
            away_team_goals: this.props.obj.away_team.goals,
            venue: `${this.props.obj.location}, ${this.props.obj.venue}`,
            attendance: this.props.obj.attendance,
            stage_name: this.props.obj.stage_name,
            date: this.props.obj.datetime.split('T')[0] 
        }
    
        const {starting_eleven,substitutes,...home_statistics} = this.props.obj.home_team_statistics;
        const {starting_eleven1,substitutes1,...away_statistics} = this.props.obj.away_team_statistics;
        const matchStatistics = {
            home_statistics,
            away_statistics
        }
        
        return(
            <div className="card">
                
                <MatchGeneralInfo matchGeneralInfo={matchGeneralInfo}/>
    
                <MatchStatistics matchStatistics={matchStatistics}/>
            </div>
        )
    }
} 

export default Card;