//This is the title for your window tab, and your Radar
var client = new XMLHttpRequest();
client.open("GET", "http://127.0.0.1:4001/api/radars/findOne", false);
client.setRequestHeader("Content-Type", "application/json");
client.send();

document.title = JSON.parse(client.responseText).title;

//This is the concentic circles that want on your radar
client.open("GET", "http://127.0.0.1:4001/api/arcs", false);
client.setRequestHeader("Content-Type", "application/json");
client.send();
var radar_arcs = JSON.parse(client.responseText);
console.log(radar_arcs);

//This is your raw data
client.open("GET", "http://127.0.0.1:4001/api/radar-data", false);
client.setRequestHeader("Content-Type", "application/json");
client.send();
var radar_data = JSON.parse(client.responseText);

console.log(radar_data);

var h = 1000;
var w = 1200;


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

