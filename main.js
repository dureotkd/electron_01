const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

const env = process.env.NODE_ENV || "development";

const isDev = env === "development" ? true : false;

// 상단메뉴 없애기
Menu.setApplicationMenu(false);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 640,
    height: 480,
    alwaysOnTop: true,
    center: true,
    // fullscreen: true,
    // kiosk: !isDev,
    // resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // 2.
      // 웹 애플리케이션을 데스크탑으로 모양만 바꾸려면 안 해도 되지만,
      // Node 환경처럼 사용하려면 (Node에서 제공되는 빌트인 패키지 사용 포함)
      // true 해야 합니다.
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Open the DevTools.
  //   win.webContents.openDevTools();

  if (isDev) {
    // 개발 중에는 개발 도구에서 호스팅하는 주소에서 로드
    win.loadFile("index.html");
    win.webContents.openDevTools();
  } else {
    // 프로덕션 환경에서는 패키지 내부 리소스에 접근
    win.loadFile(path.join(__dirname, "./build/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

console.log(env);

// If development environment
if (env === "development") {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
    hardResetMethod: "exit",
  });
}
