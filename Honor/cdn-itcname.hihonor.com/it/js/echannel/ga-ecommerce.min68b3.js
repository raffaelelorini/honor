ec.pkg("ec.ga");var checkoutSteps={1:"checkout",2:"Address",3:"Payment selection",4:"Place order"};function gtmDataLayerPush(a){window.dataLayer=window.dataLayer||[];window.dataLayer.push(a)}ec.ga.impression=function(a){if(isGaPushEnabled!=="1"){return false}if(a==undefined&&a==null){a=gaDefaultList}var b=[];jQuery("#pro-list li").each(function(c){var d={};d.name=jQuery(this).attr("rel-name");d.id=jQuery(this).attr("rel-id");d.price=jQuery(this).attr("rel-price");d.brand=jQuery(this).attr("rel-brand");d.category=jQuery(this).attr("rel-category");d.variant=(jQuery(this).attr("rel-variant")!=="null")?jQuery(this).attr("rel-variant"):"";d.list=a;d.position=jQuery(this).attr("rel-index");b.push(d)});gtmDataLayerPush({event:"productImpression",ecommerce:{currencyCode:currencyCode,impressions:b},})};ec.ga.productClick=function(b,a){if(isGaPushEnabled!=="1"){return false}if(a==undefined&&a==null){a=gaDefaultList}gtmDataLayerPush({event:"productView",ecommerce:{click:{actionField:{list:a},products:[{name:jQuery(b).attr("rel-name"),id:jQuery(b).attr("rel-id"),price:jQuery(b).attr("rel-price"),brand:"Honor",category:jQuery(b).attr("rel-category"),variant:(jQuery(b).attr("rel-variant")!=="null")?jQuery(b).attr("rel-variant"):"",position:jQuery(b).attr("rel-index")}]}},eventCallback:function(){document.location=jQuery(b).attr("rel-href")}})};ec.ga.productDetail=function(a,b){if(isGaPushEnabled!=="1"){return false}if(b==undefined&&b==null){b=gaDefaultList}gtmDataLayerPush({event:"productView",ecommerce:{detail:{actionField:{list:b},products:[{name:a.name,id:a.code,price:a.skuPrice,brand:a.brandName,category:a.category,variant:(a.variant!=="null")?a.variant:"",}]}}})};ec.ga.addTocart=function(a,d,c,b){if(isGaPushEnabled!=="1"){return false}if(b==undefined&&b==null){b=gaDefaultList}gtmDataLayerPush({event:"fire_event",eventCategory:"Cart",eventAction:c,eventLabel:a.name,ecommerce:{currencyCode:currencyCode,add:{actionField:{list:b},products:[{name:a.name,id:a.code,price:a.skuPrice,brand:a.brandName,category:a.category,variant:(a.variant)?a.variant:"",quantity:(a.quantity)?a.quantity:d,}]}}})};ec.ga.removeFromcart=function(a,b){if(isGaPushEnabled!=="1"){return false}if(a[0].name){gtmDataLayerPush({event:"fire_event",eventCategory:"Cart",eventAction:b,eventLabel:a[0].name,ecommerce:{remove:{products:a}}})}};ec.ga.eventTracking=function(b,c,a){if(isGaPushEnabled!=="1"){return false}gtmDataLayerPush({event:"fire_event",eventCategory:b,eventAction:c,eventLabel:a})};ec.ga.virtualPageViewTracking=function(a){if(isGaPushEnabled!=="1"){return false}gtmDataLayerPush({event:"virtualPageview",page:a})};ec.ga.onCheckout=function(b,a){if(isGaPushEnabled!=="1"){return false}var d=[];jQuery("#order-pro-list").find("li").each(function(){if(jQuery(this).attr("rel-name")){var e={};e.name=jQuery(this).attr("rel-name");e.id=jQuery(this).attr("rel-id");e.price=jQuery(this).attr("rel-price");e.brand=jQuery(this).attr("rel-brand");e.category=jQuery(this).attr("rel-category");color="";gBomVal=jQuery(this).attr("rel-variant");if(gBomVal.indexOf("Color")>=0){color=gBomVal.substr(gBomVal.indexOf("Color")+6);color=color.split("~");color=color[0]}e.variant=color;e.quantity=jQuery(this).attr("rel-qty");d.push(e)}});if(b==2){gtmDataLayerPush({event:"virtualPageview",page:"add_address_"+a,ecommerce:{currencyCode:currencyCode,checkout:{actionField:{step:b,option:checkoutSteps[b]},products:d}},eventCallback:function(){}})}else{var c=checkoutSteps[b];if(a&&a=="pay_select_skip"){c="Place Order"}gtmDataLayerPush({event:"checkout",ecommerce:{currencyCode:currencyCode,checkout:{actionField:{step:b,option:c},products:d}},eventCallback:function(){}})}};ec.ga.onCheckoutOptions=function(b,a){ec.ga.onCheckout(b,a)};