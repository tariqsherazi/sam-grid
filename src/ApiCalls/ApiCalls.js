import axios from 'axios';

const baseUrl = "http://localhost:5000";

 export const getDemo=async()=>{
    const {data}=await axios.get(baseUrl+'/demo')
    return data
}

export const saveDemo=async(demo)=>{
    const data=await axios.post(baseUrl+'/demo/insert',demo)
    console.log(data,'saved')
     return data
}

export const updateDemo=async(demo)=>{
    const {data}=await axios.put(baseUrl+'/demo/update/'+demo._id,demo)
    // data && navigate("/")
    return data
}

export const deleteDemo=async(demo)=>{
    const {data}=await axios.delete(baseUrl+'/demo/delete/'+demo._id)
    return data
}