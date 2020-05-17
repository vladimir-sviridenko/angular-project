(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");



class AppComponent {
    constructor() {
        this.title = 'angular-project';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo");
    } }, directives: [_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo.module */ "./src/app/todo/todo.module.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _todo_todo_module__WEBPACK_IMPORTED_MODULE_3__["TodoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _todo_todo_module__WEBPACK_IMPORTED_MODULE_3__["TodoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _todo_todo_module__WEBPACK_IMPORTED_MODULE_3__["TodoModule"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/todo/help/help.component.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/help/help.component.ts ***!
  \*********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");






class HelpComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 16, vars: 0, consts: [[1, "help"], [1, "help__title"], ["aria-label", "mouse tips", "color", "primary"], [1, "help__item"], ["mat-line", ""]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "mouse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mouse tips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Complete todo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Left click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit todo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Right click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatList"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"]], styles: [".help__title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n.help__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.help__item[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZsYWRpbWlyL0RvY3VtZW50cy9Gcm9udEVuZC92bGFkaW1pcl9zdmlyaWRlbmtvLWh0bWwvYW5ndWxhci1wcm9qZWN0L3NyYy9hcHAvdG9kby9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RvZG8vaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RKO0FERUk7RUFDRSwrQkFBQTtBQ0FOIiwiZmlsZSI6InNyYy9hcHAvdG9kby9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVscCB7XG4gICZfX3RpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIH1cbiAgfVxufVxuIiwiLmhlbHBfX3RpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmhlbHBfX2l0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlbHBfX2l0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todo/shared/autofocus.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/todo/shared/autofocus.directive.ts ***!
  \****************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AutofocusDirective {
    constructor(element) {
        this.element = element;
    }
    ngOnInit() {
        window.setTimeout(() => {
            this.element.nativeElement.focus();
        });
    }
}
AutofocusDirective.ɵfac = function AutofocusDirective_Factory(t) { return new (t || AutofocusDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AutofocusDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutofocusDirective, selectors: [["", "appAutofocus", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutofocusDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAutofocus]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todo/shared/open-close.animation.ts":
/*!*****************************************************!*\
  !*** ./src/app/todo/shared/open-close.animation.ts ***!
  \*****************************************************/
/*! exports provided: openCloseAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openCloseAnimation", function() { return openCloseAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const openCloseAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ])
    ])
];


/***/ }),

/***/ "./src/app/todo/shared/todo.service.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/shared/todo.service.ts ***!
  \*********************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class TodoService {
    constructor() {
        this.todoList = [];
        this.todoListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = false;
    }
    getInitialTodoList() {
        const todoList = [
            { id: 1, title: 'Learn HTML and CSS', completed: true, date: new Date(2018, 8, 10) },
            { id: 2, title: 'Learn Java Script', completed: true, date: new Date(2018, 10, 2) },
            { id: 3, title: 'Learn Angular', completed: true, date: new Date(2019, 4, 6) },
            { id: 4, title: 'Create online shop of furniture', completed: false, date: new Date(2019, 5, 6) },
            { id: 5, title: 'Pass interview', completed: false, date: new Date(2019, 6, 6) },
            { id: 6, title: 'Get lots of money', completed: false, date: new Date(2019, 11, 15) }
        ];
        return todoList;
    }
    getTodoListObservable() {
        return this.todoListSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(todoList => {
            this.todoList = todoList;
            this.isLoading = false;
        }));
    }
    save() {
        localStorage.setItem('todo', JSON.stringify(this.todoList));
        const todoDates = this.todoList.map((todo) => +todo.date);
        localStorage.setItem('todoDates', JSON.stringify(todoDates));
    }
    load() {
        this.isLoading = true;
        setTimeout(() => {
            let todoList;
            let todoDates;
            try {
                todoList = JSON.parse(localStorage.getItem('todo'));
                todoDates = JSON.parse(localStorage.getItem('todoDates'));
            }
            catch (_a) {
                todoList = null;
                todoDates = null;
            }
            if (todoList && todoDates) {
                for (let i = 0; i < todoList.length; i++) {
                    todoList[i].date = new Date(todoDates[i]);
                }
            }
            else {
                todoList = this.getInitialTodoList();
            }
            this.todoListSubject.next(todoList);
        }, 400);
    }
    addTodo(title) {
        const date = new Date();
        const id = +date;
        this.todoList.push({ id, title, completed: false, date });
        this.todoListSubject.next(this.todoList);
    }
    removeTodo(id) {
        this.todoList = this.todoList.filter((todo) => todo.id !== id);
        this.todoListSubject.next(this.todoList);
    }
    isSaved() {
        return localStorage.getItem('todo') === JSON.stringify(this.todoList);
    }
    isValidTodo(title) {
        return title !== '';
    }
}
TodoService.ɵfac = function TodoService_Factory(t) { return new (t || TodoService)(); };
TodoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodoService, factory: TodoService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/todo/todo-form/todo-form.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-form/todo-form.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFormComponent", function() { return TodoFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class TodoFormComponent {
    constructor() {
        this.title = '';
        this.canAdd = false;
        this.titleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.add = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onAdd() {
        this.add.emit();
    }
    onClear() {
        this.clear.emit();
    }
    isEmptyTitle() {
        return this.title === '';
    }
    onTitleChange(model) {
        this.title = model;
        this.titleChange.emit(model);
    }
}
TodoFormComponent.ɵfac = function TodoFormComponent_Factory(t) { return new (t || TodoFormComponent)(); };
TodoFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoFormComponent, selectors: [["app-todo-form"]], inputs: { title: "title", canAdd: "canAdd" }, outputs: { titleChange: "titleChange", add: "add", clear: "clear" }, decls: 12, vars: 3, consts: [[1, "todo-form"], ["appearance", "outline", 1, "todo-form__field"], ["matInput", "", "type", "text", "placeholder", "Todo...", "color", "primary", 3, "ngModel", "ngModelChange", "keydown.enter"], ["matSuffix", "", 1, "todo-form__buttons"], ["mat-icon-button", "", "aria-label", "add todo", "color", "primary", 3, "disabled", "click"], [1, "todo-form__icon", "todo-form__icon_add"], ["mat-icon-button", "", "color", "warn", "aria-label", "clear field", 3, "disabled", "click"], [1, "todo-form__icon", "todo-form__icon_close"]], template: function TodoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "What needs to be done?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoFormComponent_Template_input_ngModelChange_4_listener($event) { return ctx.onTitleChange($event); })("keydown.enter", function TodoFormComponent_Template_input_keydown_enter_4_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFormComponent_Template_button_click_6_listener() { return ctx.onAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoFormComponent_Template_button_click_9_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.canAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isEmptyTitle());
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".todo-form__field[_ngcontent-%COMP%] {\n  width: 85vw;\n  max-width: 600px;\n  font-size: 17px;\n}\n.todo-form__field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0.8em;\n}\n.todo-form__field[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: 100%;\n}\n.todo-form__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.todo-form__icon_close[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZsYWRpbWlyL0RvY3VtZW50cy9Gcm9udEVuZC92bGFkaW1pcl9zdmlyaWRlbmtvLWh0bWwvYW5ndWxhci1wcm9qZWN0L3NyYy9hcHAvdG9kby90b2RvLWZvcm0vdG9kby1mb3JtLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmxhZGltaXIvRG9jdW1lbnRzL0Zyb250RW5kL3ZsYWRpbWlyX3N2aXJpZGVua28taHRtbC9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC90b2RvL3NoYXJlZC90b2RvLnZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8tZm9ybS90b2RvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxXQ0hTO0VESVQsZ0JDTGE7RURPYixlQUFBO0FFSEo7QUZLSTtFQUNFLHFCQUFBO0FFSE47QUZNSTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FFSk47QUZRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FFTko7QUZVSTtFQUNFLGVBQUE7QUVSTiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1mb3JtL3RvZG8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9zaGFyZWQvdG9kby52YXJpYWJsZXNcIjtcblxuLnRvZG8tZm9ybSB7XG4gICZfX2ZpZWxkIHtcbiAgICB3aWR0aDogJHRvZG8td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkdG9kby1tYXgtd2lkdGg7XG5cbiAgICBmb250LXNpemU6IDE3cHg7XG5cbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cblxuICAmX19idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAmX19pY29uIHtcbiAgICAmX2Nsb3NlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gIH1cbn1cbiIsIiR0b2RvLW1heC13aWR0aDogNjAwcHg7XG4kdG9kby13aWR0aDogODV2dztcblxuJGNvbG9yLXByaW1hcnk6ICMwZDQ3YTE7IiwiLnRvZG8tZm9ybV9fZmllbGQge1xuICB3aWR0aDogODV2dztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLnRvZG8tZm9ybV9fZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAuOGVtO1xufVxuLnRvZG8tZm9ybV9fZmllbGQgLm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvZG8tZm9ybV9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvZG8tZm9ybV9faWNvbl9jbG9zZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-form',
                templateUrl: './todo-form.component.html',
                styleUrls: ['./todo-form.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], add: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], clear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todo/todo-item/todo-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-item/todo-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_open_close_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/open-close.animation */ "./src/app/todo/shared/open-close.animation.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/autofocus.directive */ "./src/app/todo/shared/autofocus.directive.ts");












function TodoItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.todo.title);
} }
function TodoItemComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function TodoItemComponent_mat_form_field_4_Template_input_keydown_enter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onToggleEditMode($event); })("ngModelChange", function TodoItemComponent_mat_form_field_4_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.todo.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("todo-item__edit-input_completed", ctx_r1.todo.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.todo.title);
} }
function TodoItemComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onToggleEditMode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoItemComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_button_10_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onToggleEditMode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TodoItemComponent {
    constructor() {
        this.check = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleEditMode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onCheck($event) {
        this.check.emit($event);
    }
    onToggleEditMode($event) {
        this.toggleEditMode.emit($event);
    }
    onRemove($event) {
        this.remove.emit($event);
    }
}
TodoItemComponent.ɵfac = function TodoItemComponent_Factory(t) { return new (t || TodoItemComponent)(); };
TodoItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoItemComponent, selectors: [["app-todo-item"]], inputs: { todo: "todo", isEditMode: "isEditMode" }, outputs: { check: "check", toggleEditMode: "toggleEditMode", remove: "remove" }, decls: 14, vars: 16, consts: [["mat-list-item", "", "disableRipple", "", 1, "todo-item", 3, "click", "contextmenu"], [1, "todo-item__container"], ["disableRipple", "", "color", "primary", 1, "todo-item__checkbox", 3, "checked", "click"], ["class", "todo-item__title", 4, "ngIf"], ["class", "todo-item__edit-field", 4, "ngIf"], [1, "todo-item__date"], [1, "todo-item__buttons"], ["mat-icon-button", "", "color", "primary", "aria-label", "edit todo", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "check todo", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "remove todo", "disableRipple", "", "color", "warn", 3, "click"], [1, "todo-item__title"], [1, "todo-item__edit-field"], ["type", "text", "spellcheck", "false", "matInput", "", "appAutofocus", "", 1, "todo-item__edit-input", 3, "ngModel", "keydown.enter", "ngModelChange"], ["mat-icon-button", "", "color", "primary", "aria-label", "edit todo", 3, "click"], ["mat-icon-button", "", "aria-label", "check todo", 3, "click"], [1, "todo-item__icon", "todo-item__icon_check"]], template: function TodoItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_0_listener($event) { return ctx.onCheck($event); })("contextmenu", function TodoItemComponent_Template_button_contextmenu_0_listener($event) { return ctx.onToggleEditMode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_mat_checkbox_click_2_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TodoItemComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TodoItemComponent_mat_form_field_4_Template, 2, 3, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TodoItemComponent_button_9_Template, 3, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TodoItemComponent_button_10_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoItemComponent_Template_button_click_11_listener($event) { return ctx.onRemove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("todo-item_edit", ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("todo-item_completed", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("todo-item__checkbox_edit", ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.todo.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 13, ctx.todo.date, "longDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditMode);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_10__["AutofocusDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".todo-item__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n.todo-item_edit.mat-list-item[_ngcontent-%COMP%] {\n  height: 40px;\n}\n.todo-item_edit[_ngcontent-%COMP%]   .todo-item__date[_ngcontent-%COMP%] {\n  display: none;\n}\n.todo-item_edit[_ngcontent-%COMP%]   .todo-item__buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.todo-item_completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.4;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .todo-item__date[_ngcontent-%COMP%] {\n  display: none;\n}\n.todo-item[_ngcontent-%COMP%]:hover   .todo-item__buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n.todo-item__title[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  white-space: pre-wrap;\n  word-break: break-all;\n  justify-self: flex-start;\n}\n.todo-item__checkbox_edit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 8px;\n  pointer-events: none;\n}\n.todo-item__checkbox_edit[_ngcontent-%COMP%]  .mat-checkbox-layout {\n  width: 100%;\n}\n.todo-item__checkbox_edit[_ngcontent-%COMP%]  .mat-checkbox-label {\n  width: 100%;\n}\n.todo-item__date[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (min-width: 813px) {\n  .todo-item__date[_ngcontent-%COMP%] {\n    display: block;\n    font-size: 12px;\n  }\n}\n.todo-item__buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: nowrap;\n  margin-right: -10px;\n}\n@media screen and (min-width: 813px) {\n  .todo-item__buttons[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.todo-item__edit-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-left: 8px;\n}\n.todo-item__edit-field[_ngcontent-%COMP%]  .mat-form-field-infix {\n  width: 100%;\n  margin-top: 0.3em;\n  padding-top: 0.3em;\n  padding-bottom: 0.23em;\n}\n.todo-item__edit-input_completed[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.todo-item__icon_check[_ngcontent-%COMP%] {\n  color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZsYWRpbWlyL0RvY3VtZW50cy9Gcm9udEVuZC92bGFkaW1pcl9zdmlyaWRlbmtvLWh0bWwvYW5ndWxhci1wcm9qZWN0L3NyYy9hcHAvdG9kby90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8taXRlbS90b2RvLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNBSjtBRElJO0VBQ0UsWUFBQTtBQ0ZOO0FESUk7RUFDRSxhQUFBO0FDRk47QURJSTtFQUNFLGFBQUE7QUNGTjtBRE1FO0VBQ0UsNkJBQUE7RUFFQSxZQUFBO0FDTEo7QURRRTtFQUNFLGFBQUE7QUNOSjtBRFNFO0VBQ0UsYUFBQTtBQ1BKO0FEVUU7RUFDRSxhQUFBO0VBRUEscUJBQUE7RUFDQSxxQkFBQTtFQUVBLHdCQUFBO0FDVko7QURjSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBLG9CQUFBO0FDYk47QURjTTtFQUNFLFdBQUE7QUNaUjtBRGNNO0VBQ0UsV0FBQTtBQ1pSO0FEaUJFO0VBQ0UsYUFBQTtBQ2ZKO0FEZ0JJO0VBRkY7SUFHSSxjQUFBO0lBRUEsZUFBQTtFQ2RKO0FBQ0Y7QURpQkU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEaUJJO0VBTEY7SUFNSSxhQUFBO0VDZEo7QUFDRjtBRGlCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ2ZKO0FEaUJJO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQ2ZOO0FEb0JJO0VBQ0UsNkJBQUE7QUNsQk47QUR1Qkk7RUFDRSxZQUFBO0FDckJOIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8taXRlbSB7XG4gICZfX2NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfZWRpdCB7XG4gICAgJi5tYXQtbGlzdC1pdGVtIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLnRvZG8taXRlbV9fZGF0ZSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAudG9kby1pdGVtX19idXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICB9XG5cbiAgJl9jb21wbGV0ZWQge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXG4gICAgb3BhY2l0eTogMC40O1xuICB9XG5cbiAgJjpob3ZlciAudG9kby1pdGVtX19kYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgJjpob3ZlciAudG9kby1pdGVtX19idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogOHB4IDA7XG5cbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuXG4gICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgJl9fY2hlY2tib3gge1xuICAgICZfZWRpdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICY6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgICY6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2RhdGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODEzcHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICB9XG5cbiAgJl9fYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IG5vd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODEzcHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fZWRpdC1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcblxuICAgICY6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogMC4zZW07XG4gICAgICBwYWRkaW5nLXRvcDogMC4zZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4yM2VtO1xuICAgIH1cbiAgfVxuXG4gICZfX2VkaXQtaW5wdXQge1xuICAgICZfY29tcGxldGVkIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgIH1cbiAgfVxuXG4gICZfX2ljb24ge1xuICAgICZfY2hlY2sge1xuICAgICAgY29sb3I6IGdyZWVuO1xuICAgIH1cbiAgfVxufVxuIiwiLnRvZG8taXRlbV9fY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2RvLWl0ZW1fZWRpdC5tYXQtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLnRvZG8taXRlbV9lZGl0IC50b2RvLWl0ZW1fX2RhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnRvZG8taXRlbV9lZGl0IC50b2RvLWl0ZW1fX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRvZG8taXRlbV9jb21wbGV0ZWQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgb3BhY2l0eTogMC40O1xufVxuLnRvZG8taXRlbTpob3ZlciAudG9kby1pdGVtX19kYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b2RvLWl0ZW06aG92ZXIgLnRvZG8taXRlbV9fYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udG9kby1pdGVtX190aXRsZSB7XG4gIG1hcmdpbjogOHB4IDA7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4udG9kby1pdGVtX19jaGVja2JveF9lZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi50b2RvLWl0ZW1fX2NoZWNrYm94X2VkaXQ6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYXlvdXQge1xuICB3aWR0aDogMTAwJTtcbn1cbi50b2RvLWl0ZW1fX2NoZWNrYm94X2VkaXQ6Om5nLWRlZXAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRvZG8taXRlbV9fZGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MTNweCkge1xuICAudG9kby1pdGVtX19kYXRlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbi50b2RvLWl0ZW1fX2J1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgxM3B4KSB7XG4gIC50b2RvLWl0ZW1fX2J1dHRvbnMge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi50b2RvLWl0ZW1fX2VkaXQtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi50b2RvLWl0ZW1fX2VkaXQtZmllbGQ6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDAuM2VtO1xuICBwYWRkaW5nLXRvcDogMC4zZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjIzZW07XG59XG4udG9kby1pdGVtX19lZGl0LWlucHV0X2NvbXBsZXRlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnRvZG8taXRlbV9faWNvbl9jaGVjayB7XG4gIGNvbG9yOiBncmVlbjtcbn0iXX0= */"], data: { animation: _shared_open_close_animation__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-item',
                templateUrl: './todo-item.component.html',
                styleUrls: ['./todo-item.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                animations: _shared_open_close_animation__WEBPACK_IMPORTED_MODULE_1__["openCloseAnimation"]
            }]
    }], function () { return []; }, { todo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isEditMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], check: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], toggleEditMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");







function TodoListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function TodoListComponent_ng_template_1_mat_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_ng_template_1_mat_icon_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_ng_template_1_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_drop_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_ng_template_1_mat_icon_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_drop_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoListComponent_ng_template_1_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function TodoListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TodoListComponent_ng_template_1_Template_mat_button_toggle_group_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onFilter($event); })("ngModelChange", function TodoListComponent_ng_template_1_Template_mat_button_toggle_group_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.filterValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-button-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-button-toggle", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-button-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-button-toggle-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TodoListComponent_ng_template_1_Template_mat_button_toggle_group_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.sortValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-button-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_ng_template_1_Template_mat_button_toggle_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onSort("date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TodoListComponent_ng_template_1_mat_icon_19_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TodoListComponent_ng_template_1_mat_icon_20_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-button-toggle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoListComponent_ng_template_1_Template_mat_button_toggle_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onSort("title"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "sort_by_alpha");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TodoListComponent_ng_template_1_mat_icon_24_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TodoListComponent_ng_template_1_mat_icon_25_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TodoListComponent_ng_template_1_ng_container_26_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.filterValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.sortValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isDateArrowUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isDateArrowUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isTitleArrowUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isTitleArrowUp);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.list);
} }
class TodoListComponent {
    constructor() {
        this.loader = null;
        this.list = null;
        this.isTitleArrowUp = false;
        this.isDateArrowUp = true;
        this.filter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterValue = 'all';
        this.sortValue = 'date';
    }
    onFilter(model) {
        this.filter.emit(model.value);
    }
    onSort(field) {
        this.sort.emit(field);
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], inputs: { loader: "loader", list: "list", isTitleArrowUp: "isTitleArrowUp", isDateArrowUp: "isDateArrowUp" }, outputs: { filter: "filter", sort: "sort" }, decls: 3, vars: 1, consts: [[4, "ngTemplateOutlet"], ["todoList", ""], [1, "todo-list"], [1, "todo-list__radio-buttons"], ["name", "filter", "title", "filter by", "value", "all", 1, "todo-list__radio-group", 3, "ngModel", "change", "ngModelChange"], ["aria-label", "filter list", 1, "todo-list__icon"], [3, "vertical"], ["value", "all"], ["value", "active"], ["value", "completed"], ["name", "sort", "value", "date", 1, "todo-list__radio-group", 3, "ngModel", "ngModelChange"], ["aria-label", "sort list", 1, "todo-list__icon"], ["aria-label", "sort by date", "title", "sort by date of addition", "value", "date", 3, "click"], [1, "todo-list__icon", "todo-list__icon_date"], ["aria-label", "sort direction", "class", "todo-list__icon todo-list__icon_direction", 4, "ngIf"], ["aria-label", "sort by title", "title", "sort by title", "value", "title", 3, "click"], [1, "todo-list__icon"], ["aria-label", "sort direction", 1, "todo-list__icon", "todo-list__icon_direction"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TodoListComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_ng_template_1_Template, 27, 9, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.loader || _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDivider"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".todo-list__radio-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  width: 85vw;\n  max-width: 602px;\n  margin-top: -7px;\n  margin-bottom: 7px;\n}\n.todo-list__radio-buttons[_ngcontent-%COMP%]  .mat-button-toggle-label-content {\n  line-height: 24px;\n}\n.todo-list__radio-group[_ngcontent-%COMP%] {\n  height: 25px;\n  margin-top: 7px;\n  font-size: 16px;\n  line-height: 25px;\n}\n.todo-list__icon[_ngcontent-%COMP%] {\n  height: 30px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.todo-list__icon_direction[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-left: 2px;\n}\n.todo-list__icon_date[_ngcontent-%COMP%] {\n  height: 25px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZsYWRpbWlyL0RvY3VtZW50cy9Gcm9udEVuZC92bGFkaW1pcl9zdmlyaWRlbmtvLWh0bWwvYW5ndWxhci1wcm9qZWN0L3NyYy9hcHAvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvdmxhZGltaXIvRG9jdW1lbnRzL0Zyb250RW5kL3ZsYWRpbWlyX3N2aXJpZGVua28taHRtbC9hbmd1bGFyLXByb2plY3Qvc3JjL2FwcC90b2RvL3NoYXJlZC90b2RvLnZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0NOUztFRE9ULGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRUZKO0FGR0k7RUFDRSxpQkFBQTtBRUROO0FGSUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtBRUhKO0FGS0U7RUFDRSxZQUFBO0VBRUEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUVKSjtBRktJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FFSE47QUZLSTtFQUNFLFlBQUE7RUFFQSxlQUFBO0FFSk4iLCJmaWxlIjoic3JjL2FwcC90b2RvL3RvZG8tbGlzdC90b2RvLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vc2hhcmVkL3RvZG8udmFyaWFibGVzLnNjc3NcIjtcblxuLnRvZG8tbGlzdCB7XG4gICZfX3JhZGlvLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogJHRvZG8td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkdG9kby1tYXgtd2lkdGggKyAycHg7XG4gICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgJjo6bmctZGVlcCAubWF0LWJ1dHRvbi10b2dnbGUtbGFiZWwtY29udGVudCB7XG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG4gIH1cbiAgJl9fcmFkaW8tZ3JvdXAge1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIH1cbiAgJl9faWNvbiB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgJl9kaXJlY3Rpb24ge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgIH1cbiAgICAmX2RhdGUge1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuXG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICB9XG59XG4iLCIkdG9kby1tYXgtd2lkdGg6IDYwMHB4O1xuJHRvZG8td2lkdGg6IDg1dnc7XG5cbiRjb2xvci1wcmltYXJ5OiAjMGQ0N2ExOyIsIi50b2RvLWxpc3RfX3JhZGlvLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDg1dnc7XG4gIG1heC13aWR0aDogNjAycHg7XG4gIG1hcmdpbi10b3A6IC03cHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbn1cbi50b2RvLWxpc3RfX3JhZGlvLWJ1dHRvbnM6Om5nLWRlZXAgLm1hdC1idXR0b24tdG9nZ2xlLWxhYmVsLWNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi50b2RvLWxpc3RfX3JhZGlvLWdyb3VwIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4udG9kby1saXN0X19pY29uIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi50b2RvLWxpc3RfX2ljb25fZGlyZWN0aW9uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG4udG9kby1saXN0X19pY29uX2RhdGUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, { loader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isTitleArrowUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isDateArrowUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help/help.component */ "./src/app/todo/help/help.component.ts");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/todo.service */ "./src/app/todo/shared/todo.service.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo/todo-form/todo-form.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");















function TodoComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 13);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", 40);
} }
function TodoComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todo list is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TodoComponent_ng_template_20_ng_container_1_mat_divider_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function TodoComponent_ng_template_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-todo-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("check", function TodoComponent_ng_template_20_ng_container_1_Template_app_todo_item_check_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const todo_r7 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.checkTodo($event, todo_r7); })("remove", function TodoComponent_ng_template_20_ng_container_1_Template_app_todo_item_remove_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const todo_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeTodo($event, todo_r7); })("toggleEditMode", function TodoComponent_ng_template_20_ng_container_1_Template_app_todo_item_toggleEditMode_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const todo_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.toggleEditMode($event, todo_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TodoComponent_ng_template_20_ng_container_1_mat_divider_2_Template, 1, 0, "mat-divider", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const todo_r7 = ctx.$implicit;
    const last_r8 = ctx.last;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("todo", todo_r7)("isEditMode", ctx_r6.isEditMode(todo_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r8);
} }
function TodoComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-action-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoComponent_ng_template_20_ng_container_1_Template, 3, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.todoList);
} }
class TodoComponent {
    constructor(todoService, bottomSheet) {
        this.todoService = todoService;
        this.bottomSheet = bottomSheet;
        this.appTitle = 'Todo List';
        this.todoTitle = '';
        this.todoList = [];
        this.editModeIndex = null;
        this.isSortedByTitleAscending = false;
        this.isSortedByDateAscending = true;
        this.lastSortedField = 'date';
        this.lastFilterParam = 'all';
    }
    ngOnInit() {
        this.todoService.getTodoListObservable().subscribe(() => this.updateTodoList());
        this.todoService.load();
    }
    openHelp() {
        this.bottomSheet.open(_help_help_component__WEBPACK_IMPORTED_MODULE_1__["HelpComponent"]);
    }
    removeTodo($event, todo) {
        $event.stopImmediatePropagation();
        this.editModeIndex = null;
        this.todoService.removeTodo(todo.id);
    }
    checkTodo($event, todo) {
        if (!this.isEditMode(todo.id)) {
            todo.completed = !todo.completed;
            if (this.lastFilterParam !== 'all') {
                this.updateTodoList();
            }
        }
        else {
            const fieldToFocus = $event.currentTarget.querySelector('.todo-item__edit-input');
            fieldToFocus.focus();
        }
    }
    isEditMode(id) {
        return id === this.editModeIndex;
    }
    toggleEditMode($event, todo) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        todo.title = this.todoService.isValidTodo(todo.title) ? todo.title : '—';
        this.editModeIndex = !this.isEditMode(todo.id) ? todo.id : null;
    }
    addTodo() {
        if (this.canAdd()) {
            this.todoService.addTodo(this.todoTitle);
            this.clearForm();
        }
    }
    clearForm() {
        this.todoTitle = '';
    }
    canAdd() {
        return !this.todoService.isLoading && this.todoService.isValidTodo(this.todoTitle);
    }
    filterTodoListBy(param) {
        switch (param) {
            case 'all':
                this.todoList = [...this.todoService.todoList];
                break;
            case 'active':
                this.todoList = this.todoService.todoList.filter((todo) => !todo.completed);
                break;
            case 'completed':
                this.todoList = this.todoService.todoList.filter((todo) => todo.completed);
                break;
        }
        this.lastFilterParam = param;
        this.applySorting();
    }
    sortTodoListBy(field) {
        const byTitle = (field === 'title');
        this.todoList = this.todoList.concat().sort((todo, nextTodo) => {
            const todoField = byTitle ? todo.title.toString().toLowerCase() : todo.date;
            const nextTodoField = byTitle ? nextTodo.title.toString().toLowerCase() : nextTodo.date;
            const result = (byTitle ? this.isSortedByTitleAscending : this.isSortedByDateAscending)
                ? todoField < nextTodoField
                : todoField > nextTodoField;
            return result ? 1 : -1;
        });
        if (byTitle) {
            this.isSortedByTitleAscending = !this.isSortedByTitleAscending;
            this.isSortedByDateAscending = false;
            this.lastSortedField = 'title';
        }
        else {
            this.isSortedByTitleAscending = false;
            this.isSortedByDateAscending = !this.isSortedByDateAscending;
            this.lastSortedField = 'date';
        }
    }
    updateTodoList() {
        this.todoList = [...this.todoService.todoList];
        this.filterTodoListBy(this.lastFilterParam);
        this.applySorting();
    }
    applySorting() {
        if (this.lastSortedField === 'title') {
            this.isSortedByTitleAscending = !this.isSortedByTitleAscending;
            this.sortTodoListBy('title');
        }
        else if (this.lastSortedField === 'date') {
            this.isSortedByDateAscending = !this.isSortedByDateAscending;
            this.sortTodoListBy('date');
        }
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"])); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], decls: 22, vars: 9, consts: [[1, "todo"], [1, "todo__header"], ["mat-button", "", "color", "primary", "title", "Tips", 3, "click"], ["aria-label", "help"], ["mat-button", "", "color", "primary", "title", "Load last save", 3, "click"], ["aria-label", "load list"], ["mat-button", "", "color", "primary", 3, "title", "disabled", "click"], ["aria-label", "save list"], [3, "title", "canAdd", "titleChange", "add", "clear"], [3, "list", "loader", "isTitleArrowUp", "isDateArrowUp", "sort", "filter"], ["loader", ""], ["emptyList", ""], ["list", ""], [1, "todo__loader", 3, "diameter"], [1, "todo-list__empty-list"], [1, "todo-list__list"], [4, "ngFor", "ngForOf"], [3, "todo", "isEditMode", "check", "remove", "toggleEditMode"], [4, "ngIf"]], template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_5_listener() { return ctx.openHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_8_listener() { return ctx.todoService.load(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TodoComponent_Template_button_click_11_listener() { return ctx.todoService.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-todo-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("titleChange", function TodoComponent_Template_app_todo_form_titleChange_14_listener($event) { return ctx.todoTitle = $event; })("add", function TodoComponent_Template_app_todo_form_add_14_listener() { return ctx.addTodo(); })("clear", function TodoComponent_Template_app_todo_form_clear_14_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-todo-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function TodoComponent_Template_app_todo_list_sort_15_listener($event) { return ctx.sortTodoListBy($event); })("filter", function TodoComponent_Template_app_todo_list_filter_15_listener($event) { return ctx.filterTodoListBy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TodoComponent_ng_template_16_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TodoComponent_ng_template_18_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TodoComponent_ng_template_20_Template, 2, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.todoService.isSaved() ? "No changes to save" : "Save")("disabled", ctx.todoService.isSaved());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.todoTitle)("canAdd", ctx.canAdd());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.todoList.length ? _r4 : _r2)("loader", ctx.todoService.isLoading ? _r0 : null)("isTitleArrowUp", ctx.isSortedByTitleAscending)("isDateArrowUp", ctx.isSortedByDateAscending);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_7__["TodoFormComponent"], _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_8__["TodoListComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_12__["TodoItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.todo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 800px;\n  margin: 10px;\n  padding-bottom: 50px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n\n.todo__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 30px;\n}\n\n.todo__loader[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.todo-list__empty-list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n  margin-top: 18px;\n  color: black;\n}\n\n.todo-list__list[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 85vw;\n  max-width: 600px;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n}\n\n.todo-list__list.mat-list-base[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.todo-list__list[_ngcontent-%COMP%]  .mat-list-item {\n  width: 85vw;\n  max-width: 600px;\n  height: auto;\n}\n\n.todo-list__list[_ngcontent-%COMP%]  .mat-list-item:not(:hover) {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZsYWRpbWlyL0RvY3VtZW50cy9Gcm9udEVuZC92bGFkaW1pcl9zdmlyaWRlbmtvLWh0bWwvYW5ndWxhci1wcm9qZWN0L3NyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b2RvL3RvZG8uY29tcG9uZW50LnNjc3MiLCIvaG9tZS92bGFkaW1pci9Eb2N1bWVudHMvRnJvbnRFbmQvdmxhZGltaXJfc3ZpcmlkZW5rby1odG1sL2FuZ3VsYXItcHJvamVjdC9zcmMvYXBwL3RvZG8vc2hhcmVkL3RvZG8udmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUVBLG9DQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0UsZ0JBQUE7QUNISjs7QURRRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUVBLFlBQUE7QUNOSjs7QURRRTtFQUNFLHFCQUFBO0VBQ0EsV0V4Q1M7RUZ5Q1QsZ0JFMUNhO0VGNENiLHFDQUFBO0VBQ0Esa0JBQUE7QUNQSjs7QURTSTtFQUNFLGNBQUE7QUNQTjs7QURTSTtFQUNFLFdFbERPO0VGbURQLGdCRXBEVztFRnFEWCxZQUFBO0FDUE47O0FEUU07RUFDRSw2QkFBQTtBQ05SIiwiZmlsZSI6InNyYy9hcHAvdG9kby90b2RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vc2hhcmVkL3RvZG8udmFyaWFibGVzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50b2RvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICZfX2hlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuXG4gICZfX2xvYWRlciB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgfVxufVxuXG4udG9kby1saXN0IHtcbiAgJl9fZW1wdHktbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xuXG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogJHRvZG8td2lkdGg7XG4gICAgbWF4LXdpZHRoOiAkdG9kby1tYXgtd2lkdGg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDs7XG5cbiAgICAmLm1hdC1saXN0LWJhc2Uge1xuICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgICY6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgd2lkdGg6ICR0b2RvLXdpZHRoO1xuICAgICAgbWF4LXdpZHRoOiAkdG9kby1tYXgtd2lkdGg7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAmOm5vdCg6aG92ZXIpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udG9kbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4udG9kb19faGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi50b2RvX19sb2FkZXIge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udG9kby1saXN0X19lbXB0eS1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4udG9kby1saXN0X19saXN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogODV2dztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnRvZG8tbGlzdF9fbGlzdC5tYXQtbGlzdC1iYXNlIHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4udG9kby1saXN0X19saXN0OjpuZy1kZWVwIC5tYXQtbGlzdC1pdGVtIHtcbiAgd2lkdGg6IDg1dnc7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cbi50b2RvLWxpc3RfX2xpc3Q6Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW06bm90KDpob3Zlcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iLCIkdG9kby1tYXgtd2lkdGg6IDYwMHB4O1xuJHRvZG8td2lkdGg6IDg1dnc7XG5cbiRjb2xvci1wcmltYXJ5OiAjMGQ0N2ExOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.scss']
            }]
    }], function () { return [{ type: _shared_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todo/todo.module.ts":
/*!*************************************!*\
  !*** ./src/app/todo/todo.module.ts ***!
  \*************************************/
/*! exports provided: TodoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoModule", function() { return TodoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _todo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo-form/todo-form.component */ "./src/app/todo/todo-form/todo-form.component.ts");
/* harmony import */ var _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");
/* harmony import */ var _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./todo-item/todo-item.component */ "./src/app/todo/todo-item/todo-item.component.ts");
/* harmony import */ var _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/autofocus.directive */ "./src/app/todo/shared/autofocus.directive.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./help/help.component */ "./src/app/todo/help/help.component.ts");
/* harmony import */ var _shared_todo_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/todo.service */ "./src/app/todo/shared/todo.service.ts");
























const MaterialModules = [
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"]
];
class TodoModule {
}
TodoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TodoModule, bootstrap: [_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"]] });
TodoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TodoModule_Factory(t) { return new (t || TodoModule)(); }, providers: [_shared_todo_service__WEBPACK_IMPORTED_MODULE_22__["TodoService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            ...MaterialModules,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TodoModule, { declarations: [_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"],
        _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_17__["TodoFormComponent"],
        _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_18__["TodoListComponent"],
        _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_20__["AutofocusDirective"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_21__["HelpComponent"],
        _todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"],
        _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_19__["TodoItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"]], exports: [_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"],
                    _todo_form_todo_form_component__WEBPACK_IMPORTED_MODULE_17__["TodoFormComponent"],
                    _todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_18__["TodoListComponent"],
                    _shared_autofocus_directive__WEBPACK_IMPORTED_MODULE_20__["AutofocusDirective"],
                    _help_help_component__WEBPACK_IMPORTED_MODULE_21__["HelpComponent"],
                    _todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"],
                    _todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_19__["TodoItemComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    ...MaterialModules,
                ],
                exports: [
                    _todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"]
                ],
                providers: [_shared_todo_service__WEBPACK_IMPORTED_MODULE_22__["TodoService"]],
                bootstrap: [_todo_component__WEBPACK_IMPORTED_MODULE_16__["TodoComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vladimir/Documents/FrontEnd/vladimir_sviridenko-html/angular-project/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map