const {
    app,
    BrowserWindow,
    Menu
} = require('electron');

app.on('ready', () =>
{
    let window = new BrowserWindow({
        frame: false,
        width: 1280,
        height: 720,
        show: false
    });

    window.loadURL(`file:///${__dirname}/index.html`);
    window.on('close', () => { window = null });

    let splash = new BrowserWindow({
        frame: false,
        width: 300,
        height: 300,
        transparent: true
    });

    function loadUp(){
        window.show();
        splash.destroy();
    }

    // splash.once("show", () => {
    //     window.webContents.once("dom-ready", () =>{
    //         window.show();
    //         splash.destroy();
    //     })
    // });

    splash.loadURL(`file:///${__dirname}/splash.html`);
    splash.show();

    setTimeout(loadUp, 2000);

    // Remove menu bar
    // const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Menu.setApplicationMenu(mainMenu);
    // demo.setMenu(mainMenu);
});

const mainMenuTemplate = [
    {
        label: 'File',
        submenu: [{role: "TODO"}]
    }
];