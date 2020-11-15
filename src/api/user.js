import request from 'request.js'
//登录请求函数
export const login = data => {		
	return request({
		method:'POST',
		url:'/api/login',
		data:data
	})
}