import axios from "../../utils/axiosInstance";

export const getGraphData = async () => {
    try {
        const response = await axios.get("/api/graph");
        return response.data;
    } catch (error) {
        console.log(error);
    }
    };
