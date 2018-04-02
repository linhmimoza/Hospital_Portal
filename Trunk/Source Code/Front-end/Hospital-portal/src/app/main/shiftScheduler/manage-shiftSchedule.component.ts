import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShiftSchedulerService } from './service/shiftScheduler.service';
import { ManageService } from './service/shiftSchedulerManage.service';
import { DepartmentService } from '../department/service/department.service';
import { Department } from '../department/shared/department.model';
import { ShiftSchedulerManager } from './shared/ShiftSchedulerManager.model';

@Component({
    selector: 'manage-shiftSchedule',
    templateUrl: './manage-shiftSchedule.component.html'
    //   styleUrls: ['./css/dropdown.css']
})
export class ManageShiftSchedulerComponent {
    selected: ShiftSchedulerManager;
    thisWeek: any;
    quickSearch: any;
    weekDate: String;
    departments: Department[] = [];
    department: any;
    futureListManage: ShiftSchedulerManager[] ;
    searchListManage: ShiftSchedulerManager[] ;
    passListManage: ShiftSchedulerManager[] ;
    constructor( private shiftSchedulerService: ShiftSchedulerService,
    private router: Router, private manageService: ManageService,
private departmentService: DepartmentService ) {}
    ngOnInit() {
        this.loadDepartment();
   this.loadPage();
    }
    loadPage() {
        this.thisWeek = this.shiftSchedulerService.getThisWeek();
        this.weekDate = this.shiftSchedulerService.weekToDate(this.thisWeek);
    }
view(manage: ShiftSchedulerManager) {
    if (manage.checked > 0) {
        this.manageService.setSelect(manage);
    this.router.navigate(['/main/shiftScheduler-list']);
    }

}
loadDepartment() {
    this.departmentService.getList().then((departments: Department[]) => {
        this.departments = departments;
        this.department = this.departments[0].departmentId;
        this.selectDept();
    });
}
check(manage: ShiftSchedulerManager) {
    if (manage.waiting > 0) {
        this.manageService.setSelect(manage);
    this.router.navigate(['/main/check-shiftSchedule']);
    }

}
selectDept() {
    this.shiftSchedulerService.getFutureManagerByDepartmentId(this.department, this.thisWeek).then((res: ShiftSchedulerManager[]) => {
        res = this.shiftSchedulerService.setListManager(res);
        this.futureListManage = res;
        console.log(res);
    }).catch(err => {
        alert(err);
    });
    this.shiftSchedulerService.getPassManagerByDepartmentId(this.department, this.thisWeek).then((res: ShiftSchedulerManager[]) => {
        res = this.shiftSchedulerService.setListManager(res);
        this.passListManage = res;
        console.log(res);
    }).catch(err => {
        alert(err);
    });
    this.quickSearch = '';
    this.to();
}
to() {
    this.shiftSchedulerService.getSearchManager(this.department, this.quickSearch).then((res: ShiftSchedulerManager[]) => {
        if (res != null) {
            res = this.shiftSchedulerService.setListManager(res);
        }
        this.searchListManage = res;
        console.log(res);
    }).catch(err => {
        alert(err);
    });
}
createNew(){
    this.router.navigate(['/main/createShiftScheduler']);
}
}
