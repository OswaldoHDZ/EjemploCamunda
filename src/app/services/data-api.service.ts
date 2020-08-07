import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'





const variables ={
	"variables": {
		"amount": {
			"value":555443423,
			"type":"long"
		},
		"item": {
			"value": "item-xyzzazazazazaz"
		}
	}
}
const url_api = "/engine-rest/process-definition/key/payment-retrieval/start"

@Injectable()
export class DataApiService {
	constructor(private http: HttpClient) { }

	getAllbooks(login): Observable<any>{
		console.log(variables);
		return this.http.post(url_api,variables);
	}
}
