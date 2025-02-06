const number = prompt("birinci eded daxil edin: ");

const number_2 = prompt("ikinci ededi daxil edin: ");

if (number > number_2) {
  alert("birinci eded ikinci edededen boyukdur");
} else if (number < number_2) {
  alert("ikinci eded birinci ededden boyukdur");
} else {
  alert("edeler eynidir");
}
