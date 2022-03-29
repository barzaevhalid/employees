import { Component } from "react";
import "./employees-add.css";
class EmployeesAddForm extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            name: '',
            salary: ''
        }
    }  
    onValueChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value,
    })
    }
    addForm = (e) => {
        e.preventDefault(e)   

        if(this.state.name.length > 3 && this.state.salary){
        this.props.addEmployees(this.state.name, this.state.salary)
        }
    }

    render() {
        const {name, salary, } = this.props
        return (
            <div className="app-add-form">
              <h3>Добавьте нового сотрудника</h3>
              <form className="add-form d-flex">
                <input
                  type="text"
                  className="form-control new-post-label"
                  placeholder="Как его зовут?"
                  onChange={this.onValueChange}
                  name='name'
                  value={name}
                />
                <input
                  type="number"
                  className="form-control new-post-label"
                  placeholder="З/П в $?"
                  onChange={this.onValueChange}
                  name='salary'
                  value={salary}
                />
        
                <button type="submit" className="btn btn-outline-light"
                onClick={(e)=> this.addForm(e)}>
                  Добавить
                </button>
              </form>
            </div>
          );
    }
  
};

export default EmployeesAddForm;
