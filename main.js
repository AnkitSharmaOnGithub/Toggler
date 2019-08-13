//Pure Js Library By Ankit Sharma
//Warning :- Do not copy until you have authority to do so. (:D

window.addEventListener("DOMContentLoaded", function() {
  //CheckBox Options
  let is_checked = " ";
  let is_disabled = " ";

  //Slider Options
  let slider_position = "absolute";
  let slider_height = "34px";
  let slider_width = "78px";
  let slider_bg = "#ccc";
  let slider_on_bg = "#2196f3";
  let slider_shadow = "0 0 1px #2196f3";
  let slider_border_radius = "0px";
  let cursor = "pointer";

  //Trigger Options
  let trigger_position = "absolute";
  let trigger_height = "24px";
  let trigger_width = "24px";
  let trigger_left = "4px";
  let trigger_bottom = "4px";
  let trigger_margin = "4px";
  let trigger_bg = "#ffffff";
  let trigger_border_radius = "0px";
  let trigger_boxShadow = "0px";
  let trigger_trasition = "translateX(44px)";
  let transitionDuration = "1s";
  let trigger_deactivated_transition = "translateX(0px)";
  let trigger_on_text = "";
  let trigger_off_text = "";

  var switches = {};
  var toggles = {
    "toggle-default": {},
    "toggle-small": {
      slider_width: "60px",
      slider_height: "25px",
      trigger_width: "17px",
      trigger_height: "17px",
      trigger_trasition: "translateX(36px)"
    },
    "checked": {
      is_checked: "checked"
    },
    "rounded": {
      borderRadius: "20px",
      trigger_width: "34px",
      trigger_height: "34px",
      trigger_margin: "0px",
      trigger_boxShadow: "0 1px 3px rgba(0,0,0,.4)"
    },
    "withText": {
      trigger_on_text: "O",
      trigger_off_text: "X",
      borderRadius: "20px",
      trigger_width: "34px",
      trigger_height: "34px",
      trigger_margin: "0px",
      trigger_boxShadow: "0 1px 3px rgba(0,0,0,.4)"
    },
    "colored": {
      slider_color: "#004bf5",
      trigger_color: "#f36c0c"
    },

    "disabled": {
      is_disabled : "disabled",
    },

    // "API": {},

    // destroy: {},
    "remove": {
      remove_status : true,
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
      sliderOptions: {
        position: slider_position,
        cursor: cursor,
        backgroundColor: slider_bg,
        width:
          options.slider_width == undefined
            ? slider_width
            : options.slider_width,
        height:
          options.slider_height == undefined
            ? slider_height
            : options.slider_height,

        borderRadius:
          options.borderRadius == undefined
            ? slider_border_radius
            : options.borderRadius,

        slider_bg:
          options.slider_color == undefined ? slider_bg : options.slider_color
      },

      TriggerOptions: {
        trigger_width:
          options.trigger_width == undefined
            ? trigger_width
            : options.trigger_width,
        trigger_height:
          options.trigger_height == undefined
            ? trigger_height
            : options.trigger_height,
        trigger_boxShadow:
          options.trigger_boxShadow == undefined
            ? trigger_boxShadow
            : options.trigger_boxShadow,
        trigger_trasition:
          options.trigger_trasition == undefined
            ? trigger_trasition
            : options.trigger_trasition,
        transitionDuration: transitionDuration,
        borderRadius:
          options.borderRadius == undefined
            ? trigger_border_radius
            : options.borderRadius,

        boxShadow:
          options.boxShadow == undefined
            ? trigger_boxShadow
            : options.boxShadow,

        trigger_margin:
          options.trigger_margin == undefined
            ? trigger_margin
            : options.trigger_margin,

        trigger_on_text:
          options.trigger_on_text == undefined
            ? trigger_on_text
            : options.trigger_on_text,

        trigger_off_text:
          options.trigger_off_text == undefined
            ? trigger_off_text
            : options.trigger_off_text,

        trigger_bg:
          options.trigger_color == undefined
            ? trigger_bg
            : options.trigger_color
      }

      //Slider
    };
    if(options.is_disabled != undefined)
    {
      el.disabled = options.is_disabled;
    }

    if(options.remove_status == true)
    {
      el.style.opacity = 0;
      el.nextElementSibling.style.opacity = 0;
      el.nextElementSibling.style.opacity = 0;
    }
  
    el.style.opacity = 0;
    
    el.addEventListener("change", function() {
      isChecked(
        this,
        defaultOptions.TriggerOptions,
        defaultOptions.sliderOptions
      );
    });

    setSlider(el, defaultOptions.sliderOptions);
    setTrigger(el, defaultOptions.TriggerOptions);
    if (options.is_checked != undefined) {
      setCheckbox(el, options);
      isChecked(
        el,
        defaultOptions.TriggerOptions,
        defaultOptions.sliderOptions
      );
    }
  };

  //Set CheckBox options
  function setCheckbox(element, Options) {
    is_checked = Options.is_checked == undefined ? " " : "checked";
    element.setAttribute("checked", is_checked);
  }

  //   SetSlider Function
  function setSlider(element, sliderOptions) {
    var slider = element.nextElementSibling.style;
    slider.position = sliderOptions.position;
    slider.cursor = sliderOptions.cursor;
    slider.backgroundColor = sliderOptions.slider_bg;
    slider.width = sliderOptions.width;
    slider.height = sliderOptions.height;
    slider.borderRadius = sliderOptions.borderRadius;
  }

  //SetTrigger Function
  function setTrigger(element, TriggerOptions) {
    var Trigger = element.parentElement.lastElementChild.style;
    Trigger.position = trigger_position;
    Trigger.cursor = cursor;
    Trigger.backgroundColor = TriggerOptions.trigger_bg;
    Trigger.width = TriggerOptions.trigger_width;
    Trigger.height = TriggerOptions.trigger_height;
    Trigger.margin = TriggerOptions.trigger_margin;
    Trigger.borderRadius = TriggerOptions.borderRadius;
    Trigger.boxShadow = TriggerOptions.trigger_boxShadow;
    if (TriggerOptions.trigger_off_text != "") {
      Trigger.textAlign = "center";
      Trigger.lineHeight = "34px";
      element.parentElement.lastElementChild.textContent =
        TriggerOptions.trigger_off_text;
    }
  }

  //SetCheckedProperties Function

  function isChecked(element, options, SliderOptions) {
    var Trigger = element.parentElement.lastElementChild.style;

    if (element.checked) {
      element.nextElementSibling.style.boxShadow = slider_shadow;
      element.nextElementSibling.style.backgroundColor = slider_on_bg;
      Trigger.transform = options.trigger_trasition;
      Trigger.transitionDuration = transitionDuration;

      if (options.trigger_on_text != "") {
        Trigger.textAlign = "center";
        Trigger.lineHeight = "34px";
        element.parentElement.lastElementChild.textContent =
          options.trigger_on_text;
      }
    } else {
      // if (this != document.activeElement) {
      element.nextElementSibling.style.boxShadow = null;

      element.nextElementSibling.style.backgroundColor =
        SliderOptions.slider_bg;
      Trigger.transform = trigger_deactivated_transition;

      if (options.trigger_off_text != "") {
        Trigger.textAlign = "center";
        Trigger.lineHeight = "34px";
        element.parentElement.lastElementChild.textContent =
          options.trigger_off_text;
      }
      // }
    }
  }

  Object.keys(toggles).forEach(function(key) {
    switches[key] = new Switch(document.querySelector("." + key), toggles[key]);
  });

  //Trigger Actions on button Click

  //   function allocateEventListener(element, event, fn){
  //   document.getElementById(element).addEventListener(event,fn);
  //   } 


  // allocateEventListener('removeBtn','click',function(){
  //   new Switch(document.querySelector(".remove"), {"remove_status" : true,});
  // });
  
});
