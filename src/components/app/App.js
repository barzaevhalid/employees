import AppInfo from '../app-info/app-info.js'
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter.js';
import EmployeesList from '../employees-list/employees-list.js';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { Component } from 'react';

import './app.css';


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
             data: [
                {name: 'John C.', salary: 800,increase: true, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000,increase: false, rise: true, id: 2},
                {name: 'Carl W.', salary: 5000,increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'rise'
        }
        this.maxId = 4

    }

    deleteItem = (id) => {
        this.setState(({data}) => {   
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployees = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data})=> {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    };

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000': 
                return items.filter(item => item.salary > 1000) 
                default :
                return items
        }
    
    }
    onFilterSelect = (filter) => {
        this.setState({filter});
    }
    render() {
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter)
        return (
            <div className="app">
              <AppInfo info={data}/>
    
              <div className="search-panel">
                   <SearchPanel
                   onUpdateSearch={this.onUpdateSearch}
                   />
                  <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
              </div>

             <EmployeesList 
             data={visibleData}
             onDelete = {this.deleteItem}
             onToggleProp={this.onToggleProp}

             />
             <EmployeesAddForm
             addEmployees={this.addEmployees}/>
            </div>
        );
    }

};

export default App;