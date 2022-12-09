import { Router } from "express";
import { getTask, getOneTask, getTaskCount, createTask,
            deleteTask, updateTask } from "../controllers/task";
const router = Router()

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: Tasks endopints
 */

/**
 * @swagger
 * /task:
 *   get:
 *     summary: get all the task
 *     tags: [Tasks]
 */
router.get("/task", getTask)

/**
 * @swagger
 * /task/count:
 *   get:
 *      summary: Get the number of task
 *      tags: [Tasks]
 */
router.get("/task/count", getTaskCount)

/**
 * @swagger
 * /task/:id:
 *    get:
 *      summary: Get a specifc task
 *      tags: [Tasks]
 */
router.get("/task/:id", getOneTask)

/**
 * @swagger
 * /task:
 *    post:
 *      summary: Create a new task
 *      tags: [Tasks]
 */
router.post("/task", createTask)

/**
 * @swagger
 * /task/:id:
 *    delete:
 *      summary: Delete a specific task
 *      tags: [Tasks]
 */
router.delete("/task/:id", deleteTask)

/**
 * @swagger
 * /task/id:
 *    put:
 *      summary: Update a specific task
 *      tags: [Tasks]
 */
router.put("/task/:id", updateTask)

export default router