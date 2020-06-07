/*
 * 1.两个方法(用于做判断)
 *   - startsWith ：判断是否以...开头
 *   - endsWith  ：判断是否以...结尾
 * 2.字符串模板
 *   - 字符串连接
 *   -直接把东西赛到字符串里面  ${东西}
 *   -可以折行
 */

//startsWith ：判断是否以...开头(判断网站类型)

let str = "https://www.baido.com";

if (str.startsWith("http://")){
    console.log("普通网站")
}else if(str.startsWith("https://")){
    console.log("加密网站")
}else {
   console.log("其他")
}

console.log("************************************")

//endsWith  ：判断是否以...结尾(判断文件类型)
str = "a.ppt";

if (str.endsWith(".txt")){
    console.log("文本文件")
}else if (str.endsWith("ppt")){
    console.log("PPT文件")
}else {
    console.log("其他")
}
