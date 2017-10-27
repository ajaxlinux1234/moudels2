(function(global){
	var _INFO_={
		plug:'Menu',
		version:'1.0.1'
	},defaults={
		nodeID:'',
		position:'',
		items:[],
        itemsColor:'',
        outBoxStyle:'',
        outBoxIds:[],
        mainBox:'',
        style:{
        	"menuBox":"display:flex;width:100%;height:80px;line-height:80px;background:red;",
        	"menuLi":'flex:1;height:100%;list-style:none;line-height:80px;text-align:center;',
        	"menuA":'display:inline-block;height:100%;width:50%;line-height:80px;text-align:center;color:white;border-bottom:4px solid black;text-decoration:none;box-sizing:border-box;'
        }
	}

	function Menu(options){
        this.extends(defaults,options);
       var menuDom=document.getElementById(defaults.nodeID)||document.body;
       var menuBox=document.createElement('ul');
       menuBox.style=defaults.style.menuBox;
       menuDom.appendChild(menuBox);

       for(var i=0;i<defaults.items.length;i++){
       	var menuLi=document.createElement('li');
       	var menuA=document.createElement("a");

       	menuLi.setAttribute("data",defaults.items[i]);

       	menuLi.style=defaults.style.menuLi;
       	menuA.style=defaults.style.menuA;
       	menuA.innerText=defaults.items[i];
       	menuA.href="javascript:;";
        
       	menuLi.appendChild(menuA);
       	menuBox.appendChild(menuLi);
       }

      	// 遍历所有的div块,对其进行默认样式的书写
      	

       for(var i=0;i<defaults.outBoxIds.length;i++){
       	var mainDiv=document.getElementById(defaults.outBoxIds[i]);
       	mainDiv.style=defaults.outBoxStyle;
       	mainDiv.className="outBox";
       }
       // 下面为根据hash进行页面的切换
       var aBox=menuBox.querySelectorAll('a');
       var outBoxs=document.getElementsByClassName('outBox');
       var aBoxArr=this.collToArr(aBox);
       console.log(aBox);
       console.log(this.collToArr(aBox));
       for(var i=0;i<aBox.length;i++){
       			var _this=this;
       			console.log(_this);
	       		aBox[i].addEventListener(
		       		(function(){
		       		return _this.isPC()? "click":"touchstart";
		       		})(),function(){ 
		       			console.log("aha");
		       			// for(var j=0;j<outBoxs.length;i++){
		       			// 	// $(outBoxs[j]).hide('slow');
		       			// 	outBoxs[j].style.display="none";
		       			// }
		       			// // //在这个地方写页面切换动画
		       			// // // $(outBoxs[aBoxArr.indexOf(this)]).animate({
		       			// // // "left":"-100%"
		       			// // // },1500,"swing");
		       			// // // $(selector).animate(styles,speed,easing,callback)
		       			// // // $(outBoxs[aBoxArr.indexOf(this)]).show("slow");
		       			// outBoxs[aBoxArr.indexOf(this)].display="block";
		       			// window.location.hash=outBoxs[aBoxArr.indexOf(this)].id;
		       		}
	       		)
       		
       		}
      
	}


	Menu.prototype={
		extends:function(){
			for(var i=1;i<arguments.length;i++){
				for(var j in arguments[i]){
					arguments[0][j]=arguments[i][j];
				}
			}
		},
		isPC:function(){
			    var userAgentInfo = navigator.userAgent;
			    var Agents = ["Android", "iPhone",
			                "SymbianOS", "Windows Phone",
			                "iPad", "iPod"];
			    var flag = true;
			    for (var v = 0; v < Agents.length; v++) {
			        if (userAgentInfo.indexOf(Agents[v]) > 0) {
			            flag = false;
			            break;
			        }
			    }
			    return flag;
		},
		collToArr:function(coll){
			var arr=[];
			for(var i=0;i<coll.length;i++){
				arr.push(coll[i]);
			}

			return arr;
		}
	}

	global[_INFO_.plug]=Menu;
})(this)