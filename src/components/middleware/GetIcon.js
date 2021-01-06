function GetIcon(iconNumber) {
    var icon = iconNumber +"";
    while (icon.length < 2) icon = "0"+icon;
    return "/icons/"+icon+"-s.png"
}

export default GetIcon