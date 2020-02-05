class Model {
    constructor() {
        this._messages = [];
        this._users = [];
    }

    setMessage = message => this._messages.push(message);

    clearMessage = () => this._messages = [];

    getMessage = () => this._messages;

    setUsers = user => this._users.push(user);

    getUsers = () => this._users;

    replaceUser = (index, element) => {
        this._users.splice(index, 1, element)
    }

}

export default Model;