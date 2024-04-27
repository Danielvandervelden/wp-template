/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/mobile-menu.ts":
/*!*******************************!*\
  !*** ./src/ts/mobile-menu.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MobileMenu: () => (/* binding */ MobileMenu)\n/* harmony export */ });\nclass MobileMenu {\n    mobileMenuTrigger;\n    mobileMenuActiveClass;\n    backdrop;\n    navigation;\n    open;\n    firstFocusableElement = null;\n    lastFocusableElement = null;\n    constructor(mobileMenuTrigger) {\n        this.mobileMenuTrigger = mobileMenuTrigger;\n        this.mobileMenuActiveClass = \"mobile-menu-active\";\n        this.backdrop = document.getElementById(\"backdrop\");\n        this.navigation = document.getElementById(\"navigation\");\n        this.open = false;\n    }\n    init() {\n        this.mobileMenuTrigger.addEventListener(\"click\", this.openMobileMenu.bind(this));\n        document.addEventListener(\"keydown\", (event) => {\n            if (event.key === \"Escape\") {\n                this.closeMobileMenu();\n            }\n        });\n        if (this.backdrop) {\n            this.backdrop.addEventListener(\"click\", () => {\n                this.closeMobileMenu();\n            });\n        }\n        if (this.navigation && this.navigation instanceof HTMLElement) {\n            this.navigation.addEventListener(\"transitionend\", this.handleVisibilityChange.bind(this));\n            this.handleVisibilityChange();\n        }\n    }\n    openMobileMenu() {\n        document.body.classList.add(this.mobileMenuActiveClass);\n        this.open = true;\n        this.mobileMenuTrigger.setAttribute(\"aria-expanded\", \"true\");\n        this.updateFocusableElements();\n        this.firstFocusableElement?.focus();\n    }\n    closeMobileMenu() {\n        document.body.classList.remove(this.mobileMenuActiveClass);\n        this.open = false;\n        this.mobileMenuTrigger.setAttribute(\"aria-expanded\", \"false\");\n        this.mobileMenuTrigger.focus();\n        this.navigation.style.visibility = \"hidden\";\n        // document.removeEventListener(\"keydown\", this.trapTabKey);\n    }\n    handleVisibilityChange() {\n        if (this.open) {\n            this.navigation.style.visibility = \"visible\";\n        }\n    }\n    updateFocusableElements() {\n        const elements = this.navigation?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n        if (!elements || elements.length === 0)\n            return;\n        this.firstFocusableElement = elements[0];\n        this.lastFocusableElement = elements[elements.length - 1];\n        document.addEventListener(\"keydown\", this.trapTabKey);\n    }\n    trapTabKey = (event) => {\n        console.log(\"EXECUTING\");\n        if (event.key !== \"Tab\")\n            return;\n        if (event.shiftKey) {\n            if (document.activeElement === this.firstFocusableElement) {\n                event.preventDefault();\n                this.lastFocusableElement?.focus();\n            }\n        }\n        else {\n            if (document.activeElement === this.lastFocusableElement) {\n                event.preventDefault();\n                this.firstFocusableElement?.focus();\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly90aGVtZW5hbWUvLi9zcmMvdHMvbW9iaWxlLW1lbnUudHM/ZTkzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9iaWxlTWVudSB7XHJcbiAgICBwcml2YXRlIG1vYmlsZU1lbnVUcmlnZ2VyOiBFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBtb2JpbGVNZW51QWN0aXZlQ2xhc3M6IHN0cmluZztcclxuICAgIHByaXZhdGUgYmFja2Ryb3A6IEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBuYXZpZ2F0aW9uOiBFbGVtZW50IHwgbnVsbDtcclxuICAgIHByaXZhdGUgb3BlbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZmlyc3RGb2N1c2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBsYXN0Rm9jdXNhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihtb2JpbGVNZW51VHJpZ2dlcjogRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudVRyaWdnZXIgPSBtb2JpbGVNZW51VHJpZ2dlcjtcclxuICAgICAgICB0aGlzLm1vYmlsZU1lbnVBY3RpdmVDbGFzcyA9IFwibW9iaWxlLW1lbnUtYWN0aXZlXCI7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2Ryb3BcIik7XHJcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZpZ2F0aW9uXCIpO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KCkge1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudVRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMub3Blbk1vYmlsZU1lbnUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5iYWNrZHJvcCkge1xyXG4gICAgICAgICAgICB0aGlzLmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTW9iaWxlTWVudSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmF2aWdhdGlvbiAmJiB0aGlzLm5hdmlnYXRpb24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLm5hdmlnYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvbmVuZFwiLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlLmJpbmQodGhpcylcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9wZW5Nb2JpbGVNZW51KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0aGlzLm1vYmlsZU1lbnVBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vYmlsZU1lbnVUcmlnZ2VyLnNldEF0dHJpYnV0ZShcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRm9jdXNhYmxlRWxlbWVudHMoKTtcclxuICAgICAgICB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudD8uZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsb3NlTW9iaWxlTWVudSgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5tb2JpbGVNZW51QWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudVRyaWdnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICh0aGlzLm1vYmlsZU1lbnVUcmlnZ2VyIGFzIEhUTUxFbGVtZW50KS5mb2N1cygpO1xyXG4gICAgICAgICh0aGlzLm5hdmlnYXRpb24gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG5cclxuICAgICAgICAvLyBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnRyYXBUYWJLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgICAgICAgICh0aGlzLm5hdmlnYXRpb24gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVGb2N1c2FibGVFbGVtZW50cygpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMubmF2aWdhdGlvbj8ucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgJ2J1dHRvbiwgW2hyZWZdLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSwgW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJ1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmICghZWxlbWVudHMgfHwgZWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZWxlbWVudHNbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudCA9IGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLnRyYXBUYWJLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJhcFRhYktleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRVhFQ1VUSU5HXCIpO1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgIT09IFwiVGFiXCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmZpcnN0Rm9jdXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEZvY3VzYWJsZUVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Py5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/mobile-menu.ts\n");

/***/ }),

/***/ "./src/ts/script.ts":
/*!**************************!*\
  !*** ./src/ts/script.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mobile-menu */ \"./src/ts/mobile-menu.ts\");\n\nconst mobileMenuTrigger = document.querySelector(\"#mobile-menu-trigger\");\nif (mobileMenuTrigger) {\n    const mobileMenuInstance = new _mobile_menu__WEBPACK_IMPORTED_MODULE_0__.MobileMenu(mobileMenuTrigger);\n    mobileMenuInstance.init();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHMvc2NyaXB0LnRzIiwibWFwcGluZ3MiOiI7O0FBQTJDO0FBRTNDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRXpFLElBQUksaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixNQUFNLGtCQUFrQixHQUFHLElBQUksb0RBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdELGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVtZW5hbWUvLi9zcmMvdHMvc2NyaXB0LnRzPzkxMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gXCIuL21vYmlsZS1tZW51XCI7XHJcblxyXG5jb25zdCBtb2JpbGVNZW51VHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW9iaWxlLW1lbnUtdHJpZ2dlclwiKTtcclxuXHJcbmlmIChtb2JpbGVNZW51VHJpZ2dlcikge1xyXG4gICAgY29uc3QgbW9iaWxlTWVudUluc3RhbmNlID0gbmV3IE1vYmlsZU1lbnUobW9iaWxlTWVudVRyaWdnZXIpO1xyXG4gICAgbW9iaWxlTWVudUluc3RhbmNlLmluaXQoKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ts/script.ts\n");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/script.ts");
/******/ 	
/******/ })()
;