$(document).ready(function () {
  let currAnimal = "";
  $(".animalRef").click(function () {
    if(!(currAnimal === ""))
        $("#"+ currAnimal).toggle();
      currAnimal = $(this).attr("id") + "Info";
      $("#" + currAnimal).toggle();
  });

});