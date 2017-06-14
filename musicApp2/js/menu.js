// 功能：
// 1.传入菜单内容对象可以创建相应数量的菜单
// 2.根据hash对象动态的利用ajax加载数据
// 3.定制菜单下划线颜色
// 4.定制是否有下划线


(function(global){
	var _INFO_={
    plug:"menu",
    version:"1.0.1"
	};
	var defaults={
	  items:[],
	  position:{},
	  bottomColor:"",
	  nodeID:"",
	  htmls:`
		<ul>			
		</ul>
	  `
        
	};
	var PlugCode=function(options){
	  var settings=Object.assign({},defaults,options);
	  var menuDOM=document.getElementById(settings.nodeID);

	  if(!menuDOM) menuDOM=document.body;
	  var menuBox=document.createElement('div');
	  menuBox.className="menu";
	  menuBox.innerHTML=settings.htmls;

	  menuUl=menuBox.querySelectorAll('ul')[0];
	
	  
	  menuDOM.appendChild(menuBox);
     
      //下面的方法为用户定制
	  if(settings.items)  {
	  	for(var i=0,len=settings.items.length;i<len;i++){
	  		  var newLi=document.createElement("li");
			  var newA=document.createElement('a');
			  newA.href="javascript:;";
		      newLi.appendChild(newA);
		      newA.innerHTML=settings.items[i];
		      menuUl.appendChild(newLi);
      
	  	}
	  };

	  if(settings.position) {
	  	menuBox.style.position="relative";
	  	menuBox.style.left=""+settings.position.left+"";
	  	menuBox.style.top=""+settings.position.top+"";
	  };
	  if(settings.bottomColor) {
	  	menuA=menuBox.querySelectorAll('a');
	  	for(var i=0,len=menuA.length;i<len;i++){
	  		menuA[i].style.borderBottomColor=""+settings.bottomColor+"";
	  	}
	  };

	   //下面的方法为跨域资源的加载(只针对与酷狗音乐)      

	}

  global[_INFO_.plug]=PlugCode;
  

})(typeof window!==undefined?window:this)


