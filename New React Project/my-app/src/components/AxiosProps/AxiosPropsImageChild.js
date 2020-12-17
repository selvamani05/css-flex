import React from 'react'

function AxiosPropsImageChild(props) {
    return (
        <div className="individual-card">
        <div className="card-contents">
            <p>Album id: {props.data.albumId}</p>
            <p>Id : {props.data.id}</p>
            <p>Title: {props.data.title}</p>
            <p className="card-url">URL:  {props.data.url} </p>
           {/*  <p>ThumbnailUrl: {props.data.thumbnailUrl} </p> */}
            {/* <a href={props.data.thumbnailUrl}>ThumbnailUrl</a> */}
            <img className="card-image" src={props.data.thumbnailUrl} alt="Thumbnail"/>
            </div>
        </div>
    )
}

export default AxiosPropsImageChild
