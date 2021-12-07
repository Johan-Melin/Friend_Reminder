import React from 'react'

const TimeHeader = ({date, titles, setTitles}) => {
    const calculateDays = (date) => {
        let timeDiff = new Date().getTime() - new Date(date).getTime();
        let days = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return days;
    }
    
    let daysGone = calculateDays(date);
    let color = "#BED8D7";
    let text = "Less than 1 Week";
    if (daysGone > 7 && daysGone <= 30){
        color = "#B19CD8";
        text = "Less than 1 Month";
    } else if (daysGone > 30 && daysGone <= 90){
        color = "#FFE096";
        text = "Less than 3 Months";
    } else if (daysGone > 90){
        color = "#F4B5D2";
        text = "More than 3 Months";
    }

    if(titles.indexOf(text)===-1){
        return <div style={{backgroundColor: color}}><p style={{color: "white", fontFamily: "Arial Black", textAlign: "center"}}>{text}</p></div>
    }
    return null;
}

export default TimeHeader
