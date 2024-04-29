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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MobileMenu: () => (/* binding */ MobileMenu)\n/* harmony export */ });\nclass MobileMenu {\n    mobileMenuTrigger;\n    mobileMenuActiveClass;\n    backdrop;\n    navigation;\n    open;\n    firstFocusableElement = null;\n    lastFocusableElement = null;\n    constructor(mobileMenuTrigger) {\n        this.mobileMenuTrigger = mobileMenuTrigger;\n        this.mobileMenuActiveClass = \"mobile-menu-active\";\n        this.backdrop = document.getElementById(\"backdrop\");\n        this.navigation = document.getElementById(\"navigation\");\n        this.open = false;\n    }\n    init() {\n        this.mobileMenuTrigger.addEventListener(\"click\", this.openMobileMenu.bind(this));\n        document.addEventListener(\"keydown\", (event) => {\n            if (event.key === \"Escape\") {\n                this.closeMobileMenu();\n            }\n        });\n        if (this.backdrop) {\n            this.backdrop.addEventListener(\"click\", () => {\n                this.closeMobileMenu();\n            });\n        }\n        if (this.navigation && this.navigation instanceof HTMLElement) {\n            this.navigation.addEventListener(\"transitionend\", this.handleVisibilityChange.bind(this));\n            this.handleVisibilityChange();\n        }\n    }\n    openMobileMenu() {\n        document.body.classList.add(this.mobileMenuActiveClass);\n        this.open = true;\n        this.mobileMenuTrigger.setAttribute(\"aria-expanded\", \"true\");\n        this.updateFocusableElements();\n        this.firstFocusableElement?.focus();\n    }\n    closeMobileMenu() {\n        document.body.classList.remove(this.mobileMenuActiveClass);\n        this.open = false;\n        this.mobileMenuTrigger.setAttribute(\"aria-expanded\", \"false\");\n        this.mobileMenuTrigger.focus();\n        this.navigation.style.visibility = \"hidden\";\n    }\n    handleVisibilityChange() {\n        if (this.open) {\n            this.navigation.style.visibility = \"visible\";\n        }\n    }\n    updateFocusableElements() {\n        const elements = this.navigation?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])');\n        if (!elements || elements.length === 0)\n            return;\n        this.firstFocusableElement = elements[0];\n        this.lastFocusableElement = elements[elements.length - 1];\n        document.addEventListener(\"keydown\", this.trapTabKey);\n    }\n    trapTabKey = (event) => {\n        console.log(\"EXECUTING\");\n        if (event.key !== \"Tab\")\n            return;\n        if (event.shiftKey) {\n            if (document.activeElement === this.firstFocusableElement) {\n                event.preventDefault();\n                this.lastFocusableElement?.focus();\n            }\n        }\n        else {\n            if (document.activeElement === this.lastFocusableElement) {\n                event.preventDefault();\n                this.firstFocusableElement?.focus();\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZS8uL3NyYy90cy9tb2JpbGUtbWVudS50cz9lOTNjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNb2JpbGVNZW51IHtcclxuICAgIHByaXZhdGUgbW9iaWxlTWVudVRyaWdnZXI6IEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIG1vYmlsZU1lbnVBY3RpdmVDbGFzczogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBiYWNrZHJvcDogRWxlbWVudCB8IG51bGw7XHJcbiAgICBwcml2YXRlIG5hdmlnYXRpb246IEVsZW1lbnQgfCBudWxsO1xyXG4gICAgcHJpdmF0ZSBvcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBmaXJzdEZvY3VzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxhc3RGb2N1c2FibGVFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vYmlsZU1lbnVUcmlnZ2VyOiBFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51VHJpZ2dlciA9IG1vYmlsZU1lbnVUcmlnZ2VyO1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudUFjdGl2ZUNsYXNzID0gXCJtb2JpbGUtbWVudS1hY3RpdmVcIjtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZHJvcFwiKTtcclxuICAgICAgICB0aGlzLm5hdmlnYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdmlnYXRpb25cIik7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51VHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vcGVuTW9iaWxlTWVudS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZU1vYmlsZU1lbnUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmJhY2tkcm9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VNb2JpbGVNZW51KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5uYXZpZ2F0aW9uICYmIHRoaXMubmF2aWdhdGlvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMubmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgICAgICAgICAgXCJ0cmFuc2l0aW9uZW5kXCIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UuYmluZCh0aGlzKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3Blbk1vYmlsZU1lbnUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRoaXMubW9iaWxlTWVudUFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW9iaWxlTWVudVRyaWdnZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGb2N1c2FibGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50Py5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xvc2VNb2JpbGVNZW51KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm1vYmlsZU1lbnVBY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tb2JpbGVNZW51VHJpZ2dlci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgKHRoaXMubW9iaWxlTWVudVRyaWdnZXIgYXMgSFRNTEVsZW1lbnQpLmZvY3VzKCk7XHJcbiAgICAgICAgKHRoaXMubmF2aWdhdGlvbiBhcyBIVE1MRWxlbWVudCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wZW4pIHtcclxuICAgICAgICAgICAgKHRoaXMubmF2aWdhdGlvbiBhcyBIVE1MRWxlbWVudCkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZUZvY3VzYWJsZUVsZW1lbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5uYXZpZ2F0aW9uPy5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgICAgICAnYnV0dG9uLCBbaHJlZl0sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFlbGVtZW50cyB8fCBlbGVtZW50cy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZUVsZW1lbnQgPSBlbGVtZW50c1swXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICB0aGlzLmxhc3RGb2N1c2FibGVFbGVtZW50ID0gZWxlbWVudHNbZWxlbWVudHMubGVuZ3RoIC0gMV0gYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMudHJhcFRhYktleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0cmFwVGFiS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFWEVDVVRJTkdcIik7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSAhPT0gXCJUYWJcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRoaXMuZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0Rm9jdXNhYmxlRWxlbWVudD8uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSB0aGlzLmxhc3RGb2N1c2FibGVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEZvY3VzYWJsZUVsZW1lbnQ/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ts/mobile-menu.ts\n");

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