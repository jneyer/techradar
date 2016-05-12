//This is the title for your window tab, and your Radar
document.title = "WotifGroup's Technology Radar (December 2014)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize:
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [
            {
                "name":"Git flow / Pull Requests",
                "pc": {
                    "r":50,
                    "t":133
                },
                "movement":"c"
            },
            {
                "name":"Isolated dev envs",
                "pc": {
                    "r":150,
                    "t":125
                },
                "movement":"c"
            },
            {
                "name":"Edge Services",
                "pc": {
                    "r":250,
                    "t":160
                },
                "movement":"c"
            },
        {"name":"Clean Code","pc":{"r":150,"t":120},"movement":"c"},
        {"name":"Code Reviews","pc":{"r":50,"t":110},"movement":"c"},
        {"name":"Dependency Injection","pc":{"r":150,"t":130},"movement":"c"},
        {"name":"Responsive actor style","pc":{"r":250,"t":135},"movement":"c"},
        {"name":"Governance","pc":{"r":250,"t":140},"movement":"c"},
        {
            "name":"Data management",
            "pc": {
                "r":250,
                "t":145
            },
            "movement":"c"
        }

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [
            { name: 'Docker', pc: { r: 250, t: 19 }, movement: 'c' },
            { name: 'Swagger',    pc: { r: 150, t: 82 },    movement: 'c' },
            { name: 'PowerMock',    pc: { r: 150, t: 46 },    movement: 'c' },
            { name: 'Mockito',    pc: { r: 150, t: 84 },    movement: 'c' },
            { name: 'Git',    pc: { r: 150, t: 73 },    movement: 'c' },
            { name: 'Charles Proxy',    pc: { r: 350, t: 48 },    movement: 'c' },
            { name: 'haproxy',    pc: { r: 350, t: 46 },    movement: 'c' },
            { name: 'Hibernate',    pc: { r: 350, t: 56 },    movement: 'c' },
            { name: 'mongoDB',    pc: { r: 150, t: 5 },    movement: 'c' },
            { name: 'Subversion',    pc: { r: 150, t: 18 },    movement: 'c' },
            { name: 'SOAPUI',    pc: { r: 250, t: 25 },    movement: 'c' },
            { name: 'curl',    pc: { r: 250, t: 30 },    movement: 'c' },
            { name: 'Apache',    pc: { r: 350, t: 35 },    movement: 'c' },
            { name: 'Tomcat',    pc: { r: 350, t: 40 },    movement: 'c' },
            { name: 'NGINX',    pc: { r: 350, t: 45 },    movement: 'c' },
            { name: 'Jenkins',    pc: { r: 350, t: 50 },    movement: 'c' },
            { name: 'JBoss',    pc: { r: 350, t: 55 },    movement: 'c' },
            { name: 'Jetty',    pc: { r: 350, t: 60 },    movement: 'c' },
            { name: 'Kafka',    pc: { r: 20, t: 60 },    movement: 'c'},
            { name: 'Slack',    pc: { r: 150, t: 55 },    movement: 'c' },
            { name: 'Crucible',    pc: { r: 150, t: 65 },    movement: 'c' },
            { name: 'Strongloop',    pc: { r: 250, t: 70 },    movement: 'c' },
            { name: 'Splunk',    pc: { r: 250, t: 75 },    movement: 'c' },
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"RHEL","pc":{"r":170,"t":215},"movement":"c"},
            {"name":"Azure","pc":{"r":290,"t":265},"movement":"c"},
            {"name":"AWS","pc":{"r":90,"t":250},"movement":"c"},
            {"name":"Java EE","pc":{"r":390,"t":245},"movement":"c"},
            {"name":"MSSQL Server","pc":{"r":390,"t":190},"movement":"c"},
            {"name":"MySQL","pc":{"r":390,"t":195},"movement":"c"},
            {"name":"NoSQL","pc":{"r":390,"t":200},"movement":"c"},
            {"name":"Micro-SQL","pc":{"r":390,"t":205},"movement":"c"},
        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [
            {"name":"Jersey","pc":{"r":60,"t":310},"movement":"c"},
            {"name":"Java", "pc":{"r":130,"t":355},"movement":"c"},
            {"name":"Groovy", "pc":{"r":190,"t":280},"movement":"c"},
            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala", "pc":{"r":290,"t":320},"movement":"c"},
            {"name":"Spring","pc":{"r":360,"t":330},"movement":"c"},
            {"name":"Node.js","pc":{"r":360,"t":335},"movement":"c"},
            {"name":"Ruby","pc":{"r":360,"t":340},"movement":"c"},
            {"name":"Grails","pc":{"r":360,"t":345},"movement":"c"}
        ]
    }
];
