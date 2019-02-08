function nor() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/Saikat2019/repos?per_page=100&type=owner",  //dont forget to put repos?per_page=100
        dataType: "json",                                                       //because in github page there are 30 repos 
        success: function(result) {                                             //listed per page    
            for( i in result ) {
                $("#repos_list").append(
                    "<li><a href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a></li>"
                );
            }
            //$("#repos_no").append("Total Repositories: " + result.length);
            document.getElementById("no-of-repos").setAttribute("data-to",result.length);
        }
    });
};


nor();

