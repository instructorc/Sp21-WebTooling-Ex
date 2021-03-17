var data = require('./activity.json');

//Pulling in JSON data from within file structure
var i = 0;
while(i < data.student_course_info.length){
    console.log(data.student_course_info[i].course_name)
    i++;
}

//Bringing in data from accross the network.


