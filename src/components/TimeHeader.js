import React from 'react'

const TimeHeader = ({timeRange}) => {
    let color = "#BED8D7";

    return <div style={{backgroundColor: timeRange.color}}><p style={{color: "white", fontFamily: "Arial Black", textAlign: "center"}}>{timeRange.text}</p></div>
}

export default TimeHeader
