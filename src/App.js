import path from 'path';
import express, { response } from 'express';
import Controller from './Controller';

class App {
    constructor() {
        this._controller = new Controller();
        this._app = express();
        this._app.use(express.json());
        this._app.use(express.static(path.resolve(__dirname, '../public')));
        
        this._app.get('/getip', this.onGetIp);
        this._app.get('/getmessages', this.onGetMsg);
        this._app.get('/getusers', this.onGetUsers);
        this._app.put('/putmessage', this.onPutMessage);
        this._app.put('/putuser', this.onPutUser);
        this._app.put('/putchangeuserstate', this.onPutChangeUserState);
        this._app.put('/putchangeusername', this.onPutChangeUserName);
    }

    onGetIp = (request, response) => {

        const ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        response.send(JSON.stringify({ip : ip}))

    }

    onGetUsers = (request, response) => {
        const data = this._controller.getUsers();

        response.json(data);
        response.end();
    }

    onGetMsg = (request, response) => {
        const data = this._controller.getMessage();
    
        response.json(data);
        response.end();
    }

    onPutMessage = (request, response) => {
        let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const { body } = request;
        
        let user = this._controller.getUsers()[(this._controller.searchByValue(this._controller.getUsers(), body.id))];

        body.time =  new Date().getTime();
        body.ip =  user.ip;
        body.name =  user.name;

        this._controller.setMessage(body);

        response.end();

    }

    onPutUser = (request, response) => {
        let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const { body } = request;
        
        body.state = true;
        body.ip = ip;
        if (!body.name) {
            body.name = ip;
        }
 
        const data = this._controller.setUsers(body);
        
        response.json(data)
        response.end();
    }

    onPutChangeUserState = (request, response) => {
        let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const { body } = request;
        
        let user = this._controller.getUsers()[(this._controller.searchByValue(this._controller.getUsers(), body.id))];

        if (body.state !== true) {
            user.state = new Date().getTime();
        } else {
            user.state = true;
        }
        
        user.ip = ip;

        const data = this._controller.сhangeUser(user);
    
        response.end();
    }

    onPutChangeUserName = (request, response) => {
        let ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
        const { body } = request;

        let user = this._controller.getUsers()[(this._controller.searchByValue(this._controller.getUsers(), body.id))];

        user.ip = ip;
        user.state = true;
        
        if (this._controller.chekingEqualNames(this._controller.getUsers(), body.name) == -1) {
            user.name = body.name;
            this._controller.сhangeUser(user);
            this._controller.changingNameInMessages(body.name, body.id);
    
            
            response.json(true);
        } else {
            response.json(false);
        }; 
        
        response.end();
    }

    getApp = () => this._app;
}

export default App;