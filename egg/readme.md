- 阿里的 node 企业级开发框架
- instagram 前后端分离
    react ANTD
    后端 /api/v2
    /login/register  post
    用户模块的开发
- egg.js app 整个应用
    context controller
    controller 目录下的所有文件,自动转化成中间件

- router , 创建了controller  快
    post 发送表单, 跨站访问 有安全问题
    egg.js 配置项
    config.security = {csrf:{enable:false}}
    Controller require('egg').Controller