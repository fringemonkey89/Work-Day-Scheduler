
  //display date and todays date
  var todayDate = moment().format('dddd, MMM Do YYYY');
  $("#currentDay").text(todayDate);


$(document).ready(function () {
  //adding click listener to saveBtn
    $(".saveBtn").on("click", function(){

    //gets values from the description
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      localStorage.setItem(time, text);
    }) 

      function timeTrack() {
      //get current time
      var timenow = moment().hour();
      // looping through all the time block elements
      $(".time-block").each(function (){
      var blocktime = parseInt($(this).attr("id").split("hour")[1]);
      
     //checks the time and class to change background colors
      if (blocktime < timenow){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if
          (blocktime === timenow){
          $(this).removeClass("future");
          $(this).removeClass("past");
          $(this).addClass("present");
      }
      else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
      }
    })
}
  
    $("#hour-8 .description").val(localStorage.getItem("hour8"));
    $("#hour-9 .description").val(localStorage.getItem("hour9"));
    $("#hour-10 .description").val(localStorage.getItem("hour10"));
    $("#hour-11 .description").val(localStorage.getItem("hour11"));
    $("#hour-12 .description").val(localStorage.getItem("hour12"));
    $("#hour-13 .description").val(localStorage.getItem("hour13"));
    $("#hour-14 .description").val(localStorage.getItem("hour14"));
    $("#hour-15 .description").val(localStorage.getItem("hour15"));
    $("#hour-16 .description").val(localStorage.getItem("hour16"));
    $("#hour-17 .description").val(localStorage.getItem("hour17"));

 timeTrack();

})