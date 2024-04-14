import axiosInstance from '../../utils/axiosInstance';

export const getUserInformation = async (token) => {
    try {
        let res = await axiosInstance.get('/api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}