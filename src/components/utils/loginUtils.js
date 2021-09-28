import axios from 'axios'; 
const defaultOptions = {
   
    headers: {
      'Content-Type': 'application/json',
    },
  };
let instance = axios.create(defaultOptions);

export async function  getById(id) 
{
   let resp = await instance.get("/api/*https://nevobrami.herokuapp.com/employee/"+id) 
    console.log(resp.data)
    return resp.data
}

export default { getById}
 