import React from 'react'

function AxiosPropsImageChild(props) {
    return (
        <div>
            <p>Album id: {props.data.albumId}</p>
            <p>Id : {props.data.id}</p>
            <p>Title: {props.data.title}</p>
            <p>URL:  {props.data.url} </p>
           {/*  <p>ThumbnailUrl: {props.data.thumbnailUrl} </p> */}
            {/* <a href={props.data.thumbnailUrl}>ThumbnailUrl</a> */}
            <img src={props.data.thumbnailUrl} alt="Thumbnail"/>
            
        </div>
    )
}

export default AxiosPropsImageChild
