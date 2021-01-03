 var students = [];

function subsubmit() {
    var stu = {
        reg : $("#reg").val(),
        name : $("#name").val(),
        schoolname :$("#schoolname").val()
    }
    students.push(stu);
    localStorage.setItem("studentsList" , JSON.stringify(students));

    var openTr = '<tr>'
    var td1 = '<td>' + students.length + '</td>';
    var td2 = '<td>' + $("#subject").val() + '</td>';
    var td3 = '<td>' + $("#maxMark").val() + '</td>';
    var td4 = '<td>' + stu.markscored + '</td>';
    var td5 = '<td>' + (stu.markscored / $("#maxMark").val()) * 100 + '</td>';
    var closeTr = '</tr>'


    $('#myMarks').append(openTr + td1 + td2 + td3 + td4 + td5 + closeTr);

    $("#subject").val(null);
    $("#maxMark").val(null);
    $("#markScored").val(null);

    }


function submitMarks() {
    window.location = "./submitform.html";
    }


