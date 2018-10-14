import React from 'react'

class ProjectItems extends React.Component {
    deleteProject(id){
        console.log("test")
        this.props.onDelete(id); // we are passing this onDelete(id) to projects component
    }
    render(){
            return(
                <li className="Projects">
                    <strong>{this.props.project.title}</strong> : {this.props.project.category} 
                    <a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>X</a>
                </li>
            );
    }
}

export default ProjectItems;