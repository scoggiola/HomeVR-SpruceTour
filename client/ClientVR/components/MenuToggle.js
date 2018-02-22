import React, { Component } from 'react';

class MenuToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleActive: props.optionValue || false,
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  handleToggle = (details) => {
    this.props.handleClick(details);
    this.setState({ toggleActive: !this.state.toggleActive });
  }

  render() {
    console.log(this.state.toggleActive);
    const details = {
      header: this.props.header,
    };
    this.state.toggleActive ? details.option = this.props.options[1] : details.option = this.props.options[0];
    return (
      <label className="toggle-switch">
        <input type="checkbox" onChange={() => this.handleToggle(details) } checked={this.state.toggleActive} />
        <span className="slider slider-round"></span>
      </label>
    );
  }
};

export default MenuToggle;
