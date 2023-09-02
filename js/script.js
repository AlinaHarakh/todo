      var arrText =[];
      var arrDay =[];
      var arrTime =[];
      var arrDoingText = [];
      var arrDoingDay = [];
      var arrDoingTime = [];
      var arrDoneText = [];
      var arrDoneDay = [];
      var arrDoneTime = [];

      function addTask() {
        var text= form.text.value;
        var days= form.days.value;
        var hours= form.hours.value;

        arrText.push(text);
        arrDay.push(days);
        arrTime.push(hours);

        displayTask();
      }

      function displayTask() {
        document.querySelector("#info").innerHTML="";

        for (var i = 0; i <= arrText.length -1; i++) {
          document.querySelector("#info").innerHTML+="<h2> <p class =\"inner_p\">"+arrText[i]+" </p><span onclick=\"deleteTask("+i+")\">De</span><span class = \"proccess\" onclick=\"doingAddTask("+i+")\">do</span></h2> <p class = \"d\">"+arrDay[i]+"</p><p class = \"t\">"+arrTime[i]+"</p>";
        }
      }

      function deleteTask(i) {
        arrText.splice(i, 1);
        arrDay.splice(i, 1);
        arrTime.splice(i, 1);

        displayTask();
     }

     function doingAddTask(i) {
      arrDoingText.push(arrText[i]);
      arrDoingTime.push(arrTime[i]);
      arrDoingDay.push(arrDay[i]);

      displayDoingTask(i);
      deleteTask(i);
     }

     function displayDoingTask() {
        document.querySelector("#doingInfo").innerHTML="";

        for (var i = 0; i <= arrDoingText.length -1; i++) {
          document.querySelector("#doingInfo").innerHTML+="<h2> <p class =\"inner_p\">"+arrDoingText[i]+" </p><span onclick=\"deleteDoingTask("+i+")\">De</span><span class=\"done_span\" onclick=\"doneAddTask("+i+")\">dn</span></h2> <p class = \"d\">"+arrDoingDay[i]+"</p><p class = \"t\">"+arrDoingTime[i]+"</p>";
        }
      }

      function deleteDoingTask(i) {
        arrDoingText.splice(i, 1);
        arrDoingDay.splice(i, 1);
        arrDoingTime.splice(i, 1);

        displayDoingTask();
     }

     function doneAddTask(i) {
      arrDoneText.push(arrDoingText[i]);
      arrDoneTime.push(arrDoingTime[i]);
      arrDoneDay.push(arrDoingDay[i]);

      displayDoneTask(i);
      deleteDoingTask(i);
     }

     function displayDoneTask() {
        document.querySelector("#doneInfo").innerHTML="";

        for (var i = 0; i <= arrDoneText.length -1; i++) {
          document.querySelector("#doneInfo").innerHTML+="<h2><p class =\"inner_p\">"+arrDoneText[i]+" </p><span onclick=\"deleteDoneTask("+i+")\">De</span></h2> <p class = \"d\">"+arrDoneDay[i]+"</p><p class = \"t\">"+arrDoneTime[i]+"</p>";
        }
      }

      function deleteDoneTask(i) {
        arrDoneText.splice(i, 1);
        arrDoneDay.splice(i, 1);
        arrDoneTime.splice(i, 1);

        displayDoneTask();
     }