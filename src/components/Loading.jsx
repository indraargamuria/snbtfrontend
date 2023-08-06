import React from "react";

function Loading(Component){
    return function LoadingComponent({isLoading, ...props}){
        if(!isLoading)return <Component {...props}/>;   
        return (
            <h4>Loading Bro</h4>
        )
    }
}

export default Loading;