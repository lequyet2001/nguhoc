var A=Object.defineProperty;var q=(E,e,t)=>e in E?A(E,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):E[e]=t;var B=(E,e,t)=>(q(E,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))m(n);new MutationObserver(n=>{for(const g of n)if(g.type==="childList")for(const l of g.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const g={};return n.integrity&&(g.integrity=n.integrity),n.referrerpolicy&&(g.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?g.credentials="include":n.crossorigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function m(n){if(n.ep)return;n.ep=!0;const g=t(n);fetch(n.href,g)}})();class O{constructor(){B(this,"values");this.values=[]}enqueue(e,t){this.values.push({val:e,priority:t}),this.sort()}dequeue(){return this.values.shift()}sort(){this.values.sort((e,t)=>e.priority-t.priority)}}class N{constructor(){B(this,"adjacenyList");this.adjacenyList={}}addVertex(e){this.adjacenyList[e]||(this.adjacenyList[e]=[])}addEdge(e,t,m){let n=0;const g=m.find(o=>o.name===e)||new v(0,0,"0"),l=m.find(o=>o.name===t)||new v(0,0,"0");n=g.distanceTo(l),this.adjacenyList[e].push({node:t,weight:n}),this.adjacenyList[t].push({node:e,weight:n})}removeEdge(e,t){this.adjacenyList[e]=this.adjacenyList[e].filter(m=>m!==t),this.adjacenyList[t]=this.adjacenyList[t].filter(m=>m!==e)}removeVertex(e){this.adjacenyList[e].forEach(m=>this.removeEdge(m,e)),delete this.adjacenyList[e]}dijkstra(e,t){const m=new O,n={},g={};let l,o=[],h=0;for(let i in this.adjacenyList)i===e?(n[i]=0,m.enqueue(i,0)):(n[i]=1/0,m.enqueue(i,1/0)),g[i]=null;for(;m.values.length;){if(l=m.dequeue().val,l===t){for(;g[l];)o.push(l),h+=this.adjacenyList[g[l]].find(i=>i.node===l).weight,l=g[l];break}if(l||n[l]!==1/0)for(let i in this.adjacenyList[l]){let f=this.adjacenyList[l][i],c=n[l]+f.weight,r=f.node;c<n[r]&&(n[r]=c,g[r]=l,m.enqueue(r,c))}}return{distance:h,path:o.concat(l).reverse()}}}class v{constructor(e,t,m){this.lat=e,this.lng=t,this.name=m}distanceTo(e){const m=this.lat*Math.PI/180,n=e.lat*Math.PI/180,g=(e.lat-this.lat)*Math.PI/180,l=(e.lng-this.lng)*Math.PI/180,o=Math.sin(g/2)*Math.sin(g/2)+Math.cos(m)*Math.cos(n)*Math.sin(l/2)*Math.sin(l/2);return 6371e3*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))}}const T=[{lat:21.00171892770119,lng:105.84154390295836,name:"1"},{lat:21.001834048330952,lng:105.84259854810267,name:"2"},{lat:21.001800723947245,lng:105.84307232715211,name:"3"},{lat:21.001132788696356,lng:105.84175590185568,name:"4"},{lat:21.001219403619682,lng:105.84144072996152,name:"5"},{lat:21.00143267903974,lng:105.84271532931562,name:"6"},{lat:21.001301655133076,lng:105.84285727105545,name:"7"},{lat:21.001073851930602,lng:105.84278231305802,name:"8"},{lat:21.001016974015,lng:105.84290415887223,name:"9"},{lat:21.000838818762137,lng:105.84364456354245,name:"10"},{lat:21.000774965633752,lng:105.84384304700794,name:"11"},{lat:21.0005976828263,lng:105.84358042917091,name:"12"},{lat:21.001113878589013,lng:105.84234874400946,name:"13"},{lat:21.00122067748773,lng:105.84221146640748,name:"14"},{lat:21.000394764005023,lng:105.84142212019434,name:"15"},{lat:21.000353824209668,lng:105.84187208566752,name:"16"},{lat:21.000401883968276,lng:105.84205321583681,name:"17"},{lat:21.000412347491036,lng:105.84256901856133,name:"18"},{lat:21.000645742505043,lng:105.84244026240908,name:"19"},{lat:21.000365778368696,lng:105.84335580010895,name:"20"},{lat:20.999654539190768,lng:105.84192734947844,name:"21"},{lat:20.99965030561414,lng:105.84336260225815,name:"22"},{lat:21.000128699014866,lng:105.84339888036949,name:"23"},{lat:21.000058845206812,lng:105.84396799324108,name:"24"},{lat:21.00010964797955,lng:105.8441969988189,name:"25"},{lat:21.001806092316166,lng:105.843389176542,name:"26"},{lat:21.001492816558653,lng:105.8435455204776,name:"27"},{lat:21.00184169179247,lng:105.8438086358814,name:"28"},{lat:21.001827452002964,lng:105.84414420335294,name:"29"},{lat:21.00150349642485,lng:105.84414039008621,name:"30"},{lat:21.001022901689428,lng:105.84364466541237,name:"31"},{lat:21.00091610264918,lng:105.84400311248422,name:"32"},{lat:21.001478576735867,lng:105.8444378248905,name:"33"},{lat:21.001809652264193,lng:105.84498312203173,name:"34"},{lat:21.000563665274157,lng:105.84443401162379,name:"35"},{lat:21.000517385557043,lng:105.84525386396898,name:"36"},{lat:21.000229026996337,lng:105.84530724970308,name:"37"},{lat:21.00006170755149,lng:105.84145585031449,name:"38"},{lat:20.99976266812045,lng:105.84144822378104,name:"39"},{lat:20.99978402809968,lng:105.84160075444991,name:"40"},{lat:20.999532666463185,lng:105.84172145505137,name:"41"},{lat:20.99861961774616,lng:105.84142805459881,name:"42"},{lat:20.998365160554695,lng:105.84140881522491,name:"43"},{lat:20.997922543438015,lng:105.84136334767882,name:"44"},{lat:20.99782642230318,lng:105.84178852691855,name:"45"},{lat:20.99752203831302,lng:105.84307931770816,name:"46"},{lat:20.997473977627166,lng:105.84336721934567,name:"47"},{lat:20.997213572474678,lng:105.84437034603462,name:"48"},{lat:20.997196043741926,lng:105.84459028717205,name:"49"},{lat:20.997461433997554,lng:105.84447228265415,name:"50"},{lat:20.99929281602394,lng:105.84235449237428,name:"51"},{lat:20.99910223302575,lng:105.84232578505612,name:"52"},{lat:20.998986096391906,lng:105.84230983654604,name:"53"},{lat:20.99900396357223,lng:105.84214397204107,name:"54"},{lat:20.99873775530554,lng:105.84205986151942,name:"55"},{lat:20.998809348103162,lng:105.84240269142838,name:"56"},{lat:20.99868090217708,lng:105.8425718509229,name:"57"},{lat:20.998038670874713,lng:105.8429665564122,name:"58"},{lat:20.997895484505893,lng:105.84277935323823,name:"59"},{lat:20.997569405707047,lng:105.84335349960155,name:"60"},{lat:20.997687032379872,lng:105.84367406465906,name:"61"},{lat:20.997749568045855,lng:105.84346673402786,name:"62"},{lat:20.997943130655457,lng:105.84331043862895,name:"63"},{lat:20.998054801286447,lng:105.84372509989458,name:"64"},{lat:20.997865705649218,lng:105.84415411481814,name:"65"},{lat:20.99812478149907,lng:105.84457515548458,name:"66"},{lat:20.99828856485032,lng:105.84359751181591,name:"67"},{lat:20.998199228499185,lng:105.84427691834584,name:"68"},{lat:20.99812329255868,lng:105.8445815348886,name:"69"},{lat:20.99836301176875,lng:105.84432954842916,name:"70"},{lat:20.998224540470773,lng:105.84473304573449,name:"71"},{lat:20.998589252031387,lng:105.8437499694881,name:"72"},{lat:20.998333835504567,lng:105.84388407993775,name:"73"},{lat:20.998606780605524,lng:105.84437760639443,name:"74"},{lat:20.9985266499869,lng:105.84343883324689,name:"75"},{lat:20.998967367857016,lng:105.84379556704296,name:"76"},{lat:20.998780985781718,lng:105.84429388606019,name:"77"},{lat:20.998904931279423,lng:105.84403594734938,name:"78"},{lat:20.99858798472945,lng:105.84501649377704,name:"79"},{lat:20.99849591074548,lng:105.84546030008826,name:"80"},{lat:20.998442791113515,lng:105.84497856161369,name:"81"},{lat:20.998407378015035,lng:105.84511132418541,name:"82"},{lat:20.998356029007326,lng:105.84540719505955,name:"83"},{lat:20.998140008850346,lng:105.84492166336868,name:"84"},{lat:20.998235624368224,lng:105.84507718523841,name:"85"},{lat:20.998194899247714,lng:105.84536926289621,name:"86"},{lat:20.998010750738075,lng:105.84535977985537,name:"87"},{lat:20.997831913982047,lng:105.84484010921804,name:"88"},{lat:20.997748692846717,lng:105.84528581213739,name:"89"},{lat:20.997622975724525,lng:105.8455494406727,name:"90"},{lat:20.997584021094287,lng:105.84494442266768,name:"91"},{lat:20.997367928394077,lng:105.84487947728267,name:"92"},{lat:20.997217682201978,lng:105.8454078724543,name:"93"},{lat:20.997440547332708,lng:105.8454910209331,name:"94"},{lat:20.99726275607547,lng:105.8458745768191,name:"95"},{lat:20.99688964415707,lng:105.84577265287736,name:"96"},{lat:20.997660908035282,lng:105.84591212774681,name:"97"},{lat:20.99764087525772,lng:105.84593626762774,name:"98"},{lat:20.99764087525772,lng:105.84590944553781,name:"99"},{lat:20.998281922813874,lng:105.84586921240309,name:"100"},{lat:20.998369565825087,lng:105.84585311915046,name:"101"},{lat:20.998574900665265,lng:105.84582361485153,name:"102"},{lat:20.998963032844674,lng:105.84578338171758,name:"103"},{lat:20.99920843201094,lng:105.84565195347692,name:"104"},{lat:20.9991633587309,lng:105.84514501597758,name:"105"},{lat:21.001791927971777,lng:105.84548748262496,name:"106"},{lat:21.001441363678694,lng:105.84582544095808,name:"107"},{lat:21.000800642433344,lng:105.84571516810878,name:"108"},{lat:21.000784465746662,lng:105.84601784977085,name:"109"},{lat:21.000587928989958,lng:105.84578181182148,name:"110"},{lat:21.000501571848364,lng:105.84683122378554,name:"111"},{lat:21.000854986031552,lng:105.84722536910797,name:"112"},{lat:21.00104557938072,lng:105.84748413992256,name:"113"},{lat:21.00115928381459,lng:105.84763976665754,name:"114"},{lat:21.000986621495112,lng:105.84706687983764,name:"115"},{lat:21.001074243203533,lng:105.847162734998,name:"116"},{lat:21.000690017409873,lng:105.84665634061724,name:"117"},{lat:21.000816216014176,lng:105.84655224497557,name:"118"},{lat:21.001127398616788,lng:105.84694457832383,name:"119"},{lat:21.00144155838522,lng:105.84734010137412,name:"120"},{lat:21.000933840136412,lng:105.84637362166251,name:"121"},{lat:21.001292667582142,lng:105.84678509322289,name:"122"},{lat:21.001611293719556,lng:105.84718221112419,name:"123"},{lat:21.001101038664572,lng:105.84622791862975,name:"124"},{lat:21.00144099792801,lng:105.84663948260211,name:"125"},{lat:21.00178449764729,lng:105.8470434601418,name:"126"},{lat:21.001761479649577,lng:105.84629429991561,name:"127"},{lat:21.001457798230756,lng:105.8461867395096,name:"128"},{lat:21.001625568371974,lng:105.84646434814114,name:"129"},{lat:21.001975448364387,lng:105.84689350158003,name:"130"},{lat:21.002083888038168,lng:105.84675817398467,name:"131"},{lat:21.003185941129377,lng:105.848033565876,name:"132"},{lat:21.002958140803027,lng:105.84832223390865,name:"133"},{lat:21.002742251283927,lng:105.84851521088078,name:"134"},{lat:21.003127874412534,lng:105.84869542904481,name:"135"},{lat:21.002815207087394,lng:105.84904629626685,name:"136"},{lat:21.002256553067934,lng:105.84892549173394,name:"137"},{lat:21.002338672279222,lng:105.8495186776948,name:"138"},{lat:21.00329117516133,lng:105.84983813169626,name:"139"},{lat:21.003086264666493,lng:105.85086405388329,name:"140"},{lat:21.002734627436443,lng:105.8508505211237,name:"141"},{lat:21.00281674638468,lng:105.85004306646977,name:"142"},{lat:21.00268619829195,lng:105.84996638083224,name:"143"},{lat:21.000653802676435,lng:105.8505426933604,name:"144"},{lat:21.000805671944118,lng:105.84986647653247,name:"145"},{lat:21.001240434091336,lng:105.85020777464845,name:"146"},{lat:21.001049583321773,lng:105.8495411269266,name:"147"},{lat:21.000663960636093,lng:105.84910124465175,name:"148"},{lat:21.001397644500777,lng:105.84986030979675,name:"149"},{lat:21.00126493062179,lng:105.84937214776004,name:"150"},{lat:21.00171064846496,lng:105.8494231097309,name:"151"},{lat:21.000293361264784,lng:105.84823220893416,name:"152"},{lat:21.0006539444419,lng:105.84866136237305,name:"153"},{lat:21.00077664268548,lng:105.84858357831226,name:"154"},{lat:21.00047527286489,lng:105.84807924085767,name:"155"},{lat:21.000698610236938,lng:105.8478750999285,name:"156"},{lat:21.00102319328851,lng:105.84833122731712,name:"157"},{lat:21.00147879950038,lng:105.84805691294355,name:"158"},{lat:21.001856981378065,lng:105.84846838450393,name:"159"},{lat:21.001684335247305,lng:105.84864396285882,name:"160"},{lat:21.002040356136813,lng:105.84919305998169,name:"161"},{lat:21.002047438584796,lng:105.85001998114272,name:"162"},{lat:21.00011907874747,lng:105.84784988049483,name:"163"},{lat:20.999045144985974,lng:105.84596360399209,name:"164"},{lat:20.99989505339937,lng:105.8470788095946,name:"165"},{lat:20.999512595212217,lng:105.84755296163648,name:"166"},{lat:20.998513949770157,lng:105.84625947486623,name:"167"},{lat:20.998287305902732,lng:105.84629361381324,name:"168"},{lat:20.998103157507067,lng:105.84652500000968,name:"169"},{lat:20.99803233114057,lng:105.84664638293239,name:"170"},{lat:20.998641271162793,lng:105.84735528304014,name:"171"},{lat:20.99904304702459,lng:105.84781262380588,name:"172"},{lat:21.00005916508394,lng:105.84893443192385,name:"173"},{lat:20.99845112165749,lng:105.84754372184382,name:"174"},{lat:20.998844200539242,lng:105.84806364327282,name:"175"},{lat:20.999091363245434,lng:105.84837304436861,name:"176"},{lat:20.998665798711077,lng:105.84816854780624,name:"177"},{lat:20.998626770647235,lng:105.8482982142265,name:"178"},{lat:20.998513448842196,lng:105.84864719012934,name:"179"},{lat:20.99830097022032,lng:105.8477197487342,name:"180"},{lat:20.99840012694557,lng:105.84805165516354,name:"181"},{lat:20.998474494446285,lng:105.84816355504542,name:"182"},{lat:20.99833148574268,lng:105.84835836653552,name:"183"},{lat:20.997843544384324,lng:105.84839251459937,name:"184"},{lat:20.997970099892257,lng:105.84769546483314,name:"185"},{lat:20.996540535841675,lng:105.84731050620037,name:"186"},{lat:20.996583032090285,lng:105.84702222175892,name:"187"},{lat:20.99704694868406,lng:105.84714360468162,name:"188"},{lat:20.99632097169782,lng:105.84857364723996,name:"189"},{lat:20.996816761241398,lng:105.84869503016267,name:"190"},{lat:20.996147444968578,lng:105.84990885938991,name:"191"},{lat:20.99780004650239,lng:105.85016559107207,name:"192"},{lat:20.998210994373846,lng:105.84910342029993,name:"193"},{lat:20.996942412517864,lng:105.84883229562836,name:"194"},{lat:20.99753501430405,lng:105.84922462897661,name:"195"},{lat:20.997889383092406,lng:105.84890246907277,name:"196"},{lat:20.997978719628982,lng:105.84859625767899,name:"197"},{lat:20.99780302438958,lng:105.84872065605771,name:"198"},{lat:20.999003108111424,lng:105.84955954769404,name:"199"},{lat:20.998246728935847,lng:105.84889608967418,name:"200"},{lat:20.9983033086131,lng:105.84857711947235,name:"201"},{lat:20.998199082875214,lng:105.84857074006833,name:"202"},{lat:20.99874998952787,lng:105.84905238507189,name:"203"},{lat:20.998866126345423,lng:105.84915445553646,name:"204"},{lat:20.99879763541267,lng:105.84884505444069,name:"205"},{lat:20.998978882474663,lng:105.84889238252187,name:"206"},{lat:20.999427487664097,lng:105.85036950967053,name:"207"},{lat:20.999672886066787,lng:105.85036414525254,name:"208"},{lat:20.999527650326165,lng:105.84984647891689,name:"209"},{lat:20.999722967323887,lng:105.8500342335464,name:"210"},{lat:20.999737991697735,lng:105.84982502124495,name:"211"},{lat:20.999963357124066,lng:105.85007446668129,name:"212"},{lat:20.9999784335964,lng:105.84988023662645,name:"213"},{lat:21.00004449983048,lng:105.84949888315222,name:"214"},{lat:20.997896207757606,lng:105.84988026933542,name:"215"}],S=T.map(({lat:E,lng:e,name:t})=>[E,e,t]),V=[{lat:21.007482,lng:105.841508},{lat:21.008586,lng:105.851404},{lat:20.99594,lng:105.849861},{lat:20.997845,lng:105.841256}],a=S.map(([E,e,t])=>new v(E,e,t));let d=new N;a.forEach(E=>{d.addVertex(E.name)});d.addEdge("1","2",a);d.addEdge("1","5",a);d.addEdge("2","3",a);d.addEdge("2","4",a);d.addEdge("3","6",a);d.addEdge("3","26",a);d.addEdge("4","5",a);d.addEdge("5","15",a);d.addEdge("6","7",a);d.addEdge("6","13",a);d.addEdge("7","8",a);d.addEdge("8","9",a);d.addEdge("9","10",a);d.addEdge("10","11",a);d.addEdge("10","12",a);d.addEdge("13","14",a);d.addEdge("13","15",a);d.addEdge("15","16",a);d.addEdge("15","38",a);d.addEdge("16","17",a);d.addEdge("16","21",a);d.addEdge("17","18",a);d.addEdge("17","19",a);d.addEdge("18","19",a);d.addEdge("18","20",a);d.addEdge("20","23",a);d.addEdge("21","22",a);d.addEdge("21","41",a);d.addEdge("22","23",a);d.addEdge("22","24",a);d.addEdge("23","24",a);d.addEdge("24","25",a);d.addEdge("25","105",a);d.addEdge("26","27",a);d.addEdge("26","28",a);d.addEdge("28","29",a);d.addEdge("29","30",a);d.addEdge("29","34",a);d.addEdge("30","31",a);d.addEdge("30","33",a);d.addEdge("31","32",a);d.addEdge("34","36",a);d.addEdge("35","36",a);d.addEdge("36","37",a);d.addEdge("37","104",a);d.addEdge("37","163",a);d.addEdge("38","39",a);d.addEdge("38","40",a);d.addEdge("39","40",a);d.addEdge("39","42",a);d.addEdge("40","41",a);d.addEdge("41","51",a);d.addEdge("41","55",a);d.addEdge("42","43",a);d.addEdge("43","44",a);d.addEdge("44","45",a);d.addEdge("45","46",a);d.addEdge("45","55",a);d.addEdge("46","47",a);d.addEdge("46","58",a);d.addEdge("46","60",a);d.addEdge("47","48",a);d.addEdge("47","60",a);d.addEdge("48","49",a);d.addEdge("48","50",a);d.addEdge("49","92",a);d.addEdge("49","96",a);d.addEdge("50","61",a);d.addEdge("51","52",a);d.addEdge("51","75",a);d.addEdge("52","53",a);d.addEdge("53","54",a);d.addEdge("53","56",a);d.addEdge("55","56",a);d.addEdge("56","57",a);d.addEdge("57","58",a);d.addEdge("58","59",a);d.addEdge("58","60",a);d.addEdge("58","72",a);d.addEdge("60","61",a);d.addEdge("60","62",a);d.addEdge("61","65",a);d.addEdge("62","63",a);d.addEdge("62","64",a);d.addEdge("64","67",a);d.addEdge("64","68",a);d.addEdge("65","66",a);d.addEdge("65","68",a);d.addEdge("67","73",a);d.addEdge("68","69",a);d.addEdge("68","70",a);d.addEdge("70","71",a);d.addEdge("70","74",a);d.addEdge("72","73",a);d.addEdge("72","75",a);d.addEdge("72","77",a);d.addEdge("73","74",a);d.addEdge("74","77",a);d.addEdge("74","79",a);d.addEdge("75","76",a);d.addEdge("77","78",a);d.addEdge("79","80",a);d.addEdge("79","81",a);d.addEdge("80","83",a);d.addEdge("80","102",a);d.addEdge("81","82",a);d.addEdge("81","84",a);d.addEdge("82","83",a);d.addEdge("82","85",a);d.addEdge("83","86",a);d.addEdge("84","85",a);d.addEdge("84","87",a);d.addEdge("84","88",a);d.addEdge("85","86",a);d.addEdge("86","87",a);d.addEdge("86","99",a);d.addEdge("87","89",a);d.addEdge("87","98",a);d.addEdge("88","89",a);d.addEdge("89","90",a);d.addEdge("90","94",a);d.addEdge("90","97",a);d.addEdge("91","92",a);d.addEdge("91","94",a);d.addEdge("92","93",a);d.addEdge("93","94",a);d.addEdge("94","95",a);d.addEdge("95","96",a);d.addEdge("95","97",a);d.addEdge("96","170",a);d.addEdge("96","187",a);d.addEdge("97","98",a);d.addEdge("97","169",a);d.addEdge("98","99",a);d.addEdge("98","168",a);d.addEdge("99","100",a);d.addEdge("100","101",a);d.addEdge("101","102",a);d.addEdge("101","168",a);d.addEdge("102","103",a);d.addEdge("103","104",a);d.addEdge("103","164",a);d.addEdge("104","105",a);d.addEdge("106","107",a);d.addEdge("107","108",a);d.addEdge("107","127",a);d.addEdge("108","109",a);d.addEdge("108","110",a);d.addEdge("110","111",a);d.addEdge("111","112",a);d.addEdge("112","113",a);d.addEdge("112","115",a);d.addEdge("113","114",a);d.addEdge("113","156",a);d.addEdge("114","120",a);d.addEdge("114","158",a);d.addEdge("115","116",a);d.addEdge("115","117",a);d.addEdge("115","119",a);d.addEdge("118","119",a);d.addEdge("119","120",a);d.addEdge("119","122",a);d.addEdge("120","123",a);d.addEdge("121","122",a);d.addEdge("122","123",a);d.addEdge("122","125",a);d.addEdge("123","126",a);d.addEdge("124","125",a);d.addEdge("125","126",a);d.addEdge("125","129",a);d.addEdge("126","130",a);d.addEdge("127","129",a);d.addEdge("127","131",a);d.addEdge("128","129",a);d.addEdge("129","130",a);d.addEdge("130","131",a);d.addEdge("131","132",a);d.addEdge("132","133",a);d.addEdge("132","139",a);d.addEdge("133","134",a);d.addEdge("133","135",a);d.addEdge("134","136",a);d.addEdge("134","137",a);d.addEdge("137","138",a);d.addEdge("137","159",a);d.addEdge("138","139",a);d.addEdge("139","140",a);d.addEdge("140","141",a);d.addEdge("141","142",a);d.addEdge("141","144",a);d.addEdge("142","143",a);d.addEdge("144","145",a);d.addEdge("145","146",a);d.addEdge("145","147",a);d.addEdge("147","148",a);d.addEdge("147","149",a);d.addEdge("147","150",a);d.addEdge("150","151",a);d.addEdge("150","153",a);d.addEdge("151","161",a);d.addEdge("152","153",a);d.addEdge("152","155",a);d.addEdge("153","154",a);d.addEdge("154","155",a);d.addEdge("154","157",a);d.addEdge("155","156",a);d.addEdge("156","157",a);d.addEdge("157","158",a);d.addEdge("158","159",a);d.addEdge("159","160",a);d.addEdge("161","162",a);d.addEdge("164","165",a);d.addEdge("164","167",a);d.addEdge("165","166",a);d.addEdge("166","167",a);d.addEdge("168","169",a);d.addEdge("169","170",a);d.addEdge("170","171",a);d.addEdge("171","172",a);d.addEdge("171","174",a);d.addEdge("172","173",a);d.addEdge("174","175",a);d.addEdge("174","180",a);d.addEdge("175","176",a);d.addEdge("175","177",a);d.addEdge("177","178",a);d.addEdge("177","180",a);d.addEdge("178","179",a);d.addEdge("178","182",a);d.addEdge("181","182",a);d.addEdge("182","183",a);d.addEdge("183","184",a);d.addEdge("184","185",a);d.addEdge("185","186",a);d.addEdge("186","187",a);d.addEdge("186","189",a);d.addEdge("187","188",a);d.addEdge("106","127",a);d.addEdge("34","106",a);d.addEdge("189","190",a);d.addEdge("189","191",a);d.addEdge("191","192",a);d.addEdge("192","207",a);d.addEdge("192","215",a);d.addEdge("193","196",a);d.addEdge("193","199",a);d.addEdge("193","200",a);d.addEdge("193","215",a);d.addEdge("194","196",a);d.addEdge("195","196",a);d.addEdge("196","197",a);d.addEdge("197","198",a);d.addEdge("200","201",a);d.addEdge("200","202",a);d.addEdge("200","203",a);d.addEdge("203","204",a);d.addEdge("203","205",a);d.addEdge("204","206",a);d.addEdge("207","208",a);d.addEdge("207","209",a);d.addEdge("208","210",a);d.addEdge("210","211",a);d.addEdge("210","212",a);d.addEdge("211","213",a);d.addEdge("213","214",a);let k,P=[],F=[],_,D;const y=[],b=[],R={zoom:16,center:{lat:21.00159,lng:105.845727}};function L(E,e){const t=document.getElementById(E);e.forEach(m=>{const n=document.createElement("option");n.value=m.name,n.text=m.name,t==null||t.appendChild(n)})}L("start",a);L("diem1",a);L("diem2",a);L("diem3",a);function u(E,e){const t=[];return E.forEach(m=>{a.forEach(n=>{m===n.name&&t.push(n)})}),[t,e]}function U(){const E=document.getElementById("start"),e=document.getElementById("diem1"),t=document.getElementById("diem2"),m=document.getElementById("diem3"),n=E.value.toLocaleUpperCase(),g=e.value,l=t.value,o=m.value,h=d.dijkstra(n,g),i=d.dijkstra(g,l),f=d.dijkstra(l,o),c=[];h.path.forEach(s=>{c.push(s)}),i.path.forEach(s=>{c.push(s)}),f.path.forEach(s=>{c.push(s)}),console.log("start_diem1:",h);const r=[];for(let s=0;s<c.length;s++)c[s]!==c[s-1]&&r.push(c[s]);const p=u(r,0);p[0].forEach(s=>y.push(s)),console.log(p[0]),_=new google.maps.Polyline({path:p[0],geodesic:!0,strokeColor:"black",strokeOpacity:1,strokeWeight:2}),_.setMap(k);let j=(s,M)=>{P[M]=new google.maps.Marker({position:s,map:k,label:s.name})};p[0].forEach(j)}function W(){y.forEach((E,e)=>{P[e].setMap(null),_.setMap(null)}),y.splice(0,y.length),b.forEach((E,e)=>{F[e].setMap(null),D.setMap(null)}),b.splice(0,y.length)}function z(){const E=document.getElementById("start"),e=document.getElementById("diem1"),t=document.getElementById("diem2"),m=document.getElementById("diem3"),n=E.value.toLocaleUpperCase(),g=e.value,l=t.value,o=m.value,h=d.dijkstra(n,g),i=d.dijkstra(n,l),f=d.dijkstra(n,o),c=d.dijkstra(g,l),r=d.dijkstra(l,g),p=d.dijkstra(g,o),j=d.dijkstra(o,g),s=d.dijkstra(l,o),M=d.dijkstra(o,l);u(h.path,h.distance),u(i.path,i.distance),u(f.path,i.distance),u(c.path,c.distance),u(r.path,r.distance),u(p.path,p.distance),u(j.path,j.distance),u(s.path,s.distance),u(M.path,M.distance)}const I=document.getElementById("b1");I==null||I.addEventListener("click",U);const w=document.getElementById("b2");w==null||w.addEventListener("click",z);const C=document.getElementById("rm");C==null||C.addEventListener("click",W);function G(){k=new google.maps.Map(document.getElementById("map"),R),new google.maps.Polygon({paths:V,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"white",fillOpacity:.35}).setMap(k)}window.initMap=G;