import { Headers, RequestOptions } from '@angular/http';

const DOWNLOAD_LINK = 'http://localhost:8080/Datlich/webresources/DownloadFile/DownloadFile?FileName=';
const SERVER = 'http://localhost:8080/Datlich/webresources/';
const headers = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({ headers });
const SUCCESS = 'Susscess';

export { DOWNLOAD_LINK, SERVER, OPTIONS, SUCCESS };
