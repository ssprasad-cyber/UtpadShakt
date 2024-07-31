function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const second = new Date().getSeconds();
    
    if(hour < 10 & minute < 10){  
        timeDisplay.textContent = '0'+ hour+":"+'0'+ minute;
    }
    else if(hour < 10 ){  
        timeDisplay.textContent = '0'+ hour+":"+minute;
    }
    else if(minute < 10){
        timeDisplay.textContent = hour+":"+'0'+minute;
    }
    else{
        timeDisplay.textContent = hour+":"+minute;
    }
    if(second < 10){
        document.getElementById("second").textContent = '0'+ second+"s";
    }else{
        document.getElementById("second").textContent = second+"s";
    }
}setInterval(refreshTime, 1000);
  function refreshDate() { 
    const dateDisplay = document.getElementById("date");
    const date = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const months = {
        0: "Jan",   
        1: "Feb",  
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sept",
        9: "Oct",
        10: "Nov",
        11: "Dec"
    }
    if(date === 1 || date === 21 || date === 31){
        if(date < 10){
            dateDisplay.textContent = '0'+ date+"'ST";
        }else{
        dateDisplay.textContent = date+"'ST";
        }
    }else if(date === 2 || date === 22){
        if(date < 10){
            dateDisplay.textContent = '0'+ date+"'ND";
        }else{
        dateDisplay.textContent = date+"'ND";
        } 
    }else if(date === 3 || date === 23){
        if(date < 10){
            dateDisplay.textContent = '0'+ date+"'RD";
        }else{
        dateDisplay.textContent = date+"'RD";
        }
    }else{
        if(date < 10){
            dateDisplay.textContent = '0'+ date+"'TH";
        }else{
        dateDisplay.textContent = date+"'TH";
        } 
    }   
    for (const [key, value] of Object.entries(months)) {
        if(month == key){
            dateDisplay.textContent += " "+value+" "+year; 
        }
    }   
}setInterval(refreshDate, 1000); 


