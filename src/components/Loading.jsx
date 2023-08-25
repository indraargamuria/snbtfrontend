import React from "react";

function Loading(Component){
    return function LoadingComponent({isLoading, ...props}){
        if(!isLoading)return <Component {...props}/>;   
        return (
            <h4>Loading Data, Harap Tunggu, Jika Dalam 1 Menit Loading Tidak Kunjung Selesai, Cek Koneksi Kamu</h4>
        )
    }
}

export default Loading;