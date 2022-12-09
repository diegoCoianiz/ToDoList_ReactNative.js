import {Router} from "express";
const router = Router()

/**
 * @swagger
 * tags:
 *  name: MongoDB Tasks
 *  description: Tasks endopints
 */

/**
 * @swagger
 * /mongo/task:
 *   get:
 *     summary: get all the task
 *     tags: [Tasks]
 */
 router.get("/task", mongoGetTask)

 /**
  * @swagger
  * /mongo/task/count:
  *   get:
  *      summary: Get the number of task
  *      tags: [Tasks]
  */
 router.get("/task/count", mongoGetTaskCount)
 
 /**
  * @swagger
  * /mongo/task/:id:
  *    get:
  *      summary: Get a specifc task
  *      tags: [Tasks]
  */
 router.get("/task/:id", mongoGetOneTask)
 
 /**
  * @swagger
  * /mongo/task:
  *    post:
  *      summary: Create a new task
  *      tags: [Tasks]
  */
 router.post("/task", mongoCreateTask)
 
 /**
  * @swagger
  * /mongo/task/:id:
  *    delete:
  *      summary: Delete a specific task
  *      tags: [Tasks]
  */
 router.delete("/task/:id", mongoDeleteTask)
 
 /**
  * @swagger
  * /mongo/task/id:
  *    put:
  *      summary: Update a specific task
  *      tags: [Tasks]
  */
 router.put("/task/:id", mongoUpdateTask)
 
 export default router