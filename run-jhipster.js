const { spawn } = require("child_process");
const fs = require("fs");

// Crear directorio del proyecto y copiar configuración
const projectName = "MiApp";
fs.mkdirSync(projectName, { recursive: true });
fs.writeFileSync(`${projectName}/.yo-rc.json`, JSON.stringify({
  "generator-jhipster": {
    "applicationType": "monolith",
    "baseName": "MiApp",
    "packageName": "com.miempresa",
    "serverPort": "8080",
    "authenticationType": "jwt",
    "databaseType": "sql",
    "prodDatabaseType": "postgresql",
    "devDatabaseType": "h2Disk",
    "cacheProvider": "no",
    "enableHibernateCache": false,
    "searchEngine": false,
    "messageBroker": false,
    "serviceDiscoveryType": false,
    "buildTool": "maven",
    "enableTranslation": false,
    "testFrameworks": [],
    "clientFramework": "angular",
    "clientTheme": "none"
  }
}, null, 2));

console.log("Configuración creada. Ejecutando JHipster...");

// Ejecutar JHipster en la carpeta del proyecto
const jhipster = spawn("npx", ["jhipster"], { cwd: projectName, stdio: "inherit" });

jhipster.on("close", (code) => {
  console.log(`JHipster terminó con código de salida ${code}`);
});
