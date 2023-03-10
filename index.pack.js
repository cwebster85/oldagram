/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var posts = [{
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    liked: false
}, {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    liked: false
}, {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    liked: false
}];

var postsEl = document.getElementById("posts-el");

function render() {
    for (var i = 0; i < posts.length; i++) {
        postsEl.innerHTML += "<section id=\"user-details\">\n                <img id=\"posts-avatar\" src=" + posts[i].avatar + ">\n                <div id=\"container\">\n                    <p id=\"posts-name\">" + posts[i].name + "</p>\n                    <p id=\"posts-location\">" + posts[i].location + "</p>\n                </div>\n            </section>\n            <section>\n                <div id=\"img-container\">\n                    <img id=\"posts-image\" src=" + posts[i].post + ">\n                </div>\n            </section>\n                <div id=\"icons-container\">\n                    <img class=\"post-interaction-icon\" src=\"" + (posts[i].liked ? "images/red-heart-icon.png" : "images/icon-heart.png") + "\" alt=\"heart icon\" onclick=\"likePost(" + i + ")\">\n\n                    <img class=\"icon comm\" src=\"images/icon-comment.png\" alt=\"icon\">\n                    <img class=\"icon msg\" src=\"images/icon-dm.png\" alt=\"dm\">\n                </div>\n                <p id=\"posts-likes\">" + posts[i].likes + " likes</p>\n            <div id=\"comments-container\">\n                <p id=\"posts-username\">" + posts[i].username + "</p>\n                <p id=\"posts-comment\">" + posts[i].comment + "</p>\n            </div>";
    }
}

render();

function refreshPosts() {
    postsEl.innerHTML = "";
    render();
}

function likePost(postIndex) {
    if (!posts[postIndex].liked) {
        posts[postIndex].likes++;
        posts[postIndex].liked = true;
    } else {
        posts[postIndex].likes--;
        posts[postIndex].liked = false;
    }

    refreshPosts();
}

/***/ })
/******/ ]);