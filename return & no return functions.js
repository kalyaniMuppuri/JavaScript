//1.
let students=["vijitha","reshma","harshitha","kalyani","hindu"]
students.push("sireesha")
students.unshift("harini")
students.pop()
console.log(students)
console.log(students.length)

//2.
function calculateTotalBill(price,quality){
    let totalbill=price*quality;
    return totalbill;
}
let result=calculateTotalBill(200,5)
console.log(result)

//3.
function convertToMinutes(numbersOfHours){
    let convertToMinutes=numbersOfHours*60;
    return convertToMinutes;    
}
let total=convertToMinutes(19)
console.log(total)

//4.return function:-
function yearsToMonths(years){
    return years*12;   
}
let outcome=yearsToMonths(7)
console.log(outcome)

//noreturn function:-
function yearsToMonths(years){
    console.log(years*12)
}
yearsToMonths(4)


//5.return function:-
function monthsToyears(months){
    return months/12;
}
let out=monthsToyears(60)
console.log(out)

//noreturn function:-
function monthsToyears(months){
    console.log(months/12)
}
monthsToyears(48)

//6.return function:-
function hoursToSeconds(hours){
    return hours*3600;
}
let come=hoursToSeconds(4)
console.log(come)

//noreturn function:-
function hoursToSeconds(hours){
    console.log(hours*3600)
}
hoursToSeconds(4)

//7.return function:-
function monthsToDays(months){
    return months*31;
}
let output=monthsToDays(5)
console.log(output)

//noreturn function:-
function monthsToDays(months){
    console.log(months*30)
}
monthsToDays(4)


//8.return function:-
function weeksToDays(weeks){
  return weeks*7;
}
let input=weeksToDays(5)
console.log(input)

//noreturn function:-
function weeksToDays(weeks){
    console.log(weeks*7)
}
weeksToDays(4)

//9.return function:-
function daysToHours(days){
    return days*24;
}
let complete=daysToHours(5)
console.log(complete)


//noreturn function:-
function daysToHours(days){
   console.log(days*24)
   
}
daysToHours(4);

//10.noreturn function:-
function findAge(currentYear,birthYear){
 console.log(currentYear-birthYear)
}
findAge(2026,2006)

//return function:-
function findAge(currentYear,birthYear){
 return currentYear-birthYear
}
let result=findAge(2026,2006)
console.log(result)

//11.noreturn function:-
function findPercentage(obtainedMarks,totalMarks){
  let percentage=(obtainedMarks/totalMarks)*100
  console.log(percentage)
}
findPercentage(431,600)

//return function:-
function findPercentage(obtainedMarks,totalMarks){
  return (obtainedMarks/totalMarks)*100
}
let result=findPercentage(843,1000)
console.log(result)