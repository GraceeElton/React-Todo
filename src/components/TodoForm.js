import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      newItem: event.target.value,
    });
  };

  //class property to submit our form.

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewItem(this.state.newItem);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.newItem}
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
