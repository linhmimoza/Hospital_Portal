import { Headers, RequestOptions } from '@angular/http';
import {ApiService} from '../api.service';



const DOWNLOAD_LINK = 'http://localhost:8080/TestRestful/webresources/DownloadFile/DownloadFile?FileName=';
const SERVER = 'http://localhost:8080/TestRestful/webresources/';
const headers = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({ headers });
const SUCCESS = 'Susscess';

export { DOWNLOAD_LINK, SERVER, OPTIONS, SUCCESS

};
