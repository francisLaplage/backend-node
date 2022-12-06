import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'remplaceVirgule'
})
export class SupVirgulePipe implements PipeTransform{    
    transform(value: string):string {     
        //if (value != undefined && value != null)
        if (!!value)    
            return value.replace(/,/g, '.'); // regex(/,/g)
        else
            return '';
    }
}