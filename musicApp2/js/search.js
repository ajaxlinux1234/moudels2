(function(global){
 var _INFO_={
 	plug:'search',
 	version:'1.0.1'
 };

   var PlugCode=function PlugCode(){
 	
 	this.nodeID="";
 	this.position={};
 	this.bgImg="";
 	this.htmls=`
  <i id="i1"></i>
  <input class="search_input" type="text" id="input1"  placeholder="歌手/歌名/拼音" value=""><i class="search_input_icon"></i></input>
	<a href="javascript:;" class="search_btn" id="btn">搜索</a>
	<div class="seach_main">
		<div class="search_result_num"></div>
		<div class="search_result">
			<ul>
				<li>伍佰&China Blue - 厉害 - 2012生命的现场<i></i></li>
				<li>MadeD - 厉害<i></i></li>
			</ul>
		</div>
	</div>`;


	//以下为获取htmls中的元素

	 this.searchDOM=document.getElementById(this.nodeID);
	 this.searchBox=document.createElement('div');
	 this.searchLi=document.createElement('li');
	 this.searchBtn=this.searchBox.querySelectorAll('a')[0];
	 this.searchUl=this.searchBox.querySelectorAll('ul')[0];
      this.oI1=this.searchBox.querySelectorAll('i')[0];

 };

 PlugCode.prototype.search=function(){
 	
 	var vm=new Vue({
 		el:'body',
 		data:{
        
 		},
 		methods:{
            get:function(){

                this.$http.jsonp('http://mobilecdn.kugou.com/api/v3/search/song',{
        			params:{keyword:input1.value}
                    // jsonpCallback:"callback"
             	}).then(function(res){
                console.log(res.data);
             	},function(){
             		console.log('跨域请求失败');             		
             	});
            }
 		}
 	});
 
     btn.addEventListener('click',function(){
     	vm.get();
     });
     input1.addEventListener('focus',function(){
       btn.style.color='white';
       btn.style.background="rgba(0,0,255,.4)";
       this.border="opx";
     });
      input1.addEventListener('blur',function(){
       btn.style.background="#e5e5e5";
       btn.style.color="#959595";
     });


      i1.addEventListener('click',function(){
       document.getElementById('search').style.display="none";
        document.getElementById('menu').style.display="block";
      });
 };

 PlugCode.prototype.append=function(){
  
  if(!this.searchDOM)  this.searchDOM=document.body;
  this.searchBox.className="search";
  this.searchBox.innerHTML=this.htmls;
  this.searchDOM.appendChild(this.searchBox);

 };


 PlugCode.prototype.Boxposition=function(){
 this.searchBox.style.position="absolute";
  this.searchBox.style.top=""+this.position.top+"";
  this.searchBox.style.left=""+this.position.left+"";
 };

global[_INFO_.plug]=new PlugCode();

})(typeof window!==undefined?window:this)