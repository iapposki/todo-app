import React from "react";
import './app.css';
import Input from "../../components/Input";
import H1 from "../../components/Title"
import List from "../../components/List";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // value: "",
            todos:[]
        };
        this.updatetodos = this.updatetodos.bind(this);
        this.updateList = this.updateList.bind(this);
        this.deleteTodos = this.deleteTodos.bind(this);
        // this.input  = React.createRef();
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentDidMount(){
        this.input.focus();
    }

    updatetodos(newTodos){
        this.setState(newTodos)
    }

    updateList(){
        // console.log(this.input.current.value)
        var copyTodos = [...this.state.todos];
        // ... means copy. Here copying todos inside array
        // copyTodos.push(this.input.current.value)
        copyTodos.push(this.input.value)
        this.setState({
            // value:"",
            todos: copyTodos
        })
        // console.log(this.state.value)
        // console.log(this.state.todos)
        this.input.value = "";
    }

    deleteTodos(index){
        var copyTodos = [...this.state.todos]
        copyTodos.splice(index,1)
        this.updatetodos({
            // value:'',
            todos:copyTodos
        });
    }

    handleKeyPress(e){
        if (e.key === 'Enter'){
            // console.log('enter was pressed')
            this.updateList()
        }
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
                    {/* <Input updatetodos={this.updatetodos} /> */}
                    {/* <input ref={this.input} onKeyPress={this.handleKeyPress} /> */}
                    <Input inputRef={(el) => (this.input = el)} onkeypress={this.handleKeyPress} />
                    <button onClick={this.updateList} >Enter</button>
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