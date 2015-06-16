var bio= {
	name: "Manya Almatar",
	role: "Java Developer",
	contacts: {
		mobile: "773-954-9254",
		github: "malmatar",
		email: "manyaam13@gmail.com",
		location: "Chicago, IL"
	},
	welcomMessage: "Motivated, committed and detail-oriented entry-level web developer with superb work ethic.\n4.0 student with a Master's degree in Computer Science. Developed, designed and implemented science club website at Northeastern Illinois University.\nEngineered and implemented an object-oriented automated teller machine (ATM) software system.\nSeeking a position within a progressive company where I can apply my computer science and web development skills and experience to create a functional user experience.",
	skills: ["JAVA","JAVASCIPT","HTML", "CSS", "PHP", "SQL", "J2EE", "Servlet JSP", "JavaBeans", "Spring", "SpringMVC", "Struts", "Hibernate" ],
	picture: "images/myPicture.jpg",
	display:  function(){
		//$("#main").append(internationalizeButton);
		//Name and role
		var formatedname = HTMLheaderName.replace("%data%", bio.name);
		var formatedrole= HTMLheaderRole.replace("%data%", bio["role"]);
		$("#header").prepend(formatedrole);
		$("#header").prepend(formatedname);
		//picture
		var formattedpic = HTMLbioPic.replace("%data%", bio.picture);
		$("#header").append(formattedpic);
		//Welcome message
		var formattedmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomMessage);
		$("#header").append(formattedmsg);
		//Contact info for the top part
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedemail);
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedmobile);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedlocation);
		//Skills
		if (bio.skills.length>0){
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
			$("#skills").append(formattedSkill);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[12]);
			$("#skills").append(formattedSkill);
		}
		//contact info for the bottom part
		var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#footerContacts").append(formattedemail);
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#footerContacts").append(formattedmobile);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#footerContacts").append(formattedgithub);
	}
}

var education = {
	schools: [
			{
				name: "Northeastern Illinois University",
				location: "Chicago, IL",
				degree: "Master",
				majors: "CS",
				dates: 2014,
				url: "http://www.neiu.edu/future-students/?utm_source=Carnegie&utm_medium=PPC&utm_campaign=Brand"
			},
			{
				name: "Electrical Engineering University",
				location: "Damascus, Syria",
				degree: "BA",
				majors: "Electrical Engineering",
				dates: "2002",
				url: ""
			}
		],
		onlinecourse:{
			title: "Front-End Web Developer Nanodegree Course",
			school: "Udacity",
			dates: 2014,
			url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		display: function(){
			for(school in education.schools){
				$("#education").append(HTMLschoolStart);
				var formattedname = HTMLschoolName.replace("%data%", education.schools[school].name);
				var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
				var formattedNameAndDegree = formattedname + formatteddegree;
				$(".education-entry:last").append(formattedNameAndDegree);
				var formatteddates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
				$(".education-entry:last").append(formatteddates);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
				$(".education-entry:last").append(formattedLocation);
				var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedmajor);
		}
		$(".education-entry:last").append(HTMLonlineClasses);
		var formattedtitle = HTMLonlineTitle .replace("%data%", education.onlinecourse.title);
		var formattedcourse= HTMLonlineSchool.replace("%data%", education.onlinecourse.school);
		var formattedTitleAndSchool = formattedtitle + formattedcourse ;
		$(".education-entry:last").append(formattedTitleAndSchool);
		var formatteddates = HTMLonlineDates.replace("%data%", education.onlinecourse.dates);
		$(".education-entry:last").append(formatteddates);
		var formattedurl = HTMLonlineURL.replace("%data%",education.onlinecourse.url);
		$(".education-entry:last").append(formattedurl);
	}
}

var work = {
	jobs: [
		{
			employer: "UNI-B Solutions",
			title: "Front-End Web Developer",
			location: "Chicago",
			dates: "October 2014 to February 2015",
			description: "Contributed to Front End development of a significant Web application project.\nTranslated abstract requirements into concrete user work flows and interaction designs.\nDeveloped and troubleshot the company's system environment.\nParticipated in technical conference calls and the assignments following the call. "
		},
		{
			employer: "Northeastern Illinois University",
			title: "Java Developer/Researcher",
			location: "Chicago",
			dates: "January 2014 to June 2014",
			description: "Troubleshot and fixed any bug issues while maintaining old modules that were already in production.\nWorked on an airline ticket issuing dialog system project and converted into a generic system that could be used in other industries.\nUtilized Object Oriented Analysis and UML methodology to develop case diagrams, object diagrams, class diagrams, activity diagrams, and sequence diagrams to represent the detail design phase.\nConducted code merging and code review to release branches using GitHub."
		}
	],
	display: function(){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitleEmployer = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			formattedEmployerTitle = formattedEmployer + formattedTitleEmployer;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	projects: [
		{
			title: "ATM Project",
			dates: "2014",
			description: "An object oriented automated teller machine (ATM) software system.\nAvailable in GitHub at @malmatar",
			images: "",
			url: "https://github.com/malmatar"
		},
		{
			title: "Computer Science club website",
			dates: "2014",
			description: "The computer science club website is a virtual meeting place for computer science students. The main objective of this website is to enable the students to register for the computer science club, add themselves to the mailing list, express their ideas and concerns to the admin or to the officers, communicate with each other or with the admin, and catch up with the latest events. On the other hand it facilitates admin communications with the students, and manages the students’ memberships and the posting different events. A student can  register to the computer science club through a simple form,  add his/her name to the mailing list, explore different computer science department events, find out about the club, contact one of the admin, and display lists of members and officers with their contact information. An admin can log in through a login link to a page where he manages the students’ memberships, by adding students, deleting, updating their status, and giving them a title. Also he/she can add, delete, and update events. Available in GitHub @malmatar",
			images: ["images/webSite-small.jpg"],
			url: "https://github.com/malmatar"
		}
	],
	display: function(){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDate);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			if(projects.projects[project].images.length>0){
				for(image in projects.projects[project].images){
					var formattedimage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedimage);
				}
			}
		}
	}
}












