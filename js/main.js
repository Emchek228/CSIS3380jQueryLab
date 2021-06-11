$(document).ready(() => {
  $("#cart").click(() => {
    $("#cartMenu").toggle();
  });
  $("#account").click(() => {
    $("#accountMenu").toggle();
  });
  $("#help").click(() => {
    $("#helpMenu").toggle();
  });
  $("#cartMenu").mouseleave(() => {
    $("#cartMenu").toggle();
  });
  $("#accountMenu").mouseleave(() => {
    $("#accountMenu").toggle();
  });
  $("#helpMenu").mouseleave(() => {
    $("#helpMenu").toggle();
  });
});
