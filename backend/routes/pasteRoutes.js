const express = require("express");
const router = express.Router();

const {
  createPaste,
  getAllPastes,
  getPasteById,
  updatePaste,
  deletePaste,
} = require("../controllers/pasteController");

/**
 * @swagger
 * tags:
 *   name: Pastes
 *   description: Paste management API
 */

/**
 * @swagger
 * /pastes:
 *   post:
 *     summary: Create a new paste
 *     tags: [Pastes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Hello World
 *               content:
 *                 type: string
 *                 example: This is my first paste.
 *     responses:
 *       201:
 *         description: Paste created successfully
 */
router.post("/", createPaste);

/**
 * @swagger
 * /pastes:
 *   get:
 *     summary: Get all pastes
 *     tags: [Pastes]
 *     responses:
 *       200:
 *         description: Returns all pastes
 */
router.get("/", getAllPastes);

/**
 * @swagger
 * /pastes/{id}:
 *   get:
 *     summary: Get a paste by ID
 *     tags: [Pastes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Paste UUID
 *     responses:
 *       200:
 *         description: Paste found
 *       404:
 *         description: Paste not found
 */
router.get("/:id", getPasteById);

/**
 * @swagger
 * /pastes/{id}:
 *   put:
 *     summary: Update a paste
 *     tags: [Pastes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Paste UUID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: Updated Title
 *               content:
 *                 type: string
 *                 example: Updated content
 *     responses:
 *       200:
 *         description: Paste updated successfully
 *       400:
 *         description: Title and content are required
 *       404:
 *         description: Paste not found
 */
router.put("/:id", updatePaste);

/**
 * @swagger
 * /pastes/{id}:
 *   delete:
 *     summary: Delete a paste
 *     tags: [Pastes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Paste UUID
 *     responses:
 *       200:
 *         description: Paste deleted successfully
 *       404:
 *         description: Paste not found
 */
router.delete("/:id", deletePaste);

module.exports = router;