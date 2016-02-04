$(document).on('pageshow', '#changepasstwo', function(){ 
  
   alert("chngpass22");

uusernameArray =  JSON.parse(sessionStorage.getItem("uusernameArray"));
uusername=uusernameArray.Username;

   $(document).off('click', '#chngpassfinal').on('click', '#chngpassfinal', function() { 


var ppassword=document.getElementById('ppassword').value;
var reppassword=document.getElementById('reppassword').value;

//alert(ppassword+'ppassword');

document.getElementById('ppassword').value = "";
document.getElementById('reppassword').value = "";


if(ppassword == ''  ){
  alert('Fill up all the field');
   // $.mobile.changePage($('#Volunteer'), { transition: "none", changeHash: true, reverse: false });
}else{

$.ajax({url: "http://staging.eimpressive.com/slim-four/chngpass_final.php?PPassword="+ppassword+"&uusername="+uusername,
    data:$('#check_finalchange').serialize(),
    type: 'post',                   
    async: 'true',
    crossDomain: true,
    dataType: 'json',
    beforeSend: function() {
    },
    complete: function() {
    },
    success: function (result) {
      console.log('searchlpa' +result);
      if(result[0]){
        document.getElementById('ppassword').value = "";
         sessionStorage.clear(); 
/*document.getElementById('ccnumber').value = "";*/

        alert('Your Password Has Been Reset Successfully ');
        $("#popupsearchmade").popup("open");
       /* sessionStorage.setItem("sh_new_veri_list_countq",JSON.stringify(result[0]));*/

        $.mobile.loading().hide();
       $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
        //$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
      }else {
        alert('No Data Found for the search record'); 
      }

      return false;
    },
    error: function (request,error) {    
      console.log(request);
      console.log(error);  
      $("#Network").popup("open");         
      alert('Network error has occurred please try again!');
    }
  });
}
});

});