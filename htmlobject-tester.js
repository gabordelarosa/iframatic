if (!document.querySelectorAll) {
  document.querySelectorAll = function (selectors) {
    var style = document.createElement('style'), elements = [], element;
    document.documentElement.firstChild.appendChild(style);
    document._qsa = [];

    style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
    window.scrollBy(0, 0);
    style.parentNode.removeChild(style);

    while (document._qsa.length) {
      element = document._qsa.shift();
      element.style.removeAttribute('x-qsa');
      elements.push(element);
    }
    document._qsa = null;
    return elements;
  };
}

if (!document.querySelector) {
  document.querySelector = function (selectors) {
    var elements = document.querySelectorAll(selectors);
    return (elements.length) ? elements[0] : null;
  };
}


(function(){
window.bannerResizer=function(sizecheckroot){
	if(!sizecheckroot){var sizecheckroot=window;}
	if(typeof sizecheckroot== Array){ sizecheckroot=sizecheckroot[0]; }
	this._elements=[];
	this.initdone=false;
	this.active=false;
	_this=this;
	this.sizecheckroot=sizecheckroot;
	this.setElements=function(arr){
		this._elements=arr;
	}

	this.addElements=function(arr){
		this._elements.push(arr);
	}

	this.checkBanners=function(){
		if(!this.active){ return ;}
		var w=getSizecheckrootWidth();
		var l=this._elements.length;
		var sizesArray=[];
		var sizesArrayLength=0;
		var el=null;
			for(var i=0; i<l; i++){
			el=this._elements[i][0];
			sizesArray=this._elements[i][1];
			sizesArrayLength=sizesArray.length;
				for(var j=0; j<sizesArrayLength; j++){
						if( (sizesArray[j][0]  >=w ) && ( w > sizesArray[j][1] )){
								var value=sizesArray[j][2];
								var mode=sizesArray[j][3];
								var h=0;
									switch(mode){
										case "%":
											h=value*w;
										break;
										case "px" :
											h=value;
										break;
									}//switch
								setElementHeight(el, h);
								//break;
							}//if
					}//for

			}//for

	}//checkBanners



	this.init=function(){
		if(!this.initdone){
			this.active=true;
			_this=this;
			window.onresize=function(){
				_this.checkBanners();
			}
			this.initdone=true;
		}
	}


	function setElementHeight(el, h){
		try {
    		document.querySelector(el).style.height=h+"px";
			}
		catch(err) {
    		return;
			}
		
	}//setElementHeight


	function getSizecheckrootWidth(){
		w=0;
		if(_this.sizecheckroot===window){
			w= _this.sizecheckroot.innerWidth}
			else{
				if(_this.sizecheckroot.width){ 
					w=_this.sizecheckroot.width();
				}else{
			 			w=_this.sizecheckroot.clientWidth ;
			  }
		}
		return w;
	}//getSizecheckrootWidth

	this.init();

	}//bannerResizer

}())
