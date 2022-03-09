import React from "react";
import './app.css';
import Input from "../../components/Input";
import H1 from "../../components/Title"

class App extends React.Component{
    // constructor(){

    // }
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
                <Input />
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