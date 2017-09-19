/*
* @Author: 宏达
* @Date:   2017-09-19 12:43:35
* @Last Modified by:   宏达
* @Last Modified time: 2017-09-19 18:25:50
*/
/*单类名*/
// function getClass(classname){
// 	if(document.getElementsByClassName(classname)){
// 		return document.getElementsByClassName(classname)
// 	}else{
// 		var newarr=[];
// 		var all=document.getElementsByClassName('*');
// 		for(var i=0;i<all.length;i++){
//             if(all[i].classname==classname){
//             	newarr.push(all[i]);
//             }
// 		}
// 		return newarr;
// 	}
// }
/*多类名*/
function getClass(classname,ranger){
	ranger=ranger?ranger:document;
	if(false){
		return ranger.getElementsByClassName(classname);
	}else{
		var newarr=[];
		var all=ranger.getElementsByTagName('*');
		for(var i=0;i<all.length;i++){
            if(checkClass(all[i].className,classname)){
            	newarr.push(all[i]);
            }
		}
		return newarr;
	}
}
function checkClass(className,classname){
	var arr=className.split(' ');
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classname){
			return true;
		}
	}
   return false;
}



