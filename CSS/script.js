function submitForm() {



    // console.log(document.getElementById("firstname").value);
    // console.log(document.getElementById("lastname").value);

    // ----------- FETCH RADIO BUTTON VALUE
    var arr = document.getElementsByName('gender'); 
              
    for(i = 0; i < arr.length; i++) { 
     if(arr[i].checked){
      var gender = (arr[i].value); 
    //   console.log(arr[i].value); 
    }     
}



    //----------- FETCH DROP DOWN VALUE
    var citySelected = document.getElementById('city').value;
    //  console.log(citySelected);

    //----------- FETCH CHECK BOX VALUE
    var checkedValue = []; 
    var inputElements = document.getElementsByName('hobby');
    // console.log(inputElements)
    for(var i=0; i<inputElements.length; i++){
          if(inputElements[i].checked){
             checkedValue.push(inputElements[i].value);
          }
    }
    // console.log(checkedValue);


    // Calender
    var cal = document.getElementById("DOB").value;
    // console.log(calender)
   

    var obj = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        gender: gender,
        city: citySelected,
        hobby: checkedValue,
        dob: cal
    }


    var myJSON = JSON.stringify(obj);

    console.log(myJSON)

}