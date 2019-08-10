//Pure Js Library By Ankit Sharma
//Warning :- Do not copy until you have authority to do so. (:D

window.addEventListener("DOMContentLoaded", function() {
  //CheckBox Options
  let is_checked = " ";

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
    checked: {
      is_checked: "checked",
    },
    rounded : {
      borderRadius : '20px',
      trigger_width: "34px",
      trigger_height: "34px",
      trigger_margin : "0px",
      trigger_boxShadow: '0 1px 3px rgba(0,0,0,.4)',
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

        borderRadius : options.borderRadius == undefined
        ? slider_border_radius
        : options.borderRadius,
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
        trigger_boxShadow: options.trigger_boxShadow == undefined
        ? trigger_boxShadow
        : options.trigger_boxShadow,
        trigger_trasition:
          options.trigger_trasition == undefined
            ? trigger_trasition
            : options.trigger_trasition,
        transitionDuration: transitionDuration,
        borderRadius : options.borderRadius == undefined
        ? trigger_border_radius
        : options.borderRadius,

        boxShadow : options.boxShadow == undefined
        ? trigger_boxShadow
        : options.boxShadow,

        trigger_margin : options.trigger_margin == undefined
        ? trigger_margin
        : options.trigger_margin,
      }

      //Slider
    };

    el.style.opacity = 0;

  
    el.addEventListener("change", function() {
      isChecked(this, defaultOptions.TriggerOptions);
    });

    
    setSlider(el, defaultOptions.sliderOptions);
    setTrigger(el, defaultOptions.TriggerOptions);
    if (options.is_checked != undefined) {
      setCheckbox(el, options);
      isChecked(el, defaultOptions.TriggerOptions);
    }
  };

  //Set CheckBox options
  function setCheckbox(element, Options) {
    console.log(Options);
    is_checked = Options.is_checked == undefined ? " " : "checked";
    element.setAttribute("checked", is_checked);
  }

  //   SetSlider Function
  function setSlider(element, sliderOptions) {
    var slider = element.nextElementSibling.style;
    slider.position = sliderOptions.position;
    slider.cursor = sliderOptions.cursor;
    slider.backgroundColor = slider_bg;
    slider.width = sliderOptions.width;
    slider.height = sliderOptions.height;
    slider.borderRadius = sliderOptions.borderRadius;
  }

  //SetTrigger Function
  function setTrigger(element, TriggerOptions) {
    console.log(TriggerOptions.trigger_boxShadow);
    var Trigger = element.parentElement.lastElementChild.style;
    Trigger.position = trigger_position;
    Trigger.cursor = cursor;
    Trigger.backgroundColor = trigger_bg;
    Trigger.width = TriggerOptions.trigger_width;
    Trigger.height = TriggerOptions.trigger_height;
    Trigger.margin = TriggerOptions.trigger_margin;
    Trigger.borderRadius = TriggerOptions.borderRadius;
    Trigger.boxShadow = TriggerOptions.trigger_boxShadow;
  }

  //SetCheckedProperties Function

  function isChecked(element, options) {
    console.log(options);
    var Trigger = element.parentElement.lastElementChild.style;

    if (element.checked) {
      // if (element == document.activeElement) {
        element.nextElementSibling.style.boxShadow = slider_shadow;
        element.nextElementSibling.style.backgroundColor = slider_on_bg;
        Trigger.transform = options.trigger_trasition;
        Trigger.transitionDuration = transitionDuration;
      // }
    } else {
      // if (this != document.activeElement) {
        element.nextElementSibling.style.boxShadow = null;

        element.nextElementSibling.style.backgroundColor = slider_bg;
        Trigger.transform = trigger_deactivated_transition;
      // }
    }
  }
  
  Object.keys(toggles).forEach(function(key) {
    switches[key] = new Switch(document.querySelector("." + key), toggles[key]);
  });
});
