import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: any, key: any, filterId: any): ListItem[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: ListItem) => this.applyFilter(item, filter, key, filterId));
    }
    applyFilter(item: any, filter: any, key: any, filterId: any): boolean {
        if (filterId) {
          return !(filter[key] && JSON.stringify(item).toLocaleLowerCase().indexOf(filter[key].toLowerCase()) === -1);
        } else {
          return !(filter[key] && item[key] && item[key].toLowerCase().indexOf(filter[key].toLowerCase()) === -1);
        }
    }
}
