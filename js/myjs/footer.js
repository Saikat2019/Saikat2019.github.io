$(document).ready(function(){
	var putFooter = function(){
							//[0] - is mandatory here, and also you can't use append here, it will simply put all text, will not render		
							document.getElementsByTagName("footer")[0].innerHTML=(
				'<div class="row">\
					<div class="col-md-3 fh5co-widget">\
						<h4>About This Page</h4>\
						<p>This is the page where I post the updates about what I\'m doing with explained Documentation</p>\
					</div>\
					<div class="col-md-3 col-md-push-1">\
						<h4>You will like to visit these Repositories</h4>\
						<ul class="fh5co-footer-links">\
							<li>\
							<a href="https://github.com/Saikat2019/ManageYourApps" target="_blank">An App manager Android App</a>\
							</li>\
							<li>\
								<a href="https://github.com/Saikat2019/dress_classifier" target="_blank">A dress classifier using Keras</a>\
							</li>\
							<li>\
								<a href="https://github.com/Saikat2019/lukas-kanade_Opticalflow_toDetectAngleOfMovement" target="_blank">Lukas Kanade Opticalflow</a>\
							</li>\
							<li>\
								<a href="https://github.com/Saikat2019/EmailAuthenticationFirebase" target="_blank">Email authentication using firebase</a>\
							</li>\
						</ul>\
					</div>\
					<div class="col-md-3 col-md-push-1">\
						<h4>Links</h4>\
						<ul class="fh5co-footer-links">\
							<li>\
								<a href="https://saikat2019.github.io/index.html">Home</a>\
							</li>\
							<li>\
								<a href="https://saikat2019.github.io/projects.html">Projects</a>\
							</li>\
							<li>\
								<a href="https://saikat2019.github.io/about.html">About</a>\
							</li>\
							<li>\
								<a href="https://saikat2019.github.io/contact.html">Contact</a>\
							</li>\
						</ul>\
					</div>\
						<div class="col-md-3">\
							<h4>Contact Information</h4>\
							<ul class="fh5co-footer-links">\
								<li>Want to tell or suggeest me something ?<br>contact me</li>\
								<li>Get my contact details <a href="https://saikat2019.github.io/contact.html" style="color: blue;">here</a></li>\
							</ul>\
						</div>\
				</div>\
				<div class="row copyright">\
					<div class="col-md-12 text-center">\
						<p>\
							<ul class="fh5co-social-icons">\
								<li>\
									<a href="#">\
										<i class="icon-twitter"></i>\
									</a>\
								</li>\
								<li>\
									<a href="#">\
										<i class="icon-facebook"></i>\
									</a>\
								</li>\
								<li>\
									<a href="#">\
										<i class="icon-linkedin"></i>\
									</a>\
								</li>\
								<li>\
									<a href="#">\
										<i class="icon-dribbble"></i>\
									</a>\
								</li>\
							</ul>\
						</p>\
					</div>\
				</div>');
						};

		putFooter();

});		