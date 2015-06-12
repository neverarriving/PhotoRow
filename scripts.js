!function(t,e,i,n){"use strict";function o(e,i){this.element=e,this.options=t.extend({},s,i),this._defaults=s,this._name=r,this.init()}var r="photoRow",s={width:"100%",layout:!1,zoomJs:!0,onInit:function(){},onComplete:function(){}};o.prototype={init:function(){this.options.onInit(),this._setupRows(this.element,this.options),this._setupColumns(this.element,this.options)},_callback:function(t){this.options.onComplete(t)},_setupRows:function(e,i){if(i.layout)this.layout=i.layout;else if(t(e).attr("data-layout"))this.layout=t(e).attr("data-layout");else{for(var n="",o=1,r=0;r<t(e).find("img").length;r++)n+=o.toString();this.layout=n}this.rows=this.layout.split("");for(var s in this.rows)this.rows[s]=parseInt(this.rows[s],10);var a=t(e).find("img"),h=0;t.each(this.rows,function(t,e){var i=h,n=h+e;a.slice(i,n).wrapAll('<div class="photoset-row cols-'+e+'"></div>'),h=n})},_setupColumns:function(i,n){var o=this,r=function(n){function o(){var e=t(i).width().toString();e!==t(i).attr("data-width")&&(r.each(function(){for(var e=t(this).find(".photo"),i=t(this).width(),n=e.map(function(){return t(this).data("aspect-ratio")}).get(),o=0,r=Math.min.apply(Math,n),s=0;s<e.length;s++)o+=n[s]/r;e.each(function(e){var s=i/o;t(this).height(Math.floor(s/r)).width(Math.floor(s/r*n[e]))})}),t(i).attr("data-width",e))}var r=t(i).find(".photoset-row"),s=t(i).find("img");s.each(function(){t(this).wrapAll('<div class="photo" />')}),n?s.each(function(){t(this).attr("data-action","zoom").parent().attr("data-original-dimensions",t(this)[0].naturalWidth+"x"+t(this)[0].naturalHeight).attr("data-aspect-ratio",t(this)[0].naturalWidth/t(this)[0].naturalHeight)}):a&&(console.log("has the dimensions"),s.each(function(){t(this).attr("data-action","zoom").parent().attr("data-aspect-ratio",t(this).attr("width")/t(this).attr("height"))})),o(),t(e).on("resize",function(){o()})},s=!0,a=!0;t(i).find("img").each(function(){a&=!!t(this).attr("height")&!!t(this).attr("width")}),s=!a,s?t(i).imagesLoaded(function(){r(s),o._callback(i)}):(r(s),o._callback(i))}},t.fn[r]=function(e){return this.each(function(){t.data(this,"plugin_"+r)||t.data(this,"plugin_"+r,new o(this,e))})}}(jQuery,window,document),function(){function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if("object"==typeof t){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;t.length>e;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;t.length>e;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if("object"===i)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:this.EventEmitter=t}.call(this),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):t.eventie=r}(this),function(t,e){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t){return"[object Array]"===f.call(t)}function r(t){var e=[];if(o(t))e=t;else if("number"==typeof t.length)for(var i=0,n=t.length;n>i;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),c&&(this.jqDeferred=new c.Deferred);var o=this;setTimeout(function(){o.check()})}function a(t){this.img=t}function h(t){this.src=t,d[t]=this}var c=t.jQuery,u=t.console,l=void 0!==u,f=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0,e=this.elements.length;e>t;t++){var i=this.elements[t];"IMG"===i.nodeName&&this.addImage(i);var n=i.nodeType;if(n&&(1===n||9===n||11===n))for(var o=i.querySelectorAll("img"),r=0,s=o.length;s>r;r++){var a=o[r];this.addImage(a)}}},s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.check=function(){function t(t,o){return e.options.debug&&l&&u.log("confirm",t,o),e.progress(t),i++,i===n&&e.complete(),!0}var e=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var o=0;n>o;o++){var r=this.images[o];r.on("confirm",t),r.check()}},s.prototype.progress=function(t){this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded;var e=this;setTimeout(function(){e.emit("progress",e,t),e.jqDeferred&&e.jqDeferred.notify&&e.jqDeferred.notify(e,t)})},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var e=this;setTimeout(function(){if(e.emit(t,e),e.emit("always",e),e.jqDeferred){var i=e.hasAnyBroken?"reject":"resolve";e.jqDeferred[i](e)}})},c&&(c.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(c(this))}),a.prototype=new e,a.prototype.check=function(){var t=d[this.img.src]||new h(this.img.src);if(t.isConfirmed)return void this.confirm(t.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var e=this;t.on("confirm",function(t,i){return e.confirm(t.isLoaded,i),!0}),t.check()},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("confirm",this,e)};var d={};return h.prototype=new e,h.prototype.check=function(){if(!this.isChecked){var t=new Image;i.bind(t,"load",this),i.bind(t,"error",this),t.src=this.src,this.isChecked=!0}},h.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.prototype.onload=function(t){this.confirm(!0,"onload"),this.unbindProxyEvents(t)},h.prototype.onerror=function(t){this.confirm(!1,"onerror"),this.unbindProxyEvents(t)},h.prototype.confirm=function(t,e){this.isConfirmed=!0,this.isLoaded=t,this.emit("confirm",this,e)},h.prototype.unbindProxyEvents=function(t){i.unbind(t.target,"load",this),i.unbind(t.target,"error",this)},s}),+function(t){"use strict";function e(){this._activeZoom=this._initialScrollPosition=this._initialTouchPosition=this._touchMoveListener=null,this._$document=t(document),this._$window=t(window),this._$body=t(document.body)}function i(e){this._fullHeight=this._fullWidth=this._overlay=this._targetImageWrap=null,this._targetImage=e,this._$body=t(document.body)}e.prototype.listen=function(){this._$body.on("click",'[data-action="zoom"]',t.proxy(this._zoom,this))},e.prototype._zoom=function(e){var n=e.target;!n||"IMG"!=n.tagName||n.width>=window.innerWidth-i.OFFSET||(this._activeZoomClose(!0),this._activeZoom=new i(n),this._activeZoom.zoomImage(),this._$window.on("scroll.zoom",t.proxy(this._scrollHandler,this)),this._$document.on("click.zoom",t.proxy(this._clickHandler,this)),this._$document.on("keyup.zoom",t.proxy(this._keyHandler,this)),this._$document.on("touchstart.zoom",t.proxy(this._touchStart,this)),e.stopPropagation())},e.prototype._activeZoomClose=function(t){this._activeZoom&&(t?this._activeZoom.dispose():this._activeZoom.close(),this._$window.off(".zoom"),this._$document.off(".zoom"),this._activeZoom=null)},e.prototype._scrollHandler=function(t){null===this._initialScrollPosition&&(this._initialScrollPosition=window.scrollY);var e=this._initialScrollPosition-window.scrollY;Math.abs(e)>=40&&this._activeZoomClose()},e.prototype._keyHandler=function(t){27==t.keyCode&&this._activeZoomClose()},e.prototype._clickHandler=function(t){t.stopPropagation(),t.preventDefault(),this._activeZoomClose()},e.prototype._touchStart=function(e){this._initialTouchPosition=e.touches[0].pageY,t(e.target).on("touchmove.zoom",t.proxy(this._touchMove,this))},e.prototype._touchMove=function(e){Math.abs(e.touches[0].pageY-this._initialTouchPosition)>10&&(this._activeZoomClose(),t(e.target).off("touchmove.zoom"))},i.OFFSET=80,i._MAX_WIDTH=2560,i._MAX_HEIGHT=4096,i.prototype.zoomImage=function(){var e=document.createElement("img");e.onload=t.proxy(function(){this._fullHeight=Number(e.height),this._fullWidth=Number(e.width),this._zoomOriginal()},this),e.src=this._targetImage.src},i.prototype._zoomOriginal=function(){this._targetImageWrap=document.createElement("div"),this._targetImageWrap.className="zoom-img-wrap",this._targetImage.parentNode.insertBefore(this._targetImageWrap,this._targetImage),this._targetImageWrap.appendChild(this._targetImage),t(this._targetImage).addClass("zoom-img").attr("data-action","zoom-out"),this._overlay=document.createElement("div"),this._overlay.className="zoom-overlay",document.body.appendChild(this._overlay),this._calculateZoom(),this._triggerAnimation()},i.prototype._calculateZoom=function(){this._targetImage.offsetWidth;var t=this._fullWidth,e=this._fullHeight,n=(window.scrollY,t/this._targetImage.width),o=window.innerHeight-i.OFFSET,r=window.innerWidth-i.OFFSET,s=t/e,a=r/o;this._imgScaleFactor=r>t&&o>e?n:a>s?o/e*n:r/t*n},i.prototype._triggerAnimation=function(){this._targetImage.offsetWidth;var e=t(this._targetImage).offset(),i=window.scrollY,n=i+window.innerHeight/2,o=window.innerWidth/2,r=e.top+this._targetImage.height/2,s=e.left+this._targetImage.width/2;this._translateY=n-r,this._translateX=o-s,t(this._targetImage).css("transform","scale("+this._imgScaleFactor+")"),t(this._targetImageWrap).css("transform","translate("+this._translateX+"px, "+this._translateY+"px) translateZ(0)"),this._$body.addClass("zoom-overlay-open")},i.prototype.close=function(){this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"),t(this._targetImage).css("transform",""),t(this._targetImageWrap).css("transform",""),t(this._targetImage).one(t.support.transition.end,t.proxy(this.dispose,this)).emulateTransitionEnd(300)},i.prototype.dispose=function(){this._targetImageWrap&&this._targetImageWrap.parentNode&&(t(this._targetImage).removeClass("zoom-img").attr("data-action","zoom"),this._targetImageWrap.parentNode.replaceChild(this._targetImage,this._targetImageWrap),this._overlay.parentNode.removeChild(this._overlay),this._$body.removeClass("zoom-overlay-transitioning"))},(new e).listen()}(jQuery);