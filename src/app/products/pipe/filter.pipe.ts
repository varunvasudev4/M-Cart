import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any[], filterStr:String,productName:String): any {
    const result:any=[]
    if(!value||filterStr===''||productName===''){
      return value
    }
    value.forEach((item:any)=>{
      if(item['productName'].trim().toLowerCase().includes(filterStr.toLowerCase()))
      {
        result.push(item)
      }
    })
    return result;
  }

}
