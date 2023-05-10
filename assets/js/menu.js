
  $('#sidebar .app-sidebar-content').load('header.html', function(response, status, xhr) {
  	if (status == "success") {
        console.log("The header.html is loaded successfully");
    }
  });
  console.log('load');


