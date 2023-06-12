import React from 'react';
import NavButton from './navButton.jsx';

class StatisticsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return(
      <div>
        <NavButton />
        StatisticsView
      </div>
    )
  }
}

export default StatisticsView;