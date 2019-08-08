//Pure Js Library By Ankit Sharma
//Warning :- Do not copy until you have authority to do so. (:D

window.addEventListener('DOMContentLoaded', function() {

//Slider Options
let slider_position  = "absolute";
let slider_height = "34px";
let slider_width = "78px";
let slider_bg = "#ccc";
let slider_on_bg = "#2196f3";
let slider_shadow = "0 0 1px #2196f3";
let cursor = "pointer";

//Trigger Options
let trigger_position = "absolute";
let trigger_height = "24px";
let trigger_width = "24px";
let trigger_left = "4px";
let trigger_bottom = "4px";
let trigger_margin = "4px";
let trigger_bg = "#ffffff";
let trigger_trasition = "translateX(44px)";
let transitionDuration = "1s";
let trigger_deactivated_transition = "translateX(0px)";

var switches = {};
var toggles = {
  "toggle-default": {
   
  },
  "toggle-small":{
    slider_width : "60px",
    slider_height : "25px",
    trigger_width : "17px",
    trigger_height : "17px",
    trigger_trasition : "translateX(36px)",
  }
};

var Switch = function(el, options) {
  if (el !== undefined || options !== undefined) {
    this._init(el, options);
  }
};

Switch.prototype._init = function(el, options) {
  //Constant Variables

  let defaultOptions = {

    sliderOptions : {
        position : slider_position,
        cursor : cursor,
        backgroundColor : slider_bg,
        width :  options.slider_width == undefined ? slider_width :options.slider_width,
        height : options.slider_height == undefined ? slider_height :options.slider_height,
    },

    TriggerOptions : {
        trigger_width : options.trigger_width == undefined ? trigger_width :options.trigger_width,
        trigger_height : options.trigger_height == undefined ? trigger_height :options.trigger_height,
        boxShadow : slider_shadow,
        trigger_trasition : options.trigger_trasition == undefined ? trigger_trasition :options.trigger_trasition,
        transitionDuration : transitionDuration,
    },

    //Slider
    

  };
  console.log(defaultOptions.sliderOptions.width);
  el.style.opacity = 0;

  el.addEventListener('change', function(){
      isChecked(this,defaultOptions.TriggerOptions);
  });

  setSlider(el,defaultOptions.sliderOptions);
  setTrigger(el,defaultOptions.TriggerOptions);
};
  


//   SetSlider Function
  function setSlider(element, sliderOptions){
    var slider = element.nextElementSibling.style;
    slider.position = sliderOptions.position;
    slider.cursor = sliderOptions.cursor;
    slider.backgroundColor = slider_bg;
    slider.width = sliderOptions.width;
    slider.height = sliderOptions.height;
  }

  //SetTrigger Function
  function setTrigger(element, TriggerOptions){
    var Trigger = element.parentElement.lastElementChild.style;
    Trigger.position = trigger_position;
    Trigger.cursor = cursor;
    Trigger.backgroundColor = trigger_bg;
    Trigger.width = TriggerOptions.trigger_width;
    Trigger.height = TriggerOptions.trigger_height;
    Trigger.margin = trigger_margin;
  }

  //SetCheckedProperties Function

  function isChecked(element,options){
    console.log(options);
    var Trigger = element.parentElement.lastElementChild.style;

    if(element.checked){
        if(element == document.activeElement){
            element.nextElementSibling.style.boxShadow  = slider_shadow;
            element.nextElementSibling.style.backgroundColor = slider_on_bg;
            Trigger.transform = options.trigger_trasition;
            Trigger.transitionDuration = transitionDuration;
        }
    }
    else{
        if(this != document.activeElement){
            element.nextElementSibling.style.boxShadow  = " ";
          
          element.nextElementSibling.style.backgroundColor = slider_bg;
          Trigger.transform = trigger_deactivated_transition;
        }
    }
  }

Object.keys(toggles).forEach(function(key) {
  switches[key] = new Switch(document.querySelector("." + key), toggles[key]);
});


});
