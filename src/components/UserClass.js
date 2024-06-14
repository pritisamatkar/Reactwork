import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state ={
            count : 0
        }
    }
    render (){
        const {name, location} = this.props;
        return(
            <div className="user-card">
                <h2>{this.state.count}</h2>
                <button onClick={ ()=>{
                    this.setState({
                        count:this.state.count +1
                    })
                }} >increase count</button>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h3>Contact:98989XXXXX</h3>

            </div>
        )
    }
}

export default UserClass;