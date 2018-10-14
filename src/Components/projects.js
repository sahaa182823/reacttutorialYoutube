import React from 'react'
import ProjectItems from './ProjectItems';

class Projects extends React.Component {
    deleteProject(id){
        this.props.onDelete(id); // we are passing this onDelete(id) to App component
    }
    render(){
        console.log(this.props)
        let projectItems ;
        if(this.props.projects){
            projectItems = this.props.projects.map(project => {
                    console.log(project);
                    return(
                        <ProjectItems onDelete={this.deleteProject.bind(this)} key={project.title} project ={project}/>
                    );
            });
        }
            return(
                <div className="Projects">
                    {projectItems}
                </div>
            );
    }
}

// Projects.prototypes = {
//     projects: React.prototypes.array,
//     onDelete: React.prototypes.func
// }
export default Projects;