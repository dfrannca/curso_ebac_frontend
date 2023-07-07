$(document).ready(function() {
  $("#formTarefa").submit(function(event) {
    event.preventDefault();
    var novaTarefa = $("#novaTarefa").val();
    if (novaTarefa !== "") {
      var listItem = $("<li>").text(novaTarefa);
      listItem.click(function() {
        $(this).toggleClass("tarefa-concluida");
      });
      $("#listaTarefas").append(listItem);
      $("#novaTarefa").val("");
    }
  });
});