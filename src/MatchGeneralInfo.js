/* eslint-disable react/prop-types */
import React from 'react';
import TeamComparison from './TeamComparison';
import './MatchGeneralInfo.css'

const MatchGeneralInfo = (props) => {
    const {
        home_team_country,
        away_team_country,
        home_team_goals,
        away_team_goals,
        venue,
        attendance,
        stage_name,
        date
    } = props.matchGeneralInfo;
    
    return(
        <div>
            <div className="match-venue-date">{stage_name}, {venue}</div>
            <div className="match-venue-date">{date}</div>
            <div className="match-venue-date">Spectators: {attendance}</div>
            
            <TeamComparison 
                left_prop={home_team_country}
                right_prop={away_team_country}
                middle_text="vs"
            />

            <TeamComparison 
                left_prop={home_team_goals}
                right_prop={away_team_goals}
                middle_text="goals"
            />
            
        </div>
    )
}

export default MatchGeneralInfo;