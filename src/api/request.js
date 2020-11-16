import axios from 'axios'
//实例化一个axios
export function request(config){
	const instance = axios.creat({
		baseURL:'',
		timeout:5000
	})
	return instance(config)
}