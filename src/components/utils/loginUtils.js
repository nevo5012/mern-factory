import axios from 'axios'; 



export async function  getById(id) 
{
   let resp = await axios.get("https://dashboard.heroku.com/apps/nevobrami/employee/"+id) 
    console.log(resp.data)
    return resp.data
}

export default { getById}
 