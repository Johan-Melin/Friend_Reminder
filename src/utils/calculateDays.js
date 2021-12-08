export default function calculateDays(date) {
    let timeDiff = new Date().getTime() - new Date(date).getTime();
    let days = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let text = "Less than 1 Week";
    let color = "#BED8D7";
    if (days > 7 && days <= 30){
        text = "Less than 1 Month";
        color = "#B19CD8";
    } else if (days > 30 && days <= 90){
        text = "Less than 3 Months";
        color = "#FFE096";
    } else if (days > 90){
        text = "More than 3 Months";
        color = "#F4B5D2";
    }

    return {text, color};
}