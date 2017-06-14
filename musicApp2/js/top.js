(function(global){

  var _INFO_={
  	plug:"MusicTop",
  	version:"1.0.1"
  }
  var defaults={
  bgImg:"",	
  bgColor:"",
  musicLogo:"",	
  position:{},	
  nodeID:"",
  htmls:`
		<h1 class="logo"><a class="top_a" href="http:www.baidu.com"></a></h1>
		<a href="javascript:;" class="download">下载酷狗</a>
		<i class="search_icon"><a class="top_a" href="javascript:;"></a></i>
	  `
  };
  var PlugCode=function(options){
  var settings=Object.assign({},defaults,options);

  var topDOM=document.getElementById(settings.nodeID);
  if(!topDOM) topDOM=document.body;

  var topBox=document.createElement('div');

  topBox.className="topBox";
  topBox.innerHTML=settings.htmls;
  topDOM.appendChild(topBox);

  topLogo=topBox.querySelectorAll('h1')[0];
  topDownload=topBox.querySelectorAll('a')[1];
  topSearch=topBox.querySelectorAll('a')[2];
  //下面为菜单所实现的功能
topSearch.addEventListener('click',function(){
document.getElementById('menu').style.display="none";
document.getElementById('search').style.display="block";
});



  //下面的为用户定制操作


  if(settings.bgColor)  topBox.style.backgroundColor=""+settings.bgColor+"";
  if(settings.bgImg) {
  	topBox.style.backgroundImage="url("+settings.bgImg+")";
  	topBox.style.backgroundRepeat="no-repeat";
  	topBox.style.backgroundSize="100%";
  };
  if(settings.musicLogo) {
  	topLogo.style.backgroundImage="url("+settings.musicLogo+")";
  	topLogo.style.backgroundSize="155px 40px";


  };
  if(settings.position) {
  	topBox.style.top=""+settings.position.top+"";
  	topBox.style.left=""+settings.position.left+"";
  };

  };

  global[_INFO_.plug]=PlugCode;
})(typeof window!==undefined?window:this);