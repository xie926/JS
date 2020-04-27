var str = '小明：大神么么哒，正好是我想要的，我的邮箱是xiaoming@qq.com小红：我老公最爱看这个了，我想给他一个惊喜，么么么哒，邮箱是xiaohong@sina.com我：好人一生平安，邮箱是wuyou@163.com';

var str1 = str.match(/\w+@\w+\.\w+/g)
console.log(str1);