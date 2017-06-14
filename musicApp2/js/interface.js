// 功能：
// 1.用户可以自定义背景色（换肤）
// 2.播放暂停等基本功能

(function(global){
	var _INFO_={
		plug:"interface",
		version:'1.0.1'
	};
	var defaults={
		position:{},
		nodeID:"",
		bgColor:"",
		// authorChange:"",
    bgImg:"",
    dragable:"",
		htmls:`
		<audio src="http://fs.open.kugou.com/5336efe79388863f1d86713f2eb36b93/59327bed/G010/M09/11/14/Sg0DAFT932eAac7SABKxgt4LAhQ969.m4a" autoplay="true" ></audio>
  	<div class="min" >
  		<div class="min_left">
  		<a href="javascript:;"><img src="./images/zhuang.jpg" alt="演唱者"></a>
  		</div>
  		<div class="min_right">
  			<i class="btn1"></i>
  			<i class="btn2"></i>
  			<i class="btn3"><a href="http://fs.open.kugou.com/5336efe79388863f1d86713f2eb36b93/59327bed/G010/M09/11/14/Sg0DAFT932eAac7SABKxgt4LAhQ969.m4a"></></i>
  		</div>
  	</div>`

	};


	var PlugCode=function(options){
     var settings=Object.assign({},defaults,options);

     var interfaceDOM=document.getElementById(settings.nodeID);

     if(!interfaceDOM) interfaceDOM=document.body;

     var interfaceBox=document.createElement('div');
     interfaceBox.innerHTML=settings.htmls;
     interfaceBox.className="interface";

     interfaceDOM.appendChild(interfaceBox);


     //功能部分
     oAudio=interfaceBox.querySelectorAll('audio')[0];

     oBtn1=interfaceBox.querySelectorAll('i')[0];
     oBtn2=interfaceBox.querySelectorAll('i')[1];
     oBtn3=interfaceBox.querySelectorAll('i')[2];
     oImg=interfaceBox.querySelectorAll('img')[0];
     oA=interfaceBox.querySelectorAll('a')[1];
     oDiv1=interfaceBox.querySelectorAll('div')[0];
     var state=true;
      
     function musicState(){
       var url1="./images/play_icon.png";
       var url2="./images/pause_icon.png";
      if(state){
      	state=false;
      	oAudio.pause();
      	oBtn1.style.background="url("+url1+")";
      }else{
      	state=true;
      	oAudio.play();
      	oBtn1.style.background="url("+url2+")";
      }
     };
     
     oBtn1.addEventListener('click',function(){
       musicState();
     });


      //下一首

     
      var vm=new Vue({
      	el:"body",
      	data:{
        
      	},
      	methods:{
      		getLocal:function(){
              this.$http.get('./other/liudehua.js').then(function(res){
              var s=toString.call(res.data);              
              console.log(s);
              console.log(res.data.data.info[0].hash);
              console.log(res.data);

              for(var i=0,len=res.data.data.info.length;i<len;i++){
                oAudio.src='http://fs.open.kugou.com/a6412aac2754bbee12e73fb716e220b8/5932d962/G003/M07/0B/07/Qw0DAFS2eDiIbjzmAA8FeW5f8TYAAAVKwPdVwwADwWR801.m4a';
                oImg.src="./images/liudehua.jpg";
                oA.src="http://fs.open.kugou.com/a6412aac2754bbee12e73fb716e220b8/5932d962/G003/M07/0B/07/Qw0DAFS2eDiIbjzmAA8FeW5f8TYAAAVKwPdVwwADwWR801.m4a";

              }
              },function(){
               console.log("读取失败");
              })
      		},
      		getWeb:function(){

      		}
      	}
      });

      oBtn2.addEventListener('click',function(){
       vm.getLocal();
      });

     
     //下面的为用户定制

     if(settings.position)  {
      interfaceBox.style.top=settings.position.top;
      interfaceBox.style.left=settings.position.left;
     }

     if(settings.bgColor) oDiv1.style.backgroundColor=""+settings.bgColor+"";


     if(settings.bgImg) oDiv1.style.backgroundImage="url("+settings.bgImg+")";
     
     if(settings.dragable) interfaceBox.dragable=""+settings.dragable+"";



	};

	global[_INFO_.plug]=PlugCode;

})(typeof window!==undefined?window:this)