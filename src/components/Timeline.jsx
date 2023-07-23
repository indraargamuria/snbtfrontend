import React from 'react';

const Timeline = (props) => {
    const {timeline} = props;
    if(!timeline || timeline.length === 0) return <p>Data tidak ada</p>
    return (
        <React.Fragment>
            <ul>
                {timeline.map(todo => {
                    return (
                        <li key={todo.id} href="#">{todo.name}</li>
                    )
                })}
            </ul>
        </React.Fragment>
    )
};

export default Timeline;