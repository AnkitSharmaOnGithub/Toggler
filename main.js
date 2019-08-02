 //Pure Js Library By Ankit Sharma
 //Warning :- Do not copy until you have authority to do so. (:D
 
 //Declare Constants

 const checkbox_display = "none";
 const toggle_height = 34;
 const toggle_width = 78;
 const slider_bg = "#ccc";
 const cursor = "pointer";
 const before_height = 26;
 const before_width = 26;

 const before_left = 4;
 const before_bottom = 4;
 const before_bg = "white";

 //Fetched all CheckBoxes
 var toggles = document.getElementsByTagName("input");

 //Check if text exists
 if(document.querySelector('input').hasAttribute('text'))
 {
    //Fetch  text from Trigger
    var trigger_text = document.querySelector('input').getAttribute('text');

    //Place text inside Trigger
document.querySelector('.slider1').style.borderRadius = "2.5em";
document.querySelector('.slider1').style.textAlign = "center";
document.querySelector('.slider1').style.color = "#ffffff";
document.querySelector('.slider1').textContent = trigger_text;
 }


 //Check if color exists
 if(document.querySelector('input').hasAttribute('t_color'))
 {
//Fetch Color from Trigger t_color
var trigger_color = document.querySelector('input').getAttribute('t_color');
// console.log(trigger_color);
 
 //Set color of Trigger
document.querySelector('.slider1').style.backgroundColor = trigger_color;
 }

 //Creating Toggels Function

 var makeToggle = {
   create: function(toggle, options) {
     for (x of toggle) {
       console.log(toggle.item(this));
       var el = toggle.item(this);
       el.style.opacity = 0;

       //Toggle Css
       el.parentNode.style.position = "relative";
       el.parentNode.style.height = toggle_height + "px";
       el.parentNode.style.width = toggle_width + "px";

       //Slider Css
       el.nextElementSibling.style.position = "absolute";
       el.nextElementSibling.style.cursor = "pointer";
       el.nextElementSibling.style.backgroundColor = "#ccc";
       el.nextElementSibling.style.width = "78px";
       el.nextElementSibling.style.height = "34px";

       //Slider:Before Css
       document
         .querySelector(el.nodeName)
         .addEventListener("change", function() {
           if (this.checked == true) {
             console.log(el.nextElementSibling);

             //Check if CheckBox and Slider is in Focus
             if(this == document.activeElement){
               el.nextElementSibling.style.boxShadow  = "0 0 1px #2196f3";
               console.log('Tera Bhai kisse Kam Hai! Tere Bhai mein bhi dum Hai.');
             }

             //Change BackGround Colour and Shift the Trigger
             el.nextElementSibling.style.backgroundColor = "#2196f3";
             document.querySelector('.slider1').style.transform = "translateX(44px)";
           } else {

             //Check if CheckBox and Slider are "NOT" in Focus
             if(this != document.activeElement){
               el.nextElementSibling.style.boxShadow  = "";
             }
             el.nextElementSibling.style.backgroundColor = "#cccccc";
             document.querySelector('.slider1').style.transform = "translateX(0px)";
           }
         });

       //Setting Switch Trigger Display

       var trigger = document.querySelector('.slider1').style;
       trigger.position = "absolute";
       trigger.width = "24px";
       trigger.height = "24px";
       trigger.margin = "4px";

     }
   }
 };

 //Passed options and CheckBoxes for creation
 for (x of toggles) {
   var class_name = x.getAttribute("class");

   let options = {
     class_name: class_name,
     display: checkbox_display
   };
   makeToggle.create(toggles, options);
 }