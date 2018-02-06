import React, {Component} from "react";
import toDoData from "../assets/data";
class ToDoList extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: toDoData
        }
    }
    render(){
        const listItems = this.state.list.map((item, index) => {
            return <li key={index} className="collection-item">{item.title}</li>
        });
        return(
            <div>
                <ul className="collection">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ToDoList;