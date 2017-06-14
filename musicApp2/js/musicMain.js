(function(global){
	var _INFO_={
		plug:"musicMain",
		version:'1.0.1'
	};

	var defaults={
		nodeID:"",
		position:{},
		bgImg:'',
		bgColor:'',
		htmls:`
			 <div class="musicCeng">
	 </div>
	 <div class="musicMain">
	 <div class="main_img">
	 	<img src="http://singerimg.kugou.com/uploadpic/softhead/200/20170515/20170515114300444.jpg" alt="歌手">
	 	</div>
	 	<div class="lyric">
	 		此情可见
	 	</div>
	 	<div class="main_progress">
	 		<div class="timeShow"></div>
	 		<input type="range">
	 		<div class="timeTotal"></div>
	 	</div>
	 	<div class="main_control">
	 		<i class="btn_pre"></i>
	 		<i class="btn_play"></i>
	 		<i class="btn_next"></i>
	 	</div>
	 	<div class="main_download"><a href="javascript:;">下载这首歌</a></div>
	 	</div>
		`
	};

	var PlugCode=function(options){
		var settings=Object.assign({},defaults,options);
		var musicMainDOM=document.getElementById(settings.nodeID);
		if(!musicMainDOM) musicMainDOM=document.body;
		var musicMainBox=document.createElement('div');
		musicMainBox.className="musicOut";
		musicMainBox.innerHTML=settings.htmls;
		musicMainDOM.appendChild(musicMainBox);


	};


	global[_INFO_.plug]=PlugCode;

})(typeof window!==undefined?window:this)