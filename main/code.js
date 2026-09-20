// ******************************************************************************************
// The Top And Flops mod
// By Wildlukah
// v1.9.3

// Hey, If you're reading this, you're either a modder, a friend of mine or just don't know what you're doing.
// But it also means that you have eyes! That's great, isn't it?
// Also, apologize for the bad code, it's my first project lol

// ******************************************************************************************

// Create the main mod object (our package)
var The_Top_And_Flops_Mod = {};

(function(){
	
// ******************************************************************************************
// Platforms
// ******************************************************************************************

// Adding Odissea 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Odissea",
	name:"Odissea",
	company:"Megavoxel",
	startAmount:0.12,
	unitsSold:0.07,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"2/7/1",
	developmentCosts:10000,
	genreWeightings:[  1, 0.8, 0.6, 1, 0.7, 0.8, 0.7, 0.6, 0.7, 0.6, 0.8, 0.7, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Odissea.png",
	events:null
	});

// Adding Vagueness 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vagueness",
	name:"Vagueness",
	company:"HappyTech",
	startAmount:0.11,
	unitsSold:0.05,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"3/1/1",
	developmentCosts:5000,
	genreWeightings:[  1, 0.8, 0.6, 1, 0.8, 1, 0.9, 0.7, 0.6, 0.8, 0.8, 0.7, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vagueness.png",
	events:null
	});
	
// Adding Pick-A-Game 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Pick-A-Game",
	name:"Pick-A-Game",
	company:"Eneters",
	startAmount:0.1,
	unitsSold:0.07,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"2/1/1",
	developmentCosts:5000,
	genreWeightings:[  1, 0.8, 0.6, 1, 0.9, 0.8, 0.6, 0.6, 0.6, 0.8, 1, 0.7, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Pick-A-Game.png",
	events:null
	});
	
// Adding ConnecoVision
// -----------------------------------------------------------
GDT.addPlatform({
	id:"ConnecoVision",
	name:"ConnecoVision",
	company:"Conneco",
	startAmount:0.2,
	unitsSold:0.24,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"3/1/1",
	developmentCosts:10000,
	genreWeightings:[ 1, 0.8, 0.7, 0.8, 0.8, 0.7, 0.8, 0.9, 0.7, 0.8, 0.9, 0.6, 1 ],
	audienceWeightings:[  0.9, 1, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ConnecoVision.png",
	events:null
	});
	
// Adding Arcade 2001 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Arcade 2001",
	name:"Arcade 2001",
	company:"Ederson",
	startAmount:0.18,
	unitsSold:0.20,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"3/2/1",
	developmentCosts:8000,
	genreWeightings:[  1, 0.8, 0.7, 0.9, 0.8, 0.7, 0.8, 0.9, 0.6, 0.9, 0.8, 0.8, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Arcade 2001.png",
	events:null
	});
	
// Adding Tele-Game
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Tele-Game",
	name:"Tele-Game",
	company:"Ninvento",
	startAmount:0.23,
	unitsSold:0.24,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"2/4/1",
	developmentCosts:10000,
	genreWeightings:[  1, 0.7, 0.6, 1, 0.7, 0.8, 1, 0.7, 0.6, 0.7, 0.8, 0.6, 1 ],
	audienceWeightings:[  1, 1, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Tele-Game.png",
	events:null
	});
	
// Adding SmartVision
// -----------------------------------------------------------
GDT.addPlatform({
	id:"SmartVision",
	name:"SmartVision",
	company:"Matter",
	startAmount:0.29,
			marketKeyPoints: [{
                date: "1/6/3",
                amount: 0.255
            }, {
                date: "2/1/2",
                amount: 0.199
            }, {
				date: "3/9/2",
                amount: 0.214
            }, {
				date: "4/9/2",
                amount: 0.182
            }],
	unitsSold:0.2,
	licencePrize:0,
	published:"1/1/1",
	imageDates: ["3/1/1"],
	platformRetireDate:"5/1/1",
	developmentCosts:20000,
    genreWeightings: [1, 0.8, 0.7, 0.7, 0.8, 0.9, 0.8, 0.7, 0.8, 0.8, 0.9, 0.6, 1],
    audienceWeightings: [1, 0.8, 0.6],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SmartVision.png",
	events:[{
	id: "On-TVSystemIIIAnn",
	date: "3/1/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "Due to financial difficulties, Matter, the company behind SmartVision, has sold all assets related to the console to a new company, On-TV Company. {n} On-TV Company is focused on reviving and continuing the legacy of SmartVision by creating and licensing new games for the platform. Additionally, they have also announced a new revision of the console, the On-TV System III.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/On-TV System III.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Itara 2600 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara 2600",
	name:"Itara 2600",
	company:"Itara",
	startAmount:0.362,
	marketKeyPoints: [{
                date: "1/6/3",
                amount: 0.300
            }],
	unitsSold:0.32,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"2/4/1",
	developmentCosts:2E4,
	genreWeightings:[  1, 0.9, 0.9, 0.9, 0.9, 0.7, 0.9, 0.9, 0.7, 0.8, 0.9, 0.8, 1 ],
	audienceWeightings:[  0.9, 1, 0.8 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 2600.png",
	events:null
	});
	
// Adding Astrovision
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Astrovision",
	name:"Astrovision",
	company:"Roundy",
	startAmount:0.2,
	unitsSold:0.24,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"3/6/1",
	developmentCosts:5000,
	genreWeightings:[ 0.8, 0.8, 0.6, 0.9, 0.8, 0.6, 0.9, 0.8, 0.8, 0.8, 1, 0.6, 1 ],
	audienceWeightings:[  0.8, 1, 0.8 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Astrovision.png",
	events:null
	});
	
// Adding Vector
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vector",
	name:"Vector",
	company:"CCE",
	startAmount:0.23,
	marketKeyPoints: [{
                date: "1/6/3",
                amount: 0.21
            }, {
                date: "2/5/1",
                amount: 0.21
            }],
	unitsSold:0.2,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"2/7/1",
	developmentCosts:15000,
	genreWeightings:[  1, 0.7, 0.6, 0.9, 0.8, 0.7, 0.8, 0.8, 0.7, 0.8, 0.9, 0.6, 1 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vector.png",
	events:null
	});

// Adding Picovision
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Picovision",
	name:"Picovision",
	company:"CCE",
	startAmount:0.16,
	unitsSold:0.11,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"1/12/4",
	developmentCosts:15000,
	genreWeightings:[  1, 0.7, 0.6, 0.9, 0.8, 0.7, 0.8, 0.8, 0.7, 0.8, 0.9, 0.6, 1 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Picovision.png",
	events:null
	});
	
// Adding Game & Clock
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Game & Clock",
	name:"Game & Clock",
	company:"Ninvento",
	startAmount:0.29,
			marketKeyPoints: [{
                date: "1/6/3",
                amount: 0.26
            }, {
                date: "2/1/2",
                amount: 0.3
            }, {
				date: "3/9/2",
                amount: 0.32
            }],
	unitsSold:0.35,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"4/2/1",
	developmentCosts:20000,
    genreWeightings: [1, 0.6, 0.7, 0.9, 0.9, 0.6, 0.8, 1, 0.7, 1, 0.8, 0.6, 1],
    audienceWeightings: [1, 0.8, 0.6],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Game & Clock.png",
	events:[{
	id: "Game&ClockAfterAnn",
	date: "3/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "After a series of impressive market successes like the TES and Game & Clock, rumors claim that Ninvento is working on a new portable console, codenamed the 'Dot Matrix Play'.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Game & Clock.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding ZY 80 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"ZY 80",
	name:"ZY 80",
	company:"Senclair",
	startAmount:0.11,
	unitsSold:0.12,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"1/6/1",
	developmentCosts:4000,
	genreWeightings:[  0.9, 0.9, 0.7, 0.9, 0.7, 0.7, 0.6, 0.6, 0.8, 0.8, 0.7, 0.6, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY 80.png",
	events:null
	});
	
// Adding ZY 81 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"ZY 81",
	name:"ZY 81",
	company:"Senclair",
	startAmount:0.19,
	unitsSold:0.14,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"2/7/1",
	developmentCosts:4000,
	genreWeightings:[  0.9, 0.7, 0.8, 0.9, 0.7, 0.8, 0.7, 0.6, 0.8, 0.7, 0.7, 0.6, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY 81.png",
	events:null
	});
	
// Adding Grapple II
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Grapple II",
	name:"Grapple II",
	company:"Grapple",
	startAmount:0.27,
	unitsSold:0.38,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"4/12/1",
	developmentCosts:5000,
	genreWeightings:[  0.8, 0.9, 0.6, 1, 0.9, 1, 0.7, 0.7, 1, 0.9, 0.8, 0.6, 0.8 ],
	audienceWeightings:[  0.6, 0.9, 0.7 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapple II.png",
	events:null
	});
	
// Adding ZY Spectral 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"ZY Spectral",
	name:"ZY Spectral",
	company:"Senclair",
	startAmount:0.27,
	unitsSold:0.45,
	licencePrize:12000,
	published:"1/10/1",
	platformRetireDate:"6/7/1",
	developmentCosts:8000,
	genreWeightings:[  1, 0.8, 0.8, 1, 0.9, 0.7, 0.8, 0.9, 0.7, 0.8, 0.8, 0.7, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY Spectral.png",
	events:[{
	id: "ZYSpectralAnn",
	date: "1/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "Today, Senclair announced the successor to the popular ZY 81, named ZY Spectral. {n} As the name suggests, the Spectral is equipped with 8-bit color capabilities, and comes with an unusual rubber keyboard. The ZY Spectral is said to be available starting on {0} and can be ordered via mail.".localize().format(General.getETADescription('1/8/1', '1/10/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY Spectral.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
{
	id: "ZYSpectralSuccess",
	date: "2/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "The ZY Spectral is said to have been a huge success in the United Kingdom and elsewhere in Europe. {n} Consumers seem to appreciate its affordable price, compact design, and powerful hardware, along the vast library of titles.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY Spectral.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Itara 5200
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara 5200",
	name:"Itara 5200",
	company:"Itara",
	startAmount:0.334,
            marketKeyPoints: [{
                date: "2/1/2",
                amount: 0.279
            }, {
                date: "2/5/1",
                amount: 0.309
            }],
	unitsSold:0.365,
	licencePrize:50000,
	published:"1/11/4",
	platformRetireDate:"3/4/1",
	developmentCosts:20000,
	genreWeightings:[  1, 0.8, 0.9, 0.8, 0.9, 0.8, 0.8, 0.8, 0.7, 0.9, 0.9, 0.8, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.8 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 5200.png",
	events:[{
	id: "Itara5200Leak",
	date: "1/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "According to several anonymous sources, Itara is developing a new console codenamed 'IperSystem'. Nothing else is known, so we'll have to wait and see what happens.",
	previewImage: "./images/notificationIcons/icon_notification_platform_release.png",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/companies/Itara.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "Itara5200Announcement",
	date: "1/9/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today Itara has revealed its new console, called the Itara 5200. {n} This new device, created to compete with Ninvento's TES, offers better graphics and audio qualities than its predecessor and comes bundled with the popular title Super Breaking-out. {n} The fan response appears largely positive with the Itara 5200, although many experts claim the new Itara 5200 controller to be uncomfortable to use over longer periods of time. This could ruin Itara 5200's sales. {n} Itara announced that the Itara 5200 will be released {0}.".localize().format(General.getETADescription('1/9/4', '1/11/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 5200.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding VG-1000
// -----------------------------------------------------------
GDT.addPlatform({
    id: 'VG-1000',
    name: 'VG-1000',
    company: 'Vena',
    startAmount:0.31,
    unitsSold:0.37,
    licencePrize: 5E4,
    published: '2/1/2',
    platformRetireDate: '3/5/1',
    developmentCosts: 2E4,
    genreWeightings: [1, 0.8, 0.9, 1, 0.8, 0.6, 0.8, 0.9, 0.7, 0.9, 0.7, 0.7, 0.8],
    audienceWeightings: [1, 0.9, 0.7],
    techLevel: 1,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Vena VG-1000.png",
	events:[{
	id: "VenaVG1000ann",
	date: "1/10/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following the announcement of the TES console, another Japanese company called Vena recently revealed a new home gaming console on their own, called 'VG-1000'. {n} Just like the TES, this new console features cartridge based games and a uniquely designed controller.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Vena VG-1000.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding LCD Casse
// -----------------------------------------------------------
GDT.addPlatform({
	id:"LCD Casse",
	name:"LCD Casse",
	company:"Bendai",
	startAmount:0.13,
	unitsSold:0.12,
	licencePrize:2000,
	published:"2/4/3",
	platformRetireDate:"3/12/4",
	developmentCosts:10000,
	genreWeightings:[  1, 0.6, 0.7, 0.9, 0.8, 0.7, 0.9, 0.8, 0.6, 0.8, 0.7, 0.6, 1 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/LCD Casse.png",
	events:[{
	id: "LCDCasseAnn",
	date: "2/2/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The famous Japanese toy company Bendai has finally announced its new plans to launch a portable console. {n} Called the LCD Casse for obvious reasons, it uses interchangeable LCD cartridges that plug into the main console and can use up to two button cells. It will also come with two pre-built games.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/LCD Casse.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Cassio Pev-Sen
// -----------------------------------------------------------
GDT.addPlatform({
    id: 'Pev-Sen',
    name: 'Pev-Sen',  // Based on the PV-1000 ofc
    company: 'Cassio',
    startAmount:0.16,
    unitsSold:0.11,
    licencePrize: 20000,
    published: '2/6/1',
    platformRetireDate: '3/5/1', // The irl console lasted for several weeks
    developmentCosts: 30000,
    genreWeightings: [1, 0.6, 0.7, 1, 0.8, 0.7, 0.7, 0.7, 0.7, 0.8, 0.9, 0.6, 1],
    audienceWeightings: [1, 0.9, 0.6],
    techLevel: 1,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Cassio Pev-Sen.png",
	events:[{
	id: "Pev-SenAnn",
	date: "2/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recently, popular Japanese electronics company Cassio, famous for its calculators and digital watches, announced a new home console, the Pev-Sen. {n} The Pev-Sen will compete against the recently-released TES and VG-1000 consoles. Cassio hasn't announced much else aside from ten launch games and the console's innovative new, deep blue design.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Cassio Pev-Sen.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "Pev-SenFail",
	date: "3/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Cassio has announced that they will retire their console, the Pev-Sen, {0}. {n} Rumors suggest that Cassio was unable to compete against more popular consoles due to lack of third-party support and proper advertising.".localize().format(General.getETADescription('6/6/4', '6/12/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Cassio Pev-Sen.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding Odissea 2
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Odissea 2",
	name:"Odissea 2",
	company:"Megavoxel",
	startAmount:0.19,
	unitsSold:0.25,
	licencePrize:0,
	published:"2/6/2",
	platformRetireDate:"3/2/1",
	developmentCosts:10000,
	genreWeightings:[  1, 0.7, 0.7, 1, 0.7, 0.8, 0.7, 0.6, 0.8, 0.9, 0.9, 0.6, 1 ],
	audienceWeightings:[  0.9, 1, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Odissea 2.png",
	events:[{
	id: "Odissea2Ann",
	date: "2/2/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "After pioneering the videogame industry by successfully making the first video game console ever, Megavoxel has announced the sequel to their Odissea console. {n} The Odissea 2 comes with a distinctive black and beige design, with two paddle controllers and a built-in keyboard.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Odissea 2.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Pokecomp
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Pokecomp",
	name:"Pokecomp",
	company:"Époque",
	startAmount:0.14,
	unitsSold:0.2,
	licencePrize:10000,
	published:"2/7/2",
	platformRetireDate:"4/1/1",
	developmentCosts:5000,
    genreWeightings: [0.9, 0.6, 0.8, 0.7, 1, 0.9, 0.7, 0.8, 0.6, 1, 0.7, 0.6, 0.9],
    audienceWeightings: [1, 0.8, 0.6],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Pokecomp.png",
	events:[{
	id: "PokecompAnn",
	date: "2/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Époque, a Japanese toy and computer game company, recently announced a new handheld console coming to {0}, called Pokecomp. {n} The Pokecomp is the first portable console to use cartridges as the media for its games. Furthermore, it uses a monochrome screen whose contrast can be adjusted by the player.".localize().format(General.getETADescription('2/6/2', '2/7/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Pokecomp.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding G16
// -----------------------------------------------------------
GDT.addPlatform({
	id:"G16",
	name:"G16",
	company:"Govodore",
	startAmount:0.22,
	unitsSold:0.32,
	licencePrize:30000,
	published:"2/7/4",
	platformRetireDate:"3/6/2",
	developmentCosts:20000,
    genreWeightings: [0.9, 1, 0.9, 0.9, 1, 0.7, 0.7, 0.8, 0.8, 0.9, 0.7, 0.8, 0.7],
    audienceWeightings: [0.8, 0.9, 1],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/G16.png",
	events:[{
	id: "G16Ann",
	date: "2/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Govodore recently announced a new budget home computer called G16. {n} The G16 resembles a G64 with a dark-gray case and light-gray keys and is also designed with a focus on ease of use, offering a new integrated version of BASIS language and a large amount of cartridge and disks. {n} Lately, Govodore lost market share against other PC manufacturers and videogame consoles. Will this home computer take off and revive Govodore? The G16 is scheduled to be released {0}.".localize().format(General.getETADescription('2/6/1', '2/7/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/G16.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Grapintosh
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Grapintosh",
	name:"Grapintosh",
	company:"Grapple",
	startAmount:0.34,
            marketKeyPoints: [{
                date: "3/10/2",
                amount: 0.4
            }, {
                date: "6/7/2",
                amount: 0.32
            }],
	unitsSold:0.36,
	licencePrize:50000,
	published:"2/10/1",
	imageDates: ["3/10/2", "6/7/2"],
	platformRetireDate:"10/7/1",
	developmentCosts:10000,
	genreWeightings:[  0.9, 0.8, 0.7, 1, 0.8, 1, 0.7, 0.8, 1, 1, 0.7, 0.7, 0.8 ],
	audienceWeightings:[  0.6, 0.9, 0.7 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapintosh.png",
	events:[{
	id: "GrapintoshAnn",
	date: "2/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "During this year's Mega Bowl event, Grapple announced their newest home computer, the Grapintosh. {n} The Grapintosh is the very first home computer in history to feature an intuitive graphical user interface, with built-in screen and mouse.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapintosh.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Senclair QJ 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Senclair QJ",
	name:"Senclair QJ",
	company:"Senclair",
	startAmount:0.24,
	unitsSold:0.37,
	licencePrize:25000,
	published:"3/1/1",
	platformRetireDate:"4/4/1",
	developmentCosts:12000,
	genreWeightings:[  1, 0.8, 0.7, 1, 0.9, 0.6, 0.8, 0.7, 0.6, 0.9, 0.7, 0.6, 1 ],
	audienceWeightings:[  0.7, 1, 0.8 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Senclair QJ.png",
	events:[{
	id: "QJAnn",
	date: "2/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "Senclair has announced a new high-end personal computer, dubbed 'Quantum Jump' and abbreviated QJ. {n} The name of this platform stands for the technological leap it offers compared to its competitors: for 399 cr. you can take home a 16-bit computer with one of the strongest processors in the world, the Motor 68008. {n} Senclair has stated they'll start shipping the pre-ordered QJ computers to the consumers within 28 days.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Senclair QJ.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
{
	id: "QJfail",
	date: "3/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "Reports say that only 45,000 units of the Senclair QJ were sold compared to the 200,000 Senclair had predicted. {n} The Senclair QJ was panned by critics for its numerous bugs in the operating system, an unresponsive keyboard, and an unusual marketing campaign that claimed it would ship all the units within just 28 days, when it actually took 2 months. {n} The latest fiscal report suggests that Senclair is in shaky financial condition and may be forced to sell its computer division.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Senclair QJ.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Animation 200
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Animation 200",
	name:"Animation 200",
	company:"Art 'nd Sketch",
	startAmount:0.17,
	unitsSold:0.23,
	licencePrize:10000,
	published:"3/5/1",
	platformRetireDate:"6/4/4",
	developmentCosts:2500,
	genreWeightings:[  1, 0.7, 0.7, 0.9, 0.8, 0.6, 0.6, 0.6, 0.9, 0.9, 0.6, 0.6, 0.8 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Animation 200.png",
	events:[{
	id: "Ani200Ann",
	date: "3/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today a company called Art 'nd Sketch unveiled a new handheld console, coming in the upcoming months, called Animation 200. {n} Unlike many other drawing toys, the Animation 200 is designed to make animations by using a new touchpad technology, instead of the classic knobs. Additionally, the Animation 200 supports video games via cartridges, making it a video game console too.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Animation 200.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Itara 7800
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara 7800",
	name:"Itara 7800",
	company:"Itara",
	startAmount:0.37,
	unitsSold:0.391,
	licencePrize:60000,
	published:"3/4/1",
	platformRetireDate:"4/5/1",
	developmentCosts:25000,
	genreWeightings:[  1, 0.7, 0.8, 0.9, 0.9, 0.9, 0.8, 0.8, 0.7, 0.8, 0.8, 0.8, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 7800.png",
	events:[{
	id: "Itara5200flop",
	date: "2/3/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "The recently released Itara 5200 turned out to be a flop. {n} Experts claim the reason it failed is because the Itara 5200's hardware simply cannot match Ninvento's TES in any department. {n} In addition, word of the controller being uncomfortable to use has been confirmed by the playerbase. We are curious to see how Itara will act on the situation.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 5200.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "Itara7800Announcement",
	date: "3/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "At a press conference, Itara has announced the successor to the Itara 5200. {n} Called the Itara 7800 proSystem, this new device is said to possess the best color graphics of any console currently available. {n} The Itara 7800 was stated to also be backwards compatible with games from the Itara 2600. {n} The new Itara 7800 will release {0}.".localize().format(General.getETADescription('3/2/1', '3/4/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 7800.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Vena AI
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vena AI",
	name:"Vena AI",
	company:"Vena",
	startAmount:0.10,
            marketKeyPoints: [{
                date: "3/10/2",
                amount: 0.4
            }, {
                date: "6/7/2",
                amount: 0.32
            }],
	unitsSold:0.12,
	licencePrize:50000,
	published:"3/8/1",
	platformRetireDate:"4/12/1",
	developmentCosts:20000,
	genreWeightings:[  0.8, 1, 0.8, 0.9, 0.8, 0.7, 0.6, 0.8, 1, 0.9, 0.6, 0.6, 0.8 ],
	audienceWeightings:[  1, 0.7, 0.6 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vena AI.png",
	events:[{
	id: "VenaAIAnn",
	date: "3/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text:  "Vena has revealed a home computer for the Japanese market that will be available in {0} this year. {n} Called AI, the computer pushes the limits of current artificial intelligence technology: it will feature 128 KB of RAM and will have a touchpad, an external keyboard, and even a speech recognition device. {n} It will be dedicated to educational games and will be sold to schools in Japan.".localize().format(General.getETADescription('3/5/1', '3/8/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vena AI.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding FJ Tower
// -----------------------------------------------------------
GDT.addPlatform({
	id:"FJ Tower",
	name:"FJ Tower",
	company:"Fuji",
	startAmount:0.27,
	unitsSold:0.35,
	licencePrize:20000,
	published:"3/10/1",
	imageDates: ["6/2/3"],
	platformRetireDate:"9/6/4",
	developmentCosts:4000,
	genreWeightings:[  1, 0.9, 1, 0.9, 0.9, 0.8, 0.7, 0.8, 0.9, 0.9, 0.7, 0.7, 1 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/FJ Tower.png",
	events:[{
	id: "FJTowerAnn",
	date: "3/9/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Fuji, a japanese tech company, has announced their newest line of gaming PCs, called Tower. {n} The PC comes with high-end hardware, a CD-ROM slot and its own operating system, TowerOS.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/FJ Tower.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding STeP WorkStation
// -----------------------------------------------------------
GDT.addPlatform({
	id:"STeP WorkStation",
	name:"STeP WorkStation",
	company:"STeP",
	startAmount:0.37,
	unitsSold:0.33,
	licencePrize:50000,
	published:"4/12/1",
	platformRetireDate:"8/7/1",
	developmentCosts:250000,
	genreWeightings:[  1, 0.7, 0.6, 0.9, 1, 0.7, 0.7, 0.8, 0.9, 1, 1, 0.6, 0.8 ],
	audienceWeightings:[  0.6, 0.8, 1 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/STeP WorkStation.png",
	events:[{
	id: "STePWorkStationAnn",
	date: "4/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Stevie Bobs, founder and former CEO of Grapple, after stepping down and founding STeP, has revelaed a new high-end workstation. {n} This cube-shaped computer has impressive hardware capabilities and comes with an object-oriented operating system, NeWSTeP, available in both monochrome or color editions.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/STeP WorkStation.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
{
	id: "STePWorkStationSuccess",
	date: "8/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Although it's about to be retired, the STeP WorkStation was a huge success during its life. It was used to create the world's first web server and web browser, the WorldWidenedWeb. Many successful games, such as Mars and Shake, also originated here. {n} Stevie Bobs, founder of both Grapple and STeP, was recently recalled by the company he founded, in the throes of the financial crisis and looking for new revolutionary ideas.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/STeP WorkStation.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Chip Engine
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Chip Engine",
	name:"Chip Engine",
	company:"Nippon",
	startAmount:0.63,
	unitsSold:0.64,
	licencePrize:1E5,
	published:"4/1/1",
            marketKeyPoints: [{
                date: "5/3/2",
                amount: 0.60
            }, {
                date: "6/1/1",
                amount: 0.62
            }],
    platformRetireDate: "7/7/1",
    developmentCosts: 5E4,
    genreWeightings: [0.9, 0.7, 1, 0.8, 0.7, 0.6, 0.8, 1, 0.7, 0.9, 0.8, 0.7, 0.9],
    audienceWeightings: [1, 0.8, 0.7],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Chip Engine.png",
	events:[{
	id: "ChipEngineAnn",
	date: "3/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today Nippon, a japanese company specialized in information technology and electronics, unveiled a new-generation platform called Chip Engine. {n} The Chip Engine comes with an innovative 16-Bit graphics while also olding the smallest home game console ever made record. The Chip Engine offers a very innovative gaming experience. {n} Many experts expect that the Chip Engine will be the beginning of a new generation of gaming. Nippon also announced the Chip Engine will release {0}.".localize().format(General.getETADescription('3/6/2', '4/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Chip Engine.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Itara XEgg
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara XEgg",
	name:"Itara XEgg",
	company:"Itara",
	startAmount:0.19,
	unitsSold:0.251,
	licencePrize:60000,
	published:"4/2/1",
	platformRetireDate:"6/1/1",
	developmentCosts:25000,
	genreWeightings:[  1, 0.8, 0.7, 0.9, 0.6, 0.8, 0.8, 0.9, 0.6, 0.8, 1, 0.6, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara XEgg.png",
	events:[{
	id: "ItaraXEggAnn",
	date: "3/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "After launching the Itara 7800, Itara recently announced a new redesign of its home computers, called XEgg, designed for playing video games. {n} The console will hit the market {0} supported by new titles and will be sold with a keyboard, a joystick and a light gun.".localize().format(General.getETADescription('3/8/1', '4/2/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara XEgg.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Itara Lynks
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara Lynks",
	name:"Itara Lynks",
	company:"Itara",
	startAmount:0.5,
	unitsSold:0.63,
	licencePrize:5E4,
	published:"4/2/1",
	platformRetireDate:"8/5/1",
	developmentCosts:2E4,
	genreWeightings:[  0.9, 0.8, 0.9, 1, 0.9, 0.7, 0.9, 0.9, 0.7, 1, 0.9, 0.7, 0.8 ],
	audienceWeightings:[  1, 0.9, 0.8 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara Lynks.png", //Also, I was making this mod with UME, but then I discovered that it was very, very outdated and always gave me errors.
	events:[{
	id: "ItaraLynksAnnouncement",
	date: "3/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following Ninvento's Gameling's release, Itara has reacted by announcing their own handheld console, called the Itara Lynks. {n} The Itara Lynks is significantly more advanced than Ninvento's monochrome Gameling, sporting a 16-Bit color liquid-crystal display. Initial tests suggest that the Itara Lynks has an acceptable battery and a decent launch game library. {n} Despite impressive hardware, experts claim that the Itara Lynks has a low chance to overtake against the Gameling. The Itara Lynks will arrive in stores {0}.".localize().format(General.getETADescription('3/10/1', '4/2/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara Lynks.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Neon Geon
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Neon Geon",
	name:"Neon Geon",
	company:"TNK",
	startAmount:0.66,
            marketKeyPoints: [{
                date: "5/2/4",
                amount: 0.57
            }, {
                date: "5/12/4",
                amount: 0.51
            }, {
                date: "7/7/1",
                amount: 0.48
            }, {
                date: "9/2/1",
                amount: 0.41
            }, {
                date: "10/8/3",
                amount: 0.34
            }],
	unitsSold:0.321,
	licencePrize: 150000,
	published:"4/8/1",
    platformRetireDate: "14/7/1",
    developmentCosts: 50000,
    genreWeightings: [1, 0.9, 0.9, 0.6, 0.7, 0.9, 0.8, 1, 0.7, 0.7, 0.9, 0.8, 1],
    audienceWeightings: [0.6, 1, 0.8],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon.png",
	events:[{
	id: "NeonGeonAnn",
	date: "4/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "TNK, a well-received company renowned for their arcade titles, announced their new 'Neon Geon' home console. The Neon Geon is marketed as the new world of arcade gaming: its one of the first 24-Bit home consoles to feature stunning arcade-quality graphics and sound and it offers to players an authentic arcade experience in their own houses.".localize().format(General.getETADescription('4/6/2', '5/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
GDT.addPlatform({
	id:"Neon Geon CD",
	name:"Neon Geon CD",
	company:"TNK",
	startAmount:0.54,
	unitsSold:0.32,
	licencePrize: 250000,
	published:"7/9/1",
    platformRetireDate: "9/12/4",
    developmentCosts: 75000,
    genreWeightings: [1, 0.8, 1, 0.7, 0.7, 0.9, 0.8, 1, 0.7, 0.7, 0.9, 0.8, 1],
    audienceWeightings: [0.8, 0.8, 0.9],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon CD.png",
	events:[{
	id: "NeonGeonCDAnn",
	date: "7/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "TNK has announced during the latest Tokyo Game Show that they will release a new platform in the Neon Geon line {0}. {n} Called the 'Neon Geon CD', said platform is one of the first consoles to use CD-ROMs as media for its games instead of cartridges. {n} Many experts suggest that CD-ROMs could become a new standard in the video game industry, as they are cheaper to produce and allow for the creation of larger games. {n} The Neon Geon CD also uses the same CPU configuration as TNK's arcade machines, making it easier to port games to this new device.".localize().format(General.getETADescription('7/6/2', '7/9/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon CD.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "NeonGeonCDfail",
	date: "7/11/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "The recently released Neon Geon CD was met with limited success worldwidely. {n} The failure of this console is attributed to unaggressive marketing and a particularly slow disc player, performing slow loading times, that can vary from 30 to 60 seconds between loads, depending on the game.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon CD.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Super Chip
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Super Chip",
	name:"Super Chip",
	company:"Nippon",
	startAmount:0.33,
	unitsSold:0.31,
	licencePrize:1E5,
	published:"5/4/1",
    platformRetireDate: "6/7/1",
    developmentCosts: 60000,
    genreWeightings: [1, 0.7, 1, 0.8, 0.7, 0.6, 0.8, 1, 0.7, 0.9, 1, 0.7, 0.9],
    audienceWeightings: [1, 0.8, 0.7],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Super Chip.png",
	events:[{
	id: "SuperChipAnn",
	date: "5/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "After releasing the Chip Engine, Nippon has announced a new home console in the line, scheduled for release {0}. {n} Unlike its predecessor, the SuperChip features actual 16-Bit power and features renewed graphics and audio capabilities.".localize().format(General.getETADescription('5/3/1', '5/4/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Super Chip.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Superview
// -----------------------------------------------------------
GDT.addPlatform({
	id:"SuperView",
	name:"Superview", // Based on the Supervision
	company:"Whatera",
	startAmount:0.43,
	unitsSold:0.56,
	licencePrize:3E4,
	published:"6/3/1",
	platformRetireDate:"9/1/1",
	developmentCosts:2E4,
	genreWeightings:[  0.9, 0.8, 0.8, 0.9, 1, 0.8, 0.7, 0.8, 0.6, 0.9, 0.7, 0.6, 0.8 ],
	audienceWeightings:[  0.9, 0.8, 0.6 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Superview.png",
	events:[{
	id: "SuperViewAnnouncement",
	date: "5/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today an Asian company called Whatera has announced a new handheld, called the Superview. Its hardware seems to be a cut-price competitor for Ninvento's Gameling. {n} Featuring an high-quality monocromatic screen, the Superview comes with a set of headphones, batteries and a launch game called Crystalball. {n} Can Superview beat Gameling? We'll find out in the coming months.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Superview.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding CD-e
// -----------------------------------------------------------
GDT.addPlatform({
	id:"CD-e",
	name:"CD-e",
	company:"Fillips",
	startAmount:0.46,
	unitsSold:0.65,
	licencePrize:150000,
	published:"6/7/1",
	platformRetireDate:"11/1/1",
	developmentCosts:50000,
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.6, 0.9, 0.6, 0.9, 0.7, 0.9, 0.7, 0.6, 0.7 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/CD-e.png",
	events:[{
	id: "CD-eAnn",
	date: "6/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Fillips, a Dutch multinational conglomerate corporation, just unveiled their own console, the CD-e. {n} The CD-e is what remains of the failed agreement between Vonny and Ninvento, where Ninvento decided to continue with Fillips to create games for the first console in the world equipped with a CD-ROM drive. {n} The CD-ROM is a new idea in the gaming industry, and many experts say it could take off and replace cartridges, as CD-ROMs have more memory and are easier to produce.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/CD-e.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "CD-Efail",
	date: "6/12/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "The recently released CD-e turned out to be a total flop worldwide. Even though Fillips is doing everything to promote this device, even releasing Ninvento series games like Super Plario and Zelma, the CD-e is not powerful enough compared to other consoles in the market and the software library is very limited. We are now curious to see how Fillips will react.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/CD-e.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding FJ Tower Mars
// -----------------------------------------------------------
GDT.addPlatform({
	id:"FJ Tower Mars",
	name:"FJ Tower Mars",
	company:"Fuji",
	startAmount:0.12,
	unitsSold:0.25,
	licencePrize:25000,
	published:"6/2/1",
	platformRetireDate:"8/5/1",
	developmentCosts:5000,
	genreWeightings:[  1, 0.9, 1, 0.9, 0.9, 0.8, 0.7, 0.8, 0.9, 0.9, 0.7, 0.7, 1 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/FJ Tower Mars.png",
	events:[{
	id: "FJTowerMarsAnn",
	date: "5/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Fuji, the company behind the high-end FJ Tower computer, has just announced a console version of the FJ Tower line that will be released {0}. {n} The FJ Tower Mars will be the world's first 32-bit CD-ROM-based console and will be backwards compatible with all titles released for computers in the line.".localize().format(General.getETADescription('5/12/2', '6/2/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/FJ Tower Mars.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding MessPad
// -----------------------------------------------------------
GDT.addPlatform({
	id:"MessPad",
	name:"MessPad",
	company:"Grapple",
	startAmount:0.51,
	unitsSold:0.47,
	licencePrize: 100000,
	published:"6/8/1",
    platformRetireDate: "10/3/1",
    developmentCosts: 30000,
    genreWeightings: [0.7, 0.7, 0.6, 1, 0.8, 0.9, 0.6, 0.8, 1, 0.9, 0.6, 0.6, 0.7],
    audienceWeightings: [1, 0.8, 0.8],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/MessPad.png",
	events:[{
	id: "MessPadAnn",
	date: "6/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Grapple has announced its attempt to introduce a portable computer with MessPad, a new personal digital assistant that will include numerous apps designed to simplify everyday tasks. {n} MessPad will be very easy to use thanks to its touchscreen with a stylus, a new handwriting recognition system, and even voice recognition. {n} While not specifically designed for gaming, the MessPad will be able to run a few small games, including one pre-installed with the system, 'Calligraphy'.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/MessPad.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Amica CD32
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Amica CD32",
	name:"Amica CD32",
	company:"Govodore",
	startAmount:0.41,
	unitsSold:0.32,
	licencePrize:1E5,
	published:"6/9/2",
            marketKeyPoints: [{
                date: "5/3/2",
                amount: 0.60
            }, {
                date: "6/1/1",
                amount: 0.62
            }],
    platformRetireDate: "7/4/4",
    developmentCosts: 5E4,
    genreWeightings: [0.8, 0.9, 0.7, 0.9, 0.7, 0.9, 0.6, 0.8, 0.7, 0.8, 0.8, 0.6, 0.8],
    audienceWeightings: [0.8, 0.9, 1],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Amica CD32.png",
	events:[{
	id: "AmicaCD32Ann",
	date: "6/8/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Govodore recently announced a new video game console, called Amica CD32. {n} Unlike other platforms such as the CD-e, the CD32 is designed specifically as a games machine, having a CD-ROM drive in place of cartridges and a custom chipset for improved graphical performance. {n} In recent years, Govodore has lost market share to other PC and console manufacturers, with the company having recorded negative revenues for years. Can the CD32 lift the company from bankruptcy? We'll find out {0}.".localize().format(General.getETADescription('6/8/2', '6/9/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Amica CD32.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding 3D-On
// -----------------------------------------------------------
GDT.addPlatform({
    id: '3D-On',
    name: '3D-On',
    company: '3D-On Company',
    startAmount:0.68,
    unitsSold:0.51,
    licencePrize: 120000,
    published: '6/12/2',
    platformRetireDate: '9/1/1',
    developmentCosts: 70000,
    genreWeightings: [0.9, 0.8, 0.7, 0.8, 0.9, 0.6, 0.8, 0.8, 0.8, 0.9, 1, 0.8, 0.9],
    audienceWeightings: [1, 0.9, 0.8],
    techLevel: 3,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/3D-On.png",
	events:[{
	id: "3D-Onann",
	date: "6/6/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recently, some of the most popular companies in the videogame industry such as Electronic Mass, Matsusonic and GoldSky have reunited to back a single company, The 3D-On Company, with the goal of developing a new standard in the industry, dubbed 3D-On. {n} Scheduled for release {0}, the 3D-On stands out for its technological marvels such as immersive 32-Bit 3D graphic and sound, the usage of CD-ROM technology as media, realistic sound quality and planned online play. {n} A spokesperson for the company stated in a press conference: 'The 3D-On system will revolutionize the way you play games, with twenty new titles to launch over the next years.'".localize().format(General.getETADescription('6/6/4', '6/12/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/3D-On.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "3D-OnFlop",
	date: "7/10/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Despite initial attention, the 3D-On left a lot to be desired among consumers and failed to compete with rivals like Vena's Jupiter and Vonny's recently launched PlaySystem. {n} Experts blame the console's very high cost, lack of third-party software, and inconsistency in the quality of the console's hardware, caused by the different companies working on the 3D-On. {n} Gaming World magazine claimed that the console 'is poised for a wave of software support over the next 12 months', while 3D-On itself responded by lowering the prices of some models and announcing that it was working on a new add-on for the console, the 'M2-On.'",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/3D-On.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "M2-OnAnn",
	date: "8/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "During the last G3, the 3D-On Company exhibited and demonstrated a prototype of its new console, the M2-On. {n} It was revealed that the new M2-On has an incredible power that could make it the most powerful console in recent years, based on a PoweringPC architecture. {n} Many fans were left surprised by this announcement, but also disappointed since 3D-On Company announced that it would be an add-on for the original 3D-On instead of a new standalone console of its own.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/electronics/M2-On.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "M2-OnSold",
	date: "9/1/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The M2-On announced during the last G3 faces an uncertain future, as today the 3D-On Company has revealed that the M2-On project has been sold to Matsusonic, one of the companies working on the project, and that it will be continued by them. {n} A spokesperson for Matsusonic has revealed that the console will not appear at the next G3 and they are not yet sure how to use the console's hardware. Despite this, some games for the console have been shown, including a racing game in collaboration with the International Motors Association.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/electronics/M2-On.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "M2-OnCancellation",
	date: "9/7/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, the president of Matsusonic officially announced the cancellation of the M2-On and that its technology will be used in other industries and integrated into some arcade cabinets. {n} According to some rumors, Matsusonic didn't want to compete against industry giants such as the recently released TES 64 by Ninvento and Vonny's PlaySystem. This seems to be the end of the M2-On, while the 3D-On Company will continue to exist and develop games for other platforms.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/electronics/M2-On.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "3D-OnBankruptcy",
	date: "13/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "After struggling for several years, 3D-On has filed for bankruptcy after developing series games for other consoles, such as Army Soldiers. {n} According to some investigations, the company has not paid any salaries for several months. The company's assets were put up for sale in an auction, with interests from some large companies such as ÜberSoft and Mirconoft.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/companies/3D-On Company.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
]
	});

// Adding Itara Leopard
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara Leopard",
	name:"Itara Leopard",
	company:"Itara",
	startAmount:0.65,
	unitsSold:0.68,
	licencePrize: 160000,
	published:"7/1/1",
    platformRetireDate: "9/1/1",
    developmentCosts: 50000,
    genreWeightings: [1, 0.8, 0.9, 1, 0.9, 0.7, 1, 0.9, 0.6, 0.7, 1, 0.6, 0.9],
    audienceWeightings: [1, 0.9, 0.8],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara Leopard.png",
	events:[{
	id: "ItaraLeopardAnn",
	date: "6/11/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The wait for Itara fans is over, as today said company announced a next-generation platform, scheduled for release {0}. {n} Called Itara Leopard, the console is dubbed as 'The First 64-Bit Console', coming powered by two 32-Bit coprocessors, having cartridges as gaming media, and shipping with a game. {n} Many experts say we will see more 64-Bit consoles and are now curious to see how Itara Leopard works and what the future holds.".localize().format(General.getETADescription('6/11/2', '7/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara Leopard.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "ItaraLeopardFailure",
	date: "7/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The Itara Leopard has recently been subjected to a lot of criticism and controversy. Many experts doubt whether the console is 64-Bit, as marketed. {n} In fact, the Itara Leopard runs on two 32-Bit coprocessors, and many experts do not justify this for Itara who marketed its console as 'The first 64-Bit console'. {n} This, along with a lack of games and a difficult-to-maintain controller, could affect sales, with some speculating that Itara is in a serious financial crisis.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara Leopard.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "ItaraFailure",
	date: "8/11/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Many fans around the world were surprised today as Itara announced that they are discontinuing their console, the Itara Leopard, and that they will no longer be producing new consoles in the future. {n} Itara has struggled with sales since the release of the TES, as its consoles have never been able to keep up with the market. The Itara Leopard will be retired {0}.".localize().format(General.getETADescription('8/11/1', '9/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/companies/Itara.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});


// Adding Gamedia
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Gamedia",
	name:"Gamedia",
	company:"Bendai",
	startAmount:0.61,
	unitsSold:0.647,
	licencePrize: 150000,
	published:"7/5/1",
    platformRetireDate: "9/5/1",
    developmentCosts: 40000,
    genreWeightings: [1, 0.8, 0.9, 0.8, 0.6, 0.7, 0.7, 0.8, 1, 0.9, 0.7, 0.6, 0.9],
    audienceWeightings: [1, 0.8, 0.6],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamedia.png",
	events:[{
	id: "GamediaAnn",
	date: "6/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Bendai, a Japanese multinational toy manufacturer, just unveiled their new-generation console called Gamedia. {n} The Gamedia has a very innovative hardware despite being an 8-Bit console, as it uses CD-ROM and has a wireless controller, which works with wireless infrared. {n} Gamedia is aimed at a younger audience, with many anime trivia games and educational games already announced for the console.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamedia.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding Vena Jupiter
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vena Jupiter",
	name:"Vena Jupiter",
	company:"Vena",
	startAmount:0.75,
	marketKeyPoints: [{
                date: "7/7/1",
                amount: 0.8
            }, {
				date: "8/5/1",
                amount: 0.74
            }, {
				date: "9/2/1",
                amount: 0.66
            }, {
                date: "10/8/3",
                amount: 0.74
            }],
	unitsSold:0.7,
	licencePrize:2E5,
	published:"7/6/1",
	platformRetireDate:"10/12/1",
	developmentCosts:7E4,
	genreWeightings:[  1, 0.9, 1, 0.8, 0.7, 0.6, 0.9, 0.9, 0.8, 0.7, 0.9, 0.8, 0.8 ],
	audienceWeightings:[  0.9, 0.8, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vena Jupiter.png",
	events:[{
	id: "VenaJupiterLeak",
	date: "7/1/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Rumor has it that Vena is planning to publicly announce their next console at the next Tokyo Game Show. {n} In recent years, Vena has lost a lot of its market share to newer and more innovative platforms, while still releasing new extensions for the Oasis, such as the X32 and Iper CD. {n} This new Vena console is rumored to posess 3D graphics and use CD-ROMs instead of cartridges, but it is yet to be confirmed.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/companies/Vena.png",
    previewImage: "./images/notificationIcons/icon_notification_platform_release.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "VenaJupiterAnn",
	date: "7/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vena has announced their new console, called the Vena Jupiter. {n} The Vena Jupiter is said to be a revolutionary console, allegedly having one of the most powerful hardware ever seen: 32-Bit graphics, cutting-edge sound, and smooth 3D were advertised. The CD-ROM format will be used for games instead of ROM cartridges. {n} Several ports of arcade games and original games were announced by Vena. Fans appear satisfied with this new device, and expert predict that this console will be a success. Vena stated that the Vena Jupiter will release {0}.".localize().format(General.getETADescription('7/2/1', '7/6/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vena Jupiter.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "VenaJupiterFail",
	date: "8/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Despite the enthusiasm from fans and experts alike, the Vena Jupiter was allegedly overshadowed by Vonny's Playsystem and thus did not reach desired sales. {n} Another aspect of the failure also seems to be the lack of titles compared to other platforms, and the cancellation of many first-party titles such as Senic Ex-Treme.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vena Jupiter.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding Chip-FX
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Chip-FX",
	name:"Chip-FX",
	company:"Nippon",
	startAmount:0.31,
	unitsSold:0.50,
	licencePrize:5E5,
	published:"7/7/1",
    platformRetireDate: "10/4/1",
    developmentCosts: 8E4,
    genreWeightings: [0.9, 0.6, 1, 0.7, 0.8, 1, 0.7, 0.9, 0.8, 1, 0.6, 0.7, 0.9],
    audienceWeightings: [0.9, 1, 0.8],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Chip-FX.png",
	events:[{
	id: "ChipFXannouncement",
	date: "7/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Nippon has just unveiled plans to release their successor to the Chip Engine, in {0}, called the Chip-FX. {n} This new platform, with a shape resembling a small tower PC, has a 32-bit processor that allows for impressive graphics and sounds. It also utilises the CD-ROM format for games and permits full capability for full-motion video. {n} Despite quite impressive hardware, many experts were surprised by the fact that the Chip-FX hasn't yet made the transition from 2D to 3D. This could cloud its sales, nonetheless the public remains curious for it's future performance.".localize().format(General.getETADescription('7/3/1', '7/7/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Chip-FX.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Cyberling
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Cyberling",
	name:"Cyberling",
	company:"Ninvento",
	startAmount:0.5,
	unitsSold:0.58,
	licencePrize:100000,
	published:"8/4/2",
	platformRetireDate:"10/1/4",
	developmentCosts:150000,
	genreWeightings:[  1, 0.7, 0.6, 1, 0.8, 0.9, 0.7, 0.8, 0.6, 0.9, 0.8, 0.8, 0.9 ],
	audienceWeightings:[  0.8, 0.9, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Cyberling.png",
	events:[{
	id: "CyberlingAnn",
	date: "8/3/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Ninvento has revealed a revolutionary new handheld device, the Cyberling, which will be released in {0}. {n} This 32-bit device features a mechanical stereoscopic system that projects three-dimensional images directly into the player's eyes, which should give an immersive gameplay. {n} The idea of ​​an augmented reality device is not new and has been tested in the past as accessories for several consoles, but Ninvento appears to be trying to push the idea further with the Cyberling being a fully fledged console. {n} One unfortunate limitation is its monochrome screen, projecting red and black images that may cause headaches and eye pain to players over longer playtimes.".localize().format(General.getETADescription('8/3/2', '8/4/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Cyberling.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "CyberlingFlop",
	date: "8/12/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Initial sales reports indicate that the Cyberling isn't achieving the sales Ninvento itself predicted, despite a really aggressive marketing. It has been widely criticized for its absurd price, narrow bookshelf, and uncomfortable hold and way to play. {n} Furthermore, its red and black graphics have put off a lot of concerned parents, as it can cause eye pain, headaches, nausea, and even lazy eye.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Cyberling.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding BeeBox
// -----------------------------------------------------------
GDT.addPlatform({
	id:"BeeBox",
	name:"BeeBox",
	company:"Bee Inc.",
	startAmount:0.68,
	unitsSold:0.795,
	licencePrize: 45000,
	published:"8/6/1",
    platformRetireDate: "9/7/1",
    developmentCosts: 4000,
    genreWeightings: [1, 0.7, 0.8, 0.8, 0.9, 0.9, 0.7, 0.6, 0.9, 0.9, 0.9, 0.9, 0.8],
    audienceWeightings: [1, 0.8, 0.6],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/BeeBox.png",
	events:[{
	id: "BeeBoxAnn",
	date: "8/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today Bee Inc., an American computer company, revealed a new computer called BeeBox. {n}. The new, powerful BeeBox runs the company's operating system, called BeeOS, an operating system designed for multitasking, multithreading, and a graphical user interface and also allows a good gaming experience. {n} Overall, the BeeBox seems promising. Experts are curious to see what impact the BeeBox will have. Bee Inc. stated that it will release {0}.".localize().format(General.getETADescription('8/3/1', '8/6/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/BeeBox.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Super Can
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Super Can",
	name:"Super Can",
	company:"FunnyTech", // Very funny company lmao
	startAmount:0.2,
	unitsSold:0.3,
	licencePrize:6E4,
	published:"8/6/3",
	platformRetireDate:"9/12/4", // Fun fact, the irl console lasted less than 12 months
	developmentCosts:3E4,
	genreWeightings:[  0.9, 0.7, 1, 1, 0.9, 0.8, 0.7, 0.9, 0.7, 0.9, 0.6, 0.6, 0.7 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Super Can.png",
	events:[{
	id: "SuperCanAnnouncement",
	date: "8/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A Taiwanese company called FunnyTech has announced a new home console, called the Super Can. {n} Sporting an appearance that resembles a Super TES, the Super Can is a sufficiently powerful console for what it offers. {n} While it doesn't offer 3D technology, the Super Can offers 15-Bit 2D graphics and uses ROM Cartridges as storage media. {n} Twelve games were announced for this console's launch day. The Super Can will be released {0}.".localize().format(General.getETADescription('8/4/1', '8/6/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Super Can.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "SuperCanFlop",
	date: "9/11/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recent data suggests that the Super Can performed so poorly that its creator, FunnyTech, lost over USD $6 million. {n} In the end, FunnyTech is planning to destroy all equipment for production and development of the system, and sold off all remaining systems to the United States to be scrapped. {n} The console will be retired from market  {0}.".localize().format(General.getETADescription('9/11/4', '9/12/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Super Can.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding CompGo
// -----------------------------------------------------------
GDT.addPlatform({
	id:"CompGo",
	name:"CompGo",
	company:"Kunei",
	startAmount:0.28,
	unitsSold:0.295,
	licencePrize: 50000,
	published:"8/12/4",
    platformRetireDate: "10/2/1",
    developmentCosts: 5000,
    genreWeightings: [0.8, 0.7, 0.6, 0.9, 1, 0.9, 0.6, 0.6, 0.6, 0.8, 0.6, 0.6, 0.6],
    audienceWeightings: [0.7, 1, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/CompGo.png",
	events:[{
	id: "CompGoAnn",
	date: "8/9/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Kunei, a popular japanese videogame company, announced a new mobile device, called CompGo. This curious console is only made to play the popular traditional board game 'Go', including a rather advanced AI thanks to its CPU, and a large non-backlit screen. {n} The CompGo will offer several cartridges, all dedicated to Go, which include different difficulty levels and missions the player has to finish in order to progress.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/CompGo.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Grapple Peppen
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Grapple Peppen",
	name:"Peppen",
	company:"Grapple",
	startAmount:0.32,
	unitsSold:0.42,
	licencePrize: 120000,
	published:"9/2/1",
    platformRetireDate: "10/7/1",
    developmentCosts: 100000,
    genreWeightings: [0.7, 0.7, 0.6, 0.9, 1, 0.9, 0.6, 0.6, 1, 0.8, 0.7, 0.6, 0.8],
    audienceWeightings: [0.7, 1, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapple Peppen.png",
	events:[{
	id: "GrapplePeppenAnn",
	date: "8/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Grapple, one of the giants of the computer industry, has announced its entry into the gaming console sector with their new console, in collaboration with Bendai: the Peppen. {n} Based on a modified version of GrapOS, the Peppen will be the first console with built-in internet capabilities, with a modem built into the console. The console will also feature a unique controller designed like a boomerang with a built-in trackpad.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapple Peppen.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
{
	id: "GrapplePeppenFail",
	date: "9/5/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The Peppen, released a few months ago, isn't performing as expected by Grapple and Bendai. {n} It seems like that the lack of developer interest, a very high price tag, and a controller that's very uncomfortable to use, especially when surfing the web, are playing a big role in the console's sales. {n} While Bendai is in financial trouble and is trying to inadvertently merge with Vena, rumors are circulating that Grapple doesn't want them to use the term 'computer' in marketing the Peppen.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapple Peppen.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding OakPilot
// -----------------------------------------------------------
GDT.addPlatform({
	id:"OakPilot",
	name:"OakPilot",
	company:"Oak Inc.",
	startAmount:0.51,
	unitsSold:0.57,
	licencePrize: 60000,
	published:"9/5/1",
    platformRetireDate: "11/1/1",
    developmentCosts: 40000,
    genreWeightings: [0.8, 0.9, 0.7, 1, 0.9, 0.8, 0.7, 0.8, 0.8, 1, 0.7, 0.6, 0.9],
    audienceWeightings: [1, 0.8, 0.7],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/OakPilot.png",
	events:[{
	id: "OakPilotAnn",
	date: "8/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Oak Inc., a subsidiary of US Robot Corp., has announced its own personal digital assistant, {0}, to be released. {n} Compared to Grapple's popular MessPad, the OakPilot is much more powerful in terms of hardware and will be able to handle games more freely than its competitor.".localize().format(General.getETADescription('8/10/1', '9/5/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/OakPilot.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Gamenet
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Gamenet",
	name:"Gamenet",
	company:"Shark Electronics",
	startAmount:0.3,
	unitsSold:0.25,
	licencePrize: 20000,
	published:"10/5/1",
    platformRetireDate: "12/1/1",
    developmentCosts: 50000,
    genreWeightings: [1, 0.7, 0.6, 1, 0.8, 0.9, 0.7, 0.9, 0.6, 0.7, 1, 0.8, 1],
    audienceWeightings: [0.7, 0.8, 1],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamenet.png",
	events:[{
	id: "GamenetAnn",
	date: "10/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Shark Electronics, the American giant known for its electronic toys and, more recently, its popular Furbee robots, has announced its attempt to enter the portable console sector with the console called Gamenet, which will hit stores on {0}. {n} Although marketed as a console, Gamenet features some elements of a personal digital assistant and can be defined as such. Similar to Ninvento's Gameling, Gamenet has a monochrome touchscreen display, dual cartridge slots, and will have internet-related capabilities when connected to a modem to receive and send emails.".localize().format(General.getETADescription('10/3/1', '10/5/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamenet.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "GamenetFail",
	date: "10/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Shark Electronics' Gamenet was a complete failure, selling fewer than 300,000 units. Critics attribute its limited commercial success to its small library, despite having popular franchises, a poor marketing, the monochrome and laggy screen offered by the console, and the difficulty in utilizing the Internet capabilities the company had anticipated.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamenet.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Pikatu Mini
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Pikatu Mini",
	name:"Pikatu Mini",
	company:"Ninvento",
	startAmount:0.36,
		marketKeyPoints: [{
                date: "12/2/1",
                amount: 0.29
            }, {
				date: "12/11/4",
                amount: 0.223
            }],
	unitsSold:0.28,
	licencePrize:150000,
	published:"10/3/4",
	platformRetireDate:"13/12/4",
	developmentCosts:20000,
    genreWeightings: [0.9, 0.6, 0.7, 0.9, 0.8, 1, 0.7, 0.9, 0.6, 1, 0.6, 0.6, 1 ],
    audienceWeightings: [1, 0.7, 0.6],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Pikatu Mini.png",
	events:[{
	id: "PikatuMiniAnn",
	date: "10/2/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Ninvento has announced a small device {0} referred to as the Pikatu Mini. {n} This small device that resembles the popular Tamagotchi is totally based on the well renowned yellow electric-type Pookieman Pikatu, originating from Pookieman Yellow Version.".localize().format(General.getETADescription('10/2/4', '10/3/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Pikatu Mini.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
		
// Adding Cassioferia
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Cassioferia",
	name:"Cassioferia",
	company:"Cassio",
	startAmount:0.32,
	unitsSold:0.43,
	licencePrize: 20000,
	published:"10/5/1",
    platformRetireDate: "12/3/1",
    developmentCosts: 50000,
    genreWeightings: [0.9, 1, 0.9, 1, 1, 0.6, 1, 0.8, 0.9, 0.6, 1, 0.9, 0.8],
    audienceWeightings: [0.8, 0.9, 1],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Cassioferia.png",
	events:[{
	id: "CassioferiaAnn",
	date: "10/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Cassio, the Japanese company that makes designer calculators and watches, has announced its new line of personal digital assistants. {n} Featuring a sophisticated and futuristic white design, the Cassioferia will be based on Windoors CE operating systems, making porting games a little easier.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Cassioferia.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding grMac G3
// -----------------------------------------------------------
GDT.addPlatform({
	id:"grMac G3",
	name:"grMac G3",
	company:"Grapple",
	startAmount:0.78,
		marketKeyPoints: [{
                date: "12/2/1",
                amount: 0.83
            }, {
				date: "12/11/4",
                amount: 0.91
            }],
	unitsSold:7.28,
	licencePrize:250000,
	published:"10/7/1",
	imageDates: ["13/1/1", "13/8/1", "25/9/1", "38/9/2"],
	platformRetireDate:"260/12/4",
	developmentCosts:20000,
	genreWeightings:[  0.9, 0.8, 0.7, 1, 1, 0.9, 0.8, 0.8, 1, 0.9, 0.8, 0.7, 0.9 ],
	audienceWeightings:[  0.7, 0.9, 0.8 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/grMac G3.png",
	events:[{
	id: "grMacG3Ann",
	date: "10/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "On the brink of their financial crisis, Grapple has unveiled a new line of personal computers, expected to release {0}. {n} The grMac 3G line is designed to be an easy-to-use device for beginners, coming with a new appealing and colorful plastic monitor which integrates all the components. The new operating system, the grMac OS, is also said to be heavily inspired by NeWSTeP.".localize().format(General.getETADescription('10/6/1', '10/7/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/grMac G3.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "grMacG3Success",
	date: "10/9/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The grMac G3 proved to be an immediate success for Grapple. Consumers praise the computer for its ergonomic design, easy internet connectivity, and ease of use. {n} Despite this, some journalists have expressed their opinion on the mouse and keyboard, deeming them a little uncomfortable.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/grMac G3.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "grMacG4Ann",
	date: "12/11/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following the G3, Grapple has announced its newest addition to the grMac line. {n} The G4 features a gray, transparent design inspired by a sunflower and replaces the G3's cathode ray tube display with an adjustable LCD screen. It also tries to improve the comfort of the mouse and keyboard.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/grMac G4.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "grGlassAnn",
	date: "38/10/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Grapple is back in the spotlight after suddenly releasing a revolutionary new aesthetic for their computers, introducing grGlass. {n} The grGlass is made of a perfect ultra-resistant and semi-transparent cyan glass. The company announced that they wanted to 'unplug' from the monotonous architecture and aesthetics already imposed by all other computer manufacturers by offering a new futuristic design that will soon become a standard.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/grMac G4.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Gameling Color
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Gameling Color",
	name:"Gameling Color",
	company:"Ninvento",
	startAmount:1.5,
	marketKeyPoints: [{
                date: "11/3/3",
                amount: 1.1
            }],
	unitsSold:0.8,
	licencePrize:100000,
	published:"10/10/2",
	platformRetireDate:"13/3/1",
	developmentCosts:50000,
	genreWeightings:[  1, 0.8, 0.9, 0.8, 0.7, 1, 0.8, 0.9, 0.7, 0.9, 0.8, 0.6, 1 ],
	audienceWeightings:[  0.9, 0.8, 0.6 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gameling Color.png",
	events:[{
	id: "gamelingcolorannouncement",
	date: "10/8/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Ninvento announced the successor to the Gameling, simply called the Gameling Color. {n} Compared to the original, the new Gameling Color features a 8-Bit color TFT screen and superior processor operating twice as fast. The Gameling Color possesses backward compatibility with games initially developed for its predecessor. {n} Many experts consider these improvements insufficient to justify it as a separate product, however predicting that it will be a success nonetheless. {n} The Gameling Color will release {0}.".localize().format(General.getETADescription('10/8/2', '10/10/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gameling Color.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Neon Geon Pocket
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Neon Geon Pocket",
	name:"Neon Geon Pocket",
	company:"TNK",
	startAmount:0.5,
	unitsSold:0.8,
	licencePrize:3E5,
	published:"10/10/3",
	platformRetireDate:"11/9/1",
	developmentCosts:6E4,
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.7, 0.8, 0.7, 0.8, 0.7, 0.9, 0.8, 0.7, 1 ],
	audienceWeightings:[  0.9, 0.8, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon Pocket.png",
	events:[{
	id: "NeonGeonPocketAnn",
	date: "10/7/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today TNK has announced a handheld system called the Neon Geon Pocket. {n} Like the Gameling, the Neon Geon Pocket is a monochrome device, but it has a better hardware than any other handheld console currently in the market. {n} TNK also announced a collaboration with multiple partners to prepare arcade titles for this console. The Neon Geon Pocket will hit the shelves {0}.".localize().format(General.getETADescription('10/7/1', '10/10/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon Pocket.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding SuperSwan
// -----------------------------------------------------------
GDT.addPlatform({
	id:"SuperSwan",
	name:"SuperSwan",
	company:"Bendai",
	startAmount:0.7,
	unitsSold:0.9,
	licencePrize:40000,
	published:"11/3/4",
	platformRetireDate:"12/4/1",
	developmentCosts:50000,
	genreWeightings:[  0.9, 0.8, 1, 0.9, 1, 0.8, 0.7, 0.8, 0.6, 1, 0.8, 0.7, 1 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SuperSwan.png",
	events:[{
	id: "SuperSwanAnn",
	date: "10/12/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Bendai has officially unveiled a new portable console, called SuperSwan. The platform is named after the elegant bird, symbolizing the revolutionary wonders this platform has to offer. Bendai promises a low retail price compared to other market alternatives, a 30-hour battery life from a single AA battery and a launch lineup of roughly fifty games. {n} Bendai announced the SuperSwan will hit the japanese market {0}, in nine different casing colors.".localize().format(General.getETADescription('10/12/1', '11/3/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SuperSwan.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Robyko
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Robyko",
	name:"Robyko",
	company:"Robyko Inc.",
	startAmount:0.5,
	unitsSold:0.8,
	licencePrize:20000,
	published:"11/3/1",
	platformRetireDate:"13/6/1",
	developmentCosts:1000,
	genreWeightings:[  0.7, 0.8, 0.7, 0.9, 0.9, 1, 0.7, 0.7, 0.8, 1, 0.7, 0.6, 1 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Robyko.png",
	events:[{
	id: "RobykoAnn",
	date: "11/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A Russian company called Robyko has announced a new line of portable computers and personal digital assistants, which will ship in New York City within {0}. {n} The platform is aimed at teenagers, featuring full-duplex radio communication and allowing users to communicate in chatrooms, and will be open to all developers of freeware games and applications.".localize().format(General.getETADescription('11/2/1', '11/3/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Robyko.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Sokia 3310
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Sokia 3310",
	name:"Sokia 3310",
	company:"Sokia",
	startAmount:1.2,
	unitsSold:1.6,
	licencePrize:50000,
	published:"11/9/1",
	platformRetireDate:"15/6/1",
	developmentCosts:20000,
	genreWeightings:[  0.9, 0.8, 0.7, 1, 0.9, 1, 0.7, 0.8, 0.6, 1, 0.8, 0.6, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Sokia 3310.png",
	events:[{
	id: "Sokia3310Ann",
	date: "11/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Sokia, a prestigious Finnish telecommunications company, announced their mobile phone called the 3310. {n} This monochrome screen phone will 'connect people' through its good connectivity, compact design, and long-lasting battery life. {n} The 3310's hardware will also be capable of running light games. It will be released in {0}.".localize().format(General.getETADescription('11/6/1', '11/9/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Sokia 3310.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "Sokia3310Success",
	date: "11/11/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Sokia's 3310 has proven to be an instant hit among customers. Praise is focused on the extensive software support, impressive battery life, a solid and compact design, and unusual but welcome damage resistance. {n} Additionally, it is credited with being released with variously simple yet successful games such as Serpent and Galaxy Impact.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Sokia 3310.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "Sokia3310Trend",
	date: "19/8/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A trend has recently started on the new social media platform Reddot, where users are praising Sokia's wildly popular 3310, nicknamed 'the Brick' by many. {n} Users are using memes to compare the phone to newer devices like Grapple's GrPhone and, more recently, Samseong's Universe, which they claim are much more fragile. Some memes have even labeled it an 'illegal weapon of war.' and embrace the phone at its finest. {n} Aside from all this fun, it's also worth noting that the 3310 is no longer in production, the software support has been terminated and isn't as durable as these satirical jokes claim.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Sokia 3310.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding SuperSwan Color
// -----------------------------------------------------------
GDT.addPlatform({
	id:"SuperSwan Color",
	name:"SuperSwan Color",
	company:"Bendai",
	startAmount:0.6,
	unitsSold:0.8,
	licencePrize:40000,
	published:"11/12/4",
	imageDates: ["12/12/2"],
	platformRetireDate:"14/1/1",
	developmentCosts:50000,
	genreWeightings:[  0.9, 0.8, 1, 0.8, 0.9, 0.9, 0.7, 0.8, 0.6, 1, 0.8, 0.6, 1 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SuperSwan Color.png",
	events:[{
	id: "SuperSwanColorAnn",
	date: "11/10/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following the SuperSwan, Bandai announced a color variant of said platform, simply named 'Color'. {n} Offered in five different casing crystal colors, the SuperSwan Color offers a 16-Bit color screen and backwards compatibility with original SuperSwan titles.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SuperSwan Color.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "SuperCrystalAnn",
	date: "12/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Bendai has recently announced a new redesign of the SuperSwan Color, callede SuperCrystal. {n} The SuperCrystal comes with a liquid-crystal display, a lower price and an improved battery life.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/SuperCrystal.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding PolySystem
// -----------------------------------------------------------
GDT.addPlatform({
	id:"PolySystem",
	name:"PolySystem",
	company:"Onny",
	startAmount:0.5,
	unitsSold:0.211,
	licencePrize:100000,
	published:"12/2/1",
	platformRetireDate:"16/1/1",
	developmentCosts:20000,
	genreWeightings: [0.8, 0.7, 0.8, 0.8, 0.7, 1, 0.8, 0.9, 0.7, 0.8, 0.6, 0.6, 0.9 ],
    audienceWeightings: [1, 0.9, 0.6],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/PolySystem.png",
	events:[{
	id: "PolyDiscoverA",
	date: "12/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Unexpectantly a bootleg device was released, called the 'PolySystem'. {n} The PolySystem appears to be a clasic Ninvento TES clone with a layout that resembles Vonny's PlaySystem. {n} The console seems to be particularly popular in South America despite Vonny's attempts to take legal actions against the manufacturers of this blatant copyright infringement.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/PolySystem.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Gameling Advanced
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Gameling Advanced",
	name:"Gameling Advanced",
	company:"Ninvento",
	startAmount:1.9,
		marketKeyPoints: [{
                date: "13/8/4",
                amount: 1.4
            }, {
				date: "14/5/1",
                amount: 1.267
            }],
	unitsSold:1.2,
	licencePrize:400000,
	published:"12/4/1",
	platformRetireDate:"20/1/1",
	developmentCosts:40000,
	genreWeightings:[  1, 0.8, 1, 0.8, 0.8, 1, 0.9, 1, 0.7, 0.8, 0.8, 0.6, 1 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gameling Advanced.png",
	events:[{
	id: "AdvanceAnn",
	date: "11/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "During the last G3, Ninvento announced the successor to the Gameling Color, the 'Gameling Advanced'. {n} The new Gameling Advanced mainly offers new 32-Bit hardware and a more comfortable hand layout, with backwards compatibility for all games of previous Ninvento handhelds planned. {n} Despite not being designed for 3D spaces, fans appear amazed by the fact that it is perfectly possible to create worlds made with a certain number of polygons, mapped textures, light sources and shadows in the development software. {n} Ninvento also announced that the Gameling Advanced will be launched {0} with 10 first and third-party launch games.".localize().format(General.getETADescription('11/6/1', '12/4/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gameling Advanced.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding PR/ECE
// -----------------------------------------------------------
GDT.addPlatform({
	id:"PR/ECE",
	name:"PR/ECE",
	company:"Aquaminus",
	startAmount:0.9,
	unitsSold:1.0,
	licencePrize:150000,
	published:"12/7/2",
	platformRetireDate:"14/12/4",
	developmentCosts:80000,
	genreWeightings:[  0.9, 0.8, 0.8, 0.8, 1, 0.9, 0.8, 0.8, 0.8, 1, 0.8, 0.9, 1 ],
	audienceWeightings:[  0.7, 0.8, 1 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/PRIECE.png",
	events:[{
	id: "PR/ECE_announcement",
	date: "12/4/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "In a recent press conference, the Japanese company Aquaminus, known for distributing visual novels and adult games, announced a new portable console called the PR/ECE. {n} Available in several variants, the PR/ECE focuses primarily on adult games. Titles for this console can be purchased and downloaded via an application on a computer utilising a USB-B cable. {n} Aquaminus has also announced a software competition for amateur developers, and it is expected that most versions of this system will be open source. {n} The PR/ECE will hit the Japanese market {0}.".localize().format(General.getETADescription('12/4/4', '12/7/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/PRIECE.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding GR32
// -----------------------------------------------------------
GDT.addPlatform({
	id:"GR32",
	name:"GR32",
	company:"GameRoom",
	startAmount:0.52,
	unitsSold:0.90,
	licencePrize:40000,
	published:"12/7/4",
    platformRetireDate: "14/7/1",
    developmentCosts: 20000,
    genreWeightings: [0.9, 0.7, 1, 0.8, 0.8, 0.6, 0.8, 0.8, 0.7, 0.9, 0.9, 0.7, 0.9],
    audienceWeightings: [1, 0.9, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GR32.png",
	events:[{
	id: "GR32ann",
	date: "12/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, a little south korean company called GameRoom just revealed a new handheld device, called GP 32. {n} This small, yet powerful device is totally open-source; this means that anyone who wants to develop software for this device can freely download the development tools and start their work, without additional costs. {n} This will allow the creation of many homebrew applications, particularly the creation of emulators for other consoles. GameRoom expects to release the device {0}.".localize().format(General.getETADescription('12/6/1', '12/7/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GR32.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding LearnFrog
// -----------------------------------------------------------
GDT.addPlatform({
	id:"LearnFrog",
	name:"LearnFrog",
	company:"FrogLeap",
	startAmount:1.1,
		marketKeyPoints: [{
                date: "13/8/4",
                amount: 0.8
            }, {
				date: "17/5/1",
                amount: 0.6
            }],
	unitsSold:0.5,
	licencePrize:100000,
	published:"12/10/1",
	platformRetireDate:"21/5/1",
	developmentCosts:20000,
	genreWeightings:[  0.8, 0.9, 0.7, 0.9, 0.7, 0.8, 0.9, 1, 1, 0.8, 0.6, 0.6, 1 ],
	audienceWeightings:[  1, 0.7, 0.6 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/LearnFrog.png",
	events:[{
	id: "LearnFrogAnn",
	date: "12/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Todat FrogLeap, an educational toy company, announced a new handheld console aimed to children. {n} The LearnFrog Learning System is an educational console intended for ages 4 to 12 and will teach children the alphabet, spelling, phonics, and math and it features a touchscreen and a dedicated stylus pen built into the console. {n} All games on the system will have a 'Hint' feature that will give a clue and instructions to help the player complete the game.".localize().format(General.getETADescription('11/6/1', '12/4/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/LearnFrog.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Astrologer
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Astrologer",
	name:"Astrologer",
	company:"Surfwave",
	startAmount:0.78,
	unitsSold:0.95,
	licencePrize:40000,
	published:"13/3/1",
	platformRetireDate:"15/7/1",
	developmentCosts:50000,
	genreWeightings:[  1, 0.8, 0.7, 1, 0.8, 0.6, 0.7, 0.8, 0.7, 0.9, 1, 0.9, 1 ],
	audienceWeightings:[  0.7, 0.9, 1 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Astrologer.png",
	events:[{
	id: "AstrologerAnn",
	date: "12/8/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A new platform called Astrologer, made by an independent company run by former Oak Inc. employees called Surfwave, has just been unveiled to the public and expected to release {0}. {n} Astrologer will be a personal digital assistant focused entirely on video games and adult entertainment, featuring powerful hardware and running an enchanted version of Oak OS 5.2. {0} Many well-known companies in the industry are porting their games to this platform, most notably Mars II and Duke 'Em, which have been picked up as benchmarks in advertising.".localize().format(General.getETADescription('12/8/4', '13/3/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Astrologer.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "AstrologerFail",
	date: "15/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Although initially promising and with excellent product reviews, the Astrologer proved to be a commercial failure due to strong competition from its market competitors, particularly Vonny's PPS, and a high list price. {n} Surfwave, finding itself out of money, will discontinue the Astrologer {0} and is selling itself to an undisclosed multibillion-dollar corporation in Asia.".localize().format(General.getETADescription('15/6/1', '15/7/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Astrologer.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Sokia En-Gage
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Sokia En-Gage",
	name:"Sokia En-Gage",
	company:"Sokia",
	startAmount:0.95,
	unitsSold:1.09,
	licencePrize:40000,
	published:"13/10/1",
	platformRetireDate:"17/2/1",
	developmentCosts:80000,
	genreWeightings:[  1, 0.7, 0.6, 1, 0.9, 1, 0.8, 1, 0.6, 0.8, 0.9, 0.6, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.7 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Sokia En-Gage.png",
	events:[{
	id: "SokiaEn-GageAnn",
	date: "13/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following the success of the 3310, Sokia has announced a handheld console with PDA features and the successor to its popular cell phone, called the En-Gage. {n} The En-Gage, oddly shaped like a taco, will come equipped with a radio system, MP3 player, SMS texting and the latest version of their Serbian OS.".localize().format(General.getETADescription('11/6/1', '11/9/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Sokia En-Gage.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Zigglobe
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Zigglobe",
	name:"Zigglobe",
	company:"Shark Telematics",
	startAmount:0.89,
	unitsSold:0.42,
	licencePrize:150000,
	published:"15/3/3",
	platformRetireDate:"16/2/1",
	developmentCosts:80000,
	genreWeightings:[  0.8, 0.7, 0.6, 1, 0.8, 0.9, 0.9, 0.6, 0.6, 0.9, 0.7, 0.6, 0.8 ],
	audienceWeightings:[  0.7, 0.8, 1 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Zigglobe.png",
	events:[{
	id: "ZigglobeAnn",
	date: "14/11/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Shark Elematics, an emerging Swedish company, has just unveiled its own portable console and is having a huge celebration in London, with a lot of popular celebrities involved. {n} Called Zigglobe, the console features similar features to existing platforms such as Ninvento's GS, but it also features a child-tracking GPS device, a powerful digital camera, and mobile cellular connectivity for making calls and surfing the internet. {n} Shark Telematics expects to outpace its competitors in the market and that the Zigglobe will be a success.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Zigglobe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "ZigglobeFail",
	date: "15/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Despite the initial hype, the Zigglobe hasn't been the success Shark Telematics hoped for, as the company is quickly racking up debt and trying to promote its console in the craziest ways. {n} While the console prepares for its US launch, the media is in turmoil because company executive Stephan Ericson will be competing in this year's 24 Minutes at Le Mans race in a Zigglobe-branded Ferrara car.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Zigglobe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "ZigglobeMafia",
	date: "15/10/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Just as Zigglobe prepares for a US release, a Swedish newspaper has exposed the criminal backgrounds of several executives at Shark Telematics, the company behind Zigglobe, showing they have multiple criminal records with Uppsala mafia, each serving years in prison for either fraud, grand theft, or extortion. {n} Meanwhile, Zigglobe has further announced a revised model with a widescreen display, potentially putting consumers off purchasing the console even further.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Zigglobe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
    {
	id: "ZigglobeFail2",
	date: "16/1/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Yesterday, it was announced that Shark Telematics is officially filing for bankruptcy, after accumulating over 300 million cr. in debt. {n} The future of the unpopular Zigglobe, initially beloved by many, is slowly fading into oblivion following recent events at the company.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Zigglobe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
    {
	id: "ZigglobeCarCrash",
	date: "16/2/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "As if the story couldn't get any crazier, Stephan Ericson, a company executive, has just crashed a Ferrara Arzo on a California highway, going over 160 mph, and miraculously survived the impact. {n} While many are pondering the future of the infamous Zigglobe, Stephan Ericson will go on trial for driving under the influence and other criminal offenses.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Zigglobe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding GR2X
// -----------------------------------------------------------
GDT.addPlatform({
	id:"GR2X",
	name:"GR2X",
	company:"GameRoom",
	startAmount:0.92,
	unitsSold:0.98,
	licencePrize:30000,
	published:"16/8/2",
    platformRetireDate: "19/4/1",
    developmentCosts: 10000,
    genreWeightings: [0.9, 0.7, 1, 0.8, 0.8, 0.6, 0.8, 0.8, 0.7, 0.9, 0.9, 0.7, 0.9],
    audienceWeightings: [1, 0.9, 0.9],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GR2X.png",
	events:[{
	id: "GR2Xann",
	date: "12/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "GameRoom, the company behind the GR32, has finally announced a sequel to their device, dubbed GR2X. {n} The GR2X will keep the features of its predecessor while changing in design. It will also be able to play music and videos, rather than just play games and emulators.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GR2X.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding MegaScan
// -----------------------------------------------------------
GDT.addPlatform({
	id:"MegaScan", // More like MegaSCAM! :P
	name:"MegaScan",
	company:"Matter",
	startAmount:0.3,
	unitsSold:0.4,
	licencePrize:50000,
	published:"16/9/1",
	platformRetireDate:"17/12/4",
	developmentCosts:80000,
	genreWeightings:[  1, 0.8, 0.6, 0.9, 0.7, 0.8, 0.6, 1, 0.6, 0.6, 0.8, 0.8 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/MegaScan.png",
	events:[{
	id: "MegaScanAnn",
	date: "16/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Matter, an American toy company, recently unveiled its latest console innovation aimed at tweens, called MegaScan. {n} MegaScan combines gaming with the cards collection, called 'SmartCards', with each game including a pack of extra cards that offer features for in-game characters, such as power-ups or skins, or levels and game worlds. {n} Each card must be scanned through the dedicated reader when prompted. Critics seem curious about the idea offered by Matter and are eager to see what it has to offer in practice when it will be released {0}.".localize().format(General.getETADescription('16/8/1', '16/9/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/MegaScan.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "MegaScanFail",
	date: "16/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "While initial interest has been positive, Matter's MegaScan has received a lot of criticism from fans for its numerous technical issues. {n} First and foremost, the console only offers 2D graphics that are truly dated and can be described as old. Furthermore, the library is small and doesn't offer a wide variety of genres between games, composed by action and platform games. {n} The very weak scanner and incredibly long loading times are contributing to a poor gaming experience and a bad reputation for the console, with Matter currently slashing prices to rock-bottom levels.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/MegaScan.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Nuubo
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Nuubo",
	name:"Nuubo",
	company:"Nuubo Inc.",
	startAmount:1.12,
	unitsSold:1.21,
	licencePrize:60000,
	published:"18/5/2",
    platformRetireDate: "20/9/1",
    developmentCosts: 40000,
    genreWeightings: [1, 0.8, 0.7, 1, 0.9, 1, 0.9, 0.8, 1, 0.9, 0.7, 0.6, 0.9],
    audienceWeightings: [1, 1, 0.7],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Nuubo.png",
	events:[{
	id: "NuuboAnn",
	date: "18/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "American company Nuubo Inc. has announced a new console, named after the company itself, specializing in educational and accessible content and intended for launch in developing markets such as Brazil and Mexico. {n} Besides the curiously curved design, with a controller reminiscent of Ninvento's Nuu Classic Pad, the Nuubo console does not offer cartridges or CD-ROMs for games but are sold via wireless digital distribution. {n} Despite the console's nature, mMany well-known companies in the industry such as Electronic Mass, CapeCom and ActiveVisionaries have shown enough interest in making games for the Nuubo.".localize().format(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Nuubo.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},{
	id: "NuuboDiscontinued",
	date: "20/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Nuubo has announced the end of their console's operations. All games on the platform will face a significant price redution and NuuboNet will stay active until {0}. {n} While this made some fans upset, Nuubo has stated that they're working on a new Endroid-based console.".localize().format(General.getETADescription('20/5/1', '20/9/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Nuubo.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
]
	});
	
// Adding Bingoo
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Bingoo",
	name:"Bingoo",
	company:"Bingoo Tech",
	startAmount:0.85,
	unitsSold:1.1,
	licencePrize:20000,
	published:"19/2/3",
	platformRetireDate:"22/6/4",
	developmentCosts:15000,
    genreWeightings: [0.9, 0.7, 0.8, 0.7, 0.8, 1, 0.8, 0.8, 0.8, 0.9, 0.8, 0.6, 0.8],
    audienceWeightings: [0.9, 0.7, 0.6],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Bingoo.png",
	events:[{
	id: "BingooAnn",
	date: "18/9/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recently, a Chinese company called Bingoo Tech announced their plans to release a new handheld gaming device, dubbed 'Bingoo', {0}. {n} The Bingoo focuses on games and multimedia products, supporting music, video playback and open game development, and also features an on-board radio and recording program. {n} The machine is also powerful enough to handle emulators for older consoles, officially provided by the company, and a variety of homebrew applications.".localize().format(General.getETADescription('18/9/3', '19/2/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Bingoo.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Rawberry Stom
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Rawberry Stom",
	name:"Rawberry Stom",
	company:"Rawberry Ltd",
	startAmount:1.31,
	unitsSold:1.90,
	licencePrize:250000,
	published:"19/5/2",
    platformRetireDate: "21/12/4",
    developmentCosts: 40000,
    genreWeightings: [0.8, 0.7, 0.8, 0.8, 0.9, 1, 0.7, 0.7, 0.8, 1, 0.7, 0.6, 0.9],
    audienceWeightings: [0.7, 1, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Rawberry Stom.png",
	events:[{
	id: "RawberryStormAnn",
	date: "19/2/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Rawberry Ltd., a Canadian software company specializing in cybersecurity, has revealed a mobile phone named the Rawberry Stom. {n} This new platform has a solid and bulky design and runs on their own operating system, known as the 'Rawberry OS', which posesses features mainly geared toward enterprises, including email integration and security. {n} The Rawberry also comes with its own software store, allowing for a limited amount of gaming on this platform. Rawberry announced that their new system will be released {0}.".localize().format(General.getETADescription('19/2/4', '19/5/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Rawberry Stom.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Universe
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Universe",
	name:"Universe",
	company:"Samseong",
	startAmount:2.62,
            marketKeyPoints: [{
                date: "26/8/2",
                amount: 2.7
            }, {
                date: "27/4/3",
                amount: 2.9
            }, {
                date: "28/2/1",
                amount: 2.911
            }],
	unitsSold:3.91,
	licencePrize:400000,
	published: "19/6/4",
    platformRetireDate: "260/12/4",
    developmentCosts: 50000,
    genreWeightings: [0.9, 0.9, 0.8, 0.7, 0.8, 1, 0.9, 1, 1, 1, 0.7, 0.7, 0.9],
    audienceWeightings: [0.9, 1, 0.8],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Universe.png",
	events:[{
	id: "UniverseAnn",
	date: "19/1/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today Samseong, a widely popular Korean consumer electronics company, announced that they have plans to release a supossedly powerful mobile phone known as the 'Universe'. {n} The Universe posesses a touch screen, a camera and a new-gen powerful CPU, allowing mobile games to run more smoothly than on any other currently available mobile device. Competing against Grapple's GrPhone, the device also utilises a new operating system called Endroid.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Universe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "UniverseNote7Explding",
	date: "24/10/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Samseong recently halted production and is recalling all Universe Note 7 units due to serious problems with the battery detected during the latest hardware tests. The potential for an explosion while charging was confirmed, leaving a lot of consumers worried for their phones. {n} So far, 35 cases have been reported out of two million units sold worldwide. Samseong is inviting customers to turn off and return the device, guaranteeing them a full refund of the paid amount or replacement with the Universe S7 model.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Universe.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding mBox Kinesis
// -----------------------------------------------------------
GDT.addPlatform({
	id:"mBox Kinesis",
	name:"mBox Kinesis",
	company:"Mirconoft",
	startAmount:2.5,
	unitsSold:3.5,
	licencePrize:500000,
	published:"19/11/3",
	platformRetireDate:"25/2/3",
	developmentCosts:100000,
    genreWeightings: [1, 0.9, 1, 0.9, 0.7, 0.9 , 0.7, 0.6, 0.7, 0.7, 0.9, 0.8, 0.6],
    audienceWeightings: [0.8, 0.9, 1],
	techLevel:5,
	iconUri: "./images/platforms/superb/mBox Next.png",
	events:[{
	id: "NextAnn",
	date: "19/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Mirconoft has just announced a new accessory for the mBox 360, named the Kinesis. {n} This new peripheral possesses a motion camera feature used to track the player's movements and position rendered in a 3D space, allowing for a unique gaming experience where players can control games with their bodies in. {n} Many fans of the 360 appear to be excited for its release. The mBox Kinesis will release {0}".localize().format(General.getETADescription('19/6/1', '19/11/3')),
	image: "./images/platforms/superb/mBox Next.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding 3GS
// -----------------------------------------------------------
GDT.addPlatform({
	id:"3GS",
	name:"3GS",
	company:"Ninvento",
	startAmount:3.5,
	unitsSold:4,
	licencePrize:5E5,
	published:"20/1/3",
	imageDates: ["24/4/2"],
	platformRetireDate:"27/8/2",
	developmentCosts:1E5,
	genreWeightings:[  1, 0.8, 1, 0.8, 0.8, 1, 0.8, 1, 0.7, 0.9, 0.8, 0.7, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/3GS.png",
	events:[{
	id: "GSiReveal&&3GSleak",
	date: "19/2/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Platform News",
	type: NotificationType.PlatformNews,
	text: "Last week, Ninvento released a new system in the GS family, the GSi. This device has an updated hardware compared to its predecessor, with a built-in camera and sound player. {n} The GSi also offers a new menu interface and internet capacities, with a built-in applications shop and free online multiplayer. {n} Meanwhile, there are some speculations that Ninvento is working on a new successor to the GS.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/GSi.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "3GSann",
	date: "19/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "At this year's G3 Convention, Ninvento has announced the successor to the widely popular GS, called the 3GS. {n} The most prominent feature of the 3GS is its ability to display stereoscopic 3D images without the use of 3D glasses or additional accessories. {n} The system also offers backward compatibility with Ninvento GS video games and is stated to inlcude a 3D camera  as well as an online shop for new and older games alike called nShop. {n} Ninvento fans seem very excited for this new console. Ninvento revealed that the 3GS will release {0}.".localize().format(General.getETADescription('19/6/2', '20/1/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/3GS.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "3GSpricereduction",
	date: "20/7/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Due to disappointing launch sales, Ninvento has recently announced a significant price reduction for their recently released handheld system, the 3GS, plummeting from cr.250 to cr.170. {n} As an apology, the company offered ten free TES games and ten free Gameling Advanced games from their Ninvento nShop to consumers who bought the system for the original launch price.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/3GS.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "New3GSreveal",
	date: "24/4/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Platform News",
	type: NotificationType.PlatformNews,
	text: "Recently, Ninvento announced a new system in the 3GS family, dubbed 'New'. The New 3GS features various hardware changes from prior models, with a new shell design, bigger screens, an increased amount of RAM, and a new pointing stick on the right side, referred to as the 'C-Stick'. {n} The New 3GS also includes a new feature known as 'New Stable 3D' that improves the quality of the systems' autostereoscopic 3D effects by using a sensor to detect the angle that the player is viewing the screen at.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/New 3GS.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Gromebook
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Gromebook",
	name:"Gromebook",
	company:"Grogle",
	startAmount:2.4,
	unitsSold:3.1,
	licencePrize: 5E5,
	published:"20/4/1",
            marketKeyPoints: [{
                date: "27/12/2",
                amount: 3.72
            }],
    platformRetireDate: "260/1/1",
    developmentCosts: 8E4,
    genreWeightings: [0.9, 0.6, 0.8, 1, 0.8, 0.9, 0.7, 0.7, 1, 1, 0.8, 0.7, 0.8],
    audienceWeightings: [0.9, 1, 0.7],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gromebook.png",
	events:[{
	id: "GromebookAnn",
	date: "19/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, the well-known company named Grogle, famous for their own search engine technology, announced their new line of netbooks and tablet computers called Gromebook. {n} The Gromebook runs on their new operating system called GromeOS, which uses the Grogle Grome web browser as its principal user interface. The Gromebook is aimed at the education market, especially at schools. {n} The gaming can also be a thing on this platform, despite not being so powerful, as announced by Grogle.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gromebook.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "GromebookRise",
	date: "27/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Recent studies suggest that Grogle sold over 30 million Gromebook units this year, as schools and parents purchased them for remote learning purposes during the CORID-19 pandemic. This small success also outsould Mirconoft's mPad and other computers avaiable in the market.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gromebook.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding PPSViva
// -----------------------------------------------------------
GDT.addPlatform({
	id:"PPSViva",
	name:"PPSViva",
	company:"Vonny",
	startAmount:2.901,
	unitsSold:1.811,
	licencePrize:5E5,
	published:"20/5/3",
	platformRetireDate:"26/8/1",
	developmentCosts:150000,
	genreWeightings:[  0.9, 0.7, 1, 0.8, 0.7, 0.6, 0.8, 0.8, 0.6, 0.7, 0.9, 0.8, 0.8 ],
	audienceWeightings:[  1, 0.7, 0.8 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/PPSViva.png",
	events:[{
	id: "PPSVivaAnn",
	date: "20/3/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vonny has just announced a new handheld system in their PPS console family, known as the PPSViva. {n} Said device offers a multitude of features from an OLED multi-touch capacitive touchscreen to Bluetooth, Wi-Fi, and optional 3G Wi-Fi. {n} Vonny has stated their console will release {0}.".localize().format(General.getETADescription('20/3/3', '20/5/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/PPSViva.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Rawberry PI
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Rawberry PI",
	name:"Rawberry PI",
	company:"Rawberry Ltd",
	startAmount:2.07,
	unitsSold:3.09,
	licencePrize:20000,
	published:"20/7/4",
	platformRetireDate:"260/12/4",
	developmentCosts:15000,
    genreWeightings: [0.9, 0.8, 0.7, 1, 0.8, 0.9, 0.7, 0.6, 1, 0.8, 0.6, 0.7, 0.8],
    audienceWeightings: [0.8, 1, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Rawberry PI.png",
	events:[{
	id: "RawberryPIAnn",
	date: "21/10/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Rawberry Ltd. announced a new series of small single-board computers called Rawberry PI. {n} For a relatively cheap price, the powerful Rawberry PI series leans towards promoting the teaching of basic computer science in schools. It runs on a new operating system called Rawberry PI OS and offers an open design that can be modified as desired by the user. {n} Also, the Rawberry PI has enough processing power to handle a variety of gaming applications, from retro gaming emulation to lightweight PC games. {n} Rawberry Ltd. announced that the Rawberry PI will hit the market {0} for 35$.".localize().format(General.getETADescription('21/10/2', '22/2/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Rawberry PI.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Monia
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Monia",
	name:"Monia",
	company:"Sokia",
	startAmount:1.89,
            marketKeyPoints: [{
                date: "27/4/3",
                amount: 1.96
            }],
	unitsSold: 2.02,
	licencePrize:350000,
	published: "20/11/1",
	platformRetireDate: "25/10/1",
	developmentCosts:25000,
    genreWeightings: [0.7, 0.9, 0.9, 0.8, 0.7, 1, 0.8, 0.7, 0.9, 0.8, 0.7, 0.6, 0.8],
    audienceWeightings: [0.9, 1, 0.7],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Monia.png",
	events:[{
	id: "MoniaAnn",
	date: "20/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Sokia has unveiled their new mobile phone set to compete against the GrPhone and Universe devices, known as the 'Monia'. {n} The Sokia Monia runs on the recently released Windoors Phone OS produced by Mirconoft, featuring a distinct tile-based interface, integration with Mirconoft services and support for apps from the Windoors Store. {n} Experts and enthusiasts enthusiasts alike highly anticipate the Monia's performance in the market. The Sokia Monia will be released {0}.".localize().format(General.getETADescription('20/10/1', '21/11/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Monia.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Universe Tab
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Universe Tab",
	name:"Universe Tab",
	company:"Samseong",
	startAmount:1.98,
            marketKeyPoints: [{
                date: "26/8/2",
                amount: 2.1
            }, {
                date: "27/4/3",
                amount: 2.2
            }, {
                date: "28/2/1",
                amount: 2.24
            }],
	unitsSold:2.5,
	licencePrize:500000,
	published: "21/11/1",
    platformRetireDate: "260/12/4",
    developmentCosts: 80000,
    genreWeightings: [0.9, 0.9, 0.8, 0.7, 0.8, 1, 0.9, 1, 1, 1, 0.7, 0.7, 0.9],
    audienceWeightings: [0.9, 1, 0.8],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Universe Tab.png",
	events:[{
	id: "UniverseTabAnn",
	date: "21/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "After the success of the Universe, today Samseong announced that they are planning to release a new tablet device, dubbed the 'Universe Tab'. {n} Made to compete against Grapple's GrPad, the device offers a 7-inch touch screen, Wi-Fi capability and a reasonably powerful CPU. Many expect the Universe Tab to do well against the GrPad due to past market sucesses under Samseong's belt.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Universe Tab.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Neon Geon X
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Neon Geon X",
	name:"Neon Geon X",
	company:"TNK",
	startAmount:1.3,
	unitsSold:2,
	licencePrize:250000,
	published:"22/7/3",
	platformRetireDate:"23/12/4",
	developmentCosts:50000,
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.7, 0.8, 0.7, 0.8, 0.6, 0.7, 0.7, 0.6, 1 ],
	audienceWeightings:[  0.9, 0.8, 0.8 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon X.png",
	events:[{
	id: "NeonGeonX_announcement",
	date: "22/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, TNK announced a new handheld console, called the Neon Geon X. {n} This console comes with twenty built-in Neon Geon Pocket and Arcade games, and additional titles are available on game cards. {n} Fans widely speculated the console to be overly expensive with a 700 dollar pricetag, but TNK revealed it would cost just $199. {n} The new Neon Geon X will release {0}.".localize().format(General.getETADescription('22/6/1', '22/7/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon X.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
,{
	id: "deathofneongeon",
	date: "23/12/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Recently, TNK has ordered Tomio, the company tasked with producing the Neon Geon X units, to cease its manufacturing and pull all existing stock from store shelves. The reason for this action appears to be due to the low manufacturing standards used by Tomio. {n} In response, Tomio claimed to be in compliance with the contract between the companies and announced that it will take legal action against TNK, but will also stop the production of the Neon Geon X {0}.".localize().format(General.getETADescription('23/12/1', '23/12/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon X.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Closed
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Closed",
	name:"Closed",
	company:"NTE",
	startAmount:1,
	unitsSold:1.31,
	licencePrize:200000,
	published: "23/1/1",
    platformRetireDate: "25/12/4",
    developmentCosts: 25000,
    genreWeightings: [0.7, 0.8, 0.7, 0.8, 0.9, 1, 0.7, 0.7, 0.8, 0.8, 0.6, 0.6, 0.8],
    audienceWeightings: [0.9, 1, 0.8],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Closed.png",
	events:[{
	id: "NTEClosedAnn",
	date: "22/9/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, the chinese technology company NTE has announced their own mobile phone known as the NTE Closed. {n} With a simple, compact design this new device operates on Filefox OS, a system built on web technologies that allows developers to create applications using familiar web standards. {n} While it appears very promising, many experts don't believe the NTE Closed will become serious competition for the GrPhone and Universe.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Closed.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding ZY Spectral Centaurs
// -----------------------------------------------------------
GDT.addPlatform({
	id:"ZY Spectral Centaurs",
	name:"ZY Centaurs",
	company:"Retro Tech",
	startAmount:1.22,
	unitsSold:1.51,
	licencePrize:100000,
	published: "24/7/2",
    platformRetireDate: "31/7/1",
	developmentCosts:8000,
	genreWeightings:[  1, 0.8, 0.8, 1, 0.9, 0.7, 0.8, 0.9, 0.7, 0.8, 0.8, 0.7, 1 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY Spectral Centaurs.png",
	events:[{
	id: "SpectralCentaursAnn",
	date: "23/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Retro Tech, a company specializing in retro computing, was successfully crowdfunded to develop a new console designed to play ZY Spectral titles. {n} The ZY Spectral Centaurs replaces all the keys on a regular ZY Spectral keyboard with just 13 keys designed for gaming. Plus, the console will ship with 1000 preloaded games and a microSD card slot for saves.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/ZY Spectral Centaurs.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Stedia
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Stedia",
	name:"Stedia",
	company:"Grogle",
	startAmount:3.5,
	unitsSold:1.2,
	licencePrize:1000000,
	published:"27/1/3",
	platformRetireDate:"29/3/3",
	developmentCosts:200000,
	genreWeightings:[  1, 0.6, 0.9, 0.8, 0.7, 0.9, 0.7, 0.7, 0.6, 0.7, 0.9, 0.8, 0.8 ],
	audienceWeightings:[  0.7, 0.8, 1 ],
	techLevel:6,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Stedia.png",
	events:[{
	id: "stediaAnn",
	date: "25/10/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today Grogle has announced a brand new cloud gaming device named the Grogle Stedia. {n} The Stedia will be capable of streaming games to players at up to 4K resolution and 60 frames per second, with support for high-dynamic-range video implemented. It's digital store allows owners to purchase a variety of games along with a selection of free-to-play games. {n} Despite general praise from the fans for the concept, many experts predict that cloud gaming won't be nearly as successful as Grogle expects. The Stedia will be released {0}.".localize().format(General.getETADescription('25/10/1', '27/1/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Stedia.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "Stediacommercialfailure",
	date: "29/3/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Recently, Grogle announced that the Stedia will be discontinued due to low sales {0}. {n} The Stedia did not gain a sufficient foothold in the market due to technical problems, the limited game library, an unclear business model and many internal company issues. Grogle has declared itself willing to fully refund any devices and software purchased by the players.".localize().format(General.getETADescription('29/10/4', '30/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Stedia.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Itara VSS
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara VSS",
	name:"Itara VSS",
	company:"Itara",
	startAmount:4.2,
	unitsSold:5,
	licencePrize:1E6,
	published:"27/10/2",
	platformRetireDate:"260/12/4",
	developmentCosts:2E5,
	genreWeightings:[  1, 0.8, 0.9, 1, 0.9, 0.7, 0.8, 0.8, 0.6, 0.8, 0.8, 0.8, 0.8 ],
	audienceWeightings:[  0.9, 1, 0.8 ],
	techLevel:6,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara VSS.png",
	events:[{
	id: "ItaraVSSannouncement",
	date: "27/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "In a unexpected announcement, Itara revealed a new next-generation console called the Itara VSS. {n} The console, paying homage to the Itara 2600 by design, runs modern games through powerful hardware with its own operating system, called ItaraOS. {n} The Itara VSS is able to emulate games from past Itara systems too. {n} Despite leaving the gaming industry for good many years ago, retro gaming enthusiasts seem to be very glad about Itara's grand return to the market. Itara has stated that their new console will be released {0}.".localize().format(General.getETADescription('27/6/2', '27/10/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara VSS.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding mBox Series X
// -----------------------------------------------------------
GDT.addPlatform({
	id:"mBox Series X",
	name:"mBox Series X",
	company:"Mirconoft",
	startAmount:5.6,
		marketKeyPoints: [{
                date: "28/9/1",
                amount: 5.8
            }, {
				date: "29/12/4",
                amount: 6.6
            }],
	unitsSold:6.6,
	licencePrize:1500000,
	published:"27/10/3",
	platformRetireDate:"36/1/2",
	developmentCosts:200000,
    genreWeightings: [0.9, 0.9, 0.9, 0.8, 0.7, 1, 1, 0.8, 0.6, 0.6, 1, 0.9, 0.7 ],
    audienceWeightings: [0.9, 1, 0.8],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/mBox Series X.png",
	events:[{
	id: "mBoxSeriesXann",
	date: "27/3/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Mirconoft has announced their plans to release a new entry to the mBox family {0} known as the mBox Series X. {n} This new device offers new high-end technology that allows players to play in 4K with a projected average of 120 FPS. It will also support Ray-Tracing technology as well as being backwards compatible with all titles from previous mBox consoles. {n} The new mBox Series X seems promising and the public is certainly interested to see how it will fare upon release.".localize().format(General.getETADescription('27/3/4', '27/10/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/mBox Series X.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Logical Pocket
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Logical Pocket", //Based on the Analogue Pocket by Analogue
	name:"Logical Pocket",
	company:"Logue",
	startAmount:2.7,
	unitsSold:3.1,
	licencePrize:8E5,
	published:"28/6/1",
	platformRetireDate:"250/1/1",
	developmentCosts:1E5,
	genreWeightings:[  0.9, 0.8, 1, 0.9, 0.7, 0.7, 0.8, 0.9, 0.6, 0.9, 0.8, 0.8, 1 ],
	audienceWeightings:[  1, 0.9, 0.8 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Logical Pocket.png",
	events:[{
	id: "LogicalPocketAnnouncement",
	date: "27/11/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News".localize(),
	type: NotificationType.IndustryNews,
	text: "Today the American company Logue, Inc. has revealed a new handheld known as the Logical Pocket. {n} Shaped and allegedly as comfortable as a Gameling, the new Logical Pocket uses field-programmable gate array chips to play games from various retro handheld consoles, most notably Ninvento's Gameling and Vena's Vena Gear, on a new platform with superipr processing power and a new LCD screen sporting high-quality audio. {n} The new Logical Pocket will also have a microSD slot to allow saving in games, including a long-lasting lithium-ion battery. {n} Logue also announced multiple variants for the Logical Pocket, including a glow-in-the-dark version. Fans of retro gaming appear widely satisfied due to the console's focus on emulation with the means of presentday technology. The Logical Pocket will hit the shelves in the next months.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Logical Pocket.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Gamedate
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Gamedate",
	name:"Gamedate",
	company:"Gamic Inc.",
	startAmount:2.15,
	unitsSold:2.91,
	licencePrize: 40000,
	published:"29/10/2",
    platformRetireDate: "260/1/1",
    developmentCosts: 25000,
    genreWeightings: [1, 0.7, 0.9, 0.8, 0.9, 0.7, 0.6, 0.8, 0.6, 0.9, 0.8, 0.7, 0.9],
    audienceWeightings: [1, 0.8, 0.7],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamedate.png",
	events:[{
	id: "GamedateAnn",
	date: "26/8/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recently, the popular American software and video game company called Gamic Inc. announced an handheld console called Gamedate. {n} The Gamedate is small, it has a black-and-white 1-Bit screen, a 4-way directional pad, two game buttons, and a mechanical crank. {n} The Gamedate comes with a collection of games, called 'Season One', where every week two new games gets released. Gamic Inc. also plans to put their own on-device store where players can purchase and download third-party games.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamedate.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "GamedateDelay",
	date: "27/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Gamic Inc. announced on social medias that the Gamedate's release date will be delayed due to the CORID-19 pandemic, stating that the Gamedate is planned to release {0}.".localize().format(General.getETADescription('27/2/1', '28/4/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Gamedate.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Swap 2 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Swap 2",
	name:"Swap 2",
	company:"Ninvento",
	startAmount:7.6,
	unitsSold:8.2,
	licencePrize:1500000,
	published:"30/6/1",
	platformRetireDate:"35/12/4",
	developmentCosts:250000,
    genreWeightings: [0.9, 0.8, 1, 0.8, 0.7, 1, 1, 1, 0.6, 0.8, 0.9, 0.8, 0.8],
    audienceWeightings: [1, 1, 0.8],
    techLevel: 7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Swap 2.png",
	events:[{
	id: "NinventoSwap2Ann",
	date: "30/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "The moment that many video game fans have been waiting for is over, as today Ninvento has officially revealed the Swap 2 in a surprise announcement. {n} The new Swap 2 presents itself as a worthy successor to the greatest success of Ninvento: the console has a more modern and renewed design, reaches high performance in portable mode and is capable of 4K in dock mode, and offers eight times the internal space of the original Swap. {n} The new Fun-Pads are magnetic and can be used as mice, and the new updated software of the Swap 2 offers new features such as a voice chat between friends and ShareGame which allows you to play together with just one copy of a game. {n} The Swap 2 will be released {0} with various titles exclusive to the console, and pre-orders will start in a few weeks.".localize().format(General.getETADescription('30/4/1', '30/6/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Swap 2.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "Swap2PreOrders",
	date: "30/5/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Recently, a debate has opened among industry experts and fans about the price of the Swap 2 and its launch games, considered by many to be too expensive and overpriced. {n} Many experts justify the price of the console for its features and power, while some blame the tariffs imposed by the United States, but the CEO of Ninvento himself has denied; he justifies the price because the console is like a 'premium' version of the original Swap. {n} While many consumers aren't happy with Swap 2's price, however, this doesn't seem to have slowed down the pre-orders of the console, which has nevertheless sold out in many parts of the world and has crashed many online video game purchase sites.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Swap 2.png",
	previewImage: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Swap 2.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "Swap2Success",
	date: "30/5/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Unlike most fans expected, the launch of Swap 2 was a huge success: according to data reported by Ninvento, the platform has sold three and half million units in just 4 days. {n} This makes it the fastest-selling console of all time, breaking the records set by Vonny's PlaySystem 4 and PlaySystem 2, both selling one million units in 24 hours.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Swap 2.png",
	previewImage: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Swap 2.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
//Thanks for playing btw :)

// Adding Gameling Flex
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Flex",
	name:"Flex",
	company:"Ninvento",
	startAmount:5.8,
	unitsSold:6.3,
	licencePrize:1500000,
	published:"32/2/4",
	platformRetireDate:"260/12/4",
	developmentCosts:250000,
	genreWeightings:[  0.8, 0.7, 1, 0.8, 0.7, 0.8, 0.9, 1, 0.8, 0.9, 0.9, 0.7, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.8 ],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Flex.png",
	events:[{
	id: "Flex_announcement",
	date: "31/10/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Ninvento has announced their next-gen handheld console, called the Ninvento Flex. {n} Similar to the Gameling's design, the Flex is small enough to be held in one hand. This new console fixes major issues that Ninvento's Swap had, offering 1440p graphics at 120 fps, a new wireless remote play for up to 32 players, and posesses a large hard drive capable of holding many AAA games. {n} The Flex seems to be widely well-received by many fans. The console will hit the shelves {0}.".localize().format(General.getETADescription('31/10/4', '32/2/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Flex.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding LambdaDOS
// -----------------------------------------------------------
GDT.addPlatform({
	id:"LambdaDOS",
	name:"LambdaDOS",
	company:"Valve",
	startAmount:5.35,
	unitsSold:6.7,
	licencePrize:200000,
	published:"32/12/3",
	platformRetireDate:"260/12/4",
	developmentCosts:300000,
	genreWeightings:[  1, 0.8, 1, 1, 0.8, 0.6, 0.8, 0.9, 0.6, 0.6, 1, 0.9, 0.7 ],
	audienceWeightings:[  0.8, 1, 0.7 ],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/LambdaDOS.png",
	events:[{
	id: "LambdaDOS_announcement",
	date: "32/8/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, the well renowned video game company Valve announced their new console made to compete against Vonny's PlaySystem 5 and Micronoft's mBox Series X, called LambdaDOS. {n} This new generation console, arriving bundled with  Half-Life 3 and 3 other titles, uses brand-new technology that allows players to play all their favorite games from the Steam library in 8K resolution. {n} The LambdaDOS seems very positively recieved by fans, and we're interested to see if it will truly overtake the competition {0}.".localize().format(General.getETADescription('32/8/2', '32/12/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/LambdaDOS.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding GreenStation
// -----------------------------------------------------------
GDT.addPlatform({
	id:"GreenStation", // Homage to Greenheart Games
	name:"GreenStation",
	company:"Greenheart Games",
	startAmount:6.1,
	unitsSold:6.8,
	licencePrize:1500000,
	published:"33/5/4",
	platformRetireDate:"260/12/4",
	developmentCosts:100000,
	genreWeightings:[  1, 0.7, 0.9, 1, 0.8, 0.7, 0.8, 0.9, 0.8, 0.7, 0.9, 0.6, 0.7 ],
	audienceWeightings:[  0.8, 1, 0.7 ],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GreenStation.png",
	events:[{
	id: "Green_announcement",
	date: "32/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, a company called Greenheart Games, popular for their games such as Game Dev Tycoon and Tavern Keeper, has announced their own new gaming console, the GreenStation. {n} The new GreenStation is an eco-friendly and yet formidable console, capable of handling most of the video games available on the market at sufficient frame rates while consuming less energy.Furthermore, the console will have AI tools to make usage easier for customers. {n} The concept was liked by many experts and fans around the world, with a lot of excitement in the air. Greenheart Games is collaborating up with many third-party companies to produce many exclusives for the launch period. The console will arrive on the market {0}.".localize().format(General.getETADescription('32/6/2', '33/5/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GreenStation.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding HoloBox
// -----------------------------------------------------------
GDT.addPlatform({
	id:"HoloBox",
	name:"HoloBox",
	company:"KickIT",
	startAmount:3.41,
	unitsSold:4.52,
	licencePrize:35000,
	published:"33/7/2",
	platformRetireDate:"260/12/4",
	developmentCosts:25000,
    genreWeightings: [1, 0.8, 0.9, 1, 0.7, 0.9, 0.8, 0.8, 0.7, 0.8, 0.8, 0.9, 0.7],
    audienceWeightings: [0.7, 0.8, 1],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/HoloBox.png",
	events:[{
	id: "HoloBoxAnn",
	date: "33/4/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following the success of OYA, KickIT has recently crowdfunded the development of a new gaming console, raising nearly $30,000,000 in just one month. {n} This compact cube console, named HoloBox, utilizes cutting-edge hologram technology, enabling players to immerse themselves in a 3D world that goes beyond the traditional boundaries of screen-based gaming. {n} The HoloBox is  expected to release {0}.".localize().format(General.getETADescription('33/4/2', '33/7/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/HoloBox.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding mBox Scar
// -----------------------------------------------------------
GDT.addPlatform({
	id:"mBox Scar",
	name:"mBox Scar",
	company:"Mirconoft",
	startAmount:5.36,
	unitsSold:6.43,
	licencePrize:2000000,
	published:"35/9/2",
	platformRetireDate:"260/12/4",
	developmentCosts:800000,
	genreWeightings:[  0.9, 0.7, 0.8, 1, 0.8, 0.7, 0.9, 0.7, 0.6, 0.6, 0.9, 0.8, 0.8 ],
	audienceWeightings:[  0.8, 0.9, 1 ],
	techLevel:7,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/mBox Scar.png",
events:[{
	id: "mBoxScarAnnID",
	date: "34/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "Following the success of the Ninvento One, Mirconoft has officially unveiled their next-generation console, the mBox Scar, which is set to be available {0}. {n} This slim and compact device comes with new AI technologies that improve game quality up to 8K resolution and features voice command integration that syncs seamlessly with home automation systems. {n} Despite the promising announcements, Mirconoft has been subject to controversies due to the fact that the console is completely digital, doesn't allow players to play their favorite titles from previous mBox consoles and comes with a hefty price tag of 759 cr.".localize().format(General.getETADescription('34/12/2', '35/9/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/mBox Scar.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
});

// Adding Playsystem 6
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Playsystem 6",
	name:"Playsystem 6",
	company:"Vonny",
	startAmount:6.42,
	unitsSold:7.51,
	licencePrize:1800000,
	published:"35/9/3",
	platformRetireDate:"39/12/4",
	developmentCosts:700000,
	genreWeightings:[  1, 0.8, 0.9, 0.8, 0.9, 0.6, 0.9, 0.8, 0.6, 0.7, 1, 0.9, 0.7 ],
	audienceWeightings:[  0.7, 1, 0.9 ],
	techLevel:7,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Playsystem 6.png",
events:[{
	id: "PlaySystemSixAnnID",
	date: "35/5/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "Vonny has finally announced a new console from the Playsystem family, coming soon on {0}. {n} The Playsystem 6 is currently the most powerful console in gaming history: it offers a new immersive technology for its controller and a very powerful technology that supports any game in native 8K without interruptions, without using any AI upscaling technology. {n} Furthermore, unlike its rival's mBox Scar, the Playsystem 6 still comes with an on-demand disc player for an additional 59 cr.".localize().format(General.getETADescription('35/5/2', '35/9/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Playsystem 6.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
});

// Adding Ninvento One
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Ninvento One",
	name:"Ninvento One",
	company:"Ninvento",
	startAmount:7.6,
	unitsSold:8.2,
	licencePrize:2000000,
	published:"36/6/2",
	platformRetireDate:"42/1/1",
	developmentCosts:800000,
	genreWeightings:[0.8, 0.7, 1, 0.8, 0.7, 1, 1, 1, 0.7, 0.8, 0.9, 0.8, 0.8],
	audienceWeightings:[0.9, 1, 0.8],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Ninvento One.png",
	events:[{
	id: "NinventoOneAnn",
	date: "36/4/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Ninvento announced their return to the home console market. Dubbed 'Ninvento One', the console has a shape that resembles a TES and arrives with hardware on par with Vonny's PlaySystem 6 and Mirconoft's mBox Scar, running games very smoothly in Quad HD. {n} Ninvento also informed that the console is aimed at a more mixed audience and at casual gamers.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Ninvento One.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Vena Neo
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vena Neo",
	name:"Vena Neo",
	company:"Vena",
	startAmount:3.77,
	unitsSold:4.22,
	licencePrize:20000,
	published:"37/2/2",
	platformRetireDate:"260/12/4",
	developmentCosts:10000,
	genreWeightings:[1, 0.8, 1, 0.8, 0.7, 1, 0.9, 1, 0.7, 0.9, 0.7, 0.7, 0.8],
	audienceWeightings:[1, 1, 0.8],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Vena Neo.png",
	events:[{
	id: "VenaNeoAnn",
	date: "36/11/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vena surprised the entire internet after they announced their return in the console market with a new platform, called Neo, to be released {0}. {n} The Neo is aimed at all gamers, core or casual, of any age, using new remote-like controllers called 'Neo-Pads'. It is also proposed as a more friendly platform for new indie developers, with lower development costs. {n} Vena also announced an exclusive partnership with Ninvento to bring several of the latter's titles to the Neo. The first fans to try this platform were left amazed and we can't wait to see what will come.".localize().format(General.getETADescription('36/11/2', '37/2/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Vena Neo.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding Playsystem 7
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Playsystem 7",
	name:"Playsystem 7",
	company:"Vonny",
	startAmount:7.72,
	unitsSold:8.21,
	licencePrize:2500000,
	published:"39/7/1",
	platformRetireDate:"260/12/4",
	developmentCosts:1000000,
	genreWeightings:[  1, 0.8, 0.9, 1, 0.7, 0.8, 1, 0.8, 0.6, 0.7, 1, 0.9, 0.7 ],
	audienceWeightings:[  0.8, 1, 1 ],
	techLevel:7,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Playsystem 7.png",
events:[{
	id: "PlaySystemSevenAnnID",
	date: "39/3/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "Vonny has recently announced their newest platform, the seventh edition in the Playsystem family. Their newest system from a clumsy but futuristic design puts on the table newest 6K technology and a liquid cooling system which doesn't require maintenance. {n} Furthermore, The controller will come with a new hyper-realistic rumble system and a screen that displays useful information. Unlike many fans expected, the Playsystem 7 will be digital-only and will require an internet connection.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Playsystem 7.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
});

// Adding PPSViva Now
// -----------------------------------------------------------
GDT.addPlatform({
	id:"PPSViva Now",
	name:"PPSViva Now",
	company:"Vonny",
	startAmount:5.32,
	unitsSold:6.11,
	licencePrize:2000000,
	published:"40/5/1",
	platformRetireDate:"260/12/4",
	developmentCosts:700000,
	genreWeightings:[  1, 0.8, 0.9, 1, 0.7, 0.8, 1, 0.8, 0.6, 0.7, 0.9, 0.9, 0.7 ],
	audienceWeightings:[  0.8, 1, 1 ],
	techLevel:7,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/PPSViva Now.png",
events:[{
	id: "PPSVivaNowAnnID",
	date: "39/12/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "After releasing the Playsystem 7, Vonny has announced their newest take in a seemingly-dead mobile market, hitting the shelves {0}. {n} PPSViva Now tries to do what its predecessor did, but better: it has very powerful hardware, equivalent to the Playsystem 6, with a 4K OLED screen and supported by a strong lineup of launch games, for the price of around 459 cr.".localize().format(General.getETADescription('39/12/1', '40/5/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/PPSViva Now.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
});

// Adding 4KGS
// -----------------------------------------------------------
GDT.addPlatform({
	id:"4KGS",
	name:"4KGS",
	company:"Ninvento",
	startAmount:6.1,
	unitsSold:6.9,
	licencePrize:2500000,
	published:"40/12/2",
	platformRetireDate:"260/12/4",
	developmentCosts:350000,
	genreWeightings:[  1, 0.9, 1, 0.8, 0.8, 0.9, 0.9, 1, 0.7, 1, 0.8, 0.8, 0.9 ],
	audienceWeightings:[  1, 0.9, 0.8 ],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/4KGS.png",
	events:[{
	id: "4KGSannouncement",
	date: "40/9/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Many fans were expecting a new portable console from Ninvento, and their prediction has come true: today the japanese company revealed a new model in the GS family, in total fidelity to its predecessor. {n} Called 4KGS, the console carries its feature in its name, including two 4K screens. It also maintains stereoscopic 3D graphics capabilities and a long-lasting battery for up to 24 hours of gameplay without recharging.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/4KGS.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Ninvento MX
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Ninvento MX",
	name:"Ninvento MX",
	company:"Ninvento",
	startAmount:8.02,
	unitsSold:8.88,
	licencePrize:2500000,
	published:"41/10/1",
	platformRetireDate:"260/12/4",
	developmentCosts:1000000,
	genreWeightings:[1, 1, 0.9, 0.9, 0.7, 1, 1, 1, 0.9, 0.8, 1, 0.7, 0.9],
	audienceWeightings:[1, 1, 0.8],
	techLevel:7,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Ninvento MX.png",
events:[{
	id: "NinventoMXAnnID",
	date: "41/10/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "Technology is innovating rapidly, and so is Ninvento: today their new home console was presented at their headquarters in Kyoto. {n} Unlike other companies in the industry, Ninvento has decided to take the risky step of continuing to use CD-ROMs as the media for their consoles rather than going full digital. {n} The new MX offers ground-breaking graphics and an enhanced sound system that allows for seamless immersion for hours on record.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Ninvento MX.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
});
	
// Adding Vena Mars
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vena Mars",
	name:"Vena Mars",
	company:"Vena",
	startAmount:4.09,
	unitsSold:5.22,
	licencePrize:40000,
	published:"42/6/1",
	platformRetireDate:"260/12/4",
	developmentCosts:20000,
	genreWeightings:[1, 0.9, 1, 0.9, 0.6, 0.7, 1, 1, 0.6, 0.7, 1, 0.9, 0.8],
	audienceWeightings:[0.9, 1, 1],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Vena Mars.png",
	events:[{
	id: "VenaMarsAnn",
	date: "42/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vena has announced their future plans for their new consoles, releasing information about a new upcoming platform. {n} Codenamed Mars, this platform is aimed to the more hardcore fanbases, and focuses to improve all the problems the Neo had, coming with a significantly better hardware and backed up by a strong line of launch titles. {n} For Neo owners, fear not, as Vena has stated that it will keep both hardware and software support for all the consoles they release for at least 10 more years.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Vena Mars.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
/*
// Adding VastMachine
// -----------------------------------------------------------
GDT.addPlatform({
	id:"VastMachine",
	name:"VastMachine",
	company:"Vena",
	startAmount:3.89,
	unitsSold:4.22,
	licencePrize:40000,
	published:"42/12/1",
	platformRetireDate:"260/12/4",
	developmentCosts:20000,
	genreWeightings:[0.9, 0.8, 0.8, 1, 0.8, 1, 0.8, 0.8, 0.6, 0.9, 0.7, 0.8],
	audienceWeightings:[0.9, 1, 0.6],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/VastMachine.png",
	events:[{
	id: "VastMachineAnn",
	date: "42/7/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Following the Mars' release, Vena has revealed new informations about their second upcoming platform, called 'VastMachine'. This console, with a controller paying homage to the DreamVast, is intended to be used in front of a TV, whenever you want to play casual games with your friends or to watch your favorite streaming services. {n} Vena also announced multiple remakes of popular titles from the original DreamVast.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/VastMachine.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
*/	
// Adding mBox Z
// -----------------------------------------------------------
GDT.addPlatform({
	id:"mBox Z",
	name:"mBox Z",
	company:"Mirconoft",
	startAmount:6.36,
	unitsSold:7.43,
	licencePrize:2000000,
	published:"43/2/1",
	platformRetireDate:"260/12/4",
	developmentCosts:800000,
	genreWeightings:[  1, 0.8, 0.9, 1, 0.7, 0.8, 1, 0.7, 0.6, 0.7, 1, 1, 0.8 ],
	audienceWeightings:[  0.8, 0.9, 1 ],
	techLevel:7,
    iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/mBox Z.png",
events:[{
	id: "mBoxZAnnID",
	date: "43/1/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	text: "Mirconoft has finally revealed their newest take on the current generation, announcing the longly-waited mBox Z. {n} Microsoft has said the reason it took so long for the mBox Z to be announced is because it will be 'the Z of gaming': early benchmarks show impressive results compared to its predecessor, and after several past controversies, it will also offer a version with a CD-ROM drive and physical games.".localize(),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/mBox Z.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
});

// ******************************************************************************************
// Topics
// ******************************************************************************************

GDT.addTopics([
	{ 
		id: "Tech_Demo", 
		name: "Tech Demo".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/tech_demo.png",
		genreWeightings: [0.9, 0.7, 0.6, 1, 0.6, 0.6, 0.9, 0.9, 0.9, 0.7, 0.9, 0.8, 0.8], 
		audienceWeightings: [0.7, 1, 0.9],
	 }
	,{ 
		id: "Cartoon", 
		name: "Cartoon".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/cartoon.png",
	        genreWeightings: [  1, 0.7, 0.9, 0.8, 0.7, 0.6, 0.9, 0.9, 1, 0.9, 0.8, 1, 0.9 ],
	        audienceWeightings: [  1, 0.9, 0.6 ]
	 }
	,{ 
		id: "Sandbox", 
		name: "Sandbox".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/sandbox.png",
		genreWeightings: [  0.9, 0.7, 0.6, 1, 0.8, 0.9, 0.8, 0.8, 0.9, 0.8, 0.7, 0.7, 0.9 ],
		audienceWeightings: [  0.9, 1, 0.7 ]
	 }
	,{ 
		id: "Samurai", 
		name: "Samurai".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/samurai.png",
		genreWeightings: [  1, 0.9, 1, 0.9, 0.7, 0.8, 0.8, 1, 0.8, 0.9, 1, 0.9, 1 ],
	        audienceWeightings: [  1, 0.9, 0.9 ]
	 }
	,{ 
		id: "Maze", 
		name: "Maze".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/maze.png",
		genreWeightings: [  1, 0.7, 0.7, 0.9, 0.8, 0.6, 0.7, 0.9, 0.7, 1, 1, 0.9, 1 ],
	        audienceWeightings: [  0.8, 1, 0.7 ]
	 }
	,{ 
		id: "Beat Em Up", 
		name: "Beat 'Em Up".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/beat_em_up.png",
		genreWeightings: [  0.9, 0.6, 0.8, 0.9, 0.7, 0.6, 0.7, 0.8, 0.6, 0.6, 0.8, 0.8, 0.7 ],
	        audienceWeightings: [  0.8, 0.7, 0.9 ]
	 }
	,{ 
		id: "Camping", 
		name: "Camping".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/camping.png",
		genreWeightings: [  1, 0.9, 0.7, 1, 0.8, 0.6, 0.6, 0.6, 0.9, 0.8, 0.7, 1, 0.7 ],
	        audienceWeightings: [  0.9, 0.7, 0.8 ]
	 }
	,{ 
		id: "Meme", 
		name: "Meme".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/meme.png",
		genreWeightings: [  0.9, 0.6, 0.9, 0.8, 0.7, 0.8, 0.8, 1, 0.6, 0.7, 0.9, 0.7, 0.8 ],
	        audienceWeightings: [  0.9, 0.7, 0.6 ]
	 }
	,{ 
		id: "Ghosts", 
		name: "Ghosts".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/ghosts.png",
		genreWeightings: [  1, 0.7, 0.8, 0.9, 0.7, 0.7, 0.8, 0.9, 0.6, 0.9, 0.8, 1, 1 ],
	        audienceWeightings: [  0.9, 0.8, 0.7 ]
	 }
	,{ 
		id: "Cards", 
		name: "Cards".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/cards.png",
		genreWeightings: [  0.6, 0.7, 0.7, 0.9, 0.9, 1, 0.6, 0.6, 0.8, 1, 0.7, 0.6, 0.9 ],
	        audienceWeightings: [  0.9, 0.7, 0.8 ]
	 }
	,{ 
		id: "Trivia", 
		name: "Trivia".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/trivia.png",
		genreWeightings: [  0.7, 0.6, 0.7, 0.9, 0.7, 1, 0.8, 0.6, 1, 1, 0.6, 0.6, 0.8 ],
	        audienceWeightings: [  0.9, 1, 0.8 ]
	 }
	,{ 
		id: "Open World", 
		name: "Open World".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/open_world.png",
		genreWeightings: [  1, 0.9, 0.9, 1, 0.7, 0.6, 1, 0.9, 0.6, 0.8, 1, 0.6, 0.9 ],
	        audienceWeightings: [  0.9, 0.8, 0.8 ]
	 }
	,{ 
		id: "Minigames", 
		name: "Minigames".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/minigames.png",
		genreWeightings: [  0.9, 0.7, 0.6, 0.7, 0.8, 0.9, 0.9, 0.8, 0.8, 1, 0.8, 0.7, 1 ],
	        audienceWeightings: [  1, 0.9, 0.7 ]
	 }
	,{ 
		id: "Battle Royale", 
		name: "Battle Royale".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/battle_royale.png",
		genreWeightings: [  1, 0.6, 0.8, 0.8, 0.7, 0.6, 0.7, 0.6, 0.6, 0.6, 1, 0.7, 0.7 ],
	        audienceWeightings: [  0.7, 0.9, 0.8 ]
	 }
	,{ 
		id: "Programming", 
		name: "Programming".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/programming.png",
		genreWeightings: [  0.8, 0.6, 0.7, 1, 0.7, 0.7, 0.7, 0.8, 1, 0.9, 0.6, 0.6, 0.6 ],
	        audienceWeightings: [  0.7, 1, 0.8 ]
	 }
	,{ 
		id: "Steampunk", 
		name: "Steampunk".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/steampunk.png",
		genreWeightings: [  1, 0.7, 0.8, 0.9, 0.8, 0.7, 0.8, 0.9, 0.6, 0.8, 0.7, 0.8, 0.7 ],
	        audienceWeightings: [  0.8, 1, 0.8 ]
	 }
	,{ 
		id: "Retrowave", 
		name: "Retrowave".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/retrowave.png",
		genreWeightings: [  1, 0.6, 0.7, 1, 0.6, 0.7, 1, 0.8, 0.6, 0.6, 0.7, 0.8, 0.9 ],
	        audienceWeightings: [  0.8, 0.8, 0.9 ]
	 }
	,{ 
		id: "Level Builder", 
		name: "Level Builder".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/level_builder.png",
		genreWeightings: [  0.9, 0.7, 0.9, 1, 0.7, 0.6, 0.9, 1, 0.7, 1, 0.6, 0.7, 0.7 ],
	        audienceWeightings: [  0.9, 0.8, 0.7 ]
	 }
	,{ 
		id: "Mafia", 
		name: "Mafia".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/mafia.png",
		genreWeightings: [  1, 0.7, 0.8, 1, 0.7, 0.6, 0.9, 0.8, 0.9, 0.8, 1, 0.9, 0.7 ],
	        audienceWeightings: [  0.6, 0.9, 1 ]
	 }
	,{ 
		id: "Pointandclick", 
		name: "Point & Click".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/point&click.png",
		genreWeightings: [  0.9, 0.7, 0.6, 1, 0.9, 0.8, 0.6, 0.7, 0.6, 0.9, 0.8, 0.8, 0.7 ],
	        audienceWeightings: [  0.8, 1, 0.7 ]
	 }
	 ,{ 
		id: "Religious", 
		name: "Religious".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/religious.png",
		genreWeightings: [  1, 0.8, 0.9, 0.9, 0.7, 0.6, 0.6, 0.9, 1, 1, 0.6, 0.8, 0.6 ],
	        audienceWeightings: [  1, 0.9, 0.7 ]
	 }
	,{ 
		id: "Table_game", 
		name: "Table Games".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/table_game.png",
		genreWeightings: [  0.8, 0.6, 0.6, 1, 1, 0.9, 0.6, 0.7, 0.7, 0.9, 0.6, 0.7, 0.8 ],
	        audienceWeightings: [  1, 0.9, 0.6 ]
	 }
	 ,{ 
		id: "Anime", 
		name: "Anime".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/anime.png",
		genreWeightings: [  1, 0.8, 1, 0.9, 0.8, 0.7, 1, 1, 1, 0.8, 0.9, 1, 0.9 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	 }
	 ,{ 
		id: "Novel", 
		name: "Novel".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/novel.png",
		genreWeightings: [  0.9, 1, 0.8, 0.7, 0.6, 0.9, 0.8, 0.8, 0.9, 0.8, 0.8, 0.8, 0.8 ],
	        audienceWeightings: [  0.7, 1, 0.9 ]
	 }
	,{ 
		id: "Tower_defense", 
		name: "Tower Defense".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/tower_defense.png",
		genreWeightings: [  0.9, 0.7, 0.9, 0.8, 1, 0.8, 0.6, 0.8, 0.9, 0.8, 0.8, 0.7, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	 }
	,{ 
		id: "Gambling", 
		name: "Gambling".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/gambling.png",
	    genreWeightings: [  0.7, 0.6, 0.6, 1, 1, 0.8, 0.7, 0.7, 0.8, 0.7, 0.6, 0.7, 0.9 ],
	        audienceWeightings: [  0.6, 0.7, 1 ]
	}
	,{ 
		id: "Theme_park", 
		name: "Theme Park".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/theme_park.png",
	    genreWeightings: [  0.9, 0.9, 0.7, 1, 1, 0.8, 0.7, 0.8, 0.8, 0.8, 0.7, 0.8, 0.7 ],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "Retro", 
		name: "Retro".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/retro.png",
	    genreWeightings: [  1, 1, 1, 0.8, 1, 1, 1, 1, 0.8, 0.7, 1, 0.8, 0.9 ],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "Horse", 
		name: "Horse".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/horse.png",
	    genreWeightings: [  0.9, 0.7, 0.6, 1, 0.8, 1, 1, 0.9, 0.9, 0.9, 0.7, 0.6, 0.8 ],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "3D_maze", 
		name: "3D maze".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/3d_maze.png",
	    genreWeightings: [  1, 0.7, 0.6, 0.8, 0.7, 0.9, 0.7, 0.8, 0.7, 0.8, 1, 0.9, 0.8 ],
	        audienceWeightings: [  0.8, 1, 0.6 ]
	}
	,{ 
		id: "Geography", 
		name: "Geography".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/geography.png",
	    genreWeightings: [  0.8, 0.9, 0.7, 0.9, 0.7, 0.7, 0.8, 0.8, 1, 1, 0.7, 0.6, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.6 ]
	}
	,{ 
		id: "Bowling", 
		name: "Bowling".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/bowling.png",
	    genreWeightings: [  0.9, 0.7, 0.6, 1, 0.8, 1, 0.6, 0.6, 0.7, 0.8, 0.6, 0.6, 0.9 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	}
	,{ 
		id: "Pinball", 
		name: "Pinball".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/pinball.png",
	    genreWeightings: [  0.9, 0.6, 0.7, 1, 0.8, 0.8, 0.6, 0.6, 0.6, 0.8, 0.7, 0.6, 1 ],
	        audienceWeightings: [  1, 0.8, 0.9 ]
	}
	,{ 
		id: "Management", 
		name: "Management".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/management.png",
	    genreWeightings: [  0.6, 0.7, 0.6, 1, 0.9, 0.8, 0.6, 0.6, 0.9, 0.7, 0.6, 0.6, 0.8 ],
	        audienceWeightings: [  0.8, 1, 0.7 ]
	}
	,{ 
		id: "Skating", 
		name: "Skating".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/skating.png",
	    genreWeightings: [  1, 0.7, 0.6, 1, 0.7, 0.8, 0.9, 0.8, 0.8, 0.8, 0.8, 0.7, 1 ],
	        audienceWeightings: [  0.9, 1, 0.8 ]
	}
	,{ 
		id: "Kaiju", 
		name: "Kaiju".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/kaiju.png",
	    genreWeightings: [  1, 0.6, 0.8, 1, 0.8, 0.6, 0.7, 0.9, 0.7, 0.7, 0.9, 1, 1 ],
	        audienceWeightings: [  0.8, 1, 1 ]
	}
	,{ 
		id: "Dream", 
		name: "Dream".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/dream.png",
	    genreWeightings: [  0.9, 1, 0.8, 1, 0.7, 0.8, 0.7, 0.9, 0.9, 0.8, 0.8, 1, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.9 ]
	}
	,{ 
		id: "Treasure", 
		name: "Treasure".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/treasure.png",
	    genreWeightings: [  1, 0.8, 0.9, 0.8, 0.9, 0.8, 0.7, 0.8, 0.6, 0.8, 0.7, 0.6, 0.8 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	}
	,{ 
		id: "House", 
		name: "House".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/house.png",
	    genreWeightings: [  0.7, 0.8, 0.7, 1, 0.7, 1, 0.6, 0.7, 1, 0.8, 0.6, 0.7, 0.6 ],
	        audienceWeightings: [  1, 0.7, 0.6 ]
	}
	,{ 
		id: "Spelling", 
		name: "Spelling".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/spelling.png",
	    genreWeightings: [  0.7, 0.9, 0.7, 1, 0.8, 1, 0.7, 0.6, 1, 0.9, 0.6, 0.6, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.6 ]
	}
	,{ 
		id: "Halloween", 
		name: "Halloween".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/halloween.png",
	    genreWeightings: [  1, 0.9, 0.8, 1, 0.8, 0.9, 0.6, 0.7, 0.8, 0.8, 0.8, 1, 0.7 ],
	        audienceWeightings: [  0.9, 0.8, 0.9 ]
	}
	,{ 
		id: "Photography", 
		name: "Photography".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/photography.png",
	    genreWeightings: [  0.9, 0.8, 0.7, 1, 0.8, 0.9, 0.6, 0.6, 0.8, 0.8, 0.8, 0.6, 0.7 ],
	        audienceWeightings: [  0.8, 1, 0.6 ]
	}
	,{ 
		id: "Typing", 
		name: "Typing".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/typing.png",
	    genreWeightings: [  0.9, 0.8, 0.7, 1, 0.7, 0.8, 0.8, 0.7, 1, 0.9, 0.7, 0.6, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.6 ]
	}
	,{ 
		id: "Boats", 
		name: "Boats".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/boats.png",
	    genreWeightings: [  1, 0.9, 0.8, 1, 0.7, 0.7, 0.8, 0.7, 0.8, 0.8, 0.7, 0.7, 0.9 ],
	        audienceWeightings: [  0.8, 1, 0.6 ]
	}
	,{ 
		id: "Parkour", 
		name: "Parkour".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/parkour.png",
	    genreWeightings: [  1, 0.8, 0.7, 1, 0.6, 0.8, 1, 0.9, 0.7, 0.6, 0.7, 0.7, 0.8 ],
	        audienceWeightings: [  0.8, 1, 0.8 ]
	}
	,{ 
		id: "Dinosaurs", 
		name: "Dinosaurs".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/dinosaurs.png",
	    genreWeightings: [  1, 0.8, 0.8, 1, 0.7, 0.7, 0.8, 0.7, 0.9, 0.6, 1, 0.9, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.9 ]
	}
	,{ 
		id: "Firefighter", 
		name: "Firefighter".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/firefighter.png",
	    genreWeightings: [  1, 0.8, 0.7, 1, 0.9, 1, 0.8, 0.6, 0.9, 0.7, 0.8, 0.6, 0.9 ],
	        audienceWeightings: [  1, 0.8, 0.8 ]
	}
	,{ 
		id: "Health", 
		name: "Health".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/health.png",
	    genreWeightings: [0.6, 0.6, 0.8, 1, 0.8, 0.7, 0.6, 0.7, 1, 0.9, 0.7, 0.9, 0.7],
	        audienceWeightings: [  1, 0.9, 0.8 ]
	}
	,{ 
		id: "Tycoon", 
		name: "Tycoon".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/tycoon.png",
	    genreWeightings: [0.7, 0.6, 0.6, 1, 0.8, 1, 0.6, 0.7, 0.8, 0.9, 0.6, 0.6, 0.7],
	        audienceWeightings: [  1, 0.9, 0.6 ]
	}
	,{ 
		id: "Nostalgia", 
		name: "Nostalgia".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/nostalgia.png",
	    genreWeightings: [0.9, 0.8, 0.7, 1, 0.7, 0.8, 1, 0.8, 0.8, 0.7, 0.6, 0.8, 0.6],
	        audienceWeightings: [  1, 0.9, 0.6 ]
	}
	,{ 
		id: "Packing", 
		name: "Packing".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/packing.png",
	    genreWeightings: [0.7, 0.8, 0.6, 1, 0.8, 1, 0.7, 0.7, 0.8, 1, 0.7, 0.6, 0.8],
	        audienceWeightings: [  0.8, 1, 0.7 ]
	}
	,{ 
		id: "Psychology", 
		name: "Psychology".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/psychology.png",
	    genreWeightings: [0.7, 0.8, 0.6, 1, 0.7, 0.6, 0.6, 0.7, 1, 0.7, 0.8, 1, 0.6],
	        audienceWeightings: [  0.6, 0.8, 1 ]
	}
	,{ 
		id: "Stickman", 
		name: "Stickman".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/stickman.png",
	    genreWeightings: [1, 0.9, 0.7, 0.8, 0.8, 0.9, 0.7, 0.8, 0.6, 0.8, 1, 0.8, 0.9],
	        audienceWeightings: [  1, 0.9, 0.7 ]
	}
	,{ 
		id: "Skeleton", 
		name: "Skeleton".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/skeleton.png",
	    genreWeightings: [1, 0.9, 0.8, 0.7, 0.8, 0.8, 0.7, 0.9, 0.6, 0.8, 0.9, 1, 0.9],
	        audienceWeightings: [  1, 0.9, 0.9 ]
	}
	,{ 
		id: "Robot", 
		name: "Robot".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/robot.png",
	    genreWeightings: [1, 0.8, 0.7, 1, 0.8, 0.9, 0.8, 0.9, 0.7, 0.7, 1, 0.8, 1],
	        audienceWeightings: [  1, 0.9, 0.7 ]
	}
	,{ 
		id: "Goblin", 
		name: "Goblin".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/goblin.png",
	    genreWeightings: [1, 0.9, 0.8, 0.7, 0.9, 1, 0.7, 0.8, 0.6, 0.8, 0.7, 0.8, 1],
	        audienceWeightings: [  1, 0.9, 0.8 ]
	}
	,{ 
		id: "Digging", 
		name: "Digging".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/digging.png",
	    genreWeightings: [0.8, 0.9, 0.7, 1, 0.9, 1, 0.8, 0.7, 0.7, 0.9, 0.6, 0.7, 1],
	        audienceWeightings: [  0.8, 0.9, 0.6 ]
	}
	,{ 
		id: "Toy", 
		name: "Toy".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/toy.png",
	    genreWeightings: [1, 0.9, 0.8, 1, 0.9, 1, 0.9, 0.7, 0.8, 0.9, 0.7, 0.7, 1],
	        audienceWeightings: [  1, 0.9, 0.8 ]
	}
	,{ 
		id: "Party", 
		name: "Party".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/party.png",
	    genreWeightings: [0.9, 1, 0.8, 1, 0.8, 1, 0.7, 0.8, 0.8, 0.9, 0.7, 0.8, 0.7],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "Capture The Flag", 
		name: "Capture The Flag".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/capture the flag.png",
	    genreWeightings: [1, 0.8, 0.7, 1, 0.9, 0.8, 0.7, 0.9, 0.6, 0.7, 1, 0.7, 0.9],
	        audienceWeightings: [  0.8, 1, 0.8 ]
	}
]);

// ******************************************************************************************
// Researches: Engines
// ******************************************************************************************

// Adding Basic Menu
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Basic Menu",
	name: "Basic Menu",
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 1
	});

// Adding Game Over Screen
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Game Over Screen",
	name: "Game Over Screen",
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 1
	});
	
// Adding Arcade Mode
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Arcade Mode",
	name: "Arcade Mode",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '2D Graphics V2') >= 1;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 1
	});

// Adding Basic friendly GUI
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Basic friendly GUI",
	name: "Basic friendly GUI",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '2D Graphics V3') >= 3;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 2
	});

// Adding Improved GUI
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Improved GUI",
	name: "Improved GUI",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Graphic') >= 6;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});

// Adding In-game Menu
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "e8242f58-5c87-4643-be80-b83b08d84545",
	name: "In-game Menu",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '3D Graphics V3') >= 2;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 6
	});

// Adding Subtitles
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "3285484c-3912-46fd-9304-95e922eab611",
	name: "Subtitles",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Dialogs') >= 6;

						return res;
				},
	category: "Dialogs",
	categoryDisplayName: "Dialogs",
	v: 4
	});

// Adding In-game Chat
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "3a5caf8e-d408-4532-a132-44630976d5cc",
	name: "In-game Chat",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 6;

						return res;
				},
	category: "Gameplay",
	categoryDisplayName: "Gameplay",
	v: 4
	});

// Adding In-game Voicechat
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "540cc456-315f-4b44-9715-35934c023b9b",
	name: "In-game Voicechat",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 8;

						return res;
				},
	category: "Gameplay",
	categoryDisplayName: "Gameplay",
	v: 6
	});

// Adding Microtransactions
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "93862712-00d8-48f0-b3f0-d2817a2219c8",
	name: "Microtransactions",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 10;

						return res;
				},
	category: "Gameplay",
	categoryDisplayName: "Gameplay",
	v: 8
	});

// Adding In-game Ads
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "d53c39e1-73c3-4bae-898e-df26deb10d47",
	name: "In-game Ads",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 11;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 10
	});

// Adding In-level Ads
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "f9ce89db-797f-4c17-a6a5-d962b3bb5f4f",
	name: "In-level Ads",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 12;

						return res;
				},
	category: "World Design",
	categoryDisplayName: "World Design",
	v: 12
	});

// Adding Splitscreen
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "243528f0-c3b6-4d24-b9ec-00e686bc5767",
	name: "Splitscreen",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, 'Multiplayer') >= 4;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 6
	});

// Adding Randomly Generated World
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "e038e713-748f-4225-8985-7c6af04bd098",
	name: "Randomly Generated World",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('World Design') >= 8;

						return res;
				},
	category: "World Design",
	categoryDisplayName: "World Design",
	v: 4
	});

// Adding 3D skybox
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "fcd2606e-a713-4738-b1fc-3302854ae00e",
	name: "3D skybox",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '3D Graphics V2') >= 3;

						return res;
				},
	category: "World Design",
	categoryDisplayName: "World Design",
	v: 4
	});

// Adding Mod Launcher
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "290893cb-0763-41bf-a535-a7c555995884",
	name: "Mod Launcher",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, 'Mod Support') >= 2;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});

// Adding Realistic Water Physics
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "0dd4bb95-9dc4-47b9-81a5-839bb84052e9",
	name: "Realistic Water Physics",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, 'Advanced Physics') >= 3;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 8
	});

// Adding Cheat Codes
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "96a5fd13-7ff0-4669-b16b-e1a8c6b9e715",
	name: "Cheat Codes",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 5;

						return res;
				},
	category: "Graphic",
	categoryDisplayName: "Graphic",
	v: 2
	});

// Adding Multi-Language support
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "ae95e3a4-d4c4-4fff-9312-50d1c216ecf2",
	name: "Multi-Language support",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Dialogs') >= 6;

						return res;
				},
	category: "Dialogs",
	categoryDisplayName: "Dialogs",
	v: 4
	});

// Adding In-game Report System
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "4354878b-2811-489b-ab67-28bbb74a9fb2",
	name: "In-game Report System",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 7;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 6
	});

// Adding High-Scores saves
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "e41de35a-8937-428f-b129-30963e79a376",
	name: "High-Scores saves",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 2;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 1
	});

// Adding In-game Shaders
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "2ee1dac0-e35e-44f0-b682-3fcef02430f5",
	name: "In-game Shaders",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Graphic') >= 8;

						return res;
				},
	category: "Graphic",
	categoryDisplayName: "Graphic",
	v: 8
	});

// Adding Original Soundtrack
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "99c15326-ab23-4216-b348-c52ac235acf3",
	name: "Original Soundtrack",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Sound') >= 5;

						return res;
				},
	category: "Sound",
	categoryDisplayName: "Sound",
	v: 4
	});

// Adding In-game Anti-Cheat
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "3bb3387d-d981-4c34-b471-e20b90a560ea",
	name: "In-game Anti-Cheat",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 7;

						return res;
				},
	category: "Gameplay",
	categoryDisplayName: "Gameplay",
	v: 8
	});

// Adding High framerate support
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "fbdf3d75-a134-4673-b2a9-17e6c5a4fd6b",
	name: "High framerate support",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Graphic') >= 8;

						return res;
				},
	category: "Graphic",
	categoryDisplayName: "Graphic",
	v: 8
	});

// Adding V-Sync support
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "5ed4cd96-4c96-4e85-9bb0-23dd5f24e737",
	name: "V-Sync support",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Graphic') >= 7;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});

// Adding First-Person Camera
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "6554gba5-54e8-45u9-88nh-5425fg498jt2",
	name: "First-Person Camera",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 4;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});

// Adding Third-Person Camera
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "gr5175m8-59e5-45a9-81v9-5425fgb65v12",
	name: "Third-Person Camera",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 5;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});
	
// Adding Game Modes
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "1b6165bs-1e48-1235a-867f-36n490fm7",
	name: "Game Modes",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 4;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});
	
// Adding Built-In social media services
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "mg47621-a5410b-1m713a-895f-3b531d680",
	name: "Built-In social media services",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 8;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 10
	});
	
// Adding Fast Skip
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "FastSkip",
	name: "Fast Skip",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 6;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 4
	});
	
// Adding Vectorial Graphics
// -----------------------------------------------------------
	
GDT.addResearchItem({
	id: "Vectorial Graphics",
	name: "Vectorial Graphics",
	category: "Graphic",
    group: "graphic-type",
    categoryDisplayName: "Graphic",
	techLevel: 0,
	consolePart: !0,
	devCost: 2000,
    v: 1
	});
	
// Adding 2.5D Graphics V1
// -----------------------------------------------------------
	
GDT.addResearchItem({
	id: "2.5D Graphics V1",
	name: "2.5D Graphics V1",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '2D Graphics V2') >= 3 && LevelCalculator.getFeatureLevel(GameManager.company, '3D Graphics V1') >= 2;

						return res;
				},
	category: "Graphic",
    group: "graphic-type",
    categoryDisplayName: "Graphic",
	techLevel: 2,
	consolePart: !0,
	engineCost: 15000,
	devCost: 25000,
	showXPGain: !0,
    v: 4
	});

// Adding 2.5D Graphics V2
// -----------------------------------------------------------
	
GDT.addResearchItem({
	id: "2.5D Graphics V2",
	name: "2.5D Graphics V2",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '2.5D Graphics V1') >= 4;

						return res;
				},
	category: "Graphic",
    group: "graphic-type",
    categoryDisplayName: "Graphic",
	techLevel: 3,
	consolePart: !0,
	engineCost: 25000,
	devCost: 40000,
	showXPGain: !0,
    v: 4
	});
	
// Adding 2.5D Graphics V3
// -----------------------------------------------------------
	
GDT.addResearchItem({
	id: "2.5D Graphics V3",
	name: "2.5D Graphics V3",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '2.5D Graphics V2') >= 3;

						return res;
				},
	category: "Graphic",
    group: "graphic-type",
    categoryDisplayName: "Graphic",
	techLevel: 4,
	consolePart: !0,
	engineCost: 30000,
	devCost: 60000,
	showXPGain: !0,
    v: 6
	});

// Adding 2.5D Graphics V4
// -----------------------------------------------------------
	
GDT.addResearchItem({
	id: "2.5D Graphics V4",
	name: "2.5D Graphics V4",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, '2.5D Graphics V3') >= 2;

						return res;
				},
	category: "Graphic",
    group: "graphic-type",
    categoryDisplayName: "Graphic",
	techLevel: 5,
	consolePart: !0,
	engineCost: 40000,
	devCost: 80000,
	showXPGain: !0,
    v: 8
	});


// Adding 144p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "144p Screen resolution",
	name: "144p Screen resolution",
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 1
	});
	
// Adding 240p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "240p Screen resolution",
	name: "240p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 2;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 2
	});
	
// Adding 360p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "360p Screen resolution",
	name: "360p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 3;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 4
	});
	
// Adding 480p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "480p Screen resolution",
	name: "480p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 4;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 6
	});
	
// Adding 576p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "576p Screen resolution",
	name: "576p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 5;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 6
	});
	
// Adding 720p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "720p Screen resolution",
	name: "720p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 7;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 8
	});
	
// Adding 1080p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "1080p Screen resolution",
	name: "1080p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 8;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 10
	});
	
// Adding 1440p Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "1440p Screen resolution",
	name: "1440p Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 9;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 10
	});

// Adding 2160p (4K) Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "2160p (4K) Screen resolution",
	name: "2160p (4K) Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 10;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 12
	});

// Adding 8K Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "8K Screen resolution",
	name: "8K Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 11;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 14
	});

// Adding 16K Screen resolution
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "16K Screen resolution",
	name: "16K Screen resolution",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 12;

						return res;
				},
	category: "Graphic",
	group: "Resolution",
	categoryDisplayName: "Resolution".localize(),
	consolePart: !0,
	v: 14
	});

// Adding Multi-Screen Support
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Multi-Screen Support",
	name: "Multi-Screen Support",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 7;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	consolePart: !0,
	v: 4
	});

// Adding Field Of View
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Field Of View",
	name: "Field Of View",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 6;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	v: 2
	});

// Adding Checkpoints
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Checkpoints",
	name: "Checkpoints",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 2;

						return res;
				},
	category: "Gameplay",
	categoryDisplayName: "Gameplay".localize(),
	v: 2
	});

// Adding Hidden Areas
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Hidden Areas",
	name: "Hidden Areas",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 6;

						return res;
				},
	category: "World Design",
	categoryDisplayName: "World Design".localize(),
	v: 2
	});

// Adding Built-In Mod Workshop
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Built-In Mod Workshop",
	name: "Built-In Mod Workshop",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, 'Mod Support') >= 4;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	v: 4
	});

// Adding Screenshots support
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Screenshots support",
	name: "Screenshots support",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 4;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	v: 4
	});

// Adding Level-up system
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Level-up system",
	name: "Level-up system",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Gameplay') >= 4;

						return res;
				},
	category: "Gameplay",
	categoryDisplayName: "Gameplay".localize(),
	v: 2
	});

// Adding Credits scene
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Credits scene",
	name: "Credits scene",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 2;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	v: 1
	});

// Adding Leaderboards
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Leaderboards",
	name: "Leaderboards",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 3;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	v: 1
	});

// Adding Online Leaderboards
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Online Leaderboards",
	name: "Online Leaderboards",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getFeatureLevel(GameManager.company, 'Online play') >= 2;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine".localize(),
	v: 4
	});
	
// Adding Interactive NPCs
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "Interactive NPCs",
	name: "Interactive NPCs",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('AI') >= 10;

						return res;
				},
	category: "AI",
	categoryDisplayName: "A.I.".localize(),
	v: 10
	});
	
// Adding AI-Generated levels
// -----------------------------------------------------------

GDT.addResearchItem({
	id: "AI-Generated levels",
	name: "AI-Generated levels",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('AI') >= 12;

						return res;
				},
	category: "AI",
	categoryDisplayName: "A.I.".localize(),
	v: 14
	});
	
// Adding Multi-choice Dialogues
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Multi-choice dialogues",
	name: "Multi-choice dialogues",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Dialogs') >= 7;

						return res;
				},
	category: "Dialogs",
	categoryDisplayName: "Dialogs",
	v: 6
	});

// Adding Voice commands
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Voice commands",
	name: "Voice commands",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 8;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
    consolePart: !0,
	v: 8
	});
	
// Adding Minimap
// -----------------------------------------------------------
GDT.addResearchItem({
	id: "Minimap",
	name: "Minimap",
	canResearch: function () {
							var res = true;
							res =   LevelCalculator.getMissionLevel('Engine') >= 4;

						return res;
				},
	category: "Engine",
	categoryDisplayName: "Engine",
	v: 2
	});

// Adding Educational Games
// -----------------------------------------------------------
var EducationalGames = {
	id: "EducationalGames",
	name: "Educational Games",
	canResearch: function (a) {
							var res = true;
							res =   a.isLaterOrEqualThan(5, 2);

						return res;
				},
	category: "Game Design",
	categoryDisplayName: "Game Design",
    pointsCost: 40,
    duration: 2E4,
    cost: 50E3
	};
	
// Adding Shooter Games
// -----------------------------------------------------------
var ShooterGames = {
    id: "ShooterGames",
    name: "Shooter Games",
    canResearch: function (a) {
        var GenreCount = GameManager.company.gameLog.filter(function(game) {
            return game.genre.id === "Action" && game.score > 7;
        });

        return GenreCount.length > 4 && a.isLaterOrEqualThan(3, 2);
    },
    category: "Game Design",
    categoryDisplayName: "Game Design",
    pointsCost: 30,
    duration: 20000,
    cost: 40000
};

	
// Adding custom starting engine parts 

var a = Research;

// Custom function to find researches
a.getItemById = function(id) {
    var items = Research.getAllItems();
    for (var i = 0; i < items.length; i++) {
        if (items[i].id === id) {
            return items[i];
        }
    }
    return null;
};

a.StartEngineParts.push(
    a.getItemById("144p Screen resolution"),
    a.getItemById("Vectorial Graphics"),
    a.getItemById("Basic Menu"),
    a.getItemById("Game Over Screen")
);

a.SpecialItems.push(EducationalGames, ShooterGames);

// ******************************************************************************************
// Events
// ******************************************************************************************

// *******************************
// Interactive Events
// *******************************

// Adding 'A scummy software'
// -----------------------------------------------------------

var ScummySoftwareEvent = {
	id: "scummysoftware",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel == 1 && company.isGameProgressBetween(0.6, 0.9);
	},
	getNotification: function (company) {
		var game = company.currentGame;
        var bribe = company.cash / 4;
		var msg = "While developing your latest game, {0}, you accidentally installed a malicious version of Globe Photostore. The hackers responsible for the malware have threatened to delete all your game files. You have the option to either refuse to pay the ransom and risk the hackers distributing a pirated version of your game, or pay the bribe of {1} to prevent this from happening. What course of action will you take?"
			.localize().format(game.title, UI.getShortNumberString(bribe));
		company.adjustHype(5 + 10 * company.getRandom());

		return new Notification({
			sourceId: "scummysoftware",
			header: "A scummy software".localize(),
			text: msg,
			options: ["Pay the ransomware", "No."]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
		var bribe = company.cash / 4;
		if (decision === 0) {
			
			var n = new Notification({
				header: "A clever move".localize(),
				text: "After you paid the hackers, they confessed that it was all a hoax. They never had any files from your game and you ended up losing money."
			});
			n.adjustCash(bribe * -1, "Ransomware bribe");
			
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "Free sponsor??".localize(),
				text: "You chose not to pay the ransomware, so they exposed your game to the public. On the bright side, you gained some buzz and captured people's interest in your game.",
			});
			n.adjustHype(15 + 25 * company.getRandom());
			company.notifications.push(n);
			company.currentGame.designPoints -= (2 + 8) * company.getRandom();
			company.currentGame.technologyPoints -= (2 + 8) * company.getRandom();
			return;
		}
	}
};

GDT.addEvent(ScummySoftwareEvent);

// Adding 'Golden GameSphere'
// ----------------------------------------------------------- 

var GoldenGameSphereEvent = {
	id: "GoldenGameSphere",
	isRandomEvent: false,
	date: "13/2/1",
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel == 3;
	},
	getNotification: function (company) {

		var msg = "Congratulations boss, you found the Golden GameSphere! This specialty made by Ninvento is valued at about 250,000 cr.! Would you like to sell it at auction, donate it to a well-known gaming museum, or keep it in our console collection?";

		return new Notification({
			sourceId: "GoldenGameSphere",
			header: "Golden luck".localize(),
			text: msg,
			image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Golden GameSphere.png",
			options: ["Sell it!", "Let's preserve history.", "We're keeping this!"]
		});
	},
	complete: function (decision) {


		var company = GameManager.company;

		if (decision === 0) {
			
			var n = new Notification({
				header: "Double profit".localize(),
				text: "Boss, we successfully sold the Golden GameSphere to auction item for 500,000 cr. ! That is double its original value :)",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(500000, "Golden GameSphere");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "A piece of history".localize(),
				text: "We donated the Golden GameSphere to a well-known gaming museum. It was well-received by many people, and we gained 10,000 fans!",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans(10000);
			company.notifications.push(n);
			return;
		}
		if (decision === 2) {

			var n = new Notification({
				header: "The Golden GameSphere".localize(),
				text: "We added the Golden GameSphere to our company's console collection and received a 50,000 cr. reward from Ninvento for finding it!",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(50000, "The Golden GameSphere");
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(GoldenGameSphereEvent);

// Adding 'ExcitedFans'
// -----------------------------------------------------------

var ExcitedFansEvent = {
	id: "ExcitedFans",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel == 1 && company.isGameProgressBetween(0.5, 0.9) && company.gameLog.length >= 2;
	},
	getNotification: function (company) {
		var game = company.currentGame;

		var msg = "During the development of your latest game, {0}, fans in your city have been visiting your garage quite often to get a sneak peek at your creation. With the game now nearing completion, you have the opportunity to make them excited. {n} You could invite them over to your garage and have a little party, or alternatively you could send them a copy straight to their homes. Doing this may allow your fans to engage with your work but also can elevate the hype surrounding your game's release."
			.localize().format(game.title);

		return new Notification({
			sourceId: "ExcitedFans",
			header: "Excited fans".localize(),
			text: msg,
			options: ["Let's go party.", "I'll send them a demo."]
		});
	},
	complete: function (decision) {


		var company = GameManager.company;

		if (decision === 0) {
			
			var n = new Notification({
				header: "Excited Fans".localize(),
				text: "You invited them to try out your new game and had a party, and they really liked it. They'll share your game with their friends and wish you the best for this game.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(-1250, "Party");
			n.adjustHype(15 + 25 * company.getRandom());
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "Excited Fans".localize(),
				text: "You sent some demo copies to your fans. You had to pay $4200 for the copies, but for a good reason, as they really liked your game and will buy the full version once it's released.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(-4200, "Demo copies");
			n.adjustHype(20 + 35 * company.getRandom());
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(ExcitedFansEvent);

// Adding 'PayRespect'
// ----------------------------------------------------------- 

var PayRespectEvent = {
	id: "PayRespect",
	isRandomEvent: false,
	date: "24/7/2",
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel >= 1 && company.fans >= 200000;
	},
	getNotification: function (company) {

		var msg = "Recently, the gaming industry went into silence after it was announced that Ninvento CEO Sotoru Diwata passed away due to bile duct cancer. He was famous for being a great CEO and for having created successful sagas such as Pookieman, Kirbee and EarthBoundary. {n} Many companies in this industry are paying respect to Ninvento, giving condolences through the internet. I think we should too, boss.";

		return new Notification({
			sourceId: "PayRespect",
			header: "Industry News".localize(),
			text: msg,
			options: ["Pay respect.", "Say nothing"]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;

		if (decision === 0) {
			
			var n = new Notification({
				header: "Our condolences".localize(),
				text: "We payed respect to Ninvento, and they seem to appreciate it. Fans have liked our post too. Many think that comapnies in this industry are rivals, but in reality sometimes we put everything aside and respect each other.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 10) * company.getRandom(), "Satisfied fans");
			company.flags.good++;
			ghg4.ghg5("good");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			
			var n = new Notification({
				header: "Our condolences".localize(),
				text: "We didn't talk about the happening, and fans didn't like it. They now think we are heartless.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 20) * -1, "Dissatisfied fans");
			company.flags.evil++;
			ghg4.ghg5("evil");
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(PayRespectEvent);

// Adding 'DomainSquatters'
// ----------------------------------------------------------- 

var DomainSquattersEvent = {
	id: "DomainSquatters",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel >= 3 && company.fans >= 200000 && company.staff.length > 1;
	},
	getNotification: function (company) { 
		var domainprice = company.cash / 8;
		var staff = company.staff.skip(1).pickRandom();
		var msg = "The internet has become an effective platform for promoting our company's works. Think about it: we could share our latest games online and do discounts on them, and that could lead to an increase in our sales! We could invest in this market, but unfortunately someone already bought the domain we were planning to use. {n} After getting in contact with these domain squatters, we discovered that they want us to pay a whopping {0} cr. for getting this domain! We could consider pursuing action under the new DMCA regulations, or we may choose to explore alternative options.".localize().format(UI.getShortNumberString(domainprice));
		return new Notification({
			sourceId: "DomainSquatters",
			header: staff.name,
			text: msg,
			options: ["DMCA, take 'em down!", "Just buy another domain.", "Internet? Sounds horrible."]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
        var newprice = (company.cash / 12) * company.getRandom();
		if (decision === 0) {
			
			var n = new Notification({
				header: "Law talks".localize(),
				text: "We instructed our Legal Team to issue a DMCA takedown to these domain squatters. They promptly surrendered the domain and paid 125,000$.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(125000, "DMCA");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			
			var n = new Notification({
				header: "New domain".localize(),
				text: "We decided to let them be and purchased a new domain. Our site is already up, but it cost us {0} cr.".localize().format(UI.getShortNumberString(newprice)),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(newprice * -1, "New domain");
			company.notifications.push(n);
			return;
		}
		if (decision === 2) {
			
			return;
		}
	}
};

GDT.addEvent(DomainSquattersEvent);

// Adding 'PlaySystemAact'
// -----------------------------------------------------------

var PlaySystemAact = {
	id: "PlaySystemAact",
	isRandomEvent: false,
	date: "27/2/2",
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel >= 3 && company.gameLog.length >= 25;
	},
	getNotification: function (company) {
        var platformcount = company.licencedPlatforms.length;
		var msg = "After more than 20 years from its cancellation, a prototype of the Ninvento PlaySystem was found. This console, made by Ninvento and Vonny thanks to a market patnership back in the 90s, would be the first console in the world that used CD-ROM media. But unfortunately, this platform has never seen the sunlight. {n} This prototype will be auctioned next week, at a starting price of 15k cr., but the auction could quickly exceed to 350k within days! {n} Our company is very famous for the collection of video game consoles, counting over {0} platforms. We suggest you to buy this piece of history, so we ask you. Would you be interested in paying a whopping 500k cr. to buy this piece of videogaming history?";

		return new Notification({
			sourceId: "PlaySystemAact",
			header: "Industry News".localize(),
			text: msg.localize().format(platformcount),
			image: "./images/platforms/superb/PlaysystemA.png",
			options: ["Just take my money!", "No, thanks."]
		});
	},
	complete: function (decision) {


		var company = GameManager.company;
        var staff = company.staff.pickRandom();
		
			
		if (decision === 0) {
			
			var n = new Notification({
				header: "Industry News".localize(),
				text: "We just discovered {0} just bought the latest prototype of the Ninvento PlaySystem that was auctioned last week for 500k cr. {n} {1}, one of their employers, had to say this: 'A month ago we discovered that Ninvento's PlaySystem, a piece of history for our industry, would be put up for auction.'{n}'After some hesitation, we are happy to announce that we have won the auction. This prototype will be placed in our museum and any fan can easily go here to see it live.'".localize().format(company.name, staff.name),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			company.adjustCash(-500000, "Playsystem");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "Industry News".localize(),
				text: "Recently, the Ninvento PlaySystem was auctioned and was sold for 360k cr. The fan who bought this piece of history decided to display it in his large video game console museum.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(PlaySystemAact);

// Adding 'KirbeeTroll'
// ----------------------------------------------------------- 

var KirbeeTrollEvent = {
	id: "KirbeeTroll",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel >= 3 && 1 < company.staff.length && company.isGameProgressBetween(0.4, 0.7) && company.fans >= 800000;
	},
	getNotification: function (company) { 
		var game = company.currentGame;
		var staff = company.staff.skip(1).pickRandom();
		var msg = "Boss, some hackers gained access to our servers and obtained a copy of our unfinished game, {0}. They are now threatening to release our entire project online! This could create a negative impression among our fans, especially since the game is still unfinished. We stand to lose a significant amount of money. {n} What makes this situation crazier is that these hackers are actually Ninvento fans who are challenging us to draw a perfectly shaped Kirbee, one of Ninvento's mascots, using only our hands and painting, no tools or apps allowed. They claim that if we won, they won't release our game online. {n} This seem like a ridiculous challenge, considering they have half a million dollars' worth of files in their hands, and they are clearly underestimating the talent of our artists. On the other hand, this could also be an opportunity to gain attention from fans worldwide. Alternatively, we could focus on tracking them down and bringing them to justice, but there’s a chance they might strike again in the future. The choice is yours.".localize().format(game.title);
		return new Notification({
			sourceId: "KirbeeTroll",
			header: staff.name,
			text: msg,
			options: ["Get your canvas.", "Nahh, it's not worth the risk."]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
        var game = company.currentGame;
		var staff = company.staff.skip(1).pickRandom();
		var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
		
		var chance = 2 * company.getRandom();
		
		var trolls = ['4leaf', 'Chirper', 'Reddot', 'Tummler', 'somethingdisgusting.gdt', 'Newfields', 'ACpad', 'WuuVerse'];
		var randomTrolls = trolls.pickRandom();
		
		if (decision === 0) {
			var msg = "";
			if (chance > 0.3) {
			msg += "Boss, the challenge was a success! The hackers, teenage artists and former {0} users, were completely annihilated by our pixel-perfect Kirbee. They were also intercepted by the FBI, so we probably won't hear from them for a long time! {1} is now safe and fans loved the whole drama, I stopped one on my way home from work and he seemed proud to be our fan!".localize().format(randomTrolls, game.title);
			}
			else {
			msg += "Boss, I still can't believe it, but unfortunately we lost the challenge against the hackers. They probably used tools to make their pixel-perfect Kirbee, but it doesn't matter, as they were tracked down by FBI. {0} is safe. The whole media is laughing at us right now.".localize().format(game.title);
			}
			var n = new Notification({
				header: staff.name,
				text: msg,
				weeksUntilFired: 1 * company.getRandom()
			});
			n.adjustFans((company.fans / 6) * company.getRandom(), "Challenge");
			n.adjustCash((company.cash / 8) * company.getRandom(), "DMCA");
			company.flags.good++;
			ghg4.ghg5("good");
			company.flags.secrecy--;
			DataStore.data.challengeAccepted = true
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var msg = "Boss, we decided to sue the hackers ";
			if (chance > 0.4) {
			msg += "and they were recently tracked by FBI. {0} is now safe, but a lot of fans definitely didn't like it and would have appreciated it more if we had entertained them.".localize().format(game.title);
			}
			else {
			msg += "but they weren't found. We don't know if {0} is safe from leaking, and fans definitely didn't appreciate our reaction.".localize().format(game.title);
			}
			var n = new Notification({
				header: staff.name,
				text: msg,
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			if (chance > 0.4) {
			n.adjustCash((company.cash / 6) * company.getRandom(), "DMCA");
			n.adjustFans((company.fans / 8) * -1, "DMCA");
			}
			else {
			n.adjustFans((company.fans / 8) * -1, "DMCA");
		    }
			company.flags.evil++;
			ghg4.ghg5("evil");
			company.flags.secrecy++;
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(KirbeeTrollEvent);

// Adding 'PlatformBroke'
// ----------------------------------------------------------- 

var PlatformBrokeEvent = { 
	id: "PlatformBroke",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		return 1 < company.staff.length && company.isGameProgressBetween(0.4, 0.7) && company.cash >= 800000;
	},
	getNotification: function (company) { 
		var game = company.currentGame;
		this.damage = 50000 + 85000 * (company.getRandom());
		var staff = company.staff.skip(1).pickRandom();
		var msg = "Boss, while developing our latest game {0}, unfortunately the {1} we used to playtest our game broke. We had to pay {2} cr. of damages and buy them all again.".localize().format(game.title, game.platforms[0].name, UI.getShortNumberString(this.damage));
		
		this.damageAmount = this.damage; //TO-DO: Is this even necessary

		return new Notification({
			sourceId: "PlatformBroke",
			header: staff.name,
			text: msg,
			buttonText: ":-("
		});
	},
	complete: function () {
		var company = GameManager.company;
		var damage = this.damageAmount;
		company.adjustCash(-damage, "New platforms");
	}
};


GDT.addEvent(PlatformBrokeEvent);

// Adding 'GameBanned'
// ----------------------------------------------------------- 

var GameBannedEvent = {
	id: "GameBanned",
	isRandomEvent: true,
	maxTriggers: 1,
	    trigger: function (company) {
        // Fix operator precedence with parentheses
        return (
            company.currentLevel >= 1 && company.currentGame && (company.isGameProgressBetween(0.2, 0.7) && company.currentGame.designPoints >= 150 || company.currentGame.technologyPoints >= 150 && company.currentGame.genre === "Horror" || company.currentGame.genre === "Action") && company.cash >= 5000000 && company.fans >= 200000
        );
    },
	getNotification: function (company) { 
		var game = company.currentGame;
		// Random countries for the event
		var countries1 = ['France', 'Italy', 'Germany', 'Spain']; // I'll divide them in three arrays based on popularity
		var countries2 = ['Portugal', 'Belgium', 'Netherlands']; // Also because skip doesn't work
		var countries3 = ['Poland', 'Austria', 'Denmark', 'Greece'];
		// Random chance
		var chance = 2 * company.getRandom();

		// Pick random countries for the notification
		var country1 = countries1.pickRandom();
		var country2 = countries2.pickRandom();
		var country3 = countries3.pickRandom();

        // Message
		var msg = "Boss, {0}, our {1} / {2} game, has been banned in some European countries, such as {3}".localize().format(game.title, game.topic.name, game.genre.name, country1);
		
		if (chance > 0.8) {
			msg += ", {0}".localize().format(country2);
		}
		if (chance > 0.5) {
			msg += " and {0}".localize().format(country3);
		}

		msg += ". Their governments have stated that the game is graphically and gameplay-wise too realistic and therefore not suited for their nation's playerbase and we won't be able to sell our game there unless we censor it. {n} Missing out on these markets can be devastating for our sales! Our legal department suggests to appeal to the European Court, but this might take a while and cost a lot of money, and there's no guarantee we'll ever win. {n} Alternatively, we can censor our game and reduce realisticity. Even better, we can reunite our fans to protest in the front of EU headquarters. what shall be done?";

		return new Notification({
			sourceId: "GameBanned",
			header: "Industry News".localize(),
			text: msg,
			options: ["Go to court.", "Limit your engine.", "Call our fans!"]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
        var game = company.currentGame;
		var chance = 5 * company.getRandom();
		
		if (decision === 0) {

			var msg = "We have appealed to the European Court to ensure the sale of {0} in banned countries, ";
			
			if (chance >= 2) {
				msg += "and we surprisingly won! Not only out game will be sold in the countries where it was banned without censorship, but we will also be compensated all the costs.";
			}
			else {
				msg += "but we still lost. Luckily they allowed our game to be sold with a lot of censorship, but it cost us a lot.";
			}
			var n = new Notification({
				header: "Law speaks".localize(),
				text: msg.localize().format(game.title),
				weeksUntilFired: 2 * company.getRandom()
			});
			if (chance >= 2) {
				n.adjustCash(1200000 + 500000 * company.getRandom(), "Court case");
			}
			else {
				n.adjustCash((1000000 + 250000 * company.getRandom()) * -1, "Court case");
				game.designPoints -= (40 + 60) * company.getRandom();
				game.technologyPoints -= (30 + 50) * company.getRandom();
			}
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			
			var n = new Notification({
				header: "Censorship".localize(),
				text: "We decided to censor our game to avoid troubles, but we had to lose technological and design points.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			company.notifications.push(n);
			game.designPoints -= (20 + 30) * company.getRandom();
			game.technologyPoints -= (10 + 20) * company.getRandom();
			return;
		}
		if (decision === 2) {

			var msg = "We gathered all the fans in front of the EU headquarters to make ourselves heard about {0},";
			
			if (chance >= 2) {
				msg += " and they gave up! Our game will be sold in their countries uncensored. We also gained fans.";
			}
			else {
				msg += " but unfortunately they didn't change their mind. At least we gained fans but we had to pay for the damages caused. Our game will also be censored.";
			}
			var n = new Notification({
				header: "Fans speak".localize(),
				text: msg.localize().format(game.title),
				weeksUntilFired: 1 * company.getRandom()
			});
			if (chance >= 2) {
				n.adjustFans((company.fans / 5) * company.getRandom(), "Court case");
				n.adjustHype(55 + 85 * company.getRandom());
			}
			else {
				n.adjustCash((800000 + 400000 * company.getRandom()) * -1, "Court case");
				n.adjustFans((company.fans / 10) * company.getRandom(), "Court case");
				n.adjustHype(25 + 45 * company.getRandom());
				game.designPoints -= (10 + 20) * company.getRandom();
				game.technologyPoints -= (10 + 10) * company.getRandom();
			}
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(GameBannedEvent);

// Adding 'Y2Kbug'
// ----------------------------------------------------------- 

var Y2KBugEvent = {
	id: "Y2KBug",
	isRandomEvent: false,
	date: "11/1/1",
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel >= 2 && 1 < company.staff.length && company.cash >= 500000 && company.researchPoints >= 100;
	},
	getNotification: function (company) { 
		
		var msg = "The whole word is on edge about a potential bug that may arise in the coming millennium. Due to computer systems utilizing two digits to store years, there is a chance that the year 2000 could be mistakenly recognized as 1900. {n} This could lead to significant issues, especially within the banking sector! We must take action and upgrade our computers to avoid any potential disaster, we leave the choice up to you.".localize();
		return new Notification({
			sourceId: "Y2KBug",
			header: "Industry News".localize(),
			text: msg,
			options: ["Ugh, fine.", "No way this is real!"]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
		var chance = 2 * company.getRandom();
		
		if (decision === 0) {
			var msg = "We upgraded our own computers to Windoors Millennium Edition, ";
		    
			if (chance >= 2) {
				msg += "and it turns out we did the right choice. Thousands of computers in larger systems have experienced malfunctions and crashed, leaving a lot of data losses.";
			}
			else {
				msg += "but it turns out that our computers were already prepared to fight the bug.";
			}
			
			var n = new Notification({
				header: "Industry News".localize(),
				text: msg.localize(),
				weeksUntilFired: 1 * company.getRandom()
			});
			n.adjustCash((15000 + 25000 * company.getRandom()) * -1, "Upgrade");
			company.flags.good++;
			ghg4.ghg5("good");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var OperatingSystems = ['Windoors 95', 'Windoors 98', 'Windoors 3.1', 'MS-BOSS'];
			var PCos = OperatingSystems.pickRandom();
			var msg = "We decided not to upgrade our operating systems, ";
		    
			if (chance >= 2) {
				msg += "and it looks like our systems are already prepared for this problem. However, it wouldn't have hurt to upgrade, since our computers are still running sloppy {0}.".localize().format(PCos);
			}
			else {
				msg += "and it was a very bad choice. Our banking systems were reset and we suffered from research and data losses. Thanks for nothing.".localize().format();
			}
			var n = new Notification({
				header: "Industry News".localize(),
				text: msg,
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash((150000 + 250000 * company.getRandom()) * -1, "Y2K Bug");
			company.researchPoints -= (20 + 40) * company.getRandom();
			company.flags.evil++;
			ghg4.ghg5("evil");
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(Y2KBugEvent);

// Adding 'FakePlatformLicense'
// ----------------------------------------------------------- 

var FakePlatformLicenseEvent = {
	id: "FakePlatformLicense",
	isRandomEvent: false,
	date: "24/3/1",
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel >= 2 && 1 < company.staff.length && company.cash >= 500000
	},
	getNotification: function (company) { 
		
		var msg = "The whole internet has virtually exploded with anticipation due to a company known as 'MGG Gaming' announcing a new console designated the MGG Box. {n} The MGG Box possesses some of the most impressive hardware to date, significantly less expensive but more powerful than the PlaySystem 3 and mBox 360. The case is a collage of the internet's most iconic memes and the system software 'Epik Geimer System' is capable of recognizing the player's actions in game such as killing an enemy and plays a meme SFX. {n} MGG Gaming has also sent out several early development license offers to various industry players who are considering the console. Our company is among them, but boss, if I'm honest, this situation really stinks to me. I question the authenticity of the console, but it's up to you whether you play along or not. We don't know the cost of the license, though.".localize();
		return new Notification({
			sourceId: "FakePlatformLicense",
			header: "Industry News".localize(),
			text: msg,
			image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/MGG Box.png",
			options: ["Let's goooo!", "Nice try, internet!"]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
		
		var companies = ['Electronic Mass Productions', 'ActiveVisionaries', 'Rockville Softworks', 'CapeCom'];
		var companies2 = ['Crank', 'Deep Platinum', 'LoWood Productions', 'TGQ'];
		var randomCompany = companies.pickRandom();
		var randomCompany2 = companies2.pickRandom();
		
		var trolls = ['4leaf', 'Chirper', 'Reddot', 'Tummler', 'somethingdisgusting.gdt', 'Newfields', 'ACpad', 'WuuVerse'];
		var randomTrolls = trolls.pickRandom();
		
		if (decision === 0) {
			var msg = "The internet is mocking companies such as {0} and {1} who were naive enough to attempt to acquire a license for a console that never existed to begin with. The culprits appear to have been users of {2}, and although police is currently still investigating, they seem unable to track them down at this point in time. The internet's rather humorous nature has resulted in many fans appreciating the outcome.";				
			var n = new Notification({
				header: "Industry News".localize(),
				text: msg.localize().format(company.name, randomCompany, randomTrolls),
				image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/MGG Box.png",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash((150000 + 250000 * company.getRandom()) * -1, "Fake License");
			n.adjustFans((company.fans / 12) * company.getRandom(), "Fake License");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var msg = "The internet is mocking companies such as {0} and {1} who were naive enough to attempt to acquire a license for a console that never existed to begin with. The culprits appear to have been users of {2}, and although police is currently still investigating, they seem unable to track them down at this point in time. The internet's rather humorous nature has resulted in many fans appreciating the outcome.";		
			var n = new Notification({
				header: "Industry News".localize(),
				text: msg.localize().format(randomCompany, randomCompany2, randomTrolls),
				image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/MGG Box.png",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(FakePlatformLicenseEvent);

// Adding 'SpyWareRumors'
// ----------------------------------------------------------- 

// Lore stuff for random events
var trolls = ['4leaf', 'Chirper', 'Reddot', 'Tummler', 'somethingdisgusting.gdt', 'Newfields', 'ACpad', 'WuuVerse'];
var randomTrolls = trolls.pickRandom();
		
var site = ['RedTube', 'Chirper'];
var randomSite = site.pickRandom();
		
var SpyWareRumors = {
	id: "SpyWareRumors",
	isRandomEvent: true,
	maxTriggers: 1,
	    trigger: function (company) {
        return (
            company.currentLevel >= 2 && 1 < company.staff.length && company.gameLog.last() &&
            ( company.gameLog.last().topic.name === "Virtual Pet" && company.gameLog.last().platforms[0].id === "grPhone" || company.gameLog.last().platforms[0].id === "grPad" || company.gameLog.last().platforms[0].id === "Universe" || company.gameLog.last().platforms[0].id === "Universe Tab" && company.cash >= 5000000 && company.fans >= 200000)
        );
    },
		
	getNotification: function (company) { 
		var game = company.gameLog.last();
		var staff = company.staff.skip(1).pickRandom();
		var chance = 2 * company.getRandom();

        // Message
		var msg = "Boss, a social media storm has started after some {0} users accused {1}, our {2} / {3} game, of being a spyware. They also made a 'proof' video on {4}, hilariously edited with scary figures that aren't part of the game at all. This will probably impact the reputation of our game and fans will have a negative reaction! How do we even react to this?".localize().format(randomTrolls, game.title, game.topic.name, game.genre.name, randomSite);
		return new Notification({
			sourceId: "SpyWareRumors",
			header: staff.name,
			text: msg,
			options: ["Use the ban hammer.", "Just Internet being Internet."]
		});
		msg.adjustFans(((company.fans / 20) * company.getRandom()) * -1, "Dissatisfied Fans");
	},
	complete: function (decision) {

		var company = GameManager.company;
        var game = company.gameLog.last();
		var staff = company.staff.skip(1).pickRandom();
		var chance = 5 * company.getRandom();
		
		if (decision === 0) {

			var msg = "We have tried to take down creepy videos about {0} on {1} platform, and we explained to the press that this is all a hoax";
			
			if (chance >= 2) {
				msg += ". Hopefully we won't have problems with those trolls ever again.";
			}
			else {
				msg += ", yet they didn't believe us at all. Our game is currently under investigation. I can't believe it.";
			}
			var n = new Notification({
				header: staff.name,
				text: msg.localize().format(game.title, randomSite),
				weeksUntilFired: 2 * company.getRandom()
			});
			if (chance >= 2) {
				n.adjustFans(((company.fans / 15) * company.getRandom()), "Satisfied Fans");
				company.flags.good++;
			    ghg4.ghg5("good");
			}
			else {
				n.adjustCash((10000 + 25000 * company.getRandom()) * -1, "Investigation");
				n.adjustFans(((company.fans / 20) * company.getRandom()) * -1, "Dissatisfied Fans");
				company.flags.evil++;
			    ghg4.ghg5("evil");
			}
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var msg = "Boss, it seems that our silence about the {0} rumors has caused further suspicion. Now the fans think we are scumbags, and also the police will investigate our game.";
			var n = new Notification({
				header: staff.name,
				text: msg.localize().format(game.title),
				weeksUntilFired: 2 * company.getRandom()
			});
				n.adjustCash((20000 + 35000 * company.getRandom()) * -1, "Investigation");
				n.adjustFans(((company.fans / 20) * company.getRandom()) * -1, "Dissatisfied Fans");
				company.flags.evil++;
			    ghg4.ghg5("evil");
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(SpyWareRumors);

// Adding 'Strike against Boss'
// ----------------------------------------------------------- 

var StrikeAgainstBoss = {
  id: "StrikeAgainstBoss",
  isRandomEvent: true,
  maxTriggers: 1,
	    trigger: function (company) {
        return (
            company.currentLevel >= 2 && company.gameLog.last().score < 4.75 && 3 < company.staff.length && company.flags.evil
        );
    },
  getNotification: function (company) {
    
    // Staff
    var rebel1 = company.staff[1];
    var rebel2 = company.staff[2];
    var supporter = company.staff[3];
    var game = company.gameLog.last();

    var msg = "Boss, {0} and {1} haven't been showing up for work lately. I contacted them and found out that they've gone on strike against you, claiming they're tired of working for you because they feel you're not listening them. {n} They seem to be quite tired of working for you, especially after the last flop of {2}, and are seeing further job opportunities in other companies. {n} I know all the struggles we've been facing, and for now I have sided with you, knowing you better I know we can find a solution. They are asking for a higher salary, but you can also make peace up and convince them to return without problems.".localize().format(rebel1.name, rebel2.name, game.title);

    return new Notification({
      sourceId: "StrikeAgainstBoss",
      header: supporter.name,
      text: msg,
      options: ["They can work for someone else then.", "Money is the key.", "Let's talk."]
    });
  },
  complete: function (decision) {
    var company = GameManager.company;
    var rebel1 = company.staff[1];
    var rebel2 = company.staff[2];
    var supporter = company.staff[3];

    var companies = ['Electronic Mass Productions', 'ActiveVisionaries', 'Rockville Softworks', 'CapeCom', 'Crank', 'LoWood Productions'];
    var randomCompany = companies.pickRandom();

    if (decision === 0) {
      var msg = "Listen here boss, \n We all found your decision to fire them quite rude, so I decided to quit too! This has been one of the worst companies in my career, and we can't wait to work for {0}. I'm also telling your fans about this. Thanks for nothing.";
      var n = new Notification({
        header: supporter.name,
        text: msg.localize().format(randomCompany),
        weeksUntilFired: 0 * company.getRandom()
      });
      n.adjustFans(((company.fans / 15) * company.getRandom()) * -1, "Satisfied Fans");

      // Fire the staff members
      rebel1.fire();
      rebel2.fire();
      supporter.fire();

      // Fire event logs
      GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: rebel1 });
      GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: rebel2 });
      GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: supporter });

      // Add notification
      company.notifications.push(n);
    }
    if (decision === 1) {
      var msg = "After a long deliberation, {0} and {1} have decided to increase their salary by {2} and {3} respectively.";
      
      var num = 3000 + 7500 * company.getRandom();
  
      var ogsalary1 = rebel1.salary;
      var ogsalary2 = rebel2.salary;
      var newsalary1 = ogsalary1 + num * company.getRandom();
      var newsalary2 = ogsalary2 + num * company.getRandom();
  
      var n = new Notification({
        header: supporter.name,
        text: msg.localize().format(rebel1.name, rebel2.name, UI.getShortNumberString(newsalary1 - ogsalary1), UI.getShortNumberString(newsalary2 - ogsalary2)),
        weeksUntilFired: 0 * company.getRandom()
      });

      rebel1.salary = newsalary1;
      rebel2.salary = newsalary2;

      company.notifications.push(n);
    }
    if (decision === 2) {
        var chance = 1 + 3 * company.getRandom();
        var finalchance = chance;
        var msg = "After we all gathered and discussed for hours,";

        if (finalchance > 2.5) {
            msg += " you, {0} and {1} made peace, clearing yourselves. Now there is a good atmosphere here in our office and we are optimistic about our future.".localize().format(rebel1.name, rebel2.name);
            var n = new Notification({
                header: supporter.name,
                text: msg.localize().format(),
                weeksUntilFired: 0 * company.getRandom()
            });
            company.notifications.push(n);
            // Nothing happens
        }
        else if (finalchance > 2 && finalchance < 2.5) {
            var num = 1000 + 4500 * company.getRandom();
            var ogsalary1 = rebel1.salary;
            var ogsalary2 = rebel2.salary;
            var newsalary1 = ogsalary1 + num;
            var newsalary2 = ogsalary2 + num;

            msg += " {0} and {1} have decided to continue working for you only after a small salary increase of {2}.".localize().format(rebel1.name, rebel2.name, UI.getShortNumberString(newsalary1 - ogsalary1));
            var n = new Notification({
                header: supporter.name,
                text: msg.localize().format(),
                weeksUntilFired: 0 * company.getRandom()
            });
            company.notifications.push(n);

            rebel1.salary = newsalary1;
            rebel2.salary = newsalary2;
        }
        else {
            msg += " unfortunately ";
			
            if (finalchance < 1.8) {
                msg += "{0}".localize().format(rebel1.name);
            } else if (finalchance > 1.8) {
            msg += "{0}".localize().format(rebel2.name);
			
            } else {
               msg += "they both";
            }
			
            msg += " decided to stop working for you. But well, at least we tried.";
			
            var n = new Notification({
                header: supporter.name,
                text: msg.localize().format(),
                weeksUntilFired: 0 * company.getRandom()
            });
            company.notifications.push(n);
            if (finalchance < 1.8) {
                rebel1.fire();
			
            GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: rebel1 }); 
            } else if (finalchance > 1.8) {
                rebel2.fire();
			
            GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: rebel2 });
            } else {
			
            rebel1.fire();
            rebel2.fire();
		
            GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: rebel1 });
            GDT.fire(GDT.eventKeys.gameplay.staffFired, { character: rebel2 });
		
        }
    }
}

  }
};

GDT.addEvent(StrikeAgainstBoss);

// Adding 'Original names for Game Dev game'
// ----------------------------------------------------------- 

var OGnamesForGameDevGame = {
  id: "OGnamesForGameDevGame",
  isRandomEvent: true,
  maxTriggers: 1,
  trigger: function (company) {
    return (
    company.currentLevel >= 1 && company.staff.length > 1 && company.isGameProgressBetween(0.1, 0.6) && company.currentGame && ( company.currentGame.topic.name === "Game Dev" )
    );
  },
  getNotification: function (company) {
    var staff = company.staff.skip(1).pickRandom();
    var cost = 20000 + 40000 + (company.cash / 14);
    var game = company.currentGame;

    var msg = "Hey boss, \n I was thinking that we could use official platform names for our new {0} / {1} title. I contacted some companies and concluded that it would cost us {2}.";

    return new Notification({
      sourceId: "OGnamesForGameDevGame",
      header: staff.name,
      text: msg.localize().format(game.topic.name, game.genre.name, UI.getShortNumberString(cost)),
      options: ["Do it!", "Nah."]
    });
  },
  complete: function (decision) {
	  
	var company = GameManager.company;
	var staff = company.staff.skip(1).pickRandom();
	var cost = 20000 + 40000 + (company.cash / 20);
	var game = company.currentGame;
	
    if (decision === 0) {
      var msg = "Thank you boss! \nWe'll keep working on this game.";
      var n = new Notification({
        header: staff.name,
        text: msg.localize(),
        weeksUntilFired: 0 * company.getRandom()
      });
      n.adjustCash(cost * -1, "Licensing");
	  game.designPoints += (10 + 20) * company.getRandom();
      company.notifications.push(n);
    }
    if (decision === 1) {
    // nothing
    }
  }
};


GDT.addEvent(OGnamesForGameDevGame);

// Adding 'Game to local Arcade'
// ----------------------------------------------------------- 

var GametolocalArcade = {
  id: "GametolocalArcade",
  isRandomEvent: true,
  maxTriggers: 1,
  trigger: function (company) {
  return (
      company.currentLevel <= 2 && company.fans < 10000 && company.gameLog.last()
  );
  },
  getNotification: function (company) {
    var boss = company.staff[0];
	var arcadeplaces = ["Junky nd' Cheesy", "Neon", "Level Up", "Pizza & Game", "Tokyo", "Vaporwave"];
    var game = company.gameLog.last();
    this.pay = game.costs + 20000 + 40000 + (company.cash / 12);
	
    var msg = "Greetings {0}, \n I am a representative of the popular {1} arcade place loctated in your town. ";
	
	if (game.score >= 4.75) {
	msg += "We have admittedly been quite impressed by your new title, {2},";
    } 
	else {
	msg += "We have played your newest title, {2}, and it shows a lot of potential";
    }
	
	msg += " and we're highly interested in adding it to our arcade roster. We'll offer you {3} to buy licenses and we will create a port of it for our machines.";
	
    return new Notification({
      sourceId: "GametolocalArcade",
      header: "Proposal",
      text: msg.localize().format(boss.name, arcadeplaces.pickRandom(), game.title, UI.getShortNumberString(this.pay)),
      options: ["Alright!", "No, thanks."]
    });
  },
  complete: function (decision) {
	  
	var company = GameManager.company;
    var boss = company.staff[0];
    var game = company.gameLog.last();
    var pay = this.pay;
	
    if (decision === 0) {
      var msg = "Thank you. \n It was truly a pleasure doing business with you.";
      var n = new Notification({
        header: "Proposal",
        text: msg.localize(),
        weeksUntilFired: 0 * company.getRandom()
      });
      n.adjustCash(pay, "Arcade License");
	  if (game.score <= 4.75) {
      n.adjustFans(((company.fans / 12) * company.getRandom()) * -1, "Dissatisfied Fans")
      } 
	  else {
      n.adjustFans(((company.fans / 12) * company.getRandom()), "Satisfied Fans")
      } 
      company.notifications.push(n);
    }
    if (decision === 1) {
      var msg = "No worries, \n thanks for your time anyway.";
      var n = new Notification({
        header: "Proposal",
        text: msg.localize(),
        weeksUntilFired: 0 * company.getRandom()
      });
      company.notifications.push(n);
    }
  }
};


GDT.addEvent(GametolocalArcade);

// Adding 'Anti Piracy Sponsor'
// ----------------------------------------------------------- 

var AntiPiracySponsor = {
  id: "AntiPiracySponsor",
  isRandomEvent: true,
  maxTriggers: 1,
  trigger: function (company) {
  return (company.currentLevel <= 2 && company.fans > 5000 && company.isGameProgressBetween(0.2, 0.8) && company.currentGame && ( company.currentGame.topic.name === "Crime" || company.currentGame.topic.name === "Thief" || company.currentGame.topic.name === "Technology" || company.currentGame.topic.name === "Pirate" || company.currentGame.topic.name === "Law" || company.currentGame.topic.name === "Game Dev" || company.currentGame.topic.name === "Hacking" )
);

  },
  getNotification: function (company) {
    var boss = company.staff[0];
    var game = company.currentGame;
    var pay = (company.cash / 10) + 80000;
	
    var msg = "Hello {0}, \n this is the local city police department. We've heard that you are currently working on a {1} / {2} game. We are under the impression that your game has potential to educate your audience on digital piracy and we hereby offer you {3} cr. to implement an anti-piracy sponsor into your game.";
	
	
    return new Notification({
      sourceId: "AntiPiracySponsor",
      header: "Anti-Piracy Proposal",
      text: msg.localize().format(boss.name, game.topic.name, game.genre.name, UI.getShortNumberString(pay)),
      options: ["Sounds good!", "No, thanks."]
    });
  },
  complete: function (decision) {
	  
	var company = GameManager.company;
    var boss = company.staff[0];
    var game = company.currentGame;
    var pay = (company.cash / 10) + 80000;
	
    if (decision === 0) {
      var msg = "Thank you, {0}! \n This may make mad some fans, but it doesn't really matter, as they need to realize what piracy can do to developers. The money will arrive soon.";
      var n = new Notification({
        header: "Anti-Piracy Proposal",
        text: msg.localize().format(boss.name),
        weeksUntilFired: 0 * company.getRandom()
      });
      n.adjustCash(pay, "Anti-Piracy Sponsor");
      n.adjustFans(((company.fans / 10) + 5000 * company.getRandom()) * -1, "Dissatisfied Fans")
      company.notifications.push(n);
    }
    if (decision === 1) {
      var msg = "No worries, \n thanks for your time anyway.";
      var n = new Notification({
        header: "Anti-Piracy Proposal",
        text: msg.localize(),
        weeksUntilFired: 0 * company.getRandom()
      });
      company.notifications.push(n);
    }
  }
};


GDT.addEvent(AntiPiracySponsor);

// Adding 'Cockroaches in Office'
// ----------------------------------------------------------- 

var CockroachesInOffice = {
  id: "CockroachesInOffice",
  isRandomEvent: true,
  maxTriggers: 1,

  trigger: function (company) {
    return company.currentLevel >= 2 && company.staff.length > 2;
  },

  getNotification: function (company) {
	var staff = company.staff.skip(1).pickRandom();
    var msg = "Boss, \n our office is infested with cockroaches. Today, there was one so big on my desk that I literally mistook it for a mouse. I think we should do a thorough pest control because we all can't work in these conditions.";

    return new Notification({
      sourceId: "CockroachesInOffice",
      header: staff.name,
      text: msg.localize().format(),
      options: ["Take a day off tomorrow.", "No biggie."]
    });
  },

  complete: function (decision) {
    var company = GameManager.company;
    var staff = company.staff.skip(1).pickRandom();

    if (decision === 0) {
      var pay = (2000 + 4000 * company.getRandom())
      var msg = "Thank you, boss. \n I contacted a friend of mine and offered us a pest control for just {0}.";

      var n = new Notification({
        header: staff.name,
        text: msg.localize().format(UI.getShortNumberString(pay)),
		weeksUntilFired: 0 * company.getRandom()
      });

      n.adjustCash(pay * -1, "Pest control");
	  company.flags.good++;
      company.notifications.push(n);
    }

    if (decision === 1) {
	  var pay = (3000 + 5000 * company.getRandom())
      var msg = "Boss, \n the cockroaches situation got out of hand. Just yesterday I saw some of them literally living in my computer, and they broke my secondary hard drive and motherboard. \n I'll do the pest control by myself, but you'll repay the damages.";

      var n = new Notification({
        header: staff.name,
        text: msg.localize().format(UI.getShortNumberString(pay)),
		weeksUntilFired: 2 * company.getRandom()
      });
      n.adjustCash(pay * -1, "Repay");
	  company.flags.evil++;
      company.notifications.push(n);
    }
  }
};

GDT.addEvent(CockroachesInOffice);

// Adding 'DevVSplayer'
// ----------------------------------------------------------- 

var DevVSplayer = {
  id: "DevVSplayer",
  isRandomEvent: true,
  maxTriggers: 1,

  trigger: function (company) {
    return company.currentLevel >= 3 && company.cash >= 100000000 && company.fans > 50000 && company.staff.length > 1 && company.gameLog.last();
  },

  getNotification: function (company) {
	var staff = company.staff.skip(1).pickRandom();
	var randomLiked = ["especially the controls", "especially the graphics", "especially the lore", "although a lil too easy", "I probably overlooked it"];
    var RandomDisliked = ["so much that I haven't slept", "so much that I failed my physics class", "so much that I broke my controller", "but I hate the ending", "but I absolutely hate the tutorials", "but the levels are too hard", "but there's too much grind", "but it took too much time", "but my friend pirated it and nobody did anything", "but some kid ratio'd me while playing"];
	var RandomGame = ["Quiver Deathmatch", "Mars", "Shake", "Real Tournament"];
	var FinalCatchPhrase = ["xXn00bslayerXx out. Get rekt noob!", "ninvento_fanboy99 out. Ninvento > {0} all day!".localize().format(company.name), "MGG_gaming out. Currently playing CA: Source.", "r3dk1d out. Join my team today!", "bread out. Relax and get urself a sandwich!", "xxTHEslaYer1984xx out. 1v1 me now." ];
    var msg = "Hey boss,\n while browsing socials I found out a fan who's really upset with our latest game, {0}, and has decided to challenge us to a deathmatch of his favorite game: if we win, we don't have to pay, or else we'll get a really hefty penalty. We can just ignore him, but accepting might put us at the center of the attention. {n} The mail goes like the following: \n Hey {1}! I really liked {0}, {2}, {3} and that absolutely ruined me!! So I regret playing this game and your dev team has to pay! Let's settle this on an ol' gud match of {4}. You win, you get fame. I win, I get repaid a dollar for every nanosecond spent on that game (played for 10 hours). Deal? \n -{5}";

    return new Notification({
      sourceId: "DevVSplayer",
      header: staff.name,
      text: msg.localize().format(company.gameLog.last().title, company.staff[0].name, randomLiked.pickRandom(), RandomDisliked.pickRandom(), RandomGame.pickRandom(), FinalCatchPhrase.pickRandom()),
      options: ["Prepare yourself.", "What? No!"]
    });
  },

  complete: function (decision) {
    var company = GameManager.company;
    var staff = company.staff.skip(1).pickRandom();
    var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
	
    if (decision === 0) {
      var pay = (1 * 1000 * 60 * 60 * 10 * (2 * company.getRandom())) // 1 * 1000 nanoseconds * 60 seconds * 60 minutes * 10 hours * random variation
	  var chance = (1 + 4 * company.getRandom())
      var msg = "You accepted the fan's challenge, we all reunited together for a deathmatch ";
	  
	if (chance >= 4) {
      msg += "and I think we taught him a lesson. He was literally annihilated by us, dying at least ten times. {n} As a result, he has to 100% every game we made. I think fans are really laughing at him right now."
    }
	else if (chance >= 3) {
	  msg += "and we won, although it was a bit hard and risky. We probably won't hear about him for a long time. {n} As a result, he has to make an apologize letter. I think fans are really enjoying the whole situation."
    }
	else {
	  msg += "but we quickly discovered he was a pro player. We quickly called it a day and left. {n} As a result, we have to pay {0}. I think fans are really laughing hard at us right now.".format(UI.getShortNumberString(pay))
    }
	
      var n = new Notification({
        header: staff.name,
        text: msg.localize().format()
      });
    if (chance >= 4) {
      n.adjustFans(10000 + 20000 * company.getRandom(), "Challenge");
    }
    else if (chance >= 3) {
      n.adjustFans(5000 + 12000 * company.getRandom(), "Challenge");
    }
    else {
	  n.adjustCash(pay * -1, "Challenge"); // This can come up to 72 million dollars... good luck recovering from this loss XD 
      n.adjustFans(1000 + 2000 * company.getRandom(), "Challenge");
    }
	  company.flags.good++;
	  DataStore.data.challengeAccepted = true
      company.activeNotifications.addRange(n.split());
    }

    if (decision === 1) {
	  var pay = (3000 + 5000 * company.getRandom())
      var msg = "Boss, \n the fan got even more angry when he found out we have ignored him. He said we were scared or something. I understand we can't risk losing millions of dollars over a deathmatch but some fans got kinda upset.";

      var n = new Notification({
        header: staff.name,
        text: msg.localize().format(),
		weeksUntilFired: 2 * company.getRandom()
      });
      n.adjustFans((1000 + 2000 * company.getRandom())* -1, "Challenge");
      company.notifications.push(n);
    }
  }
};

GDT.addEvent(DevVSplayer);

// Adding 'UpsetVideoGameGeek'
// ----------------------------------------------------------- 

var UpsetVideoGameGeek = {
  id: "UpsetVideoGameGeek",
  isRandomEvent: true,
  maxTriggers: 1,

  trigger: function (company) {
	var filteredGameLog = company.gameLog.filter(function(game) { return game.score < 5 && game.releaseWeek < 600 ; });
    return filteredGameLog.length > 0 && company.fans >= 10000 && company.isLaterOrEqualThan(16, 7, 1) && company.staff.length > 1;
  },

  getNotification: function (company) {
	var staff = company.staff.skip(1).pickRandom();
	var filteredGameLog = company.gameLog.filter(function(game) { return game.score < 5 && game.releaseWeek < 600 ; });
	var game = filteredGameLog.pickRandom();
	var RatherDo = ["eat a skunk", "drink five thousand beers in a row", "have a crocodile pin him down"];
    var msg = "Hey boss, while browsing the latest trending social network, RedTube, I saw a channel called {0} ironically making fun of one of our old games, {1}. I mean, he even said he'd rather {2} instead of playing this game! {n} Knowing its impact, we could simply forgive ourselves and laugh along with the creator, but since we spent a lot of time on it, I think it's also fair to ask for an apology. Alternatively, we can sue them.";

    return new Notification({
      sourceId: "UpsetVideoGameGeek",
      header: staff.name,
      text: msg.localize().format(company.isEarlierOrEqualThan(17, 7, 3) ? "The Upset Ninvento Geek" : "The Upset Video Game Geek", game.title, RatherDo.pickRandom()),
      options: ["Let's watch it.", "I'm truly offended.", "Bruh, counter attack."]
    });
  },

  complete: function (decision) {
    var company = GameManager.company;
    var staff = company.staff.skip(1).pickRandom();
	var chance = (1 + 4 * company.getRandom());
	  
    if (decision === 0) {
		
      var msg = "We decided to watch the video together and had a blast. Also, accepting that we've made a mistake is a very good and conscious thing to do."
	
      var n = new Notification({
        header: staff.name,
        text: msg.localize().format()
      });
	  company.flags.good++;
      company.activeNotifications.addRange(n.split());
    }

    if (decision === 1) {
		
      var msg = "Boss, our decision to ask an apologize was quite a terrible one. Jamie Rolf, the creator behind the video, laughed along with the fans. At least they thought we were playing along so we didn't screw up our reputation.";

      var n = new Notification({
        header: staff.name,
        text: msg.localize().format(),
		weeksUntilFired: 1 + 2 * company.getRandom()
      });
      n.adjustFans((400 + 800 * company.getRandom()));
      company.notifications.push(n);
    }
	
    if (decision === 2) {
		
      var msg = "We talked to our legal department and tried to take down the video, ";

    if (chance > 3) {
	  msg += "and strangely enough, we won, but the fans didn't quite like it. Even Jamie Rolf, the person behind the ironic video, now really hates our company and thinks we're party poopers."
    } else {
	  msg += "but apparently it falls within the scope of parody rights and there's no harassment. Also most veterans on this platform don't appreciate that we tried to take down an ironic video."
    } 
      var n = new Notification({
        header: staff.name,
        text: msg.localize().format(),
		weeksUntilFired: 1 + 2 * company.getRandom()
      });
	  if (chance > 3) {
	  n.adjustCash(12800 + 54300 * company.getRandom(), "Legal claims");
      n.adjustFans(800 + 1200 * company.getRandom() * -1);
	  } else {
	  n.adjustCash(22800 + 64300 * company.getRandom() * -1, "Legal claims");
      n.adjustFans(1000 + 1500 * company.getRandom() * -1);
	  }
      company.notifications.push(n);
    }
  }
};

GDT.addEvent(UpsetVideoGameGeek);

// Adding 'HarmlessGame'
// ----------------------------------------------------------- 

var HarmlessGame = {
  id: "HarmlessGame",
  isRandomEvent: true,
  maxTriggers: 1,

  trigger: function (company) {
    return company.currentLevel >= 2;
  },

  getNotification: function (company) {
    var msg = "While scrolling through your {0} inbox, you received an email containing a Space/Shooter scrolling game. Want to play it?";

    return new Notification({
      sourceId: "HarmlessGame",
      header: "Harmless game",
      text: msg.localize().format(
        company.isEarlierOrEqualThan(13, 8, 1) ? "ColdMail" : "GrogleMail"
      ),
      options: ["Why not?", "Not today."]
    });
  },

  complete: function (decision) {
    var company = GameManager.company;
    var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
    if (decision === 0) {
      var chance = 1 + 4 * company.getRandom();
      var pay = 2000 + 4000 * company.getRandom();
	  var hours = Math.floor(2 + 6 * company.getRandom());
      var score = Math.floor(1800 + 2640 * company.getRandom() * 2);
	  var deletedfiles = Math.floor(24 + 53 * company.getRandom() * 2)
      var msg = "";

      if (chance > 1.5) {
        msg += "Playing this game has relaxed you a bit. You've played for {0} hours and reached a score of {1}. You also got some research points.".localize().format(hours, score);
      } else {
        msg += "You played this game {0} hours, but after closing it, you discovered that it had deleted {1} files from your operating system. You also lost important documents.".localize().format(hours, deletedfiles);
      }

      var n = new Notification({
        header: "Harmless Game",
        text: msg.localize().format(),
      });

      if (chance > 1.5) {
        company.researchPoints += (20 + 30 * company.getRandom());
      } else {
        company.researchPoints -= (10 + 20 * company.getRandom());
      }
      DataStore.data.challengeAccepted = true
      company.flags.good++;
      company.activeNotifications.addRange(n.split());
    }
  }
};

GDT.addEvent(HarmlessGame);

// Adding 'InstallPengux'
// ----------------------------------------------------------- 

var InstallPengux = {
  id: "InstallPengux",
  isRandomEvent: true,
  maxTriggers: 1,
  trigger: function (company) {
    return company.currentLevel >= 1 && company.staff.length > 2 && company.cash < 0;
  },

  getNotification: function (company) {
    var msg = "Hey boss, \n a friend of mine recently released his own free and open-source operating system, Pengux. He said that if we install it, he might help us recover some money by refunding Windoors subscriptions and help us avoid bankruptcy! \n Would you like to try it?";
    var staff = company.staff[1];
	
    return new Notification({
      sourceId: "InstallPengux",
      header: staff.name,
      text: msg.localize().format(),
      options: ["Open our BIOS now.", "Sounds scary."]
    });
  },

  complete: function (decision) {
    var company = GameManager.company;
    var staff = company.staff[1];

    if (decision === 0) {
      var pay = (company.cash * 3 * (company.cash < 0 ? -1 : 1) * company.getRandom())
      var msg = "Good news, Boss: \n me and my friend were able to recover up to {0}! This will hopefully help us recover from imminent bankruptcy.";

      var n = new Notification({
        header: staff.name,
        text: msg.localize().format(UI.getShortNumberString(pay)),
		weeksUntilFired: 0 * company.getRandom()
      });

      n.adjustCash(pay, "Refunds");
	  company.flags.good++;
      company.notifications.push(n);
    }

  }
};

GDT.addEvent(InstallPengux);

// Adding 'Wrong Christian Game'
// ----------------------------------------------------------- 

var WrongChristianGame = {
  id: "WrongChristianGame",
  isRandomEvent: true,
  maxTriggers: 1,
  trigger: function (company) {
    return (
    company.currentLevel >= 1 && company.isGameProgressBetween(0.1, 0.6) && company.currentGame && ( company.currentGame.topic.name === "Religious" )
    );
  },
  getNotification: function (company) {
    var game = company.currentGame;
    var groups = ["Wisdom Oak", "Pilgrims for Jesus", "Gaming and Religion", "Red Cross Group", "Sunday For God"]
	var picked = groups.pickRandom();
    var msg = "During the development of your title {0} / {1}, a religious group in your town called {2} claimed that your game was religiously flawed. They said they would help you for free to improve historical accuracy. What will you do?";

    return new Notification({
      sourceId: "WrongChristianGame",
      header: picked,
      text: msg.localize().format(game.topic.name, game.genre.name, picked),
      options: ["Very appreciated.", "I'm never wrong!"]
    });
  },
  complete: function (decision) {
	  
	var company = GameManager.company;
	var game = company.currentGame;
	
    if (decision === 0) {
      var msg = "You thank and welcome the group of faithful, and after fixing your game, they also spread some rumors among their group, and now they will be eager to play your title.";
      var n = new Notification({
        header: "Fixed game",
        text: msg.localize(),
        weeksUntilFired: 0 * company.getRandom()
      });
	  game.designPoints += (20 + 30) * company.getRandom();
	  n.adjustHype(5 + 15 * company.getRandom());
      company.notifications.push(n);
    }
    if (decision === 1) {
    // nothing
    }
  }
};


GDT.addEvent(WrongChristianGame);

// Adding 'Buy Issue'
// ----------------------------------------------------------- 

// I'll probably work more on this in the future

// Issues offered
var Issues = [
  {
    id: "Gaming World",
    name: "Gaming World",
	cost: 20,
	specializedGenres: ["Action", "Adventure", "Platformer"],
    possibleTopics: ["Crime", "Cyberpunk", "Military", "Ninja", "Prison", "Life", "Pirate", "Sci-Fi"]
  },
   {
    id: "Informed Gamer",
    name: "Informed Gamer",
	cost: 10,
	specializedGenres: ["Action", "Adventure", "Platformer"],
    possibleTopics: ["Fantasy", "Kaiju", "Dinosaurs", "Military", "Ninja", "Dungeon", "Skating", "Treasure"]
  },
   {
    id: "Game Machine",
    name: "Game Machine",
	cost: 5,
	specializedGenres: ["Action"],
    possibleTopics: ["Crime", "Ninja", "Samurai", "Fantasy"]
  },
   {
    id: "Ninvento Power",
    name: "Ninvento Power",
	cost: 10,
	specializedGenres: ["Platformer", "Adventure", "Casual"],
    possibleTopics: ["Airplane", "Comedy", "Hunting", "Cartoon", "Anime", "Fantasy", "Farming"]
  },
   {
    id: "Computer Gamer",
    name: "Computer Gamer",
	cost: 10,
	specializedGenres: ["Action", "Strategy"],
    possibleTopics: ["Typing", "Sandbox", "House", "Dystopian", "Zombies", "School", "Space"]
  },
   {
    id: "Gay Gamer",
    name: "Gay Gamer",
	cost: 10,
	specializedGenres: ["Adventure", "Horror", "Puzzle"],
    possibleTopics: ["Vampire", "Packing", "Management", "Anime"]
  }
];

var BuyIssue = {
  id: "BuyIssue",
  isRandomEvent: true,
  maxTriggers: 4,
  trigger: function (company) {
    return company.currentLevel <= 3 && company.cash < 150000 && company.currentGame;
  },

  getNotification: function (company) {
	//var randomIssue = Issues.pickRandom();
	this.selectedIssue = Issues.pickRandom();
    var msg = "On your way home from work, you stumbled upon a newsstand selling the latest issue of {0}, which might help you learn about a new topic and give you some tips for future game development. Do you want to pick one up for just {1}?";

    return new Notification({
      sourceId: "BuyIssue",
      header: "New Issue",
      text: msg.localize().format(this.selectedIssue.name, this.selectedIssue.cost),
      options: ["Fill me with knowledge.", "No, thanks."]
    });
  },

  complete: function (decision) {
	var company = GameManager.company;
    var issue = this.selectedIssue;

    if (decision === 0) {
	  var chance = (0.5 + 6 * company.getRandom())
	  var filteredTopics = issue.possibleTopics.filter(function(topic) {
	    return !company.topics.includes(issue.possibleTopics);
	  });
	  var newKnowledge = filteredTopics.pickRandom();
	  var topicToPush = Topics.topics.first(function(topic) {
                    return topic.id === newKnowledge
                });
      var msg = "While you were reading the {0} issue, you gained some knowledge about a new topic, {1}."
	  
	  if (chance > 3 && issue.specializedGenres.includes(company.currentGame.genre.name) && !Knowledge.hasComboKnowledge(company, company.currentGame)) {
		var combo = Knowledge.getComboHintText(company.currentGame);
		Knowledge.setComboKnowledge(company, company.currentGame);
		msg += " We also discovered that our latest combination, {0} and {1}, is {2}.".localize().format(company.currentGame.topic.name, company.currentGame.genre.name, combo)
	  }
      var n = new Notification({
        header: "New Issue",
        text: msg.localize().format(issue.name, newKnowledge),
		weeksUntilFired: 0 * company.getRandom()
      });
	  n.adjustCash(issue.cost * -1, "Issue");
	  if (!company.topics.includes(topicToPush)) {
		company.topics.push(topicToPush)
	  }
      company.notifications.push(n);
    }
	
  }
};

GDT.addEvent(BuyIssue);

// Adding 'PATEboycott'
// ----------------------------------------------------------- 

var PATEboycott = {
  id: "PATEboycott",
  isRandomEvent: true,
  maxTriggers: 1,
  trigger: function (company) {
  return (
      company.fans > 10000 && company.gameLog.last() && (company.gameLog.last().topic.name === "Horse")
  );
  },
  
  getNotification: function (company) {
	var boss = company.staff[0];
	var game = company.gameLog.last();
	var randomComplain = ["feed avocado to horses", "force the horse to run for a long time", "force the horse to do dangerous stunts", "feed meat to horses", "Literally ride an horse."]
    var complain = randomComplain.pickRandom();
    var msg = "Hello {0}, \n we are protesters from People for Animal Treatment Equality (PATE). We played your latest game, {1}, and while we enjoyed it quite a bit, we find it disgusting that the player can {2}. We demand an apology from you and that you adopt a horse and ride it in real life, or we will boycott {3} and take off your games from store. ";

    return new Notification({
      sourceId: "PATEboycott",
      header: "PATE Boycott Notice",
      text: msg.localize().format(boss.name, game.title, complain, company.name),
      options: ["I'll write a letter.", "Dude."]
    });
  },

  complete: function (decision) {
    var company = GameManager.company;
    var boss = company.staff[0];

    if (decision === 0) {
		
      var pay = (2000 + 6000 * company.getRandom())
	  var fans = (4000 + 6000 * company.getRandom())
	  
      var msg = "Thank you, {0}. \n We forgive you, but please, never make a horse game again."

      var n = new Notification({
        header: "PATE Boycott Notice",
        text: msg.localize().format(boss.name),
		weeksUntilFired: 0 * company.getRandom()
      });

      n.adjustCash(pay * -1, "Horse");
	  n.adjustFans(fans)
	  company.flags.good++;
      company.notifications.push(n);
    }

    if (decision === 1) {
	  var fans = (14000 + 16000 * company.getRandom())
      var msg = "That's okay, {0}. \n We'll start the boycott tomorrow. \n Goodbye.";

      var n = new Notification({
        header: "PATE Boycott Notice",
        text: msg.localize().format(boss.name),
		weeksUntilFired: 2 * company.getRandom()
      });
      n.adjustFans(fans * -1)
	  company.flags.evil++;
      company.notifications.push(n);
    }
  }
};

GDT.addEvent(PATEboycott);

// Adding 'GRID review spammers'
// ----------------------------------------------------------- 

var GRIDreviewSpammers = {
	id: "GRIDreviewSpammers",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		var a = Research;
		return company.currentLevel >= 1 && (company.gameLog.last() && company.gameLog.last().score >= 7 && company.gameLog.last().releaseWeek + 5 < company.currentWeek) && company.staff.length > 1 && company.fans >= 20000 && company.researchCompleted.includes(a.grid);
	},
	getNotification: function (company) {

		var msg = "Hey boss, \n recently our fans started review-bombarding our latest game, {0}, with a lot of negative reviews on our GRID platform. {n} The reviews are just jokes about our game, and they seem to actually like it; the situation is quite funny if I'm being honest, but they could ruin our game's reputation. I checked and found that, on {1} reviews, 40% of them are positive! \n How should we even act?"
		.localize().format(company.gameLog.last().title, UI.getLongNumberString(Math.floor(company.gameLog.last().unitsSold / (2 + 3 * company.getRandom()))));
		return new Notification({
			sourceId: "GRIDreviewSpammers",
			header: "Review Spam".localize(),
			text: msg,
			options: ["Wipeout the review database.", "I guess it's their right to."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			var n = new Notification({
				header: "Review Spam".localize(),
				text: "Hey boss, \n while many fans agree that many negative reviews are nonsense, it seems that many did not like the move to remove all reviews of the game, finding it unnecessary.".localize().format(),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.gameLog.last().unitsSold / 16 * -1) * company.getRandom());
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var n = new Notification({
				header: "Review Spam".localize(),
				text: "Hey boss, \n I joined the trend train and wrote a negative review myself, and all the fans went crazy. Some fans event sent letters about the situation to our office, praising us and turning their reviews to positive.".localize(),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.gameLog.last().unitsSold / 16) * company.getRandom());
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(GRIDreviewSpammers);

// Adding 'GRID hackers'
// ----------------------------------------------------------- 

var GRIDhackerSpoiler = { 
	id: "GRIDhackerSpoiler",
	isRandomEvent: true,
	maxTriggers: 3,
	trigger: function (company) {
		var a = Research;
		return company.staff.length > 1 && company.isGameProgressBetween(0.7, 0.9) && company.fans >= 20000 && company.researchCompleted.includes(a.grid);
	},
	getNotification: function (company) { 
		var game = company.currentGame;
		
		var staff = company.staff.skip(1).pickRandom();
		var msg = "Boss, \n while we were creating the {0} game page on the GRID store, some hackers accessed the database and leaked the entire page and some clips online! There's a lot of hype around the game now, and they can't wait to see what we have in store.".localize().format(game.title);

		return new Notification({
			sourceId: "GRIDhackerSpoiler",
			header: staff.name,
			text: msg,
			buttonText: "OK"
		});
	},
	complete: function () {
		var company = GameManager.company;
		company.adjustHype( 40 + ((80 + 100) * company.getRandom()));
	}
};


GDT.addEvent(GRIDhackerSpoiler);

// Adding 'EGD Movement'
// ----------------------------------------------------------- 

var EGDMovementEvent = {
	id: "EGDMovement",
	isRandomEvent: false,
	date: "30/6/2",
	maxTriggers: 1,
	getNotification: function (company) {

		var msg = "Recently, a popular online movement known as End Game Destruction has sparked a heated debate within the gaming industry about video game preservation and after-sales support. {n} It all started with Ress Script, a popular RedTube user, who protested the suspension of Ubicroft's racing/city game, The Club, which required a constant online connection despite being a single-player game. {n} He decided to launch a consumer movement, soon followed by an EU petition that has the power to change the game by ending the suspension of remote games once they're no longer supported. {n} Despite starting slow, in the latest months the EU petition is proving very effective, supported by countless RedTubers and figures within the European Parliament, with over a million signatures collected so far, and nearly all stakeholders feel pressured by the public to express their position on the issue. Should we support it, ignore the movement for now, or side with EU lobbyists and our fellow gaming companies?";
		return new Notification({
			sourceId: "EGDMovement",
			header: "EGD Movement".localize(),
			text: msg,
			image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/other/EGD movement.png",
			options: ["Power to the players.", "Endless support is impossible!", "Silence is the answer."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;

		if (decision === 0) {
			var n = new Notification({
				header: "EGD Movement".localize(),
				text: "It seems our fans really appreciated our comment about the movement. \n One fan commented, 'I love {0}, they're truly the best company and one of the few that actually values their customers and cares about preserving the games they create!'".localize().format(company.name),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 12) * company.getRandom());
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var n = new Notification({
				header: "EGD Movement".localize(),
				text: "Fans are really furious after you, like other companies, made the mistake of confusing the purpose of the initiative with endless support for their games. \n At least you got the support of a famous RedTube user, FreeSoftware, who doubled down on your opinion.".localize(),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 15) * -1 * company.getRandom());
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(EGDMovementEvent);

// Adding 'Fast Food Kiosk'
// -----------------------------------------------------------

var GameFastFoodKiosk = {
	id: "GameFastFoodKiosk",
	isRandomEvent: true,
	maxTriggers: 3,
	trigger: function (company) {
		return ( company.currentLevel >= 3 && company.isGameProgressBetween(0.6, 0.9) && company.fans >= 20000 && company.cash > 0 );
	},
	getNotification: function (company) {
		var game = company.currentGame;
		var boss = company.staff[0];
		this.price = ((company.currentGame.costs / 4) * company.getRandom());
		var fastfood = ["Junky 'nd Cheesy", "RonaldMc", "Burger Queen", "K4C"];
		this.pickedFastFood = fastfood.pickRandom();

		var msg = "Hello {0}, \n We're representatives of {1}, one of the most popular fast food chains in the country. We're very interested in your latest title, {2}, currently in development, and we think having your title displayed at our locations as a kiosk would be a great way to promote your game. {n} We've decided to split the costs in half. If you pay {3}, we'll offer kiosks at our locations and pay you 50% of the revenue we earn from them."
			.localize()
			.format(boss.name, this.pickedFastFood, game.title, UI.getShortNumberString(this.price));

		return new Notification({
			sourceId: "GameFastFoodKiosk",
			header: this.pickedFastFood,
			text: msg,
			options: ["Heck yeah.", "Fast food is bad."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
		var boss = company.staff[0];
		var aprice = this.price;
		var revenue = (aprice * (2 * 4 * company.getRandom()) / 2);

		if (decision === 0) {
			company.adjustCash(this.price * -1, this.pickedFastFood + " Kiosk Investment");
			company.adjustHype(40 + 160 * company.getRandom());

			var n = new Notification({
				header: this.pickedFastFood,
				text: "Hi {0}, \n We're representatives of {1} again. We're contacting you to let you know that we'll soon be sending {2} cr., representing 50% of what we earned from your promotion. \n It was great doing business with you."
					.localize()
					.format(boss.name, this.pickedFastFood, UI.getShortNumberString(revenue)),
				weeksUntilFired: 4 + 2 * company.getRandom()
			});
			n.adjustCash(revenue, this.pickedFastFood + " Kiosks");
            
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(GameFastFoodKiosk);

// Adding 'Jimmy's Lair'
// ----------------------------------------------------------- 

var JimmysLair = {
	id: "JimmysLair",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
			var filteredGameLog = company.gameLog.filter(function(game) { return game.releaseWeek < 1200 ; });
			return filteredGameLog.length >= 1 && company.fans >= 100000 && company.isLaterOrEqualThan(9, 8, 1) && company.staff.length > 2;
	},
	getNotification: function (company) {

		var msg = "Hey boss, \n Our legal department found a video game preservation site called 'Jimmy's Lair' that dumped ROMs of our games on cartridges and uploaded them to the site for free. {n} While they haven't been sold for years and are now inaccessible, we've worked hard on these games, and they represent the history of our company. Should we let them do their thing, or should we stop them?";
		return new Notification({
			sourceId: "JimmysLair",
			header: "Jimmy's Lair".localize(),
			text: msg,
			options: ["Dump a lawsuit on their site.", "Let them do their important job."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;

		if (decision === 0) {
			var filteredGameLog = company.gameLog.filter(function(game) { return game.releaseWeek < 1200 ; });
			var n = new Notification({
				header: "Jimmy's Lair".localize(),
				text: "Greetings {0}, \n I'm the owner of Jimmy's Lair and I'm surprised that your legal department decided to sue us for archiving your NO LONGER-SELLING games that you don't even offer the ability to play. \n But I understand; your decision is to make profit and to kill history from the past. \n Never again!'".localize().format(company.staff[0].name),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 10) * company.getRandom() * -1);
			n.adjustCash((50000 * filteredGameLog.length) * company.getRandom(), "Jimmy's Lair Lawsuit");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var n = new Notification({
				header: "Jimmy's Lair".localize(),
				text: "Greetings {0}, \nI'm the owner of Jimmy's Lair and I'm surprised to hear that your legal department hasn't decided to sue us for archiving your games, which have been out of print for decades, especially when compared to other companies... \n Thank you so much! Your games are truly great and you're taking a huge step towards digital preservation.".localize(company.staff[0].name),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 15) * company.getRandom());
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(JimmysLair);

// Adding 'Sore IA'
// ----------------------------------------------------------- 

var SoreIA = {
	id: "SoreIA",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
			return company.gameLog.length >= 1 && company.fans >= 100000 && company.isLaterOrEqualThan(30, 5, 1) && company.staff.length >= 2;
	},
	getNotification: function (company) {
        
		var msg = "Hey Boss, \n While scrolling through the social media site Chirper, I stumbled upon a gameplay video of one of our games, {0}, except it was a little weird: the physics were a little janky, the graphics were a different, and the texts didn't make sense. {n} After a bit of research, I discovered it was a video generated with this new tool, Sore AI, with a simple line of text. Just with two clicks you can generate an entire video, and I discovered that millions of videos of our games already exist! This tool, while fun, creates a lot of problems for our work, being replaced by a machine in a matter of seconds! {n} I spoke to our legal department and we may file a DMCA against ClosenAI, the company behind this tool, although I've seen some very supportive fans about the AI. \n We're at rock bottom, boss! What should we do?";
		return new Notification({
			sourceId: "SoreIA",
			header: "Sore IA".localize(),
			text: msg.localize().format(company.gameLog.pickRandom().title),
			options: ["Oppose and resist!", "Accept our fate."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
        var chance = 1 + 3 * company.getRandom();
		var msg = "Boss, we've reached an out of court settlement with ClosedAI, the company behind Sore AI, and from now on the tool will ban prompts that infringe our intellectual property. \n "
		if (chance >= 2) {
		msg += "Surprisingly, many fans have expressed support for us, arguing that AI is a problem for the industry and even causes pollution."
		} else {
		msg += "However, many fans lashed out at us because creating these videos was 'too much fun' and that it 'speeded up our work'."
		}
		
		if (decision === 0) {
			
			var n = new Notification({
				header: "Sore IA".localize(),
				text: msg.localize().format(),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			if (chance >= 2) { 
			n.adjustFans((company.fans / 12) * company.getRandom());
			} else {
				n.adjustFans((company.fans / 16) * company.getRandom() * -1);
			}
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var n = new Notification({
				header: "Sore IA".localize(),
				text: "Hey boss \n, since we didn't do anything, things quickly escalated. Someone created a fake and offensive video about our game {0} and passed it off as real. Now we've been held accountable, and even though it's clearly a fake video and most fans are just laughing, we've gotten a bad rap from some more gullible fans.".localize().format(company.gameLog.pickRandom().title),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustFans((company.fans / 14) * company.getRandom() * -1);
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(SoreIA);

// Adding 'BlockyCraft Codes'
// ----------------------------------------------------------- 

var BlockyCraftCodes = {
	id: "BlockyCraftCodes",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
			return company.isLaterOrEqualThan(20, 2, 1) && company.isEarlierOrEqualThan(23, 10, 2) && company.cash >= 500000;
	},
	getNotification: function (company) {
        
		var msg = "Heyyy, \n  I've just recieved a free BlockyCraft gifctode! \n And even better, you can get one too! \n \n >> blockycraftcodes.me <<";
		return new Notification({
			sourceId: "BlockyCraftCodes",
			header: "E-Mail".localize(),
			text: msg.localize().format(),
			options: ["Yayyy!!!", "Totally legit!"]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
        var chance = 1 + 3 * company.getRandom();
		var hours = Math.floor(2 + 6 * company.getRandom());
		var lost = ((company.cash / 20 + company.cash / 15 * company.getRandom()) * -1);
		var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
		
		var msg = "By reaching this discovered that the site actually offered a free copy of the full release for this voxel-based game that went viral a while ago, and you had so much fun that you forgot about work!"
		if (chance < 2) {
		msg += " However, after logging out after {0} hours, some important files disappeared and entered your bank account. You lost {1}!".localize().format(hours, UI.getShortNumberString(lost));
		}
		
		if (decision === 0) {
			
			var n = new Notification({
				header: "BlockyCraftCodes".localize(),
				text: msg.localize().format(),
			});
			if (chance < 2) { 
			n.adjustCash(lost, "Stolen money");
			}
			company.researchPoints += (30 + 40 * company.getRandom());
			DataStore.data.challengeAccepted = true
			company.flags.good++;
			company.activeNotifications.addRange(n.split());
			return;
		}
	}
};

GDT.addEvent(BlockyCraftCodes);

// Adding 'Cosmic Sens'
// ----------------------------------------------------------- 

var CosmicSens = {
	id: "CosmicSens",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
			return company.staff.length >= 2 && company.isLaterOrEqualThan(7, 10, 1) && company.isEarlierOrEqualThan(16, 6, 4);
	},
	getNotification: function (company) {
        
		var msg = "Hey boss, a group of artists who claim 'graphic design is our passion' sent us a new ColdMail that contains a computer font called Cosmic Sens, which they claim is 'the best font ever' and supposed to 'boost productivity and concentration' or whatever that means. Shall we download it?";
		return new Notification({
			sourceId: "CosmicSens",
			header: "Cosmic Sens".localize(),
			text: msg.localize().format(),
			options: ["For free???", "I hate it!"]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
		
		if (decision === 0) {
			UI.applyComicSansFont();
			
			var n = new Notification({
				header: "Cosmic Sens".localize(),
				text: "Lorem Ipsum! We've set this as the default font for our computers. It doesn't seem to have changed our mindset that much, nor has it 'increased productivity', but it's quite nice to look at. I like it, 7/10.".localize().format()
			});
			company.activeNotifications.addRange(n.split());
			return;
		}
		if (decision === 1) {
			var n = new Notification({
				header: "Cosmic Sens".localize(),
				text: "We discovered a website criticizing Cosmic Sens, 'www.bancosmicsens.gdt', criticizing it for being 'too childish and immature', so we simply removed it from the system. The devs behind Cosmic Sens responded with 'You don't know anything about typography and should change your hobby!'".localize().format()
			});
			n.adjustFans((2 + 5 * company.getRandom()) * -1);
			company.activeNotifications.addRange(n.split());
			return;
		}
	}
};

UI.applyComicSansFont = function () {
	var css = "" +
		"@font-face {" +
		"font-family: 'Comic Sans';" +
		"font-style: normal;" +
		"src: url('" + The_Top_And_Flops_Mod_WildLukah.modPath + "/images/fonts/Comic Sans MS.ttf');" +
		"}" +
		"* {" +
		"  font-family: 'Comic Sans', sans-serif !important;" +
		"}";

	$('head').append('<style id="uiTweak-ComicSansFont" type="text/css">' + css + '</style>');
	
};


GDT.addEvent(CosmicSens);

// Adding 'PolusGame'
// ----------------------------------------------------------- 

var PolusGame = {
	id: "PolusGame",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
			return company.isLaterOrEqualThan(2, 2, 3) && company.isEarlierOrEqualThan(10, 12, 4) && company.getRandom() > 0.8;
	},
	getNotification: function (company) {
        var arcadeplaces = ["Junky nd' Cheesy", "Neon", "Level Up", "Pizza & Game", "Tokyo", "Vaporwave"];
		var msg = "On your way home from work, you passed by the usual {0} arcade place in your town when, out of the blue, you notice they installed an arcade machine playing the infamous game 'Polus', known for causing seizures, amnesia, hallucinations, and other terrible things. {n} Curiosity is eating away at you, the whole arcade is empty, and you have a penny in your pocket. Would you like to try it, run away, or call the authorities?";

		return new Notification({
			sourceId: "PolusGame",
			header: "Polus".localize(),
			text: msg.localize().format(arcadeplaces.pickRandom()),
			options: ["Curiosity killed the cat.", "Run away!", "Call the men in black."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
        var chance = 1 + 3 * company.getRandom();
		var minutes = Math.floor(20 + 25 * company.getRandom());
		var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
		
		var msg = "You decided to give Polus a shot and you've played for {0} minutes. ".localize().format(minutes);
		if (chance < 2) {
		msg += "The game was so abysmally bad that it gave you an headache! You decided to push the cabinet to the floor and leave.".localize().format();
		}
		if (chance >= 2 && chance < 3) {
		msg += "Playing this much gave you a mild headache and hallucinations, but nothing too crazy. It wasn't even that fun anyway!".localize().format();
		}
		if (chance >= 3) {
		msg += "Playing this much almost gave you a seizure, but the arcade cabinet shat down during it. At least it was fun!".localize().format();
		}
		
		
		if (decision === 0) {
			UI.PolusEffect();
			var n = new Notification({
				header: "Polus".localize(),
				text: msg.localize().format(),
				weeksUntilFired: 1
			});
			n.adjustCash(15 * -1, "Polus token");
			DataStore.data.seizureWarning = true
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			var n = new Notification({
				header: "Polus".localize(),
				text: "You decided to run away as if you saw someone committing a crime, but nothing happened. \n The next day, the arcade cabit vanished into obscurity.".localize().format(),
				weeksUntilFired: 1
			});
			company.notifications.push(n);
			return;
		}
		if (decision === 2) {
			
			var n = new Notification({
				header: "Polus".localize(),
				text: "You called the FBI just in case, and they came right away and, after just 5 minutes of investigation, took over the entire arcade place. They rewarded you with 50K cr. on the condition that you don't reveal anything you saw to the public. You're pretty sure that the arcade hates you now, and they probably think you're a coward.".localize().format(),
				weeksUntilFired: 1
			});
			n.adjustCash(50000, "Reward");
			company.activeNotifications.addRange(n.split());
			return;
		}
	}
};

GDT.addEvent(PolusGame);

UI.PolusEffect = function() {
    // Inject CSS
    var css = '' +
        '<style id="uiTweak-polusEffect">' +
        '.mainBackgroundOverlay {' +
        'background: #1bfd30;' +
        '}' +
        '</style>';

    $('head').append(css);

    var backgroundOverlay = $('.mainBackgroundOverlay')[0];

    // Colors
    var colors = [
        [27, 253, 48],    // green
        [100, 0, 255],    // purple
        [255, 0, 0],      // red
        [255, 255, 255],  // white
        [27, 253, 48]     // green
    ];

    var duration = 5000;
    var segmentDuration = (duration / (colors.length - 1)) / 6;
    var startTime = new Date().getTime();

    function lerp(start, end, t) {
        return start + (end - start) * t;
    }

    var requestAnimFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(cb) { return setTimeout(cb, 16); };

    function animate() {
        var now = new Date().getTime();
        var elapsed = now - startTime;

        if (elapsed > duration) {
            $('#uiTweak-polusEffect').remove();
            if (backgroundOverlay) backgroundOverlay.style.background = '';
            return;
        }

        var segmentIndex = Math.floor((elapsed / segmentDuration) % (colors.length - 1));
        var progress = (elapsed % segmentDuration) / segmentDuration;

        var startColor = colors[segmentIndex];
        var endColor = colors[segmentIndex + 1];

        var r = Math.round(lerp(startColor[0], endColor[0], progress));
        var g = Math.round(lerp(startColor[1], endColor[1], progress));
        var b = Math.round(lerp(startColor[2], endColor[2], progress));

        backgroundOverlay.style.background =
            'radial-gradient(circle at center, rgb(' + r + ',' + g + ',' + b + ') 0%, black 100%)';

        requestAnimFrame(animate);
    }

    requestAnimFrame(animate);
};

// Adding 'HeroBrianInBlockyCraft'
// ----------------------------------------------------------- 

var HeroBrianInBlockyCraft = {
	id: "HeroBrianInBlockyCraft",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
			return company.isLaterOrEqualThan(19, 8, 2) && company.isEarlierOrEqualThan(21, 8, 2 && company.getRandom() > 0.65);
	},
	getNotification: function (company) {
		var msg = "Recently, the emerging voxel sandbox game BlockyCraft has become a talk among dozens of players because of the appearance of a mysterious entity. {n} Dubbed 'EvilBrian', the entity appears in the fog far away from the player, looking like a default player skin with no pupils. A lot of players have reported his presence, with one even finding him on the BlockyCraft forum, saying that he's the dead brother of the creator of BlockyCraft, 'Dent'. {n} In a now-deleted streamer's livestream, EvilBrian appeared in his house and chased him to his death. A lot of users, despite being scared, are hunting EvilBrian. Finding him could bring you fame in the whole BlockyCraft community. Would you like to participate?";

		return new Notification({
			sourceId: "HeroBrianInBlockyCraft",
			header: "EvilBrian".localize(),
			text: msg.localize().format(),
			options: ["Bring the camera!", "What a waste of time."]
		});
	},
	complete: function (decision) {
		var company = GameManager.company;
        var chance = 1 + 3 * company.getRandom();
		var hours = Math.floor(2 + 4 * company.getRandom());
		var fans = (company.fans / 25 + company.fans / 20 * company.getRandom());
		var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
		
		var msg = "You spent a whopping {0} hours searching EvilBrian in your world ".localize().format(hours);
		if (chance < 2) {
		msg += "but to no avail. You wasted your time but at least you had fun.".localize().format();
		}
		if (chance < 2 && hours >= 4) {
		msg += "Additionally, with the video recordings you filled your hard disk pretty quickly.".localize().format();
		}
		if (chance >= 2) {
		msg += " and you surprisingly saw him!".localize().format();
		}
		if (chance < 4 && chance >= 2) {
		msg += " However, the video was so long that {0}.".localize().format(["you filled your whole hard disk".localize(), "the tool stopped recording after 30 minutes".localize()].pickRandom());
		}
		if (chance >= 4) {
		msg += " You posted part of the videoclip on the BlockyCraft forum, and a vast majority of the community {0}".localize().format(["was spooked.".localize(), "didn't believe you.".localize()].pickRandom());
		}
		
		
		if (decision === 0) {
			
			var n = new Notification({
				header: "EvilBrian".localize(),
				text: msg.localize().format(),
				weeksUntilFired: 1
			});
			if (chance > 4) { 
			n.adjustFans(fans);
			}
			company.researchPoints += (15 + 25 * company.getRandom());
			DataStore.data.seizureWarning = true
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(HeroBrianInBlockyCraft);

// Adding 'Buying Game Engines'
// ----------------------------------------------------------- 
/*
// Engines offered
var Engines = [
  {
    id: "Real Engine V1",
    name: "Real Engine V1",
    parts: [Research.ThreeDGraphicsV1, Research.ThreeDGraphicsV2, Research.ThreeDGraphicsV3, Research.ThreeDGraphicsV4, Research.mono, Research.stereo, Research.soundTrack, Research.simpleAI, Research.BetterUI, Research.characterProgression, Research.saveGame, Research.BasicPhysics, Research.simpleCutScenes],
    techLevel: 3,
    costs: 352000,
    releaseWeek: 1
  },
  {
    id: "GameCreate V1",
    name: "GameCreate V1",
    parts: [Research.TwoDGraphicsV2, Research.TwoDGraphicsV3, Research.TwoDGraphicsV4, Research.TwoDGraphicsV5],
    techLevel: 5,
    costs: 125000,
    releaseWeek: 1
  },
  {
    id: "Union V1",
    name: "Union V1",
    parts: [Research.ThreeDGraphicsV1, Research.ThreeDGraphicsV2, Research.ThreeDGraphicsV3, Research.mono, Research.stereo, Research.soundTrack, Research.simpleAI, Research.BetterUI, Research.characterProgression, Research.saveGame, Research.BasicPhysics, Research.simpleCutScenes],
    techLevel: 3,
    costs: 227000,
    releaseWeek: 1
  },
  {
    id: "Robot V1",
    name: "Robot V1",
    parts: [Research.TwoDGraphicsV2, Research.TwoDGraphicsV3, Research.TwoDGraphicsV4, Research.TwoDGraphicsV5, Research.mono, Research.stereo, Research.soundTrack, Research.simpleAI, Research.BetterUI, Research.characterProgression, Research.saveGame],
    techLevel: 2,
    costs: 127000,
    releaseWeek: 1
  },
  {
    id: "Origin V1",
    name: "Origin V1",
    parts: [Research.ThreeDGraphicsV1, Research.ThreeDGraphicsV2, Research.ThreeDGraphicsV3, Research.ThreeDGraphicsV4, Research.mono, Research.stereo, Research.soundTrack, Research.simpleAI, Research.BetterUI, Research.characterProgression, Research.saveGame, Research.BasicPhysics, Research.simpleCutScenes],
    techLevel: 4,
    costs: 520000,
    releaseWeek: 1
  }
];

var NewEngineOffer1 = {
  id: "NewEngineOffer1",
  isRandomEvent: false,
  maxTriggers: 1,
  trigger: function (company) {
    return (company.fans < 5000);
  },
  getNotification: function (company) {
    var randomEngine = Engines.pickRandom();

    // Store the selected engine for use in complete()
    this.selectedEngine = randomEngine;

    var msgTemplate = "test test. {0}, {1}, {2}, {3}, {4}, {5}";
    var msgText = msgTemplate.localize().format(
      boss.name,
      randomEngine.name,
      randomEngine.techLevel,
      UI.getShortNumberString(randomEngine.costs)
    );

    return new Notification({
      sourceId: "NewEngineOffer1",
      header: "NewEngineOffer1",
      text: msgText,
      options: ["Sounds good!", "No, thanks."]
    });
  },
  complete: function (decision) {
    var company = GameManager.company;
    var boss = company.staff[0];

    if (decision === 0) {

      var engineToBuy = this.selectedEngine;
      var msg = "Thank you, money will arrive soon.";
      var n = new Notification({
        header: "Engine Purchase",
        text: msg.localize().format(boss.name),
        weeksUntilFired: 0
      });
      n.adjustCash(engineToBuy.costs * -1, "e");
      company.engines.push(engineToBuy);
      company.notifications.push(n);
    }
	
	if (decision === 1) {
      var msg = "No worries, thanks for your time anyway.";
      var n = new Notification({
        header: "Proposal",
        text: msg.localize(),
        weeksUntilFired: 0
      });
      company.notifications.push(n);
    }
  }
};

GDT.addEvent(NewEngineOffer1);*/


// *******************************
// Storyline notifications
// *******************************

GDT.addEvent({
	id: "ComputerYakuman",
	date: "2/8/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Ninvento has recently released an electronic game purely dedicated to simulate mahjong, the Computer Yakuman. {n} Even though it is sold at double the price of the TES, the device offers some technical innovations such as a dot-matrix display screen and multiplayer gaming via a link cable.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/electronics/Computer Yakuman.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "RiseOfEducationalGames",
	date: "5/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A recent trend in the industry has seen the birth of a new genre of video games, namely educational video games. {n} Industry experts have found that video games can also be combined with educational values ​​and purposes and can help younger audiences not only learn, but also make it more fun, while still maintaining the purpose of entertainment.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Educational.png",
	previewImage: "./images/notificationIcons/icon_notification_industry_news.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "VenaVSninvento",
	date: "5/5/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vena recently created a commercial spot where they promoted their recently released console, the Oasis, by criticizing and speaking badly of Ninvento and its consoles, with a motto that reads 'Oasis does what Ninvenwon't'. {n} Despite having much more powerful hardware with 16-bit graphics and audio capabilities, it seems that Vena's Oasis is failing to outsell Ninvento's consoles, which is also rumored to be working on a new console.",
	image: "./images/platforms/superb/Vena Oasis.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "FifthGenLeak",
	date: "6/2/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Experts suggest that we'll see the next generation of video game consoles this year. In the next generation, we might see the 'death' of cartridges and the introduction of CD-ROMs into consoles, new platforms with 32-bit units and the transition from 2D to 3D. {n} Many companies are working on new consoles, with two popular video game companies hosting a special announcement at the upcoming Tokyo Game Show and Vena working on a console codenamed 'Jupiter'.",
    previewImage: "./images/notificationIcons/icon_notification_industry_news.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "BarcodeTrainer",
	date: "6/8/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Époque, a japanese company popular for their Gatmon games, has recently released a new handheld game console purely based on barcodes, the Barcode Trainer. {n} The Barcode Trainer works by inserting barcoded cartridges into the reader, which can represent the player, power-ups, or enemies to fight. {n} The console has been quite successful in Japan, where it has been reported that many players are using barcodes from everyday products such as food or cleaning products. {n} As they prepare for a worldwide release, Époque said they are working on a version that can be attached to Ninvento's TES and Super TES consoles, while Ninvento is producing cartridges based on their franchises.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/electronics/Barcode Trainer.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "DeathOfArcadeGames",
	date: "8/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recent statistical analyses reveal a significant decline in the number of arcade places worldwide. {n} The primary factor behind this trend is the increasing popularity of home consoles, which have made it possible to port classic arcade games directly into people's living rooms. {n} It appears that the era of traditional arcade gaming is coming to an end, gradually being replaced by casual games.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Arcade.png",
	previewImage: "./images/notificationIcons/icon_notification_industry_news.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "on4it",
	date: "8/5/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Rumors, complete with images, are circulating that Fillips, the company behind the disastrous CD-e, has sent private kits to the media and schools to preview their new console, potentially called 'on4it.' {n} The console would be a portable PDA designed for girls between the ages of 4 and 12 and focused on educational titles.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/electronics/on4it.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "grPods",
	date: "14/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Grapple has recently made waves after launching its new digital music players. grPods stand out from all other MP3 players with their compact size, improved and sophisticated user interface, and increased audio quality. {n} They also come with a virtual store for easier purchasing music and albums, called 'grTunes'.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/electronics/grPod.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "SenikuAdventures",
	date: "19/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Ninvento has released the long awaited title 'Seniku Adventures', a stylized platformer utilising characters created by internet personality Keith Kandler. Due to design similarities, Vena has reportedly threatened legal action to sue Ninvento over the release of the title. {n} Critics find that the game is poorly optimized with many bugs post release and a lack of compelling and innovative gameplay.",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "GreenHeartGamesAntiPiracy",
	date: "23/4/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A small indie company called Greenheart Games recently went viral for their innovative anti-piracy measures in their first game, Game Dev Tycoon. {n} In this game dev/simulation videogame, which also received an average rating of 7/10 from critics, players experience the entire history of the gaming industry by starting their own video game development company in the early 1980s. {n} While players who purchase the original game can enjoy all its features, those who download the cracked torrent version, created by the developers themselves, encounter a unique twist mid-game. {n} They receive a warning that their recently-released games are being pirated by their fans and they can't do profits anymore, leading to a gradual decline in their in-game funds. Moreover, new games they develop have an increased likelihood of being pirated, ultimately resulting in the bankruptcy of their virtual game development company. {n} This clever approach was documented on the company's blog, where they candidly and humorously illustrated the impact of piracy on developers.",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "ItaraGamesBurial",
	date: "24/4/4",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Recently, it was proved that the popular video game console company Itara conducted a mass burial of numerous unsold video game cartridges, consoles, and computer chips in a landfill in Alamogordo, New Mexico, back in the '80s. {n} Since the burial was first reported, doubts had persisted regarding its veracity and scope, often leading to its dismissal as an urban legend. However, recent confirmations have revealed the truth, as approximately 700,000 cartridges of various Itara games, including, as they unearthed around 700,000 cartridges of various Itara games, in particular E.X.T. and Centpede. {n} While Micronoft and Fuel Industry are collaborating with the New Mexico government to excavate the site as part of a new documentary, Many fans find it funny how an urban legend turned out to be true after so long time.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 2600.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "GrWaveHoax",
	date: "24/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Platform News",
	type: NotificationType.IndustryNews,
	text: "Recently, many GrPhone users were affected with a troll that involves putting your own GrPhone in a microwave so you could charge it. This, of course, would result in an explosion and possible injuries. {n} This hoax feature, called 'GrWave', it is capturing many users' attention. It is spreading so quickly on the internet that even Grapple itself has declared that it is all fictitious. We suggest our audience to not try.",
	image: "./images/platforms/superb/GrPhone.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "OYAcommercialfailure",
	date: "24/7/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Despite the initial success of KickIT's crowdfunding campaign, the OYA is a commercial failure. Sales are poor as the hardware isn't powerful enough to compete against other devices, and many game developers failed to embrace the platform. Furthermore, all the commercials to promote their console have failed and are causing financial problems for KickIT, slowly forcing the company to go out of business.",
	image: "./images/platforms/superb/OYA.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});

GDT.addEvent({
	id: "WuuVerseClones", //MVC reference
	date: "25/11/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Since Ninvento has permanently shut down the servers of their infamous social network WuuVerse for the Wuu and 3GS platforms, a trend has emerged on Chirper where users are replying to posts they approve of with an image of the popular forum's 'Yeah!' button. {n} It also seems that some more technical fans have attempted to give the site a second lease of life by creating numerous WuuVerse 'clones', imitating the style and functionality of the original site. While some of these have received some large attention, we suggest you do not join them as they are unofficial and apparently poorly moderated.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath +  "/images/notifications/socials/WuuVerse.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	

GDT.addEvent({
	id: "K4Cann",
	date: "27/12/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "The media is abuzz after the popular chain of K4C restaurants, famous for their fried chicken, has announced their own high-end console. {n} A spokesperson of the K4C Console said that 'it will be capable of running games at top-level specs, while keeping your chicken warm during your gaming experience!'. The console, indeed, comes with a 'Chicken Room' the heat of the console to heat chicken. {n} Many experts doubt the authenticity of this console, claiming that it is just a promotion for the company, but we are curious to see what will come next.",
	image:  The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/K4C Console.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});

GDT.addEvent({
	id: "PolusGameAnn",
	date: "2/2/3",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "There's a rumor circulating that a new arcade cabinet for a game, called 'Polus', has appeared in arcades in and around Portland. {n} It's unclear what's the hype around this Space/Shooter abstract title, but it's said to have strange shapes, depth and colors that cause seizures, amnesia, hallucinations, and sleep terror in anyone who plays it. {n} The FBI is investigating, and the NSC claimed that video games promotes violence. While it's unclear whenever the game is real or not, anyone reporting these symptoms should definitely unplug from the game and, perhaps, get some fresh air.",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
// ******************************************************************************************
// Misc
// ******************************************************************************************

// Changes the retirement dates for specific Platforms

		{	
		var G64 = Platforms.allPlatforms.first(function(p){return p.id == 'G64';});
		if (G64){
			G64.marketKeyPoints = [{
                date: "1/6/3",
                amount: 0.45
            }, {
                date: "2/1/2",
                amount: 0.31
            }, {
                date: "3/1/1",
                amount: 0.36
            }, {
                date: "4/1/1",
                amount: 0.38
            }];
			G64.platformRetireDate = "7/4/4";
			G64.imageDates = ["5/3/1"];
			G64.unitsSold = 0.29;
		}}
		
		{	
		var MasterV = Platforms.allPlatforms.first(function(p){return p.id == 'Master V';});
		if (MasterV){
			MasterV.unitsSold = 0.51;
		}}

		{	
		var Gameling = Platforms.allPlatforms.first(function(p){return p.id == 'Gameling';});
		if (Gameling){
			Gameling.platformRetireDate = '11/6/1';
		}}
		
		{
		var VenaOasis = Platforms.allPlatforms.first(function(p){return p.id == 'Vena Oasis';});
		if (VenaOasis){
			VenaOasis.platformRetireDate = '8/1/1';
		}}
		
		{	
		var Playsystem = Platforms.allPlatforms.first(function(p){return p.id == 'Playsystem';});
		if (Playsystem){
			Playsystem.startAmount = 1.3;
		}}

		{	
		var TES64 = Platforms.allPlatforms.first(function(p){return p.id == 'TES 64';});
		if (TES64){
			TES64.imageDates = ["11/3/2"];
		}}
		
        {
		var GS = Platforms.allPlatforms.first(function(p){return p.id == 'GS';});
		if (GS){
			GS.platformRetireDate = '20/6/3';
			GS.imageDates = ["19/2/2"];
		}}
		
		{
		var PPS = Platforms.allPlatforms.first(function(p){return p.id == 'PPS';});
		if (PPS){
			PPS.platformRetireDate = '21/5/3';
		}}
		
		{
		var OYA = Platforms.allPlatforms.first(function(p){return p.id == 'OYA';});
		if (OYA){
			OYA.platformRetireDate = '24/7/4';
		}}
	
		{	
		var Swap = Platforms.allPlatforms.first(function(p){return p.id == 'Swap';});
		if (Swap){
			Swap.platformRetireDate = '32/1/1';
		}}
		
// Change existing notifications 

//custom function to get notifications
function getNotificationById(id) {
    for (var i = 0; i < Media.allScheduledStories.length; i++) {
        if (Media.allScheduledStories[i].id === id) {
            return Media.allScheduledStories[i];
        }
    }
    return null; 
}

var TESRumour = getNotificationById('TESRumour');
if (TESRumour) {
    TESRumour.notification = new Notification({
        header: Media.platformNewsHeadline,
        text: "According to rumours the Japanese company Ninvento is planning to launch its very own home gaming console. Ninvento is known for the widely successful arcade game 'Dinkey King'.{n}Many industry experts doubt that home gaming consoles will take off but we are eager to see what Ninvento will deliver.".localize(),
        image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/companies/Ninvento.png",
        previewImage: "./images/notificationIcons/icon_notification_platform_release.png"
    });
}

var MasterVRumour = getNotificationById('MasterVRumour');
if (MasterVRumour) {
    MasterVRumour.notification = new Notification({
        header: Media.platformNewsHeadline,
        text: "Following the massive success of the TES console there are now rumours circulating that Vena, another Japanese company, is planning to release a home gaming console on their own.".localize(),
        image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/companies/Vena.png",
        previewImage: "./images/notificationIcons/icon_notification_platform_release.png"
    });
}

var EndOFG64 = getNotificationById('EndOFG64');
if (EndOFG64) {
    EndOFG64.date = "7/4/1";
}


// Removes mBox Next 

        var platformNames = ["mBox Next"];
        for (var i = 0; i < Platforms.allPlatforms.length; i++) {
            for (var h = 0; h < platformNames.length; h++) {
        var platform = Platforms.allPlatforms[i];
                if (platform.id == platformNames[h])
                        Platforms.allPlatforms.remove(platform);
        }}

// Custom platform images changing over time

var originalGetPlatformImage = Platforms.getPlatformImage;

Platforms.getPlatformImage = function (b, c) {
    if (b.imageDates && b.imageDates.length > 0) {
        var date = b.imageDates[0]; // Only use the first one
        var week = General.getWeekFromDateString(date);

        switch (b.id) {
            case "3GS":
                if (week <= c) {
                    b.name = "New 3GS";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/New 3GS.png";
                } else {
                    b.name = "3GS";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/3GS.png";
                }

            case "GS":
                if (week <= c) {
                    b.name = "GSi";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/GSi.png";
                } else {
                    b.name = "GS";
                    return "./images/platforms/superb/GS.png";
                }

            case "TES 64":
                if (week <= c) {
                    //b.name = "TES 64DD";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/TES 64DD.png";
                } else {
                    b.name = "TES 64";
                    return "./images/platforms/superb/TES 64.png";
                }

            case "G64":
                if (week <= c) {
                    b.name = "G64GS";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/G64 Games System.png";
                } else {
                    b.name = "G64";
                    return "./images/platforms/G64.png";
                }

            case "SmartVision":
                if (week <= c) {
                    b.name = "On-TV System III";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/On-TV System III.png";
                } else {
                    b.name = "SmartVision";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SmartVision.png";
                }

            case "SuperSwan Color":
                if (week <= c) {
                    b.name = "SuperCrystal";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/SuperCrystal.png";
                } else {
                    b.name = "SuperSwan Color";
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/SuperSwan Color.png";
                }

            case "FJ Tower":
                if (week <= c) {
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/FJ Tower II.png";
                } else {
                    return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/FJ Tower.png";
                }
        }
    }

    if (b.id === "Nuu") {
        var week = General.getWeekFromDateString("21/7/2");
        if (week <= c) {
            b.name = "Nuu Mini";
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/Nuu Mini.png";
        } else {
            b.name = "Nuu";
            return "./images/platforms/superb/Nuu.png";
        }
    }

    if (b.id === "Grapintosh" && b.imageDates && b.imageDates.length > 0) {
        var GrapintoshIIweek = General.getWeekFromDateString(b.imageDates[0]);
        var PoweringBook160week = General.getWeekFromDateString(b.imageDates[1]);

        if (PoweringBook160week <= c) {
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/PoweringBook 160.png";
        }
        if (GrapintoshIIweek <= c) {
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/Grapintosh II.png";
        } else {
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Grapintosh.png";
        }
    }
	
    if (b.id === "grMac G3" && b.imageDates && b.imageDates.length > 0) {
        var G4week = General.getWeekFromDateString(b.imageDates[0]);
        var G5week = General.getWeekFromDateString(b.imageDates[1]);
        var GrProWeek = General.getWeekFromDateString(b.imageDates[2]);
        var GrGlassWeek = General.getWeekFromDateString(b.imageDates[3]);

        if (GrGlassWeek <= c) {
            b.name = "grGlass";
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/grGlass.png";
        }
        if (GrProWeek <= c) {
            b.name = "grMac Pro";
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/grMac Pro.png";
        }
        if (G5week <= c) {
            b.name = "grMac G5";
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/grMac G5.png";
        }
        if (G4week <= c) {
            b.name = "grMac G4";
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/superb/grMac G4.png";
        } else {
            b.name = "grMac G3";
            return The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/grMac G3.png";
        }
    }

    return originalGetPlatformImage(b, c);

};

// Custom function to get platform names
// Will be implemented one day
Platforms.getPlatformName = function (b, c) {
	
	if (c && b.imageDates && b.imageDates.length > 0) {
        var date = b.imageDates[0]; // Only use the first one
        var week = General.getWeekFromDateString(date);

    switch (b.id) {
        case "3GS":
            if (week <= c) {
                return "New 3GS";
			} else {
                return "3GS";
			}
		case "GS":
            if (week <= c) {
                return "GSi";
			} else {
                return "GS";
			}
		case "TES 64":
            if (week <= c) {
                return "TES 64DD";
			} else {
                return "TES 64";
			}
		case "G64":
            if (week <= c) {
                return "G64GS";
			} else {
                return "G64";
			}
		case "SmartVision":
            if (week <= c) {
                return "On-TV System III";
			} else {
                return "SmartVision";
			}
		case "SuperSwan Color":
            if (week <= c) {
                return "SuperCrystal";
			} else {
                return "SuperSwan Color";
			}
		case "Nuu":
            if (week <= c) {
                return "Nuu Mini";
			} else {
                return "Nuu";
			}

    }}
	
	return b.name
};

// ******************************************************************************************
// UI Tweaks
// ******************************************************************************************

// Define UI tweaks to true by default
// Load saved toggle state from localStorage
var saveduiTweaksState = localStorage.getItem("The_Top_And_Flops_Mod_UITweaks");
var savedDarkState = localStorage.getItem("The_Top_And_Flops_Mod_UIdarkMode");
var uiTweaksActivated = saveduiTweaksState === "true";
var uiDarkModeActivated = savedDarkState === "true";

// Apply styles if activated on load

UI.ApplyTweaks = function () {
var css = '' +
'.platformButton { height: 150px; }' +
'.platformButton .platformTitle { font-size: 14pt; }' +
'.platformButton img { width: 150px; }' +
'.platformButtonImage { width: 150px; height: 150px; margin-left: 30px; }' +
'.platformButton .cost { top: 15px; }' +
'.platformButton .licenseCost { top: 15px; left: 380px; }' +
'.platformButton .marketShare { font-size: 12pt; position: absolute; top: -5px; left: 380px; }' +
'.platformButton .audienceHints { top: 35px; font-size: 11pt; }' +
'.platformButton .genreHints { top: 55px; font-size: 11pt; }' +
'.windowBorder, .selectorButton, .selectorButtonInactive, .disabledButton, .baseButton,' +
'.orangeButton, .deleteButton, .greenButton, .whiteButton, .contextMenuButton,' +
'.sidebarNotificationItem, .rsDefaultInv .rsOverflow, .rsDefaultInv .rsSlide,' +
'.rsDefaultInv .rsVideoFrameHolder, .rsDefaultInv .rsThumbs,' +
'.rsDefaultInv .rsArrowIcn, .statusBar, .projectStatusCard,' +
'.gameSalesCard, .selectableGameFeatureItem, .ui-widget-content,' +
'.loadSaveButton, .featureSelectionPanel, .notificationImageContainer {' +
'  border-radius: 5px;' +
'}' +
'.sidebarNotificationItem {' +
'  border: 3px solid #FFD17B;' +
'  background-color: rgba(255,255,255,0.3);' +
'}' +
'.textEffect3D {' +
'  color: rgba(44, 8, 191, 0.8);' +
'  font-weight: bold;' +
'  text-shadow: 1px 1px rgba(31, 0, 111, 1), 2px 2px rgba(31, 0, 111, 1), 3px 3px rgba(31, 0, 111, 1);' +
'}' +
'#animatedSplashBackdrop::before {' +
'  background: url("' + The_Top_And_Flops_Mod_WildLukah.modPath + '/images/sunrays-fixed.png") 50% 50% no-repeat !important;' +
'  animation-name: none;' +
'}' +
'.ui-state-active, .ui-widget-content .ui-state-active, .ui-widget-header .ui-state-active {' +
'    border: none !important;' +
'    border-radius: 5px;' +
'}' +
'.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {' +
'    border: none !important;' +
'    border-radius: 5px;' +
'}' +

'.whiteButton {' +
'    color: black;' +
'    border: none !important;' +
'    background: white;' +
'    background-image: white;' +
'}' +
'' +
'.modsSelectionButton {' +
'    border-radius: 5px;' +
'    box-shadow: 0px 0px 8px #5a5a5a;' +
'}' +
'.disabledButton {' +
//'    background: lightgray;' +
//'    background-image: none;' +
'    cursor: default;' +
'}' +
';';

$('head').append('<style id="uiTweak-customStyles">' + css + '</style>');

}

UI.ApplyDarkMode = function () {
var css = '' +
'.contextMenuItem .icon path {' +
'    fill: white !important;' +
'}' +
'.orangeButton, .deleteButton, .greenButton, .whiteButton, .contextMenuButton, .loadSaveButton {' +
'  border-color: black;' +
'}' +
'.whiteButton {' +
'    color: white;' +
'    background: #171717;' +
'    background-image: -webkit-linear-gradient(top left, #0c0c0c 0%, #0c0c0c 100%);' +
'}' +
'.windowTitle {' +
'    color: #fff3f3;' +
'}' +
'.windowBorder {' +
//'    background-color: #0a0a0a;' +
'    color: white;' +
'    background: black;' +
'}' +
'.selectionOverlayContainer {' +
'    background: #252525;' + 
'}' +
'.platformButton .platformTitle {' +
'    color: #f9f6f6;' +
'}' +
'.fontCharacterButton:hover {' +
'    color: white;' +
'}' +
'.closeDialogButton {' +
'    background: #252525;' +
'}' +
'.whiteButton:not(.no-click):active {' +
'    background-image: -webkit-linear-gradient(top left, #3c3c3c 0%, #3c3c3c 100%);' +
'}' +
'.whiteButton:not(.no-hover):hover {' +
'    background: #000000;' +
'    background-image: -webkit-linear-gradient(top left, #000 0%, #000000 100%);' +
'}' +
'.rsDefaultInv .rsOverflow, .rsDefaultInv .rsSlide, .rsDefaultInv .rsVideoFrameHolder, .rsDefaultInv .rsThumbs {' +
'    background: #151414;' +
'    color: #fdfdfd;' +
'}' +
'.rsDefaultInv .rsThumb.rsNavSelected {' +
'    background: #1d1d1d;' +
'    color: #000;' +
'}' +
'.rsDefaultInv .rsArrowIcn {' +
'    background-color: rgb(12, 12, 12);' +
'}' +
'.rsDefaultInv .rsArrowIcn:hover {' +
'	background-color: #000;' +
'}' +
'.rsDefaultInv .rsThumbsArrow:hover {' +
'    background-color: #000;' +
'}' +
'.rsDefaultInv .rsThumbsArrow {' +
'    background: rgb(12, 12, 12);' +
'}' +
'.rsDefaultInv .rsThumb {' +
'    color: #fffbfb;' +
'}' +
'.rsDefaultInv .rsThumb.rsNavSelected {' +
'    color: #a0a0a0;' +
'}' +
'.statusBar {' +
'    color: white;' +
'    background-color: #232323;' +
'}' +
'#trendContainer {' +
'    color: white;' +
'}' +
'.projectStatusCard {' +
'    background-color: rgb(0, 0, 0);' +
'    color: white;' +
'}' +
'#cashLogContainer {' +
'    color: white;' +
'    background-color: #161616;' +
'}' +
'.weekProgress {' +
'    background: white;' +
'}' +
'.releaseGameNameDisplay {' +
'    color: #fff1f1;' +
'}' +
'.gameSalesCard {' +
'    background-color: #232323;' +
'}' +
'#gameSalesContainer {' +
'    color: white;' +
'}' +
'.contextMenuButton {' +
'    color: white;' +
'    background: #151515;' +
'}' +
'.sidebarNotificationItem {' +
'    color: white;' +
'    background-color: rgba(0, 0, 0, 0.46);' +
'}' +
'.selectableGameFeatureItem.selectedFeature {' +
'    background-color: #003f54;' +
'}' +
'.selectableGameFeatureItem {' +
'    background: rgb(14, 14, 14);' +
'}' +
'.featureSelectionPanel {' +
'    color: #ffffff;' +
'    background-color: #0a0a0a;' +
'}' +
'.characterPreviewArrowButton {' +
'    background: #000000;' +
'}' +
'.ui-widget-content {' +
'    background: #191919;' +
'    color: #333333;' +
'    border: 1px solid #000000;' +
'}' +
'.loadSaveButton {' +
'    color: white;' +
'    background: #252525;' +
'    background-image: -webkit-linear-gradient(top left, #252525 0%, #252525 100%);' +
'}' +
'	.loadSaveButton:not(.disabled):hover {' +
'		background-image: -ms-linear-gradient(top left, #1f1f1f 0%, #1f1f1f 100%);' +
'		background-image: -webkit-linear-gradient(top left, #1f1f1f 0%, #1f1f1f 100%);' +
'	}' +
'.ui-widget-content {' +
'    background: #191919;' +
'    color: #ffffff;' +
'}' +
'.selectorButton {' +
'    background-color: #101010;' +
'}' +
'.selectorButton:not(.no-click).active {' +
'    background-color: #000000;' +
'}' +
'.deleteButton {' +
'}' +
'.ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {' +
'    background: #171717;' +
'}' +
'.modsSelectionButton.activeMod {' +
'    background-color: #003648;' +
'}' +
'.modsSelectionButton.dependencyWrong {' +
'    background-color: #690000;' +
'}' +
'.modsSelectionButton {' +
'    background-color: none !important;' +
'    border-color: transparent;' +
'    box-shadow: 0px 0px 8px #5a5a5a;' +
'}' +
'.mainBackgroundOverlay {' +
'    background-image: -webkit-radial-gradient(center, ellipse closest-side, #464646 0%, #131313 50%, #000000 100%);' +
'}' +
'.disabledButton {' +
'    color: black;' +
'}' +
'.notificationImageContainer {' +
'background-color: #000000;' +
'}' +
'.staffInfoPanel {' +
'color: #FFFFFF;' +
'background-color: #000000;' +
'}'

$('head').append('<style id="uiTweak-darkMode">' + css + '</style>');

}
			
if (uiTweaksActivated) {
    UI.ApplyTweaks();
}

if (uiDarkModeActivated) {
	UI.ApplyDarkMode();
}
// HTML content
var content =
    '<div id="TT&FMsettings">' +
    '<h2> UI Tweaks </h2>' +
    '<small> The Top and Flops mod offers optional modifications to some parts of the UI which can be toggled on or off without restarting the game.</small>' +
    '<div>' +
    '<div class="ButtonWrapper">' +
    '<div id="activateTweaksStatus" class="selectorButton whiteButton" onclick="UI.activateTweaks(this)" style="text-align: center; display: block; margin: 5px auto; width: 450px;">Toggle UI Tweaks</div>' +
//	'<br>' +
	'<div id="activateDarkModeStatus" class="selectorButton whiteButton" onclick="UI.activateDarkMode(this)" style="text-align: center; display: block; margin: 5px auto; width: 450px;">Toggle Dark Mode</div>' +
    '</div>' +
    '</div>' +
    '</div>';

// Add the settings tab to the game UI
GDT.addSettingsTab("The Top and Flops Mod", content);

// ActivateTweaks handler
UI.activateTweaks = function(a) {
    if (a.id === "activateTweaksStatus") {
        UI.toggleTweaks(a);
    }
};
UI.activateDarkMode = function(a) {
    if (a.id === "activateDarkModeStatus") {
        UI.toggleDarkMode(a);
    }
};
// Toggle function
UI.toggleTweaks = function(button) {
    if (uiTweaksActivated) {
        // Deactivate tweaks
        $(button).text("UI Tweaks: Deactivated");
        $(button).removeClass("active");
        uiTweaksActivated = false;
        localStorage.setItem("The_Top_And_Flops_Mod_UITweaks", "false");
        console.log("Deactivated!? " + uiTweaksActivated);

        $('style#uiTweak-customStyles').remove();

    } else {
        // Activate tweaks
        $(button).text("UI Tweaks: Activated");
        $(button).addClass("active");
        uiTweaksActivated = true;
        localStorage.setItem("The_Top_And_Flops_Mod_UITweaks", "true");
        console.log("Activated!? " + uiTweaksActivated);

        if (!$('style#uiTweak-customStyles').length) {
            UI.ApplyTweaks();
        }
    }
};

UI.toggleTweaks = function(button) {
    if (uiTweaksActivated) {
        // Deactivate tweaks
        $(button).text("UI Tweaks: Deactivated");
        $(button).removeClass("active");
        uiTweaksActivated = false;
        localStorage.setItem("The_Top_And_Flops_Mod_UITweaks", "false");
        $('style#uiTweak-customStyles').remove();
    } else {
        // Activate tweaks
        $(button).text("UI Tweaks: Activated");
        $(button).addClass("active");
        uiTweaksActivated = true;
        localStorage.setItem("The_Top_And_Flops_Mod_UITweaks", "true");

        // Apply tweaks and ensure it appears before dark mode
        if (!$('style#uiTweak-customStyles').length) {
            UI.ApplyTweaks();
        }

        // Move tweaks style BEFORE dark mode (if both active)
        var tweaksStyle = $('style#uiTweak-customStyles');
        var darkStyle = $('style#uiTweak-darkMode');
        if (tweaksStyle.length && darkStyle.length) {
            tweaksStyle.insertBefore(darkStyle);
        }
    }
};

UI.toggleDarkMode = function(button) {
    if (uiDarkModeActivated) {
        // Deactivate dark mode
        $(button).text("Dark Mode: Deactivated");
        $(button).removeClass("active");
        uiDarkModeActivated = false;
        localStorage.setItem("The_Top_And_Flops_Mod_UIdarkMode", "false");
        $('style#uiTweak-darkMode').remove();
    } else {
        // Activate dark mode
        $(button).text("Dark Mode: Activated");
        $(button).addClass("active");
        uiDarkModeActivated = true;
        localStorage.setItem("The_Top_And_Flops_Mod_UIdarkMode", "true");

        if (!$('style#uiTweak-darkMode').length) {
            UI.ApplyDarkMode();
        }

        // Ensure tweaks style always comes before dark mode
        var tweaksStyle = $('style#uiTweak-customStyles');
        var darkStyle = $('style#uiTweak-darkMode');
        if (tweaksStyle.length && darkStyle.length) {
            tweaksStyle.insertBefore(darkStyle);
        }
    }
};


        // Add Restart and Exit buttons to main menu
        var newButtons = '<div>' +
            '<div class="exitButton selectorButton deleteButton windowLargeOkButton mainMenuButton mainMenuButtonSmall"> Exit </div>' +
            '<div class="loadButton selectorButton deleteButton windowLargeOkButton mainMenuButton mainMenuButtonSmall" onclick="window.location.reload();"> Restart </div>' +
            '</div>';

        var menuWrapper = document.querySelector("#mainMenu .centeredButtonWrapper");
        if (menuWrapper) {
            menuWrapper.insertAdjacentHTML('beforeend', newButtons);
        }

        // Remove the original full-size Exit button
        var oldExitButton = document.querySelector("#mainMenu .centeredButtonWrapper .exitButton.mainMenuButton:not(.mainMenuButtonSmall)");
        if (oldExitButton) {
            oldExitButton.parentNode.removeChild(oldExitButton);
        }

        if (!$('style#uiTweak-advancedOptions').length) {

          $("head").append('<style id="uiTweak-advancedOptions" type="text/css"></style>');
        }
        $("style#uiTweak-advancedOptions").append("#newGameView .featureSelectionPanel { overflow-x: hidden; overflow-y: auto; }");

// ******************************************************************************************
// Achievements 
// ******************************************************************************************

var a = Achievements
    a.badcoder = {
        id: "badcoder",
        title: "Bad Coder(s)".localize("achievement title"),
        description: "Release a game with 10 or more bugs.".localize("achievement"),
        isAchieved: function(company) {
            return (game = company.gameLog.last()) && (game.bugs >= 10)
        },
        tint: "#FF981D",
        value: 100,
		canEarnMultiple: true,
		hidden: false
    };
    a.gdtinspirer = {
        id: "gdtinspirer",
        title: "GDT-Inspirer".localize("achievement title"),
        description: "Create a game called 'Game Dev Story'.".localize("achievement"),
        isAchieved: function(company) {
            return (game = company.gameLog.last()) && (game.title.toLowerCase() === "game dev story")
        },
        tint: "#4E0000",
        value: 150,
		hidden: true
    };
    a.gmodeasteregg = {
        id: "gmodeasteregg",
        title: "by Garry".localize("achievement title"),
        description: "What will they think up next?".localize("achievement"),
        isAchieved: function(company) {
            return (game = company.gameLog.last()) && (game.title.toLowerCase() === "gmod" || game.title.toLowerCase() === "garry's mod" || game.title.toLowerCase() === "garrys mod" || game.title.toLowerCase() === "garry mod")
        },
        tint: "#4E0000",
        value: 150,
		hidden: true
    };
    a.bbteasteregg = {
        id: "bbteasteregg",
        title: "It all makes sense now!".localize("achievement title"),
        description: "Create a game called 'BattleBlock Theater'".localize("achievement"),
        isAchieved: function(company) {
            return (game = company.gameLog.last()) && (game.title.toLowerCase() === "battleblock theater" || game.title.toLowerCase() === "battleblock theatre" || game.title.toLowerCase() === "battle block theatre" )
        },
        tint: "#4E0000",
        value: 150,
		canEarnMultiple: true,
		hidden: true
    };
    a.feedtroll = {
        id: "feedtroll",
        title: "Feeding The Troll".localize("achievement title"),
        description: "Accept one of the crazy challenges offered by your fans.".localize("achievement"),
        isAchieved: function(company) {
			var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
            return DataStore.data.challengeAccepted === true
        },
        tint: "#FF981D",
        value: 200,
		canEarnMultiple: true,
		hidden: false
    };
    a.cursedByAllGames = {
        id: "cursedByAllGames",
        title: "Cursed by All Games...".localize("achievement title"),
        description: "Get All Games to break a perfect score of 10.".localize("achievement"),
        isAchieved: function(company) {
            return (game = company.gameLog.last()) && (game.isOnSale() || game.soldOut) && DataStore.data.AllGamesCursed === true;
        },
        tint: "#FF981D",
        value: 150,
        canEarnMultiple: true
    };
    a.savedByAllGames = {
        id: "savedByAllGames",
        title: "Saved by All Games!".localize("achievement title"),
        description: "Get All Games to break a bad score.".localize("achievement"),
        isAchieved: function(company) {
            return (game = company.gameLog.last()) && (game.isOnSale() || game.soldOut) && DataStore.data.AllGamesSaved === true;
        },
        tint: "#FF981D",
        value: 150,
        canEarnMultiple: true
    };
    a.seizureWarning = {
        id: "seizureWarning",
        title: "Seizure Warning".localize("achievement title"),
        description: "Get lucky and play Polus.".localize("achievement"),
        isAchieved: function(company) {
            return DataStore.data.seizureWarning === true;
        },
        tint: "#FF981D",
        value: 150,
        canEarnMultiple: true
    };
// ******************************************************************************************
// New Reviews and Reviewers
// ******************************************************************************************
var a = Reviews;

var originalReviews = {
    NoName: [
        "As {0} as the name.".localize("{0} adjective").format(["boring".localize(), "generic".localize("used as adjective"), "blunt".localize(), "uninspired".localize(), "dull".localize()].pickRandom()),
        "The name says it all.".localize(),
        "They put as much thought into the game as into the game's name.".localize(),
        "Our review inspired by the game's name: bad review #{0}.".localize().format([1, 2, 3, 4, 5, 6].pickRandom())
    ],
    NoNameGood: ["Good, despite the name.".localize(), "It's better than the name.".localize()],
    1: ["N/A not worth a statement.".localize(), "One of the worst!".localize(), "Makes you cry.".localize(), "Don't buy!".localize(), "Horrible.".localize(), "I still have nightmares!".localize(), "A disaster!".localize(), "Really bad.".localize()],
    2: ["Utterly uninspiring.".localize(), "Not fun.".localize(), "Boring.".localize(), "Disappointing.".localize(), "Bin material.".localize(), "Bad.".localize(), "Abysmal.".localize()],
    3: ["Disappointing.".localize(), "Waste of money.".localize(), "Waste of time.".localize(), "Not much fun.".localize(), "Pretty bad.".localize()],
    4: ["Not bad. Not good.".localize(), "Meh!".localize(), "OK.".localize(), "Uninspiring.".localize()],
    5: ["Falls a bit short.".localize(), "Fun at stages.".localize(), "Has its moments.".localize(), "Have seen better.".localize()],
    6: ["Shows potential.".localize(), "Could have been better.".localize(), "Quirky but good.".localize(), "I like it.".localize()],
    7: ["Good game.".localize(), "Enjoyable.".localize(), "Nice experience.".localize(), "Beautiful.".localize()],
    8: ["Very good.".localize(), "Very enjoyable.".localize(), "Love it!".localize(), "Played it for days.".localize()],
    9: ["Great!".localize(), "Almost perfect.".localize(), "One of the best.".localize(), "More please.".localize(), "Great game.".localize(), "Outstanding game.".localize(), "Can't wait for the sequel.".localize()],
    10: ["A masterpiece.".localize(), "Best of its kind.".localize(), "Truly great.".localize(), "Everyone loves it!".localize(), "Must have!".localize(), "Outstanding achievement.".localize(), "Awesome!".localize(), "My new favorite!".localize()],
    11: ["11 out of 10. Game of the year, any year!".localize(), "11 out of 10. Nuff said.".localize(), "11 out of 10. A exceptional score for an exceptional game.".localize(), "11 out of 10. Rules don't apply to this outstanding game.".localize()]
};

Reviews.getGenericReviewMessage = function(a, b) {
    b = Math.floor(b);
    if (3 < b && 7 > b && !a.flags.hasCustomName && 0.1 >= GameManager.company.getRandom()) {
        return originalReviews["NoName"].concat(["Just a generic title.".localize(), "Unnamed Game #{0}.".localize().format(Math.floor(Math.random() * 50) + 1)]).pickRandom();
	}
	if (7 <= b && !a.flags.hasCustomName && 0.1 >= GameManager.company.getRandom()) {
		return originalReviews["NoNameGood"].concat(["A great game hidden below a generic name.".localize(), "They had a writer's block.".localize()]).pickRandom();
    }
	// (New) First Game Reviews
    if (5 > b && GameManager.company.gameLog.length === 0 && 0.1 >= GameManager.company.getRandom()) {
		return ["A bad start for {0}.".localize().format(GameManager.company.name), "Hope they'll improve soon.".localize(), "Not that great of a first impression.".localize()].pickRandom();
    }
    if (5 <= b && GameManager.company.gameLog.length === 0 && 0.1 >= GameManager.company.getRandom()) {
		return ["A great start for {0}.".localize().format(GameManager.company.name), "They started off on the right foot.".localize(), "An impressive start.".localize(), "Can't wait to see what they'll make next.".localize()].pickRandom();
    }
	// General Reviews
    if (1 === b) {
		return originalReviews[1].concat(["Shouldn't be allowed for retail.".localize(), "Waste of resources.".localize(), "Simply painful.".localize(), "My new worst.".localize(), "A joke game.".localize(), "Avoid at all costs!".localize(), "Never develop again!".localize()]).pickRandom();
    }
    if (2 === b) {
		return originalReviews[2].concat(["Unplayable!".localize(), "Burning money is less wasteful than buying this.".localize(), "Did somebody say 'Ugly'?".localize(), "Makes me throw up.".localize(), "Throwed it in dumpster.".localize(), "Avoid.".localize()]).pickRandom();
    }
    if (3 === b) {
        return originalReviews[3].concat(["Should be free.".localize(), "Should be avoided.".localize(), "Inept.".localize()]).pickRandom();
    }
    if (4 === b) {
        return originalReviews[4].concat(["Below average.".localize(), "Mhh.".localize(), "Quite a scam.".localize()]).pickRandom();
    }
    if (5 === b) {
        return originalReviews[5].concat(["Buy with spare money.".localize(), "Mediocre.".localize(), "Offers some entertainment.".localize(), "Good concept, bad execution.".localize()]).pickRandom();
    }
    if (6 === b) {
        return originalReviews[6].concat(["Average.".localize(), "Quite fun.".localize(), "Has some flaws.".localize(), "Playable.".localize()]).pickRandom();
    }
    if (7 === b) {
        return originalReviews[7].concat(
            ["Above average.".localize(), "Fun.".localize(), "Getting good.".localize(), "Memorable.".localize()]).pickRandom();
    }
    if (8 === b) {
        return originalReviews[8].concat(
            ["A solid title.".localize(), "Pure fun.".localize(), "Authentic.".localize(), "Original.".localize()]).pickRandom();
    }
    if (9 === b) {
        return originalReviews[9].concat(["Close to perfection.".localize(), "Pure enjoyment.".localize(), "A-Tier.".localize(), "Hidden gem.".localize()]).pickRandom();
    }
    if (10 === b) {
        return originalReviews[10].concat(["Game of the year.".localize(), "S-Tier.".localize(), "Ground-breaking experience.".localize()]).pickRandom();
    }
    if (11 === b) {
        return originalReviews[11].concat(
            ["11 out of 10. So ground-breaking that it breaks the maximum rating.".localize(), "11 out of 10. What a title.".localize(), "11 out of 10. Never seen experience.".localize()]).pickRandom();
    }
    throw "score cannot be " + b;
};

var SetNewReviewerNames = function(e) {
    // Easaiest method to assign new random reviewer names
    // as editing Reviews.getReviews would be painful
    e.reviews[0].reviewerName = ["Star Games", "Electric Game Month", "European Gamer"].pickRandom();
    e.reviews[1].reviewerName = ["Informed Gamer", "Gaming World", "Otaku", "Gamitsu", "Gamedroid"].pickRandom();
    e.reviews[2].reviewerName = ["Game Hero", "Spotted Gamer", "Rock, Paper, Shogun", "GameRye"].pickRandom();
    e.reviews[3].reviewerName = "All Games"; // Scripted to be "All Games" because they review ALL GAMES, get it?

    var r = GameManager.company.getRandom();

    // Trollish All Games
    var avgScore = (e.reviews[0].score + e.reviews[1].score + e.reviews[2].score) / 3;

    if (r < 0.4 && avgScore === 10) {
        e.reviews[3].score = 9;
        e.reviews[3].message = originalReviews[9].pickRandom();
		var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
		DataStore.data.AllGamesCursed = true;
    }

    if (r > 0.7 && avgScore <= 4) {
        e.reviews[3].score = [7, 8, 9].pickRandom();
        e.reviews[3].message = originalReviews[e.reviews[3].score].pickRandom();
		var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
		if (((avgScore + e.reviews[3].score) / 2) >= 5) {
			DataStore.data.AllGamesSaved = true;
			}
    }

    var assigned = false;  // Flag to track if a message has been assigned
    
    //var game = GameManager.company.currentGame || GameManager.company.gameLog.last();
    var i = [0, 1, 2];

    // Overhyped / Well hyped
    if (e.hypePoints && e.hypePoints >= 200 && !assigned) {
        if (avgScore <= 7) {
            if (r > 0.2) {
                e.reviews[i.pickRandom()].message = ["Overhyped.".localize(), "Game below our expectations.".localize(), "Not worth the wait.".localize()].pickRandom();
                assigned = true;
            }
        } else if (avgScore > 7) {
            if (r > 0.2) {
                e.reviews[i.pickRandom()].message = ["Worth the wait.".localize(), "Really lives up to the expectations.".localize(), "Well-lived.".localize()].pickRandom();
                assigned = true;
            }
        }
        assigned = false; // Reset to false for the next game's reviews
    }

    // Console-based Reviewers
    if (r > 0.2 && e.platforms) {
        // For each platform, check company and assign reviewer name accordingly
        for (var i = 0; i < e.platforms.length; i++) {
            var platform = e.platforms[i];
            if (!platform) continue; // skip if undefined

            var reviewerNameOptions;
            if (platform.company === "Ninvento") {
                reviewerNameOptions = ["Ninvento Life", "Ninvento Power", "Ninvento Gamer", "Ninvento Force"];
                e.reviews[i].reviewerName = reviewerNameOptions.pickRandom();
            } else if (platform.company === "Vonny") {
                reviewerNameOptions = ["Push Blue", "PadShockers", "God Of Geeks", "Playsystem Universe"];
                e.reviews[i].reviewerName = reviewerNameOptions.pickRandom();
            } else if (platform.company === "Mirconoft") {
                reviewerNameOptions = ["mBox Country Magazine", "mBoxDependant", "mBox Evolved"];
                e.reviews[i].reviewerName = reviewerNameOptions.pickRandom();
            } else if (platform.company === "Vena") {
                reviewerNameOptions = ["Bean Machines Vena", "Vena Magazine", "Vena Power"];
                e.reviews[i].reviewerName = reviewerNameOptions.pickRandom();
            } else if (platform.id === "PC") {
                reviewerNameOptions = ["Computer Gamer", "Computer Games", "Computer Format"];
                e.reviews[i].reviewerName = reviewerNameOptions.pickRandom();
            } else if (platform.id === "grPhone") {
                reviewerNameOptions = ["ClickArcade", "Pocket Gaming"];
                e.reviews[i].reviewerName = reviewerNameOptions.pickRandom();
            } else if (platform.id === "Super TES") {
                e.reviews[1].reviewerName = "Super TES Force";
            } else if (platform.id === "Vena Jupiter") {
                e.reviews[1].reviewerName = "Vena Jupiter Magazine";
            } else if (platform.id === "TES 64") {
                e.reviews[1].reviewerName = "TES 64 Magazine";
            } else if (platform.id === "DreamVast") {
                e.reviews[1].reviewerName = ["AllDreamVast", "Planet DreamVast"].pickRandom();
            }
        }
    }
	
};



// Register the event listener
GDT.on(GDT.eventKeys.gameplay.afterGameReview, SetNewReviewerNames);

// ******************************************************************************************
// Genres 
// ******************************************************************************************
// This section still needs a lot of work
// Also it might break compatibility with other mods

        var b = GameGenre;

        b.Racing = {
            id: "Racing",
            name: "Racing".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Racing.png",
        };
        b.Platformer = {
            id: "Platformer",
            name: "Platformer".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Platformer.png",
        };
        b.Educational = {
            id: "Educational",
            name: "Educational".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Educational.png",
        };
        b.Puzzle = {
            id: "Puzzle",
            name: "Puzzle".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Puzzle.png",
        };
        b.Shooter = {
            id: "Shooter",
            name: "Shooter".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Shooter.png",
        };
        b.Horror = {
            id: "Horror",
            name: "Horror".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Horror.png",
        };
        b.Arcade = {
            id: "Arcade",
            name: "Arcade".localize("genre"),
			iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/genres/Arcade.png",
        };
        b.getAll = function() {
                return [this.Action, this.Adventure, this.RPG, this.Simulation, this.Strategy, this.Casual, this.Racing, this.Platformer, this.Educational, this.Puzzle, this.Shooter, this.Horror, this.Arcade]
            };
        b.getGoldenRatio = function(a, b) { // TO-DO: Figure out what these do
                if (b) return (2 * GameGenre.getGoldenRatio(a) +
                    GameGenre.getGoldenRatio(b)) / 3;
                if (a === GameGenre.Action) return 1.8;
                if (a === GameGenre.Adventure) return 0.4;
                if (a === GameGenre.RPG) return 0.6;
                if (a === GameGenre.Simulation) return 1.6;
                if (a === GameGenre.Strategy) return 1.4;
                if (a === GameGenre.Casual) return 0.5;
				if (a === GameGenre.Racing) return 0.7;
				if (a === GameGenre.Platformer) return 0.9;
				if (a === GameGenre.Educational) return 0.8;
				if (a === GameGenre.Puzzle) return 0.5;
				if (a === GameGenre.Shooter) return 1.5;
				if (a === GameGenre.Horror) return 1.1;
				if (a === GameGenre.Arcade) return 1.2;
                throw "unknown genre: " + a;
            };
        b.getGenreWeighting = function(a, b, c) {
        if (void 0 === a) return 1;
        if (c) return (GameGenre.getGenreWeighting(a, c) + 2 * GameGenre.getGenreWeighting(a, b)) / 3;
        if (b === GameGenre.Action) return a[0];
        if (b === GameGenre.Adventure) return a[1];
        if (b === GameGenre.RPG) return a[2];
        if (b === GameGenre.Simulation) return a[3];
        if (b === GameGenre.Strategy) return a[4];
        if (b === GameGenre.Casual) return a[5];
		if (b === GameGenre.Racing) return a[6];
		if (b === GameGenre.Platformer) return a[7];
		if (b === GameGenre.Educational) return a[8];
		if (b === GameGenre.Puzzle) return a[9];
		if (b === GameGenre.Shooter) return a[10];
		if (b === GameGenre.Horror) return a[11];
		if (b === GameGenre.Arcade) return a[12];
        throw "unknown genre: " + b;
            };


    var c = Platforms;
        c.getNormGenreWeighting = function(a, c, f) {
            if (void 0 === a) return 1;
            if (f) return (Platforms.getNormGenreWeighting(a, f) + 2 * Platforms.getNormGenreWeighting(a, c)) / 3;
            if (c === GameGenre.Action) return Platforms.getNormalizedGenreWeighting(a[0]);
            if (c === GameGenre.Adventure) return Platforms.getNormalizedGenreWeighting(a[1]);
            if (c === GameGenre.RPG) return Platforms.getNormalizedGenreWeighting(a[2]);
            if (c === GameGenre.Simulation) return Platforms.getNormalizedGenreWeighting(a[3]);
            if (c === GameGenre.Strategy) return Platforms.getNormalizedGenreWeighting(a[4]);
            if (c === GameGenre.Casual) return Platforms.getNormalizedGenreWeighting(a[5]);
	        if (c === GameGenre.Racing) return Platforms.getNormalizedGenreWeighting(a[6]);
	        if (c === GameGenre.Platformer) return Platforms.getNormalizedGenreWeighting(a[7]);
			if (c === GameGenre.Educational) return Platforms.getNormalizedGenreWeighting(a[8]);
			if (c === GameGenre.Puzzle) return Platforms.getNormalizedGenreWeighting(a[9]);
			if (c === GameGenre.Shooter) return Platforms.getNormalizedGenreWeighting(a[10]);
			if (c === GameGenre.Horror) return Platforms.getNormalizedGenreWeighting(a[11]);
			if (c === GameGenre.Arcade) return Platforms.getNormalizedGenreWeighting(a[12]);
            throw "unknown genre: " + c;
    };
	
    var b = function(a, b, d) {
        b === GameGenre.Action && (a[0] += d);
        b === GameGenre.Adventure && (a[1] += d);
        b === GameGenre.RPG && (a[2] += d);
        b === GameGenre.Simulation && (a[3] += d);
        b === GameGenre.Strategy && (a[4] += d);
        b === GameGenre.Casual && (a[5] += d);
		b === GameGenre.Racing && (a[6] += d);
		b === GameGenre.Platformer && (a[7] += d);
		b === GameGenre.Educational && (a[8] += d);
		b === GameGenre.Puzzle && (a[9] += d);
		b === GameGenre.Shooter && (a[10] += d);
		b === GameGenre.Horror && (a[11] += d);
		b === GameGenre.Arcade && (a[12] += d);
    };
	var a = GameManager
    a.getCalculatedPlatformGenreWeightings = function() {
        for (var c = [0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8
            ], f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], d = GameManager.company.gameLog, k = 0; k < d.length; k++) b(f, d[k].genre, 1), d[k].secondGenre && b(f, d[k].secondGenre, 0.5);
        for (var d = f.slice().sort(function(a, b) {
                return b - a
            }), m = [1, 1, 0.9, 0.8, 0.8, 0.7, 0.9, 0.8, 0.7, 0.8, 1, 0.8, 0.7], k = d.length - 1; 0 <= k; k--)
            for (var l = 0; l < f.length; l++) f[l] == d[k] && (c[l] = m[k]);
        return c
    };
	
// Change every single genre weightings for every in-game platform

        {
		var PC = Platforms.allPlatforms.first(function(p){return p.id == 'PC';});
		if (PC){
			PC.genreWeightings = [0.9, 1, 0.9, 1, 1, 0.6, 1, 0.8, 0.9, 0.6, 1, 0.9, 0.8];
		}
		var G64 = Platforms.allPlatforms.first(function(p){return p.id == 'G64';});
		if (G64){
			G64.genreWeightings = [0.9, 1, 0.9, 0.9, 1, 0.7, 0.7, 0.9, 1, 0.8, 0.7, 0.8, 0.9];
		}
		var TES = Platforms.allPlatforms.first(function(p){return p.id == 'TES';});
		if (TES){
			TES.genreWeightings = [0.8, 0.7, 0.8, 0.8, 0.7, 1, 0.9, 1, 0.9, 0.9, 0.6, 0.7, 1];
		}
		var MasterV = Platforms.allPlatforms.first(function(p){return p.id == 'Master V';});
		if (MasterV){
			MasterV.genreWeightings = [0.9, 0.7, 0.8, 0.8, 0.7, 1, 0.8, 0.8, 0.8, 0.6, 0.8, 0.8, 0.9];
		}
		var Gameling = Platforms.allPlatforms.first(function(p){return p.id == 'Gameling';});
		if (Gameling){
			Gameling.genreWeightings = [0.8, 0.7, 0.9, 0.9, 0.6, 1, 0.7, 1, 0.9, 1, 0.7, 0.6, 0.9];
		}
		var VenaGear = Platforms.allPlatforms.first(function(p){return p.id == 'Vena Gear';});
		if (VenaGear){
			VenaGear.genreWeightings = [0.9, 0.8, 0.8, 0.9, 0.6, 1, 0.7, 0.8, 0.7, 0.9, 0.7, 0.7, 0.9];
		}
        var VenaOasis = Platforms.allPlatforms.first(function(p){return p.id == 'Vena Oasis';});
		if (VenaOasis){
			VenaOasis.genreWeightings = [1, 0.8, 0.8, 0.9, 0.6, 0.7, 0.8, 1, 0.9, 0.8, 0.9, 0.8, 0.7];
		}
		var SuperTES = Platforms.allPlatforms.first(function(p){return p.id == 'Super TES';});
		if (SuperTES){
			SuperTES.genreWeightings = [0.9, 0.9, 0.9, 1, 0.7, 0.9, 0.9, 1, 0.9, 1, 0.8, 0.8, 0.9];
		}
		var Playsystem = Platforms.allPlatforms.first(function(p){return p.id == 'Playsystem';});
		if (Playsystem){
			Playsystem.genreWeightings = [1, 0.8, 1, 0.9, 0.7, 0.6, 1, 0.9, 0.6, 0.8, 1, 1, 0.7];
		}
		var TES64 = Platforms.allPlatforms.first(function(p){return p.id == 'TES 64';});
		if (TES64){
			TES64.genreWeightings = [0.9, 0.8, 0.7, 0.8, 0.7, 0.9, 0.9, 1, 0.8, 1, 0.9, 0.9, 1];
		}
		var DreamVast = Platforms.allPlatforms.first(function(p){return p.id == 'DreamVast';});
		if (DreamVast){
			DreamVast.genreWeightings = [1, 0.7, 0.8, 1, 0.7, 0.7, 0.8, 0.8, 0.7, 0.8, 1, 0.9, 0.9];
		}
		var Playsystem2 = Platforms.allPlatforms.first(function(p){return p.id == 'Playsystem 2';});
		if (Playsystem2){
			Playsystem2.genreWeightings = [1, 0.8, 1, 0.9, 0.7, 0.9, 1, 0.9, 0.6, 0.7, 1, 1, 0.8];
		}
		var mBox = Platforms.allPlatforms.first(function(p){return p.id == 'mBox';});
		if (mBox){
			mBox.genreWeightings = [1, 0.8, 0.9, 0.9, 0.7, 0.7, 0.8, 0.8, 0.6, 0.7, 1, 0.8, 0.8];
		}
		var gameSphere = Platforms.allPlatforms.first(function(p){return p.id == 'gameSphere';});
		if (gameSphere){
			gameSphere.genreWeightings = [0.8, 0.8, 0.7, 0.8, 0.7, 1, 0.8, 1, 0.8, 0.7, 0.9, 0.8, 0.8];
		}
		var GS = Platforms.allPlatforms.first(function(p){return p.id == 'GS';});
		if (GS){
			GS.genreWeightings = [0.9, 0.9, 1, 0.9, 0.9, 1, 1, 1, 0.9, 1, 0.8, 0.7, 1];
		}
		var PPS = Platforms.allPlatforms.first(function(p){return p.id == 'PPS';});
		if (PPS){
			PPS.genreWeightings = [1, 0.7, 1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.7, 0.9, 1, 0.8, 1];
		}
		var mBox360 = Platforms.allPlatforms.first(function(p){return p.id == 'mBox 360';});
		if (mBox360){
			mBox360.genreWeightings = [1, 0.9, 1, 0.9, 0.7, 0.9, 1, 0.8, 0.6, 0.8, 1, 0.8, 0.9];
		}
		var Nuu = Platforms.allPlatforms.first(function(p){return p.id == 'Nuu';});
		if (Nuu){
			Nuu.genreWeightings = [0.8, 0.6, 0.7, 1, 0.7, 1, 0.9, 1, 0.7, 1, 0.8, 0.6, 1];
		}
		var Playsystem3 = Platforms.allPlatforms.first(function(p){return p.id == 'Playsystem 3';});
		if (Playsystem3){
			Playsystem3.genreWeightings = [1, 0.9, 0.9, 1, 0.7, 0.8, 0.8, 0.8, 0.6, 0.8, 1, 1, 0.8];
		}
		var grPhone = Platforms.allPlatforms.first(function(p){return p.id == 'grPhone';});
		if (grPhone){
			grPhone.genreWeightings = [0.8, 0.8, 0.7, 0.9, 0.7, 1, 0.7, 0.9, 1, 0.8, 0.7, 1];
		}
		var grPad = Platforms.allPlatforms.first(function(p){return p.id == 'grPad';});
		if (grPad){
			grPad.genreWeightings = [0.8, 0.9, 0.7, 0.9, 0.9, 1, 0.8, 0.9, 1, 1, 0.8, 0.7, 1];
		}
		var mPad = Platforms.allPlatforms.first(function(p){return p.id == 'mPad';});
		if (mPad){
			mPad.genreWeightings = [0.7, 0.9, 0.8, 0.9, 0.7, 0.9, 0.7, 0.7, 1, 1, 0.7, 0.7, 0.9];
		}
		var Wuu = Platforms.allPlatforms.first(function(p){return p.id == 'Wuu';});
		if (Wuu){
			Wuu.genreWeightings = [0.9, 0.7, 0.8, 1, 0.7, 1, 0.8, 1, 0.6, 0.9, 0.8, 0.8, 0.8];
		}
		var OYA = Platforms.allPlatforms.first(function(p){return p.id == 'OYA';});
		if (OYA){
			OYA.genreWeightings = [0.9, 0.7, 0.8, 0.9, 0.8, 1, 0.8, 0.9, 0.7, 1, 0.7, 0.7, 0.9];
		}
		var mBoxOne = Platforms.allPlatforms.first(function(p){return p.id == 'mBox One';});
		if (mBoxOne){
			mBoxOne.genreWeightings = [1, 0.8, 0.9, 0.9, 0.7, 0.9, 1, 0.8, 0.6, 0.6, 1, 1, 0.7];
		}
		var Playsystem4 = Platforms.allPlatforms.first(function(p){return p.id == 'Playsystem 4';});
		if (Playsystem4){
			Playsystem4.genreWeightings = [1, 0.8, 1, 0.9, 0.7, 0.9, 1, 0.8, 0.7, 0.7, 1, 1, 0.6];
		}
		var Swap = Platforms.allPlatforms.first(function(p){return p.id == 'Swap';});
		if (Swap){
			Swap.genreWeightings = [0.9, 0.8, 1, 0.8, 0.7, 1, 0.9, 1, 0.7, 0.9, 0.9, 0.7, 0.7];
		}
		var mBoxNext = Platforms.allPlatforms.first(function(p){return p.id == 'mBox Next';});
		if (mBoxNext){
			mBoxNext.genreWeightings = [0.9, 0.9, 0.9, 0.8, 0.7, 1, 0.7, 0.7, 0.8, 0.6, 1, 0.8, 0.6];
		}
		var Playsystem5 = Platforms.allPlatforms.first(function(p){return p.id == 'Playsystem 5';});
		if (Playsystem5){
			Playsystem5.genreWeightings = [1, 0.7, 0.9, 1, 0.7, 0.9, 0.9, 0.9, 0.7, 0.8, 1, 0.9, 0.6];
		}
		}
		
// Change every single genre weightings for every in-game topic

        {
		var Sports = Topics.topics.first(function(topic){return topic.id == 'Sports';});
		if (Sports){
			Sports.genreWeightings = [1, 0.6, 0.6, 1, 0.7, 1, 1, 0.6, 0.8, 0.6, 0.6, 0.6, 1];
		}
		var Military = Topics.topics.first(function(topic){return topic.id == 'Military';});
		if (Military){
			Military.genreWeightings = [1, 0.6, 0.8, 1, 1, 0.6, 0.6, 0.7, 0.8, 0.7, 1, 0.8, 0.9];
		}
		var Medieval = Topics.topics.first(function(topic){return topic.id == 'Medieval';});
		if (Medieval){
			Medieval.genreWeightings = [1, 1, 1, 0.8, 1, 0.7, 0.8, 0.9, 0.6, 0.8, 0.9, 0.9, 1];
		}
		var Space = Topics.topics.first(function(topic){return topic.id == 'Space';});
		if (Space){
			Space.genreWeightings = [1, 0.8, 0.6, 1, 1, 0.7, 1, 1, 0.9, 0.9, 1, 0.8, 1];
		}
		var Fantasy = Topics.topics.first(function(topic){return topic.id == 'Fantasy';});
		if (Fantasy){
			Fantasy.genreWeightings = [1, 1, 1, 0.8, 1, 0.6, 0.9, 1, 0.8, 0.8, 1, 0.8, 0.8];
		}
		var Pirate = Topics.topics.first(function(topic){return topic.id == 'Pirate';});
		if (Pirate){
			Pirate.genreWeightings = [1, 1, 1, 0.8, 1, 0.6, 0.8, 0.9, 0.9, 1, 1, 0.8, 0.9];
		}
		var SciFi = Topics.topics.first(function(topic){return topic.id == 'Sci-Fi';});
		if (SciFi){
			SciFi.genreWeightings = [1, 1, 1, 1, 1, 0.8, 1, 1, 0.9, 0.9, 1, 0.9, 1];
		}
		var Airplane = Topics.topics.first(function(topic){return topic.id == 'Airplane';});
		if (Airplane){
			Airplane.genreWeightings = [1, 0.6, 0.8, 1, 1, 1, 1, 0.9, 0.9, 0.8, 0.9, 0.7, 0.9];
		}
		var Dungeon = Topics.topics.first(function(topic){return topic.id == 'Dungeon';});
		if (Dungeon){
			Dungeon.genreWeightings = [1, 0.8, 1, 1, 1, 0.6, 0.6, 0.9, 0.7, 0.7, 0.8, 0.8, 0.6];
		}
		var Mystery = Topics.topics.first(function(topic){return topic.id == 'Mystery';});
		if (Mystery){
			Mystery.genreWeightings = [0.6, 1, 1, 0.8, 0.6, 0.8, 0.7, 1, 0.7, 0.9, 0.8, 1, 0.8];
		}
		var MartialArts = Topics.topics.first(function(topic){return topic.id == 'Martial Arts';});
		if (MartialArts){
			MartialArts.genreWeightings = [1, 0.8, 1, 1, 0.7, 1, 0.8, 0.9, 0.8, 0.6, 1, 0.7, 0.8];
		}
		var History = Topics.topics.first(function(topic){return topic.id == 'History';});
		if (History){
			History.genreWeightings = [0.8, 0.8, 0.8, 1, 1, 0.9, 0.6, 0.7, 1, 0.8, 0.7, 0.6, 0.7];
		}
		var Business = Topics.topics.first(function(topic){return topic.id == 'Business';});
		if (Business){
			Business.genreWeightings = [0.6, 0.8, 0.8, 1, 1, 0.6, 0.6, 0.7, 1, 0.7, 0.6, 0.6, 0.6];
		}
		var Transport = Topics.topics.first(function(topic){return topic.id == 'Transport';});
		if (Transport){
			Transport.genreWeightings = [0.6, 0.6, 0.6, 1, 1, 0.6, 1, 0.6, 0.8, 0.8, 0.7, 0.6, 0.9];
		}
		var Comedy = Topics.topics.first(function(topic){return topic.id == 'Comedy';});
		if (Comedy){
			Comedy.genreWeightings = [0.6, 1, 0.8, 0.6, 0.6, 1, 0.7, 0.7, 0.7, 0.9, 0.8, 0.6, 0.8];
		}
		var Ninja = Topics.topics.first(function(topic){return topic.id == 'Ninja';});
		if (Ninja){
			Ninja.genreWeightings = [1, 0.8, 0.8, 0.6, 0.8, 0.9, 0.8, 1, 0.6, 0.7, 1, 0.7, 0.9];
		}
		var Romance = Topics.topics.first(function(topic){return topic.id == 'Romance';});
		if (Romance){
			Romance.genreWeightings = [0.6, 1, 0.8, 0.9, 0.6, 0.9, 0.6, 0.7, 0.9, 0.9, 0.8, 0.6, 0.7];
		}
		var Movies = Topics.topics.first(function(topic){return topic.id == 'Movies';});
		if (Movies){
			Movies.genreWeightings = [0.8, 0.8, 0.6, 1, 0.6, 1, 0.7, 0.7, 1, 1, 0.6, 0.8, 0.7];
		}
		var Spy = Topics.topics.first(function(topic){return topic.id == 'Spy';});
		if (Spy){
			Spy.genreWeightings = [1, 1, 1, 0.8, 0.7, 0.8, 0.6, 0.7, 0.8, 1, 0.9, 0.8, 0.6];
		}
		var Detective = Topics.topics.first(function(topic){return topic.id == 'Detective';});
		if (Detective){
			Detective.genreWeightings = [0.6, 1, 1, 0.8, 0.6, 0.9, 0.7, 0.7, 1, 1, 1, 0.8, 0.6];
		}
		var Cyberpunk = Topics.topics.first(function(topic){return topic.id == 'Cyberpunk';});
		if (Cyberpunk){
			Cyberpunk.genreWeightings = [1, 0.8, 1, 0.8, 0.7, 0.6, 0.9, 1, 0.8, 0.8, 1, 0.9, 0.7];
		}
		var UFO = Topics.topics.first(function(topic){return topic.id == 'UFO';});
		if (UFO){
			UFO.genreWeightings = [1, 0.8, 0.6, 0.8, 1, 0.8, 0.8, 0.9, 0.7, 0.8, 1, 1, 0.8];
		}
		var Hospital = Topics.topics.first(function(topic){return topic.id == 'Hospital';});
		if (Hospital){
			Hospital.genreWeightings = [0.6, 0.6, 0.8, 1, 0.8, 0.7, 0.6, 0.7, 1, 0.9, 0.7, 0.9, 0.7];
		}
		var Evolution = Topics.topics.first(function(topic){return topic.id == 'Evolution';});
		if (Evolution){
			Evolution.genreWeightings = [0.7, 0.6, 0.6, 1, 1, 0.6, 0.6, 0.6, 1, 1, 0.6, 0.6, 0.6];
		}
		var TimeTravel = Topics.topics.first(function(topic){return topic.id == 'Time Travel';});
		if (TimeTravel){
			TimeTravel.genreWeightings = [0.9, 1, 1, 0.7, 0.6, 0.7, 0.8, 0.8, 1, 1, 0.8, 0.6, 0.6];
		}
		var Life = Topics.topics.first(function(topic){return topic.id == 'Life';});
		if (Life){
			Life.genreWeightings = [0.6, 1, 0.9, 1, 0.6, 0.8, 0.8, 0.8, 1, 1, 0.6, 0.7, 0.7];
		}
		var VirtualPet = Topics.topics.first(function(topic){return topic.id == 'Virtual Pet';});
		if (VirtualPet){
			VirtualPet.genreWeightings = [0.6, 0.8, 0.9, 1, 0.9, 1, 0.6, 0.7, 0.9, 0.9, 0.6, 0.7, 0.6];
		}
		var Vocabulary = Topics.topics.first(function(topic){return topic.id == 'Vocabulary';});
		if (Vocabulary){
			Vocabulary.genreWeightings = [0.6, 0.6, 0.6, 1, 1, 1, 0.6, 0.6, 1, 1, 0.6, 0.6, 0.6];
		}
		var Hunting = Topics.topics.first(function(topic){return topic.id == 'Hunting';});
		if (Hunting){
			Hunting.genreWeightings = [0.6, 0.6, 0.6, 1, 1, 1, 0.7, 0.8, 0.8, 0.6, 1, 0.8, 0.8];
		}
		var Law = Topics.topics.first(function(topic){return topic.id == 'Law';});
		if (Law){
			Law.genreWeightings = [0.6, 1, 0.9, 0.9, 0.9, 0.6, 0.6, 0.6, 1, 1, 0.6, 0.6, 0.6];
		}
		var GameDev = Topics.topics.first(function(topic){return topic.id == 'Game Dev';});
		if (GameDev){
			GameDev.genreWeightings = [0.6, 0.7, 0.6, 1, 0.6, 0.8, 0.6, 0.6, 0.7, 0.7, 0.6, 0.6, 0.6];
		}
		var City = Topics.topics.first(function(topic){return topic.id == 'City';});
		if (City){
			City.genreWeightings = [0.7, 0.6, 0.7, 1, 1, 0.7, 1, 0.8, 0.8, 0.6, 0.6, 0.8, 0.9];
		}
		var School = Topics.topics.first(function(topic){return topic.id == 'School';});
		if (School){
			School.genreWeightings = [0.8, 1, 1, 1, 1, 0.8, 0.7, 0.8, 1, 1, 0.6, 0.8, 0.8];
		}
		var Fashion = Topics.topics.first(function(topic){return topic.id == 'Fashion';});
		if (Fashion){
			Fashion.genreWeightings = [0.6, 0.8, 1, 1, 0.6, 1, 0.6, 0.6, 0.8, 0.8, 0.6, 0.7, 0.6];
		}
		var Zombies = Topics.topics.first(function(topic){return topic.id == 'Zombies';});
		if (Zombies){
			Zombies.genreWeightings = [1, 0.7, 0.9, 0.7, 0.9, 1, 0.8, 0.9, 0.6, 0.6, 1, 1, 0.6];
		}
		var Hacking = Topics.topics.first(function(topic){return topic.id == 'Hacking';});
		if (Hacking){
			Hacking.genreWeightings = [0.7, 0.8, 0.7, 1, 1, 0.6, 0.8, 0.9, 0.9, 0.8, 0.8, 1, 0.8];
		}
		var Government = Topics.topics.first(function(topic){return topic.id == 'Government';});
		if (Government){
			Government.genreWeightings = [0.6, 0.6, 0.6, 1, 1, 0.7, 0.6, 0.7, 0.9, 0.7, 0.8, 0.7, 0.6];
		}
		var Prison = Topics.topics.first(function(topic){return topic.id == 'Prison';});
		if (Prison){
			Prison.genreWeightings = [1, 1, 0.8, 1, 0.8, 0.6, 0.8, 0.8, 0.9, 0.7, 1, 0.8, 0.9];
		}
		var Surgery = Topics.topics.first(function(topic){return topic.id == 'Surgery';});
		if (Surgery){
			Surgery.genreWeightings = [0.8, 0.7, 0.6, 1, 0.7, 0.6, 0.6, 0.6, 1, 0.9, 0.7, 0.8, 0.6];
		}
		var Music = Topics.topics.first(function(topic){return topic.id == 'Music';});
		if (Music){
			Music.genreWeightings = [1, 0.9, 0.6, 1, 0.6, 1, 0.7, 0.8, 1, 0.9, 0.6, 0.7, 0.6];
		}
		var Rythm = Topics.topics.first(function(topic){return topic.id == 'Rythm';});
		if (Rythm){
			Rythm.genreWeightings = [1, 0.7, 0.7, 1, 0.6, 1, 0.6, 0.8, 1, 0.8, 0.6, 0.7, 0.6];
		}
		var Superheroes = Topics.topics.first(function(topic){return topic.id == 'Superheroes';});
		if (Superheroes){
			Superheroes.genreWeightings = [1, 0.6, 0.9, 0.6, 0.6, 0.7, 0.8, 1, 0.9, 0.8, 0.8, 0.9, 0.7];
		}
		var PostApocalyptic = Topics.topics.first(function(topic){return topic.id == 'Post Apocalyptic';});
		if (PostApocalyptic){
			PostApocalyptic.genreWeightings = [1, 0.8, 1, 0.6, 0.9, 0.6, 0.7, 0.9, 0.7, 0.6, 1, 1, 0.7];
		}
		var AlternateHistory = Topics.topics.first(function(topic){return topic.id == 'Alternate History';});
		if (AlternateHistory){
			AlternateHistory.genreWeightings = [1, 0.8, 1, 0.8, 0.9, 0.6, 0.6, 0.7, 0.8, 0.7, 0.8, 1, 0.8];
		}
		var Vampire = Topics.topics.first(function(topic){return topic.id == 'Vampire';});
		if (Vampire){
			Vampire.genreWeightings = [1, 0.8, 1, 0.6, 0.6, 0.7, 0.8, 1, 0.6, 0.6, 1, 1, 0.9];
		}
		var Werewolf = Topics.topics.first(function(topic){return topic.id == 'Werewolf';});
		if (Werewolf){
			Werewolf.genreWeightings = [1, 0.8, 1, 0.6, 0.6, 0.7, 0.8, 1, 0.6, 0.6, 1, 1, 0.9];
		}
		var Aliens = Topics.topics.first(function(topic){return topic.id == 'Aliens';});
		if (Aliens){
			Aliens.genreWeightings = [1, 0.8, 1, 0.6, 0.9, 0.7, 0.8, 1, 0.8, 0.9, 0.9, 1, 0.9];
		}
		var WildWest = Topics.topics.first(function(topic){return topic.id == 'Wild West';});
		if (WildWest){
			WildWest.genreWeightings = [0.9, 0.7, 1, 0.6, 0.6, 0.7, 0.8, 1, 0.8, 0.9, 1, 0.8, 0.8];
		}
		var Dance = Topics.topics.first(function(topic){return topic.id == 'Dance';});
		if (Dance){
			Dance.genreWeightings = [0.9, 0.6, 0.6, 1, 0.6, 1, 0.7, 0.6, 0.8, 0.8, 0.6, 0.7, 1];
		}
		var Cooking = Topics.topics.first(function(topic){return topic.id == 'Cooking';});
		if (Cooking){
			Cooking.genreWeightings = [0.9, 0.7, 0.8, 1, 0.7, 1, 0.7, 0.6, 1, 0.9, 0.6, 0.6, 0.6];
		}
		var Farming = Topics.topics.first(function(topic){return topic.id == 'Farming';});
		if (Farming){
			Farming.genreWeightings = [0.6, 0.7, 1, 1, 0.8, 0.9, 0.6, 0.7, 0.8, 1, 0.6, 0.6, 0.7];
		}
		var Crime = Topics.topics.first(function(topic){return topic.id == 'Crime';});
		if (Crime){
			Crime.genreWeightings = [1, 0.7, 0.8, 0.9, 0.7, 0.6, 1, 1, 0.9, 0.7, 0.9, 0.9, 0.8];
		}
		var Disasters = Topics.topics.first(function(topic){return topic.id == 'Disasters';});
		if (Disasters){
			Disasters.genreWeightings = [0.9, 0.8, 0.7, 1, 1, 0.7, 0.6, 0.6, 0.9, 0.7, 0.6, 0.8, 0.8];
		}
		var Assassin = Topics.topics.first(function(topic){return topic.id == 'Assassin';});
		if (Assassin){
			Assassin.genreWeightings = [1, 0.7, 1, 0.8, 0.6, 0.6, 0.7, 1, 0.8, 0.6, 1, 1, 0.8];
		}
		var Thief = Topics.topics.first(function(topic){return topic.id == 'Thief';});
		if (Thief){
			Thief.genreWeightings = [0.9, 0.8, 1, 0.8, 0.9, 0.7, 0.9, 1, 0.8, 0.7, 1, 0.9, 0.7];
		}
		var Colonization = Topics.topics.first(function(topic){return topic.id == 'Colonization';});
		if (Colonization){
			Colonization.genreWeightings = [0.7, 0.6, 0.6, 1, 1, 0.7, 0.7, 0.7, 1, 0.8, 0.6, 0.7, 0.8];
		}
		var Construction = Topics.topics.first(function(topic){return topic.id == 'Construction';});
		if (Construction){
			Construction.genreWeightings = [0.7, 0.6, 0.6, 1, 0.9, 0.8, 0.6, 0.6, 0.9, 0.9, 0.6, 0.6, 0.7];
		}
		var Mythology = Topics.topics.first(function(topic){return topic.id == 'Mythology';});
		if (Mythology){
			Mythology.genreWeightings = [1, 0.8, 0.9, 0.9, 0.8, 0.7, 0.8, 0.7, 0.9, 1, 0.7, 0.7, 0.7];
		}
		var Abstract = Topics.topics.first(function(topic){return topic.id == 'Abstract';});
		if (Abstract){
			Abstract.genreWeightings = [0.9, 1, 0.6, 0.6, 0.8, 0.6, 0.8, 0.8, 0.6, 0.7, 0.8, 0.9, 0.8];
		}
		var MadScience = Topics.topics.first(function(topic){return topic.id == 'Mad Science';});
		if (MadScience){
			MadScience.genreWeightings = [0.9, 1, 0.7, 0.9, 0.6, 0.6, 0.7, 0.9, 0.8, 0.7, 0.9, 0.9, 0.8];
		}
		var ExtremeSports = Topics.topics.first(function(topic){return topic.id == 'Extreme Sports';});
		if (ExtremeSports){
			ExtremeSports.genreWeightings = [1, 0.6, 0.6, 1, 0.7, 0.9, 1, 0.7, 0.6, 0.6, 0.8, 0.8, 0.9];
		}
		var Dystopian = Topics.topics.first(function(topic){return topic.id == 'Dystopian';});
		if (Dystopian){
			Dystopian.genreWeightings = [0.8, 0.9, 0.8, 1, 0.9, 0.6, 0.7, 0.7, 0.8, 0.6, 1, 1, 0.6];
		}
		var Expedition = Topics.topics.first(function(topic){return topic.id == 'Expedition';});
		if (Expedition){
			Expedition.genreWeightings = [0.7, 0.9, 0.6, 0.9, 1, 0.6, 0.6, 0.8, 1, 0.8, 0.8, 0.7, 0.7];
		}
		var Technology = Topics.topics.first(function(topic){return topic.id == 'Technology';});
		if (Technology){
			Technology.genreWeightings = [0.6, 0.7, 0.6, 1, 0.9, 0.6, 0.8, 0.8, 1, 0.9, 0.7, 0.8, 0.6];
		}
		}

// Change every single genre weightings for every missions

        {
		var Engine = Missions.getAllMissions().first(function(a){return a.id == 'Engine';});
		if (Engine){
			Engine.genreWeightings = [1, 0.7, 0.7, 0.9, 0.9, 0.6, 1, 1, 0.9, 1, 1, 1, 1];
		}
		var Gameplay = Missions.getAllMissions().first(function(a){return a.id == 'Gameplay';});
		if (Gameplay){
			Gameplay.genreWeightings = [0.9, 0.8, 0.9, 1, 1, 1, 1, 0.9, 1, 0.8, 0.9, 1, 1];
		}
		var StoryQuests = Missions.getAllMissions().first(function(a){return a.id == 'Story/Quests';});
		if (StoryQuests){
			StoryQuests.genreWeightings = [0.7, 1, 1, 0.8, 0.8, 0.7, 0.8, 1, 1, 0.9, 0.7, 0.9, 0.9];
		}
		var Dialogs = Missions.getAllMissions().first(function(a){return a.id == 'Dialogs';});
		if (Dialogs){
			Dialogs.genreWeightings = [0.6, 1, 1, 0.7, 0.7, 0.7, 0.6, 0.7, 0.9, 1, 0.6, 0.8, 0.8];
		}
		var LevelDesign = Missions.getAllMissions().first(function(a){return a.id == 'Level Design';});
		if (LevelDesign){
			LevelDesign.genreWeightings = [0.9, 0.8, 0.9, 0.9, 1, 1, 0.8, 1, 0.8, 1, 0.9, 0.9, 0.8];
		}
		var AI = Missions.getAllMissions().first(function(a){return a.id == 'AI';});
		if (AI){
			AI.genreWeightings = [1, 0.7, 0.8, 1, 0.9, 0.6, 0.9, 0.9, 0.8, 0.8, 1, 0.8, 1];
		}
		var WorldDesign = Missions.getAllMissions().first(function(a){return a.id == 'World Design';});
		if (WorldDesign){
			WorldDesign.genreWeightings = [0.8, 1, 1, 0.8, 1, 0.7, 0.9, 0.9, 0.9, 0.9, 0.8, 1, 0.9];
		}
		var Graphic = Missions.getAllMissions().first(function(a){return a.id == 'Graphic';});
		if (Graphic){
			Graphic.genreWeightings = [1, 0.9, 0.9, 1, 0.8, 1, 1, 0.9, 0.7, 0.8, 1, 0.8, 0.8];
		}
		var Sound = Missions.getAllMissions().first(function(a){return a.id == 'Sound';});
		if (Sound){
			Sound.genreWeightings = [0.9, 0.8, 0.8, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.8];
		}
		}

// Removes "Racing" and "Horror" topics because they're genres now

var topicNames = ["Racing", "Horror"];

for (var i = Topics.topics.length - 1; i >= 0; i--) {
    var topic = Topics.topics[i];
    for (var h = 0; h < topicNames.length; h++) {
        if (topic.id === topicNames[h]) {
            Topics.topics.splice(i, 1);
            break;
        }
    }
}

// Changing how General.getAvailableGenres works

General.getAvailableGenres = function(a) {
    var b = GameGenre.getAll();
    var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
	 
    // Check if "CasualGames" research is not completed
    if (a.researchCompleted.indexOf(Research.CasualGames) === -1) {
        b = b.filter(function(genre) {
            return genre.id !== "Casual";
        });
    }
	
	// Check if "EducationalGames" research is not completed
    if (a.researchCompleted.indexOf(Research.getItemById("EducationalGames")) === -1) {
        b = b.filter(function(genre) {
            return genre.id !== "Educational";
        });
    }

	// Check if "ShooterGames" research is not completed
    if (a.researchCompleted.indexOf(Research.getItemById("ShooterGames")) === -1) {
        b = b.filter(function(genre) {
            return genre.id !== "Shooter";
        });
    }
	
    // Removes Arcade genre after some time
    if (GameManager.company.isLaterOrEqualThan(8, 5) && !DataStore.data.isArcadeGenrePermanent) {
        b = b.filter(function(genre) {
            return genre.id !== "Arcade";
        });
    }
	
    return b;
};

// Fix a bug that makes "fake" genre hits

var originalGetPlatformGenreHintHtml = Knowledge.getPlatformGenreHintHtml;

Knowledge.getPlatformGenreHintHtml = function(a, b) {
    var originalGetAvailableGenres = General.getAvailableGenres;
    General.getAvailableGenres = function(a) {
        return GameGenre.getAll();
    };
    var original = originalGetPlatformGenreHintHtml.call(this, a, b);
    General.getAvailableGenres = originalGetAvailableGenres;

    return original;
};

// ******************************************************************************************
// Polyfills 
// ******************************************************************************************

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.includes called on null or undefined');
    }
    var O = Object(this);
    var len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    var n = fromIndex || 0;
    if (n >= len) {
      return false;
    }
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
    while (k < len) {
      if (O[k] === searchElement || (typeof O[k] === 'NaN' && typeof searchElement === 'NaN')) {
        return true;
      }
      k++;
    }
    return false;
  };
}


// ******************************************************************************************
// Gamerules (Options)
// ******************************************************************************************

// Platform Presets 

The_Top_And_Flops_Mod.PlatformPresets = (function(module) {
    module.addPlatformPresetsSelector = function() {
        var htmlContent = '<div id="gameMode" class="centeredButtonWrapper"><br><h2>Platform Presets</h2>' +
            '<select id="gsSelect" style="max-width: 250px">' +
                '<option value="0">Original Preset</option>' +
                '<option value="1" selected="selected">Essential Preset</option>' +
                '<option value="2">Plus Preset</option>' +
                '<option value="3">Obscure Preset</option>' +
                '<option value="4">Extended Preset</option>' +
                '<option value="5">PC-Only Preset</option>' +
                '<option value="6">Custom Preset</option>' +
            '</select>' +
            '<p>Set how many platforms get released during the game.</p>'

        var c = $("#newGameView").find(".featureSelectionPanel");
        c.append(htmlContent);
		
        // Attach change handler
        $("#gsSelect").change(function() {
            var selectedValue = $(this).val();

            // Remove previous platform select if exists
            $("#selPlatformsHTML").remove();

            if (selectedValue === '6') {
                // Multi-select HTML
                var platformOptions = '';
                for (var i = 0; i < Platforms.allPlatforms.length; i++) {
                    var platform = Platforms.allPlatforms[i];
                    platformOptions += '<option value="' + platform.id + '">' + Platforms.getPlatformName(platform) + '</option>';
                }

                var multiSelectHTML = '<div id="selPlatformsHTML"><p>Hold ctrl while clicking to select multiple platforms to add in your preset.</p><p></p><select id="selPlatforms" multiple="multiple" size="10">' + platformOptions + '</select></div>';

                // Append after the select element
                $(this).after(multiSelectHTML);
            }
        });
    };

    module.SetPlatformPresets = function() {
        var originalCloseNewGameView = UI.closeNewGameView;
        var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");

        UI.closeNewGameView = function() {
            var selectedValue = $("#gsSelect").val();
            var selectedPlatValues = $("#selPlatforms").val() || []; 

            // Base arrays to make my life less miserable
            var basePlatformIds = ["G64", "PC", "TES", "Master V", "Gameling", "Vena Gear", "Vena Oasis", "Super TES", "Playsystem", "TES 64", "DreamVast", "Playsystem 2", "mBox", "gameSphere", "GS", "PPS", "mBox 360", "Nuu", "Playsystem 3", "grPhone", "grPad", "mPad", "3GS", "PPSViva", "Wuu", "OYA", "mBox One", "Playsystem 4", "Swap", "Playsystem 5", "mBox Series X", "mBox Scar", "PlaySystem 6", "LambdaDOS", "Swap 2", "Ninvento One", "Flex", "GreenStation", "Vena Neo", "Gameling Color", "Gameling Advanced", "HoloBox", "Playsystem 7", "PPSViva Now", "Ninvento MX", "4KGS", "Vena Mars", "mBox Z", "mBox Kinesis"];
            var baseNotifIds = ["moveToLevel2", "moveToLevel3", "moveToLevel4", "unlockHwLab", "unlockRnDLab", "bailout", "miniBailout", "inDevBailout", "gameOver", "airCon1Callback", "airCon2Callback", "productPlacement1Finished", "announceConsole", "endOfGame1", "endOfGameNative", "gameInterviewQ1", "gameInterviewQ2", "buySharesOffer", "buyBackShares", "TargetAudiences", "MarketingStory", "riseOf64", "PCTakesOver", "TESRumour", "TESSuccess", "MasterVRumour", "MasterVSuccess", "SuperTES", "VonnyNinventoAnnouncement1", "VonnyNinventoAnnouncement2", "PlaySystem2Announcement", "DreamVastSlowing", "Playsystem2Launch", "DreamVastDiscontinued", "GSRumour", "Gen7Rumours", "mBox360", "Nuu", "grPad", "mPadReport", "visorius", "EndOFG64", "TESRumour2", "MasterVPreAnnouncement", "Gameling", "VenaGear", "Oasis", "PlaySystemAnnouncement", "TES64Announcement", "DreamVast", "mBoxAnnouncement", "mBoxDelayed", "gameSphere", "NinventoGS", "PPSAnnouncement", "mPad", "PS3", "grPhone", "PS3Hype", "wuu", "mboxOne", "ps4", "mboxOnePs4", "swap", "swapBitter", "growingPC", "oya", "mboxNext", "ps5", "GrWaveHoax", "OYAcommercialfailure", "K4Cann", "GreenHeartGamesAntiPiracy", "DeathOfArcadeGames", "VenaVSninvento", "RiseOfEducationalGames", "FakePlatformLicense", "Y2KBug", "PlaySystemAact", "PayRespect", "GoldenGameSphere", "NinventoSwap2Ann", "Swap2PreOrders", "Swap2Success", "Flex_announcement", "LambdaDOS_announcement", "Green_announcement", "mBoxScarAnnID", "PlaySystemSixAnnID", "NinventoOneAnn", "VenaNeoAnn", "GSiReveal&&3GSleak", "3GSann", "3GSpricereduction", "New3GSreveal", "PPSVivaAnn", "gamelingcolorannouncement", "HoloBoxAnn", "PlaySystemSevenAnnID", "PPSVivaNowAnnID", "NinventoMXAnnID", "4KGSannouncement", "VenaMarsAnn", "mBoxZAnnID", "NextAnn", "SenikuAdventures", "ComputerYakuman", "BarcodeTrainer", "grPods", "WuuVerseClones", "EGDMovement", "PolusGameAnn"];

            // Function to extend arrays
            function extendArray(base, extension) {
                return base.concat(extension);
            }

            switch (selectedValue) {
                case "0":
				    DataStore.data.preset = "Original";
                    DataStore.data.platformids = basePlatformIds;
                    DataStore.data.notifids = baseNotifIds;
                    break;
                case "1":
				    DataStore.data.preset = "Essential";
                    DataStore.data.platformids = extendArray(basePlatformIds, ["Odissea", "Grapintosh", "Itara 2600", "Itara 5200", "Itara 7800", "Itara Lynks", "Itara Leopard", "Neon Geon", "Neon Geon CD", "Superview", "Vena Jupiter", "Super Can", "Neon Geon Pocket", "PR/ECE", "Neon Geon X", "Universe", "Universe Tab", "Logical Pocket", "grMac G3", "Sokia 3310", "Sokia En-Gage", "Cyberling"]);
                    DataStore.data.notifids = extendArray(baseNotifIds, ["Itara5200Announcement", "Itara5200Leak", "Itara5200flop", "ItaraGamesBurial", "Itara7800Announcement", "ItaraLynksAnnouncement", "NeonGeonCDAnn", "NeonGeonCDfail", "SuperViewAnnouncement", "ItaraLeopardAnn", "ItaraLeopardFailure", "ItaraFailure", "VenaJupiterLeak", "VenaJupiterAnn", "VenaJupiterFail", "SuperCanAnnouncement", "SuperCanFlop", "gamelingcolorannouncement", "NeonGeonAnn", "NeonGeonPocketAnn", "AdvanceAnn", "PR/ECE_announcement", "UniverseAnn", "UniverseNote7Explding", "UniverseTabAnn", "NeonGeonX_announcement", "deathofneongeon", "ItaraVSSannouncement", "LogicalPocketAnnouncement", "grMacG3Ann", "grMacG3Success", "grMacG4Ann", "grGlassAnn", "Sokia3310Ann", "Sokia3310Success", "Sokia3310Trend", "SokiaEn-GageAnn", "CyberlingAnn", "CyberlingFlop"]);
                    break;
                case "2":
				    DataStore.data.preset = "Plus";
                    DataStore.data.platformids = extendArray(basePlatformIds, ["Odissea", "Grapintosh", "Itara 2600", "Itara 5200", "Itara 7800", "Itara Lynks", "Itara Leopard", "Neon Geon", "Neon Geon CD", "Superview", "Vena Jupiter", "Super Can", "Neon Geon Pocket", "Gameling Color", "PR/ECE", "Gameling Advanced", "Neon Geon X", "Universe", "Universe Tab", "Logical Pocket", "Itara VSS", "Game & Clock", "Grapple II", "Vena VG-1000", "Odissea 2", "G16", "Chip Engine", "Itara XEgg", "Amica CD32", "3D-On", "Chip-FX", "PolySystem", "SuperSwan", "SuperSwan Color", "Monia", "grMac G3", "ZY 80", "ZY 81", "ZY Spectral", "Senclair QJ", "ZY Spectral Centaurs", "Grapple Peppen", "Zigglobe", "MessPad", "Sokia 3310", "Arcade 2001", "LearnFrog", "Cyberling"]);
                    DataStore.data.notifids = extendArray(baseNotifIds, ["Itara7800Announcement", "ItaraLynksAnnouncement", "NeonGeonCDAnn", "SuperViewAnnouncement", "ItaraLeopardAnn", "ItaraLeopardFailure", "ItaraFailure", "VenaJupiterLeak", "VenaJupiterAnn", "VenaJupiterFail", "SuperCanAnnouncement", "SuperCanFlop", "gamelingcolorannouncement", "NeonGeonAnn", "NeonGeonPocketAnn", "AdvanceAnn", "PR/ECE_announcement", "UniverseAnn", "UniverseNote7Explding", "UniverseTabAnn", "NeonGeonX_announcement", "deathofneongeon", "ItaraVSSannouncement", "mBoxSeriesXann", "LogicalPocketAnnouncement", "Game&ClockAfterAnn", "VenaVG1000ann", "Odissea2Ann", "G16Ann", "ChipEngineAnn", "ItaraXEggAnn", "AmicaCD32Ann", "3D-Onann", "3D-OnFlop", "M2-OnAnn", "M2-OnSold", "M2-OnCancellation", "3D-OnBankruptcy", "ChipFXannouncement", "PolyDiscoverA", "SuperSwanAnn", "SuperSwanColorAnn", "SuperCrystalAnn", "MoniaAnn", "grMacG3Ann", "grMacG3Success", "grMacG4Ann", "grGlassAnn", "ZYSpectralAnn", "ZYSpectralSuccess", "QJAnn", "QJfail", "SpectralCentaursAnn", "GrapplePeppenAnn", "GrapplePeppenFail", "ZigglobeAnn", "ZigglobeFail", "ZigglobeMafia", "ZigglobeFail2", "ZigglobeCarCrash", "MessPadAnn", "Sokia3310Ann", "Sokia3310Success", "Sokia3310Trend", "on4it", "LearnFrogAnn", "CyberlingAnn", "CyberlingFlop"]);
                    break;
                case "3":
				    DataStore.data.preset = "Obscure";
                    DataStore.data.platformids = extendArray(basePlatformIds, ["Astrovision", "GR32", "GR2X", "Stedia", "PR/ECE", "Pikatu Mini", "Monia", "Closed", "BeeBox", "Gromebook", "Gamedia", "Gamedate", "CD-e", "G16", "Animation 200", "Pokecomp", "Rawberry PI", "Bingoo", "Picovision", "Pev-Sen", "Rawberry Stom", "Chip Engine", "Chip-FX", "Vector", "SuperSwan", "SuperSwan Color", "SuperCrystal", "CompGo", "STeP WorkStation", "grMac G3", "Nuubo", "Pick-A-Game", "LCD Casse", "Grapple Peppen", "MegaScan", "FJ Tower Mars", "OakPilot", "Robyko", "Gamenet", "Astrologer", "Cassioferia", "Arcade 2001", "Vena AI", "Vagueness"]);
                    DataStore.data.notifids = extendArray(baseNotifIds, ["GR32ann", "GR2Xann", "stediaAnn", "Stediacommercialfailure", "PR/ECE_announcement", "PikatuMiniAnn", "MoniaAnn", "NTEClosedAnn", "BeeBoxAnn", "GromebookAnn", "GromebookRise", "GamediaAnn", "GamedateAnn", "GamedateDelay", "CD-eAnn", "CD-Efail", "G16Ann", "Ani200Ann", "PokecompAnn", "RawberryPIAnn", "BingooAnn", "Pev-SenAnn", "Pev-SenFail", "RawberryStormAnn", "ChipEngineAnn", "ChipFXannouncement", "SuperSwanAnn", "SuperSwanColorAnn", "SuperCrystalAnn", "CompGoAnn", "STePWorkStationAnn", "STePWorkStationSuccess", "grMacG3Ann", "grMacG3Success", "grMacG4Ann", "grGlassAnn", "NuuboAnn", "NuuboDiscontinued", "LCDCasseAnn", "GrapplePeppenAnn", "GrapplePeppenFail", "MegaScanAnn", "MegaScanFail", "FJTowerMarsAnn", "OakPilotAnn", "RobykoAnn", "GamenetAnn", "GamenetFail", "AstrologerAnn", "AstrologerFail", "CassioferiaAnn", "LearnFrogAnn", "VenaAIAnn"]);
                    break;
                case "4":
				    DataStore.data.preset = "Full";
                    DataStore.data.platformids = extendArray(basePlatformIds, ["Odissea", "Grapintosh", "Itara 2600", "Itara 5200", "Itara 7800", "Itara Lynks", "Itara Leopard", "Neon Geon", "Neon Geon CD", "Superview", "Vena Jupiter", "Super Can", "Neon Geon Pocket", "Gameling Color", "PR/ECE", "Gameling Advanced", "Neon Geon X", "Universe", "Universe Tab", "Logical Pocket", "Itara VSS", "Game & Clock", "Grapple II", "VG-1000", "Odissea 2", "G16", "Chip Engine", "Itara XEgg", "Amica CD32", "3D-On", "Chip-FX", "PolySystem", "SuperSwan", "SuperSwan Color", "SuperCrystal", "Monia", "GR32", "GR2X", "Stedia", "Pikatu Mini", "Closed", "BeeBox", "Gromebook", "Gamedia", "Gamedate", "CD-e", "Animation 200", "Pokecomp", "Rawberry PI", "Bingoo", "Picovision", "Pev-Sen", "Rawberry Stom", "Tele-Game", "SmartVision", "ConnecoVision", "Super Chip", "STeP WorkStation", "grMac G3", "Nuubo", "Pick-A-Game", "FJ Tower", "ZY 80", "ZY 81", "ZY Spectral", "Senclair QJ", "ZY Spectral Centaurs", "Astrovision", "LCD Casse", "Grapple Peppen", "MegaScan", "Zigglobe", "FJ Tower Mars", "MessPad", "Sokia 3310", "OakPilot", "Robyko", "Sokia En-Gage", "Gamenet", "Astrologer", "Cassioferia", "Arcade 2001", "LearnFrog", "Vena AI", "Vagueness", "Cyberling"]);
                    DataStore.data.notifids = extendArray(baseNotifIds, ["Itara5200Announcement", "Itara5200Leak", "Itara5200flop", "ItaraGamesBurial", "Itara7800Announcement", "ItaraLynksAnnouncement", "NeonGeonCDAnn", "NeonGeonCDfail", "SuperViewAnnouncement", "ItaraLeopardAnn", "ItaraLeopardFailure", "ItaraFailure", "VenaJupiterLeak", "VenaJupiterAnn", "VenaJupiterFail", "SuperCanAnnouncement", "SuperCanFlop", "gamelingcolorannouncement", "NeonGeonAnn", "NeonGeonPocketAnn", "AdvanceAnn", "PR/ECE_announcement", "UniverseAnn", "UniverseNote7Explding", "UniverseTabAnn", "NeonGeonX_announcement", "deathofneongeon", "ItaraVSSannouncement", "mBoxSeriesXann", "LogicalPocketAnnouncement", "Game&ClockAfterAnn", "VenaVG1000ann", "Odissea2Ann", "G16Ann", "ChipEngineAnn", "ItaraXEggAnn", "AmicaCD32Ann", "3D-Onann", "3D-OnFlop", "M2-OnAnn", "M2-OnSold", "M2-OnCancellation", "3D-OnBankruptcy", "ChipFXannouncement", "PolyDiscoverA", "SuperSwanAnn", "SuperSwanColorAnn", "SuperCrystalAnn", "MoniaAnn", "GR32ann", "GR2Xann", "stediaAnn", "Stediacommercialfailure", "PikatuMiniAnn", "NTEClosedAnn", "BeeBoxAnn", "GromebookAnn", "GromebookRise", "GamediaAnn", "GamedateAnn", "GamedateDelay", "CD-eAnn", "CD-Efail", "Ani200Ann", "PokecompAnn", "RawberryPIAnn", "BingooAnn", "Pev-SenAnn", "Pev-SenFail", "RawberryStormAnn", "On-TVSystemIIIAnn", "SuperChipAnn", "CompGoAnn", "STePWorkStationAnn", "STePWorkStationSuccess", "grMacG3Ann", "grMacG3Success", "grMacG4Ann", "grGlassAnn", "NuuboAnn", "NuuboDiscontinued", "FJTowerAnn", "ZYSpectralAnn", "ZYSpectralSuccess", "QJAnn", "QJfail", "SpectralCentaursAnn", "LCDCasseAnn", "GrapplePeppenAnn", "GrapplePeppenFail", "MegaScanAnn", "MegaScanFail", "ZigglobeAnn", "ZigglobeFail", "ZigglobeMafia", "ZigglobeFail2", "ZigglobeCarCrash", "FJTowerMarsAnn", "MessPadAnn", "Sokia3310Ann", "Sokia3310Success", "Sokia3310Trend", "OakPilotAnn", "RobykoAnn", "SokiaEn-GageAnn", "GamenetAnn", "GamenetFail", "AstrologerAnn", "AstrologerFail", "CassioferiaAnn", "on4it", "LearnFrogAnn", "VenaAIAnn", , "CyberlingAnn", "CyberlingFlop"]);
                    break;
                case "5":
				    DataStore.data.preset = "PC";
                    DataStore.data.platformids = ["G64", "PC", "mPad", "Astrovision", "ZY 80", "ZY 81", "ZY Spectral", "Senclair QJ", "ZY Spectral Centaurs", "Grapple II", "Grapintosh", "G16", "FJ Tower", "Itara XEgg", "STeP WorkStation", "BeeBox", "grMac G3", "Rawberry PI", "Gromebook"];
                    DataStore.data.notifids = ["moveToLevel2", "moveToLevel3", "moveToLevel4", "unlockHwLab", "unlockRnDLab", "bailout", "miniBailout", "inDevBailout", "gameOver", "airCon1Callback", "airCon2Callback", "productPlacement1Finished", "announceConsole", "endOfGame1", "endOfGameNative", "gameInterviewQ1", "gameInterviewQ2", "buySharesOffer", "buyBackShares", "TargetAudiences", "MarketingStory", "riseOf64", "PCTakesOver", "mPadReport", "visorius", "EndOFG64", "mPad", "growingPC", "GreenHeartGamesAntiPiracy", "DeathOfArcadeGames", "RiseOfEducationalGames", "Y2KBug", "G16Ann", "BeeBoxAnn", "GromebookAnn", "GromebookRise", "RawberryPIAnn", "FJTowerAnn", "STePWorkStationAnn", "STePWorkStationSuccess", "grMacG3Ann", "grMacG3Success", "grMacG4Ann", "grGlassAnn", "ZYSpectralAnn", "ZYSpectralSuccess", "QJAnn", "QJfail", "SpectralCentaursAnn", "ItaraXEggAnn"];
                    break;
                case "6":
                if (selectedPlatValues.length > 0) {
                        DataStore.data.platformids = selectedPlatValues;
                } else {
                        DataStore.data.platformids = []; // Prevent undefined arrays
                    }

                    // Base notification IDs
                    var baseNotifIds = [
                        "moveToLevel2", "moveToLevel3", "moveToLevel4", "unlockHwLab", "unlockRnDLab",
                        "bailout", "miniBailout", "inDevBailout", "gameOver", "airCon1Callback",
                        "airCon2Callback", "productPlacement1Finished", "announceConsole", "endOfGame1",
                        "endOfGameNative", "gameInterviewQ1", "gameInterviewQ2", "buySharesOffer",
                        "buyBackShares", "TargetAudiences", "MarketingStory", "EGDMovement",
						"FakePlatformLicense", "Y2KBug", "PlaySystemAact", "PayRespect", "GoldenGameSphere"
                    ];

                    DataStore.data.notifids = baseNotifIds.concat();

                    // Generate notification IDs for each selected platform
                    selectedPlatValues.forEach(function(platform) {
                        var uneditedPlatformName = platform; // Save original for checks
                        var platformName = platform.replace(/\s+/g, '');
						
                        // Add general IDs
                        DataStore.data.notifids.push(platformName + "Ann");
                        DataStore.data.notifids.push(platformName + "AnnID");
                        DataStore.data.notifids.push(platformName + "Fail");
                        DataStore.data.notifids.push(platformName + "Success");
                        DataStore.data.notifids.push(platformName + "Leak");
    
                        // Use switch for specific platform checks
                        switch (uneditedPlatformName) {
							case "PC":
                                DataStore.data.notifids.push("RiseOfEducationalGames", "FifthGenLeak", "DeathOfArcadeGames", "GreenHeartGamesAntiPiracy", "K4Cann");
                                break;
                            case "Game & Clock":
                                DataStore.data.notifids.push("Game&ClockAfterAnn", "ComputerYakuman");
                                break;
							case "Pokecomp":
                                DataStore.data.notifids.push("BarcodeTrainer");
								break;
							case "SmartVision":
                                DataStore.data.notifids.push("On-TVSystemIIIAnn");
								break;
                            case "Itara 5200":
                                DataStore.data.notifids.push("Itara5200Leak", "Itara5200Announcement", "ItaraGamesBurial");
                                break;
                            case "VG-1000":
                                DataStore.data.notifids.push("VenaVG1000ann");
                                break;
                            case "Senclair QJ":
                                DataStore.data.notifids.push("QJAnn", "QJfail");
                                break;
                            case "Itara 7800":
                                DataStore.data.notifids.push("Itara5200flop", "Itara7800Announcement");
                                break;
                            case "Animation 200":
                                DataStore.data.notifids.push("Ani200Ann");
                                break;
							case "Vena Oasis":
                                DataStore.data.notifids.push("VenaVSninvento");
                                break;
                            case "Itara Lynks":
                                DataStore.data.notifids.push("ItaraLynksAnnouncement");
                                break;
                            case "Neon Geon CD":
                                DataStore.data.notifids.push("NeonGeonCDfail");
                                break;
                            case "SuperView":
                                DataStore.data.notifids.push("SuperViewAnnouncement");
                                break;
                            case "CD-e":
                                DataStore.data.notifids.push("CD-Efail");
                                break;
                            case "3D-On":
                                DataStore.data.notifids.push("3D-Onann", "3D-OnFlop", "M2-OnAnn", "M2-OnSold", "M2-OnCancellation", "3D-OnBankruptcy");
                                break;
                            case "Itara Leopard":
                                DataStore.data.notifids.push("ItaraLeopardFailure", "ItaraFailure");
                                break;
                            case "Chip FX":
                                DataStore.data.notifids.push("ChipFXannouncement");
                                break;
                            case "Super Can":
                                DataStore.data.notifids.push("SuperCanAnnouncement", "SuperCanFlop");
                                break;
                            case "grMac G3":
                                DataStore.data.notifids.push("grMacG3Ann", "grMacG3Success", "grMacG4Ann", "grGlassAnn");
                                break;
                            case "Gameling Color":
                               DataStore.data.notifids.push("gamelingcolorannouncement");
                                break;
							case "Sokia 3310":
                               DataStore.data.notifids.push("Sokia3310Ann", "Sokia3310Success", "Sokia3310Trend");
                                break;
                            case "SuperSwan Color":
                                DataStore.data.notifids.push("SuperCrystalAnn");
                                break;
                            case "PolySystem":
                                DataStore.data.notifids.push("PolyDiscoverA");
                                break;
                            case "Gameling Advanced":
                                DataStore.data.notifids.push("AdvanceAnn");
                                break;
                            case "PR/ECE":
                                DataStore.data.notifids.push("PR/ECE_announcement");
                                break;
                            case "GR32":
                                DataStore.data.notifids.push("GR32ann");
                                break;
							case "Zigglobe":
							    DataStore.data.notifids.push("ZigglobeAnn", "ZigglobeFail", "ZigglobeMafia", "ZigglobeFail2", "ZigglobeCarCrash");
								break;
                            case "GR2X":
                                DataStore.data.notifids.push("GR2Xann");
                                break;
                            case "Nuubo":
                                DataStore.data.notifids.push("NuuboDiscontinued");
                                break;
                            case "Rawberry Stom":
                                DataStore.data.notifids.push("RawberryStormAnn");
                                break;
							case "grPhone":
                                DataStore.data.notifids.push("grPods", "GrWaveHoax");
                                break;
                            case "Universe":
                                DataStore.data.notifids.push("UniverseNote7Explding");
                                break;
                            case "mBox Kinesis":
                                DataStore.data.notifids.push("NextAnn");
                                break;
                            case "3GS":
                                DataStore.data.notifids.push("GSiReveal&&3GSleak", "3GSann", "3GSpricereduction", "New3GSreveal");
                                break;
                            case "Gromebook":
                                DataStore.data.notifids.push("GromebookRise");
                                break;
                            case "Neon Geon X":
                                DataStore.data.notifids.push("NeonGeonX_announcement", "deathofneongeon");
                                break;
							case "Nuu":
                                DataStore.data.notifids.push("SenikuAdventures");
                                break;
							case "Wuu":
                                DataStore.data.notifids.push("WuuVerseClones");
                                break;
							case "OYA":
                                DataStore.data.notifids.push("OYAcommercialfailure");
                                break;
                            case "Closed":
                                DataStore.data.notifids.push("NTEClosedAnn");
                                break;
                            case "ZY Spectral Centaurs":
                                DataStore.data.notifids.push("SpectralCentaursAnn");
                                break;
                            case "Stedia":
                                DataStore.data.notifids.push("stediaAnn", "Stediacommercialfailure");
                                break;
                            case "Itara VSS":
                                DataStore.data.notifids.push("ItaraVSSannouncement");
                                break;
                            case "mBox Series X":
                                DataStore.data.notifids.push("mBoxSeriesXann");
                                break;
                            case "Logical Pocket":
                                DataStore.data.notifids.push("LogicalPocketAnnouncement");
                                break;
                            case "Gamedate":
                                DataStore.data.notifids.push("GamedateDelay");
                                break;
                            case "Swap 2":
                                DataStore.data.notifids.push("NinventoSwap2Ann", "Swap2PreOrders", "Swap2Success");
                                break;
                            case "Flex":
                                DataStore.data.notifids.push("Flex_announcement");
                                break;
                            case "LambdaDOS":
                                DataStore.data.notifids.push("LambdaDOS_announcement");
                                break;
                            case "GreenStation":
                                DataStore.data.notifids.push("Green_announcement");
                                break;
                            case "4KGS":
                                DataStore.data.notifids.push("4KGSannouncement");
                                break;
                                }
});
                    break;
            }
			
            originalCloseNewGameView();
        };
    };


    module.addPlatformPresetsSelector();
    module.SetPlatformPresets();

    return module;
})(The_Top_And_Flops_Mod.PlatformPresets || {});

// Permanent Arcade Genre 

The_Top_And_Flops_Mod.isArcadeGenrePermanent = (function(module) {
    module.addisArcadeGenrePermanentSelector = function() {
        var htmlContent = '<div id="gameMode" class="centeredButtonWrapper">' +
		//'<div class="windowTitle smallerWindowTitle"><span style="font-size: 17pt;">Gamerules</span></div><br>' +
            '<h2>Permanent Arcade Genre</h2>' +
            '<select id="agSelect" style="max-width: 250px">' +
                '<option value="0" selected="selected">False</option>' +
                '<option value="1">True</option>' +
            '</select>' +
            '<p>Makes the Arcade genre permanent and does not fade away in favor of the Casual genre. Default: False</p></div>'

        var c = $("#newGameView").find(".featureSelectionPanel");
        c.append(htmlContent);
    };

    module.SetisArcadeGenrePermanent = function() {
        var originalCloseNewGameView = UI.closeNewGameView;
        var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");

        UI.closeNewGameView = function() {
            var selectedValue = $("#agSelect").val();

            switch (selectedValue) {
                case "0":
                DataStore.data.isArcadeGenrePermanent = false;
                    break;
                case "1":
                DataStore.data.isArcadeGenrePermanent = true;
                  break;
            }
			
            originalCloseNewGameView();
        };
    };


    module.addisArcadeGenrePermanentSelector();
    module.SetisArcadeGenrePermanent();

    return module;
})(The_Top_And_Flops_Mod.isArcadeGenrePermanent || {});

// ******************************************************************************************
// Custom Platform Preset
// ******************************************************************************************

// This will be replaced in the future, I Promise
// - Wukah (Wildlukah), 25/07/2026

var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");

Platforms.getPlatformsOnMarket = function(a) {
    return Platforms.getPlatforms(a).filter(function(platform) {
        // Check if platform's id is contained in platformids
        return DataStore.data.platformids.includes(platform.id) || platform.isCustom ;
    }).filter(function(a) {
        return Platforms.getRetireDate(a) > Math.floor(GameManager.company.currentWeek) && (!a.isCustom || (a.isCustom && GameManager.company.currentWeek > General.getWeekFromDateString(a.published) && !a.soldOut));
    });
};

var OGcheckAndRemoveRetiredPlatforms = General.checkAndRemoveRetiredPlatforms;
var endsupporttext = ["is no longer supported".localize(), "has become obsolete".localize(), "has been taken off the market".localize()];	
General.checkAndRemoveRetiredPlatforms = function(a, b, c) {
    for (var l = 0; l < b.length; l++) {
            var g = b[l];
	     	var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
            DataStore.data.platformids && (DataStore.data.platformids.includes(g.id)) && Platforms.getRetireDate(g) === Math.floor(c) + 8 && a.notifications.push(new Notification("News".localize("heading"), "In two months the {0} will be taken off the market!".localize().format(g.name), {
                type: NotificationType.PlatformNews
            }));
			if (Platforms.getRetireDate(g) === Math.floor(c) && DataStore.data.platformids && (DataStore.data.platformids.includes(g.id))) {
                    for (var f = 0, r = 0, p = 0; p < a.gameLog.length; p++) {
                        var s = a.gameLog[p];
                        !s.flags.isExtensionPack && 0 < s.platforms.filter(function(a) {
                            return a.id === g.id
                        }).length && (f++, r += s.revenue)
                    }
                    0 <			
                        f ? 1 == f ? a.notifications.push(new Notification("News".localize("heading"), "{0} {1}.\nYou've released {2} game for the platform and earned a total of {3}!".localize().format(g.name, endsupporttext.pickRandom(), f, UI.getShortNumberString(r)), {
                            type: NotificationType.SalesReports
                        })) : a.notifications.push(new Notification("News".localize("heading"), "{0} {1}.\nYou've released {2} games for the platform and earned a total of {3}!".localize().format(g.name, endsupporttext.pickRandom(), f, UI.getShortNumberString(r)), {
                            type: NotificationType.SalesReports
                        })) :
                        a.notifications.push(new Notification("News".localize("heading"), "{0} {1}.".localize().format(g.name, endsupporttext.pickRandom()), {
                            type: NotificationType.PlatformNews
                        }))
        }
    }
}

    General.proceedOneWeek = function(a, b) {
        var c = a.currentWeek;
        b && (c = b);
        if (0 < c) {
            var l = a.getDate(c);
            4 < l.year && GameManager.ghg2() ? a.notifications.push(new Notification("{TrialEnd}")) : l.year > 30 * GameManager.flags.gameLengthModifier && !a.flags.endGameShown && (Media.createFinishGameStories(), a.flags.endGameShown = !0);
            var g = a.cash;
            Sales.processSales(a);
            1 === l.week && (General.payMonthlyCosts(a),
                Sales.sellSDKs(a), Sales.applyGridSales(a));
            a.flags.pirateMode && 0 < a.flags.sharesSold && (g = a.cash - g, 0 < g && (g = g / 100 * 20 * (a.flags.sharesSold / 100), g = Math.floor(g), a.adjustCash(-g, "Dividends".localize("heading"))));
            GameTrends.updateTrends(a);
            1 < a.currentLevel && 5 === l.month && 1 === l.week && 7 < l.year ? GameFlags.CONFERENCE_DISABLED || (a.flags.customConference ? (l = a.booths.first(function(a) {
                return 4 === a.id
            }), a.conferenceStandFactor = l.standFactor, a.flags.customConference = !1, a.notifications.push(new Notification("News".localize("heading"),
                "Our own game convention is taking place in 4 weeks!".localize(), {
                    type: NotificationType.Others,
                    previewImage: "./images/notificationIcons/icon_notification_new_office.png"
                })), a.flags.isCustomConference = !0, a.flags.customConference = !1) : a.notifications.push(new Notification("{BoothPicker}"))) : 6 === l.month && 2 === l.week && a.conferenceStandFactor && !GameFlags.CONFERENCE_DISABLED && General.runConference(a);
            GDT.fire(GameManager, GDT.eventKeys.gameplay.weekProceeded, {
                company: a
            })
        }
        for (l = 0; l < Platforms.allPlatforms.length; l++) g =
            Platforms.allPlatforms[l], Platforms.getPublishDate(g) === Math.floor(c) && (0 === g.licencePrize ? a.licencedPlatforms.push(g) : a.availablePlatforms.push(g), 0 < Math.floor(c) && DataStore.data.platformids && (DataStore.data.platformids.includes(g.id)) &&  (g = new Notification({
                header: "Platform News".localize("heading"),
                text: "Today the new game platform {0} by {1} has been released.".localize().format(g.name, g.company),
                image: Platforms.getPlatformImage(g, a.currentWeek),
                type: NotificationType.PlatformNews
            }), a.notifications.push(g), a.flags.contractspublisher && (a.flags.contractspublisher.expireBy =
                GameManager.gameTime - 1)));
        General.checkAndRemoveRetiredPlatforms(a, a.licencedPlatforms, c);
        General.checkAndRemoveRetiredPlatforms(a, a.availablePlatforms, c);
        LOGWEEKSALES && General.logMaxSalesForWeek(c);
    };

    var a = DecisionNotifications;
    var b = function(a) {
            if (a.date && Math.floor(GameManager.company.currentWeek) < General.getWeekFromDateString(a.date, a.ignoreGameLengthModifier)) return !1;
            if (a.maxTriggers || a.date) {
                var b = GameManager.company.eventTriggerCounts[a.id],
                    c = a.date ? 1 : a.maxTriggers;
                if (b && b >= c) return !1
            }
			var DataStore = GDT.getDataStore("The_Top_And_Flops_Mod");
            if (DataStore.data.notifids && !DataStore.data.notifids.includes(a.id)) return !1;
            return a.date || a.trigger && a.trigger(GameManager.company)
        },
        c = function(a) {
            var b = GameManager.company;
            b.eventTriggerCounts[a.id] ? b.eventTriggerCounts[a.id]++ : b.eventTriggerCounts[a.id] =
                1
        };
	a.getNewNotifications = function(l) {
        l = GameManager.company;
        var g = a.getAllNotificationsObjects().filter(function(a) {
            return !a.isRandomEvent && b(a)
        }).map(function(a) {
            c(a);
            return a.notification ? a.notification : a.getNotification(l)
        });
        0 == g.length && (g = a.getRandomEvents(l));
        return g
    };
	
// Makes efficency more balanced (or op)
var oldFeatureEfficiency = General.getFeatureEfficiencyFromMissionFocus.toString();

// This time I'll use toString + replace
var newFeatureEfficiency = oldFeatureEfficiency.replace(
    "5*b.sum(function(a){",
    "2 * b.sum(function(a) {"
);

General.getFeatureEfficiencyFromMissionFocus = eval("(" + newFeatureEfficiency + ")");

})();