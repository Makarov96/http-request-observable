import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], args:string): any {

    let ans = [];
    for (let k in items){
        if(items[k].Publicacion_Id.match('^.*' + args +'.*$')
           || items[k].Publicacion_Descripcion.match('^.*' + args +'.*$')
           || items[k].Publicacion_Direccion.match('^.*' + args +'.*$')
           || items[k].TipoTrabajo_Tipo.match('^.*' + args +'.*$')) {
            ans.push({key: k, value: items[k]});
        }
    }
    return ans;
}


}
