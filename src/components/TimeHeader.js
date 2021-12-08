import React from 'react'

const TimeHeader = ({timeRange}) => {
    return <div style={{backgroundColor: timeRange.color}}><p style={{color: "white", fontFamily: "Arial Black", textAlign: "center"}}>{timeRange.text}</p></div>
}

export default TimeHeader
