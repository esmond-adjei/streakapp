import axios from 'axios';
const APIURL = process.env.NEXT_PUBLIC_API_URL;


export const getTaskList = async () => {
    try {
        const response = await axios.get(`${APIURL}/task/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching task list:', error);
    }
}

export const getTask = async (taskId) => {
    try {
        const response = await axios.get(`${APIURL}/task/${taskId}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching task:', error);
    }
}

export const createTask = async (newTask) => {
    try {
        const response = await axios.post(`${APIURL}/task/`, newTask);
        return response.data;
    } catch (error) {
        console.error('Error occurred while creating task', error);
    }
}