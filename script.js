function doctorinfo() {
  document.getElementById("doctor-info").style.display = "inline";
  document.getElementById("student-info").style.display = "none";
  document.getElementById("other-info").style.display = "none";
}

function studentinfo() {
  document.getElementById("student-info").style.display = "inline";
  document.getElementById("doctor-info").style.display = "none";
  document.getElementById("other-info").style.display = "none";
}

function otherinfo() {
  document.getElementById("other-info").style.display = "inline";
  document.getElementById("student-info").style.display = "none";
  document.getElementById("doctor-info").style.display = "none";
}
