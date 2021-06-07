function doctorinfo() {
  document.getElementById("doctor-info").style.display = "inline";
  document.getElementById("student-info").style.display = "none";
  document.getElementById("other-info").style.display = "none";
  document.getElementById("pre").style.position = "relative";
  document.getElementById("pre").style.bottom = "40px";
  // document.classList.add("pre");
}

function studentinfo() {
  document.getElementById("student-info").style.display = "inline";
  document.getElementById("doctor-info").style.display = "none";
  document.getElementById("other-info").style.display = "none";
  document.getElementById("pre").style.position = "relative";
  document.getElementById("pre").style.bottom = "40px";
}

function otherinfo() {
  document.getElementById("other-info").style.display = "inline";
  document.getElementById("student-info").style.display = "none";
  document.getElementById("doctor-info").style.display = "none";
  document.getElementById("pre").style.position = "relative";
  document.getElementById("pre").style.bottom = "40px";
}
function validating(){
  document.getElementById("validate").style.display="inline";
}
