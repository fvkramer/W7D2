// const TodoForm = () => {
//   return (
//
//   )
// };

import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      body: this.props.body || ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e);
    // this.setState({
    //   title: e.target.,
    //   body: this.state.body
    // });
  }


  render () {
    return (
      <div>
        <form>
          <label>
            Title
            <input name="title" value={this.state.title}/>
          </label>

          <label>
            Body
            <input name="body" value={this.state.body}/>
          </label>
          <br/>
          <input value="Submit" type="submit"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;
