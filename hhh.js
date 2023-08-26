var time = +prompt('Введите время')

switch (time) {
    case time:


        if(time == 1){
            alert(time + 'часов ночи')
        
        }else if (time < 6) {
            alert(time +" часов ночи")
        
        }else if (time < 12) {
            alert(time +" часов утра")
        
        }else if (time < 18) {
            alert(time + " часов дня")
        
        }else if (time < 24) {
            alert( time + " часов вечера")
        
        }else if (time > 24){
            alert("Something going wrong")
        }


        break;

        
    default:
    
        break;
}