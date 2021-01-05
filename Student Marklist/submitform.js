
    
    var studentDict = JSON.parse(localStorage.getItem("studentsList"));
    
    
    var openTr  = '';
    
    for(k in studentDict){
        openTr += '<tr>';
        openTr +='<td>' + '1' + '</td>';
        openTr +='<td>' + studentDict[k].name + '</td>';
        openTr +='<td>' + studentDict[k].reg + '</td>';
        
        openTr +='<td>' + studentDict[k].city + '</td>';
        openTr += '</tr>'
        
        // function reset() {
            //     var cRow = $(this).parents('tr');
            // cRow.remove();
            // }
            
            $('#netMarks').append(openTr);
        }
