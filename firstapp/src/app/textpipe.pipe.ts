import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textpipe'
})
export class TextpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value){
      var val = value as string;
      var len = 10;
      if(args[0])
      {
          len = args[0] as number;
      }
      var result = val.substring(0,len)+"...";
      return result;
    }
    return null;
  }

}
