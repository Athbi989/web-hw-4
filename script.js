function Magic() {
  var InputText = document.getElementById("Grades").value;
  var Result = Calclaute(InputText);
  /* Assign Values to result html output */
  var container = document.getElementById("resultDom"); //Here's grade container
  container.innerHTML = "";
  Result.forEach((grade) => {
    container.innerHTML += `
    <div class="result">
        <div class="t1">${grade["grade"]} <span class="t2">(${grade["gpa"]})</span></div>
        <img src="./assets/memes/${grade["gif"]}" alt="" srcset="" />
    </div>
    `;
  });
  /* Some cool stuff hehe */
  document.getElementById("homePanel").style.display = "none";
  document.getElementById("watingPanel").style.display = "block";
  setTimeout(function () {
    document.getElementById("watingPanel").style.display = "none";
    document.getElementById("resultPanel").style.display = "block";
  }, 2000);
  console.log(Result);
}

let Calclaute = function (string) {
  var result = [];
  var Grades = string; //get input value
  //Multpi grade (split by comma ,)
  var GradesArray = Grades.split(",");
  GradesArray.forEach((item) => {
    if (item != "") {
      //Check (empty values/non int )
      var ResultInWord = "";
      var ResultGif = "";
      if (item >= 90 && item <= 100) {
        //You got (A)
        ResultInWord = "A";
        ResultGif = "yeaahahah.gif";
      } else if (item >= 80 && item < 90) {
        //You got (B)
        ResultInWord = "B";
        ResultGif = "ummYeeah.gif";
      } else if (item >= 70 && item < 80) {
        //You got (C)
        ResultInWord = "C";
        ResultGif = "nervoue.gif";
      } else if (item >= 60 && item < 70) {
        //You got (D)
        ResultInWord = "D";
        ResultGif = "nervous2.gif";
      } else {
        //You got (F)
        ResultInWord = "F";
        ResultGif = "oh.gif";
      }
      result.push({
        grade: ResultInWord,
        gpa: item,
        gif: ResultGif,
      });
    }
  });
  return result;
};

function backtoMain() {
  document.getElementById("resultPanel").style.display = "none";
  document.getElementById("homePanel").style.display = "block";
}
