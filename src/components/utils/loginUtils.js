import axios from 'axios'; 



export async function  getById(id) 
{
   let resp = await axios.get("http://localhost:8000/api/employee/"+id) 
    console.log(resp.data)
    return resp.data
}

export default { getById}
 