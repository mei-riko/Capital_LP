window.companydata={
	active: [],
	available:[
	   {
	   	icon: './icon/apple.svg',
	   	name: 'Apple',
	   	shareCode: 'APLE',
	   	priceAtStart: {
	   		usd:"27.34"
	   	},
	   	totalAtStart: {
	   		rur: "18 317.80"
	   	},
	   	numberOfShares:10,
	   	plotData:[
	   	      [2016, 27.34, "", 'wait'],
	   	      [2017, 39.38, "Apple message 0001", 'wait'],
	   	      [2018, 54.4, "Apple message 0002", 'wait'],
	   	      [2019, 51.63, "Apple message 0003", 'wait'],
	   	      [2020, 124.37, "Apple message 0004", 'wait'],
	   	      [2021, 150.19, "Apple message 0005", 'wait'],
	   	    ]
	   },
	   {
	   	icon: './icon/netflix.svg',
	   	name: 'Netflix',
	   	shareCode: 'NFLX',
	   	priceAtStart: {
	   		usd:"95.87"
	   	},
	   	totalAtStart: {
	   		rur: "19 269.87"
	   	},
	   	numberOfShares:3,
	   	plotData:[
	   	      [2016, 95.87  , "", ""],
	   	      [2017, 166.54 , "Netflix Message 001", 'wait'],
	   	      [2018, 316.78 , "Netflix Message 002", 'wait'],
	   	      [2019, 302.8  , "Netflix Message 003", 'wait'],
	   	      [2020, 492.31 , "Netflix Message 004", 'wait'],
	   	      [2021, 518.91 , "Netflix Message 005", 'wait'],
	   	    ]
	   },					
	   {
	   	icon: './icon/tesla.svg',
	   	name: 'Tesla',
	   	shareCode: 'TSLA',
	   	priceAtStart: {
	   		usd:"45.00"
	   	},
	   	totalAtStart: {
	   		rur: "18 090.00"
	   	},
	   	numberOfShares:6,
	   	plotData:[
	   	      [2016, 45    , ""],
	   	      [2017, 69.49 , "Tesla Message 001", 'sell'],
	   	      [2018, 61.1  , "Tesla Message 002", 'sell'],
	   	      [2019, 43.99 , "Tesla Message 003", 'sell'],
	   	      [2020, 410   , "Tesla Message 004", 'sell'],
	   	      [2021, 665.71, "Tesla Message 005", 'sell'],
	   	    ]
	   }, 					
	   {
	   	icon: './icon/yandex.svg',
	   	name: 'Yandex',
	   	shareCode: 'YNDX',
	   	priceAtStart: {
	   		usd:"22.48"
	   	},
	   	totalAtStart: {
	   		rur: "18 073.92"
	   	},
	   	numberOfShares:12,
	   	plotData:[
	   	      [2016, 22.48 , "", ""],
	   	      [2017, 29.81 , "Yandex Message 001", 'sell'],
	   	      [2018, 31.27 , "Yandex Message 002", 'sell'],
	   	      [2019, 36.48 , "Yandex Message 003", 'sell'],
	   	      [2020, 63.57 , "Yandex Message 004", 'sell'],
	   	      [2021, 69.07 , "Yandex Message 005", 'sell'],
	   	    ]
	   }
	],
	tips:{
		'' : '',
		'wait' : 'Советуем подождать.',
		'sell' : 'Советуем продавать.',
		'waitwait' : 'Советуем купить больше акций.',
		'sellwait' : 'Советуем подождать.',
		'waitsell' : 'Советуем подождать.',
		'sellsell' : 'Советуем продавать.'
	}
}