ec.pkg("ec.search");ec.load("ec.pager");ec.load("ec.messages");ec.load("ajax",{loadType:"lazy"});ec.search.sortField="";ec.search.sortType="desc";ec.search.keyword;ec.product.pageNumber=1;ec.search.upLoadBI=function(o,c,g){var e="";var j="";var a=ec.search.keyword;var h=g+(o-1)*c+1;if($("#userId").val()!=""&&$("#userId").val()!=null){j=$("#userId").val()}else{j=$("#euId").val()}var d=new Date();var k=d.getMonth()+1;var n=d.getDate();var m=d.getHours();var f=d.getMinutes();var p=d.getSeconds();if(k>=1&&k<=9){k="0"+k}if(n>=0&&n<=9){n="0"+n}if(m>=0&&m<=9){m="0"+m}if(f>=0&&f<=9){f="0"+f}if(p>=0&&p<=9){p="0"+p}var l=d.getFullYear()+k+n+m+f+p;if(ec.search.sortField=="register_date"){e="newes"}else{if(ec.search.sortField=="sale_number"){e="popularity"}else{if(ec.search.sortField=="price"){if(ec.search.sortType=="desc"){e="pricedown"}else{e="priceup"}}else{e="relevance"}}}var b="web_"+e+"_"+l+"_"+j+"_"+h+"_"+a;_paq.push(["trackLink",b,"link"," "])};ec.search.sort=function(b,d){var a=ec.search.sortField,e=ec.search.sortType,c;switch(b){case"register_date":case"price":if(b==a){$("#sort-"+b).attr("class",e=="desc"?"sort-asc":"sort-desc");c=e=="desc"?"asc":"desc"}else{$("#sort-"+b).addClass("sort-desc").siblings().removeClass();c="desc"}break;default:$("#"+d).addClass("sort-desc").siblings().removeClass();c="desc";break}ec.search.sortType=c;ec.search.sortField=b;ec.search.load()};ec.search.load=function(a){var b=ec.search.pageNumber=(a?a.pageNumber:ec.product.pageNumber);ec.Cache.get("search_ajaxer",function(){return new ec.ajax()}).get({url:domainMain+"/search/"+encodeURIComponent(ec.search.keyword)+".json?pageNumber="+b+"&"+ec.search.sortField+"="+ec.search.sortType,timeout:10000,timeoutFunction:function(){alert(ec.messages.msgObj["base-rd-tout"])},beforeSendFunction:function(){ec.ui.loading.show({modal:false})},afterSendFunction:ec.ui.loading.hide,successFunction:function(e){if(!e.success){alert(ec.messages.msgObj["sea-rdfail"])}var d=[],f;for(var c=0;c<e.prdList.length;c++){f=e.prdList[c];f.price=(f.priceMode==2)?"<b>No offer</b>":"<b>"+currencySymbol+f.priceStr+"</b>";d.push("<li><div>");d.push('<p class="p-img"><a href="'+domainMain+"/product/display/"+f.id+'.html" title="'+f.briefName+'"><img src="'+ec.mediaPath+f.photoPath+"142_142_"+f.photoName+'" alt="'+f.briefName+'"/></a></p>');d.push('<p class="p-name"><a href="'+domainMain+"/product/display/"+f.id+'.html" title="'+f.briefName+'"><span>'+f.name+"</span></a></p>");d.push('<p class="p-price">'+f.price+"</p>");d.push("</div></li>")}$("#pro-list").html(d.join(""));ec.ui.scrollTo("#ct-list");ec.search.renderPage(e.page)}})};ec.search.renderPage=function(a){if(!a.totalPage||a.totalPage==1){return}$("#search-pager").pager({pageNumber:a.pageNumber,pageCount:a.totalPage,recordCount:a.totalRow,qpageSize:5,text:{first:"|&lt;",pre:"&lt",next:"&gt;",last:"&gt;|"},item:["first","pre","qpage","next","last","quickPager"],callBack:ec.search.load})};