function calculate() {
    const number1 = parseInt(document.getElementById("no1").value);
    const number2 = parseInt(document.getElementById("no2").value);
    var result;

    const opr = document.getElementById("operator").selectedIndex;
    console.log(`${opr}`);
    document.getElementById("default").classList.add("visually-hidden");

    switch(opr) {
        case 1: 
        result= number1+number2;
        console.log(`${result}`);

        document.getElementById("answer").value=result;
        break;
        case 2:
        result= number1-number2;
        console.log(`${result}`);

        document.getElementById("answer").value=`${result}`;
        break;

        case 3:
        result= number1*number2;
        console.log(`${result}`);

        document.getElementById("answer").value=`${result}`;
        break;

        case 4: 
        result= number1/number2;
        console.log(`${result}`);

        document.getElementById("answer").value=`${result}`;
        break;

        default: 
        document.getElementById("default").classList.remove("visually-hidden");
        document.getElementById("default").innerHTML=`Select Operator`;




    }
}



function reset() {
    document.getElementById("answer").value=0;
}