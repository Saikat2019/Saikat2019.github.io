function integrate_github_api() {
    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/Saikat2019/repos?per_page=100&type=owner",  //dont forget to put repos?per_page=100
        dataType: "json",                                                       //because in github page there are 30 repos 
        success: function(result) {                                             //listed per page    
            for( i in result ) {
                var repDescrip = result[i].description;
                if(repDescrip.search("#ANDROID_DEV#") != -1)
                {
                    $("#android_dev_repos_list").append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" +result[i].name+
                        "</a></li>"
                    );
                }
                else if(repDescrip.search("#COMPUTER_VISION#") != -1)
                {
                    $("#computer_vision_repos_list").append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" +result[i].name+
                        "</a></li>"
                    );
                }
                else if(repDescrip.search("#DL#") != -1)
                {
                    $("#dl_repos_list").append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" +result[i].name+
                        "</a></li>"
                    );
                }
                else if(repDescrip.search("#ROS#") != -1)
                {
                    $("#ros_repos_list").append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" +result[i].name+
                        "</a></li>"
                    );
                }
                else if(repDescrip.search("#WEB_DEV#") != -1)
                {
                    $("#web_dev_repos_list").append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" +result[i].name+
                        "</a></li>"
                    );
                }
                else if(repDescrip.search("#NULL#") != -1)
                {
                }
                else
                {
                    $("#miscellaneous_repos_list").append(
                        "<li><a href='" + result[i].html_url + "' target='_blank'>" +result[i].name+
                        "</a></li>"
                    );
                }


                
                
                
            }
            //to put no of repositories i have in my gihub acc
            $("#no-of-repos").attr("data-to",result.length);
            
            var latestUT; //latest update time
            var max = 0;
            var index=0;
            var date = new Date();
            for(j in result){           // this is to get the latest commit other than my github page
                var updateDate = new Date(result[j].updated_at);
                if(max<updateDate)
                {
                    if(result[j].name != "Saikat2019.github.io")
                    {
                        max = updateDate;
                        index = j;
                    }
                }
            }

            var dat = [];
            for(n in result){       //i dont want to include these two repositories
                if(result[n].name != "Saikat2019.github.io")
                    if(result[n].name != "Macoda19.github.io")
                        if(result[n].name != result[index].name) //also i dont want the latest created and latest 
                            dat.push(result[n].created_at);             //updated repos to be same
            }
            dat.sort().reverse();  // to sort and get latest created repositories
            var n1,n2,n3;
            for(k in result){
                if(result[k].created_at === dat[0]){
                    n1=k;
                }
                if(result[k].created_at === dat[1]){
                    n2=k;
                }
                if(result[k].created_at === dat[2]){
                    n3=k;
                }
            }
            
            // to put latest updated repositories inside index.html
            $("#current-proj-header").append(result[index].name);
            $("#current-proj-header, #current-proj-url").attr("href",result[index].html_url);

            // to put latest created repositories inside index.html
            $("#latest-proj-1-header").append(result[n1].name);
            $("#latest-proj-1-url").attr("href",result[n1].html_url);

            $("#latest-proj-2-header").append(result[n2].name);
            $("#latest-proj-2-url").attr("href",result[n2].html_url);

            $("#latest-proj-3-header").append(result[n3].name);
            $("#latest-proj-3-url").attr("href",result[n3].html_url);
            
        }
    });
};


integrate_github_api(); //this function has to be called here, otherwise it will not work


