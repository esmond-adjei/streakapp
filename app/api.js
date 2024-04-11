const APIURL = process.env.NEXT_PUBLIC_API_URL;


export const getTaskList = async () => {
    try {
        const response = await axios.get(`${APIURL}/task/`);
        console.log(">> response", response)
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

export const getTask = async () => {
    try {
        const response = await axios.get(`${APIURL}/task/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}