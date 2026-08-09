const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const root = __dirname;
const views = path.join(root, 'views');
const publicDir = path.join(root, 'public');
const dist = path.join(root, 'dist');

function resetDist() {
    fs.rmSync(dist, { recursive: true, force: true });
    fs.mkdirSync(dist, { recursive: true });
}

function copyPublic() {
    fs.cpSync(publicDir, dist, { recursive: true });
}

async function renderPage(template, output, data = {}) {
    const templatePath = path.join(views, template);
    const html = await ejs.renderFile(templatePath, data, {
        filename: templatePath
    });

    const outputPath = path.join(dist, output);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf8');
}

async function build() {
    resetDist();
    copyPublic();

    await renderPage('index.ejs', 'index.html');
    await renderPage('login.ejs', 'login/index.html', {
        title: 'Login | LAWXYGEN'
    });
    await renderPage('404.ejs', '404.html', {
        title: 'Page Not Found | LAWXYGEN'
    });

    console.log('LAWXYGEN Cloudflare build created in /dist');
}

build().catch((error) => {
    console.error(error);
    process.exit(1);
});
