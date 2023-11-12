function bmical(weight, height) {
    
    var bmi = weight / (height*height);
    return bmi.toFixed(1);
  
}

document.querySelector("#btn1").addEventListener("click",function(){
  let height =Number( document.querySelector("#hei").value);
  let weight =Number( document.querySelector("#wie").value);
    var bmi = bmical(weight,height );
console.log(bmi);
document.querySelector("#p1").innerHTML=bmi;
    
    });





// if (bmi < 18.5) {
//     console.log("your bmi is " + bmi + " you are underweight ");
// }

// else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log("your bmi is " + bmi + " your weight is normal stay as u are  ");
// }

// else {
//     console.log("your bmi is " + bmi + " you are overweight,just die so that it lift some weight from earth,infact you ar so fat even your mama looks slim  ");
// }


//its a bmi calculator it takes weight and height and provide the bmi. basically it tells u wether u are overweight ,underweight or normal.


