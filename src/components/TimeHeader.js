import React from 'react'

const TimeHeader = ({timeRange}) => {
    const pStyle = {
        color: "white", 
        fontFamily: "Arial Black", 
        textAlign: "center"
    }
    return <div style={{backgroundColor: timeRange.color}}><p style={pStyle}>{timeRange.text}</p></div>
}

export default TimeHeader
