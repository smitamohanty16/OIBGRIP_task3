const calculatetemp=() =>{
    const inputTemp=document.getElementById('temp').value;
    const tempSelected=document.getElementById
    ('temp_diff')


   const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
   const celTofah=(cel) =>{
    let fahrenheit=((cel*9/5)+32).toFixed(1);
    return fahrenheit;
   }

    const fahTocel=(fah) =>{
        let celsius=((fah-32)*5/9).toFixed(1);
        return celsius;
    }
    if(valueTemp=='cel'){
      document.getElementById("result").innerHTML=celTofah(inputTemp)+"&#176; Fahrenheit";
    }
      else{
       document.getElementById("result").innerHTML=fahTocel(inputTemp)+"&#176; Celsius";
      }  
    }
   
