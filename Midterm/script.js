$(() => {
  loadData();

  console.log("photo index");
});

loadData = () => {
  $.getJSON("../data.json", function(data) {
    console.log(data);

    generateWebsites(data);
  });
};

function generateWebsites(data) {
  let source = $("#index-template").html();
  let template = Handlebars.compile(source);
  let result = template(data);
  let list = $(".index-list");
  list.append(result);
}
