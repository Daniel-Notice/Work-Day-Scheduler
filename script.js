$(document).ready(function(){
    //To display current date and time
    let currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A");
    console.log(currentTime);
    let displayDate = document.querySelector("#currentDay")
    displayDate.textContent = currentTime ;
})



