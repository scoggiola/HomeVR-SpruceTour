import React, { Component } from 'react';

class MenuToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleActive: props.optionValue || false,
    }
  }

  handleToggle = (details) => {
    this.props.handleClick(details);
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  render() {
    const details = {
      header: this.props.header,
    };
    this.state.toggleActive ? details.option = this.props.options[0] : details.option = this.props.options[1];
    return (
      <label className="toggle-switch">
        <input type="checkbox" onClick={() => this.handleToggle(details) }/>
        <span className="slider slider-round"></span>
      </label>
    );
  }
};

export default MenuToggle;
