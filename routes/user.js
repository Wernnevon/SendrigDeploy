// Definição dos esquemas a serem usados pela documentação Swagger.
/**
 * @swagger
 * components:
 *   schemas:
 *     NovoUsuario:
 *       type: object
 *       properties:
 *         username:
 *           type: string
 *           description: nome do usuario.
 *           example: Wernnevon
 *         email:
 *           type: string
 *           description: email do usuario.
 *           example: wernnevon@email.com
 *         password:
 *           type: string
 *           description: senha do usuario.
 *           example: 12345678
 *     Usuario:
 *       allOf:
 *         - $ref: '#/components/schemas/NovoUsuario'
 *         - type: object
 *       properties:
 *         id:
 *           type: number
 *           description: id do usuario.
 *           example: 0
 *         username:
 *           type: string
 *           description: nome do usuario.
 *           example: Wernnevon
 *         email:
 *           type: string
 *           description: email do usuario.
 *           example: wernnevon@email.com
 *         password:
 *           type: string
 *           description: senha do usuario.
 *           example: 12345678
 *         status: 
 *           type: boolean
 *           description: Statuda da conta do usuario.
 *           example: false
 *         createdAt:
 *           type: string
 *           description: Data no formato ISO em que o contato foi registrado.
 *           example: 2021-07-08T18:08:19.965Z
 *         updatedAt:
 *           type: string
 *           description: >
 *             Data no formato ISO em que o contato foi atualizado pela última vez.
 *           example: 2021-07-08T18:08:19.965Z
 */

const express = require("express");
const router = express.Router();

// Importa o controller
const userController = require("../controllers/userController");

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Cria um novo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoUsuario'
 *     responses:
 *       201:
 *         description: Usuario criado
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 usuario:
 *                   $ref: '#/components/schemas/Usuario'
 */

router.post("/register", userController.userCreate);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Autenticar usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoUsuario'
 *     responses:
 *       201:
 *         description: Usuario Autenticado
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 email:
 *                   type: string
 *                   description: email do usuario.
 *                   example: wernnevon@email.com
 *                 password:
 *                   type: string
 *                   description: senha do usuario.
 *                   example: 12345678
 */

router.post("/login", userController.userLogin);

/**
 * @swagger
 * /user/activeAccount/{id}:
 *   get:
 *     summary: Ativa conta do usuario.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numérico da conta a ser ativada.
 *         schema:
 *           type: integer
 *     responses:
 *       201:
 *         description: Conta de usuario ativada
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 usuario:
 *                   $ref: '#/components/schemas/Usuario'
 */

router.get("/activeAccount/:id", userController.userActive)

module.exports = router;
