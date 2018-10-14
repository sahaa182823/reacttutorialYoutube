import React from 'react'
import uuid from 'uuid'

class AddProject extends React.Component {
    constructor(){
        super()
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories : ['web design','web development','mobile development']
    }

    handleSubmit(e){
        if(this.refs.title.value ===''){
            alert("title is required");
        // console.log(this.refs.title.value)
        
        }  // it is actually shows the title we typed in title text box in console for this we have to bind onSubmit() method
        else{
            this.setState({ newProject : {
                id : uuid.v4(),
                title : this.refs.title.value,
                category : this.refs.category.value
            }},function(){
                console.log(this.state);
                this.props.AddProject(this.state.newProject)
            }
        );

        }
        e.preventDefault()
    }
    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
          });
            return(
                <div>
                    <h3>Add Projects</h3>
                    <form onSubmit={this.handleSubmit.bind(this)}>  
                        <div>
                            <label>title</label>
                            <input type="text" ref="title"/>
                        </div>
                        <div>
                            <label>category</label><br/>
                            <select ref="category">
                                    {categoryOptions}
                            </select>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            );
    }
}
// AddProject.prototypes = // this is actually doing validation part
// {
//     categories: React.prototypes.array,
//     AddProject: React.prototypes.func
// }
export default AddProject;