const base = {
    get() {
        return {
            url : "http://localhost:8080/shuzijiatingwangzhan/",
            name: "shuzijiatingwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shuzijiatingwangzhan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "数字家庭网站"
        } 
    }
}
export default base
