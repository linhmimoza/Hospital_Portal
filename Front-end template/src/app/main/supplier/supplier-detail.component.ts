import { Component } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Suppiler } from './shared/supplier.model';
import { SupplierService } from './service/supplier.service';
@Component({
    selector: 'supplier-detail',
    templateUrl:'./supplier-detail.component.html'
})
export class SupplierDetailComponent {
   
    supplier: Suppiler = new Suppiler();
    id: number = 0;
    routerSubscription: any;
    title: string;
    constructor(private route: ActivatedRoute, private router: Router, private supplierService: SupplierService) {
    }

    ngOnInit() {
        this.routerSubscription = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            if (this.id > 0) {
                this.title = "Bạn đang chỉnh sửa nhà cung cấp";
                this.supplierService.getSupplier(this.id).then((res: Suppiler) => {
                    this.supplier = res;
                }).catch(err => {
                    console.log(err);
                });
            } else {
                this.title = "Bạn đang tạo mới nhà cung cấp";
            }
        });
    }

    save() {
        this.supplierService.saveSupplier(this.supplier).then((res: Suppiler) => {
            //Server trả về role sau khi save
            //Nếu là tạo role mới thì res sẽ có giá trị id mới thay vì 0
            if (this.id == 0) {
                this.router.navigate(['/main/supplier-detail/',res.Id]);
            }
        }).catch(err => {
            alert(err);
        })
    }

    back() {
        this.router.navigate(['/main/supplier-list']);
    }
   }
