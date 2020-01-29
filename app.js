//define uma instancia para o express

const express = require('express');
const app = express();

//define o EJS como nossa view engine
app.set('view engine', 'ejs');
//Usar  re.render para carregar arquivos de view ejs
// index page
app.get('/', (req, res) => {
	let bebidas = [
		{ nome: 'Cerveja', total: 3 },
		{ nome: 'Refrigerante', total: 5 },
		{ nome: 'Suco', total: 10 }
	];

	return res.render('pages/index', {
		bebidas: bebidas
	});
});
//about page
app.get('/about', (req, res) => {
	return res.render('pages/about');
});

app.listen(8080, () => {
	console.log('Iai, meu truta! Tá ligado que aqui é a porta 8080, né?.');
});
