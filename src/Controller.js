import Model from './Model';

class Controller {
    constructor() {
        this._model = new Model();
    }

    getMessage = () => this._model.getMessage();

    setMessage = message => this._model.setMessage(message);

    clearMessage = () => this._model.clearMessage();

    setUsers = (user) => {
        const users = this._model.getUsers(); 
        const index = this.searchByValue(users, user.id);
        
        if (!user.id) {

            return 'error id is not defined';
        } 
        if (index == -1){
            this._model.setUsers(user);
            
            return 0
        } else {

            return this.getUsers()[index].name; 
        };

    };

    сhangeUser = (user) => {
        const users = this._model.getUsers();
        const index = this.searchByValue(users, user.id);

        if (index != -1) {
            this._model.replaceUser(index, user);
        
        } 
        
    }

    getUsers = () => this._model.getUsers();

    searchByValue = (arr, id) => {
        let idx;
        let l;

        for(idx = 0, l = arr.length;arr[idx] && arr[idx].id !== id;idx++);

        return idx === l ? -1 : idx;
    }

    chekingEqualNames = (arr, name) => {
        let idx;
        let l;

        for(idx = 0, l = arr.length;arr[idx] && arr[idx].name !== name;idx++);

        return idx === l ? -1 : idx;
    }
    //как это работает??!?!?!??!?!??!??!?!?!!?
    changingNameInMessages = (name, id) => {
        let arr = this.getMessage();

        arr.forEach(element => {
            if (element.id === id) {
                element.name = name;
            }
        });

    }
}

export default Controller;