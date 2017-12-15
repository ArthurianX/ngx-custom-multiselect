export class ListItem{
    id: Number;
    nameDisplay: String
}
export class MyException {
	status : number;
	body : any;
	constructor(status : number, body : any) {
		this.status = status;
		this.body = body;
	}

}
