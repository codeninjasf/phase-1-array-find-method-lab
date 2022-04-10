// code your solution here
function superbowlWin(record){
    function isFootballYear(year){
        if (year.result === "W"){
            return true
        } else {
            return false
        }
    }


const yearWon = record.find(isFootballYear);
    if (yearWon){
        return yearWon.year
    }

}