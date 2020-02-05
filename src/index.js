import WServer from './WServer';

const init = () => {
    const port = process.env.PORT || 7777;
    const ws = new WServer(port);

    ws.startServer();
};

init();