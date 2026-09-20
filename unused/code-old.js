// ******************************************************************************************
// Mod Name: The_Top_And_Flops_Mod
// Mod Id: The_Top_And_Flops_Mod_WildLukah
// Mod Version: 1.5.0
// Mod File: code.js
// ******************************************************************************************
// Author: WildLukah
// Last modified: 04/06/2025 12:13
// ******************************************************************************************
// Notes: This file is loaded from main.js
// ******************************************************************************************

// Create the main mod object (our package)
var The_Top_And_Flops_Mod = {};

(function(){

// ******************************************************************************************
// Platforms
// ******************************************************************************************

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
	genreWeightings:[  0.9, 0.8, 1, 0.9, 0.7, 0.7 ],
	audienceWeightings:[  1, 0.9, 0.8 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Logical Pocket.png",
	events:[{
	id: "LogicalPocketAnnouncement",
	date: "26/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, the American company Logue, Inc. revealed a new console called Logical Pocket. {n} Shaped and comfortable like a Gameling, the new Logical Pocket uses field-programmable gate array chips to play games from various retro handheld consoles, notably Ninvento's Gameling and Vena's Vena Gear, on a new, much more powerful device, with a new LCD screen and high-quality audio. {n} The new Logical Pocket will also have a microSD slot to allow saving in games and a very powerful lithium-ion battery. {n} Logue also announced multiple variants for the Logical Pocket, included a glow-in-the-dark version. Fans of retro consoles seem very happy, as they can play their favorite titles wherever they are, on this new high-quality portable device. The Logical Pocket will hit the shelves in the next months.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Logical Pocket.png",
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
	startAmount:0.5,
	unitsSold:0.6,
	licencePrize:3E4,
	published:"6/3/1",
	platformRetireDate:"9/1/1",
	developmentCosts:2E4,
	genreWeightings:[  0.9, 0.8, 0.8, 0.9, 1, 0.8 ],
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
	text: "Today, an Asian company called Whatera announced a new portable console, called Superview. This new handheld seems to be a cut-price competitor for Ninvento's Gameling. {n} Featuring an high-quality monocromatic screen, the Superview is packaged with headphones, batteries and a game called Crystalball. {n} Can Superview beat Gameling? We'll find out in some months.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Superview.png",
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
	startAmount:0.312,
	marketKeyPoints: [{
                date: "1/6/3",
                amount: 0.302
            }, {
                date: "2/5/1",
                amount: 0.353
            }, {
				date: "2/11/1",
                amount: 0.330
            }],
	unitsSold:0.38,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"3/4/1",
	developmentCosts:2E4,
	genreWeightings:[  1, 0.9, 0.9, 0.9, 0.9, 0.7 ],
	audienceWeightings:[  0.9, 1, 0.8 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Itara 2600.png",
	events:null
	});

// Adding Itara 5200
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Itara 5200",
	name:"Itara 5200",
	company:"Itara",
	startAmount:0.334,
	unitsSold:0.47,
	licencePrize:50000,
	published:"1/10/4",
	platformRetireDate:"3/4/1",
	developmentCosts:20000,
	genreWeightings:[  1, 0.8, 0.9, 0.8, 0.9, 0.8 ],
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
	text: "According to some sources, Itara is planning a new console codenamed 'IperSystem'. Nothing else is known, so we'll have to wait and see what happens.",
	previewImage: "./images/notificationIcons/icon_notification_platform_release.png",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/companies/Itara.png",
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
	text: "Today, Itara revealed its new console, called Itara 5200. {n} This new device, created to compete with Ninvento's TES, offers better graphics and audio qualities than its predecessor and comes bundled with the popular Super Breaking-out. {n} Fans seem happy with the Itara 5200, although many experts said the new Itara 5200 controller isn't comfortable to hold. This could ruin Itara 5200's sales. {n} Itara announced that the Itara 5200 will be released {0}.".localize().format(General.getETADescription('1/9/4', '1/10/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Itara 5200.png",
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
	startAmount:0.41,
	unitsSold:0.5,
	licencePrize:60000,
	published:"3/4/1",
	platformRetireDate:"6/3/1",
	developmentCosts:25000,
	genreWeightings:[  1, 0.7, 0.8, 0.9, 0.9, 0.9 ],
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
	text: "The recently released Itara 5200 turned out to be a total flop. {n} Experts say the reason it failed is because the Itara 5200's hardware isn't powerful enough to compete against Ninvento's TES. {n} Experts also criticized the controller, which is very uncomfortable to use according to many players. We are curious to see how Itara will react now.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Itara 5200.png",
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
	text: "At a press conference, Itara announced the successor to the Itara 5200. {n} Called the Itara 7800 proSystem, this new device has the most powerful color graphics of any console currently available. {n} The Itara 7800 is also backwards compatible with games from the Itara 2600. {n} The new Itara 7800 will release {0}.".localize().format(General.getETADescription('3/2/1', '3/4/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Itara 7800.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding Itara Lynks
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Lynks",
	name:"Lynks",
	company:"Itara",
	startAmount:0.5,
	unitsSold:0.63,
	licencePrize:5E4,
	published:"4/2/1",
	platformRetireDate:"8/5/1",
	developmentCosts:2E4,
	genreWeightings:[  0.9, 0.8, 0.9, 1, 0.9, 0.7 ],
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
	text: "Following Gameling's release, Itara also announced their own handheld console, called Itara Lynks. {n} The Itara Lynks is more advanced than Ninvento's monochrome Gameling, with a 16-Bit color liquid-crystal display. Initial tests suggest that the Itara Lynks has an average battery and a decent game library. {n} Despite being impressive, experts say that the Itara Lynks has a low chance to compete against the Gameling. The Itara Lynks will arrive in stores {0}.".localize().format(General.getETADescription('3/10/1', '4/2/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Itara Lynks.png",
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
	genreWeightings:[  1, 0.8, 0.9, 1, 0.9, 0.7 ],
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
	text: "In a surprise announcement, Itara revealed a new, next-gen console, called Itara VSS. {n} The console, with an appearance that pays homage to the Itara 2600, runs modern games through a very powerful hardware with its own operating system, called ItaraOS.  {n} The Itara VSS can run older games from older Itara systems too. {n} Itara left the console industry many years ago, but today fans of retro consoles seem to be very happy about this announcement. Itara stated that their new console will be released {0}.".localize().format(General.getETADescription('27/6/2', '27/10/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Itara VSS.png",
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
	genreWeightings:[  0.9, 0.7, 1, 1, 0.9, 0.8 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:2,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Super Can.png",
	events:[{
	id: "SuperCanAnnouncement",
	date: "8/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "A Taiwanese company called FunnyTech just announced a new home console, called Super Can. {n} With the appearance that resembles a Super TES, the Super Can is a sufficiently powerful console for what it offers. {n} While it doesn't offer 3D technology, the Super Can offers very powerful 15-Bit 2D graphics and uses ROM Cartridges as storage media. {n} Twelve games were announced for this console. The Super Can will be released {0}.".localize().format(General.getETADescription('8/2/1', '9/12/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Super Can.png",
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
	text: "Recent studies suggest that the Super Can performed so poorly that it lost its company, FunnyTech, lost over USD $6 million. {n} In the end, FunnyTech is planning to destroy all equipment from production and development of the system, and sold off all remaining systems to the United States as scrap parts. {n} The console will be retired from market  {0}.".localize().format(General.getETADescription('9/11/4', '9/12/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Super Can.png",
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
                amount: 0.72
            }, {
                date: "10/5/3",
                amount: 0.74
            }],
	unitsSold:0.77,
	licencePrize:2E5,
	published:"7/6/1",
	platformRetireDate:"10/12/1",
	developmentCosts:7E4,
	genreWeightings:[  1, 0.9, 1, 0.8, 0.7, 0.6 ],
	audienceWeightings:[  0.9, 0.8, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vena Jupiter.png",
	events:[{
	id: "VenaJupiterLeak",
	date: "7/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Rumor has it that Vena is planning to publicly announce their console at the next Tokyo Game Show. {n} In recent years, Vena has lost a lot of market share to newer and more innovative platforms, while still releasing new extensions for the Oasis, such as the X32 and Iper CD. {n} This new Vena console is rumored to use 3D graphics and CD-ROMs instead of cartridges, but we will have to wait to confirm that.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/companies/Vena.png",
    previewImage: "./images/notificationIcons/icon_notification_platform_release.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "VenaJupiterAnn",
	date: "7/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vena announced their new console, called Vena Jupiter. {n} The Vena Jupiter is a revolutionary console, having the most powerful hardware ever seen: it has 32-Bit graphics and sound, runs 3D smoothly, and uses CD-ROM format for games instead of ROM cartridges. {n} Several ports of arcade games and original games were announced. Fans seem very happy about this new device, and expert predict that this console will be a success. Vena stated that the Vena Jupiter will release {0}.".localize().format(General.getETADescription('7/2/1', '7/6/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Vena Jupiter.png",
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
	text: "Despite the exciting start, sales of the Vena Jupiter were drastically slowed due to Vonny's Playsystem. The problem also seems to be the lack of titles compared to other platforms, and the cancellation of many first-party titles such as Senic Ex-Treme.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/Vena Jupiter.png",
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
	platformRetireDate:"12/6/1",
	developmentCosts:6E4,
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.7, 0.8 ],
	audienceWeightings:[  0.9, 0.8, 0.7 ],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon Pocket.png",
	events:[{
	id: "NeonGeonAnn",
	date: "10/7/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today TNK announced an handheld system called Neon Geon Pocket. {n} Like the Gameling, the Neon Geon Pocket is a monochrome device, but it has a better hardware than any other handheld console in the market. {n} TNK also announced that they are collaborating with partners to prepare arcade titles for this console. The Neon Geon Pocket will hit the shelves {0}.".localize().format(General.getETADescription('10/7/1', '10/10/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Neon Geon Pocket.png",
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
	platformRetireDate:"27/8/2",
	developmentCosts:1E5,
	genreWeightings:[  0.9, 0.7, 0.9, 0.7, 0.9, 0.8 ],
	audienceWeightings:[  1, 0.9, 0.6 ],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/3GS.png",
	events:[{
	id: "3GSann",
	date: "19/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "At the G3 of this year, Ninvento announced the successor to their popular GS, called 3GS. {n} The most prominent feature of the 3GS is its ability to display stereoscopic 3D images without the use of 3D glasses or additional accessories. {n} The system also offers backward compatibility with Ninvento GS video games, a 3D camera, an online shop called nShop where you can buy softwares and the Virtual System, which provides a method for users to download and play video games originally released for older video game systems. {n} Ninvento fans seem very hyped about this new console. Ninvento revealed that the 3GS will release {0}.".localize().format(General.getETADescription('19/6/2', '20/1/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/3GS.png",
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
	text: "Recently, Ninvento announced a significant price reduction for their recently released handheld system, the 3GS, that goes from US$249.99 to US$169.99. This was done because of disappointing launch sales. {n} As an apology, Ninvento offered ten free TES games and ten free Gameling Advanced games from their Ninvento nShop to consumers who bought the system at the original launch price.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/3GS.png",
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
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.7, 0.8 ],
	audienceWeightings:[  0.9, 0.8, 0.7 ],
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
	text: "Today, Ninvento announced the successor to the Gameling, simply called Gameling Color. {n} Compared to the original, the new Gameling Color features a 8-Bit color TFT screen and a processor that operates twice as fast. The Gameling Color retains backward compatibility with games initially developed for its predecessor, the Gameling. {n} Many reviewers consider these improvements insufficient to justify Ninvento's releasing it as a separate product, but they predict that it will be a success. {n} The Gameling Color will release {0}.".localize().format(General.getETADescription('10/8/2', '10/10/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Gameling Color.png",
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
	published:"12/7/4",
	platformRetireDate:"14/12/4",
	developmentCosts:80000,
	genreWeightings:[  0.9, 0.8, 0.8, 0.8, 1, 0.9 ],
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
	text: "In a recent press conference, the Japanese company Aquaminus, famous for distributing visual novels and adult games, announced a new portable console called PR/ECE. {n} Available in several versions, PR/ECE focuses primarily on adult games. Games for this console can be purchased and downloaded via an application on a computer and a USB-B cable. {n} Aquaminus has also announced a software competition for programmers, and it is expected that most versions of this system will be open source. {n} The PR/ECE will hit the Japanese market {0}.".localize().format(General.getETADescription('12/4/4', '12/7/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/PRIECE.png",
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
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.7, 0.8 ],
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
	text: "Today, TNK announced a new handheld console, called Neon Geon X. {n} This console comes with twenty built-in Neon Geon Pocket and Arcade games, and additional titles are available on game cards. {n} Fans said the console would cost $700, but TNK revealed it would cost $199. {n} The new Neon Geon X will release {0}.".localize().format(General.getETADescription('22/6/1', '22/7/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Neon Geon X.png",
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
	text: "Recently, TNK has asked Tomio, the company that produces the Neon Geon X units, to cease its manufacture and pull all existing stock from store shelves. The reason for this action appears to be due to the low manufacturing standards used by Tomio. {n} In response, Tomio claimed to be in compliance with the contract between the companies and announced that it will take legal action against TNK, but will also stop the production of the Neon Geon X {0}.".localize().format(General.getETADescription('23/12/1', '23/12/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Neon Geon X.png",
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
	unitsSold:6.7,
	licencePrize:1500000,
	published:"32/2/4",
	platformRetireDate:"260/12/4",
	developmentCosts:250000,
	genreWeightings:[  0.8, 0.7, 1, 0.8, 0.7, 0.8 ],
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
	text: "Today, Ninvento announced their next-gen handheld console, called the Ninvento Flex. {n} Similar to Gameling's design, the Flex It's small enough to be held with just one hand. This new console fixes all the issues that Ninvento's Swap had: it offers new, 1440p graphics at solid frame rates, a new wireless remote play that goes up to 32 players, and has a large hard drive capable of holding many AAA games. {n} The Flex seems to be appreciated by many fans. The console will hit the shelves {0}.".localize().format(General.getETADescription('31/10/4', '32/2/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Flex.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding GreenStation
// -----------------------------------------------------------
GDT.addPlatform({
	id:"GreenStation",
	name:"GreenStation",
	company:"Greenheart Games",
	startAmount:6.1,
	unitsSold:6.8,
	licencePrize:1500000,
	published:"33/5/4",
	platformRetireDate:"260/12/4",
	developmentCosts:200000,
	genreWeightings:[  0.9, 0.7, 0.9, 1, 0.8, 0.7 ],
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
	text: "Today, a company called Greenheart Games, popular for their games like Game Dev Tycoon and Tavern Keeper, announced their own new gaming console, the GreenStation. {n} The new GreenStation is an eco-friendly and very powerful console, capable of handling smoothly most of the video games available on the market while consuming less energy. Even further, the console will have AI tools to make the day easier for its customers. {n} The idea was liked by many experts and fans around the world seem exited for this console, and Greenheart Games is teaming up with many third-party companies to produce many exclusives. The console will arrive on the market {0}.".localize().format(General.getETADescription('32/6/2', '33/5/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/GreenStation.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// These were the first 15/16 platforms lol

// Adding LambdaDOS
// -----------------------------------------------------------
GDT.addPlatform({
	id:"LambdaDOS",
	name:"LambdaDOS",
	company:"Valve",
	startAmount:5.35,
	unitsSold:6.7,
	licencePrize:2000000,
	published:"32/12/3",
	platformRetireDate:"260/12/4",
	developmentCosts:150000,
	genreWeightings:[  1, 0.8, 1, 1, 0.8, 0.6 ],
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
	text: "Today, the popular video game company Valve announced their new machine that will compete against Vonny's Playsystem 5 and Micronoft's mBox Series X, called LambdaDOS. {n} This new generation console, which comes with four new titles bundled like Half-Life 3, uses brand-new technologies that allow players to play all their favorite games from the Steam library in 8K resolution. {n} The LambdaDOS seems very liked by fans, and we are hyped to see if it will take off the market {0}.".localize().format(General.getETADescription('32/8/2', '32/12/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/LambdaDOS.png",
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
	genreWeightings:[  0.9, 0.7, 1, 0.8, 0.7, 0.6 ],
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
	text: "Vonny just announced a new handheld system in their PPS console family, called PPSViva. {n} The new PPSViva offers OLED multi-touch capacitive touchscreen, two analog joysticks, and front and shoulder push-button input, and supports Bluetooth, Wi-Fi, and optional 3G Wi-Fi. {n} Vonny stated their console will release {0}.".localize().format(General.getETADescription('20/3/3', '20/5/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/PPSViva.png",
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
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.7, 0.6 ],
	audienceWeightings:[  1, 0.7, 0.6 ],
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
	text: "During the last G3, Ninvento announced their new successor to the Gameling Color, the 'Gameling Advanced'. {n} The new Gameling Advanced finally offers a new 32-Bit hardware and a new, comfortable design. It will also be backwards compatible with all games created for Gameling family consoles. {n} Despite not being programmed for this, fans were amazed by the fact that it is perfectly possible to create 3D games with worlds made of a limited number of polygons, mapped textures, light sources and shadows in software. {n} Ninvento also announced that the Gameling Advanced will be launched {0} alongside 10 new launch games.".localize().format(General.getETADescription('11/6/1', '12/4/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Gameling Advanced.png",
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
	genreWeightings:[  1, 0.6, 0.9, 0.8, 0.7, 0.9 ],
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
	text: "Today, Grogle announced a brand new cloud gaming device, called Grogle Stedia. {n} The Stedia will be capable of streaming videogames to players at up to 4K resolution and 60 frames per second, with support for high-dynamic-range video.  It offers the option to purchase games from its own store, along with a selection of free-to-play games. {n} Despite all the hype from the fans, many experts predict that cloud gaming won't be a success as Grogle expects. The Grogle Stedia will be released {0}.".localize().format(General.getETADescription('25/10/1', '27/1/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Stedia.png",
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
	text: "Recently, Grogle announced that the Stedia will be discontinued {0}. {n} The Stedia did not gain a foothold in the market, due to many technical problems, a small game library, an unclear business model and many difficulties in the company, including the closure of internal development studios. Grogle is willing to refund related games and devices purchased by the players.".localize().format(General.getETADescription('29/10/4', '30/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/Stedia.png",
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
	genreWeightings: [0.8, 0.7, 0.8, 0.8, 0.7, 1],
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
	text: "Recently out of nowhere a strange, bootleg device was released, called 'PolySystem'. {n} The PolySystem seems to be a clone of the popular TES, made by Ninvento back in the 80s, with a layout that resembles Vonny's PlaySystem. {n} The console seems to be very popular in South America, while Vonny is trying to take legal actions against the manufacturers of this scam.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/PolySystem.png",
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
	published:"27/10/2",
	platformRetireDate:"260/12/4",
	developmentCosts:200000,
    genreWeightings: [0.9, 0.9, 0.9, 0.8, 0.7, 1],
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
	text: "Mirconoft has announced their plans to release a completely new version of the mBox {0} called mBox Series X. {n} This new device offers new high-end technologies that allow the players to play in 4k at 120FPS on average. It will also support Ray-Tracing technology and will be backward compatible with all the games from previous mBox consoles. {n} The technology of the mBox Series X seems promising and we will see how the new console will fare against its competitors.".localize().format(General.getETADescription('27/3/4', '27/8/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/mBox Series X.png",
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
	startAmount:0.6,
		marketKeyPoints: [{
                date: "12/2/1",
                amount: 0.59
            }, {
				date: "12/11/4",
                amount: 0.423
            }],
	unitsSold:0.38,
	licencePrize:150000,
	published:"10/3/4",
	platformRetireDate:"13/12/4",
	developmentCosts:20000,
    genreWeightings: [0.9, 0.6, 0.7, 0.9, 0.8, 1],
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
	text: "Today, Ninvento announced a small device planned to debut {0} called Pikatu Mini. {n} This small device that resembles the Tamagotchi is totally based on the famous yellow electric-type Pookieman Pikatu, originating from the famous saga from Ninvento itself.".localize().format(General.getETADescription('10/2/4', '10/3/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Pikatu Mini.png",
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
    genreWeightings: [1, 0.9, 1, 0.9, 0.7, 0.9],
    audienceWeightings: [0.8, 0.9, 1],
	techLevel:5,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/mBox Kinesis.png",
	events:[{
	id: "NextAnn",
	date: "19/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Mirconoft just announced a new device for the mBox 360, named Kinesis. {n} This new peripheral has a motion camera feature used to track the player's movements and position in 3D space, allowing for a new gaming experience where players can control games with their bodies in the game. {n} Many fans seem hyped for this peripheral. The mBox Kinesis will release {0}".localize().format(General.getETADescription('19/6/1', '19/11/3')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/mBox Kinesis.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
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
                amount: 0.30
            }, {
                date: "2/1/2",
                amount: 0.4
            }, {
				date: "3/9/2",
                amount: 0.37
            }],
	unitsSold:0.39,
	licencePrize:0,
	published:"1/1/1",
	platformRetireDate:"4/2/1",
	developmentCosts:25000,
    genreWeightings: [1, 0.6, 0.7, 0.9, 0.9, 0.6],
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
	text: "After making great successes like TES and Game & Clock, some rumors claim that Ninvento is working on a new portable console, codenamed 'Dot Matrix Play'.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Game & Clock.png",
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
	startAmount:2.22,
            marketKeyPoints: [{
                date: "27/4/3",
                amount: 2.63
            }],
	unitsSold: 3.11,
	licencePrize:350000,
	published: "20/11/1",
	platformRetireDate: "25/10/1",
	developmentCosts:25000,
    genreWeightings: [0.7, 0.9, 0.9, 0.8, 0.7, 1],
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
	text: "Today, Sokia unveiled their new mobile phone which will compete against the GrPhone and Universe devices, called 'Monia'. {n} The Sokia Monia runs on the recently released Windoors Phone systems made by Mirconoft, which features a distinct tile-based interface, integration with Mirconoft services and support for apps from the Windoors Store. {n} Many tech enthusiasts can't wait to see how the Monia will perform in the market, which will release {0}.".localize().format(General.getETADescription('20/10/1', '21/11/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Monia.png",
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
	startAmount:2.82,
            marketKeyPoints: [{
                date: "26/8/2",
                amount: 2.9
            }, {
                date: "27/4/3",
                amount: 3.1
            }, {
                date: "28/2/1",
                amount: 3.311
            }],
	unitsSold:3.91,
	licencePrize:400000,
	published: "19/6/4",
    platformRetireDate: "260/12/4",
    developmentCosts: 50000,
    genreWeightings: [0.9, 0.9, 0.8, 0.7, 0.8, 1],
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
	text: "Today Samseong, a popular South Korean consumer electronics company, announced that they are planning to release a new powerful new mobile phone, called 'Universe', in the next months. {n} The Universe has a touch screen, a camera and a new-gen powerful CPU, allowing mobile games to run more smoothly than on any other mobile device. The Universe, which will compete against Grapple's GrPhone, also uses a new operating system called Endroid.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Universe.png",
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
	text: "Samseong recently stopped production and is recalling all Universe Notes 7 units due to serious problems with the battery detected during the latest hardware tests, which could explode while charging. {n} So far, 35 cases have been reported out of two million units sold worldwide. Samseong is inviting customers to turn off and return the device, guaranteeing them a full refund of the paid amount or replacement with the Universe S7 model.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/Universe.png",
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
	startAmount:2.12,
            marketKeyPoints: [{
                date: "26/8/2",
                amount: 2.3
            }, {
                date: "27/4/3",
                amount: 2.4
            }, {
                date: "28/2/1",
                amount: 2.54
            }],
	unitsSold:2.91,
	licencePrize:500000,
	published: "21/11/1",
    platformRetireDate: "260/12/4",
    developmentCosts: 80000,
    genreWeightings: [0.9, 0.9, 0.8, 0.7, 0.8, 1],
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
	text: "After the success of the Universe, today Samseong announced that they are planning to release a new tablet device, called 'Universe Tab'. {n} The Universe Tab, which will compete against Grapple's GrPad, offers a 7-inches touch screen, Wi-Fi capability and a powerful CPU. Many expect the Universe Tab to do well against the GrPad.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Universe Tab.png",
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
	startAmount:1.12,
	unitsSold:1.61,
	licencePrize:200000,
	published: "23/1/1",
    platformRetireDate: "25/12/4",
    developmentCosts: 25000,
    genreWeightings: [0.9, 0.8, 0.7, 0.8, 0.9, 1],
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
	text: "Today, the chinese technology company NTE announced their own mobile phone device, called NTE Closed. {n} With a simple, compact design available in various bright colors, this new device runs on Filefox OS, a system built on web technologies that allows developers to create applications using familiar web standards. {n} While it looks very promising, many experts don't think NTE Closed will take off against GrPhone and Universe.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Closed.png",
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
	startAmount:1.41,
	unitsSold:2.10,
	licencePrize:250000,
	published:"19/5/2",
    platformRetireDate: "21/12/4",
    developmentCosts: 40000,
    genreWeightings: [0.8, 0.7, 0.8, 0.8, 0.9, 1],
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
	text: "Rawberry Ltd., a Canadian software company specializing in cybersecurity, has revealed a new series of mobile phones, called Rawberry Stom. {n} This new platform has a solid and bulky design, providing a touch screen, and runs on their own operating system, called 'Rawberry OS', which has features geared toward enterprise users, including email integration and security. {n} The Rawberry also comes with its own application delivery platform, allowing a little bit of gaming on this platform. {n} Rawberry announced that their new system will be released {0}.".localize().format(General.getETADescription('19/2/4', '19/5/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Rawberry Stom.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Chip FX
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Chip FX",
	name:"Chip FX",
	company:"Nippon",
	startAmount:0.21,
	unitsSold:0.50,
	licencePrize:5E5,
	published:"7/7/1",
    platformRetireDate: "9/2/1",
    developmentCosts: 8E4,
    genreWeightings: [0.9, 0.6, 1, 0.7, 0.8, 1],
    audienceWeightings: [0.9, 1, 0.8],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Chip FX.png",
	events:[{
	id: "ChipFXannouncement",
	date: "7/3/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Nippon just unveiled their plans to release a new generation platform, the successor to the Chip Engine, in {0}, called Chip FX. {n} This new platform, with a shape that resembles a small tower PC, has a 32-bit processor that allows impressive graphics and sounds. It also uses CD-ROM format for games and allows full capability for full-motion video. {n} Despite having an impressive hardware, many experts were stunned by the fact that Chip FX hasn't yet made the transition from 2D to 3D. This could cloud its sales, but we'll see how it performs.".localize().format(General.getETADescription('7/3/1', '7/7/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Chip FX.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding TES 64DD
// -----------------------------------------------------------
GDT.addPlatform({
	id:"TES 64DD",
	name:"TES 64DD",
	company:"Ninvento",
	startAmount:0.41,
	unitsSold:0.54,
	licencePrize:250000,
	published:"11/3/2",
    platformRetireDate: "12/5/4",
    developmentCosts: 80000,
    genreWeightings: [0.9, 0.8, 0.7, 0.8, 0.7, 0.9],
    audienceWeightings: [1, 0.9, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/TES 64DD.png",
	events:[{
	id: "TES64DDann",
	date: "10/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "During the latest G3, Ninvento announced a new add-on for their TES 64, simply called TES 64DD. {n} The TES 64DD features a disk-based format instead of cartridges, allowing for larger storage capacity for games and additional features. The system can also connect to the Internet through a dedicated online service, called 'Radnet', for e-commerce, online gaming, and media sharing {n} The TES 64DD seems promising, although the base TES 64 isn't a great commercial success, so we can't expect much in sales. Ninvento has revealed that the TES 64DD will hit the market {0}.".localize().format(General.getETADescription('10/6/2', '11/3/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/TES 64DD.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding GamePack 32
// -----------------------------------------------------------
GDT.addPlatform({
	id:"GamePack 32",
	name:"GamePack 32",
	company:"GamePack",
	startAmount:0.52,
	unitsSold:0.90,
	licencePrize:40000,
	published:"12/7/4",
    platformRetireDate: "14/7/1",
    developmentCosts: 20000,
    genreWeightings: [0.9, 0.7, 1, 0.8, 0.8, 0.6],
    audienceWeightings: [1, 0.9, 0.9],
	techLevel:4,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/GamePack 32.png",
	events:[{
	id: "GamePack32ann",
	date: "12/6/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, a little south korean company called GamePack just revealed a new handheld device, called GamePack 32. {n} This small, yet powerful device is totally open-source; this means that anyone who wants to develop software for this device can freely download the development tools and start their work, without additional costs. {n} This will allow the creation of many homebrew applications, particularly the creation of emulators for other consoles. GamePark expects the GamePack 32 to release {0}.".localize().format(General.getETADescription('12/6/1', '12/7/4')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/GamePack 32.png",
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
    genreWeightings: [0.9, 0.7, 1, 0.8, 0.7, 0.6],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Chip Engine.png",
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
	startAmount:0.64,
	unitsSold:0.657,
	licencePrize: 150000,
	published:"7/3/3",
    platformRetireDate: "9/5/1",
    developmentCosts: 40000,
    genreWeightings: [1, 0.8, 0.9, 0.8, 0.6, 0.7],
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
	text: "Bendai, a Japanese multinational toy manufacturer, just unveiled their new-generation console called Gamedia. {n} The Gamedia has a very innovative hardware despite being an 8-Bit console, as it uses CD-ROM and has a wireless controller, which works with wireless infrared. {n} Gamedia is aimed at a younger audience, with many anime trivia games and edutainment games already announced for the console.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Gamedia.png",
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
	unitsSold:0.4,
	licencePrize: 150000,
	published:"4/8/1",
    platformRetireDate: "14/7/1",
    developmentCosts: 50000,
    genreWeightings: [1, 0.9, 0.9, 0.6, 0.7, 0.7],
    audienceWeightings: [0.6, 1, 0.8],
	techLevel:3,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Neon Geon.png",
	events:[{
	id: "NeonGeonCDAnn",
	date: "4/6/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "TNK, a well-received company renowned for their arcade titles, announced their new 'Neon Geon' home console. The Neon Geon is marketed as the new world of arcade gaming: its one of the first 24-Bit home consoles to feature stunning arcade-quality graphics and sound and it offers to players an authentic arcade experience in their own houses.".localize().format(General.getETADescription('4/6/2', '5/1/1')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Neon Geon.png",
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
    genreWeightings: [1, 0.7, 0.8, 0.8, 0.9, 0.9],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/BeeBox.png",
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
	startAmount:2.7,
	unitsSold:3.11,
	licencePrize: 5E5,
	published:"20/4/1",
            marketKeyPoints: [{
                date: "27/12/2",
                amount: 3.72
            }],
    platformRetireDate: "260/1/1",
    developmentCosts: 8E4,
    genreWeightings: [1, 0.6, 0.8, 1, 0.8, 0.9],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Gromebook.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	},
	{
	id: "GromebookRiseNdShine",
	date: "27/12/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Recent studies suggest that Grogle sold over 30 million Gromebook units this year, as schools and parents purchased them for remote learning purposes during the CORID-19 pandemic. This small success also outsould Mirconoft's mPad and other computers avaiable in the market.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/Gromebook.png",
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
    genreWeightings: [1, 0.7, 0.9, 0.8, 0.9, 0.7],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Gamedate.png",
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/Gamedate.png",
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
	startAmount:0.54,
	unitsSold:0.67,
	licencePrize:150000,
	published:"6/7/1",
	platformRetireDate:"11/1/1",
	developmentCosts:50000,
	genreWeightings:[  1, 0.7, 0.9, 0.8, 0.6, 0.9 ],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/CD-e.png",
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/CD-e.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Vector
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Vector",
	name:"Vector",
	company:"CCE",
	startAmount:0.24,
	unitsSold:0.37,
	licencePrize:0,
	published:"1/1/1",
	marketKeyPoints: [{
                date: "1/6/3",
                amount: 0.28
            }, {
                date: "2/5/1",
                amount: 0.32
            }],
	platformRetireDate:"2/7/1",
	developmentCosts:15000,
	genreWeightings:[  1, 0.7, 0.6, 0.9, 1, 0.6 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Vector.png",
	events:null
	});
	
// Adding Animation 200
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Animation 200",
	name:"Animation 200",
	company:"Art 'nd Sketch",
	startAmount:0.34,
	unitsSold:0.47,
	licencePrize:40000,
	published:"3/5/1",
	platformRetireDate:"6/4/4",
	developmentCosts:15000,
	genreWeightings:[  1, 0.7, 0.7, 0.9, 0.8, 0.6 ],
	audienceWeightings:[  1, 0.8, 0.6 ],
	techLevel:1,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/platforms/Animation 200.png",
	events:[{
	id: "Ani200Ann",
	date: "3/2/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today a company called Art 'nd Sketch unveiled a new handheld console, coming in the upcoming months, called Animation 200. {n} Unlike many other drawing toys, the Animation 200 is designed to make animations by using a new touchpad technology, instead of the classic knobs. Additionally, the Animation 200 supports video games via cartridges, making it a video game console too.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Animation 200.png",
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
	startAmount:0.23,
	unitsSold:0.37,
	licencePrize:35000,
	published:"2/7/4",
	platformRetireDate:"3/6/2",
	developmentCosts:25000,
    genreWeightings: [0.9, 1, 0.9, 0.9, 1, 0.7],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/G16.png",
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
    genreWeightings: [1, 0.8, 0.9, 1, 0.7, 0.9],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/HoloBox.png",
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
	startAmount:0.21,
	unitsSold:0.29,
	licencePrize:40000,
	published:"2/7/2",
	platformRetireDate:"4/1/1",
	developmentCosts:15000,
    genreWeightings: [0.9, 0.6, 0.8, 0.7, 1, 0.9],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Pokecomp.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Bingoo
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Bingoo",
	name:"Bingoo",
	company:"Bingoo Tech",
	startAmount:1.17,
	unitsSold:2.12,
	licencePrize:20000,
	published:"19/2/3",
	platformRetireDate:"22/6/4",
	developmentCosts:15000,
    genreWeightings: [0.9, 0.7, 0.8, 0.7, 0.8, 1],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Bingoo.png",
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
	startAmount:2.17,
	unitsSold:3.19,
	licencePrize:20000,
	published:"20/7/4",
	platformRetireDate:"260/12/4",
	developmentCosts:15000,
    genreWeightings: [0.9, 0.8, 0.7, 1, 0.8, 0.9],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/notifications/Rawberry PI.png",
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
	licencePrize:3000000,
	published:"34/7/2",
	platformRetireDate:"260/12/4",
	developmentCosts:800000,
	genreWeightings:[  0.8, 0.7, 1, 0.8, 0.7, 1 ],
	audienceWeightings:[  0.9, 1, 0.8 ],
	techLevel:7,
	iconUri: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/Ninvento One.png",
	events:[{
	id: "NinventoOneAnn",
	date: "34/4/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Today, Ninvento announced a new next generation home console. {n} Dubbed 'Ninvento One', the console has a shape that resembles a TES and arrives with hardware on par with Vonny's PlaySystem 6 and Mirconoft's mBox Scar, running games very smoothly in Quad HD. {n} Ninvento also informed that the console is aimed at a more mixed audience and at casual gamers.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/Ninvento One.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});

// Adding Ninvento Swap 2 
// -----------------------------------------------------------
GDT.addPlatform({
	id:"Ninvento Swap 2",
	name:"Ninvento Swap 2",
	company:"Ninvento",
	startAmount:7.6,
	unitsSold:8.2,
	licencePrize:2500000,
	published:"30/6/1",
	platformRetireDate:"35/12/4",
	developmentCosts:650000,
    genreWeightings: [0.9, 0.8, 1, 0.8, 0.7, 1],
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/Swap 2.png",
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/Swap 2.png",
	previewImage: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/notifications/Swap 2.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	}
]
	});
	
// Adding Vena VG-1000
// -----------------------------------------------------------
GDT.addPlatform({
    id: 'Vena VG-1000',
    name: 'VG-1000',
    company: 'Vena',
    startAmount:0.31,
    unitsSold:0.39,
    licencePrize: 5E4,
    published: '2/1/2',
    platformRetireDate: '3/5/1',
    developmentCosts: 2E4,
    genreWeightings: [1, 0.8, 0.9, 1, 0.8, 0.6],
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
    genreWeightings: [0.9, 0.8, 0.7, 0.8, 0.9, 0.6],
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
	text: "Recently, some of the most popular companies in the videogame industry such as Electronic Mass, Matsusonic and GoldSky have reunited to create a single company, The 3D-On Company, with the goal of developing a new standard in the industry, dubbed 3D-On. {n} Scheduled for release {0}, the 3D-On stands out for its technological marvels such as immersive 32-Bit 3D graphic and sound, the usage of CD-ROM technology as media, realistic sound quality and planned online play. {n} A spokesperson for the company stated in a press conference: 'The 3D-On system will revolutionize the way you play games, with twenty new titles to launch over the next years.'".localize().format(General.getETADescription('6/6/4', '6/12/2')),
	image: The_Top_And_Flops_Mod_WildLukah.modPath  + "/images/platforms/3D-On.png",
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
		genreWeightings: [0.9, 0.7, 0.6, 1, 0.6, 0.6], 
		audienceWeightings: [0.7, 1, 0.9],
	 }
	,{ 
		id: "Cartoon", 
		name: "Cartoon".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/cartoon.png",
	        genreWeightings: [  1, 0.7, 0.9, 0.8, 0.7, 0.6 ],
	        audienceWeightings: [  1, 0.9, 0.6 ]
	 }
	,{ 
		id: "Arcade", 
		name: "Arcade".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/arcade.png",
	        genreWeightings: [  1, 0.8, 0.7, 0.9, 0.8, 0.7 ],
	        audienceWeightings: [  1, 0.9, 0.8 ]
	 }
	,{ 
		id: "Sandbox", 
		name: "Sandbox".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/sandbox.png",
		genreWeightings: [  0.9, 0.7, 0.6, 1, 0.8, 0.9 ],
		audienceWeightings: [  0.9, 1, 0.7 ]
	 }
	,{ 
		id: "Samurai", 
		name: "Samurai".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/samurai.png",
		genreWeightings: [  1, 0.9, 1, 0.9, 0.7, 0.8 ],
	        audienceWeightings: [  1, 0.9, 0.9 ]
	 }
	,{ 
		id: "Maze", 
		name: "Maze".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/maze.png",
		genreWeightings: [  1, 0.7, 0.7, 0.9, 0.8, 0.6 ],
	        audienceWeightings: [  0.8, 1, 0.7 ]
	 }
	,{ 
		id: "First-Person Shooter", 
		name: "First-Person Shooter".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/fps.png",
		genreWeightings: [  1, 0.6, 0.8, 0.9, 0.7, 0.7 ],
	        audienceWeightings: [  0.7, 0.7, 1 ]
	 }
	,{ 
		id: "Beat Em Up", 
		name: "Beat 'Em Up".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/beat_em_up.png",
		genreWeightings: [  0.9, 0.6, 0.8, 0.9, 0.7, 0.6 ],
	        audienceWeightings: [  0.8, 0.7, 0.9 ]
	 }
	,{ 
		id: "Survival", 
		name: "Survival".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/survival.png",
		genreWeightings: [  0.9, 0.7, 0.8, 0.9, 0.8, 0.7 ],
	        audienceWeightings: [  0.9, 0.7, 0.8 ]
	 }
	,{ 
		id: "Meme", 
		name: "Meme".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/meme.png",
		genreWeightings: [  0.9, 0.6, 0.9, 0.8, 0.7, 0.8 ],
	        audienceWeightings: [  0.9, 0.7, 0.6 ]
	 }
	,{ 
		id: "Ghosts", 
		name: "Ghosts".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/ghosts.png",
		genreWeightings: [  1, 0.7, 0.8, 0.9, 0.7, 0.7 ],
	        audienceWeightings: [  0.9, 0.8, 0.7 ]
	 }
	,{ 
		id: "Platformer", 
		name: "Platformer".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/platformer.png",
		genreWeightings: [  0.9, 0.7, 0.8, 0.7, 0.7, 0.8 ],
	        audienceWeightings: [  0.9, 0.8, 0.7 ]
	 }
	,{ 
		id: "Cards", 
		name: "Cards".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/cards.png",
		genreWeightings: [  0.6, 0.7, 0.7, 0.9, 0.9, 1 ],
	        audienceWeightings: [  0.9, 0.7, 0.8 ]
	 }
	,{ 
		id: "Trivia", 
		name: "Trivia".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/trivia.png",
		genreWeightings: [  0.7, 0.6, 0.7, 0.9, 0.7, 1 ],
	        audienceWeightings: [  0.9, 1, 0.8 ]
	 }
	,{ 
		id: "Edutainment", 
		name: "Edutainment".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/edutainment.png",
		genreWeightings: [  0.9, 0.8, 0.6, 0.9, 0.7, 0.6 ],
	        audienceWeightings: [  1, 0.8, 0.6 ]
	 }
	,{ 
		id: "Open World", 
		name: "Open World".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/open_world.png",
		genreWeightings: [  1, 0.9, 0.9, 1, 0.7, 0.6 ],
	        audienceWeightings: [  0.9, 0.8, 0.8 ]
	 }
	,{ 
		id: "Minigames", 
		name: "Minigames".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/minigames.png",
		genreWeightings: [  0.9, 0.7, 0.6, 0.7, 0.8, 0.9 ],
	        audienceWeightings: [  1, 0.9, 0.7 ]
	 }
	,{ 
		id: "Battle Royale", 
		name: "Battle Royale".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/battle_royale.png",
		genreWeightings: [  1, 0.6, 0.8, 0.8, 0.7, 0.6 ],
	        audienceWeightings: [  0.7, 0.9, 0.8 ]
	 }
	,{ 
		id: "Programming", 
		name: "Programming".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/programming.png",
		genreWeightings: [  0.8, 0.6, 0.7, 1, 0.7, 0.7 ],
	        audienceWeightings: [  0.7, 1, 0.8 ]
	 }
	,{ 
		id: "Steampunk", 
		name: "Steampunk".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/steampunk.png",
		genreWeightings: [  1, 0.7, 0.8, 0.9, 0.8, 0.7 ],
	        audienceWeightings: [  0.8, 1, 0.8 ]
	 }
	,{ 
		id: "Retrowave", 
		name: "Retrowave".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/retrowave.png",
		genreWeightings: [  1, 0.6, 0.7, 1, 0.6, 0.7 ],
	        audienceWeightings: [  0.8, 0.8, 0.9 ]
	 }
	,{ 
		id: "Level Builder", 
		name: "Level Builder".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/level_builder.png",
		genreWeightings: [  0.9, 0.7, 0.9, 1, 0.7, 0.6 ],
	        audienceWeightings: [  0.9, 0.8, 0.7 ]
	 }
	,{ 
		id: "Mafia", 
		name: "Mafia".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/mafia.png",
		genreWeightings: [  1, 0.7, 0.8, 1, 0.7, 0.6 ],
	        audienceWeightings: [  0.6, 0.9, 1 ]
	 }
	,{ 
		id: "3D_Platformer", 
		name: "3D Platformer".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/3d_platformer.png",
		genreWeightings: [  1, 0.8, 0.7, 0.8, 0.6, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.6 ]
	 }
	,{ 
		id: "pointandclick", 
		name: "Point & Click".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/point&click.png",
		genreWeightings: [  0.9, 0.7, 0.6, 1, 0.9, 0.8 ],
	        audienceWeightings: [  0.8, 1, 0.7 ]
	 }
	 ,{ 
		id: "religious", 
		name: "Religious".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/religious.png",
		genreWeightings: [  1, 0.8, 0.9, 0.9, 0.7, 0.6 ],
	        audienceWeightings: [  1, 0.9, 0.7 ]
	 }
	,{ 
		id: "table_game", 
		name: "Table games".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/table_game.png",
		genreWeightings: [  0.8, 0.6, 0.6, 1, 1, 0.9 ],
	        audienceWeightings: [  1, 0.9, 0.6 ]
	 }
	 ,{ 
		id: "anime", 
		name: "Anime".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/anime.png",
		genreWeightings: [  1, 0.8, 1, 0.9, 0.8, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	 }
	 ,{ 
		id: "novel", 
		name: "Novel".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/novel.png",
		genreWeightings: [  0.9, 1, 0.8, 0.7, 0.6, 0.9 ],
	        audienceWeightings: [  0.7, 1, 0.9 ]
	 }
	,{ 
		id: "tower_defense", 
		name: "Tower Defense".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/tower_defense.png",
		genreWeightings: [  0.9, 0.7, 0.9, 0.8, 1, 0.8 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	 }
	,{ 
		id: "gambling", 
		name: "Gambling".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/gambling.png",
	    genreWeightings: [  0.7, 0.6, 0.6, 1, 1, 0.8 ],
	        audienceWeightings: [  0.6, 0.7, 1 ]
	}
	,{ 
		id: "puzzle", 
		name: "Puzzle".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/puzzle.png",
	    genreWeightings: [  0.9, 1, 0.7, 0.9, 1, 0.8 ],
	        audienceWeightings: [  0.8, 1, 0.8 ]
	}
	,{ 
		id: "theme_park", 
		name: "Theme Park".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/theme_park.png",
	    genreWeightings: [  0.9, 0.9, 0.7, 1, 1, 0.8 ],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "retro", 
		name: "Retro".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/retro.png",
	    genreWeightings: [  1, 1, 1, 0.8, 1, 1 ],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "horse", 
		name: "Horse".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/horse.png",
	    genreWeightings: [  0.9, 0.7, 0.6, 1, 0.8, 1 ],
	        audienceWeightings: [  0.9, 1, 0.7 ]
	}
	,{ 
		id: "3d_maze", 
		name: "3D maze".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/3d_maze.png",
	    genreWeightings: [  1, 0.7, 0.6, 0.8, 0.7, 0.9 ],
	        audienceWeightings: [  0.8, 1, 0.6 ]
	}
	,{ 
		id: "geography", 
		name: "Geography".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/geography.png",
	    genreWeightings: [  0.8, 0.9, 0.7, 0.9, 0.7, 0.7 ],
	        audienceWeightings: [  1, 0.8, 0.6 ]
	}
	,{ 
		id: "bowling", 
		name: "Bowling".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/bowling.png",
	    genreWeightings: [  0.9, 0.7, 0.6, 1, 0.8, 1 ],
	        audienceWeightings: [  1, 0.8, 0.7 ]
	}
	,{ 
		id: "pinball", 
		name: "Pinball".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/pinball.png",
	    genreWeightings: [  0.9, 0.6, 0.7, 1, 0.8, 0.8 ],
	        audienceWeightings: [  1, 0.8, 0.9 ]
	}
	,{ 
		id: "management", 
		name: "Management".localize("game topic"), 
		iconUrl: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/topics/management.png",
	    genreWeightings: [  0.6, 0.7, 0.6, 1, 0.9, 0.8 ],
	        audienceWeightings: [  0.8, 1, 0.7 ]
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
	v: 2
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
	v: 4
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
	v: 6
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
	v: 8
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
	v: 6
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
	v: 8
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
	v: 10
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
	v: 12
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
	v: 14
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
	v: 8
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
	v: 6
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
	v: 8
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
	v: 10
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
	v: 6
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
	v: 8
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
	v: 10
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
	v: 2
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
	v: 6
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
	v: 10
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
	v: 6
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
	v: 6
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
	v: 8
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
	v: 6
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
    v: 6
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
    v: 8
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
    v: 10
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
	v: 4
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
	v: 4
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
	v: 6
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
	v: 6
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
	v: 12
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
	v: 8
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

// Adding custom starting engine parts
var a = Research;

    // Custom function to find researches
    a.getItemById = function(id) { 
        return this.getAllItems().find(function(item) { return item.id === id; });
    };

    a.StartEngineParts.push(
        a.getItemById("144p Screen resolution"),
        a.getItemById("Vectorial Graphics"),
		a.getItemById("Basic Menu"),
		a.getItemById("Game Over Screen")
    );
	
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
	isRandomEvent: false,
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
			n.adjustCash(bribe * -1, "Pay the ransomware");
			
			company.activeNotifications.addRange(n.split());
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "Free sponsor??".localize(),
				text: "You chose not to pay the ransomware, so they exposed your game to the public. On the bright side, you gained some buzz and captured people's interest in your game.",
			});
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

		var msg = "Congratulations boss, you found the Golden GameSphere! This specialty made by Ninvento is valued at about $250,000! Would you like to sell it at auction, donate it to a well-known gaming museum, or keep it in our console collection?";

		return new Notification({
			sourceId: "GoldenGameSphere",
			header: "Golden luck".localize(),
			text: msg,
			image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/Golden GameSphere.png",
			options: ["Sell it!", "Let's preserve history.", "We're keeping this!"]
		});
	},
	complete: function (decision) {


		var company = GameManager.company;

		if (decision === 0) {
			
			var n = new Notification({
				header: "Double profit".localize(),
				text: "Boss, we successfully sold the Golden GameSphere to auction item for $500,000! That is double its original value :)",
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
				text: "We added the Golden GameSphere to our company's console collection and received a $50,000 reward from Ninvento for finding it!",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(50000, "The Golden GameSphere");
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(GoldenGameSphereEvent);

// Adding 'Indiscretions1'
// -----------------------------------------------------------

var Indiscretions1 = {
	id: "Indiscretions1",
	isRandomEvent: true,
	maxTriggers: 1,
	trigger: function (company) {
		return company.currentLevel == 4 && company.isGameProgressBetween(0.4, 0.9);
	},
	getNotification: function (company) {
		var game = company.currentGame;

		var msg = "Boss, it seems that some journalists discovered our new game, {0}, and created online rumors about our game. Many fans are anxiously awaiting our confirmation. Should we announce our game?"
			.localize().format(game.title);
		company.adjustHype(25 + 40 * company.getRandom());

		return new Notification({
			sourceId: "Indiscretions1",
			header: "A wave of rumor".localize(),
			text: msg,
			options: ["Time to reveal.", "Nah, let's keep it a secret."]
		});
	},
	complete: function (decision) {


		var company = GameManager.company;

		if (decision === 0) {
			
			var n = new Notification({
				header: "Peak of popularity".localize(),
				text: "Boss, we published the official trailer on the internet, and it was a huge success. We are generating a lot of hype for this game!",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustHype(45 + 75 * company.getRandom());
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "Secret work".localize(),
				text: "We have chosen not to reveal our new game, so the hype continues.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustHype(25 + 35 * company.getRandom());
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(Indiscretions1);

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

		var msg = "While developing your latest game, {0}, an exciting buzz began to build among the fans in your town. Their enthusiasm was palpable as they eagerly expressed interest in getting a sneak peek of your creation. With the game now nearing completion, you have the opportunity to make them excited. {n} You could invite them over to your garage and have a little party, or alternatively you could send them a copy straight to their homes. This unique opportunity not only allows your fans to engage with your work but also can elevate the hype surrounding your game's release."
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
			n.adjustFans((company.fans / 10) * company.getRandom(), "Dissatisfied fans");
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
		return company.currentLevel >= 3 && company.fans >= 200000;
	},
	getNotification: function (company) { 
		
		var msg = "The internet has become an effective platform for promoting our company's works. Think about it: we could share our latest games online and do discounts on them, and that could lead to an increase in our sales! We could invest in this market, but unfortunately someone already bought the domain we were planning to use. {n} After getting in contact with these domain squatters, we discovered that they want us to pay a whopping 431,509$ for getting this domain! We could consider pursuing action under the new DMCA regulations, or we may choose to explore alternative options.";
		return new Notification({
			sourceId: "DomainSquatters",
			header: "Industry News".localize(),
			text: msg,
			options: ["DMCA, take 'em down!", "Just buy another domain.", "Sounds horrible."]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;

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
				text: "We decided to let them be and purchased a new domain. Our site is already up, but it cost us $20,000.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(-20000, "New domain");
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

		var msg = "After more than 20 years from it's cancellation, a prototype of the Ninvento PlaySystem was found. This console, made by Ninvento and Vonny thanks to a market patnership back in the 90s, would be the first console in the world that used CD-ROM media. But unfortunately, this platform has never seen the sunlight. {n} This prototype will be auctioned next February, at a starting price of 15,000$. but the auction could quickly exceed to $350,000 within days! {n} Our company is very famous for the collection of video game consoles, counting over 40 platforms. We suggest you to buy this piece of history, so we ask you. Would you be interested in paying a whopping $500,000 to buy this piece of videogaming history?";

		return new Notification({
			sourceId: "PlaySystemAact",
			header: "Industry News".localize(),
			text: msg,
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
				text: "We just discovered {0} just bought the latest prototype of the Ninvento PlaySystem that was auctioned last week for 500,000$. \n {1}, one of their employers, had to say this: 'A month ago we discovered that Ninvento's PlaySystem, a piece of history for our industry, would be put up for auction.'\n'After some hesitation, we are happy to announce that we have won the auction. This prototype will be placed in our museum and any fan can easily go here to see it live.'".localize().format(company.name, staff.name),
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(-500000, "Playsystem");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {

			var n = new Notification({
				header: "Industry News".localize(),
				text: "Recently, the Ninvento PlaySystem was auctioned and was sold for 360,000$. The fan who bought this piece of history decided to display it in his large video game console museum.",
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
		return company.currentLevel >= 3 && company.isGameProgressBetween(0.4, 0.7) && company.fans >= 800000;
	},
	getNotification: function (company) { 
		var game = company.currentGame;
		
		var msg = "Boss, It happened again. Hackers gained access to our servers and obtained a copy of our unfinished game, {0}. They are now threatening to release our entire project online! This could create a negative impression among our fans, especially since the game is still unfinished. We stand to lose a significant amount of money. {n} What makes this situation crazier is that these hackers are actually Ninvento fans who are challenging us to draw a perfectly shaped Kirbee, one of Ninvento's mascots, using only our hands and painting, no tools or apps allowed. They claim that if we won, they won't release our game online. {n} This seem like a ridiculous challenge, considering they have half a million dollars' worth of files in their hands, and they are clearly underestimating the talent of our artists. On the other hand, this could also be an opportunity to gain attention from fans worldwide. Alternatively, we could focus on tracking them down and bringing them to justice, but there’s a chance they might strike again in the future. The choice is yours.".localize().format(game.title);
		return new Notification({
			sourceId: "KirbeeTroll",
			header: "Industry News".localize(),
			text: msg,
			options: ["Challenge accepted.", "Nahh, it's not worth the risk."]
		});
	},
	complete: function (decision) {

		var company = GameManager.company;
        var game = company.currentGame;
		
		if (decision === 0) {
			
			var n = new Notification({
				header: "Law talks".localize(),
				text: "Recently, {0} got involved in a massive hacking, where their new game, {1}, got leaked online.\nThe hackers, who where recently arrested by FBI, decided to challenge their biggest artists to draw perfectly shaped Kirbee, so they wouldn't release the copy on the internet.\n{0}'s CEO accepted, and their artists literally made a masterpiece. The hackers deleted {1}'s game files, but this couldn't save them from a lawsuit by {0}'s Legal Department.\nThis entire drama was funny for many fans, who made internet memes about this happening. Many claim that while most companies would just refuse this challenge and sue them directly, {0} decided to deal with them differently. A fan had to say this: '{0} is the funniest videogame company ever, they care about their fans and try to joke and play with them. I saw the leaks of {1} too, and I think that it's not a bad game at all!'. We just wait for this game to release.".localize().format(company.name, game.title),
				weeksUntilFired: 1 * company.getRandom()
			});
			n.adjustFans((company.fans / 8) * company.getRandom(), "Challenge");
			company.notifications.push(n);
			return;
		}
		if (decision === 1) {
			
			var n = new Notification({
				header: "New domain".localize(),
				text: "We decided to sue them and our game is now safe, but fans definitely didn't like it.",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(1500000 + 750000 * company.getRandom(), "DMCA");
			n.adjustFans((company.fans / 10) * -1, "DMCA");
			company.notifications.push(n);
			return;
		}
	}
};

GDT.addEvent(KirbeeTrollEvent);

// *******************************
// Message-Only Events
// *******************************

GDT.addEvent({
	id: "GrWaveHoax",
	date: "24/5/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "A strange trend",
	type: NotificationType.IndustryNews,
	text: "Recently, many GrPhone users were affected with a troll that involves putting your own GrPhone in a microwave so you could charge it. This, of course, would result in an explosion and possible injuries. {n} This hoax feature, called 'GrWave', it is capturing many users' attention. It is spreading so quickly on the internet that even Grapple itself has declared that it is all fictitious. We suggest our audience to not try.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/GrPhone.png",
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
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/Itara 2600.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
GDT.addEvent({
	id: "suggestion1",
	date: "5/9/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Videogame review",
	text: "Recently, Ninvento released a new game for their own system, called 'Super Plario Bros.'. {n} In this Platformer/Action game, you play as Plario, an Italian plumber who has to explore the Mushloom Kingdom to rescue the Princess Todstom, captured by King Turtla's empire. During the gameplay, you'll come across many different levels and many mini-bosses. {n} The graphics weren't the best, but it's an enjoyable game, and we're impressed by the depth of gameplay, including its length, number of hidden secrets, and the high degree of dexterity it requires. We think this is a must-have for your TES game library.",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});
	
// *******************************
// Platform Events
// *******************************
	
GDT.addEvent({
	id: "VenaVSninventoLol",
	date: "5/5/2",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.IndustryNews,
	text: "Vena recently created a commercial spot where they promoted their recently released console, the Oasis, by criticizing and speaking badly of Ninvento and its consoles, with a motto that reads 'Oasis does what Ninvenwon't'. {n} Despite having much more powerful hardware with 16-bit graphics and audio capabilities, it seems that Vena's Oasis is failing to outsell Ninvento's consoles, which is also rumored to be working on a new console.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/Vena Oasis.png",
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
	id: "OYAcommercialfailure",
	date: "26/4/1",
	isRandom: false,
	ignoreGameLengthModifier: false,
	maxTriggers: 1,
	getNotification: function(company){ return new Notification({
	header: "Industry News",
	type: NotificationType.PlatformNews,
	text: "Despite the initial success of KickIT's crowdfunding campaign, the OYA is a commercial failure. Sales are poor as the hardware isn't powerful enough to compete against other devices, and many game developers failed to embrace the platform. Furthermore, all the commercials to promote their console have failed and are causing financial problems for KickIT, slowly forcing the company to go out of business.",
	image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/platforms/OYA.png",
	buttonText: "OK",
	weeksUntilFired: 4
	});} 
	});

// ******************************************************************************************
// Misc
// ******************************************************************************************

// Changes the retirement dates for specific Platforms

        {
		var GS = Platforms.allPlatforms.first(function(p){return p.id == 'GS';});
		if (GS){
			GS.platformRetireDate = '20/6/3';
		}}
		
		{
		var PPS = Platforms.allPlatforms.first(function(p){return p.id == 'PPS';});
		if (PPS){
			PPS.platformRetireDate = '21/5/3';
		}}
		
        {
		var gameling = Platforms.allPlatforms.first(function(p){return p.id == 'Gameling';});
		if (gameling){
			gameling.platformRetireDate = '11/6/1';
		}}
		
		{
		var OYA = Platforms.allPlatforms.first(function(p){return p.id == 'OYA';});
		if (OYA){
			OYA.platformRetireDate = '26/7/4';
		}}
		
		{
		var VenaOasis = Platforms.allPlatforms.first(function(p){return p.id == 'Vena Oasis';});
		if (VenaOasis){
			VenaOasis.platformRetireDate = '8/1/1';
		}}
	
		{	
		var Swap = Platforms.allPlatforms.first(function(p){return p.id == 'Swap';});
		if (Swap){
			Swap.platformRetireDate = '32/1/1';
		}}

// Change existing notifications 
	
		var TESRumour = Media.allScheduledStories.find(function(notification) {return notification.id == 'TESRumour';});
		if (TESRumour) {
  		  TESRumour.notification = new Notification({
        		header: Media.platformNewsHeadline,
        		text: "According to rumours the Japanese company Ninvento is planning to launch its very own home gaming console. Ninvento is known for the widely successful arcade game 'Dinkey King'.{n}Many industry experts doubt that home gaming consoles will take off but we are eager to see what Ninvento will deliver.".localize(),
    		    image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/companies/Ninvento.png",
			    previewImage: "./images/notificationIcons/icon_notification_platform_release.png"
    		});
		}

		var MasterVRumour = Media.allScheduledStories.find(function(notification) {return notification.id == 'MasterVRumour';});
		if (MasterVRumour) {
  		  MasterVRumour.notification = new Notification({
                header: Media.platformNewsHeadline,
                text: "Following the massive success of the TES console there are now rumours circulating that Vena, another Japanese company, is planning to release a home gaming console on their own.".localize(),
    		    image: The_Top_And_Flops_Mod_WildLukah.modPath + "/images/events/companies/Vena.png",
			    previewImage: "./images/notificationIcons/icon_notification_platform_release.png"
    		});
		}
		
// Create my own welcome notification because why not

		var MediaObject = Media; // Outer reference
		MediaObject.createWelcomeNotifications = function() {
  		  var company = GameManager.company; // Inner reference
   		 if (GameManager.ghg2()) {
        		var versionType = GameManager.ghg0() ? "lite".localize("as in lite edition of the game") : "trial".localize();
 		       company.notifications.push(new Notification({
    		        header: "{0} version".localize("could either be lite version or trial version").format(versionType),
        		    text: "This is the {0} version of Game Dev Tycoon in which you can play until year five.".localize("{0} is either lite or trial").format(versionType),
            		type: NotificationType.AutoPopup
        		}));
    		}

    		var welcomeMessage = "Welcome to Game Dev Tycoon with The Top and Flops Mod!\nIn this business simulation you have been transported back in time to start your very own game development company right at the beginning of the PC revolution. In the next {0} years you can build your dream company, create best selling games, gain fans and become the leader of the market.{n}Before you can start your adventure you have to give your upcoming company a name.".localize().format(35);
    		company.notifications.push(new Notification("Welcome".localize("heading to greet the player"),
        		welcomeMessage, {
            		type: NotificationType.AutoPopup
        		}));
    		company.notifications.push(new Notification("{enterCompanyName}"));
		};

// Removes mBox Next 

        var platformNames = ["mBox Next"];
        for (var i = 0; i < Platforms.allPlatforms.length; i++) {
            for (var h = 0; h < platformNames.length; h++) {
        var platform = Platforms.allPlatforms[i];
                if (platform.id == platformNames[h])
                        Platforms.allPlatforms.remove(platform);
        }}

})();
