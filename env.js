 //开发环境
 const LOCAL_API={

    host: "192.168.10.85", //数据库地址
    user: "root", //账号
    password: "Root@123@789", //密码
    database: "nanshan_economic_small", //库名
    multipleStatements: true, //允许执行多条语句
  
}

//阿里云环境
 const ALI_API={

    host: "192.168.10.86", //数据库地址
    user: "root", //账号
    password: "Root@123@789", //密码
    database: "nanshan_economic_small", //库名
    multipleStatements: true, //允许执行多条语句
  
}

//正式环境
 const PRO_API={

    host: "192.168.10.87", //数据库地址
    user: "root", //账号
    password: "Root@123@789", //密码
    database: "nanshan_economic_small", //库名
    multipleStatements: true, //允许执行多条语句
  
}

module.exports = {LOCAL_API,ALI_API,PRO_API} 