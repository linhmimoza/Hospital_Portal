import { Headers, RequestOptions } from '@angular/http';
import { ApiService } from '../api.service';


const DOWNLOAD_LINK = 'http://localhost:8080/TestRestful/webresources/DownloadFile/DownloadFile?Id=';
const SERVER = 'http://localhost:8080/TestRestful/webresources/';
const headers = new Headers({ 'Content-Type': 'application/json' });
const OPTIONS = new RequestOptions({ headers });
const REQUEST_RESULTS = {
    Success:  'Success',
    Existed: 'Existed'
};

const STATUS = {
    Disable: 0,
    Active: 1,
    Waiting: 2
};
const ROLE_ID = 'Auth-RoleId';

const ROLES = {
    Admin: 1,
    Manager: 2,
    Scheduler: 3,
    Poster: 4,
    SchedulerPoster: 5
};

export { DOWNLOAD_LINK, SERVER, OPTIONS, REQUEST_RESULTS, STATUS, ROLE_ID, ROLES };
