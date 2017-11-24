
// getElementById('output').style.visibility = 'hidden';
document.getElementById('kgInputs').addEventListener('input', function(e){
  // getElementById('output').style.visibility = 'visible';
  let kg = e.target.value;
  document.getElementById('gramsoutput').innerHTML = kg*1000;
  document.getElementById('milligramsoutput').innerHTML = kg*1000000;
  document.getElementById('tonnesoutput').innerHTML = kg/1000;

})
