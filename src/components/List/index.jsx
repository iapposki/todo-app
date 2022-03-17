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

    render(){

        return(
            <ul>
                {/* <li>{this.props.todos}</li> */}
                {/* since this is dynamic, we need to add javascript */}
                {
                    this.props.todos && Array.isArray(this.props.todos) && this.props.todos.map((todo,index)=>(
                        <li className="flex-list" key={`${todo}_${index}`}>
                            {todo}
                            <button style={{color:"red", marginLeft:"2em"}} onClick={() => (this.props.deletetodos(index))}>&#10060;</button>
                            <button id="check-status" style={{backgroundColor:this.state.bgColor}} onClick={this.checkClick}></button>
                        </li>
                    ))
                }
            </ul>
        )
    }

}

export default List;