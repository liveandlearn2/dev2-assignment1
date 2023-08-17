$(document).ready(function(){
    $('#companynamevalide').hide();
    $('#telvalide').hide();
    $('#seatvalide').hide();

    $("button").click(function(){
        var companyname = $('#companyname').val();
        var contacttel = $('#contacttel').val();


        if (companyname == "") { 
            $('#companynamevalide').show();
        }else {
            $('#companynamevalide').hide();
        }

        if (contacttel == "") { 
            $('#telvalide').show();
        }else {
            $('#telvalide').hide();
        }
    });
  });