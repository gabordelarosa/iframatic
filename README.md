# iframatic

The plugin : 
https://chrome.google.com/webstore/detail/iframatic/gpnjegapfnihengjbmdadhakcoiaipme

Inspects responsive iframe contents. Especially useful on responsive sites where the content inside of the responsive iframe is responsive too. This extension creates its resizing charasteristic and put it in a useful javascript implementation that you can use finally.

You need to go through steps until you get a javascript code in return.

Why would you need that? For many reasons you can't tell the content height of an iframe document. This could be for security reason or you simply can not inject code into that document hosted somewhere else. Communication protocolls may only work for modern browsers. External document may be hosted on server that forbids iframe communications. Or you don't wanna waist time and code on doing these things by yourself.

This extension works on local and online contents too.

Implementation example:
http://gabordelarosa.hu/_dev/iframatic/implementation-example/

<iframe id="banner" src="./res2/?v=1" frameborder="0" scrolling="no"  style="overflow:hidden; width:100%;"></iframe>
<iframe id="banner2" src="./res3/?v=1" frameborder="0" scrolling="no"  style="overflow:hidden; width:100%;"></iframe>
<script type="text/javascript" src="js/iframatic.js"> </script> 
<script  type="text/javascript" >
window.onload=function(){
	var _bannerData=[["#banner"],[[Infinity,735,580,"px"],[735,725,0.79,"%"],[725,705,0.8,"%"],[705,685,0.81,"%"],[685,670,0.82,"%"],[670,655,0.83,"%"],[655,640,0.84,"%"],[640,620,0.85,"%"],[620,610,0.86,"%"],[610,595,0.87,"%"],[595,580,0.88,"%"],[580,570,0.89,"%"],[570,555,0.9,"%"],[555,545,0.91,"%"],[545,535,0.92,"%"],[535,525,0.93,"%"],[525,515,0.94,"%"],[515,505,0.95,"%"],[505,495,0.96,"%"],[495,485,0.97,"%"],[485,475,0.98,"%"],[475,470,0.99,"%"],[470,460,1,"%"],[460,450,1.01,"%"],[450,445,1.02,"%"],[445,440,1.11,"%"],[440,435,1.12,"%"],[435,430,1.13,"%"],[430,425,1.14,"%"],[425,415,1.15,"%"],[415,410,1.16,"%"],[410,405,1.17,"%"],[405,400,1.18,"%"],[400,395,1.19,"%"],[395,390,1.2,"%"],[390,385,1.21,"%"],[385,380,1.22,"%"],[380,375,1.28,"%"],[375,370,1.3,"%"],[370,365,1.31,"%"],[365,360,1.32,"%"],[360,355,1.33,"%"],[355,350,1.34,"%"],[350,345,1.36,"%"],[345,340,1.37,"%"],[340,335,1.39,"%"],[335,330,1.4,"%"],[330,325,1.42,"%"],[325,320,1.43,"%"],[320,315,1.44,"%"],[315,310,1.46,"%"],[310,305,1.48,"%"],[305,300,1.5,"%"],[300,0,454,"px"]]];
	var _bannerData2=[["#banner2"],[[Infinity,385,280,"px"],[385,380,0.73,"%"],[380,320,300,"px"],[320,315,0.94,"%"],[315,0,339,"px"]]];
	var _bannerResizer =new bannerResizer();
	_bannerResizer.addElements(_bannerData);
	_bannerResizer.addElements(_bannerData2);
	_bannerResizer.checkBanners();
	
};
</script>
