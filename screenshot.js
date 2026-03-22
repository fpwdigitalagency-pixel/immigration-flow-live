/**
 * screenshot.js — Puppeteer loop de review
 * Usage: node screenshot.js
 *
 * Prend un screenshot de chaque section de index.html
 * et les exporte dans /screenshots/
 *
 * Install: npm install puppeteer
 */

const puppeteer = require('puppeteer');
const path      = require('path');
const fs        = require('fs');

const HTML_FILE = path.resolve(__dirname, 'index.html');
const OUT_DIR   = path.resolve(__dirname, 'screenshots');

// Sections à capturer — sélecteurs CSS ou positions scroll
const SHOTS = [
    { name: '00-hero',         selector: '.hero' },
    { name: '01-proof',        selector: '.proof-strip' },
    { name: '02-mechanism',    selector: '.steps-grid' },
    { name: '03-for-who',      selector: '.for-who-grid' },
    { name: '04-fomo',         selector: '.fomo' },
    { name: '05-form',         selector: '#inscription' },
    { name: '06-faq',          selector: '.faq-list' },
    { name: '07-full-desktop', selector: null, fullPage: true },
    { name: '08-full-mobile',  selector: null, fullPage: true, mobile: true },
];

const VIEWPORT_DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 2 };
const VIEWPORT_MOBILE  = { width: 390,  height: 844, deviceScaleFactor: 3, isMobile: true };

async function run() {
    if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Désactive les animations pour des screenshots propres
    await page.setViewport(VIEWPORT_DESKTOP);
    const url = `file://${HTML_FILE}`;

    for (const shot of SHOTS) {
        const vp = shot.mobile ? VIEWPORT_MOBILE : VIEWPORT_DESKTOP;
        await page.setViewport(vp);
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Déclenche les fade-up pour que tout soit visible
        await page.evaluate(() => {
            document.querySelectorAll('.fade-up').forEach(el => el.classList.add('in'));
        });

        // Petite pause pour les transitions
        await new Promise(r => setTimeout(r, 400));

        const outPath = path.join(OUT_DIR, `${shot.name}.png`);

        if (shot.selector) {
            const el = await page.$(shot.selector);
            if (el) {
                await el.screenshot({ path: outPath });
                console.log(`✓  ${shot.name}.png`);
            } else {
                console.warn(`⚠  Sélecteur introuvable: ${shot.selector}`);
            }
        } else {
            await page.screenshot({ path: outPath, fullPage: shot.fullPage || false });
            console.log(`✓  ${shot.name}.png`);
        }
    }

    await browser.close();
    console.log(`\nScreenshots exportés dans: ${OUT_DIR}`);
}

run().catch(err => {
    console.error('Erreur Puppeteer:', err);
    process.exit(1);
});
