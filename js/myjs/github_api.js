function draw_card(name,url,description,date_updated,date_created){
    return '<div style="padding: 10px;margin :12px ;display: inline-block;">\
        <!-- BEGIN: card -->\
        <a href='+url+' target="_blank">\
        <div class="card" data-effect="color">\
            <button class="card__save  js-save" type="button">\
              <i class="fa  fa-bookmark"></i>\
             </button>\
            <figure  class="card__image">\
              <img src="'+name+'/imgs/bg.jpg" alt="Short description">\
            </figure>\
            <div class="card__header">\
              <figure class="card__profile">\
                <img src="'+name+'/imgs/icon.jpg" alt="Short description">\
              </figure>\
            </div>\
            <div class="card__body">\
              <h3 class="card__name adjust_color" style:"color:#FFF;" >'+name+'</h3>\
              <p class="card__job">\
                    <p style="color:#FFF;font-size:12px;"><i class="icon-eye2" ></i>View</p>\
              </p>\
              <p class="card__bio">'+description+'</p>\
            </div>\
            <div class="card__footer">\
                <li style="color:#FFF"><p class="card__date">Updated On : '+date_updated+'</p></li>\
                <li style="color:#FFF"><p class="card__date">Created On : '+date_created+'</p></li>\
            </div>\
        </div>\
        <!-- END: card -->\
        </a>\
    </div>';
}

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
                    $("#android_dev_repos_card_list").append(draw_card(result[i].name,result[i].html_url,result[i].description.replace(/#ANDROID_DEV#/g,""),
                        result[i].updated_at.substring(0,10),result[i].created_at.substring(0,10)));
                }
                else if(repDescrip.search("#COMPUTER_VISION#") != -1)
                {
                    $("#computer_vision_repos_card_list").append(draw_card(result[i].name,result[i].html_url,result[i].description.replace(/#COMPUTER_VISION#/g,""),
                        result[i].updated_at.substring(0,10),result[i].created_at.substring(0,10)));
                }
                else if(repDescrip.search("#DL#") != -1)
                {
                    $("#dl_repos_card_list").append(draw_card(result[i].name,result[i].html_url,result[i].description.replace(/#DL#/g,""),
                        result[i].updated_at.substring(0,10),result[i].created_at.substring(0,10)));
                }
                else if(repDescrip.search("#ROS#") != -1)
                {
                    $("#ros_repos_card_list").append(draw_card(result[i].name,result[i].html_url,result[i].description.replace(/#ROS#/g,""),
                        result[i].updated_at.substring(0,10),result[i].created_at.substring(0,10)));
                }
                else if(repDescrip.search("#WEB_DEV#") != -1)
                {
                    $("#web_dev_repos_card_list").append(draw_card(result[i].name,result[i].html_url,result[i].description.replace(/#WEB_DEV#/g,""),
                        result[i].updated_at.substring(0,10),result[i].created_at.substring(0,10)));
                }
                else if(repDescrip.search("#NULL#") != -1)
                {
                }
                else
                {
                    $("#miscellaneous_repos_card_list").append(draw_card(result[i].name,result[i].html_url,result[i].description.replace(/#MISCELLANEOUS#/g,""),
                        result[i].updated_at.substring(0,10),result[i].created_at.substring(0,10)));
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


