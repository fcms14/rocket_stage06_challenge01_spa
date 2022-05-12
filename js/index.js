import { Router } from './router.js';

const router = new Router();

router.add(404,'/pages/404.html')
router.add('/exploracao','/pages/exploracao.html')
router.add('/index.html','/pages/home.html')
router.add('/universo','/pages/universo.html')
router.add('/','/pages/home.html')

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();