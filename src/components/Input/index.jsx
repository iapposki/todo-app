import React from "react";

class Input extends React.Component{
    constructor(props){
        super(props)
        // this.state = {
        //     value: "",
        //     // value1:""
        // };
        // immutable object
        // to make 'this' of constructor equalt to 'this' of handleChange
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        // console.log(e.target.value)
        // this.state.value = e.target.value;
        // this.setState({
        //     value: e.target.value,
        //     // value1: e.target.value
        // }) // untill we dont set value as a method, react UI will not understand to update the value, which is why simply assigning this.state.value = e.target.value will not work
        this.props.updatetodos({value:e.target.value})
    }
    
    render(){
        return(
            <div>
                {/* <input onChange={this.handleChange} /> */}
                <input ref={this.props.inputRef} onKeyPress={this.props.onkeypress} />
                {/* <p>{this.state.value}</p> */}
                {/* <p>{this.state.value1}</p> */}
            </div>
        )
    }
}


export default Input;