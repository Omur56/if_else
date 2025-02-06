const number = prompt("Birinci ededi daxil edin: ");

const number_2 = prompt("Ikinci ededi daxil edin: ");

if (number > number_2) {
  alert("Birinci ededi ikinci ededden boyukdur")
}
else if (number < number_2) {
  alert("Birinci ededi ikinci ededden kicikdir")
}

else if (number === number_2) {
  alert("Edeler eynidir")
  }
   else {
    alert("ededleri tekrar daxil edin: ")
    }