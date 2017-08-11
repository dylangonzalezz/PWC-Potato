var d = D$('dylan', 'gonzalez', 'en');

d.setLang('es').greet();

console.log('-----------------');

d.greet(true).setLang('es');


// $("#hello").click(function() {
//   var la = $( "#lang" ).val() + '';
//   $("#greeting").html(d.setLang(la).greeting());
// });

$("#hello").click(function() {

  var la = $( "#lang" ).val();
  d.setLang(la).HTMLGreeting("#greeting", true);

});
