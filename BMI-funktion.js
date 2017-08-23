// BMI Module (If/Else)
function bmi (height, weight){
    var tekst =""
    var bmi = weight/(height / 100 * height / 100)
    if (bmi < 18.5){
        console.log("undervægtig")
    }
    else if (bmi < 24.9){
        console.log("normalvægtig")
    }else
    if (bmi < 29.9){
        console.log("overvægtig")
    }else
    if (bmi < 39.9){
        console.log("fedme")
    }else
    {
        console.log("sværfedme")
    }
    console.log(bmi);
    return (tekst) 
}
bmi(170, 75);


// BMI Module (Switch/Case)
function bmi(height, weight){
   var text = "";
   var bmi = weight / (height / 100 * height / 100)
   switch (true) {
       case (bmi < 18.5):
           text = "Undervægtig";
           break;
       case (bmi < 24.5):
           text = "Normalvægt";
           break;
       case (bmi < 29.5):
           text = "Overvægtig";
           break;
       case (bmi < 39.5):
           text = "Fedme";
           break;
       case (bmi > 39.5):
           text = "Svær fedme";
           break;
       default:
           text = "Fandt ikke nogen";
   }
   console.log(bmi + text);
}
bmi(179, 120);
