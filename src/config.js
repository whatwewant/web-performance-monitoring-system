import path from 'path'
let PROT = 18088;

// ORIGIN参数匹配是否是https
const IS_HTTPS = process.env.IS_HTTPS || 'FALSE'
let ORIGIN = process.env.DOMAIN ? `https://${process.env.DOMAIN}` : process.env.ORIGIN || `http://127.0.0.1:${PROT}`
if(IS_HTTPS == 'TRUE') ORIGIN = `https://127.0.0.1:${PROT}`

// 系统配置
export let SYSTEM = {
	//允许调用接口的域名，用来检测防盗链
	ORIGIN: ORIGIN,

	// HTTP服务器端口号
	PROT: PROT,
	
	// 分页条数
	PAGESIZE: 50,

	DEBUG: false,

	// 七牛云根路径
	BASEIMG: 'http://xxx.bkt.clouddn.com/',

	// 后台登录账号和密码  （可替换为数据库用户密码登录方式）
	USERMSG:{
		USERNAME:'admin',
		PASSWORD:'123456789'
	},
}

export let DB = {
	// 服务器地址
	HOST: process.env.MYSQL_HOST || '127.0.0.1',

	// 数据库端口号     
	PROT: process.env.MYSQL_PORT || 3306,

	// 数据库用户名              
	USER: process.env.MYSQL_USER || 'root',

	// 数据库密码    
	PASSWORD: process.env.MYSQL_PASSWORD || '123456',

	// 数据库名称    
	DATABASE: process.env.MYSQL_DATABASE || 'web-performance',

	// 默认"api_"
	PREFIX: 'web_'
}

export let NODEMAILER = {
	// SMTP服务提供商域名
	HOST: '163',
	// 用户名/用户邮箱
	USER: 'xxx@163.com',
	// 邮箱密码
	PASSWORD: '132456',
}


