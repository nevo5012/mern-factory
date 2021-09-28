import axios from 'axios'; 



export async function  getById(id) 
{
   let resp = await axios.get("https://nevobrami.herokuapp.com/employee/"+id) 
    console.log(resp.data)
    return resp.data
}

export default { getById}
 