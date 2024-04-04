import { Component } from 'react';

class TimerCl extends Component {
	constructor(props) {
		super(props);
		console.log(this);
		this.state = { time: 0 };
	}
	updateTime = () => {
		this.setState({ time: this.state.time + 1 });
	};

	render() {
		return (
			<>
				<h3>{this.state.time}초</h3>
				<button onClick={this.updateTime}>1씩 올려주세요</button>
			</>
		);
	}
}
export default TimerCl;
