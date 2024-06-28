import React from "react";
import UserContext from "../utils/userContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        //console.log(props);
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
                {/* useconext use in class based Component */}
                <UserContext.Consumer>
                    {({loggedInUser}) => <h3 className="font-bold">{loggedInUser}</h3>}
                </UserContext.Consumer>
            </div>
        )
    }
}

export default UserClass;