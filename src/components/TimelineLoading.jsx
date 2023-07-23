import React from "react";

function TimelineLoading(Component){
    return function TimelineLoadingComponent({isLoading, ...props}){
        if(!isLoading)return <Component {...props}/>;   
        return (
            <h4>Loading Bro</h4>
        )
    }
}

export default TimelineLoading