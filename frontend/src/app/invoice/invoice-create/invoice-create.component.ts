import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {ProductService} from '../../product/product.service';
import {AreaService} from '../../area/area.service';
import {CustomerService} from '../../customer/customer.service';
import {Customer} from '../../customer/customer';
import * as _ from 'underscore';
import {Product} from '../../product/product';
import {Area} from "../../area/area";
import {Subscription} from "rxjs";
import {Invoice} from '../invoice';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  public productList: any[] = [];
  showSuccess: boolean = false;
  showError: boolean = false;
  public invoiceCreateForm: FormGroup;
  public customerList: Customer[] = [];
  public resCustomer: Customer;
  private subscription: Subscription;
  public invoice: Invoice;
  public allProductCounter = 1;
  public allProducts: any[] = [];
  public isSaved: boolean = false;
  public resultInvoice;
  public allProductsAdd: any[] = [];
  public invoiceDetailForm: FormGroup;


  constructor(private invoiceService: InvoiceService, private fb: FormBuilder, private customerService: CustomerService, private productService: ProductService, private areaService: AreaService) {
  }

  quantity:'';

  

  ngOnInit() {
    this.buildForm();
    this.getProductList();
    this.getAllCustomers();
  }

  buildForm() {
    let date = Date.now();
    this.invoiceCreateForm = this.fb.group({
      customer_id: [''],
      username: [''],
      nid : [''],
      gstno :[''],
      email: [''],
      fullname: [''],
      location: [''],
      area: [''],
      city: [''],
      mobile_primary: [''],
      mobile_secondary: [''],
      amount_due: [''],
      total: [''],
      qty : [''],
      invoice_number : [''],
      discount: [0],
      date: [date],
      remarks: [''],
      status: ['Due'],
      productList: [],
      cost:[''],
      quantity: [''],
      

      
    });
  }
  getAllCustomers() {
    this.customerService.getAllCustomers('all')
      .subscribe(
        (res) => {
          this.customerList = res;
        },
        (err) => {

        }
      );
  }

  getCustomer(event: any) {
    this.resCustomer = _.find(this.customerList, function (item) {
      return item['_id'] == event.target.value;
    });
    this.invoiceCreateForm.patchValue({
      username: this.resCustomer.username,
      gstno : this.resCustomer.gstno,
      nid: this.resCustomer.nid,
      email: this.resCustomer.email,
      fullname: this.resCustomer.fullname,
      location: this.resCustomer.location,
      city: this.resCustomer.city,
    
      mobile_primary: this.resCustomer.mobile_primary,
      mobile_secondary: this.resCustomer.mobile_secondary,
    });

    this.resCustomer.productData = [];
    if (this.resCustomer.area) {
      this.areaService.getAreaById(this.resCustomer.area)
        .subscribe(
          (res: Area) => {
            this.resCustomer.areaData = res;
            this.invoiceCreateForm.patchValue({
              area: this.resCustomer.areaData.name
            });
          },
          (err) => {

          }
        )
    }
  }

  getProductList() {
    this.productList.forEach(product => { product.quantity = 0 });
    this.productList = [];
    this.productService.getAllProduct()
      .subscribe(
        (res) => {
          _.each(res, (item) => {
            if (item['status']) {
              this.productList.push(item);
            }
          });
        },
        (err) => {
          console.log("ERROR from productList");
        },
        () => {
          this.allProducts.push(this.productList[0]);
          this.invoiceCreateForm.patchValue({
            
            total: this.productList[0].rate
            
          })
        }
      )
  }


  removeProduct(index) {
    this.allProductCounter--;
    this.allProducts.splice(index, 1);
  }

  addProduct(product: any) {
    this.allProductCounter++;
    let newProduct = this.productList[0];
    this.allProducts.push(newProduct);
    this.updateTotal();
  }

  
 
 

  onProductChange(event: any, index) {
    let result = _.find(this.productList, function (item) {
      return item['_id'] == event.target.value;
    })
    this.allProducts[index] = result;
    this.updateTotal();
  }

  createRange(number) {
    let items: number[] = [];
    for (let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
 

  updateTotal() {
    let total = 0;
    _.each(this.allProducts, (product) => {
       //product.total = product.qty * product.rate;
      total += product['rate'];
    });
    this.invoiceCreateForm.patchValue({
      total: total
    })
  }

  /*updateForm(data) {
    const items = data.invoiceItems;
    let sub = 0;
    for(let i of items){
      i.total = i.qty*i.cost;
      sub += i.total;
    }
    this.form.value.subTotal = sub;
    const tax = sub * (this.form.value.taxPercent / 100);
    this.form.value.tax = tax;
    this.form.value.grantTotal = sub + tax;
  }
*/
  submitInvoiceCreateForm() {
  
    let product_list = _.pluck(this.allProducts, '_id');
    this.invoiceCreateForm.patchValue({
      productList: product_list,
      remarks : this.invoiceCreateForm.value.remarks,
      invoice_number : this.invoiceCreateForm.value.invoice_number,
      qty : this.invoiceCreateForm.value.qty,
      customer_id: this.resCustomer['_id'],
    });

    
    this.invoiceService.createNewInvoice(this.invoiceCreateForm.value)
      .subscribe(
        (res) => {
          this.resultInvoice = res;
          this.isSaved = true;
        }
      )
  }


  updatePayments() {
    let total = 0;
    _.each(this.allProductsAdd, (item) => {
      let product = _.findWhere(this.productList, {_id: item});
      total +=  product.rate * product.quantity;
     
    });

    this.invoiceDetailForm.patchValue({
      total: total,
      discount: 0,
      amount_due: total
    });
  }
    

  getquantity(event: any) {
    this.invoiceDetailForm.patchValue({
      total: this.invoiceDetailForm.value.amount_due * event.target.value
    });
  }


  

}
