if (typeof jQuery === "undefined") {
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-latest.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

$(document).ready(function(){

var navBar = function(){
                        $("#my-navigation").append('<div class="container-wrap" style="border-radius: 10px;">\
    					<div class="top-menu">\
    						<div class="row">\
    							<div class="col-sm-3">\
    								<div id="fh5co-logo">\
    									<a href="index.html">Saikat Mondal</a>\
    								</div>\
    							</div>\
    							<div class="col-sm-2">\
    								<img src="https://avatars2.githubusercontent.com/u/33754597?v=4" class="img-circle img-responsive" alt="My Github profile picture" style="width:80px;height:80px;">\
    							</div>\
    							<div class="col-sm -10 text-right menu-1">\
    								<ul>\
    									<li id="home">\
    										<a href="https://saikat2019.github.io/index.html">Home</a>\
    									</li>\
    									<li class="has-dropdown">\
                                            <a href="https://saikat2019.github.io/projects.html">Projects</a>\
                                            <ul  class="dropdown">\
                                                <li><a href="#">OpenCV</a></li>\
                                                <li><a href="#">ROS</a></li>\
                                                <li><a href="#">Deep Learning</a></li>\
                                                <li><a href="#">Android Development</a></li>\
                                            </ul>\
                                        </li>\
    									<li id="about">\
    										<a href="https://saikat2019.github.io/about.html">About</a>\
    									</li>\
    									<li id="contact">\
    										<a href="https://saikat2019.github.io/contact.html">Contact</a>\
    									</li>\
    								</ul>\
    							</div>\
    						</div>\
    					</div>\
    				    </div>');
                    };

                    navBar();

    

});
