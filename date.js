function kacGunSonra(){
    var date=new Date(dateObject.value);//dışarıdaki global nesnseyi alıyor
    var today=new Date();
 
    var result=document.getElementById("result");
    var miliseconds = today-date;
    var total_seconds = parseInt(Math.floor(miliseconds / 1000));
    var total_minutes = parseInt(Math.floor(total_seconds / 60));
    var total_hours = parseInt(Math.floor(total_minutes / 60));
    var days = parseInt(Math.floor(total_hours / 24));

    if(miliseconds>0){
        if(days==0){
            result.innerHTML="Bugün.";
        } 
        else{
          result.innerHTML=" "+(days)+"  gün önce.";    
        }
        
    }

    else if(miliseconds<0){
        if(days==0){
            result.innerHTML="Bugün.";
        } 
        else{
          result.innerHTML=" "+Math.abs(days)+" gün sonra.";  
        }
        
    } 
}