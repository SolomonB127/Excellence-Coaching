

// CoursesBtn Funtionality
function mycourseFunction() {
  document.getElementById("courseDropdown").classList.toggle("course-show");
}

window.onclick = function(event) {
  if (!event.target.matches('.course-dropbtn')) {
    var dropdowns = document.getElementsByClassName("course-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('course-show')) {
        openDropdown.classList.remove('course-show');
      }
    }
  }
}