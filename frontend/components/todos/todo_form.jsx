// const TodoForm = () => {
//   return (
//
//   )
// };

import React from 'react';
import uniqueId from '../../util/generate_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      body: this.props.body || "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTypeTitle = this.handleTypeTitle.bind(this);
    this.handleTypeBody = this.handleTypeBody.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(e);
    console.log(this.state);
    this.props.receiveTodo(Object.assign({}, this.state, {id: uniqueId()}));
  }

  handleTypeTitle(e) {
    e.preventDefault();
    this.setState({
      title: e.target.value,
    });
  }


  handleTypeBody(e) {
    e.preventDefault();
    this.setState({
      body: e.target.value
    });
  }



  render () {
    return (
      <div>
        <form>
          <label>
            Title
            <input onChange={this.handleTypeTitle} name="title" value={this.state.title}/>
          </label>

          <label>
            Body
            <input  onChange={this.handleTypeBody} name="body" value={this.state.body}/>
          </label>
          <br/>
          <input onClick={this.handleClick} value="Submit" type="submit"/>
        </form>
      </div>
    );
  }
}

export default TodoForm;
