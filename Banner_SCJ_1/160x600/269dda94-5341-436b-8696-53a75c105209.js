console.log('text_shrink.js');

function textShrink(element, minFontSize) {
    while(isOverflown(element)) {
        var currentFontSize = getFontSize(element);
        var newFont = parseInt(currentFontSize);

        if(minFontSize) {
          if(newFont > minFontSize) {
            newFont -= 0.1;
            element.style.fontSize = newFont + "px";
          }
          else {
            element.style.fontSize = minFontSize + "px";
            break;
          }
        }
        else {
          newFont -= 0.1;
          element.style.fontSize = newFont + "px";
        }

    }
}

function isOverflown(element) {
    return (element.scrollHeight > element.clientHeight) || (element.scrollWidth > element.clientWidth);
}

function getFontSize(oElm) {
  var strValue = "";

  if(window.getComputedStyle) {
    strValue = getComputedStyle(oElm).getPropertyValue('font-size');
  }
  //IE
  else if (oElm.currentStyle) {
    try {
        strValue = oElm.currentStyle['font-size'];
    } catch (e) {}
  }
    return strValue;
}


function getCustomProperty(oElm, property) {
  var strValue = "";

  if(window.getComputedStyle) {
    strValue = getComputedStyle(oElm).getPropertyValue(property);
  }
  //IE
  else if (oElm.currentStyle) {
    try {
        strValue = oElm.currentStyle[property];
    } catch (e) {}
  }
    return strValue;
}
