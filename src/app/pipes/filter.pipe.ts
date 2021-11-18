import { ConstantPool } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultIncident = [];
    for(const post of value){
      console.log(post);
      if(post.name.toLowerCase().indexOf(args.toLowerCase()) > -1 || post.status.indexOf(args) > -1 ){
        resultIncident.push(post);
      }
    }
    return resultIncident;
  }

}
