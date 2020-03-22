import React from 'react';
import Route from 'react-dom';

const item = (props) => {
    return(
        <div className="col-sm-4">
            <div className="card mb-30" >
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <a href="/" className="card-link">Another link</a>
                </div>
            </div>
        </div>
    )
}

export default item;