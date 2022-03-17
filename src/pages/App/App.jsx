import React from "react";
import './app.css';
import Input from "../../components/Input";
import H1 from "../../components/Title"
import List from "../../components/List";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: "",
            todos:[]
        };
        this.updatetodos = this.updatetodos.bind(this);
        this.updateList = this.updateList.bind(this);
        this.deleteTodos = this.deleteTodos.bind(this);
    }

    updatetodos(newTodos){
        this.setState(newTodos)
    }

    updateList(){
        var copyTodos = [...this.state.todos];
        // ... means copy. Here copying todos inside array
        copyTodos.push(this.state.value)
        this.setState({
            value:"",
            todos: copyTodos
        })
    }

    deleteTodos(index){
        var copyTodos = [...this.state.todos]
        copyTodos.splice(index,1)
        this.updatetodos({
            value:'',
            todos:copyTodos
        });
    }

    render(){
        return(
            // <div id="App" className="flex">
            //     <h1>Todo Application</h1>
            //     <input />
            // </div>
            <div id="App" className="flex">
                
                <H1 title="Todo Application" />
                
                {/* <h1 className="bold">Todo Application {this.props.attr}</h1> */}
                {/* curly brackets for inserting inline javascript */}
                <div style={{display:"flex"}}>
                    <Input todos={this.state.value} updatetodos={this.updatetodos} />
                    <button onClick={this.updateList} >Click me!</button>
                </div>
                <List todos={this.state.todos} updatetodos={this.updatetodos} deletetodos={this.deleteTodos} />
            </div>
        )
    }
}

// acts the same as class as above
// function Appp(){
//     return(
//         <div id="react">oof</div>
//     )
// }

export default App;