document.getElementById("inputnum").focus();

function changeLHS() {

  let userInp = document.getElementById("inputnum").value;

  var elements = document.getElementsByClassName("inputnum-el");

  for (var i = 0, len = elements.length; i < len; i++)
     {
     //changing all right hand side values
      elements[i].textContent = userInp;
     }
  
}

function unitConverter() {
  

  let userInput = document.getElementById("inputnum").value;
  console.log(userInput);

  let lengthMtoF = userInput * 3.2808;
  let lengthFtoM = userInput * 0.3048;
  let volumeLtoG = userInput * 0.2642;
  let volumeGtoL = userInput * 3.7854;
  let massKgtoP = userInput * 2.2046;
  let massPtoKg = userInput * 0.4536;

  document.getElementById("lengthMtoF").textContent = lengthMtoF.toFixed(3);
  document.getElementById("lengthFtoM").textContent = lengthFtoM.toFixed(3);
  document.getElementById("volumeLtoG").textContent = volumeLtoG.toFixed(3);
  document.getElementById("volumeGtoL").textContent = volumeGtoL.toFixed(3);
  document.getElementById("massKgtoP").textContent = massKgtoP.toFixed(3);
  document.getElementById("massPtoKg").textContent = massPtoKg.toFixed(3);

  //conversion:
  //meters to feet : 3.2808
  //feet to meters : 0.3048
  //liters to gallons : 0.2642
  //gallons to liters : 3.7854
  //kilograms to pounds : 2.2046
  //pounds to kilograms : 0.4536
}
