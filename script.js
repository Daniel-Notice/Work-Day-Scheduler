$(document).ready(function(){
  //To display current date and time
  let currentTime = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  console.log(currentTime);
  let displayDate = document.querySelector("#currentDay");
  displayDate.textContent = currentTime;

  // This is to grab the current Hour and it will see if the current time matches
  let currentHour = dayjs().format("HH");
  console.log(currentHour);

  $(".time-div").each(function () {
    let timeDiv = $(this).attr("id").split("-")[1];

    if (currentHour == timeDiv) {
      $(this).addClass("present");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (e) {
    e.preventDefault();
    let value = $(this).siblings(".time-block").val();
    let time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
})



