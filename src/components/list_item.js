import React from "react";

const ListItem = props => {
    return(
        <li className="collection-item">
            <div className="row">
                <div className="col s6">
                    {props.title}
                </div>
                <div className="col s6 right-align">
                    <button onClick={props.delete} className="btn-floating red">
                        <i className="material-icons">delete_forever</i>
                    </button>
                </div>
            </div>
        </li>
    );
};

export default ListItem;