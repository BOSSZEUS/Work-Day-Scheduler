let hour =['9am','10am', '11am','12am', '1pm', '2pm', '3pm', '4pm', '5pm','6pm' ]
let set = json.parse(localStorage.getItem('table')) || []
set.length = hour.length

var day = moment.unix(1318781876);
let time = moment('01/31/2020', 'mm/dd/yy').format('x')
console.log(time)
