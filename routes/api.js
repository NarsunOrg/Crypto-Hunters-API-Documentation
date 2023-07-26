const express=require('express')
const router=express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Movies:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - bannerimage
 *         - description
 *         - categories
 *
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The book title
 *         image:
 *           type: string
 *           description: The book author
 *         bannerimage:
 *           type: string
 *           description: The book author
 *         description:
 *            type: string
 *            description: The book author
 *         categories:
 *            type: string
 *            description: The book author
 *         episodes:
 *            type: array
 *
 *            items:
 *              type: object
 *              properties:
 *                episodeNumber:
 *                  type: number
 *                  description: episodeNumber
 *                image:
 *                  type: string
 *                  description: episodeNumber image
 *
 *
 *         video:
 *            type: string
 *            description: video link here
 *
 *       example:
 *         id: d5fE_asz
 *         name: The New Turing Omnibus
 *         image: Alexander K. Dewdney
 *         bannerimage: image.jpg
 *         description: movie description
 *         categories: kids
 *         episodes: [{ "episodeNumber":1,"image":"india.jpg"}]
 *
 */


/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The Movies managing API
 */


/**
 * @swagger
 * /GetData:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: The list of the movies
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                  type: array
 *                  items:
 *                  $ref: '#/components/schemas/Movies'
 */

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Login API
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Returns the list of all the books
 *     tags: [Login]
 *     consumes:
 *      - application/json
 *     produces:
 *      - application/json
 *     parameters:
 *      - in: body
 *        name: Login
 *        description: Login to crypto hunter
 *        required: true
 *        schema:
 *          $ref: '#/definitions/LoginCredentials'
 *        example:
 *          email: kissa+5@narsun.pk
 *          password: Testing@123
 *     responses:
 *       '200':
 *         description: Success
 *         schema:
 *           $ref: '#/definitions/LoginResponse'
 *       '400':
 *         description: Invalid request body or credentials
 *       '500':
 *         description: Internal server error
 *       
 * 
 */

/**
 * @swagger
 * definitions:
 *   LoginCredentials:
 *     type: object
 *     required:
 *       - email
 *       - password
 *     properties:
 *      email:
 *        type: string
 *        description: User's email address
 *        default: kissa+5@narsun.pk
 *      password:
 *        type: string
 *        description: User's password
 *        default: Testing@123
 *   LoginResponse:
 *     type: object
 *     properties:
 *       token:
 *       type: string
 *       description: Login token generated for the user
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
module.exports=router