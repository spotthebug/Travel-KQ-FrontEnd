import React, {Component} from 'react'

class NewPostModal extends Component {
  constructor(){
    super()
    //sets the initial state via the constructor! that's the constructor's job :)
    this.state = {
      post: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      post: event.target.value
    })
  }
  onFormSubmit(event){
    event.preventDefault()
    let post = this.state.post
    this.props.createPost(post)
    this.setState({
      post: ""
    })
  }
  render(){
    return (
      <div className='createForm postForm'>
        <h2>Create Post Here!</h2>
        <form onSubmit={ this.onFormSubmit }>
          <input
            onChange={ this.onInputChange }
            placeholder='Write a post here ...'
            type='text'
            value={this.state.post} />
          <button type='submit'>Create Post!</button>
        </form>
      </div>
    )
  }
}

export default NewPostModal;
