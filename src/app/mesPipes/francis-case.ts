import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'francisCase'
})
export class FrancisCasePipe implements PipeTransform{
    transform(value: string): string {
        let chaine = '';
        if (!!value) {
            let tabMots = value.toLowerCase().split(' ');
            for (let mot of tabMots) {
                for (let i = 0; i < mot.length; i++) {
                    if (i % 2 == 0) {
                        chaine += mot[i].toUpperCase();
                    } else {
                        chaine += mot[i];
                    }
                }
                chaine += " ";
            }
        } 
        return chaine;
    }
}