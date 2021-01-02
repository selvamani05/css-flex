var newArr = JSON.parse(localStorage.getItem("studentsList"));

console.log(newArr);

var openTr  = '';

    for(i=0; i < newArr.length; i++){
    openTr += '<tr>';
    openTr +='<td>' + [(i+1)] + '</td>';
    openTr +='<td>' + newArr[i].markscored + '</td>';
    openTr +='<td>' + newArr[i].reg + '</td>';
    openTr += '</tr>'

    function reset() {
        var cRow = $(this).parents('tr');
    cRow.remove();
    }

}

$('#netMarks').append(openTr);



// var cRow = $(this).parents('tr');
// cRow.remove();