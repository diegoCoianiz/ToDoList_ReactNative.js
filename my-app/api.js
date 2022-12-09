//const API = "http://localhost:3000/task"
const API = "https://5804-2803-9800-98c3-114-c4f9-3148-47fe-4b0e.ngrok.io/task"


export const getTasks = async () => {
        const res = await fetch(API)
        return await res.json()
}

export const getTask = async (id) => {
        const res = await fetch(`${API}/${id}`)
        return await res.json()
}

export const createTask = async (newTask) => {
        const res = await fetch(API, {
                method: "POST", 
                headers: {Accept: "application/json", "content-Type": "application/json"},
                body: JSON.stringify(newTask)
        })
        return res.json()       
}

export const deleteTask = async (id) => {
        await fetch(`${API}/${id}`, {
                method: "DELETE"
        })
}

export const updateTask = async (id, updatedTask) => {
        const res = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: {Accept: "application/json", "content-Type": "application/json"},
                body: JSON.stringify(updatedTask)
        })
        //return await res.json()
}