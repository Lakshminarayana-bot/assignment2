import React from 'react'

function Model(props) {
    return (
        <div>
            <ul>
                <li>NAME:{props.name}</li>
                <li>AGE:{props.age}</li>
                <li>HOBBIE:{props.hobbie}</li>
            </ul>
        </div>
    );
}

export default Model
