$( document ).ready(function() {
    var studentDict = {}
});


function addSubject() {
    var sub = {
        subject : $("#subject").val(),
        maxMark : $("#maxMark").val(),
        markScored :$("#markScored").val()
    }
    studentDict[$("#reg").val()].subjects.push(sub);
    localStorage.setItem("studentsList" , JSON.stringify(studentDict));
    console.log(studentDict)
    var openTr = '<tr>'
    var td1 = '<td>' + studentDict[$("#reg").val()].subjects.length + '</td>';
    var td2 = '<td>' + $("#subject").val() + '</td>';
    var td3 = '<td>' + $("#maxMark").val() + '</td>';
    var td4 = '<td>' + $("#markScored").val() + '</td>';
    var td5 = '<td>' + ($("#markScored").val() / $("#maxMark").val()) * 100 + '</td>';
    var closeTr = '</tr>'


    $('#myMarks').append(openTr + td1 + td2 + td3 + td4 + td5 + closeTr);

    $("#subject").val(null);
    $("#maxMark").val(null);
    $("#markScored").val(null);

    }


// function submitMarks() {
//     }

function addDetail() {
    var myObj = {};
    var regKey =  $("#reg").val();

     myObj = {
        reg : regKey,
        name : $("#name").val(),
        class: $("#stuClass").val(),
        email: $("#email").val(),
        schoolname :$("#schoolname").val(),
        city: $("#city").val(),
    }
    // console.log("object is " , myObj);
    console.log("reg key is " , regKey)
    studentDict = {[regKey] : myObj};
    console.log(studentDict);
    
}

function submitMarks() {
    window.location = "./submitform.html";
}
