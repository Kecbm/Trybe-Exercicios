import React from 'react';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      phases: ['🫁Inspire', '😐Segure', '😮‍💨Expire'],
      phaseIndex: 0,
    };
  }

  componentDidMount() {
    const ONE_SECOND = 1000;
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({seconds: prevState.seconds + 1}))
    }, ONE_SECOND)
  }

  componentDidUpdate() {
    const { seconds } = this.state;
    if (seconds === 6) {
      this.setState({ seconds: 1 });
      this.setState((prevState) => ({ phaseIndex: prevState.phaseIndex === 2 ? 0 : prevState.phaseIndex + 1 }));
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { seconds, phases, phaseIndex } = this.state;

    return(
      <section>
        <h1>{phases[phaseIndex]}</h1>
        <h2>{seconds}</h2>
      </section>
    )
  }
}

export default Timer
