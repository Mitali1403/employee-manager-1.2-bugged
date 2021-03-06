import React, { Component } from 'react';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          { 
            this.props.employees.map((employee) => {
              return (
                <li name={'employee' + employee.id} className="listText" key={employee.id} onClick={ () => { this.props.selectEmployee(employee) }}> { employee.name } </li>
              )
            })
          }
          <li name='addEmployee' className="listText" onClick={() => {this.props.addEmployee()}}> &#43; Add Employee </li>
        </ul>
      </div>
    )
  }
}

export default EmployeeList;