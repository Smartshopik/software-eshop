/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@splidejs/splide/dist/js/splide.cjs.js":
/*!*************************************************************!*\
  !*** ./node_modules/@splidejs/splide/dist/js/splide.cjs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED: CREATED,
  MOUNTED: MOUNTED,
  IDLE: IDLE,
  MOVING: MOVING,
  SCROLLING: SCROLLING,
  DRAGGING: DRAGGING,
  DESTROYED: DESTROYED
};

function empty(array) {
  array.length = 0;
}

function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}

function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}

var nextTick = setTimeout;

var noop = function noop() {};

function raf(func) {
  return requestAnimationFrame(func);
}

function typeOf(type, subject) {
  return typeof subject === type;
}

function isObject(subject) {
  return !isNull(subject) && typeOf("object", subject);
}

var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");

function isNull(subject) {
  return subject === null;
}

function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}

function toArray(value) {
  return isArray(value) ? value : [value];
}

function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}

function includes(array, value) {
  return array.indexOf(value) > -1;
}

function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}

function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function (name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}

function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}

function append(parent, children) {
  forEach(children, parent.appendChild.bind(parent));
}

function before(nodes, ref) {
  forEach(nodes, function (node) {
    var parent = (ref || node).parentNode;

    if (parent) {
      parent.insertBefore(node, ref);
    }
  });
}

function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}

function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function (child) {
    return matches(child, selector);
  }) : children2;
}

function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}

var ownKeys = Object.keys;

function forOwn(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function (key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }

  return object;
}

function assign(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      object[key] = source[key];
    });
  });
  return object;
}

function merge(object) {
  slice(arguments, 1).forEach(function (source) {
    forOwn(source, function (value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject(value)) {
        object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}

function omit(object, keys) {
  forEach(keys || ownKeys(object), function (key) {
    delete object[key];
  });
}

function removeAttribute(elms, attrs) {
  forEach(elms, function (elm) {
    forEach(attrs, function (attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}

function setAttribute(elms, attrs, value) {
  if (isObject(attrs)) {
    forOwn(attrs, function (value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function (elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}

function create(tag, attrs, parent) {
  var elm = document.createElement(tag);

  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }

  parent && append(parent, elm);
  return elm;
}

function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }

  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}

function display(elm, display2) {
  style(elm, "display", display2);
}

function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}

function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}

function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}

function rect(target) {
  return target.getBoundingClientRect();
}

function remove(nodes) {
  forEach(nodes, function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}

function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}

function prevent(e, stopPropagation) {
  e.preventDefault();

  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}

function query(parent, selector) {
  return parent && parent.querySelector(selector);
}

function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}

function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}

function timeOf(e) {
  return e.timeStamp;
}

function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}

var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;

function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}

var min = Math.min,
    max = Math.max,
    floor = Math.floor,
    ceil = Math.ceil,
    abs = Math.abs;

function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}

function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}

function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}

function sign(x) {
  return +(x > 0) - +(x < 0);
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

function format(string, replacements) {
  forEach(replacements, function (replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}

function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}

var ids = {};

function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}

function EventBinder() {
  var listeners = [];

  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function (target, event, namespace) {
      var isEventTarget = ("addEventListener" in target);
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }

  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function (target, event, namespace) {
      listeners = listeners.filter(function (listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }

        return true;
      });
    });
  }

  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;

    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles: bubbles,
        detail: detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }

    target.dispatchEvent(e);
    return e;
  }

  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function (target) {
      target && forEach(events, function (events2) {
        events2.split(" ").forEach(function (eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }

  function destroy() {
    listeners.forEach(function (data) {
      data[4]();
    });
    empty(listeners);
  }

  return {
    bind: bind,
    unbind: unbind,
    dispatch: dispatch,
    destroy: destroy
  };
}

var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";

function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();

  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function (e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }

  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }

  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }

  return assign(binder, {
    bus: bus,
    on: on,
    off: apply(binder.unbind, bus),
    emit: emit
  });
}

function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;

  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);

      if (rate >= 1) {
        onInterval();
        startTime = now();

        if (limit && ++count >= limit) {
          return pause();
        }
      }

      id = raf(update);
    }
  }

  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }

  function pause() {
    paused = true;
  }

  function rewind() {
    startTime = now();
    rate = 0;

    if (onUpdate) {
      onUpdate(rate);
    }
  }

  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }

  function set(time) {
    interval = time;
  }

  function isPaused() {
    return paused;
  }

  return {
    start: start,
    rewind: rewind,
    pause: pause,
    cancel: cancel,
    set: set,
    isPaused: isPaused
  };
}

function State(initialState) {
  var state = initialState;

  function set(value) {
    state = value;
  }

  function is(states) {
    return includes(toArray(states), state);
  }

  return {
    set: set,
    is: is
  };
}

function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function () {
    interval.isPaused() && interval.start();
  };
}

function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];

  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function (n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function (key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }

  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }

  function register(options2, query) {
    var queryList = matchMedia(query);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }

  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function (merged2, entry) {
      return merge(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);

    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }

  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }

  function set(opts, base, notify) {
    merge(options, opts);
    base && merge(Object.getPrototypeOf(options), opts);

    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }

  return {
    setup: setup,
    destroy: destroy,
    reduce: reduce,
    set: set
  };
}

var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var LTR = "ltr";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};

function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function (match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }

  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }

  return {
    resolve: resolve,
    orient: orient
  };
}

var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};

function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }

  var elm = from;

  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }

    elm = elm.parentElement;
  }

  return elm;
}

var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";

function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2),
      on = _EventInterface.on,
      bind = _EventInterface.bind;

  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;

  function setup() {
    collect();
    init();
    update();
  }

  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function (e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function () {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }

  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }

  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }

  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function (className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root: root,
      track: track,
      list: list,
      slides: slides
    });
  }

  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";

    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }

    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }

  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }

  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }

  return assign(elements, {
    setup: setup,
    mount: mount,
    destroy: destroy
  });
}

var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";

function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Components = Splide2.Components,
      root = Splide2.root,
      options = Splide2.options;
  var isNavigation = options.isNavigation,
      updateOnMove = options.updateOnMove,
      i18n = options.i18n,
      pagination = options.pagination,
      slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;

  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }

    listen();
  }

  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);

    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }

  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }

  function initNavigation() {
    var controls = Splide2.splides.map(function (target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }

  function onMove() {
    if (!destroyed) {
      update();
    }
  }

  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }

  function updateActivity() {
    var active = isActive();

    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }

  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);

    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }

    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");

    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }

    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }

    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }

  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }

  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }

  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }

    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }

  function isWithin(from, distance) {
    var diff = abs(from - index);

    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }

    return diff <= distance;
  }

  var self = {
    index: index,
    slideIndex: slideIndex,
    slide: slide,
    container: container,
    isClone: isClone,
    mount: mount,
    destroy: destroy,
    update: update,
    style: style$1,
    isWithin: isWithin
  };
  return self;
}

function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2),
      on = _EventInterface2.on,
      emit = _EventInterface2.emit,
      bind = _EventInterface2.bind;

  var _Components2$Elements = Components2.Elements,
      slides = _Components2$Elements.slides,
      list = _Components2$Elements.list;
  var Slides2 = [];

  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }

  function init() {
    slides.forEach(function (slide, index) {
      register(slide, index, -1);
    });
  }

  function destroy() {
    forEach$1(function (Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }

  function update() {
    forEach$1(function (Slide2) {
      Slide2.update();
    });
  }

  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function (Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }

  function get(excludeClones) {
    return excludeClones ? filter(function (Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }

  function getIn(page) {
    var Controller = Components2.Controller;
    var index = Controller.toIndex(page);
    var max = Controller.hasFocus() ? 1 : options.perPage;
    return filter(function (Slide2) {
      return between(Slide2.index, index, index + max - 1);
    });
  }

  function getAt(index) {
    return filter(index)[0];
  }

  function add(items, index) {
    forEach(items, function (slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }

      if (isHTMLElement(slide)) {
        var ref = slides[index];
        ref ? before(slide, ref) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }

  function remove$1(matcher) {
    remove(filter(matcher).map(function (Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }

  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }

  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function (Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }

  function style(prop, value, useContainer) {
    forEach$1(function (Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }

  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;

    if (length) {
      images.forEach(function (img) {
        bind(img, "load error", function () {
          if (! --length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }

  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }

  function isEnough() {
    return Slides2.length > options.perPage;
  }

  return {
    mount: mount,
    destroy: destroy,
    update: update,
    register: register,
    get: get,
    getIn: getIn,
    getAt: getAt,
    add: add,
    remove: remove$1,
    forEach: forEach$1,
    filter: filter,
    style: style,
    getLength: getLength,
    isEnough: isEnough
  };
}

function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2),
      on = _EventInterface3.on,
      bind = _EventInterface3.bind,
      emit = _EventInterface3.emit;

  var Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements,
      root = _Components2$Elements2.root,
      track = _Components2$Elements2.track,
      list = _Components2$Elements2.list;
  var getAt = Slides.getAt,
      styleSlides = Slides.style;
  var vertical;
  var rootRect;
  var overflow;

  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }

  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }

  function resize(force) {
    var newRect = rect(root);

    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);

      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }

  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  }

  function cssTrackHeight() {
    var height = "";

    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }

    return height;
  }

  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }

  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }

  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }

  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }

  function listSize() {
    return rect(list)[resolve("width")];
  }

  function slideSize(index, withoutGap) {
    var Slide = getAt(index || 0);
    return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }

  function totalSize(index, withoutGap) {
    var Slide = getAt(index);

    if (Slide) {
      var right = rect(Slide.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }

    return 0;
  }

  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }

  function getGap() {
    var Slide = getAt(0);
    return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
  }

  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }

  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }

  return {
    mount: mount,
    resize: resize,
    listSize: listSize,
    slideSize: slideSize,
    sliderSize: sliderSize,
    totalSize: totalSize,
    getPadding: getPadding,
    isOverflow: isOverflow
  };
}

var MULTIPLIER = 2;

function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements = Components2.Elements,
      Slides = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;

  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);

    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }

  function remount() {
    destroy();
    mount();
  }

  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }

  function observe() {
    var count = computeCloneCount();

    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }

  function generate(count) {
    var slides = Slides.get().slice();
    var length = slides.length;

    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }

      push(slides.slice(-count), slides.slice(0, count)).forEach(function (Slide, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
        push(clones, clone);
        Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
      });
    }
  }

  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }

  function computeCloneCount() {
    var clones2 = options.clones;

    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }

    return clones2;
  }

  return {
    mount: mount,
    destroy: destroy
  };
}

function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2),
      on = _EventInterface4.on,
      emit = _EventInterface4.emit;

  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout,
      slideSize = _Components2$Layout.slideSize,
      getPadding = _Components2$Layout.getPadding,
      totalSize = _Components2$Layout.totalSize,
      listSize = _Components2$Layout.listSize,
      sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction,
      resolve = _Components2$Directio.resolve,
      orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements,
      list = _Components2$Elements3.list,
      track = _Components2$Elements3.track;
  var Transition;

  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }

  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }

  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }

    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function () {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }

  function jump(index) {
    translate(toPosition(index, true));
  }

  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }

  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;

      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }

    return position;
  }

  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }

  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }

  function toIndex(position) {
    var Slides = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;

    for (var i = 0; i < Slides.length; i++) {
      var slideIndex = Slides[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);

      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }

    return index;
  }

  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }

  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }

  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }

    return position;
  }

  function offset(index) {
    var focus = options.focus;
    return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
  }

  function getLimit(max) {
    return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }

  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }

  function exceededLimit(max, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }

  return {
    mount: mount,
    move: move,
    jump: jump,
    translate: translate,
    shift: shift,
    cancel: cancel,
    toIndex: toIndex,
    toPosition: toPosition,
    getPosition: getPosition,
    getLimit: getLimit,
    exceededLimit: exceededLimit,
    reposition: reposition
  };
}

function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2),
      on = _EventInterface5.on,
      emit = _EventInterface5.emit;

  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      toPosition = Move.toPosition;
  var _Components2$Slides = Components2.Slides,
      isEnough = _Components2$Slides.isEnough,
      getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;

  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }

  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);

    if (index !== currIndex) {
      currIndex = index;
      Move.reposition();
    }
  }

  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }

  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);

      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move.move(dest, index, prevIndex, callback);
      }
    }
  }

  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function () {
      var index = loop(Move.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }

  function parse(control) {
    var index = currIndex;

    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [],
          indicator = _ref[1],
          number = _ref[2];

      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }

    return index;
  }

  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));

    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }

    return destination ? dest : loop(dest);
  }

  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);

      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }

      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }

    return dest;
  }

  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();

      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }

    return dest;
  }

  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }

  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);

    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }

    return clamp(end, 0, slideCount - 1);
  }

  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }

  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }

  function toDest(destination) {
    var closest = Move.toIndex(destination);
    return isSlide ? clamp(closest, 0, endIndex) : closest;
  }

  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }

  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }

  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }

  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }

  return {
    mount: mount,
    go: go,
    scroll: scroll,
    getNext: getNext,
    getPrev: getPrev,
    getAdjacent: getAdjacent,
    getEnd: getEnd,
    setIndex: setIndex,
    getIndex: getIndex,
    toIndex: toIndex,
    toPage: toPage,
    toDest: toDest,
    hasFocus: hasFocus,
    isBusy: isBusy
  };
}

var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;

function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      bind = event.bind,
      emit = event.emit;
  var classes = options.classes,
      i18n = options.i18n;
  var Elements = Components2.Elements,
      Controller = Components2.Controller;
  var placeholder = Elements.arrows,
      track = Elements.track;
  var wrapper = placeholder;
  var prev = Elements.prev;
  var next = Elements.next;
  var created;
  var wrapperClasses;
  var arrows = {};

  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }

  function remount() {
    destroy();
    mount();
  }

  function init() {
    var enabled = options.arrows;

    if (enabled && !(prev && next)) {
      createArrows();
    }

    if (prev && next) {
      assign(arrows, {
        prev: prev,
        next: next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);

      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }

  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);

    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }

  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }

  function go(control) {
    Controller.go(control, true);
  }

  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }

  function createArrow(prev2) {
    var arrow = "<button class=\"" + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + "\" type=\"button\"><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\" focusable=\"false\"><path d=\"" + (options.arrowPath || PATH) + "\" />";
    return parseHtml(arrow);
  }

  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller.getPrev();
      var nextIndex = Controller.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }

  return {
    arrows: arrows,
    mount: mount,
    destroy: destroy,
    update: update
  };
}

var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";

function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2),
      on = _EventInterface6.on,
      bind = _EventInterface6.bind,
      emit = _EventInterface6.emit;

  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements = Components2.Elements,
      _Components2$Elements4 = Components2.Elements,
      root = _Components2$Elements4.root,
      toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";

  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements.track.id);
      stopped || play();
      update();
    }
  }

  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function (e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }

    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function (e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }

    if (toggle) {
      bind(toggle, "click", function () {
        stopped ? play() : pause(true);
      });
    }

    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }

  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }

  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }

    stopped = !!stop;
    update();

    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }

  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }

  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }

  function onAnimationFrame(rate) {
    var bar = Elements.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }

  function onMove(index) {
    var Slide = Components2.Slides.getAt(index);
    interval.set(Slide && +getAttribute(Slide.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }

  return {
    mount: mount,
    destroy: interval.cancel,
    play: play,
    pause: pause,
    isPaused: isPaused
  };
}

function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2),
      on = _EventInterface7.on;

  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }

  function cover(cover2) {
    Components2.Slides.forEach(function (Slide) {
      var img = child(Slide.container || Slide.slide, "img");

      if (img && img.src) {
        toggle(cover2, img, Slide);
      }
    });
  }

  function toggle(cover2, img, Slide) {
    Slide.style("background", cover2 ? "center/cover no-repeat url(\"" + img.src + "\")" : "", true);
    display(img, cover2 ? "none" : "");
  }

  return {
    mount: mount,
    destroy: apply(cover, false)
  };
}

var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;

function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2),
      on = _EventInterface8.on,
      emit = _EventInterface8.emit;

  var set = Splide2.state.set;
  var Move = Components2.Move;
  var getPosition = Move.getPosition,
      getLimit = Move.getLimit,
      exceededLimit = Move.exceededLimit,
      translate = Move.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;

  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }

  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();

    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }

    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }

  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }

  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);

    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;

      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }

  function clear() {
    if (interval) {
      interval.cancel();
    }
  }

  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }

  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }

  return {
    mount: mount,
    destroy: clear,
    scroll: scroll,
    cancel: cancel
  };
}

var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};

function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2),
      on = _EventInterface9.on,
      emit = _EventInterface9.emit,
      bind = _EventInterface9.bind,
      unbind = _EventInterface9.unbind;

  var state = Splide2.state;
  var Move = Components2.Move,
      Scroll = Components2.Scroll,
      Controller = Components2.Controller,
      track = Components2.Elements.track,
      reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction,
      resolve = _Components2$Directio2.resolve,
      orient = _Components2$Directio2.orient;
  var getPosition = Move.getPosition,
      exceededLimit = Move.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;

  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }

  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }

  function onPointerDown(e) {
    clickPrevented = false;

    if (!disabled) {
      var isTouch = isTouchEvent(e);

      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move.cancel();
          Scroll.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }

  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }

    if (e.cancelable) {
      if (dragging) {
        Move.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());

        if (expired || hasExceeded) {
          save(e);
        }

        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }

  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }

    if (dragging) {
      move(e);
      prevent(e);
    }

    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }

  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }

  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }

  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);

    if (isFree) {
      Controller.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller.go(Controller.toDest(destination), true);
    }

    reduce(true);
  }

  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }

  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }

  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);

      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }

    return 0;
  }

  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }

  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }

  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }

  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }

  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }

  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }

  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }

  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }

  function isDragging() {
    return dragging;
  }

  function disable(value) {
    disabled = value;
  }

  return {
    mount: mount,
    disable: disable,
    isDragging: isDragging
  };
}

var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};

function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}

var KEYBOARD_EVENT = "keydown";

function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2),
      on = _EventInterface10.on,
      bind = _EventInterface10.bind,
      unbind = _EventInterface10.unbind;

  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;

  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }

  function init() {
    var keyboard = options.keyboard;

    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }

  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }

  function disable(value) {
    disabled = value;
  }

  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function () {
      disabled = _disabled;
    });
  }

  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);

      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }

  return {
    mount: mount,
    destroy: destroy,
    disable: disable
  };
}

var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";

function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2),
      on = _EventInterface11.on,
      off = _EventInterface11.off,
      bind = _EventInterface11.bind,
      emit = _EventInterface11.emit;

  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];

  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }

  function init() {
    empty(entries);
    register();

    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }

  function register() {
    Components2.Slides.forEach(function (Slide) {
      queryAll(Slide.slide, IMAGE_SELECTOR).forEach(function (img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);

        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }

  function check() {
    entries = entries.filter(function (data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }

  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }

  function onLoad(data, e) {
    var img = data[0],
        Slide = data[1];
    removeClass(Slide.slide, CLASS_LOADING);

    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide);
      emit(EVENT_RESIZE);
    }

    isSequential && loadNext();
  }

  function loadNext() {
    entries.length && load(entries.shift());
  }

  return {
    mount: mount,
    destroy: apply(empty, entries),
    check: check
  };
}

function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on,
      emit = event.emit,
      bind = event.bind;
  var Slides = Components2.Slides,
      Elements = Components2.Elements,
      Controller = Components2.Controller;
  var hasFocus = Controller.hasFocus,
      getIndex = Controller.getIndex,
      go = Controller.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements.pagination;
  var items = [];
  var list;
  var paginationClasses;

  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");

    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list: list,
        items: items
      }, getAt(Splide2.index));
    }
  }

  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }

    event.destroy();
  }

  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes,
        i18n = options.i18n,
        perPage = options.perPage;
    var max = hasFocus() ? Controller.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");

    for (var i = 0; i < max; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides.getIn(i).map(function (Slide) {
        return Slide.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));

      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }

      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li: li,
        button: button,
        page: i
      });
    }
  }

  function onClick(page) {
    go(">" + page, true);
  }

  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;

    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }

    var item = items[nextPage];

    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }

  function getDirection() {
    return options.paginationDirection || options.direction;
  }

  function getAt(index) {
    return items[Controller.toPage(index)];
  }

  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());

    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }

    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }

    emit(EVENT_PAGINATION_UPDATED, {
      list: list,
      items: items
    }, prev, curr);
  }

  return {
    items: items,
    mount: mount,
    destroy: destroy,
    getAt: getAt,
    update: update
  };
}

var TRIGGER_KEYS = [" ", "Enter"];

function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation,
      slideFocus = options.slideFocus;
  var events = [];

  function mount() {
    Splide2.splides.forEach(function (target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });

    if (isNavigation) {
      navigate();
    }
  }

  function destroy() {
    events.forEach(function (event) {
      event.destroy();
    });
    empty(events);
  }

  function remount() {
    destroy();
    mount();
  }

  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function (index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }

  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }

  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }

  function onClick(Slide) {
    Splide2.go(Slide.index);
  }

  function onKeydown(Slide, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide);
      prevent(e);
    }
  }

  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount: mount,
    destroy: destroy,
    remount: remount
  };
}

function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2),
      bind = _EventInterface12.bind;

  var lastTime = 0;

  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }

  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);

      var _min = options.wheelMinThreshold || 0;

      var sleep = options.wheelSleep || 0;

      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }

      shouldPrevent(backwards) && prevent(e);
    }
  }

  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }

  return {
    mount: mount
  };
}

var SR_REMOVAL_DELAY = 90;

function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2),
      on = _EventInterface13.on;

  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));

  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }

  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);

    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }

  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }

  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }

  return {
    mount: mount,
    disable: disable,
    destroy: destroy
  };
}

var ComponentConstructors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Media: Media,
  Direction: Direction,
  Elements: Elements,
  Slides: Slides,
  Layout: Layout,
  Clones: Clones,
  Move: Move,
  Controller: Controller,
  Arrows: Arrows,
  Autoplay: Autoplay,
  Cover: Cover,
  Scroll: Scroll,
  Drag: Drag,
  Keyboard: Keyboard,
  LazyLoad: LazyLoad,
  Pagination: Pagination,
  Sync: Sync,
  Wheel: Wheel,
  Live: Live
});
var I18N = {
  prev: "Previous slide",
  next: "Next slide",
  first: "Go to first slide",
  last: "Go to last slide",
  slideX: "Go to slide %s",
  pageX: "Go to page %s",
  play: "Start autoplay",
  pause: "Pause autoplay",
  carousel: "carousel",
  slide: "slide",
  select: "Select a slide to show",
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};

function Fade(Splide2, Components2, options) {
  var Slides = Components2.Slides;

  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }

  function init() {
    Slides.forEach(function (Slide) {
      Slide.style("transform", "translateX(-" + 100 * Slide.index + "%)");
    });
  }

  function start(index, done) {
    Slides.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }

  return {
    mount: mount,
    start: start,
    cancel: noop
  };
}

function Slide(Splide2, Components2, options) {
  var Move = Components2.Move,
      Controller = Components2.Controller,
      Scroll = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;

  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function (e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }

  function start(index, done) {
    var destination = Move.toPosition(index, true);
    var position = Move.getPosition();
    var speed = getSpeed(index);

    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move.jump(index);
      done();
    }
  }

  function cancel() {
    transition("");
    Scroll.cancel();
  }

  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;

    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller.getIndex(true);
      var end = Controller.getEnd();

      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }

    return options.speed;
  }

  return {
    mount: mount,
    start: start,
    cancel: cancel
  };
}

var _Splide = /*#__PURE__*/function () {
  function _Splide(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide.defaults, options || {});

    try {
      merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }

    this._o = Object.create(merge({}, options));
  }

  var _proto = _Splide.prototype;

  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;

    var state = this.state,
        Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn(Constructors, function (Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn(Components2, function (component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };

  _proto.sync = function sync(splide) {
    this.splides.push({
      splide: splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });

    if (this.state.is(IDLE)) {
      this._C.Sync.remount();

      splide.Components.Sync.remount();
    }

    return this;
  };

  _proto.go = function go(control) {
    this._C.Controller.go(control);

    return this;
  };

  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };

  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };

  _proto.emit = function emit(event) {
    var _this$event;

    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));

    return this;
  };

  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);

    return this;
  };

  _proto.remove = function remove(matcher) {
    this._C.Slides.remove(matcher);

    return this;
  };

  _proto.is = function is(type) {
    return this._o.type === type;
  };

  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };

  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }

    var event = this.event,
        state = this.state;

    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn(this._C, function (component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }

    return this;
  };

  _createClass(_Splide, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);

  return _Splide;
}();

var Splide = _Splide;
Splide.defaults = {};
Splide.STATES = STATES;
var CLASS_RENDERED = "is-rendered";
var RENDERER_DEFAULT_CONFIG = {
  listTag: "ul",
  slideTag: "li"
};

var Style = /*#__PURE__*/function () {
  function Style(id, options) {
    this.styles = {};
    this.id = id;
    this.options = options;
  }

  var _proto2 = Style.prototype;

  _proto2.rule = function rule(selector, prop, value, breakpoint) {
    breakpoint = breakpoint || "default";
    var selectors = this.styles[breakpoint] = this.styles[breakpoint] || {};
    var styles = selectors[selector] = selectors[selector] || {};
    styles[prop] = value;
  };

  _proto2.build = function build() {
    var _this2 = this;

    var css = "";

    if (this.styles.default) {
      css += this.buildSelectors(this.styles.default);
    }

    Object.keys(this.styles).sort(function (n, m) {
      return _this2.options.mediaQuery === "min" ? +n - +m : +m - +n;
    }).forEach(function (breakpoint) {
      if (breakpoint !== "default") {
        css += "@media screen and (max-width: " + breakpoint + "px) {";
        css += _this2.buildSelectors(_this2.styles[breakpoint]);
        css += "}";
      }
    });
    return css;
  };

  _proto2.buildSelectors = function buildSelectors(selectors) {
    var _this3 = this;

    var css = "";
    forOwn(selectors, function (styles, selector) {
      selector = ("#" + _this3.id + " " + selector).trim();
      css += selector + " {";
      forOwn(styles, function (value, prop) {
        if (value || value === 0) {
          css += prop + ": " + value + ";";
        }
      });
      css += "}";
    });
    return css;
  };

  return Style;
}();

var SplideRenderer = /*#__PURE__*/function () {
  function SplideRenderer(contents, options, config, defaults) {
    this.slides = [];
    this.options = {};
    this.breakpoints = [];
    merge(DEFAULTS, defaults || {});
    merge(merge(this.options, DEFAULTS), options || {});
    this.contents = contents;
    this.config = assign({}, RENDERER_DEFAULT_CONFIG, config || {});
    this.id = this.config.id || uniqueId("splide");
    this.Style = new Style(this.id, this.options);
    this.Direction = Direction(null, null, this.options);
    assert(this.contents.length, "Provide at least 1 content.");
    this.init();
  }

  SplideRenderer.clean = function clean(splide) {
    var _EventInterface14 = EventInterface(splide),
        on = _EventInterface14.on;

    var root = splide.root;
    var clones = queryAll(root, "." + CLASS_CLONE);
    on(EVENT_MOUNTED, function () {
      remove(child(root, "style"));
    });
    remove(clones);
  };

  var _proto3 = SplideRenderer.prototype;

  _proto3.init = function init() {
    this.parseBreakpoints();
    this.initSlides();
    this.registerRootStyles();
    this.registerTrackStyles();
    this.registerSlideStyles();
    this.registerListStyles();
  };

  _proto3.initSlides = function initSlides() {
    var _this4 = this;

    push(this.slides, this.contents.map(function (content, index) {
      content = isString(content) ? {
        html: content
      } : content;
      content.styles = content.styles || {};
      content.attrs = content.attrs || {};

      _this4.cover(content);

      var classes = _this4.options.classes.slide + " " + (index === 0 ? CLASS_ACTIVE : "");
      assign(content.attrs, {
        class: (classes + " " + (content.attrs.class || "")).trim(),
        style: _this4.buildStyles(content.styles)
      });
      return content;
    }));

    if (this.isLoop()) {
      this.generateClones(this.slides);
    }
  };

  _proto3.registerRootStyles = function registerRootStyles() {
    var _this5 = this;

    this.breakpoints.forEach(function (_ref2) {
      var width = _ref2[0],
          options = _ref2[1];

      _this5.Style.rule(" ", "max-width", unit(options.width), width);
    });
  };

  _proto3.registerTrackStyles = function registerTrackStyles() {
    var _this6 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_TRACK;
    this.breakpoints.forEach(function (_ref3) {
      var width = _ref3[0],
          options = _ref3[1];
      Style2.rule(selector, _this6.resolve("paddingLeft"), _this6.cssPadding(options, false), width);
      Style2.rule(selector, _this6.resolve("paddingRight"), _this6.cssPadding(options, true), width);
      Style2.rule(selector, "height", _this6.cssTrackHeight(options), width);
    });
  };

  _proto3.registerListStyles = function registerListStyles() {
    var _this7 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_LIST;
    this.breakpoints.forEach(function (_ref4) {
      var width = _ref4[0],
          options = _ref4[1];
      Style2.rule(selector, "transform", _this7.buildTranslate(options), width);

      if (!_this7.cssSlideHeight(options)) {
        Style2.rule(selector, "aspect-ratio", _this7.cssAspectRatio(options), width);
      }
    });
  };

  _proto3.registerSlideStyles = function registerSlideStyles() {
    var _this8 = this;

    var Style2 = this.Style;
    var selector = "." + CLASS_SLIDE;
    this.breakpoints.forEach(function (_ref5) {
      var width = _ref5[0],
          options = _ref5[1];
      Style2.rule(selector, "width", _this8.cssSlideWidth(options), width);
      Style2.rule(selector, "height", _this8.cssSlideHeight(options) || "100%", width);
      Style2.rule(selector, _this8.resolve("marginRight"), unit(options.gap) || "0px", width);
      Style2.rule(selector + " > img", "display", options.cover ? "none" : "inline", width);
    });
  };

  _proto3.buildTranslate = function buildTranslate(options) {
    var _this$Direction = this.Direction,
        resolve = _this$Direction.resolve,
        orient = _this$Direction.orient;
    var values = [];
    values.push(this.cssOffsetClones(options));
    values.push(this.cssOffsetGaps(options));

    if (this.isCenter(options)) {
      values.push(this.buildCssValue(orient(-50), "%"));
      values.push.apply(values, this.cssOffsetCenter(options));
    }

    return values.filter(Boolean).map(function (value) {
      return "translate" + resolve("X") + "(" + value + ")";
    }).join(" ");
  };

  _proto3.cssOffsetClones = function cssOffsetClones(options) {
    var _this$Direction2 = this.Direction,
        resolve = _this$Direction2.resolve,
        orient = _this$Direction2.orient;
    var cloneCount = this.getCloneCount();

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue.value,
          unit2 = _this$parseCssValue.unit;

      return this.buildCssValue(orient(value) * cloneCount, unit2);
    }

    var percent = 100 * cloneCount / options.perPage;
    return orient(percent) + "%";
  };

  _proto3.cssOffsetCenter = function cssOffsetCenter(options) {
    var _this$Direction3 = this.Direction,
        resolve = _this$Direction3.resolve,
        orient = _this$Direction3.orient;

    if (this.isFixedWidth(options)) {
      var _this$parseCssValue2 = this.parseCssValue(options[resolve("fixedWidth")]),
          value = _this$parseCssValue2.value,
          unit2 = _this$parseCssValue2.unit;

      return [this.buildCssValue(orient(value / 2), unit2)];
    }

    var values = [];
    var perPage = options.perPage,
        gap = options.gap;
    values.push(orient(50 / perPage) + "%");

    if (gap) {
      var _this$parseCssValue3 = this.parseCssValue(gap),
          _value = _this$parseCssValue3.value,
          _unit = _this$parseCssValue3.unit;

      var gapOffset = (_value / perPage - _value) / 2;
      values.push(this.buildCssValue(orient(gapOffset), _unit));
    }

    return values;
  };

  _proto3.cssOffsetGaps = function cssOffsetGaps(options) {
    var cloneCount = this.getCloneCount();

    if (cloneCount && options.gap) {
      var orient = this.Direction.orient;

      var _this$parseCssValue4 = this.parseCssValue(options.gap),
          value = _this$parseCssValue4.value,
          unit2 = _this$parseCssValue4.unit;

      if (this.isFixedWidth(options)) {
        return this.buildCssValue(orient(value * cloneCount), unit2);
      }

      var perPage = options.perPage;
      var gaps = cloneCount / perPage;
      return this.buildCssValue(orient(gaps * value), unit2);
    }

    return "";
  };

  _proto3.resolve = function resolve(prop) {
    return camelToKebab(this.Direction.resolve(prop));
  };

  _proto3.cssPadding = function cssPadding(options, right) {
    var padding = options.padding;
    var prop = this.Direction.resolve(right ? "right" : "left", true);
    return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
  };

  _proto3.cssTrackHeight = function cssTrackHeight(options) {
    var height = "";

    if (this.isVertical()) {
      height = this.cssHeight(options);
      assert(height, '"height" is missing.');
      height = "calc(" + height + " - " + this.cssPadding(options, false) + " - " + this.cssPadding(options, true) + ")";
    }

    return height;
  };

  _proto3.cssHeight = function cssHeight(options) {
    return unit(options.height);
  };

  _proto3.cssSlideWidth = function cssSlideWidth(options) {
    return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
  };

  _proto3.cssSlideHeight = function cssSlideHeight(options) {
    return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
  };

  _proto3.cssSlideSize = function cssSlideSize(options) {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  };

  _proto3.cssAspectRatio = function cssAspectRatio(options) {
    var heightRatio = options.heightRatio;
    return heightRatio ? "" + 1 / heightRatio : "";
  };

  _proto3.buildCssValue = function buildCssValue(value, unit2) {
    return "" + value + unit2;
  };

  _proto3.parseCssValue = function parseCssValue(value) {
    if (isString(value)) {
      var number = parseFloat(value) || 0;
      var unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
      return {
        value: number,
        unit: unit2
      };
    }

    return {
      value: value,
      unit: "px"
    };
  };

  _proto3.parseBreakpoints = function parseBreakpoints() {
    var _this9 = this;

    var breakpoints = this.options.breakpoints;
    this.breakpoints.push(["default", this.options]);

    if (breakpoints) {
      forOwn(breakpoints, function (options, width) {
        _this9.breakpoints.push([width, merge(merge({}, _this9.options), options)]);
      });
    }
  };

  _proto3.isFixedWidth = function isFixedWidth(options) {
    return !!options[this.Direction.resolve("fixedWidth")];
  };

  _proto3.isLoop = function isLoop() {
    return this.options.type === LOOP;
  };

  _proto3.isCenter = function isCenter(options) {
    if (options.focus === "center") {
      if (this.isLoop()) {
        return true;
      }

      if (this.options.type === SLIDE) {
        return !this.options.trimSpace;
      }
    }

    return false;
  };

  _proto3.isVertical = function isVertical() {
    return this.options.direction === TTB;
  };

  _proto3.buildClasses = function buildClasses() {
    var options = this.options;
    return [CLASS_ROOT, CLASS_ROOT + "--" + options.type, CLASS_ROOT + "--" + options.direction, options.drag && CLASS_ROOT + "--draggable", options.isNavigation && CLASS_ROOT + "--nav", CLASS_ACTIVE, !this.config.hidden && CLASS_RENDERED].filter(Boolean).join(" ");
  };

  _proto3.buildAttrs = function buildAttrs(attrs) {
    var attr = "";
    forOwn(attrs, function (value, key) {
      attr += value ? " " + camelToKebab(key) + "=\"" + value + "\"" : "";
    });
    return attr.trim();
  };

  _proto3.buildStyles = function buildStyles(styles) {
    var style = "";
    forOwn(styles, function (value, key) {
      style += " " + camelToKebab(key) + ":" + value + ";";
    });
    return style.trim();
  };

  _proto3.renderSlides = function renderSlides() {
    var _this10 = this;

    var tag = this.config.slideTag;
    return this.slides.map(function (content) {
      return "<" + tag + " " + _this10.buildAttrs(content.attrs) + ">" + (content.html || "") + "</" + tag + ">";
    }).join("");
  };

  _proto3.cover = function cover(content) {
    var styles = content.styles,
        _content$html = content.html,
        html = _content$html === void 0 ? "" : _content$html;

    if (this.options.cover && !this.options.lazyLoad) {
      var src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);

      if (src && src[2]) {
        styles.background = "center/cover no-repeat url('" + src[2] + "')";
      }
    }
  };

  _proto3.generateClones = function generateClones(contents) {
    var classes = this.options.classes;
    var count = this.getCloneCount();
    var slides = contents.slice();

    while (slides.length < count) {
      push(slides, slides);
    }

    push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach(function (content, index) {
      var attrs = assign({}, content.attrs, {
        class: content.attrs.class + " " + classes.clone
      });
      var clone = assign({}, content, {
        attrs: attrs
      });
      index < count ? contents.unshift(clone) : contents.push(clone);
    });
  };

  _proto3.getCloneCount = function getCloneCount() {
    if (this.isLoop()) {
      var options = this.options;

      if (options.clones) {
        return options.clones;
      }

      var perPage = max.apply(void 0, this.breakpoints.map(function (_ref6) {
        var options2 = _ref6[1];
        return options2.perPage;
      }));
      return perPage * ((options.flickMaxPages || 1) + 1);
    }

    return 0;
  };

  _proto3.renderArrows = function renderArrows() {
    var html = "";
    html += "<div class=\"" + this.options.classes.arrows + "\">";
    html += this.renderArrow(true);
    html += this.renderArrow(false);
    html += "</div>";
    return html;
  };

  _proto3.renderArrow = function renderArrow(prev) {
    var _this$options = this.options,
        classes = _this$options.classes,
        i18n = _this$options.i18n;
    var attrs = {
      class: classes.arrow + " " + (prev ? classes.prev : classes.next),
      type: "button",
      ariaLabel: prev ? i18n.prev : i18n.next
    };
    return "<button " + this.buildAttrs(attrs) + "><svg xmlns=\"" + XML_NAME_SPACE + "\" viewBox=\"0 0 " + SIZE + " " + SIZE + "\" width=\"" + SIZE + "\" height=\"" + SIZE + "\"><path d=\"" + (this.options.arrowPath || PATH) + "\" /></svg></button>";
  };

  _proto3.html = function html() {
    var _this$config = this.config,
        rootClass = _this$config.rootClass,
        listTag = _this$config.listTag,
        arrows = _this$config.arrows,
        beforeTrack = _this$config.beforeTrack,
        afterTrack = _this$config.afterTrack,
        slider = _this$config.slider,
        beforeSlider = _this$config.beforeSlider,
        afterSlider = _this$config.afterSlider;
    var html = "";
    html += "<div id=\"" + this.id + "\" class=\"" + this.buildClasses() + " " + (rootClass || "") + "\">";
    html += "<style>" + this.Style.build() + "</style>";

    if (slider) {
      html += beforeSlider || "";
      html += "<div class=\"splide__slider\">";
    }

    html += beforeTrack || "";

    if (arrows) {
      html += this.renderArrows();
    }

    html += "<div class=\"splide__track\">";
    html += "<" + listTag + " class=\"splide__list\">";
    html += this.renderSlides();
    html += "</" + listTag + ">";
    html += "</div>";
    html += afterTrack || "";

    if (slider) {
      html += "</div>";
      html += afterSlider || "";
    }

    html += "</div>";
    return html;
  };

  return SplideRenderer;
}();

exports.CLASSES = CLASSES;
exports.CLASS_ACTIVE = CLASS_ACTIVE;
exports.CLASS_ARROW = CLASS_ARROW;
exports.CLASS_ARROWS = CLASS_ARROWS;
exports.CLASS_ARROW_NEXT = CLASS_ARROW_NEXT;
exports.CLASS_ARROW_PREV = CLASS_ARROW_PREV;
exports.CLASS_CLONE = CLASS_CLONE;
exports.CLASS_CONTAINER = CLASS_CONTAINER;
exports.CLASS_FOCUS_IN = CLASS_FOCUS_IN;
exports.CLASS_INITIALIZED = CLASS_INITIALIZED;
exports.CLASS_LIST = CLASS_LIST;
exports.CLASS_LOADING = CLASS_LOADING;
exports.CLASS_NEXT = CLASS_NEXT;
exports.CLASS_OVERFLOW = CLASS_OVERFLOW;
exports.CLASS_PAGINATION = CLASS_PAGINATION;
exports.CLASS_PAGINATION_PAGE = CLASS_PAGINATION_PAGE;
exports.CLASS_PREV = CLASS_PREV;
exports.CLASS_PROGRESS = CLASS_PROGRESS;
exports.CLASS_PROGRESS_BAR = CLASS_PROGRESS_BAR;
exports.CLASS_ROOT = CLASS_ROOT;
exports.CLASS_SLIDE = CLASS_SLIDE;
exports.CLASS_SPINNER = CLASS_SPINNER;
exports.CLASS_SR = CLASS_SR;
exports.CLASS_TOGGLE = CLASS_TOGGLE;
exports.CLASS_TOGGLE_PAUSE = CLASS_TOGGLE_PAUSE;
exports.CLASS_TOGGLE_PLAY = CLASS_TOGGLE_PLAY;
exports.CLASS_TRACK = CLASS_TRACK;
exports.CLASS_VISIBLE = CLASS_VISIBLE;
exports.DEFAULTS = DEFAULTS;
exports.EVENT_ACTIVE = EVENT_ACTIVE;
exports.EVENT_ARROWS_MOUNTED = EVENT_ARROWS_MOUNTED;
exports.EVENT_ARROWS_UPDATED = EVENT_ARROWS_UPDATED;
exports.EVENT_AUTOPLAY_PAUSE = EVENT_AUTOPLAY_PAUSE;
exports.EVENT_AUTOPLAY_PLAY = EVENT_AUTOPLAY_PLAY;
exports.EVENT_AUTOPLAY_PLAYING = EVENT_AUTOPLAY_PLAYING;
exports.EVENT_CLICK = EVENT_CLICK;
exports.EVENT_DESTROY = EVENT_DESTROY;
exports.EVENT_DRAG = EVENT_DRAG;
exports.EVENT_DRAGGED = EVENT_DRAGGED;
exports.EVENT_DRAGGING = EVENT_DRAGGING;
exports.EVENT_END_INDEX_CHANGED = EVENT_END_INDEX_CHANGED;
exports.EVENT_HIDDEN = EVENT_HIDDEN;
exports.EVENT_INACTIVE = EVENT_INACTIVE;
exports.EVENT_LAZYLOAD_LOADED = EVENT_LAZYLOAD_LOADED;
exports.EVENT_MOUNTED = EVENT_MOUNTED;
exports.EVENT_MOVE = EVENT_MOVE;
exports.EVENT_MOVED = EVENT_MOVED;
exports.EVENT_NAVIGATION_MOUNTED = EVENT_NAVIGATION_MOUNTED;
exports.EVENT_OVERFLOW = EVENT_OVERFLOW;
exports.EVENT_PAGINATION_MOUNTED = EVENT_PAGINATION_MOUNTED;
exports.EVENT_PAGINATION_UPDATED = EVENT_PAGINATION_UPDATED;
exports.EVENT_READY = EVENT_READY;
exports.EVENT_REFRESH = EVENT_REFRESH;
exports.EVENT_RESIZE = EVENT_RESIZE;
exports.EVENT_RESIZED = EVENT_RESIZED;
exports.EVENT_SCROLL = EVENT_SCROLL;
exports.EVENT_SCROLLED = EVENT_SCROLLED;
exports.EVENT_SHIFTED = EVENT_SHIFTED;
exports.EVENT_SLIDE_KEYDOWN = EVENT_SLIDE_KEYDOWN;
exports.EVENT_UPDATED = EVENT_UPDATED;
exports.EVENT_VISIBLE = EVENT_VISIBLE;
exports.EventBinder = EventBinder;
exports.EventInterface = EventInterface;
exports.FADE = FADE;
exports.LOOP = LOOP;
exports.LTR = LTR;
exports.RTL = RTL;
exports.RequestInterval = RequestInterval;
exports.SLIDE = SLIDE;
exports.STATUS_CLASSES = STATUS_CLASSES;
exports.Splide = Splide;
exports.SplideRenderer = SplideRenderer;
exports.State = State;
exports.TTB = TTB;
exports.Throttle = Throttle;
exports["default"] = Splide;


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var transitionalDefaults = __webpack_require__(/*! ../defaults/transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
var parseProtocol = __webpack_require__(/*! ../helpers/parseProtocol */ "./node_modules/axios/lib/helpers/parseProtocol.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError('Request aborted', AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError('Network Error', AxiosError.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || transitionalDefaults;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new CanceledError() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
      reject(new AxiosError('Unsupported protocol ' + protocol + ':', AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.CanceledError = __webpack_require__(/*! ./cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = (__webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version);
axios.toFormData = __webpack_require__(/*! ./helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

// Expose AxiosError class
axios.AxiosError = __webpack_require__(/*! ../lib/core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports["default"] = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var CanceledError = __webpack_require__(/*! ./CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CanceledError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CanceledError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError.call(this, message == null ? 'canceled' : message, AxiosError.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError, {
  __CANCEL__: true
});

module.exports = CanceledError;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var buildFullPath = __webpack_require__(/*! ./buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/AxiosError.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/core/AxiosError.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

module.exports = AxiosError;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");
var CanceledError = __webpack_require__(/*! ../cancel/CanceledError */ "./node_modules/axios/lib/cancel/CanceledError.js");

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var AxiosError = __webpack_require__(/*! ./AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError(
      'Request failed with status code ' + response.status,
      [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults/index.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults/index.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/defaults/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ../helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");
var transitionalDefaults = __webpack_require__(/*! ./transitional */ "./node_modules/axios/lib/defaults/transitional.js");
var toFormData = __webpack_require__(/*! ../helpers/toFormData */ "./node_modules/axios/lib/helpers/toFormData.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ../adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ../adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitionalDefaults,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: __webpack_require__(/*! ./env/FormData */ "./node_modules/axios/lib/helpers/null.js")
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ "./node_modules/axios/lib/defaults/transitional.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/defaults/transitional.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};


/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = {
  "version": "0.27.2"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/null.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/null.js ***!
  \************************************************/
/***/ ((module) => {

// eslint-disable-next-line strict
module.exports = null;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseProtocol.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseProtocol.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/toFormData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/toFormData.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

module.exports = toFormData;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var VERSION = (__webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version);
var AxiosError = __webpack_require__(/*! ../core/AxiosError */ "./node_modules/axios/lib/core/AxiosError.js");

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError('options must be an object', AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError('option ' + opt + ' must be ' + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError('Unknown option ' + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};


/***/ }),

/***/ "./src/assets/scripts/actions/action.ts":
/*!**********************************************!*\
  !*** ./src/assets/scripts/actions/action.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var connector_1 = __webpack_require__(/*! ../connector */ "./src/assets/scripts/connector/index.ts");
var NoActionsPassed_1 = __webpack_require__(/*! ./exceptions/NoActionsPassed */ "./src/assets/scripts/actions/exceptions/NoActionsPassed.ts");
var Action = /** @class */function () {
  function Action() {}
  Action.prototype.defaults = function (options) {
    if (!options.actions) throw new NoActionsPassed_1["default"]("V Action.init options nebyly nastaveny \u017E\xE1dn\xE9 akce. Nejsou-li \u017E\xE1dn\xE9 akce, nem\xE1 smysl Action modul pou\u017E\xEDvat.");
    this.actions = options.actions;
  };
  Action.prototype.init = function (id, options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    try {
      this.id = id;
      this.options = options;
      this.connected = connector_1["default"].get(id);
      this.defaults(options);
      this.connected.forEach(function (instance) {
        if (!instance.element.hasAttribute('init')) {
          instance.element.setAttribute('init', 'true');
          if (instance.event) {
            _this.handleEvent(instance);
          }
        }
      });
    } catch (err) {
      if (err.name === NoActionsPassed_1["default"].name) window.dump(err.message, {
        options: options
      });
    }
  };
  Action.prototype.reinit = function () {
    this.init(this.id, this.options);
  };
  Action.prototype.handleEvent = function (instance) {
    var _this = this;
    this.initialCache(instance);
    if (instance.event.event === 'load') {
      self.addEventListener('load', function (e) {
        return _this.eventFunction(e, instance);
      });
    } else {
      instance.element.addEventListener(instance.event.event, function (e) {
        return _this.eventFunction(e, instance);
      });
    }
  };
  Action.prototype.initialCache = function (instance) {
    var params = instance.event.params;
    if (params.includes('cache')) {
      var action = this.actions[params[0]];
      action.initialCache(instance, connector_1["default"].get(this.id, {
        id: instance.id,
        event: null
      }), params.slice(1));
    }
  };
  Action.prototype.eventFunction = function (e, instance) {
    var params = instance.event.params;
    if (!params[0] || !this.actions[params[0]]) return;
    var action = this.actions[params[0]];
    action.handle(e, instance, connector_1["default"].get(this.id, {
      id: instance.id,
      event: null
    }), params.slice(1));
  };
  return Action;
}();
exports["default"] = new Action();

/***/ }),

/***/ "./src/assets/scripts/actions/collapse.action.ts":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/actions/collapse.action.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Collapse = /** @class */function () {
  function Collapse() {}
  Collapse.prototype.handle = function (e, triggerer, instances, params) {
    var _this = this;
    instances.forEach(function (instance) {
      if (instance.element.classList.contains('is-collapsed')) {
        triggerer.element.classList.remove('is-active');
        _this.close(instance);
        if (params.includes('cache')) {
          sessionStorage.setItem("collapse_".concat(instance.id), JSON.stringify({
            'isClosed': true
          }));
        }
      } else {
        triggerer.element.classList.add('is-active');
        _this.open(instance);
        if (params.includes('cache')) {
          sessionStorage.setItem("collapse_".concat(instance.id), JSON.stringify({
            'isClosed': false
          }));
        }
      }
    });
  };
  Collapse.prototype.close = function (instance) {
    var body = instance.element;
    if (body.classList.contains('is-collapsing')) return;
    body.style.display = "block";
    var height = body.clientHeight;
    body.style.height = height + "px";
    body.classList.remove('is-collapse');
    body.classList.add('is-collapsing');
    setTimeout(function () {
      body.style.height = "0";
    }, 1);
    setTimeout(function () {
      body.classList.remove('is-collapsing');
      body.classList.add('is-collapse');
      body.style.height = "";
      body.style.display = "";
    }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000);
    body.classList.remove('is-collapsed');
  };
  Collapse.prototype.open = function (instance) {
    var body = instance.element;
    if (body.classList.contains('is-collapsing')) return;
    body.style.display = "block";
    var height = body.clientHeight;
    setTimeout(function () {
      body.style.height = height + "px";
      body.style.display = "";
    }, 1);
    body.classList.add('is-collapse');
    body.classList.add('is-collapsing');
    setTimeout(function () {
      body.classList.remove('is-collapsing');
      body.classList.add('is-collapse');
      body.style.height = "";
      body.style.display = "";
    }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000);
    body.classList.add('is-collapsed');
  };
  Collapse.prototype.initialCache = function (triggerer, instances, params) {
    var _this = this;
    instances.forEach(function (instance) {
      if (sessionStorage.hasOwnProperty("collapse_".concat(instance.id))) {
        if (JSON.parse(sessionStorage.getItem("collapse_".concat(instance.id))).isClosed) {
          triggerer.element.classList.remove('is-active');
          _this.close(instance);
        } else {
          triggerer.element.classList.add('is-active');
          _this.open(instance);
        }
      }
    });
  };
  return Collapse;
}();
exports["default"] = new Collapse();

/***/ }),

/***/ "./src/assets/scripts/actions/connect.action.ts":
/*!******************************************************!*\
  !*** ./src/assets/scripts/actions/connect.action.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Connect = /** @class */function () {
  function Connect() {}
  Connect.prototype.handle = function (e, triggerer, instances, params) {
    var value = null;
    if (triggerer.element instanceof HTMLSelectElement) {
      value = Array.from(triggerer.element.options).find(function (option) {
        return option.value == triggerer.element.value;
      }).innerText;
    } else if (triggerer.element instanceof HTMLInputElement || triggerer.element instanceof HTMLSelectElement || triggerer.element instanceof HTMLTextAreaElement) {
      value = triggerer.element.value;
    } else {
      value = triggerer.element.innerText;
    }
    instances.forEach(function (instance) {
      if (instance.element instanceof HTMLInputElement || instance.element instanceof HTMLSelectElement || instance.element instanceof HTMLTextAreaElement) {
        ;
        instance.element.value = value;
      } else {
        ;
        instance.element.innerText = value;
      }
    });
  };
  return Connect;
}();
exports["default"] = new Connect();

/***/ }),

/***/ "./src/assets/scripts/actions/exceptions/NoActionsPassed.ts":
/*!******************************************************************!*\
  !*** ./src/assets/scripts/actions/exceptions/NoActionsPassed.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var NoActionPassed = /** @class */function (_super) {
  __extends(NoActionPassed, _super);
  function NoActionPassed(message) {
    var _this = _super.call(this, message) || this;
    _this.name = 'NoActionPassed';
    return _this;
  }
  return NoActionPassed;
}(Error);
exports["default"] = NoActionPassed;

/***/ }),

/***/ "./src/assets/scripts/actions/fb_track.action.ts":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/actions/fb_track.action.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var FacebookTrack = /** @class */function () {
  function FacebookTrack() {}
  FacebookTrack.prototype.handle = function (e, triggerer, instances, params) {
    try {
      if (triggerer.data["track"]) {
        window.fbq('track', triggerer.event.params[1], JSON.parse(triggerer.data["track"]));
      } else {
        window.fbq('track', triggerer.event.params[1]);
      }
    } catch (e) {
      window.dump(e);
    }
  };
  return FacebookTrack;
}();
exports["default"] = new FacebookTrack();

/***/ }),

/***/ "./src/assets/scripts/actions/index.ts":
/*!*********************************************!*\
  !*** ./src/assets/scripts/actions/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Connect = exports.PopupMessage = exports.WritingEffect = exports.FacebookTrack = exports.Collapse = exports.Show = exports.Remove = void 0;
var action_1 = __webpack_require__(/*! ./action */ "./src/assets/scripts/actions/action.ts");
var remove_action_1 = __webpack_require__(/*! ./remove.action */ "./src/assets/scripts/actions/remove.action.ts");
exports.Remove = remove_action_1["default"];
var show_action_1 = __webpack_require__(/*! ./show.action */ "./src/assets/scripts/actions/show.action.ts");
exports.Show = show_action_1["default"];
var collapse_action_1 = __webpack_require__(/*! ./collapse.action */ "./src/assets/scripts/actions/collapse.action.ts");
exports.Collapse = collapse_action_1["default"];
var fb_track_action_1 = __webpack_require__(/*! ./fb_track.action */ "./src/assets/scripts/actions/fb_track.action.ts");
exports.FacebookTrack = fb_track_action_1["default"];
var writing_effect_action_1 = __webpack_require__(/*! ./writing_effect.action */ "./src/assets/scripts/actions/writing_effect.action.ts");
exports.WritingEffect = writing_effect_action_1["default"];
var popup_message_action_1 = __webpack_require__(/*! ./popup_message.action */ "./src/assets/scripts/actions/popup_message.action.ts");
exports.PopupMessage = popup_message_action_1["default"];
var connect_action_1 = __webpack_require__(/*! ./connect.action */ "./src/assets/scripts/actions/connect.action.ts");
exports.Connect = connect_action_1["default"];
exports["default"] = action_1["default"];

/***/ }),

/***/ "./src/assets/scripts/actions/popup_message.action.ts":
/*!************************************************************!*\
  !*** ./src/assets/scripts/actions/popup_message.action.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var connector_1 = __webpack_require__(/*! ../connector */ "./src/assets/scripts/connector/index.ts");
var Handler = /** @class */function () {
  function Handler(triggerer) {
    var _this = this;
    this.index = 0;
    this.element = triggerer.element;
    this.data = triggerer.data.messages.split(';').map(function (elm) {
      return elm.trim();
    });
    this.element.classList.add('is-hidden');
    setTimeout(function () {
      _this.element.classList.remove("is-hidden");
      setTimeout(function () {
        _this.appearData();
      }, 100);
    }, 500);
  }
  Handler.prototype.appearData = function () {
    var _this = this;
    if (this.index > this.data.length - 1) return;
    var span = document.createElement("span");
    span.innerText = this.data[this.index];
    this.element.append(span);
    setTimeout(function () {
      span.classList.add('is-fading');
    }, 100);
    setTimeout(function () {
      span.classList.remove('is-fading');
      setTimeout(function () {
        span.remove();
        if (_this.data.length - 1 > _this.index) {
          _this.index += 1;
          return _this.appearData();
        }
        _this.element.classList.add("is-hidden");
      }, 500);
    }, 5000);
  };
  return Handler;
}();
var PopupMessage = /** @class */function () {
  function PopupMessage() {}
  PopupMessage.prototype.handle = function (e, triggerer, instances, params) {
    if (params[0] === 'close') {
      connector_1["default"].get(triggerer.name, {
        id: triggerer.id
      }).map(function (conn) {
        return conn !== triggerer && conn.event.params[0] !== 'close' && conn.element.classList.add('is-hidden');
      });
    }
    if (!triggerer.data.messages) return;
    new Handler(triggerer);
  };
  return PopupMessage;
}();
exports["default"] = new PopupMessage();

/***/ }),

/***/ "./src/assets/scripts/actions/remove.action.ts":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/actions/remove.action.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Remove = /** @class */function () {
  function Remove() {}
  Remove.prototype.handle = function (e, triggerer, instances, params) {
    instances.forEach(function (instance) {
      instance.element.remove();
      if (params.includes('cache')) {
        sessionStorage.setItem("remove_".concat(instance.id), JSON.stringify({
          'isRemoved': true
        }));
      }
    });
  };
  Remove.prototype.initialCache = function (triggerer, instances, params) {
    instances.forEach(function (instance) {
      if (sessionStorage.hasOwnProperty("remove_".concat(instance.id))) {
        if (JSON.parse(sessionStorage.getItem("remove_".concat(instance.id))).isRemoved) {
          instance.element.remove();
        }
      }
    });
  };
  return Remove;
}();
exports["default"] = new Remove();

/***/ }),

/***/ "./src/assets/scripts/actions/show.action.ts":
/*!***************************************************!*\
  !*** ./src/assets/scripts/actions/show.action.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Show = /** @class */function () {
  function Show() {}
  Show.prototype.handle = function (e, triggerer, instances, params) {
    var _this = this;
    switch (triggerer.element.nodeName) {
      case 'INPUT':
        if (triggerer.element.type === 'checkbox' || triggerer.element.type === 'radio') {
          var value_1 = JSON.parse(params[0]);
          var input_1 = triggerer.element;
          instances.forEach(function (instance) {
            if (input_1.checked === value_1) {
              _this.setVisible(instance.element);
              _this.removeHidden(instance.element);
            } else {
              _this.removeVisible(instance.element);
              _this.setHidden(instance.element);
            }
          });
        }
        break;
      case 'SELECT':
        var value_2 = params[0];
        var input_2 = triggerer.element;
        instances.forEach(function (instance) {
          if (input_2.value === value_2) {
            _this.setVisible(instance.element);
            _this.removeHidden(instance.element);
          } else {
            _this.removeVisible(instance.element);
            _this.setHidden(instance.element);
          }
        });
        break;
      default:
        e.preventDefault();
        instances.forEach(function (instance) {
          if (!_this.hasVisible(instance.element)) {
            _this.setVisible(instance.element);
            _this.removeHidden(instance.element);
          } else {
            _this.removeVisible(instance.element);
            _this.setHidden(instance.element);
          }
        });
        break;
    }
  };
  Show.prototype.setVisible = function (element) {
    element.classList.add('is-visible');
  };
  Show.prototype.removeVisible = function (element) {
    element.classList.remove('is-visible');
  };
  Show.prototype.hasVisible = function (element) {
    return element.classList.contains('is-visible');
  };
  Show.prototype.setHidden = function (element) {
    element.classList.add('is-hidden');
  };
  Show.prototype.removeHidden = function (element) {
    element.classList.remove('is-hidden');
  };
  Show.prototype.hasHidden = function (element) {
    return element.classList.contains('is-hidden');
  };
  return Show;
}();
exports["default"] = new Show();

/***/ }),

/***/ "./src/assets/scripts/actions/writing_effect.action.ts":
/*!*************************************************************!*\
  !*** ./src/assets/scripts/actions/writing_effect.action.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Handler = /** @class */function () {
  function Handler(triggerer) {
    var _this = this;
    this.index = 0;
    this.element = triggerer.element;
    this.data = triggerer.data.write.split(';').map(function (elm) {
      return elm.trim();
    });
    setTimeout(function () {
      _this.writeWord();
    }, 1000);
  }
  Handler.prototype.writeWord = function () {
    if (this.element.nodeName === 'INPUT') {
      this.element.placeholder = '';
    } else {
      this.element.innerHTML = '';
    }
    if (this.index === this.data.length) {
      this.index = 0;
      this.writeWord();
    } else {
      this.writeLetter(0, this.data[this.index].split(''));
    }
  };
  Handler.prototype.writeLetter = function (index, letters) {
    var _this = this;
    if (index === letters.length) {
      setTimeout(function () {
        _this.deleteLetter(letters.length - 1);
      }, 2000);
    } else {
      if (this.element.nodeName === 'INPUT') {
        this.element.placeholder = this.element.placeholder + letters[index];
      } else {
        this.element.innerHTML = this.element.innerHTML + letters[index];
      }
      setTimeout(function () {
        _this.writeLetter(index + 1, letters);
      }, 150);
    }
  };
  Handler.prototype.deleteLetter = function (index, letters) {
    var _this = this;
    if (letters === void 0) {
      letters = [];
    }
    if (index < 0) {
      setTimeout(function () {
        _this.index++;
        _this.writeWord();
      }, 1000);
    } else {
      if (this.element.nodeName === 'INPUT') {
        this.element.placeholder = this.element.placeholder.substring(0, index);
      } else {
        this.element.innerHTML = this.element.innerHTML.substring(0, index);
      }
      setTimeout(function () {
        _this.deleteLetter(index - 1, letters);
      }, 50);
    }
  };
  return Handler;
}();
var WritingEffect = /** @class */function () {
  function WritingEffect() {}
  WritingEffect.prototype.handle = function (e, triggerer, instances, params) {
    if (!triggerer.data.write) return;
    new Handler(triggerer);
  };
  return WritingEffect;
}();
exports["default"] = new WritingEffect();

/***/ }),

/***/ "./src/assets/scripts/ajax/index.ts":
/*!******************************************!*\
  !*** ./src/assets/scripts/ajax/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var axios_1 = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
var Template_1 = __webpack_require__(/*! ../components/Template */ "./src/assets/scripts/components/Template/index.ts");
var Variable_1 = __webpack_require__(/*! ../components/Variable */ "./src/assets/scripts/components/Variable/index.ts");
var config_1 = __webpack_require__(/*! ../config */ "./src/assets/scripts/config/index.ts");
var connector_1 = __webpack_require__(/*! ../connector */ "./src/assets/scripts/connector/index.ts");
var utils_ajax_1 = __webpack_require__(/*! ../utils/utils.ajax */ "./src/assets/scripts/utils/utils.ajax.ts");
var AjaxActions = ['value', 'innerText', 'innerHtml'];
var Ajax = /** @class */function () {
  function Ajax() {
    this.fetcher = new utils_ajax_1["default"](axios_1["default"].create({
      baseURL: config_1["default"].api.url
    }));
  }
  Ajax.prototype.init = function (id, options, reinit) {
    var _this = this;
    if (reinit === void 0) {
      reinit = false;
    }
    this.id = id;
    this.options = options;
    this.connected = connector_1["default"].get(id);
    this.connected.forEach(function (instance) {
      if (instance.event) {
        _this.handleEvent(instance);
      }
    });
    Object.entries(this.options.resources).forEach(function (_a) {
      var key = _a[0],
        value = _a[1];
      value.init(_this.fetcher, _this.connected, reinit);
    });
  };
  Ajax.prototype.reinit = function () {
    this.init(this.id, this.options, true);
  };
  Ajax.prototype.isBindable = function (value) {
    return (typeof value === 'string' || value instanceof String) && value.startsWith('{') && value.endsWith('}');
  };
  Ajax.prototype.binded = function (instance, value) {
    var default_value = value;
    var selector = '';
    var action = '';
    value = value.replace(/\s/g, '').replace(/}/g, '').replace(/{/g, '');
    if (value.split('||')[1]) {
      default_value = value.split('||')[1];
      selector = value.split('||')[0].split('.')[0].split('(')[1].split(')')[0];
      action = value.split('||')[0].split('.')[1];
    } else {
      selector = value.split('.')[0].split('(')[1].split(')')[0];
      action = value.split('.')[1];
    }
    var connected = connector_1["default"].get(instance.name, {
      id: instance.id
    }).find(function (conn) {
      return conn.element.matches(selector);
    });
    if (!connected || !AjaxActions.includes(action)) return default_value;
    return connected.element[action];
  };
  Ajax.prototype.loading = function (instance) {
    connector_1["default"].get(instance.name, {
      id: instance.id
    }).forEach(function (conn) {
      if (conn.event && instance.event.params[0] === conn.event.params[0]) {
        // const associatedItems = Connector.get(instance.name, {
        //   fullEvent: instance.event
        // })
        // associatedItems.forEach((associatedItem: ConnectorItem) => {
        //   if(associatedItem !== instance) {
        //     if(associatedItem.element.classList.contains('is-loading') && instance.element.classList.contains('is-loading')) {
        //       associatedItem.element.classList.remove('is-loading')
        //     }
        //     if(associatedItem.element.classList.contains('is-disabled') && instance.element.classList.contains('is-disabled')) {
        //       associatedItem.element.classList.remove('is-disabled')
        //     }
        //     if(associatedItem.element.getAttribute('disabled') === 'true' && instance.element.getAttribute('disabled') === 'true') {
        //       associatedItem.element.removeAttribute('disabled')
        //     }
        //   }
        // });
        // console.log(instance)
        if (conn.element.classList.contains('is-loading')) {
          conn.element.classList.remove('is-loading');
        } else {
          conn.element.classList.add('is-loading');
        }
        // if(conn.element.classList.contains('is-disabled')) {
        //   setTimeout(() => {
        //     conn.element.classList.remove('is-disabled')
        //   }, 100)
        // } else {
        //   conn.element.classList.add('is-disabled')
        // }
        // if(conn.element.getAttribute('disabled') === 'true') {
        //   setTimeout(() => {
        //     conn.element.removeAttribute('disabled')
        //   }, 100)
        //   conn.element.removeAttribute('disabled')
        // } else {
        //   conn.element.setAttribute('disabled', 'true')
        // }
      }
    });

    connector_1["default"].get(Template_1.Template.id, {
      id: instance.id
    }).forEach(function (conn) {
      return conn.element.classList.toggle('is-loading');
    });
    if (instance.event.params[0]) {
      var parts_1 = instance.event.params[0].split('.').reverse();
      parts_1.forEach(function (part, index) {
        connector_1["default"].get(Template_1.Template.id, {
          id: parts_1.slice(index, parts_1.length).reverse().join('.')
        }).forEach(function (conn) {
          return conn.element.classList.toggle('is-loading');
        });
      });
    }
  };
  Ajax.prototype.success = function (instance, data, sendedData) {
    if (data === void 0) {
      data = {};
    }
    if (sendedData === void 0) {
      sendedData = {};
    }
    if (data.templates) {
      Object.entries(data.templates).forEach(function (_a) {
        var name = _a[0],
          html = _a[1];
        connector_1["default"].get(Template_1.Template.id, {
          type: name
        }).forEach(function (conn) {
          return Template_1.Template.html(conn, html);
        });
      });
    }
    if (data.variables) {
      Object.entries(data.variables).forEach(function (_a) {
        var name = _a[0],
          value = _a[1];
        connector_1["default"].get(Variable_1.Variable.id, {
          type: name
        }).forEach(function (conn) {
          return Variable_1.Variable.assign(conn, value);
        });
      });
    }
    if (data) {
      Object.entries(data).forEach(function (_a) {
        var name = _a[0],
          value = _a[1];
        if (name !== 'templates' && name !== 'status' && name !== 'redirect_url' && name !== 'variables' && name !== 'replace_url') {
          connector_1["default"].get(Variable_1.Variable.id, {
            type: name
          }).forEach(function (conn) {
            return Variable_1.Variable.assign(conn, value);
          });
        }
      });
    }
    if (data.redirect_url) {
      window.location.href = data.redirect_url;
    }
    if (data.replace_url) {
      window.history.pushState({
        params: sendedData,
        instance: {
          id: instance.id
        }
      }, null, data.replace_url);
    }
  };
  Ajax.prototype.error = function (instance, data) {
    if (data === void 0) {
      data = {};
    }
    // if (data.templates) {
    //   Object.entries(data.templates).forEach(([name, html]) => {
    //     Connector.get(Template.id, {
    //       type: name,
    //     }).forEach((conn: ConnectorItem) => Template.html(conn, html))
    //   })
    // }
    // if (data.variables) {
    //   Object.entries(data.variables).forEach(([name, value]) => {
    //     Connector.get(Variable.id, {
    //       type: name,
    //     }).forEach((conn: ConnectorItem) => Variable.assign(conn, value))
    //   })
    // }
    return;
  };
  Ajax.prototype.process = function (instance, data) {
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_a) {
        if (this.options.resources[instance.event.params[0]]) {
          this.options.resources[instance.event.params[0]].call(instance, data, {
            onStart: this.loading,
            onEnd: this.loading,
            onSuccess: this.success,
            onError: this.error
          });
        } else {
          try {
            this.loading(instance);
            setTimeout(function () {
              return __awaiter(_this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      return [4 /*yield*/, this.fetcher.get('', {
                        params: __assign({}, data)
                      })];
                    case 1:
                      response = _a.sent();
                      this.loading(instance);
                      if (!response.error) return [3 /*break*/, 3];
                      return [4 /*yield*/, this.error(instance, response.data)];
                    case 2:
                      _a.sent();
                      return [3 /*break*/, 5];
                    case 3:
                      return [4 /*yield*/, this.success(instance, response.data, data)];
                    case 4:
                      _a.sent();
                      _a.label = 5;
                    case 5:
                      return [2 /*return*/];
                  }
                });
              });
            }, 2000);
          } catch (e) {
            this.error(instance, e.response.data);
          }
        }
        return [2 /*return*/];
      });
    });
  };

  Ajax.prototype.handleEvent = function (instance) {
    var _this = this;
    if (instance.element.getAttribute('listener') !== 'true') {
      instance.element.setAttribute('listener', 'true');
      instance.element.addEventListener(instance.event.event, function (e) {
        return _this.eventFunction(e, instance);
      });
    }
  };
  Ajax.prototype.eventFunction = function (e, instance) {
    var _this = this;
    if (instance.element.nodeName !== 'INPUT' && instance.element.type !== 'checkbox') {
      e.preventDefault();
    }
    var data = [];
    try {
      Object.entries(JSON.parse(instance.data.data ? instance.data.data : '{}')).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        if (_this.isBindable(value)) {
          data[key] = _this.binded(instance, value);
        } else {
          data[key] = value;
        }
      });
    } catch (e) {
      window.dump(e);
    }
    this.process(instance, data);
  };
  return Ajax;
}();
exports["default"] = new Ajax();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/Cart/BillingInformationResource.ts":
/*!******************************************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/Cart/BillingInformationResource.ts ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var __1 = __webpack_require__(/*! .. */ "./src/assets/scripts/ajax/resources/index.ts");
var BillingInformationResource = /** @class */function (_super) {
  __extends(BillingInformationResource, _super);
  function BillingInformationResource() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.methods = ['add_delivery_address', 'add_billing_address'];
    return _this;
  }
  return BillingInformationResource;
}(__1["default"]);
exports["default"] = new BillingInformationResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/Cart/CheckoutResource.ts":
/*!********************************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/Cart/CheckoutResource.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var __1 = __webpack_require__(/*! .. */ "./src/assets/scripts/ajax/resources/index.ts");
var CheckoutResource = /** @class */function (_super) {
  __extends(CheckoutResource, _super);
  function CheckoutResource() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.methods = ['add', 'delete'];
    return _this;
  }
  return CheckoutResource;
}(__1["default"]);
exports["default"] = new CheckoutResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/Cart/GiftResource.ts":
/*!****************************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/Cart/GiftResource.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var __1 = __webpack_require__(/*! .. */ "./src/assets/scripts/ajax/resources/index.ts");
var GiftResource = /** @class */function (_super) {
  __extends(GiftResource, _super);
  function GiftResource() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.methods = ['add', 'delete'];
    return _this;
  }
  return GiftResource;
}(__1["default"]);
exports["default"] = new GiftResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/Cart/ProductResource.ts":
/*!*******************************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/Cart/ProductResource.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var __1 = __webpack_require__(/*! .. */ "./src/assets/scripts/ajax/resources/index.ts");
var ProductResource = /** @class */function (_super) {
  __extends(ProductResource, _super);
  function ProductResource() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.methods = ['add', 'edit', 'delete'];
    return _this;
  }
  ProductResource.prototype.call = function (instance, data, options) {
    var _this = this;
    this.options = options;
    this.instance = instance;
    if (instance.event.params[1]) {
      data[instance.event.params[1]] = '';
    }
    data['ajax'] = instance.event.params[0];
    if (instance.element.nodeName === 'INPUT' && instance.element.type === 'number' && instance.event.event === 'change') {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.request(data);
      }, 200);
    } else {
      this.request(data);
    }
  };
  return ProductResource;
}(__1["default"]);
exports["default"] = new ProductResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/SearchResource.ts":
/*!*************************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/SearchResource.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _1 = __webpack_require__(/*! . */ "./src/assets/scripts/ajax/resources/index.ts");
var SearchResource = /** @class */function (_super) {
  __extends(SearchResource, _super);
  function SearchResource() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SearchResource.prototype.call = function (instance, data, options) {
    var _this = this;
    this.options = options;
    this.instance = instance;
    if (instance.event.params[1]) {
      data[instance.event.params[1]] = '';
    }
    data['ajax'] = instance.event.params[0];
    clearTimeout(this.timeout);
    this.timeout = setTimeout(function () {
      _this.request(data);
    }, 200);
  };
  return SearchResource;
}(_1["default"]);
exports["default"] = new SearchResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/ShopResource.ts":
/*!***********************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/ShopResource.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _1 = __webpack_require__(/*! . */ "./src/assets/scripts/ajax/resources/index.ts");
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var ShopResource = /** @class */function (_super) {
  __extends(ShopResource, _super);
  function ShopResource() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  // init(fetcher: Axios, connected: ConnectorItem[], reinit: boolean = false) {
  //   this.fetcher = fetcher
  //   this.connected = connected
  //   if (!reinit) {
  //     window.onpopstate = (event) => {
  //       let data = event.state === null ? null : event.state.params
  //       let instance_id = event.state === null ? 'filter' : event.state.instance.id
  //       if (data && data.ajax) delete data.ajax
  //       if (!data) data = {}
  //       this.instance = Connector.get('ajax', {
  //         id: instance_id,
  //       }).find((item: ConnectorItem) => item.event !== null && item.event.event !== null)
  //       data['ajax'] = this.instance.event.params[0]
  //       this.request(data)
  //     }
  //   }
  // }
  ShopResource.prototype.call = function (instance, data, options) {
    this.options = options;
    this.instance = instance;
    connector_1["default"].get(instance.name, {
      id: instance.id
    }).forEach(function (conn) {
      var input = instance.element;
      var conn_input = conn.element;
      if (conn !== instance && input.name === conn_input.name) {
        if (input.checked) {
          conn_input.checked = true;
        } else {
          conn_input.checked = false;
        }
      }
    });
    connector_1["default"].get(instance.name, {
      id: instance.id
    }).forEach(function (item) {
      switch (item.element.nodeName) {
        case 'INPUT':
          var input = item.element;
          switch (input.type) {
            case 'checkbox':
              if (input.checked) {
                data[input.name] = '';
              }
              break;
            case 'range':
              if (input.value !== input.min && input.value !== input.max) {
                data[input.name] = input.value;
              }
              break;
            default:
              data[input.name] = input.value;
              break;
          }
          break;
        default:
          break;
      }
    });
    data['ajax'] = instance.event.params[0];
    this.request(data);
  };
  return ShopResource;
}(_1["default"]);
exports["default"] = new ShopResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/WishlistResource.ts":
/*!***************************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/WishlistResource.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _1 = __webpack_require__(/*! . */ "./src/assets/scripts/ajax/resources/index.ts");
var WishlistResource = /** @class */function (_super) {
  __extends(WishlistResource, _super);
  function WishlistResource() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.methods = ['add', 'delete'];
    return _this;
  }
  return WishlistResource;
}(_1["default"]);
exports["default"] = new WishlistResource();

/***/ }),

/***/ "./src/assets/scripts/ajax/resources/index.ts":
/*!****************************************************!*\
  !*** ./src/assets/scripts/ajax/resources/index.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var AjaxResource = /** @class */function () {
  function AjaxResource() {}
  AjaxResource.prototype.init = function (fetcher, connected, reinit) {
    if (reinit === void 0) {
      reinit = false;
    }
    this.fetcher = fetcher;
    this.connected = connected;
  };
  AjaxResource.prototype.call = function (instance, data, options) {
    this.options = options;
    this.instance = instance;
    if (instance.event.params[1]) {
      data[instance.event.params[1]] = '';
    }
    data['ajax'] = instance.event.params[0];
    this.request(data);
  };
  AjaxResource.prototype.request = function (data) {
    var _a;
    if (data === void 0) {
      data = {};
    }
    return __awaiter(this, void 0, void 0, function () {
      var _this = this;
      return __generator(this, function (_b) {
        window.dump(data);
        try {
          this.options.onStart(this.instance);
          setTimeout(function () {
            return __awaiter(_this, void 0, void 0, function () {
              var response;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    return [4 /*yield*/, this.fetcher.get('', {
                      params: __assign({}, data)
                    })];
                  case 1:
                    response = _a.sent();
                    this.options.onEnd(this.instance);
                    if (!response.error) return [3 /*break*/, 3];
                    return [4 /*yield*/, this.options.onError(this.instance, response.data)];
                  case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                  case 3:
                    if (data['toggle'] !== undefined) {
                      this.instance.element.classList.toggle('is-toggled');
                    }
                    return [4 /*yield*/, this.options.onSuccess(this.instance, response.data, data)];
                  case 4:
                    _a.sent();
                    _a.label = 5;
                  case 5:
                    return [2 /*return*/];
                }
              });
            });
          }, 500);
        } catch (e) {
          window.dump(e);
          this.options.onError(this.instance, (_a = e === null || e === void 0 ? void 0 : e.response) === null || _a === void 0 ? void 0 : _a.data);
        }
        return [2 /*return*/];
      });
    });
  };

  AjaxResource.prototype.loading = function (status) {
    window.dump(this.connected);
  };
  return AjaxResource;
}();
exports["default"] = AjaxResource;

/***/ }),

/***/ "./src/assets/scripts/components/Carousel/Carousel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/components/Carousel/Carousel.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var splide_1 = __webpack_require__(/*! @splidejs/splide */ "./node_modules/@splidejs/splide/dist/js/splide.cjs.js");
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var CarouselEvents;
(function (CarouselEvents) {
  CarouselEvents["LEFT"] = "left";
  CarouselEvents["RIGHT"] = "right";
})(CarouselEvents || (CarouselEvents = {}));
var Carousel = /** @class */function (_super) {
  __extends(Carousel, _super);
  function Carousel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.instances = [];
    return _this;
  }
  Carousel.prototype.defaults = function (options) {
    splide_1["default"].defaults = options;
  };
  Carousel.prototype.boot = function (instance) {
    var options = instance.data['options'] ? JSON.parse(instance.data['options']) : {};
    if (!instance.event) {
      var index = this.instances.length;
      this.instances.push(__assign(__assign({}, instance), {
        instance: new splide_1["default"](instance.element, options)
      }));
      if (connector_1["default"].get(instance.name, {
        id: instance.id,
        event: null
      }).length === 1) {
        this.instances[index].instance.mount();
      }
    }
  };
  Carousel.prototype.booted = function () {
    var _this = this;
    this.instances.forEach(function (instance) {
      if (instance.instance.options.showPaginationOnHover) {
        var pagination_element = instance.instance.root.querySelector('.splide__pagination');
        if (pagination_element) pagination_element.classList.add('is-hidden');
      }
      if (instance.instance.options.showArrowsOnHover) {
        var arrows_element = instance.instance.root.querySelector('.splide__arrows');
        if (arrows_element) arrows_element.classList.add('is-hidden');
      }
      instance.instance.root.addEventListener('mouseenter', function (e) {
        if (instance.instance.options.showPaginationOnHover) {
          var pagination_element = instance.instance.root.querySelector('.splide__pagination');
          if (pagination_element) pagination_element.classList.remove('is-hidden');
        }
        if (instance.instance.options.showArrowsOnHover) {
          var arrows_element = instance.instance.root.querySelector('.splide__arrows');
          if (arrows_element) arrows_element.classList.remove('is-hidden');
        }
      });
      instance.instance.root.addEventListener('mouseleave', function (e) {
        if (instance.instance.options.showPaginationOnHover) {
          var pagination_element = instance.instance.root.querySelector('.splide__pagination');
          if (pagination_element) pagination_element.classList.add('is-hidden');
        }
        if (instance.instance.options.showArrowsOnHover) {
          var arrows_element = instance.instance.root.querySelector('.splide__arrows');
          if (arrows_element) arrows_element.classList.add('is-hidden');
        }
      });
      var test = _this.instances.filter(function (inst) {
        return inst.id === instance.id;
      });
      if (test.length > 1) {
        test.forEach(function (idk) {
          if (idk !== instance) {
            instance.instance.sync(idk.instance);
          }
        });
        instance.instance.mount();
      }
    });
  };
  Carousel.prototype.handleEvent = function (instance) {
    var _this = this;
    var params = instance.event.params;
    switch (instance.event.event) {
      case 'click':
        instance.element.addEventListener(instance.event.event, function (e) {
          var carousel = _this.instances.filter(function (inst) {
            return inst.id === instance.id;
          })[0];
          if (!carousel) return;
          if (!params[0]) carousel.instance.go('+1');
          if (params[0] === CarouselEvents.LEFT) carousel.instance.go('-1');
          if (params[0] === CarouselEvents.RIGHT) carousel.instance.go('+1');
        });
      default:
        break;
    }
  };
  return Carousel;
}(component_1["default"]);
exports["default"] = new Carousel();

/***/ }),

/***/ "./src/assets/scripts/components/Carousel/index.ts":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components/Carousel/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Carousel = void 0;
var Carousel_component_1 = __webpack_require__(/*! ./Carousel.component */ "./src/assets/scripts/components/Carousel/Carousel.component.ts");
exports.Carousel = Carousel_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Dropdown/Dropdown.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/components/Dropdown/Dropdown.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var Dropdown = /** @class */function (_super) {
  __extends(Dropdown, _super);
  function Dropdown() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Dropdown.prototype.handleEvent = function (instance) {
    // const list: any = instance.element.children[1]
    // if(!instance.type) {
    //     list.style.left = '0';
    //     list.style.right = 'unset';Pi
    // }
    var _this = this;
    // if(self.innerWidth - instance.element.offsetLeft - 10 <= list.clientWidth) {
    //     if(!instance.type) {
    //         list.style.left = 'unset';
    //         list.style.right = '0';
    //     }
    // }
    // const button = instance.element.querySelectorAll('button, a')[0]
    switch (instance.event.event) {
      case 'click':
        instance.element.addEventListener('click', function (e) {
          connector_1["default"].get(_this.id, {
            id: instance.id,
            event: null
          }).forEach(function (conn) {
            if (conn.element !== e.target && !conn.element.contains(e.target)) {
              e.preventDefault();
              if (!_this.isVisible(conn.element)) {
                _this.setActive(instance.element);
                _this.setVisible(conn.element);
                _this.removeHidden(conn.element);
              } else {
                _this.removeActive(instance.element);
                _this.removeVisible(conn.element);
                _this.setHidden(conn.element);
              }
            }
          });
        });
        document.addEventListener('click', function (e) {
          connector_1["default"].get(_this.id, {
            id: instance.id,
            event: null
          }).forEach(function (conn) {
            if (e.target !== instance.element && !instance.element.contains(e.target) && e.target !== conn.element && !conn.element.contains(e.target)) {
              _this.removeActive(instance.element);
              _this.removeVisible(conn.element);
              _this.setHidden(conn.element);
            }
          });
          connector_1["default"].get(_this.id, {
            id: null,
            event: null
          }).forEach(function (conn) {
            if (e.target !== instance.element && !instance.element.contains(e.target) && e.target !== conn.element && !conn.element.contains(e.target)) {
              _this.removeActive(instance.element);
              _this.removeVisible(conn.element);
              _this.setHidden(conn.element);
            }
          });
        });
        break;
      case 'hover':
        instance.element.addEventListener('mouseover', function () {
          connector_1["default"].get(_this.id, {
            id: instance.id,
            event: null
          }).forEach(function (conn) {
            if (!_this.isVisible(conn.element)) {
              _this.setActive(instance.element);
              _this.setVisible(conn.element);
              _this.removeHidden(conn.element);
            }
            conn.element.addEventListener('mouseleave', function (e) {
              if (e.relatedTarget !== instance.element && !instance.element.contains(e.relatedTarget) && e.relatedTarget !== conn.element && !conn.element.contains(e.relatedTarget)) {
                _this.removeActive(instance.element);
                _this.removeVisible(conn.element);
                _this.setHidden(conn.element);
              }
            });
          });
        });
        instance.element.addEventListener('mouseleave', function (e) {
          connector_1["default"].get(_this.id, {
            id: instance.id,
            event: null
          }).forEach(function (conn) {
            if (e.relatedTarget !== instance.element && !instance.element.contains(e.relatedTarget) && e.relatedTarget !== conn.element && !conn.element.contains(e.relatedTarget)) {
              _this.removeActive(instance.element);
              _this.removeVisible(conn.element);
              _this.setHidden(conn.element);
            }
          });
        });
        break;
      default:
        break;
    }
    // if(instance.event === 'hover') {
    //     button.addEventListener('mouseover', () => {
    //         if(!instance.element.classList.contains('is-active')) {
    //             instance.element.classList.add('is-active')
    //         }
    //     })
    //     instance.element.addEventListener('mouseleave', () => {
    //         if(instance.element.classList.contains('is-active')) {
    //             instance.element.classList.remove('is-active')
    //         }
    //     })
    // }
    // self.addEventListener('resize', (e) => {
    //     if(!instance.type){
    //         list.style.left = '0';
    //         list.style.right = 'unset';
    //         if(self.innerWidth - instance.element.offsetLeft - 10 <= list.clientWidth) {
    //             list.style.left = 'unset';
    //             list.style.right = '0';
    //         }
    //     }
    // })
  };

  return Dropdown;
}(component_1["default"]);
exports["default"] = new Dropdown();

/***/ }),

/***/ "./src/assets/scripts/components/Dropdown/index.ts":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components/Dropdown/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Dropdown = void 0;
var Dropdown_component_1 = __webpack_require__(/*! ./Dropdown.component */ "./src/assets/scripts/components/Dropdown/Dropdown.component.ts");
exports.Dropdown = Dropdown_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Header/Header.component.ts":
/*!******************************************************************!*\
  !*** ./src/assets/scripts/components/Header/Header.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var Header = /** @class */function (_super) {
  __extends(Header, _super);
  function Header() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Header.prototype.defaults = function () {
    this.offsetTop = null;
    this.height = null;
  };
  Header.prototype.boot = function (instance) {
    var _this = this;
    setTimeout(function () {
      instance.element.classList.remove('is-sticky');
      _this.offsetTop = instance.element.offsetTop + instance.element.parentElement.offsetTop;
      _this.height = instance.element.offsetHeight;
      if (instance.type === 'sticky') {
        if (window.scrollY >= _this.offsetTop && !instance.element.classList.contains('is-sticky')) {
          instance.element.classList.add('is-sticky');
          document.body.style.marginTop = "".concat(_this.height, "px");
        } else if (window.scrollY < _this.offsetTop) {
          instance.element.classList.remove('is-sticky');
          document.body.style.marginTop = "0px";
        }
      }
      document.addEventListener('scroll', function (e) {
        if (instance.type === 'sticky') {
          if (window.scrollY >= _this.offsetTop && !instance.element.classList.contains('is-sticky')) {
            instance.element.classList.add('is-sticky');
            document.body.style.marginTop = "".concat(_this.height, "px");
          } else if (window.scrollY < _this.offsetTop) {
            instance.element.classList.remove('is-sticky');
            document.body.style.marginTop = "0px";
          }
        }
      });
    }, 100);
  };
  return Header;
}(component_1["default"]);
exports["default"] = new Header();

/***/ }),

/***/ "./src/assets/scripts/components/Header/index.ts":
/*!*******************************************************!*\
  !*** ./src/assets/scripts/components/Header/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Header = void 0;
var Header_component_1 = __webpack_require__(/*! ./Header.component */ "./src/assets/scripts/components/Header/Header.component.ts");
exports.Header = Header_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Input/Input.component.ts":
/*!****************************************************************!*\
  !*** ./src/assets/scripts/components/Input/Input.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var InputRange_component_1 = __webpack_require__(/*! ./InputRange.component */ "./src/assets/scripts/components/Input/InputRange.component.ts");
var InputFile_component_1 = __webpack_require__(/*! ./InputFile.component */ "./src/assets/scripts/components/Input/InputFile.component.ts");
var InputSelect_component_1 = __webpack_require__(/*! ./InputSelect.component */ "./src/assets/scripts/components/Input/InputSelect.component.ts");
var InputNumber_component_1 = __webpack_require__(/*! ./InputNumber.component */ "./src/assets/scripts/components/Input/InputNumber.component.ts");
var Input = /** @class */function (_super) {
  __extends(Input, _super);
  function Input() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Input.prototype.init = function (id, options) {
    this.id = id;
    this.options = options;
    this.register();
  };
  Input.prototype.reinit = function () {
    this.init(this.id, this.options);
  };
  Input.prototype.register = function () {
    if (connector_1["default"].get(this.id).length) {
      if (connector_1["default"].get(this.id, {
        type: 'range'
      }).length) InputRange_component_1["default"].register(connector_1["default"].get(this.id, {
        type: 'range'
      }), this.options ? this.options.range : null);
      if (connector_1["default"].get(this.id, {
        type: 'file'
      }).length) InputFile_component_1["default"].register(connector_1["default"].get(this.id, {
        type: 'file'
      }), this.options ? this.options.file : null);
      if (connector_1["default"].get(this.id, {
        type: 'select'
      }).length) InputSelect_component_1["default"].register(connector_1["default"].get(this.id, {
        type: 'select'
      }), this.options ? this.options.select : null);
      if (connector_1["default"].get(this.id, {
        type: 'number'
      }).length) InputNumber_component_1["default"].register(connector_1["default"].get(this.id, {
        type: 'number'
      }), this.options ? this.options.number : null);
    }
  };
  return Input;
}(component_1["default"]);
exports["default"] = new Input();

/***/ }),

/***/ "./src/assets/scripts/components/Input/InputFile.component.ts":
/*!********************************************************************!*\
  !*** ./src/assets/scripts/components/Input/InputFile.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var InputFile = /** @class */function (_super) {
  __extends(InputFile, _super);
  function InputFile() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.instances = [];
    return _this;
  }
  InputFile.prototype.init = function () {
    var _this = this;
    var config = document.body.dataset.input ? JSON.parse(document.body.dataset.input) : null;
    if (config && config.file) {
      if (config.file["icon_file"]) {
        this.options.icon_file = config.file["icon_file"];
      }
    }
    this.defaults(this.options);
    this.connected.forEach(function (instance) {
      if (!instance.element.hasAttribute("init")) {
        instance.element.setAttribute("init", "true");
        _this.boot(instance);
      }
    });
  };
  InputFile.prototype.register = function (connected, options) {
    this.id = connected[0].type;
    this.connected = connected;
    this.options = options;
    this.init();
  };
  InputFile.prototype.boot = function (instance) {
    var input = instance.element.querySelector("input[type='file']");
    var _instance = __assign(__assign({}, instance), {
      value: null,
      label: "",
      multiple: false,
      button: instance.data.button || "Upload",
      icon: instance.data.icon || null,
      placeholder: ""
    });
    if (input.multiple || input.hasAttribute("multi")) {
      _instance.multiple = true;
    }
    if (instance.element.querySelector("label")) {
      _instance.label = instance.element.querySelector("label").innerText;
    }
    if (input.hasAttribute("placeholder")) {
      _instance.placeholder = input.getAttribute("placeholder");
    }
    this.instances.push(_instance);
    this.render(_instance);
    this.handleEvent(_instance);
  };
  InputFile.prototype.render = function (instance) {
    var input = instance.element.querySelector("input[type='file']");
    var label = instance.element.querySelector("label");
    if (label) label.remove();
    var file = document.createElement("label");
    file.setAttribute("for", input.id);
    file.classList.add("file");
    file.tabIndex = 0;
    file.innerHTML = "\n            ".concat(instance.label ? "<span class=\"file__label\">".concat(instance.label, "</span>") : "", "\n            <div class=\"file__input\">\n                <div class=\"file__button\">\n                    ").concat(instance.icon ? "<i class=\"".concat(instance.icon, "\"></i>") : "", "\n                    ").concat(instance.button, "\n                </div>\n                <div class=\"file__uploaded\">").concat(instance.placeholder, "</div>\n            </div>\n        ");
    instance.faker = file;
    instance.element.prepend(instance.faker);
  };
  InputFile.prototype.handleEvent = function (instance) {
    var _this = this;
    instance.faker.addEventListener("focus", function (e) {
      return _this.onFocus(e, instance);
    });
    instance.faker.addEventListener("blur", function (e) {
      return _this.onBlur(e, instance);
    });
    instance.faker.addEventListener("click", function (e) {
      return _this.onClick(e, instance);
    });
    instance.element.querySelector("input[type='file']").addEventListener("change", function (e) {
      return _this.onChange(e, instance);
    });
    window.addEventListener("keydown", function (e) {
      return instance.isFocused && _this.onKeyDown(e, instance);
    });
  };
  InputFile.prototype.onClick = function (e, instance) {
    var label = instance.faker.querySelector(".file__label");
    var button = instance.faker.querySelector(".file__button");
    var target = e.target;
    if (target !== button && target !== label && !button.contains(target) && !label.contains(target)) e.preventDefault();
  };
  InputFile.prototype.onFocus = function (e, instance) {
    instance.faker.classList.add("is-focused");
    instance.isFocused = true;
  };
  InputFile.prototype.onBlur = function (e, instance) {
    instance.faker.classList.remove("is-focused");
    instance.isFocused = false;
  };
  InputFile.prototype.onChange = function (e, instance) {
    var _this = this;
    var width = instance.faker.querySelector(".file__uploaded").getBoundingClientRect().width - 20;
    instance.value = e.target.files;
    instance.faker.querySelector(".file__uploaded").innerHTML = "\n            ".concat(Object.entries(instance.value).map(function (_a) {
      var index = _a[0],
        file = _a[1];
      var name = file.name;
      var extension = name.split(".")[name.split(".").length - 1];
      if (parseInt(index) + 1 > width / 100) return;
      return "\n                    <span class=\"file__uploaded--tag\">\n                        <i class=\"far fa-file-".concat(extension, "\"></i>\n                        ").concat(name, "\n                    </span>\n                ");
    }).join(""), "\n        ");
    instance.faker.querySelectorAll(".file__uploaded--tag i").forEach(function (i) {
      if (getComputedStyle(i, ":before").content === "none") {
        i.className = "".concat(_this.options.icon_file);
      }
    });
    if (instance.faker.querySelectorAll(".file__uploaded--tag").length < instance.value.length) {
      var tag = document.createElement("span");
      tag.classList.add("file__uploaded--tag");
      tag.innerText = "+".concat(instance.value.length - instance.faker.querySelectorAll(".file__uploaded--tag").length);
      instance.faker.querySelector(".file__uploaded").append(tag);
    }
    if (!instance.value.length) instance.faker.querySelector(".file__uploaded").innerHTML = instance.placeholder;
  };
  InputFile.prototype.onKeyDown = function (e, instance) {
    switch (e.keyCode) {
      case 32:
        e.preventDefault();
        break;
      default:
        break;
    }
  };
  return InputFile;
}(component_1["default"]);
exports["default"] = new InputFile();

/***/ }),

/***/ "./src/assets/scripts/components/Input/InputNumber.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/components/Input/InputNumber.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var InputNumber = /** @class */function (_super) {
  __extends(InputNumber, _super);
  function InputNumber() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.instances = [];
    return _this;
  }
  InputNumber.prototype.init = function () {
    var _this = this;
    var config = document.body.dataset.input ? JSON.parse(document.body.dataset.input) : null;
    if (config && config.number) {
      if (config.number["icon_up"]) {
        this.options.icon_up = config.number["icon_up"];
      }
      if (config.number["icon_down"]) {
        this.options.icon_down = config.number["icon_down"];
      }
    }
    this.defaults(this.options);
    this.connected.forEach(function (instance) {
      if (!instance.element.hasAttribute("init")) {
        instance.element.setAttribute("init", "true");
        _this.boot(instance);
      }
    });
  };
  InputNumber.prototype.register = function (connected, options) {
    this.id = connected[0].type;
    this.connected = connected;
    this.options = options;
    this.init();
  };
  InputNumber.prototype.boot = function (instance) {
    var input = instance.element.querySelector("input");
    var inputInstance = __assign(__assign({}, instance), {
      min: 0,
      max: 100,
      step: 1,
      icon_up: instance.data["iconUp"] ? instance.data["iconUp"] : this.options.icon_up,
      icon_down: instance.data["iconDown"] ? instance.data["iconDown"] : this.options.icon_down,
      value: 0
    });
    if (input.step) inputInstance.step = parseInt(input.step);
    if (input.min) inputInstance.min = parseInt(input.min);
    if (input.max) inputInstance.max = parseInt(input.max);
    if (input.value) inputInstance.value = parseInt(input.value);
    this.instances.push(inputInstance);
    this.render(inputInstance);
    connector_1["default"].reinit(inputInstance.element);
    this.handleEvent(inputInstance);
  };
  InputNumber.prototype.render = function (instance) {
    var input = document.createElement("div");
    input.classList.add("input");
    input.append(instance.element.querySelector("input"));
    input.innerHTML += "\n            <div class=\"input__buttons\">\n                <button type=\"button\">\n                    <i class=\"".concat(instance.icon_up, "\"></i>\n                </button>\n                <button type=\"button\">\n                    <i class=\"").concat(instance.icon_down, "\"></i>\n                </button>\n            </div>\n        ");
    instance.faker = input;
    instance.element.append(instance.faker);
  };
  InputNumber.prototype.handleEvent = function (instance) {
    var _this = this;
    var buttons = instance.faker.querySelectorAll("button");
    buttons[0].addEventListener("click", function (e) {
      return _this.handleIncrease(e, instance);
    });
    buttons[1].addEventListener("click", function (e) {
      return _this.handleDecrease(e, instance);
    });
    instance.faker.querySelector("input").addEventListener("change", function (e) {
      return _this.handleChange(e, instance);
    });
  };
  InputNumber.prototype.rerender = function (instance) {
    instance.faker.querySelector("input").value = instance.value.toString();
  };
  InputNumber.prototype.handleChange = function (e, instance) {
    var value = parseInt(e.target.value);
    instance.value = value > instance.max ? instance.max : value < instance.min ? instance.min : value;
    this.rerender(instance);
  };
  InputNumber.prototype.handleIncrease = function (e, instance) {
    if (instance.value < instance.max) instance.value += instance.step;
    this.rerender(instance);
    instance.element.querySelector("input[type=number]").dispatchEvent(new CustomEvent("change"));
  };
  InputNumber.prototype.handleDecrease = function (e, instance) {
    if (instance.value > instance.min) instance.value -= instance.step;
    this.rerender(instance);
    instance.element.querySelector("input[type=number]").dispatchEvent(new CustomEvent("change"));
  };
  return InputNumber;
}(component_1["default"]);
exports["default"] = new InputNumber();

/***/ }),

/***/ "./src/assets/scripts/components/Input/InputRange.component.ts":
/*!*********************************************************************!*\
  !*** ./src/assets/scripts/components/Input/InputRange.component.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var InputRange = /** @class */function (_super) {
  __extends(InputRange, _super);
  function InputRange() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.instances = [];
    return _this;
  }
  InputRange.prototype.init = function () {
    var _this = this;
    this.defaults(this.options);
    this.connected.forEach(function (instance) {
      if (!instance.element.hasAttribute('init')) {
        instance.element.setAttribute('init', 'true');
        _this.boot(instance);
      }
    });
  };
  InputRange.prototype.register = function (connected, options) {
    this.id = connected[0].type;
    this.connected = connected;
    this.options = options;
    this.init();
  };
  InputRange.prototype.boot = function (instance) {
    var index = this.render(instance);
    this.instances[index].range = {};
    this.change(this.instances[index]);
    this.handleEvent(this.instances[index]);
  };
  InputRange.prototype.change = function (instance) {
    instance.range.min = parseFloat((instance.value[0] - instance.min).toFixed(2));
    instance.range.max = parseFloat((instance.max - instance.value[1]).toFixed(2));
    instance.range.full = instance.max - instance.min;
    instance.range.minPercent = parseFloat((instance.range.min * 100 / instance.range.full).toFixed(2));
    instance.range.maxPercent = parseFloat((instance.range.max * 100 / instance.range.full).toFixed(2));
    instance.range.stepPercent = parseFloat((instance.step[0] * 100 / instance.range.full).toFixed(2));
    instance.range.trackPercent = Math.ceil(parseFloat((instance.range.mouse * 100 / instance.faker.track.root.getBoundingClientRect().width).toFixed(2)) / 0.25) * 0.25 || null;
    if (instance.range.maxPercent < 0) {
      instance.range.maxPercent = 0;
    }
    if (instance.range.minPercent < 0) {
      instance.range.minPercent = 0;
    }
    instance.faker.values.value[0].p.innerText = "".concat(instance.value[0], " ").concat(instance.unit || '');
    instance.faker.values.value[1].p.innerText = "".concat(instance.value[1], " ").concat(instance.unit || '');
    instance.inputs[0].setAttribute('value', instance.value[0]);
    instance.inputs[1].setAttribute('value', instance.value[1]);
    instance.faker.track.range.style.left = instance.range.minPercent + '%';
    instance.faker.track.node[0].style.left = instance.range.minPercent + '%';
    instance.faker.track.range.style.right = instance.range.maxPercent + '%';
    instance.faker.track.node[1].style.right = instance.range.maxPercent + '%';
  };
  InputRange.prototype.handleEvent = function (instance) {
    var _this = this;
    instance.mouse = [null, null];
    instance.willMoving = null;
    instance.faker.track.node[0].addEventListener('mousedown', function (e) {
      document.body.style.userSelect = 'none';
      instance.willMoving = 'left';
      instance.mouse[0] = e.clientX;
    });
    instance.faker.track.node[0].addEventListener('touchstart', function (e) {
      document.body.style.userSelect = 'none';
      instance.willMoving = 'left';
    });
    instance.faker.track.node[1].addEventListener('mousedown', function (e) {
      document.body.style.userSelect = 'none';
      instance.willMoving = 'right';
    });
    instance.faker.track.node[1].addEventListener('touchstart', function (e) {
      document.body.style.userSelect = 'none';
      instance.willMoving = 'right';
    });
    document.addEventListener('mouseup', function (e) {
      if (instance.willMoving !== null) {
        instance.inputs[0].dispatchEvent(new Event('change'));
      }
      setTimeout(function () {
        instance.willMoving = null;
        instance.isMoving = null;
      }, 1);
      document.body.style.removeProperty('user-select');
      instance.wasDispatched = false;
    });
    document.addEventListener('touchend', function (e) {
      if (instance.willMoving !== null) {
        instance.inputs[0].dispatchEvent(new Event('change'));
      }
      setTimeout(function () {
        instance.willMoving = null;
        instance.isMoving = null;
      }, 1);
      document.body.style.removeProperty('user-select');
    });
    document.addEventListener('mousemove', function (e) {
      if (instance.willMoving) {
        _this.handleMove(e, instance);
      }
    });
    document.addEventListener('touchmove', function (e) {
      if (instance.willMoving) {
        _this.handleMove(e, instance);
      }
    });
    instance.faker.track.root.addEventListener('click', function (e) {
      if (!instance.willMoving) {
        _this.handleClick(e, instance);
        instance.inputs[0].dispatchEvent(new Event('change'));
      }
    });
  };
  InputRange.prototype.handleClick = function (e, instance) {
    var _this = this;
    instance.range.mouse = e.x - instance.faker.track.root.getBoundingClientRect().x;
    instance.range.trackPercent = Math.ceil(parseFloat((instance.range.mouse * 100 / instance.faker.track.root.getBoundingClientRect().width).toFixed(2)) / 0.25) * 0.25 || null;
    if (Math.abs(instance.faker.track.range.getBoundingClientRect().width + (instance.faker.track.range.getBoundingClientRect().x - instance.faker.track.root.getBoundingClientRect().x) - instance.range.mouse) < Math.abs(instance.faker.track.range.getBoundingClientRect().x - instance.faker.track.root.getBoundingClientRect().x - instance.range.mouse)) {
      instance.value[1] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
      instance.range.max = parseFloat((instance.max - instance.value[1]).toFixed(2));
      if (!instance.decimals) {
        instance.value[1] = parseInt(instance.value[1].toString());
      }
      this.instances.forEach(function (item) {
        if (item !== instance && item.id === instance.id) {
          item.value[1] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
          item.range.max = parseFloat((instance.max - item.value[1]).toFixed(2));
          if (!item.decimals) {
            item.value[1] = parseInt(item.value[1].toString());
          }
          _this.change(item);
        }
      });
    } else {
      instance.value[0] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
      instance.range.min = parseFloat((instance.value[0] - instance.min).toFixed(2));
      if (!instance.decimals) {
        instance.value[0] = parseInt(instance.value[0].toString());
      }
      this.instances.forEach(function (item) {
        if (item !== instance && item.id === instance.id) {
          item.value[0] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
          item.range.min = parseFloat((item.value[0] - instance.min).toFixed(2));
          if (!item.decimals) {
            item.value[0] = parseInt(item.value[0].toString());
          }
          _this.change(item);
        }
      });
    }
    this.change(instance);
  };
  InputRange.prototype.handleMove = function (e, instance) {
    var _this = this;
    instance.range.mouse = e.touches ? e.touches[0].clientX - instance.faker.track.root.getBoundingClientRect().x : e.x - instance.faker.track.root.getBoundingClientRect().x;
    if (instance.willMoving === 'right') {
      instance.value[1] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
      if (!instance.decimals) {
        instance.value[1] = parseInt(instance.value[1].toString());
      }
      if (instance.value[1] > instance.max) {
        instance.value[1] = instance.max;
      }
      if (instance.value[1] < instance.value[0]) {
        instance.value[1] = instance.value[0];
      }
      this.instances.forEach(function (item) {
        if (item !== instance && item.id === instance.id) {
          item.value[1] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
          if (!item.decimals) {
            item.value[1] = parseInt(item.value[1].toString());
          }
          if (item.value[1] > instance.max) {
            item.value[1] = instance.max;
          }
          if (item.value[1] < instance.value[0]) {
            item.value[1] = instance.value[0];
          }
          _this.change(item);
        }
      });
      this.change(instance);
    }
    if (instance.willMoving === 'left') {
      instance.value[0] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
      if (!instance.decimals) {
        instance.value[0] = parseInt(instance.value[0].toString());
      }
      if (instance.value[0] < instance.min) {
        instance.value[0] = instance.min;
      }
      if (instance.value[0] > instance.value[1]) {
        instance.value[0] = instance.value[1];
      }
      this.instances.forEach(function (item) {
        if (item !== instance && item.id === instance.id) {
          item.value[0] = parseFloat((parseFloat((instance.range.trackPercent * instance.range.full / 100).toString()) + instance.min).toFixed(2));
          if (!item.decimals) {
            item.value[0] = parseInt(item.value[0].toString());
          }
          if (item.value[0] < instance.min) {
            item.value[0] = instance.min;
          }
          if (item.value[0] > instance.value[1]) {
            item.value[0] = instance.value[1];
          }
          _this.change(item);
        }
      });
      this.change(instance);
    }
  };
  InputRange.prototype.render = function (instance) {
    var index = this.instances.length;
    this.instances[index] = __assign(__assign({}, instance), {
      inputs: instance.element.querySelectorAll('input[type="range"]'),
      decimals: false,
      wasDispatched: false,
      faker: {
        root: null,
        track: {
          root: null,
          node: [],
          range: null
        },
        values: {
          root: null,
          value: [{
            root: null,
            p: null,
            span: null
          }, {
            root: null,
            p: null,
            span: null
          }]
        }
      }
    });
    this.instances[index].min = parseFloat(this.instances[index].inputs[0].min);
    this.instances[index].max = parseFloat(this.instances[index].inputs[1].max);
    this.instances[index].step = [parseFloat(this.instances[index].inputs[0].step) || 1, parseFloat(this.instances[index].inputs[1].step) || 1];
    this.instances[index].label = [this.instances[index].inputs[0].dataset.label, this.instances[index].inputs[1].dataset.label];
    this.instances[index].unit = instance.data.unit;
    this.instances[index].value = [this.instances[index].inputs[0].hasAttribute('value') ? parseFloat(this.instances[index].inputs[0].value) : this.instances[index].min, this.instances[index].inputs[1].hasAttribute('value') ? parseFloat(this.instances[index].inputs[1].value) : this.instances[index].max];
    if (this.instances[index].min - Math.floor(this.instances[index].min) !== 0) {
      this.instances[index].decimals = true;
    }
    if (this.instances[index].max - Math.floor(this.instances[index].max) !== 0) {
      this.instances[index].decimals = true;
    }
    // root
    this.instances[index].faker.root = document.createElement('div');
    this.instances[index].faker.root.classList.add('input--faker');
    // track
    this.instances[index].faker.track.root = document.createElement('div');
    this.instances[index].faker.track.root.classList.add('input--faker__track');
    // track - nodes
    this.instances[index].faker.track.node.push(document.createElement('div'));
    this.instances[index].faker.track.node.push(document.createElement('div'));
    this.instances[index].faker.track.node[0].classList.add('input--faker__node');
    this.instances[index].faker.track.node[1].classList.add('input--faker__node');
    // track - range
    this.instances[index].faker.track.range = document.createElement('div');
    this.instances[index].faker.track.range.classList.add('input--faker__range');
    // values
    this.instances[index].faker.values.root = document.createElement('div');
    this.instances[index].faker.values.root.classList.add('input--faker__values');
    // values - value
    this.instances[index].faker.values.value[0].root = document.createElement('div');
    this.instances[index].faker.values.value[1].root = document.createElement('div');
    this.instances[index].faker.values.value[0].root.classList.add('input--faker__value');
    this.instances[index].faker.values.value[1].root.classList.add('input--faker__value');
    // values - value - span
    this.instances[index].faker.values.value[0].span = document.createElement('span');
    this.instances[index].faker.values.value[0].span.innerText = "".concat(this.instances[index].label[0] || 'FROM', ": ");
    this.instances[index].faker.values.value[1].span = document.createElement('span');
    this.instances[index].faker.values.value[1].span.innerText = "".concat(this.instances[index].label[1] || 'TO', ": ");
    // values - value - p
    this.instances[index].faker.values.value[0].p = document.createElement('p');
    this.instances[index].faker.values.value[0].p.innerText = "".concat(this.instances[index].value[0], " ").concat(this.instances[index].unit || '');
    this.instances[index].faker.values.value[1].p = document.createElement('p');
    this.instances[index].faker.values.value[1].p.innerText = "".concat(this.instances[index].value[1], " ").concat(this.instances[index].unit || '');
    this.instances[index].faker.values.value[0].root.append(this.instances[index].faker.values.value[0].span);
    this.instances[index].faker.values.value[0].root.append(this.instances[index].faker.values.value[0].p);
    this.instances[index].faker.values.value[1].root.append(this.instances[index].faker.values.value[1].span);
    this.instances[index].faker.values.value[1].root.append(this.instances[index].faker.values.value[1].p);
    this.instances[index].faker.values.root.append(this.instances[index].faker.values.value[0].root);
    this.instances[index].faker.values.root.append(this.instances[index].faker.values.value[1].root);
    this.instances[index].faker.track.root.append(this.instances[index].faker.track.node[0]);
    this.instances[index].faker.track.root.append(this.instances[index].faker.track.range);
    this.instances[index].faker.track.root.append(this.instances[index].faker.track.node[1]);
    this.instances[index].faker.root.append(this.instances[index].faker.track.root);
    this.instances[index].faker.root.append(this.instances[index].faker.values.root);
    instance.element.append(this.instances[index].faker.root);
    return index;
  };
  return InputRange;
}(component_1["default"]);
exports["default"] = new InputRange();

/***/ }),

/***/ "./src/assets/scripts/components/Input/InputSelect.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/components/Input/InputSelect.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var InputSelect = /** @class */function (_super) {
  __extends(InputSelect, _super);
  function InputSelect() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.instances = [];
    return _this;
  }
  InputSelect.prototype.init = function () {
    var _this = this;
    this.defaults(this.options);
    this.connected.forEach(function (instance) {
      if (!instance.element.hasAttribute('init')) {
        instance.element.setAttribute('init', 'true');
        _this.boot(instance);
      }
    });
  };
  InputSelect.prototype.register = function (connected, options) {
    this.id = connected[0].type;
    this.connected = connected;
    this.options = options;
    this.init();
  };
  InputSelect.prototype.boot = function (instance) {
    var select = instance.element.querySelector('select');
    var options = instance.element.querySelectorAll('option');
    var selectInstance = __assign(__assign({}, instance), {
      options: [],
      value: null,
      multiple: false,
      searchable: false,
      placeholder: ''
    });
    if (select.multiple || select.hasAttribute('multi')) {
      selectInstance.multiple = true;
      selectInstance.value = [];
    }
    if (select.hasAttribute('searchable')) {
      selectInstance.searchable = true;
    }
    if (select.hasAttribute('placeholder')) {
      selectInstance.placeholder = select.getAttribute('placeholder');
    }
    options.forEach(function (option, index) {
      var optionObj = {
        value: option.value,
        label: option.innerText,
        icon: option.dataset.icon,
        img: option.dataset.img,
        color: option.dataset.color
      };
      selectInstance.options.push(optionObj);
      if (option.hasAttribute('selected')) {
        if (selectInstance.value instanceof Array) selectInstance.value.push(optionObj);else selectInstance.value = optionObj;
      } else if (!selectInstance.value) {
        select.value = null;
        selectInstance.value = null;
      }
    });
    this.instances.push(selectInstance);
    this.render(selectInstance);
    this.handleEvent(selectInstance);
  };
  InputSelect.prototype.render = function (instance) {
    var select = document.createElement('div');
    select.classList.add('select');
    select.tabIndex = 0;
    if (!instance.multiple && !(instance.value instanceof Array)) {
      select.innerHTML = "\n                <div class=\"select__input\">\n                    <div class=\"select__input--left\">\n                        ".concat(instance.value && instance.value.icon ? "<i class=\"select__input--icon ".concat(instance.value.icon, "\"></i>") : '', "\n                        ").concat(instance.value && instance.value.img ? "<img class=\"select__input--icon\" src=\"".concat(instance.value.img, "\" alt=\"").concat(instance.value.label, "\"/>") : '', "\n                        <input type=\"text\" tabindex=\"-1\" value=\"").concat(instance.value && instance.value.label ? instance.value.label : '', "\" placeholder=\"").concat(instance.placeholder, "\">\n                    </div>\n                    <div class=\"select__input--right\">\n                        <i class=\"bi bi-chevron-down\"></i>\n                    </div>\n                </div>\n                <div class=\"select__options\">\n                    <ul>\n                        ").concat(instance.options.map(function (option) {
        return "\n                            <li>\n                                <div class=\"select__option ".concat(instance.value === option ? 'is-selected' : '', "\" data-value=\"").concat(option.value, "\">\n                                    ").concat(option.icon ? "<i class=\"select__option--icon ".concat(option.icon, "\"></i>") : '', "\n                                    ").concat(option.img ? "<img class=\"select__option--icon\" src=\"".concat(option.img, "\" alt=\"").concat(option.label, "\"/>") : '', "\n                                    ").concat(option.label, "\n                                </div>\n                            </li>\n                            ");
      }).join(''), "\n                    </ul>\n                </div>\n            ");
    }
    instance.faker = select;
    instance.element.append(instance.faker);
  };
  InputSelect.prototype.handleEvent = function (instance) {
    var _this = this;
    instance.faker.addEventListener('focus', function (e) {
      return _this.onFocus(e, instance);
    });
    instance.faker.addEventListener('blur', function (e) {
      return _this.onBlur(e, instance);
    });
    instance.faker.addEventListener('click', function (e) {
      return _this.onClick(e, instance);
    });
    instance.element.querySelector('label').addEventListener('click', function (e) {
      return instance.faker.focus();
    });
    instance.element.querySelector('select').addEventListener('change', function (e) {
      _this.setValue(instance.options.find(function (item) {
        return item.value == e.target.value;
      }), instance);
    });
    window.addEventListener('keydown', function (e) {
      return instance.isFocused && _this.onKeyDown(e, instance);
    });
    instance.faker.querySelectorAll('.select__option').forEach(function (option) {
      option.addEventListener('click', function () {
        return _this.setValue(option, instance);
      });
    });
  };
  InputSelect.prototype.setValue = function (option, instance, close) {
    if (close === void 0) {
      close = true;
    }
    var _option = option instanceof HTMLElement ? instance.options.find(function (item) {
      return item.value == option.dataset.value;
    }) : option;
    if (_option !== instance.value) {
      instance.value = _option;
      instance.element.querySelector('select').value = _option.value;
      var input = instance.faker.querySelector('.select__input--left');
      input.innerHTML = "\n                ".concat(instance.value && instance.value.icon ? "<i class=\"select__input--icon ".concat(instance.value.icon, "\"></i>") : '', "\n                ").concat(instance.value && instance.value.img ? "<img class=\"select__input--icon\" src=\"".concat(instance.value.img, "\" alt=\"").concat(instance.value.label, "\"/>") : '', "\n                <input type=\"text\" tabindex=\"-1\" value=\"").concat(instance.value && instance.value.label ? instance.value.label : '', "\" placeholder=\"").concat(instance.placeholder, "\">\n            ");
      instance.faker.querySelectorAll('.select__option').forEach(function (opt) {
        opt.classList.remove('is-selected');
      });
      if (option instanceof HTMLElement) option.classList.add('is-selected');else instance.faker.querySelector(".select__option[data-value=\"".concat(option.value, "\"]")).classList.add('is-selected');
      instance.element.querySelector('select').dispatchEvent(new CustomEvent('change', {
        detail: {
          selected: instance.value
        }
      }));
    }
    if (close) this.close(instance);
  };
  InputSelect.prototype.onFocus = function (e, instance) {
    instance.faker.classList.add('is-focused');
    instance.isFocused = true;
  };
  InputSelect.prototype.onBlur = function (e, instance) {
    instance.faker.classList.remove('is-focused');
    instance.isFocused = false;
    if (instance.isOpened) this.close(instance);
  };
  InputSelect.prototype.onClick = function (e, instance) {
    var target = e.target;
    if (target.classList.contains('select__option')) return;
    this.toggle(instance);
  };
  InputSelect.prototype.onKeyDown = function (e, instance) {
    switch (e.keyCode) {
      case 32:
        e.preventDefault();
        this.open(instance);
        break;
      case 27:
        e.preventDefault();
        this.close(instance);
        break;
      case 13:
        e.preventDefault();
        this.toggle(instance);
        break;
      case 38:
        e.preventDefault();
        if (!(instance.value instanceof Array)) {
          if (instance.options.indexOf(instance.value) !== 0) {
            this.setValue(instance.options[instance.options.indexOf(instance.value) - 1], instance, false);
          }
        } else {
          this.setValue(instance.options[0], instance, false);
        }
        break;
      case 40:
        e.preventDefault();
        if (!(instance.value instanceof Array)) {
          if (instance.options.indexOf(instance.value) !== instance.options.length - 1) {
            this.setValue(instance.options[instance.options.indexOf(instance.value) + 1], instance, false);
          }
        } else {
          this.setValue(instance.options[instance.options.length - 1], instance, false);
        }
        break;
      default:
        break;
    }
  };
  InputSelect.prototype.toggle = function (instance) {
    if (instance.isOpened) this.close(instance);else this.open(instance);
  };
  InputSelect.prototype.open = function (instance) {
    instance.faker.classList.add('is-opened');
    instance.isOpened = true;
  };
  InputSelect.prototype.close = function (instance) {
    instance.faker.classList.remove('is-opened');
    instance.isOpened = false;
  };
  return InputSelect;
}(component_1["default"]);
exports["default"] = new InputSelect();

/***/ }),

/***/ "./src/assets/scripts/components/Input/index.ts":
/*!******************************************************!*\
  !*** ./src/assets/scripts/components/Input/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Input = void 0;
var Input_component_1 = __webpack_require__(/*! ./Input.component */ "./src/assets/scripts/components/Input/Input.component.ts");
exports.Input = Input_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Menu/Menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/assets/scripts/components/Menu/Menu.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var MenuRecursive_component_1 = __webpack_require__(/*! ./MenuRecursive.component */ "./src/assets/scripts/components/Menu/MenuRecursive.component.ts");
var MenuDropdown = /** @class */function (_super) {
  __extends(MenuDropdown, _super);
  function MenuDropdown() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MenuDropdown.prototype.boot = function (instance) {
    if (instance.type === 'recursive') MenuRecursive_component_1["default"].register(instance);
  };
  return MenuDropdown;
}(component_1["default"]);
exports["default"] = new MenuDropdown();

/***/ }),

/***/ "./src/assets/scripts/components/Menu/MenuRecursive.component.ts":
/*!***********************************************************************!*\
  !*** ./src/assets/scripts/components/Menu/MenuRecursive.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var utils_1 = __webpack_require__(/*! ../../utils */ "./src/assets/scripts/utils/index.ts");
var MenuRecursive = /** @class */function (_super) {
  __extends(MenuRecursive, _super);
  function MenuRecursive() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.tree = [];
    return _this;
  }
  MenuRecursive.prototype.register = function (connected) {
    this.bootTree(connected.element, 0, this.tree);
    this.handleTree(this.tree);
  };
  MenuRecursive.prototype.toggle = function (instance) {
    if (instance.isActive) {
      this.close(instance);
    } else {
      this.open(instance);
    }
  };
  MenuRecursive.prototype.close = function (instance) {
    var _this = this;
    var body = Array.from(instance.element.children).filter(function (child) {
      return child.tagName === 'UL';
    })[0];
    if (body.classList.contains('is-collapsing')) return;
    body.style.display = 'block';
    var height = body.clientHeight;
    body.style.height = height + 'px';
    body.classList.remove('is-collapse');
    body.classList.add('is-collapsing');
    setTimeout(function () {
      body.style.height = '0';
    }, 1);
    setTimeout(function () {
      body.classList.remove('is-collapsing');
      body.classList.add('is-collapse');
      body.style.height = '';
      body.style.display = '';
    }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000);
    instance.element.classList.remove('is-active');
    instance.isActive = false;
    body.classList.remove('is-collapsed');
    instance.children.forEach(function (child) {
      return child.isActive && child.children.length && _this.close(child);
    });
  };
  MenuRecursive.prototype.open = function (instance) {
    var body = Array.from(instance.element.children).filter(function (child) {
      return child.tagName === 'UL';
    })[0];
    if (body.classList.contains('is-collapsing')) return;
    body.style.display = 'block';
    var height = body.clientHeight;
    setTimeout(function () {
      body.style.height = height + 'px';
      body.style.display = '';
    }, 1);
    body.classList.add('is-collapse');
    body.classList.add('is-collapsing');
    setTimeout(function () {
      body.classList.remove('is-collapsing');
      body.classList.add('is-collapse');
      body.style.height = '';
      body.style.display = '';
    }, parseFloat(getComputedStyle(body)['transitionDuration']) * 1000);
    instance.element.classList.add('is-active');
    instance.isActive = true;
    body.classList.add('is-collapsed');
    this.closeRelatives(this.tree, instance);
  };
  MenuRecursive.prototype.closeRelatives = function (tree, opened) {
    var _this = this;
    tree.forEach(function (item) {
      if (item.depth === opened.depth) {
        if (item !== opened && item.children.length && item.isActive) _this.close(item);
      }
      _this.closeRelatives(item.children, opened);
    });
  };
  MenuRecursive.prototype.handleTree = function (tree) {
    var _this = this;
    tree.forEach(function (item) {
      if (item.children.length) {
        var link_1 = item.element.querySelectorAll('a')[0];
        link_1.addEventListener('click', function (e) {
          if (e.target !== link_1.children[0]) {
            e.preventDefault();
            e.stopPropagation();
            _this.toggle(item);
          }
        });
        _this.handleTree(item.children);
      }
    });
  };
  MenuRecursive.prototype.bootTree = function (list, depth, dest) {
    var _this = this;
    if (depth === void 0) {
      depth = 0;
    }
    Array.from(list.children).forEach(function (element, index) {
      if (element.tagName === 'LI') {
        var instance = {
          id: utils_1["default"].str.random(10),
          element: element,
          depth: depth,
          isActive: element.classList.contains('is-active'),
          children: []
        };
        dest.push(instance);
        var ul = Array.from(element.children).filter(function (child) {
          return child.tagName === 'UL';
        })[0];
        if (ul) {
          ul.classList.add('is-collapse');
          _this.bootTree(ul, depth + 1, instance.children);
        }
      }
    });
  };
  return MenuRecursive;
}(component_1["default"]);
exports["default"] = new MenuRecursive();

/***/ }),

/***/ "./src/assets/scripts/components/Menu/index.ts":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/components/Menu/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MenuRecursive = exports.Menu = void 0;
var Menu_component_1 = __webpack_require__(/*! ./Menu.component */ "./src/assets/scripts/components/Menu/Menu.component.ts");
exports.Menu = Menu_component_1["default"];
var MenuRecursive_component_1 = __webpack_require__(/*! ./MenuRecursive.component */ "./src/assets/scripts/components/Menu/MenuRecursive.component.ts");
exports.MenuRecursive = MenuRecursive_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Modal/Modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/assets/scripts/components/Modal/Modal.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var ModalGallery_component_1 = __webpack_require__(/*! ./ModalGallery.component */ "./src/assets/scripts/components/Modal/ModalGallery.component.ts");
var ModalEvents = ["close", "toggle", "open"];
var Modal = /** @class */function (_super) {
  __extends(Modal, _super);
  function Modal() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Modal.prototype.defaults = function (options) {
    var _this = this;
    if (options === void 0) {
      options = {};
    }
    this.options = options;
    this.wrapper = document.querySelector(options.wrapper ? options.wrapper : "#modal");
    if (!this.wrapper) return;
    this.wrapper.addEventListener("click", function (e) {
      if (e.target === _this.wrapper) {
        connector_1["default"].get("modal", {
          type: null,
          event: null
        }).forEach(function (item) {
          _this.close(item);
        });
      }
    });
  };
  Modal.prototype.booted = function () {
    ModalGallery_component_1["default"].register(connector_1["default"].get("modal", {
      type: "gallery"
    }), this.options ? this.options.gallery : null);
  };
  Modal.prototype.handleEvent = function (instance) {
    var _this = this;
    var params = instance.event.params;
    switch (instance.event.event) {
      case "click":
        instance.element.addEventListener(instance.event.event, function (e) {
          e.preventDefault();
          console.log(instance, params);
          if (!params[0]) return;
          connector_1["default"].get("modal", {
            id: instance.id,
            type: null,
            event: null
          }).forEach(function (connected) {
            _this[params[0]](connected);
          });
        });
      default:
        break;
    }
    // document.addEventListener("click", (e) => {
    //   if (
    //     e.target !== this.wrapper &&
    //     e.target !== instance.element &&
    //     !instance.element.contains(e.target as HTMLElement) &&
    //     this.isOpen(instance)
    //   ) {
    //     Connector.get("modal", {
    //       id: instance.id,
    //       type: null,
    //       event: null,
    //     }).forEach((connected: ConnectorItem) => {
    //       this.close(connected);
    //     });
    //   }
    // });
  };

  Modal.prototype.isOpen = function (instance) {
    var _this = this;
    return !connector_1["default"].get("modal", {
      id: instance.id,
      type: null,
      event: null
    }).map(function (connected) {
      return _this.isActive(connected.element) ? true : false;
    }).includes(false);
  };
  Modal.prototype.toggle = function (instance) {
    if (instance.element.classList.contains("is-active")) {
      this.close(instance);
    } else {
      this.open(instance);
    }
  };
  Modal.prototype.close = function (instance) {
    document.body.classList.remove("is-overlay");
    this.removeActive(instance.element);
    connector_1["default"].get("modal", {
      type: "visible",
      id: instance.id
    }).forEach(function (conn) {
      conn.element.style.removeProperty("z-index");
    });
  };
  Modal.prototype.setMaxHeight = function (element) {
    element.style.maxHeight = "calc(100vh - ".concat(element.getBoundingClientRect().top + parseInt(getComputedStyle(element).getPropertyValue("margin-top").replace("px", "")), "px)");
  };
  Modal.prototype.open = function (instance) {
    var _this = this;
    connector_1["default"].get("modal", {
      type: null,
      event: null
    }).forEach(function (connected) {
      if (connected !== instance) _this.close(connected);
    });
    connector_1["default"].get("modal", {
      type: "visible",
      id: instance.id
    }).forEach(function (conn) {
      if (!_this.wrapper) return;
      conn.element.style.zIndex = (parseInt(getComputedStyle(_this.wrapper).zIndex) + 1).toString();
    });
    document.body.classList.add("is-overlay");
    this.setActive(instance.element);
    this.setMaxHeight(instance.element);
  };
  return Modal;
}(component_1["default"]);
exports["default"] = new Modal();

/***/ }),

/***/ "./src/assets/scripts/components/Modal/ModalGallery.component.ts":
/*!***********************************************************************!*\
  !*** ./src/assets/scripts/components/Modal/ModalGallery.component.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var ModalGallery = /** @class */function (_super) {
  __extends(ModalGallery, _super);
  function ModalGallery() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.instances = [];
    return _this;
  }
  ModalGallery.prototype.register = function (connected, options) {
    this.connected = connected;
    this.options = options;
    this.init();
  };
  ModalGallery.prototype.init = function () {
    var _this = this;
    var config = document.body.dataset.gallery ? JSON.parse(document.body.dataset.gallery) : null;
    if (config) {
      if (config['icon_close']) {
        this.options.icon_close = config['icon_close'];
      }
      if (config['icon_left']) {
        this.options.icon_left = config['icon_left'];
      }
      if (config['icon_right']) {
        this.options.icon_right = config['icon_right'];
      }
    }
    this.defaults(this.options);
    this.connected.forEach(function (instance) {
      _this.boot(instance);
    });
    this.booted();
  };
  ModalGallery.prototype.boot = function (connected) {
    var instance = this.instances.find(function (elm) {
      return elm.id === connected.id;
    });
    if (!instance) {
      this.instances.push({
        id: connected.id,
        index: 0,
        opened: false,
        children: [connected]
      });
    } else {
      instance.children.push(connected);
    }
  };
  ModalGallery.prototype.booted = function () {
    var _this = this;
    this.instances.forEach(function (instance) {
      instance.children.forEach(function (child) {
        child.element.style.cursor = 'pointer';
        child.element.addEventListener('mouseenter', function () {
          return child.element.classList.add('is-hover');
        });
        child.element.addEventListener('mouseleave', function () {
          return child.element.classList.remove('is-hover');
        });
        child.element.addEventListener('click', function () {
          _this.open(instance, instance.children.indexOf(child));
        });
      });
    });
  };
  ModalGallery.prototype.render = function (instance) {
    var _this = this;
    var gallery = document.createElement('div');
    gallery.classList.add('modal__gallery');
    gallery.dataset.id = instance.id;
    var galleryClose = document.createElement('button');
    galleryClose.classList.add('modal__gallery--close');
    galleryClose.type = 'button';
    galleryClose.innerHTML = "<i class=\"".concat(this.options.icon_close, "\"></i>");
    galleryClose.addEventListener('click', function () {
      return _this.close(instance);
    });
    var galleryPrev = document.createElement('button');
    galleryPrev.classList.add('modal__gallery--prev');
    galleryPrev.type = 'button';
    galleryPrev.innerHTML = "<i class=\"".concat(this.options.icon_left, "\"></i>");
    galleryPrev.addEventListener('click', function () {
      return _this.prev(instance);
    });
    var galleryNext = document.createElement('button');
    galleryNext.classList.add('modal__gallery--next');
    galleryNext.type = 'button';
    galleryNext.innerHTML = "<i class=\"".concat(this.options.icon_right, "\"></i>");
    galleryNext.addEventListener('click', function () {
      return _this.next(instance);
    });
    var galleryImage = document.createElement('figure');
    galleryImage.classList.add('modal__gallery--image');
    galleryImage.innerHTML = "\n            <img src=\"".concat(instance.children[instance.index].data.src || instance.children[instance.index].element.getAttribute('src') || '#', "\" alt=\"").concat(instance.children[instance.index].element.getAttribute('alt') || 'no name', "\" draggable=\"false\">\n            <figcaption class=\"modal__gallery--caption\">\n                <div class=\"modal__gallery--title\">").concat(instance.children[instance.index].data.title || instance.children[instance.index].element.getAttribute('title') || '', "</div>\n                <div class=\"modal__gallery--counter\">").concat(instance.index + 1, " / ").concat(instance.children.length, "</div>\n            </figcaption>\n        ");
    gallery.append(galleryClose);
    gallery.append(galleryImage);
    gallery.append(galleryPrev);
    gallery.append(galleryNext);
    document.querySelector('#modal').append(gallery);
    instance.opened = true;
    instance.element = gallery;
    gallery.addEventListener('click', function (e) {
      if (e.target === gallery) {
        _this.close(instance);
      }
    });
    galleryImage.addEventListener('click', function () {
      return _this.next(instance);
    });
    window.addEventListener('keydown', function (e) {
      if (instance.element.classList.contains('is-active')) {
        switch (e.keyCode) {
          case 39:
            _this.next(instance);
            break;
          case 37:
            _this.prev(instance);
            break;
          case 27:
            _this.close(instance);
            break;
          default:
            break;
        }
      }
    });
  };
  ModalGallery.prototype.open = function (instance, index) {
    if (index === void 0) {
      index = 0;
    }
    if (!instance.opened) this.render(instance);
    this.to(instance, index);
    setTimeout(function () {
      instance.element.classList.add('is-active');
      document.body.classList.add('is-overlay');
    }, 1);
  };
  ModalGallery.prototype.close = function (instance) {
    instance.element.classList.remove('is-active');
    document.body.classList.remove('is-overlay');
  };
  ModalGallery.prototype.to = function (instance, index) {
    instance.index = index >= 0 && index < instance.children.length ? index : 0;
    var image = instance.element.querySelector('.modal__gallery--image img');
    var counter = instance.element.querySelector('.modal__gallery--counter');
    var title = instance.element.querySelector('.modal__gallery--title');
    image.src = instance.children[instance.index].data.src || instance.children[instance.index].element.getAttribute('src') || '#';
    image.alt = instance.children[instance.index].element.getAttribute('alt') || 'no name';
    counter.innerText = "".concat(instance.index + 1, " / ").concat(instance.children.length);
    title.innerText = instance.children[instance.index].data.title || instance.children[instance.index].element.getAttribute('title') || '';
  };
  ModalGallery.prototype.next = function (instance) {
    if (instance.index + 1 === instance.children.length) {
      instance.index = 0;
    } else {
      instance.index++;
    }
    this.to(instance, instance.index);
  };
  ModalGallery.prototype.prev = function (instance) {
    if (instance.index === 0) {
      instance.index = instance.children.length - 1;
    } else {
      instance.index--;
    }
    this.to(instance, instance.index);
  };
  return ModalGallery;
}(component_1["default"]);
exports["default"] = new ModalGallery();

/***/ }),

/***/ "./src/assets/scripts/components/Modal/index.ts":
/*!******************************************************!*\
  !*** ./src/assets/scripts/components/Modal/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Modal = void 0;
var Modal_component_1 = __webpack_require__(/*! ./Modal.component */ "./src/assets/scripts/components/Modal/Modal.component.ts");
exports.Modal = Modal_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Tabs/Tabs.component.ts":
/*!**************************************************************!*\
  !*** ./src/assets/scripts/components/Tabs/Tabs.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var Tabs = /** @class */function (_super) {
  __extends(Tabs, _super);
  function Tabs() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Tabs.prototype.handleEvent = function (instance) {
    var _this = this;
    switch (instance.event.event) {
      case 'click':
        instance.element.addEventListener('click', function () {
          if (_this.isActive(instance.element)) return;
          connector_1["default"].get(_this.id, {
            id: instance.id
          }).forEach(function (conn) {
            if (conn === instance) {
              _this.setActive(conn.element);
            } else if (conn.type === instance.type && conn.event === null) {
              _this.setVisible(conn.element);
              _this.removeHidden(conn.element);
            } else if (conn.event !== null) {
              _this.removeActive(conn.element);
            } else {
              _this.removeVisible(conn.element);
              _this.setHidden(conn.element);
            }
          });
        });
        break;
      default:
        break;
    }
  };
  return Tabs;
}(component_1["default"]);
exports["default"] = new Tabs();

/***/ }),

/***/ "./src/assets/scripts/components/Tabs/index.ts":
/*!*****************************************************!*\
  !*** ./src/assets/scripts/components/Tabs/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tabs = void 0;
var Tabs_component_1 = __webpack_require__(/*! ./Tabs.component */ "./src/assets/scripts/components/Tabs/Tabs.component.ts");
exports.Tabs = Tabs_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Template/Template.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/components/Template/Template.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var actions_1 = __webpack_require__(/*! ../../actions */ "./src/assets/scripts/actions/index.ts");
var ajax_1 = __webpack_require__(/*! ../../ajax */ "./src/assets/scripts/ajax/index.ts");
var connector_1 = __webpack_require__(/*! ../../connector */ "./src/assets/scripts/connector/index.ts");
var Input_1 = __webpack_require__(/*! ../Input */ "./src/assets/scripts/components/Input/index.ts");
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var Template = /** @class */function (_super) {
  __extends(Template, _super);
  function Template() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Template.prototype.boot = function (instance) {};
  Template.prototype.html = function (instance, html) {
    ;
    instance.element.innerHTML = html;
    connector_1["default"].reinit(instance.element);
    actions_1["default"].reinit();
    Input_1.Input.reinit();
    ajax_1["default"].reinit();
  };
  return Template;
}(component_1["default"]);
exports["default"] = new Template();

/***/ }),

/***/ "./src/assets/scripts/components/Template/index.ts":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components/Template/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Template = void 0;
var Template_component_1 = __webpack_require__(/*! ./Template.component */ "./src/assets/scripts/components/Template/Template.component.ts");
exports.Template = Template_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/Variable/Variable.component.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/components/Variable/Variable.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var component_1 = __webpack_require__(/*! ../component */ "./src/assets/scripts/components/component.ts");
var Variable = /** @class */function (_super) {
  __extends(Variable, _super);
  function Variable() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Variable.prototype.boot = function (instance) {};
  Variable.prototype.assign = function (instance, value) {
    switch (_typeof(value)) {
      case 'boolean':
        if (value === true) {
          instance.element.classList.remove('is-hidden');
          instance.element.classList.add('is-visible');
        } else {
          instance.element.classList.add('is-hidden');
          instance.element.classList.remove('is-visible');
        }
        break;
      default:
        instance.element.innerText = value;
        break;
    }
  };
  return Variable;
}(component_1["default"]);
exports["default"] = new Variable();

/***/ }),

/***/ "./src/assets/scripts/components/Variable/index.ts":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components/Variable/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Variable = void 0;
var Variable_component_1 = __webpack_require__(/*! ./Variable.component */ "./src/assets/scripts/components/Variable/Variable.component.ts");
exports.Variable = Variable_component_1["default"];

/***/ }),

/***/ "./src/assets/scripts/components/component.ts":
/*!****************************************************!*\
  !*** ./src/assets/scripts/components/component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var connector_1 = __webpack_require__(/*! ../connector */ "./src/assets/scripts/connector/index.ts");
var ComponentStates;
(function (ComponentStates) {
  ComponentStates["IS_ACTIVE"] = "is-active";
  ComponentStates["IS_COLLAPSING"] = "is-collapsing";
  ComponentStates["IS_COLLAPSE"] = "is-collapse";
  ComponentStates["IS_VISIBLE"] = "is-visible";
  ComponentStates["IS_HIDDEN"] = "is-hidden";
})(ComponentStates || (ComponentStates = {}));
var Component = /** @class */function () {
  function Component() {}
  Component.prototype.init = function (id, options) {
    var _this = this;
    this.id = id;
    this.connected = connector_1["default"].get(id);
    this.options = options;
    this.defaults(options);
    this.connected.forEach(function (instance) {
      _this.boot(instance);
    });
    this.connected.forEach(function (instance) {
      if (instance.event) {
        _this.handleEvent(instance);
      }
    });
    this.booted();
  };
  Component.prototype.reinit = function () {
    this.init(this.id, this.options);
  };
  Component.prototype.boot = function (instance) {};
  Component.prototype.booted = function () {};
  Component.prototype.handleEvent = function (instance) {};
  // Activation
  Component.prototype.isActive = function (element) {
    return element.classList.contains(ComponentStates.IS_ACTIVE);
  };
  Component.prototype.setActive = function (element) {
    element.classList.add(ComponentStates.IS_ACTIVE);
  };
  Component.prototype.removeActive = function (element) {
    element.classList.remove(ComponentStates.IS_ACTIVE);
  };
  Component.prototype.toggleActive = function (element) {
    element.classList.toggle(ComponentStates.IS_ACTIVE);
  };
  // visible
  Component.prototype.isVisible = function (element) {
    return element.classList.contains(ComponentStates.IS_VISIBLE);
  };
  Component.prototype.setVisible = function (element) {
    element.classList.add(ComponentStates.IS_VISIBLE);
  };
  Component.prototype.removeVisible = function (element) {
    element.classList.remove(ComponentStates.IS_VISIBLE);
  };
  Component.prototype.toggleVisible = function (element) {
    element.classList.toggle(ComponentStates.IS_VISIBLE);
  };
  // hidden
  Component.prototype.isHidden = function (element) {
    return element.classList.contains(ComponentStates.IS_HIDDEN);
  };
  Component.prototype.setHidden = function (element) {
    element.classList.add(ComponentStates.IS_HIDDEN);
  };
  Component.prototype.removeHidden = function (element) {
    element.classList.remove(ComponentStates.IS_HIDDEN);
  };
  Component.prototype.toggleHidden = function (element) {
    element.classList.toggle(ComponentStates.IS_HIDDEN);
  };
  // Collapsation
  Component.prototype.isCollapsing = function (element) {
    return element.classList.contains(ComponentStates.IS_COLLAPSING);
  };
  Component.prototype.setCollapsing = function (element) {
    element.classList.add(ComponentStates.IS_COLLAPSING);
  };
  Component.prototype.removeCollapsing = function (element) {
    element.classList.remove(ComponentStates.IS_COLLAPSING);
  };
  Component.prototype.isCollapse = function (element) {
    return element.classList.contains(ComponentStates.IS_COLLAPSE);
  };
  Component.prototype.setCollapse = function (element) {
    element.classList.add(ComponentStates.IS_COLLAPSE);
  };
  Component.prototype.removeCollapse = function (element) {
    element.classList.remove(ComponentStates.IS_COLLAPSE);
  };
  Component.prototype.collapse = function (head, body) {
    var _this = this;
    if (!this.isCollapsing(body)) {
      body.style.display = "block";
      var height_1 = body.clientHeight;
      if (!this.isActive(head)) {
        setTimeout(function () {
          body.style.height = height_1 + "px";
          body.style.display = "";
        }, 1);
        this.setCollapse(body);
        this.setCollapsing(body);
        setTimeout(function () {
          _this.removeCollapsing(body);
          _this.setCollapse(body);
          body.style.height = "";
          body.style.display = "";
        }, parseFloat(getComputedStyle(body)["transitionDuration"]) * 1000);
      } else {
        body.style.height = height_1 + "px";
        this.removeCollapse(body);
        this.setCollapsing(body);
        setTimeout(function () {
          body.style.height = "0";
        }, 1);
        setTimeout(function () {
          _this.removeCollapsing(body);
          _this.setCollapse(body);
          body.style.height = "";
          body.style.display = "";
        }, parseFloat(getComputedStyle(body)["transitionDuration"]) * 1000);
      }
      this.toggleActive(head);
    }
  };
  Component.prototype.defaults = function (options) {};
  return Component;
}();
exports["default"] = Component;

/***/ }),

/***/ "./src/assets/scripts/components/index.ts":
/*!************************************************!*\
  !*** ./src/assets/scripts/components/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Tabs = exports.Header = exports.Menu = exports.Dropdown = exports.Input = exports.Modal = exports.Carousel = void 0;
var Carousel_1 = __webpack_require__(/*! ./Carousel */ "./src/assets/scripts/components/Carousel/index.ts");
Object.defineProperty(exports, "Carousel", ({
  enumerable: true,
  get: function get() {
    return Carousel_1.Carousel;
  }
}));
var Modal_1 = __webpack_require__(/*! ./Modal */ "./src/assets/scripts/components/Modal/index.ts");
Object.defineProperty(exports, "Modal", ({
  enumerable: true,
  get: function get() {
    return Modal_1.Modal;
  }
}));
var Input_1 = __webpack_require__(/*! ./Input */ "./src/assets/scripts/components/Input/index.ts");
Object.defineProperty(exports, "Input", ({
  enumerable: true,
  get: function get() {
    return Input_1.Input;
  }
}));
var Dropdown_1 = __webpack_require__(/*! ./Dropdown */ "./src/assets/scripts/components/Dropdown/index.ts");
Object.defineProperty(exports, "Dropdown", ({
  enumerable: true,
  get: function get() {
    return Dropdown_1.Dropdown;
  }
}));
var Menu_1 = __webpack_require__(/*! ./Menu */ "./src/assets/scripts/components/Menu/index.ts");
Object.defineProperty(exports, "Menu", ({
  enumerable: true,
  get: function get() {
    return Menu_1.Menu;
  }
}));
var Tabs_1 = __webpack_require__(/*! ./Tabs */ "./src/assets/scripts/components/Tabs/index.ts");
Object.defineProperty(exports, "Tabs", ({
  enumerable: true,
  get: function get() {
    return Tabs_1.Tabs;
  }
}));
var Header_1 = __webpack_require__(/*! ./Header */ "./src/assets/scripts/components/Header/index.ts");
Object.defineProperty(exports, "Header", ({
  enumerable: true,
  get: function get() {
    return Header_1.Header;
  }
}));

/***/ }),

/***/ "./src/assets/scripts/config/config.api.ts":
/*!*************************************************!*\
  !*** ./src/assets/scripts/config/config.api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var api = {
  url: document.location.origin + document.location.pathname
};
exports["default"] = api;

/***/ }),

/***/ "./src/assets/scripts/config/config.app.ts":
/*!*************************************************!*\
  !*** ./src/assets/scripts/config/config.app.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var app = {
  name: 'Bomshop',
  debug: true
};
exports["default"] = app;

/***/ }),

/***/ "./src/assets/scripts/config/index.ts":
/*!********************************************!*\
  !*** ./src/assets/scripts/config/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var config_app_1 = __webpack_require__(/*! ./config.app */ "./src/assets/scripts/config/config.app.ts");
var config_api_1 = __webpack_require__(/*! ./config.api */ "./src/assets/scripts/config/config.api.ts");
exports["default"] = {
  app: config_app_1["default"],
  api: config_api_1["default"]
};

/***/ }),

/***/ "./src/assets/scripts/connector/exceptions/EventNotSupported.ts":
/*!**********************************************************************!*\
  !*** ./src/assets/scripts/connector/exceptions/EventNotSupported.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __extends = this && this.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return _extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    _extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var EventNotSupportedException = /** @class */function (_super) {
  __extends(EventNotSupportedException, _super);
  function EventNotSupportedException(message) {
    var _this = _super.call(this, message) || this;
    _this.name = 'EventNotSupportedException';
    return _this;
  }
  return EventNotSupportedException;
}(Error);
exports["default"] = EventNotSupportedException;

/***/ }),

/***/ "./src/assets/scripts/connector/index.ts":
/*!***********************************************!*\
  !*** ./src/assets/scripts/connector/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConnectorEvents = void 0;
var EventNotSupported_1 = __webpack_require__(/*! ./exceptions/EventNotSupported */ "./src/assets/scripts/connector/exceptions/EventNotSupported.ts");
exports.ConnectorEvents = ['click', 'hover', 'change', 'load', 'input'];
var Connector = /** @class */function () {
  function Connector() {}
  Connector.prototype.init = function (attribute, format) {
    this.attribute = attribute;
    this.format = format;
    this.items = [];
    this.elements = Array.prototype.slice.call(document.querySelectorAll("[".concat(attribute, "]")));
  };
  Connector.prototype.reinit = function (element) {
    var _this = this;
    if (element === void 0) {
      element = null;
    }
    if (!element) {
      element = document.body;
    }
    var elements = Array.prototype.slice.call(element.querySelectorAll("[".concat(this.attribute, "]")));
    elements.forEach(function (element) {
      element.getAttribute(_this.attribute).split(' ').forEach(function (attribute) {
        try {
          var name_1 = _this.parse('name', attribute);
          if (!_this.items[name_1]) {
            _this.items[name_1] = [];
          }
          _this.items[name_1].forEach(function (item) {
            if (!document.body.contains(item.element)) {
              _this.items[name_1] = _this.items[name_1].filter(function (_item) {
                return _item !== item;
              });
            }
          });
          var item = _this.items[name_1].push({
            id: _this.parse('id', attribute),
            name: _this.parse('name', attribute),
            type: _this.parse('type', attribute),
            event: _this.formatEvent(_this.parse('event', attribute)),
            data: element.dataset,
            element: element
          });
        } catch (err) {
          if (err.name === EventNotSupported_1["default"].name) window.dump(err.message, {
            element: element
          });
        }
      });
    });
  };
  Connector.prototype.parse = function (property, value) {
    switch (property) {
      case 'id':
        if (this.format.match(/{id}/g)[0]) {
          var id_1 = '';
          var endings_1 = this.format.match(/{id}(.*)/g)[0].replace(/{(?!(id))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{id}/g, '');
          });
          var startings = this.format.match(/(.*){id}/g)[0].replace(/{(?!(id))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{id}/g, '');
          });
          startings = [startings[startings.length - 1]];
          if (!startings.some(function (_char) {
            return _char !== '' && value.includes(_char);
          })) {
            return null;
          }
          startings.forEach(function (start) {
            if (start === '') {
              id_1 = value;
            } else {
              id_1 = value.split(start)[1];
            }
            endings_1.forEach(function (end) {
              if (end !== '') {
                if (!endings_1.some(function (_char2) {
                  return _char2 !== '' && id_1.split(end)[0].includes(_char2);
                })) {
                  id_1 = id_1.split(end)[0];
                }
              }
            });
          });
          return id_1;
        }
        return null;
      case 'name':
        if (this.format.match(/{name}/g)[0]) {
          var name_2 = '';
          var endings_2 = this.format.match(/{name}(.*)/g)[0].replace(/{(?!(name))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{name}/g, '');
          });
          var startings = this.format.match(/(.*){name}/g)[0].replace(/{(?!(name))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{name}/g, '');
          });
          startings.forEach(function (start) {
            if (start === '') {
              name_2 = value;
            } else {
              name_2 = value.split(start)[0];
            }
            endings_2.forEach(function (end) {
              if (end !== '') {
                if (!endings_2.some(function (_char3) {
                  return _char3 !== '' && name_2.split(end)[0].includes(_char3);
                })) {
                  name_2 = name_2.split(end)[0];
                }
              }
            });
          });
          return name_2;
        }
        return null;
      case 'type':
        if (this.format.match(/{type}/g)[0]) {
          var type_1 = '';
          var endings_3 = this.format.match(/{type}(.*)/g)[0].replace(/{(?!(type))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{type}/g, '');
          });
          var startings = this.format.match(/(.*){type}/g)[0].replace(/{(?!(type))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{type}/g, '');
          });
          startings = [startings[startings.length - 1]];
          if (!startings.some(function (_char4) {
            return _char4 !== '' && value.includes(_char4);
          })) {
            return null;
          }
          startings.forEach(function (start) {
            if (start === '') {
              type_1 = value;
            } else {
              type_1 = value.split(start)[1];
            }
            endings_3.forEach(function (end) {
              if (end !== '') {
                if (!endings_3.some(function (_char5) {
                  return _char5 !== '' && type_1.split(end)[0].includes(_char5);
                })) {
                  type_1 = type_1.split(end)[0];
                }
              }
            });
          });
          return type_1;
        }
        return null;
      case 'event':
        if (this.format.match(/{event}/g)[0]) {
          var event_1 = '';
          var endings_4 = this.format.match(/{event}(.*)/g)[0].replace(/{(?!(event))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{event}/g, '');
          });
          var startings = this.format.match(/(.*){event}/g)[0].replace(/{(?!(event))(.*?)}/g, '---').split('---').map(function (val) {
            return val.replace(/{event}/g, '');
          });
          startings = [startings[startings.length - 1]];
          if (!startings.some(function (_char6) {
            return _char6 !== '' && value.includes(_char6);
          })) {
            return null;
          }
          startings.forEach(function (start) {
            if (start === '') {
              event_1 = value;
            } else {
              event_1 = value.split(start)[1];
            }
            endings_4.forEach(function (end) {
              if (end !== '') {
                if (!endings_4.some(function (_char7) {
                  return _char7 !== '' && event_1.split(end)[0].includes(_char7);
                })) {
                  event_1 = event_1.split(end)[0];
                }
              }
            });
          });
          return event_1;
        }
        return null;
    }
  };
  Object.defineProperty(Connector.prototype, "elements", {
    set: function set(elements) {
      var _this = this;
      elements.forEach(function (element) {
        element.getAttribute(_this.attribute).split(' ').forEach(function (attribute) {
          try {
            var name_3 = _this.parse('name', attribute);
            if (!_this.items[name_3]) {
              _this.items[name_3] = [];
            }
            _this.items[name_3].push({
              id: _this.parse('id', attribute),
              name: _this.parse('name', attribute),
              type: _this.parse('type', attribute),
              event: _this.formatEvent(_this.parse('event', attribute)),
              data: element.dataset,
              element: element
            });
          } catch (err) {
            if (err.name === EventNotSupported_1["default"].name) window.dump(err.message, {
              element: element
            });
          }
        });
      });
    },
    enumerable: false,
    configurable: true
  });
  Connector.prototype.get = function (property, filters) {
    if (!property) return this.items;
    if (!this.items[property]) return [];
    if (filters) {
      var result = this.items[property].filter(function (item) {
        var condition = true;
        if (filters['id'] !== undefined) {
          condition = condition && item.id === filters.id;
        }
        if (filters['event'] !== undefined) {
          condition = condition && (item.event === null && filters.event === null || item.event.event === filters.event);
        }
        if (filters['fullEvent'] !== undefined) {
          condition = condition && filters.fullEvent && item.event && filters.fullEvent.params[0] === item.event.params[0] && filters.fullEvent.params[1] === item.event.params[1] && filters.fullEvent.event === item.event.event;
        }
        if (filters['type'] !== undefined) {
          condition = condition && item.type === filters.type;
        }
        return condition;
      });
      return result;
    }
    return this.items[property] || [];
  };
  Connector.prototype.formatEvent = function (value) {
    if (!value) return null;
    var event = value.split('(')[0];
    var params = value.split('(')[1] ? value.split('(')[1].split(')')[0].replace(' ', '').split(',') : [];
    if (!exports.ConnectorEvents.includes(event)) {
      throw new EventNotSupported_1["default"]("".concat(event, " nen\xED podporovan\xFD event"));
    }
    return {
      event: event,
      params: params
    };
  };
  return Connector;
}();
exports["default"] = new Connector();

/***/ }),

/***/ "./src/assets/scripts/index.ts":
/*!*************************************!*\
  !*** ./src/assets/scripts/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var components_1 = __webpack_require__(/*! ./components */ "./src/assets/scripts/components/index.ts");
var actions_1 = __webpack_require__(/*! ./actions */ "./src/assets/scripts/actions/index.ts");
var config_1 = __webpack_require__(/*! ./config */ "./src/assets/scripts/config/index.ts");
var connector_1 = __webpack_require__(/*! ./connector */ "./src/assets/scripts/connector/index.ts");
var ajax_1 = __webpack_require__(/*! ./ajax */ "./src/assets/scripts/ajax/index.ts");
var ProductResource_1 = __webpack_require__(/*! ./ajax/resources/Cart/ProductResource */ "./src/assets/scripts/ajax/resources/Cart/ProductResource.ts");
var WishlistResource_1 = __webpack_require__(/*! ./ajax/resources/WishlistResource */ "./src/assets/scripts/ajax/resources/WishlistResource.ts");
var GiftResource_1 = __webpack_require__(/*! ./ajax/resources/Cart/GiftResource */ "./src/assets/scripts/ajax/resources/Cart/GiftResource.ts");
var ShopResource_1 = __webpack_require__(/*! ./ajax/resources/ShopResource */ "./src/assets/scripts/ajax/resources/ShopResource.ts");
var Template_1 = __webpack_require__(/*! ./components/Template */ "./src/assets/scripts/components/Template/index.ts");
var Variable_1 = __webpack_require__(/*! ./components/Variable */ "./src/assets/scripts/components/Variable/index.ts");
var SearchResource_1 = __webpack_require__(/*! ./ajax/resources/SearchResource */ "./src/assets/scripts/ajax/resources/SearchResource.ts");
var BillingInformationResource_1 = __webpack_require__(/*! ./ajax/resources/Cart/BillingInformationResource */ "./src/assets/scripts/ajax/resources/Cart/BillingInformationResource.ts");
var CheckoutResource_1 = __webpack_require__(/*! ./ajax/resources/Cart/CheckoutResource */ "./src/assets/scripts/ajax/resources/Cart/CheckoutResource.ts");
window.dump = function (value, options) {
  if (config_1["default"].app.debug) console.debug(value, options || "");
};
connector_1["default"].init("js-id", "{name}::{type}@{event}#{id}");
components_1.Carousel.init("carousel", {
  type: "slide",
  rewind: true,
  arrows: false,
  pagination: false,
  keyboard: true,
  gap: 24,
  breakpoints: {
    478: {
      gap: 12
    }
  }
});
components_1.Modal.init("modal", {
  gallery: {
    icon_close: "far fa-times",
    icon_left: "far fa-chevron-left",
    icon_right: "far fa-chevron-right"
  }
});
components_1.Input.init("input", {
  number: {
    icon_up: "far fa-chevron-up",
    icon_down: "far fa-chevron-down"
  },
  file: {
    icon_file: "far fa-file"
  }
});
actions_1["default"].init("action", {
  actions: {
    remove: actions_1.Remove,
    show: actions_1.Show,
    connect: actions_1.Connect,
    collapse: actions_1.Collapse,
    fb_track: actions_1.FacebookTrack,
    writing_effect: actions_1.WritingEffect,
    popup_message: actions_1.PopupMessage
  }
});
components_1.Header.init("header");
components_1.Menu.init("menu");
components_1.Dropdown.init("dropdown");
components_1.Tabs.init("tab");
Template_1.Template.init("template");
Variable_1.Variable.init("variable");
ajax_1["default"].init("ajax", {
  resources: {
    "front.cart.products": ProductResource_1["default"],
    "front.cart.gifts": GiftResource_1["default"],
    "front.cart.checkout": CheckoutResource_1["default"],
    "front.cart.billing-information": BillingInformationResource_1["default"],
    "front.search": SearchResource_1["default"],
    "front.wishlist": WishlistResource_1["default"],
    "front.shop": ShopResource_1["default"]
  }
});
self.addEventListener("load", function () {
  document.body.classList.remove("is-loading");
});

/***/ }),

/***/ "./src/assets/scripts/utils/index.ts":
/*!*******************************************!*\
  !*** ./src/assets/scripts/utils/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var utils_string_1 = __webpack_require__(/*! ./utils.string */ "./src/assets/scripts/utils/utils.string.ts");
exports["default"] = {
  str: utils_string_1["default"]
};

/***/ }),

/***/ "./src/assets/scripts/utils/utils.ajax.ts":
/*!************************************************!*\
  !*** ./src/assets/scripts/utils/utils.ajax.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * ----------------------------------------
 * Ajax class is for formating requests and
 * responses made by certain axios instance
 * ----------------------------------------
 */
var Axios = /** @class */function () {
  function Axios(axios) {
    this.axios = axios;
  }
  Axios.prototype.get = function (path, config) {
    return __awaiter(this, void 0, void 0, function () {
      var response, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            return [4 /*yield*/, this.axios.get(path, config)];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, {
              error: false,
              status: response.status,
              data: response.data
            }];
          case 2:
            return [2 /*return*/, _a.sent()];
          case 3:
            e_1 = _a.sent();
            return [2 /*return*/, {
              error: e_1.message,
              status: e_1.response.status,
              data: e_1.response.data
            }];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };

  Axios.prototype.post = function (path, data, config) {
    return __awaiter(this, void 0, void 0, function () {
      var response, e_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 3,, 4]);
            return [4 /*yield*/, this.axios.post(path, data, config)];
          case 1:
            response = _a.sent();
            return [4 /*yield*/, {
              error: false,
              status: response.status,
              data: response.data
            }];
          case 2:
            return [2 /*return*/, _a.sent()];
          case 3:
            e_2 = _a.sent();
            return [2 /*return*/, {
              error: e_2.message,
              status: e_2.response.status,
              data: e_2.response.data
            }];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };

  return Axios;
}();
exports["default"] = Axios;

/***/ }),

/***/ "./src/assets/scripts/utils/utils.string.ts":
/*!**************************************************!*\
  !*** ./src/assets/scripts/utils/utils.string.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
function random(length) {
  if (length === void 0) {
    length = 5;
  }
  return Math.random().toString(36).slice(2, 2 + length);
}
exports["default"] = {
  random: random
};

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = __webpack_require__.g.TYPED_ARRAY_SUPPORT !== undefined
  ? __webpack_require__.g.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./src/assets/styles/index.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/index.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/scripts/index": 0,
/******/ 			"assets/styles/index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksoftware_eshop"] = self["webpackChunksoftware_eshop"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/styles/index"], () => (__webpack_require__("./src/assets/scripts/index.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/styles/index"], () => (__webpack_require__("./src/assets/styles/index.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;