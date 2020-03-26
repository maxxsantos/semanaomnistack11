const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos HTTP:

// GET: Buscar/Listar uma informação do back-end
// POST: Criar uma informação do back-end
// PUT: Alterar uma informação do back-end
// DELETE: Deletar uma informação no back-end

/**
 * Ferramentas para desenvolver:
 * 
 * Insomnia - https://support.insomnia.rest/article/23-installation#ubuntu
 * nodemon - npm install nodemon -D
 * Knex - http://knexjs.org/ -- npx knex init
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corrpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server  - Relacionais
  * NoSQL: MongoDB, CouchDB, etc...								                - Não Relacionais
  */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()			-Knex.js
 */

// app.post('/users', (request, response) => {
// 	const body = request.body;

// 	console.log(body);

// 	// return response.send('Hello World')
// 	return response.json({
// 		evento: 'Semana OmniStack 11.0',
// 		aluno: 'Max Simões dos Santos'
// 	});
// });

// app.listen(3333);
