const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const bundlePath = path.join(distPath, 'bundle.js');

// Crée le dossier dist/ s'il n'existe pas
fs.mkdirSync(distPath, { recursive: true });

// Génère un fichier bundle.js contenant le code source transformé
const source = fs.readFileSync(path.join(__dirname, 'src', 'index.js'), 'utf8');
const bundle = `/* Build generated at ${new Date().toISOString()} */\n${source}\nconsole.log(hello());\n`;

fs.writeFileSync(bundlePath, bundle, 'utf8');

console.log(`Build OK: ${bundlePath}`);
