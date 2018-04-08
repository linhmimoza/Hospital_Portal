import { Headers, RequestOptions } from '@angular/http';
import { ApiService } from '../api.service';



const DOWNLOAD_LINK = 'http://localhost:8080/TestRestful/webresources/DownloadFile/DownloadFile?FileName=';
const SERVER = 'http://localhost:8080/TestRestful/webresources/';
const headers = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({ headers });
const SUCCESS = 'Success';
const DISABLE = 0;
const ACTIVE = 1;
const WAITING = 2;
const EXISTED = 'Existed';
const ROLE_ID = 'Auth-RoleId';

export { DOWNLOAD_LINK, SERVER, OPTIONS, SUCCESS, DISABLE, ACTIVE, EXISTED, WAITING, ROLE_ID };
