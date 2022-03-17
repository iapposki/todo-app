import React from "react";
import './index.css';


export class List extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            bgColor:"yellow"
        }
        this.checkClick = this.checkClick.bind(this);
    }

    // deletetodos(index){
    //     // console.log(index)
    // }

    checkClick(){
        if (this.state.bgColor === "yellow"){
            this.setState({
                bgColor:"red"
            })
        } else {
            this.setState({
                bgColor:"yellow"
            })
        }
    }

    strikethroughHelper(index){
        var condition = false;
        this.props.arr1.forEach(element => {
            // console.log(element)
            if (index === element){
                condition = true;
            }
        })
        // console.log(condition)
        console.log(this.props.arr1)
        return condition;
    }

    render(){
        
        return(
            <ul>
                {/* <li>{this.props.todos}</li> */}
                {/* since this is dynamic, we need to add javascript */}
                {
                    this.props.todos && Array.isArray(this.props.todos) && this.props.todos.map((todo,index)=>(
                        
                        <li className="flex-list" key={`${todo}_${index}`} >
                            <p style={{textDecoration:this.strikethroughHelper(index) ? "line-through":"none"}}>{todo}</p>
                            <button style={{color:"red", marginLeft:"2em", textDecoration:"none"}} onClick={() => (this.props.deletetodos(index))}>❌</button>
                            {/* <button id="check-status" style={{backgroundColor:this.state.bgColor}} onClick={this.checkClick}></button> */}
                            <button onClick={() => this.props.strikethrough(index)}>✔</button>
                        </li>
                    ))
                }
            </ul>
        )
    }

}

export default List;