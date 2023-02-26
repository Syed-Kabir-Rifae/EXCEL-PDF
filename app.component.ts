import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as fs from 'file-saver';
import { DownExcelService } from './down-excel.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JsonToXl';
  baseUrl :string ="http://localhost:8080/export/excel";
  constructor(public exportdata: DownExcelService){};

 ngOnInit(){
 };
  
DownloadExcelService()
{
  this.exportdata.exportExcel().subscribe(x =>{
    const blob= new Blob([x],{ type:'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
  //  if(window.navigator && window.navigator.msSaveOrOpenBlob){
  //     window.navigator.msSaveOrOpenBlob(blob);
  //     var retVal = navigator.msSaveBlob(blob, Exployee.xml);
  //    return;
  //  }
 fs.saveAs(blob,'EmployeeExcel.xlsx');
  // var link=document.createElement('a');
  // document.body.appendChild(link);
  //   var data=window.URL.createObjectURL(blob);
  //  link.href=data;
  //  link.download='EmployeeExcel.xlsx';
  //  link.click();
  //  URL.revokeObjectURL(link.href)
  //  link.remove();
  //  link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
  
  });
}
DownloadPdfService(){
  this.exportdata.exportPdf().subscribe(x=>{
    const blob=new Blob([x],{ type:'application/pdf'});

    fs.saveAs(blob,'Employee.pdf');
  //   var link=document.createElement('b');
  //   document.body.appendChild(link);
  //   var data1=window.URL.createObjectURL(blob);
  
  //  link.href=data1;
  //  link.download='Employee.pdf';
  //  link.click();
  //  URL.revokeObjectURL(link.href)
  //  link.remove();

  })
}
}