#proper old method

function getClothing(){
	if (isCold){
	var freezing = 'Grab a jacket!';	
	console.log(freezing);
	}
	else{
	var hot = 'Its a shorts kind of day.';
	console.log(hot);
	}	
}

getClothing(false);


######################################################
#new method classes would be module driven seperate

class WeatherHot extends React.Component {
  state = { day: 1 };
  handleClick = () => {
    this.setState({
      day: this.state.day + 1 
    });
    console.log('Shorts Today Bro!! July',this.state.day);
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>
        July {this.state.day}
      </button>
    );
  }
}
ReactDOM.render(<WeatherHot />, mountNode);



##########################################################


class WeatherCold extends React.Component {
  state = { day: 1 };
  handleClick = () => {
    this.setState({
      day: this.state.day + 1 
    });
    console.log('Are You Crazy? Full Snow Gear!! January',this.state.day);
  };
  
  render() {
    return (
      <button onClick={this.handleClick}>
        January {this.state.day}
      </button>
    );
  }
}
ReactDOM.render(<WeatherCold />, mountNode);


