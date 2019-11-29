"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddEmployeeComponent = /** @class */ (function () {
    function AddEmployeeComponent(_fb, _avRoute, _employeeService, _router) {
        this._fb = _fb;
        this._avRoute = _avRoute;
        this._employeeService = _employeeService;
        this._router = _router;
        this.title = 'Create';
        if (this._avRoute.snapshot.params['id']) {
            this.employeeId = this._avRoute.snapshot.params['id'];
        }
        this.employeeForm = this._fb.group({
            employeeId: 0,
            name: ['', [forms_1.Validators.required]],
            gender: ['', [forms_1.Validators.required]],
            department: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]]
        });
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        //this._employeeService.getCityList().subscribe(
        //  (data: City[]) => this.cityList = data
        //);
        var _this = this;
        if (this.employeeId > 0) {
            this.title = 'Edit';
            this._employeeService.getEmployeeById(this.employeeId)
                .subscribe(function (response) {
                _this.employeeForm.setValue(response);
            }, function (error) { return console.log(error); });
        }
    };
    AddEmployeeComponent.prototype.save = function () {
        var _this = this;
        if (!this.employeeForm.valid) {
            return;
        }
        if (this.title === 'Create') {
            this._employeeService.saveEmployee(this.employeeForm.value)
                .subscribe(function () {
                _this._router.navigate(['/fetch-employee']);
            }, function (error) { return console.log(error); });
        }
        else if (this.title === 'Edit') {
            this._employeeService.updateEmployee(this.employeeForm.value)
                .subscribe(function () {
                _this._router.navigate(['/fetch-employee']);
            }, function (error) { return console.error(error); });
        }
    };
    AddEmployeeComponent.prototype.cancel = function () {
        this._router.navigate(['/fetch-employee']);
    };
    Object.defineProperty(AddEmployeeComponent.prototype, "name", {
        get: function () { return this.employeeForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "gender", {
        get: function () { return this.employeeForm.get('gender'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "department", {
        get: function () { return this.employeeForm.get('department'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddEmployeeComponent.prototype, "city", {
        get: function () { return this.employeeForm.get('city'); },
        enumerable: true,
        configurable: true
    });
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-add-employee',
            templateUrl: './add-employee.component.html',
            styleUrls: ['./add - employee.component.css']
        })
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map