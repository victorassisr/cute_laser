import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  hash: string;
  invoice: any;
  totalValue: number = 0;
  isOdd: boolean;

  @ViewChild('headerList') headerList: ElementRef;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.hash = this.route.snapshot.paramMap.get('hash');
    this.getInvoice();
  }

  ngAfterViewInit():  void {
    const el = this.headerList.nativeElement;
    const size = 100 / el.childElementCount;
    for(let i=0; i<el.childElementCount; i++) {
      el.children[i].style.width = `${size}%`;
    }
  }

  getInvoice() {
    this.invoice = {
      company: 'Cute Laser',
      companyContact: {
        email: 'contactcutelaser@gmail.com',
        tel: '34 9 9673-5986'
      },
      clientName: 'Victor Assis',
      clientContact: {
        email: 'victorassis545@gmail.com',
        tel: '34 9 9673-5986'
      },
      products: [
        {
          name: 'Dupla face 15mm 3M',
          value: 5
        },
        {
          name: 'Acrilico 2mm Preto',
          value: 150.55
        },
        {
          name: 'Hora Laser',
          value: 5
        },
      ],
      accept: false
    };
    this.isOdd = this.invoice.length % 2 == 0;
    this.sum();
  }

  sum() {
    this.invoice.products.forEach(p => {
      this.totalValue += p.value;
    });
  }

}
