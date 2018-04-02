import axios from 'axios';

class UserModel {
  static all(){
    let request = axios.post("https://super-crud.herokuapp.com/todos")
    return request
  }
}

export default TodoModel