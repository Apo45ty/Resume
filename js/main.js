const ICON_MIN_WIDTH = 100;

const experienceElements = [
    {
        title:"Software Developer 2 at Wovenware",
        location:"San Juan, Puerto Rico",
        date:"March 2021 - February 26 2024",
        keyDetails:"Worked with Java and Python",
        summary:`<ul>
<li>Developed and secured AWS Lambda(serverless) services with a WAF.</li>
<li>Developed on a Java/Spring/Thrift/Liquidbase/Temporal based microservice projects.</li>
<li>Worked with vagrant and kubernetes to deploy the microservice and its components.</li>
<li>Worked on developing full CI/CD of a new application.</li>
<li>Developed React/Redux components for existing code base.</li>
<li>Tested the whole life cycle of an application from inception to End to End testing.</li>
</ul>
`
    },
    {
        title:"Systems Engineer at Infosys Limited",
        location:"Aguadilla, Puerto Rico",
        date:"December 2018 - March 2021",
        keyDetails:"Worked with Java and Python",
        summary:`<ul>
<li>Utilized Microsoft SQL Manager Studio (Transact SQL) to validate tests and data.</li>
<li>Work with the Agile methodology “Scrum”.</li>
<li>Designed automated test cases in Infosys' proprietary C# framework.</li>
</ul>
`
    },
    {
        title:"Software Developer Engineer in Test(SDET) at Revature",
        location:"Reston, Virginia",
        date:"April 2018 - August 2018",
        keyDetails:"Worked with Java and Python",
        summary:`<ul>
<li>Was trained in Testing frameworks such as Selenium, Cucumber and Jasmine.</li>
<li>Designed and implemented a project with Spring boot backend and Angular 2 front-end, then I worked with AWS to host my applications.</li>
<li>Helped design and implement a group project written in a Java backend that integrated Selenium with Spring boot frameworks. </li>
</ul>
`
    },
    {
        title:"Java Programming Teacher and Mentor at Croem",
        location:"Mayagüez, Puerto Rico",
        date:"January 2014 - May 2014",
        keyDetails:"Worked with Java and Python",
        summary:`<ul>
<li>Served as teacher for the Java Programming Language course curriculum, sponsored by AGMUS.</li>
<li>Mentored students on the final research presentations at Croem.</li>
</ul>
`
    },
    {
        title:"Teacher’s Aid for Advanced Programming at University of Puerto Rico RUM",
        location:"Mayagüez, Puerto Rico",
        date:"January 2014 - May 2014",
        keyDetails:"Worked with Java and Python",
        summary:`<ul>
<li>Instruction of SDLC, QA code review and software architecture design.</li>
<li>Course material and laboratories were taught in the Java programming language.</li>
<li>Implementation of practical (real life scenarios) laboratory exercises for students, and staff.</li>
<li>Served as a mentor for students taking the course.</li>
</ul>
`
    },
];

const educationAndCert = [
    
    {
        title:"Masters of Engineering in Computer Engineering (M.S.Cp.E)",
        location:"Polytechnic University of Puerto Rico, San Juan Campus",
        date:"November 2020 - Expected Graduation date of : March 2025",
        keyDetails:"GPA: 3.8/4.0",
    },
    {
        title:"Bachelor of Science in Computer Engineering",
        location:"University of Puerto Rico, Mayagüez Campus",
        date:"Graduated in June 2018",
        keyDetails:"Mayor GPA: 3.02/4.0",
    },
    {
        title:"Oracle Certified Associate, Java SE 8 Programmer",
        location:"San Juan, Puerto Rico",
        date:"October 2022",
    },
];
const projects = [
    {
        title:"MENTORS CONNECT",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>Mentors Connect</h4>
            <p>A UI for an social network where mentors and mentees can connect.</p>
            <div  ><img style="width:100%;" src="img/screenshot.png" alt="img"></div>
            <a href="https://github.com/Apo45ty/MentorPage" class="btn-get-started scrollto">View on github</a>
          </div>
`
    },
    {
        title:"Barrel Clicker",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4> Barrel Clicker</h4>
            <p>A simple demo of Cloudonce integration with Unity3D</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="img/screen/Capture.PNG" alt="img"></div>
            <a href="https://play.google.com/store/apps/details?id=games.apolion.BarrelClicker&fbclid=IwAR1i9xwOMox0Syxko4y91Lr_ayTK6d4fKNhaXMWPIqr-i4mnSiL5Ow-Qv-4" class="btn-get-started scrollto">Download on the Google Play Store</a>
          </div>
`
    },
    {
        title:"YetAnotherDoomClone",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4> YetAnotherDoomClone</h4>
            <p> This is another title we are currently working on </p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="img/screen/YADC.PNG" alt="img"></div>
            <a href="./YetAnotherDoomClone/index.html" class="btn-get-started scrollto">Navigate to its own devlog page.</a>
          </div>
`
    },
    {
        title:"Design A Room",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4> Design A Room</h4>
            <p> This game was designed for a gamejam mini.</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="https://img.itch.zone/aW1nLzYxOTkzNTIucG5n/347x500/wydGWa.png" alt="img"></div>
            <a href="https://apo45ty.itch.io/design-a-room" class="btn-get-started scrollto">Download from Itch.io</a>
          </div>
`
    },
    {
        title:"RocketSoccer",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>RocketSoccer</h4>
            <p> This was a game designed for the 2021 Gerne Mistmatch game jam.</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="https://img.itch.zone/aW1nLzYwNjE1NjcucG5n/347x500/6l82hL.png" alt="img"></div>
            <a href="https://apo45ty.itch.io/rocketsoccer" class="btn-get-started scrollto">Download from Itch.io</a>
          </div>
`
    },
    {
        title:"GambelersAdventure",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4> GambelersAdventure</h4>
            <p> This is another game made for a gamejam mini.</p>
            <iframe style="width:100%;" src="https://www.youtube.com/embed/cpvokhRDc3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
              <a href="https://apo45ty.itch.io/gambelersadventure" class="btn-get-started scrollto">Download from Itch.io</a>
          </div>
`
    },
    {
        title:"Parkour Simulator",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>Parkour Simulator</h4>
            <p> In this game you attempted to make it through the only level and not fall.</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="https://img.itch.zone/aW1nLzY2OTA5NDMucG5n/original/vKju7G.png" alt="img"></div>
            <a href="https://apo45ty.itch.io/parkour-simulator" class="btn-get-started scrollto">Download from Itch.io</a>
          </div>
`
    },
    {
        title:"Surface Swiper",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4> Surface Swiper</h4>
            <p> This was a personal project that I developed in my free time.</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="https://play-lh.googleusercontent.com/jX5Qcg7BseTFO3KPY2teimZ9Q98ze5Hwn6n0nsnPDW0ttCE_OlB6CpebxZaUmEoZBA=w720-h310" alt="img"></div>
            <a href="https://play.google.com/store/apps/details?id=com.games.apolion.DragWorld" class="btn-get-started scrollto">Download on the Google Play Store</a>
          </div>
`
    },
    {
        title:"My First LibGDX project",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>My First LibGDX project</h4>
            <p> An exploratory project trying to learn LibGDX</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="./img/Libgdxproject.png" alt="img"></div>
            <a href="https://github.com/Apo45ty/MyFirstLibGDXGame" class="btn-get-started scrollto">View Source Code in github</a>
          </div>
`
    },
    {
        title:"My First GoDot project",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>My First GoDot project</h4>
            <p> An exploratory project trying to learn Godot</p>
            <a href="https://github.com/Apo45ty/GodotGame" class="btn-get-started scrollto">View Source Code in github</a>
          </div>
`
    },
    {
        title:"My First Swift Game project : Kaboom",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>My First Swift Game project : Kaboom</h4>
            <p> An exploratory project trying to learn SpriteKit and the IOS ecosystem for development</p>
            <a href="https://github.com/Apo45ty/Kaboom" class="btn-get-started scrollto">View Source Code in github</a>
          </div>
`
    },
    {
        title:"My Second Swift Game project : Zelda Clone",
        summary:`
        <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>My Second Swift Game project : Zelda Clone (incomplete)</h4>
            <p> An exploratory project trying to learn SpriteKit and the IOS ecosystem for development</p>
            <a href="https://github.com/Apo45ty/ZeldaClone" class="btn-get-started scrollto">View Source Code in github</a>
          </div>
`
    },
    {
        title:"BlobyDays",
        summary:`
       <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>BlobyDays</h4>
            <p> An exploratory project trying to learn godot engine and how to develop a platformer for it</p>
            <div ><img style="width:100%;" class="col-md-6 col-lg-6" src="./img/ItpcFh.png" alt="img"></div>
            <a href="https://apo45ty.itch.io/blobydays" class="btn-get-started scrollto">Download from Itch.io</a><br/>
            <a href="./bloobydays/GoDotGameEngineCombine.offline.html" class="btn-get-started scrollto">Play</a>
          </div>
`
    },
    {
        title:"Kill The Wizard",
        summary:`
       <div class="feature-block">
            <!-- <img src="img/svg/paint-palette.svg" alt="img" class="img-fluid"> -->
            <h4> Kill The Wizard</h4>
            <p> <span>Kill the Wizard </span>which is a is an asymmetric multiplayer game with MOBA, Looter shooter and COD Zombies gameplay elements</p>
			      <p><span>Story:</span></p>
            <ul class="list-unstyled">
              <li><i class="fa fa-angle-right"></i>The wizard was part of the hunters. The best some say. But he discovered an ancient artifact that turned him into a powerful power hungry bad guy</li>
              <li><i class="fa fa-angle-right"></i>The hunters belong to the Human anti magic alliance: their sole purpose is to find and collect all of the magical artifacts in the Galaxy</li>
            </ul>
          </div>
`
    },
    {
        title:"Apocalypse Simulator",
        summary:`
       <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4> Apocalypse Simulator</h4>
            <iframe style="width:100%;" src="https://www.youtube.com/embed/evgoYM4ZEXA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/><a href="./ApocalypseSimulator/index.html" class="btn-get-started scrollto">Navigate to its own devlog page.</a>
          </div>
`
    },
    {
        title:"Games made during my freshman year",
        summary:`
       <div class="feature-block">
            <!-- <img src="img/svg/vector.svg" alt="img" class="img-fluid"> -->
            <h4>Games made during my freshman year</h4>
            <img style="width:100%;" class="col-md-6 col-lg-6" src="https://i.imgur.com/cqmsF6e.png" alt="img">
            <br/><a href="https://github.com/Apo45ty/C-Games" class="btn-get-started scrollto">View Games</a>
          </div>
`
    },
];
const skills = [
    {
        title:"Software Skills",
        keyDetails:"Experience with the below software",
        summary:`Software: Visual Studio Code, Eclipse, Bash/Shell, MS Office(Word,PowerPoint), Git, Unity, Blender, Jira, Godot, Vagrant,AndroidStudio`
    },
    {
        title:"Frameworks",
        keyDetails:"Experience with the below framework",
        summary:`JUnit(10 years), LibGDX(3+ year), Moquito(3+ years), Spring(3 years), Hibernate(3 years), Angular 2(2 years), Java EE(2 years), Temporal (1 year),Thrift(1 year), ASP.NET(<1 year), React Native(<2 year), Allegro(1year), JQuery (1 year), AWS CDK(1 year)`
    },
    {
        title:"Programming Languages",
        keyDetails:"Experience with the below programming languages",
        summary:`HTML(10+ years), Java(10+ years), Javascript(5 years), SQL(5 years), Python(<3 year),  C#(1 year), C(<1 year), C++(<1 year), CSS(1 year), TSQL(1 year), PGSQL(1 year), PLSQL(<1 year), Groovy(<1 year), Swift(<1 year), Octave(<1 year), GDScript(<1y), Rust(<1 year)`
    },
    {
        title:"Spoken Languages",
        keyDetails:"Bilingual (Spanish / English)",
    },
    {
        title:"Interest",
        summary:`Deep Learning,Game Jams, Game Development, Competitive Programming, Simulations,Temporal, Kali Linux`
    },
];

window.onload = function() {
    console.log('Page has fully loaded');

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;

    // Get the stylesheet
    const stylesheet = document.styleSheets[0];
    for (let i = 0; i < stylesheet.cssRules.length; i++) {
        if (stylesheet.cssRules[i].selectorText === '.innerComponent') {
            let innerComponentMaxHeight = windowHeight * 0.333;
            if (innerComponentMaxHeight<=100)
                innerComponentMaxHeight = '100px'
            else
                innerComponentMaxHeight=""+innerComponentMaxHeight+"px"

            stylesheet.cssRules[i].style.maxHeight = innerComponentMaxHeight

            // let innerComponentMaxWidth = windowWidth * 0.45;
            // if (innerComponentMaxWidth<=100)
            //     innerComponentMaxWidth = '100px'
            // else
            //     innerComponentMaxWidtht=""+innerComponentMaxWidth+"px"

            // stylesheet.cssRules[i].style.maxWidth = innerComponentMaxHeight
        }
    }
    //Setup icons for experience quadrant
    GenerateIcons(windowWidth, "Experience", experienceElements, ICON_MIN_WIDTH);
    GenerateIcons(windowWidth, "Education and Certifications", educationAndCert, ICON_MIN_WIDTH)
    GenerateIcons(windowWidth, "Projects", projects, ICON_MIN_WIDTH)
    GenerateIcons(windowWidth, "Skills", skills, ICON_MIN_WIDTH)

    //Add animation to quadrants
    document.querySelectorAll(".componentContainer").forEach(function(item, index) {
        item.addEventListener('mouseenter', function() {
            item.classList.remove('componentContainerRemoveAnim');
            item.classList.add("hoveredComponent");
        })
        item.addEventListener('mouseleave', function() {
            item.classList.add('componentContainerRemoveAnim');
            item.classList.remove("hoveredComponent");
        })
    });

    
};

function GenerateIcons(windowWidth, DOMID, elements, iconWidth) {
    let html = '';
    let numberOfColumns = Math.floor((windowWidth * 0.45) /iconWidth);
    html = GenerateHTML(numberOfColumns,elements);
    const expDOMElem = document.getElementById(DOMID);
    expDOMElem.innerHTML = html;
    const hoverBox = expDOMElem.querySelectorAll('.iconWithData');

    hoverBox.forEach(function(item, index) {
        const newChildElement = document.createElement('div');
        newChildElement.style.zIndex = 1;
        newChildElement.style.borderRadius = "20px";
        newChildElement.style.backgroundColor = "red"
        item.addEventListener('mouseenter', function() {

            // Get the size of the element
            const itemRect = item.getBoundingClientRect();
            const itemWidth = itemRect.width;
            const itemHeight = itemRect.height;

            let child = item.querySelector('.iconWithDataChild');
            child.classList.remove('hoveredLeave');
            // child.innerHTML="<p>Click Me!</p>";
            console.log("Entering for "+item)
            // newChildElement.style.marginTop = itemHeight+"px";
            newChildElement.innerHTML = "<div style='border-radius: 20px;display:block;height:"+itemHeight+"px"+"'></div><p style='text-align:center'>Click Me!</p>"
            child.appendChild(newChildElement);
            item.querySelector('.iconWithDataDescription').style.zIndex = 10
            item.querySelector('.iconWithDataDescription').style.maxHeight = itemHeight
            // item.querySelector('.iconWithDataDescription').style.backgroundColor = newChildElement.style.backgroundColor;

        })
        item.addEventListener('mouseleave', function() {
            console.log("Exiting for "+item)
            let child = item.querySelector('.iconWithDataChild');
            child.innerHTML="";
            child.classList.add('hoveredLeave');
            item.classList.add('shrinkBackDown');
            // item.querySelector('.iconWithDataDescription').style.backgroundColor = 'aqua'
            // item.removeChild(newChildElement);
            // item.parentElement.removeChild();
        })
        item.addEventListener('click', function() {
            let modal = document.getElementById("main_modal");
            modal.classList.remove('modalClose')
            modal.style.display = "block";
            let elel = modal.querySelector("#modal_body");
            if(elements[index].title)
                elel.querySelector("#title").innerHTML=elements[index].title;
            else
                elel.querySelector("#title").innerHTML=""

            if(elements[index].date)
                elel.querySelector("#date").innerHTML="<p>Date:"+elements[index].date+"</p>";
            else
                elel.querySelector("#date").innerHTML=""

            if(elements[index].location)
                elel.querySelector("#location").innerHTML="<p>Location:"+elements[index].location+"</p>";
            else
                elel.querySelector("#location").innerHTML=""

            if(elements[index].keyDetails)
                elel.querySelector("#keyDetails").innerHTML="<p>Key Details:</p><p><span style='display: inline-block; width: 2ch;''>&#9;</span>"+elements[index].keyDetails+"</p>";
            else
                elel.querySelector("#keyDetails").innerHTML=""

            if(elements[index].summary)
                elel.querySelector("#summary").innerHTML="<p>Summary:</p><p><span style='display: inline-block; width: 2ch;''>&#9;</span>"+elements[index].summary+"</p>";
            else
                elel.querySelector("#summary").innerHTML=""
        });

    });
}

function GenerateHTML(numberOfColumns, elements) {
    let html = "<div style='display: flex;flex-direction: row;flex: 1 1 auto;'>";
    let currentColumn = 0;
    for (let i = 0; i <  elements.length; i++) {
        let expElem =  elements[i];
        // console.log(i+","+Math.floor(i / numberOfColumns))
        if (currentColumn < Math.floor(i / numberOfColumns)) {
            currentColumn++;
            if(currentColumn>0)
                html += "</div><div style='display: flex;flex-direction: row;flex: 1 1 auto;justify-content: space-between;'>";
        }
        html += 
        "<div class='iconWithData'>"+
            "<div class='iconWithDataChild'></div>"+
            "<div class='iconWithDataDescription'><p>" + expElem.title + "</p></div>"+
        "</div>";
    }
    html += "</div>";
    return html;
}
