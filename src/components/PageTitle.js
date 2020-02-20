import React from 'react';


function PageTitle(props){
    return (
        <>

    <h1>{props.title}</h1>
    <span>{props.subTitle}</span>
    <p>{props.description}</p>

    
</>
    )
}

export default PageTitle;
