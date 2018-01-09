import { Pipe, PipeTransform } from '@angular/core';

import { ListItem } from './multiselect.model';

@Pipe({
    name: 'listFilter',
    pure: false
})
export class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: any, key: any): ListItem[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item: ListItem) => this.applyFilter(item, filter, key));
    }
    applyFilter(item: any, filter: any, key: any): boolean {
        return !(filter[key] && item[key] && item[key].toLowerCase().indexOf(filter[key].toLowerCase()) === -1);
    }
}
