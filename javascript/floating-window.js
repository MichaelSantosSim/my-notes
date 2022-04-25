// ==UserScript==
// @name         Floating menu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a custom floating menu (custom from w3school)
// @author       Michael Sim
// @match        https://<put-website-here>/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

/*
  Creates a floating window you can customize and add to tampermonkey or greasemonkey
  You'll need to configure only the following:
  HEADER_TEXT: Text that appears on window title
  STYLE: Optional. You can add css style, do not remove existing code
  HTML_MENU: The content of the window in html format
  customCode(): you can add your custom code
  
  
  Note: remember to update the UserScript content before usage
  
*/

var HEADER_TEXT = "=== Debug menu ===";
var STYLE = `#floating-menu {
                         position: absolute;
                         z-index: 9;
                         background-color: rgb(237 233 209);
                         text-align: center;
                         border: 2px solid #d3d3d3;
                      }


                      #floating-menu-header {
                         padding: 10px;
                         cursor: move;
                         z-index: 10;
                         font-weight: bold;
                         font-family: "Lucida Console", "Courier New", monospace;
                         background: linear-gradient(to top, rgb(64 152 216) 0%, #002bfffc 100%);
                         color: #fff;
                         display: flex;
                         justify-content: space-between;
                      }
                      #btn-collapse{
                         margin-right: 10px;
                         margin-left: 10px;
                      }
                      .invisible {
                       display: none;
                       }
                       .resizable{
                         resize: both;
                         overflow: auto;
                       }`;
var HTML_MENU = `
  <p><button id="alert-btn">Update variables</button></p>
`;

function customCode(){
    document.querySelector("#alert-btn").addEventListener('click', () => {
        let items = ["The RNG gods smile upon us!", 
                     "Greetings, traveler from beyond the fog", 
                     "Get the fire extinguisher",
                     "Random numbers should not be generated with a method chosen at random.",
                     "So much of life, it seems to me, is determined by pure randomness."
                    ];
        let ans = items[Math.floor(Math.random()*items.length)];
        alert(ans);
    });
}

function initCssClasses(){
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.innerHTML = STYLE;
    document.getElementsByTagName('head')[0].appendChild(styleElement);
}

function createMenu(){
    // create floating menu
    let menu = document.createElement("div");
    menu.setAttribute("id", "floating-menu");
        // menu header
    let menuHeader = document.createElement("div");
    menuHeader.setAttribute("id", "floating-menu-header");
    menuHeader.innerText = HEADER_TEXT;
    menu.prepend(menuHeader);
    // menu body (collapsible)
    let menuBody = document.createElement("div");
    menuBody.setAttribute("id", "floating-menu-body");
    menuBody.setAttribute("class", "resizable");
    menuBody.innerHTML = HTML_MENU;
    menu.appendChild(menuBody);

    let collapseButton = document.createElement("button");
    collapseButton.setAttribute("id", "btn-collapse");
    collapseButton.innerText = "_";
    collapseButton.addEventListener('click', () => {
        menuBody.classList.toggle('invisible');
        menuBody.classList.toggle('resizable');
    });
    menuHeader.appendChild(collapseButton);

    document.getElementsByTagName('body')[0].appendChild(menu);
    // colapse menu
    dragElement(menu);
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "-header")) {
            document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
        } else {
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
}

(function() {
    'use strict';
    initCssClasses();
    createMenu();
    customCode();
})();
