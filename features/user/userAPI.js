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
// let res=await axiosInstance.get('/api/referral-hierarchy')

export const getReferralHierarchy = async () => {
    try {
        let res = await axiosInstance.get('/api/referral-hierarchy')
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}
// let res = await axiosInstance.get('/api/referral-level-count')
export const getReferralLevelCount = async () => {
    try {
        let res = await axiosInstance.get('/api/referral-level-count')
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}

// /api/commissionhistory
export const getCommissionHistories = async () => {
    try {
        let res = await axiosInstance.get('/api/commissionhistory')
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}