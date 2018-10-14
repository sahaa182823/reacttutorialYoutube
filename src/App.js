import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery'
import Projects from './Components/projects'
import AddProject from './Components/AddProject'
import './App.css';
import { connect } from 'net';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects : [],
      todos: []
    }
  }
  getTodos() // here we are using jquery but u can also use axios and superAgent to fetch json data from other API's
  {
    $.ajax({
      url : 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache : false,
      success : function(data){
          this.setState({todos :  data},function(){
            console.log(this.state)
          });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
      

    });
  }

  getProjects(){
    this.setState({
      projects:[
        {
          id : uuid.v4(),
          title : "anirban",
          category : "react-designer"   
        },
        {
          id : uuid.v4(),
          title : "purnendu",
          category : "backend-designer"   
        },
        {
          id : uuid.v4(),
          title : "shibam",
          category : "batabase-designer"   
        },
      ]
    });
  }

  componentWillMount(){
      this.getProjects(); // here we are simply calling the func to access user defind array of list
      this.getTodos();
  }
  componentDidMount(){
    this.getTodos();
  }
  handleAddproject(project) // here we actually passing newProject from AddProject
  {
    console.log(project)
    let projects = this.state.projects; // here all intitial projects are saved
    projects.push(project) // we are pushing our new project
    this.setState({projects : projects}); // seting state of newly hole set of projects
  }
  handleDeleteproject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id); // it will find the id of a particular project and store it to index
    projects.splice(index,1) // it will delete that project 
    this.setState({projects : projects}); // it will updated the state

  }
  render() {
    return (
      <div className="App">
         <AddProject AddProject={this.handleAddproject.bind(this)}/>  {/*here we are actually passing object which is containing title and category to App component from AddProject component by this function */}
        <Projects projects={this.state.projects} onDelete={this.handleDeleteproject.bind(this)}/>  {/*here we are passing id of the project from projectItems to project and finally in App component*/}
      </div>
    );
  }
}

export default App;
