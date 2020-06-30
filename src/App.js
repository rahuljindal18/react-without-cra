/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import CardList from './CardList';
import SearchBox from './SearchBox';
import NoResult from './NoResult';
import Loader from './Loader';
import ErrorBoundary from './ErrorBoundary';
import ToggleButton from './ToggleButton';
import {getMatchResults} from './redux/match-results/match-results-actions';
import {toggleTheme, switchUserTheme} from './redux/ui-theme/ui-theme-actions';

import {themes} from './utils/themes';

import './App.css';
import ColorPicker from './ColorPicker';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            fifa_code: '',
            hexVal: ''
        }
    }

    setTheme = (currentTheme) => {
        const theme = themes[currentTheme];
        Object.keys(theme).forEach(key => {
            document.body.style.setProperty(key, theme[key])
        })
    }

    componentDidMount(){
        this.setTheme(this.props.uiTheme.currentTheme);
    }

    componentDidUpdate(prevProps){
        if(this.props.uiTheme.currentTheme !== prevProps.uiTheme.currentTheme){
            this.setTheme(this.props.uiTheme.currentTheme);
        }
        
    }

    handleChange = (event) => {
        const code = event.target.value.toLowerCase();
        
        this.setState({fifa_code: code}, () => {
            if(this.state.fifa_code.length >= 3){
                this.props.getMatchResults('https://worldcup.sfg.io/matches/country?fifa_code=',code);
            }
        })
        
    }

    handleToggleChange = () => {
        this.props.toggleTheme(this.props.uiTheme.currentTheme);
    }

    handleColorChange = (event) => {
        const hex = event.target.value;
        this.setState({hexVal : hex},
            () => {
                
                themes['user-theme'] = {
                    '--background-color': this.state.hexVal,
                    '--text-color': 'black'
                }
                this.changeCardBackground(this.state.hexVal);
                this.props.switchUserTheme()
            }
        )
    }

    changeCardBackground = (hexVal) => {
        document.body.style.setProperty('--background-color',hexVal)
    }


    render(){
        return(
            <div className="container">
                <div className="input-container">
                    <SearchBox 
                        value={this.state.fifa_code}
                        handleChange={this.handleChange}
                    />
                    
                    
                </div>    
                    {
                        this.props.matchResults.loading ? <Loader/> : ''
                    }
                    {
                        this.props.matchResults.data.length 
                        ? <ErrorBoundary>
                        <div className="theme-container">
                            <ColorPicker hexVal={this.state.hexVal} handleColorChange={this.handleColorChange}/>
                            <ToggleButton handleToggleChange={this.handleToggleChange}/>
                            </div>    
                            <CardList data={this.props.matchResults.data} />
                          </ErrorBoundary> 
                        : <NoResult/>
                    }
                
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        matchResults: state.matchResults,
        uiTheme: state.uiTheme

    };
};

const mapDispatchToProps = {
    getMatchResults,
    toggleTheme,
    switchUserTheme
}

export default connect(mapStateToProps,mapDispatchToProps)(App);