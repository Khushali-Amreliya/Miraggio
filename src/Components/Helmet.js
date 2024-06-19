import React from 'react'

const Helmet = (props) =>{
    document.title = props.title + " - MIRAGGIO ";
    return <div>{props.children}</div>
 }

export default Helmet