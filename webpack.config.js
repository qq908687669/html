// const path = require('path')
// module.exports = {
//     mode:'development', //当前是开发模式
//     //入口 出口
//     entry:path.resolve(__dirname,'./src/index.js'), //写路径采用绝对路径(_dirname指的是根目录)，防止文件夹变动后，需要重新更改路径
//     output: { //出口配置
//         filename:'index.js',
//         path:path.resolve(__dirname,'development') //把当前bundle放到dist文件夹下(没有dist文件夹会自动创建)
//     }
// }
module.exports = (env) =>{
    console.log(env) //环境变量 {development:true}
}