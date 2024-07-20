var MoscowBattles = {
	"type": "FeatureCollection",
	"name": "battles",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Битва за Москву",
				"date": "1941-10-02",
				"description": "Стратегическая оборонительная операция Советских войск, которая стала поворотным моментом в битве за Москву.",
				"forces": {
					"Soviet": {
						"personnel": "1,250,000",
						"artillery": "7,600",
						"tanks": "990",
						"aircraft": "1,000"
					},
					"German": {
						"personnel": "1,000,000",
						"tanks": "1,700",
						"artillery": "19,500",
						"aircraft": "950"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [37.6173, 55.7558] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Оборона Тулы",
				"date": "1941-10-24",
				"description": "Оборона города Тулы, ключевого промышленного и транспортного узла, в ходе наступления на Москву.",
				"forces": {
					"Soviet": {
						"personnel": "250,000",
						"artillery": "1,500",
						"tanks": "250",
						"aircraft": "300"
					},
					"German": {
						"personnel": "500,000",
						"tanks": "750",
						"artillery": "3,500",
						"aircraft": "500"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [37.6166, 54.2044] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Оборона Волоколамска",
				"date": "1941-11-04",
				"description": "Защита Волоколамска от немецких войск, важный элемент обороны западного направления подхода к Москве.",
				"forces": {
					"Soviet": {
						"personnel": "100,000",
						"artillery": "500",
						"tanks": "100",
						"aircraft": "50"
					},
					"German": {
						"personnel": "80,000",
						"tanks": "200",
						"artillery": "1,000",
						"aircraft": "100"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [35.9586, 56.0356] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Сражение при Красной Поляне",
				"date": "1941-12-05",
				"description": "Контрнаступление советских войск, которое ознаменовало начало отступления немецких войск от Москвы.",
				"forces": {
					"Soviet": {
						"personnel": "500,000",
						"artillery": "2,500",
						"tanks": "500",
						"aircraft": "250"
					},
					"German": {
						"personnel": "350,000",
						"tanks": "600",
						"artillery": "3,000",
						"aircraft": "200"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [37.3913, 55.7971] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 5,
				"name": "Битва под Ржевом",
				"date": "1942-01-08",
				"description": "Одно из крупнейших и кровопролитнейших сражений, которое продолжалось в течение почти двух лет.",
				"forces": {
					"Soviet": {
						"personnel": "1,000,000",
						"artillery": "5,000",
						"tanks": "1,000",
						"aircraft": "500"
					},
					"German": {
						"personnel": "750,000",
						"tanks": "1,500",
						"artillery": "7,000",
						"aircraft": "400"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [34.3282, 56.2628] }
		}
	]
}

var StalingradBattles = {
	"type": "FeatureCollection",
	"name": "battles",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Оборона Сталинграда",
				"date": "1942-07-17",
				"description": "Начало Сталинградской битвы, одного из самых значительных и кровопролитных сражений Второй мировой войны.",
				"forces": {
					"Soviet": {
						"personnel": "300,000",
						"artillery": "1,500",
						"tanks": "200",
						"aircraft": "100"
					},
					"German": {
						"personnel": "270,000",
						"tanks": "500",
						"artillery": "2,500",
						"aircraft": "200"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [44.5169, 48.7080] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Люфтваффе над Сталинградом",
				"date": "1942-08-23",
				"description": "Массированный бомбардировочный налет немецкой авиации, приведший к значительным разрушениям города.",
				"forces": {
					"Soviet": {
						"personnel": "N/A",
						"artillery": "N/A",
						"tanks": "N/A",
						"aircraft": "N/A"
					},
					"German": {
						"personnel": "N/A",
						"tanks": "N/A",
						"artillery": "N/A",
						"aircraft": "600"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [44.5216, 48.7128] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Сражение за Мамаев курган",
				"date": "1942-09-13",
				"description": "Одно из ключевых сражений за контроль над высотой, имевшей стратегическое значение для обороны города.",
				"forces": {
					"Soviet": {
						"personnel": "50,000",
						"artillery": "250",
						"tanks": "50",
						"aircraft": "25"
					},
					"German": {
						"personnel": "40,000",
						"tanks": "100",
						"artillery": "400",
						"aircraft": "50"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [44.5316, 48.7422] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Операция 'Уран'",
				"date": "1942-11-19",
				"description": "Контрнаступление советских войск, приведшее к окружению и поражению немецких войск в Сталинграде.",
				"forces": {
					"Soviet": {
						"personnel": "600,000",
						"artillery": "3,000",
						"tanks": "600",
						"aircraft": "300"
					},
					"German": {
						"personnel": "330,000",
						"tanks": "500",
						"artillery": "2,000",
						"aircraft": "150"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [44.5400, 48.7000] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 5,
				"name": "Капитуляция немецких войск",
				"date": "1943-02-02",
				"description": "Окончание Сталинградской битвы с полной капитуляцией окруженных немецких войск.",
				"forces": {
					"Soviet": {
						"personnel": "N/A",
						"artillery": "N/A",
						"tanks": "N/A",
						"aircraft": "N/A"
					},
					"German": {
						"personnel": "91,000",
						"tanks": "N/A",
						"artillery": "N/A",
						"aircraft": "N/A"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [44.5486, 48.7100] }
		}
	]
}

var KurskBattles = {
	"type": "FeatureCollection",
	"name": "battles",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Операция 'Кутузов'",
				"date": "1943-07-12",
				"description": "Советское контрнаступление на северном фланге Курской дуги, направленное на снятие немецкого давления с Орла.",
				"forces": {
					"Soviet": {
						"personnel": "600,000",
						"artillery": "3,000",
						"tanks": "1,000",
						"aircraft": "500"
					},
					"German": {
						"personnel": "400,000",
						"tanks": "700",
						"artillery": "2,000",
						"aircraft": "300"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [36.0800, 52.9700] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Операция 'Румянцев'",
				"date": "1943-08-03",
				"description": "Советское контрнаступление на южном фланге Курской дуги, целью которого было освобождение Белгорода и Харькова.",
				"forces": {
					"Soviet": {
						"personnel": "500,000",
						"artillery": "2,500",
						"tanks": "800",
						"aircraft": "400"
					},
					"German": {
						"personnel": "300,000",
						"tanks": "500",
						"artillery": "1,500",
						"aircraft": "200"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [36.5900, 50.6100] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Танковое сражение под Прохоровкой",
				"date": "1943-07-12",
				"description": "Одно из крупнейших танковых сражений в истории, произошедшее в рамках Курской битвы.",
				"forces": {
					"Soviet": {
						"personnel": "80,000",
						"artillery": "400",
						"tanks": "500",
						"aircraft": "100"
					},
					"German": {
						"personnel": "60,000",
						"tanks": "400",
						"artillery": "300",
						"aircraft": "80"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [36.7300, 51.0400] }
		}
	]
}

var BagrationBattles = {
	"type": "FeatureCollection",
	"name": "battles",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Освобождение Витебска",
				"date": "1944-06-24",
				"description": "Одно из первых сражений Операции 'Багратион', в результате которого был освобожден Витебск.",
				"forces": {
					"Soviet": {
						"personnel": "400,000",
						"artillery": "2,000",
						"tanks": "600",
						"aircraft": "300"
					},
					"German": {
						"personnel": "150,000",
						"tanks": "200",
						"artillery": "800",
						"aircraft": "100"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [30.2029, 55.1904] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Освобождение Минска",
				"date": "1944-07-03",
				"description": "Ключевое сражение, приведшее к освобождению столицы Белоруссии от немецкой оккупации.",
				"forces": {
					"Soviet": {
						"personnel": "500,000",
						"artillery": "2,500",
						"tanks": "800",
						"aircraft": "400"
					},
					"German": {
						"personnel": "200,000",
						"tanks": "300",
						"artillery": "1,000",
						"aircraft": "150"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [27.5618, 53.9045] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Освобождение Бреста",
				"date": "1944-07-28",
				"description": "Сражение, которое завершилось освобождением Бреста и выходом советских войск к границе Польши.",
				"forces": {
					"Soviet": {
						"personnel": "300,000",
						"artillery": "1,500",
						"tanks": "500",
						"aircraft": "250"
					},
					"German": {
						"personnel": "100,000",
						"tanks": "150",
						"artillery": "500",
						"aircraft": "80"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [23.7001, 52.0975] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Освобождение Вильнюса",
				"date": "1944-07-13",
				"description": "Сражение за столицу Литвы, которое стало важным этапом в продвижении советских войск на запад.",
				"forces": {
					"Soviet": {
						"personnel": "200,000",
						"artillery": "1,000",
						"tanks": "300",
						"aircraft": "150"
					},
					"German": {
						"personnel": "80,000",
						"tanks": "100",
						"artillery": "400",
						"aircraft": "50"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [25.2799, 54.6872] }
		}
	]
}

var BattleForBerlin = {
	"type": "FeatureCollection",
	"name": "battles",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Штурм Зееловских высот",
				"date": "1945-04-16",
				"description": "Масштабное сражение, которое стало началом Берлинской операции и привело к прорыву немецких оборонительных линий.",
				"forces": {
					"Soviet": {
						"personnel": "800,000",
						"artillery": "4,000",
						"tanks": "1,500",
						"aircraft": "800"
					},
					"German": {
						"personnel": "200,000",
						"tanks": "300",
						"artillery": "1,000",
						"aircraft": "150"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [13.8730, 52.5167] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Осада Рейхстага",
				"date": "1945-04-30",
				"description": "Знаковое событие, в ходе которого советские войска взяли штурмом здание Рейхстага, символизирующее падение Берлина.",
				"forces": {
					"Soviet": {
						"personnel": "100,000",
						"artillery": "500",
						"tanks": "200",
						"aircraft": "100"
					},
					"German": {
						"personnel": "20,000",
						"tanks": "50",
						"artillery": "100",
						"aircraft": "20"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [13.3760, 52.5186] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Битва за Тиргартен",
				"date": "1945-04-26",
				"description": "Сражение за контроль над центральным парком Берлина, ключевой точкой на пути к Рейхстагу.",
				"forces": {
					"Soviet": {
						"personnel": "50,000",
						"artillery": "250",
						"tanks": "100",
						"aircraft": "50"
					},
					"German": {
						"personnel": "15,000",
						"tanks": "30",
						"artillery": "80",
						"aircraft": "10"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [13.3500, 52.5144] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Захват моста через Шпрее",
				"date": "1945-04-23",
				"description": "Важный стратегический момент, когда советским войскам удалось захватить мост, обеспечивающий доступ к центру Берлина.",
				"forces": {
					"Soviet": {
						"personnel": "10,000",
						"artillery": "50",
						"tanks": "20",
						"aircraft": "10"
					},
					"German": {
						"personnel": "5,000",
						"tanks": "10",
						"artillery": "20",
						"aircraft": "5"
					}
				},
			},
			"geometry": { "type": "Point", "coordinates": [13.3860, 52.5208] }
		}
	]
}