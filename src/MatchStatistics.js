/* eslint-disable react/prop-types */
import React from 'react';
import TeamComparison from './TeamComparison';

const MatchStatistics = (props) => {
    const {home_statistics,away_statistics} = props.matchStatistics;
    return(
        <>
            <TeamComparison 
                left_prop={home_statistics.attempts_on_goal}
                right_prop={away_statistics.attempts_on_goal}
                middle_text="ATTEMPTS ON GOAL"
            />

            <TeamComparison 
                left_prop={home_statistics.on_target}
                right_prop={away_statistics.on_target}
                middle_text="On target"
            />

            <TeamComparison 
                left_prop={home_statistics.off_target}
                right_prop={away_statistics.off_target}
                middle_text="Off target"
            />
            
        </>
    )
}

export default MatchStatistics;