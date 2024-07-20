var BarbarossaMonuments = {
	"type": "FeatureCollection",
	"name": "monuments",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Мемориал " + "Брестская крепость",
				"date": "1971-07-18",
				"description": "Мемориальный комплекс, посвященный защитникам Брестской крепости. Включает в себя музей, памятник-стелу, братские могилы.",
				"foto": "https://avatars.mds.yandex.net/i?id=7576b110313ebdd4a2895ca95bad80f0_l-11254239-images-thumbs&n=13"
			},
			"geometry": { "type": "Point", "coordinates": [23.6823, 52.1145] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Мемориал " + "Оборона Киева",
				"date": "1981",
				"description": "Памятник-монумент в Киеве, посвященный защитникам города во время Второй мировой войны.",
				"foto": "https://avatars.mds.yandex.net/i?id=ee0484362481b919880b88016695c766_l-8155455-images-thumbs&n=13"
			},
			"geometry": { "type": "Point", "coordinates": [30.5238, 50.4547] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Мемориал " + "Музей истории обороны Севастополя",
				"date": "1959",
				"description": "Музей, посвященный обороне Севастополя в годы Великой Отечественной войны.",
				"foto": "https://www.xn--80akahgvf5ajn1b2c.xn--p1ai/wp-content/uploads/2019/07/oborona-sevastopolya-3-1024x768.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [33.5233, 44.6333] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Мемориал " + "Музей обороны Одессы",
				"date": "1974",
				"description": "Музей, посвященный обороне Одессы в годы Великой Отечественной войны.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Memorial-411-2.JPG/1280px-Memorial-411-2.JPG"
			},
			"geometry": { "type": "Point", "coordinates": [30.7278, 46.4824] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 5,
				"name": "Мемориал " + "Музей обороны Смоленска",
				"date": "1974",
				"description": "Музей, посвященный обороне Смоленска в годы Великой Отечественной войны.",
				"foto": "https://avatars.mds.yandex.net/i?id=bf4e8ad902f07d6aca4a4a0304aca14b_l-10701575-images-thumbs&n=13"
			},
			"geometry": { "type": "Point", "coordinates": [32.0412, 54.8005] }
		}
	]
}

var StalinGradMonuments = {
	"type": "FeatureCollection",
	"name": "monuments",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Мамаев Курган",
				"date": "1960-10-27",
				"description": "Мемориальный комплекс, посвященный битве под Сталинградом. Включает в себя скульптуру «Родина-мать зовет!», музей, братские могилы, плиты с именами погибших.",
				"foto": "https://avatars.mds.yandex.net/i?id=1eef28b48a92583668b05482fac24195_l-5252264-images-thumbs&n=13"
			},
			"geometry": { "type": "Point", "coordinates": [44.5062, 48.7078] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Памятник защитникам Сталинграда",
				"date": "1949",
				"description": "Памятник на месте, где стояли остатки разрушенного здания мельницы, служившей опорным пунктом немецких войск.",
				"foto": "https://avatars.mds.yandex.net/i?id=125a25893304a5b8326b0c90a523f1d4_l-7761683-images-thumbs&n=13"
			},
			"geometry": { "type": "Point", "coordinates": [44.5137, 48.7074] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Мемориальный комплекс «Остров Людникова»",
				"date": "1942",
				"description": "Монумент памяти о героической обороне Сталинграда, увековечивающий подвиг генерал-лейтенанта Ивана Людникова и его 138-й стрелковой дивизии.",
				"foto": "https://fs.tonkosti.ru/sized/f700x700/7a/hb/7ahbwnuvwloos0cokoso0448o.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [44.5329, 48.6990] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Памятник «Ни шагу назад»",
				"date": "1975",
				"description": "Памятник на месте, где стояли советские войска, которые не отступили ни на шаг.",
				"foto": "https://yandex-images.clstorage.net/lT1Q00317/f6e703Vkr/sx_HKUDA1-B8TZscIXN5hUBy7trEb8wGocG9Vpj4q-IM2gPE8Jz_zz8BGf_zuXd3EC8Va2MsMdn223FXSKFRQv4mgjAdxa78fFnKMAhDEbUAJ96vyDrEYrHc2WaFVE9_2RbndVw9K2eLaEnKrv0HLhEuiYMz8U0cK0pJS4ykjL8Df-vZ_KASfGD1Tiilx1UNtDeK0gTeOHOddRhjCbzv89mOK31cjY9X_0DZfgpRDh4Ftm3KN-m5aHsWAW9wRDg7d-_HyUjACoyoNRJ0nSfdsQjD-opErljDeV0gJ8HI_2NRQs_FkM2_f_80XaoKyS7G7b5Roo9hSeSHUsmXiFish9Ofi2XUwCoM9PW2ZI2rBcWA01LuSDrQR0mlIKt9EL8baTbLKbwlE3fnwOXa1oHOtulmpea76V2ogyptG1DI6LMrz5MdWKTCcFxlluilz4GxdIdeKkgOzAeJMQxjeQSby3HaV1X8VePnrzRVvjYJgkY5Gr16q_HZxFMq5RMQcEirPx975dBUNnxwmU6MccNJtZCrnvbMfjAPRQVwN1F0g-9VKlP1hLVzh7_cCTqyXbqa_Tp5RgdRvZDzmhXvnMR09x_Tqx2gpNb0fH1iaJF_8Sk8D97O_OK4F1lZHG-ZzKdbyYpPWYj50wM_TK3-crk2RtUiFXZnvTHY0xIlB5wsACcvB_8R-LT6TMT5FmAB-ynRaC_Ofhh6-GdRjXj7wTxvf_kuRwWErdOjC4SV1o4x1nLR1km-Ww1RiPvSSXv0sPxzcwPjqZQU3jD4ic4YWX_1iYRLnn4Uluj7gS0og60UA98NeiNNcC1zA3MQ8ZY6qc4iZTaxtgOFVaSPBgF7kCw8u1ejzyHchCZQUEl6jMFPicGQq4p-XDYoP5E95DfhmG-f7cJLzUxVK0eDEFnqrokCKkk62eaHKckk67LtC9TAhLenh1_VGDBCxGBN0izB0_0Z8IOGKuC2aMPVJYjv7SQc"
			},
			"geometry": { "type": "Point", "coordinates": [44.5119, 48.6996] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 5,
				"name": "Памятник «Воинам 64-й армии»",
				"date": "1975",
				"description": "Памятник на месте, где стояла 64-я армия, которая сыграла важную роль в обороне Сталинграда.",
				"foto": "https://avatars.dzeninfra.ru/get-zen_doc/2746214/pub_5ed523c08698cf45d47a736d_5ed52ed61e71486747af007c/scale_2400"
			},
			"geometry": { "type": "Point", "coordinates": [44.5070, 48.6995] }
		}
	]
}

var KurskBulgeMonuments = {
	"type": "FeatureCollection",
	"name": "Kursk Bulge Monuments",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Курская Дуга",
				"date": "1968",
				"description": "Мемориальный комплекс, расположенный вдоль проспекта Победы города Курска. Объекты комплекса служат цели увековечивания подвига советского народа в Курской битве времён Великой Отечественной войны",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/4/41/%D0%9A%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%B4%D1%83%D0%B3%D0%B0_-_%D0%96%D1%83%D0%BA%D0%BE%D0%B2.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [36.1721, 51.6297] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Памятник «Курская Дуга»",
				"date": "1968",
				"description": "Памятник, установленный на месте прорыва немецких войск в районе Прохоровки. Представляет собой танковую башню с крестом на вершине, окруженную стелой с барельефами.",
				"foto": "https://avatars.mds.yandex.net/get-altay/4043748/2a00000176990e6c06273d1e9671034cd306/XXXL"
			},
			"geometry": { "type": "Point", "coordinates": [37.9038, 51.1275] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Мемориальный комплекс “Поныри”",
				"date": "1968",
				"description": "памятник символизирует героизм и стойкость танкистов, которые сражались под Понырями.",
				"foto": "https://yandex-images.clstorage.net/lT1Q00317/f6e703Vkr/sx_HKUDA1-B8TZscIXN5hUBy7trEb8wGocG9VpW59-oYz3qs2dDWhlMVHKqu7DdzHD5tb3pgIJnm70gPSKFRUvYeligJ6d_sbGnSOFE6dcV0R-LqnSb0F5yJlVaM5E8H2RqTNShRE1-XtCn2hvlyd2EyIYLONbn8axrpJ7ioUP8f8_tR5DCyUOx1frxJl_GBzPPyvuDqEOuNpTyXiWinp1UaC_kgUaP7p8ABZjJd3n5RJrlmhzGhCB9KtW-cVLBLm4drffSE0kgcvb7gFa8RCXBPBs64qmCLPUEUr82g07fFkscdmJ3jy4_AdeLmXUZeic6xWu-JKfiTtvGnZKys3ycjGzFYGNJonOF-RAW_ndEExxZm3Kb0A7lx7K9BHAv3vaqzGXSxC2eH2IFaloEOvvnKaa6rvaHs37KJA-h0PJsT20spIJS2gOBJ7mSJl_lVcDNCahimwB_5sXiDiRgf022yX4UI8XuXF5B16vJhhvIJGhW2N625aLNiiYvgNIQ7C8-bwdgcRnTsZRK87UP1nXTXbqrEIrDj8X1M_90wb8tJlq-BqImbB3eAnbZ25dLK1d41cgsBGQznwjl7HLgwB1fvVxEgbLaUZGn2kAmjSSXoe8rq_BIsa-lhEJOF-Nfv_QoPnQSF16fzAA0SsiU2Rgn2LR47YfWAr-KxS_S42HOH34NFLDSmuNzRcuQBM839EC_q-kz2tCuZacT3EaAnJ9k6q5VYiYOnUzTFKprZvqY98tlC811F4P_KcSeI0ESP04OHWZRYBpyg7QI8eWtJIUjDjqpM-lg7Bblkp2nMD0t5zv_xEH0DB_NMUU7abSa-bUY5uvsFzeTTvqVviLTYTxunJ3UcEJZkwEXCiO3zeV0A126-TLL4-8GpdGvdgIMnOS5HmZBBe1-3vFHmpvkGcmVqNdKrgWF4U9oRg_jwNPcXVwPl6NQiAFR1xiBN8-Up2LdGshgOeLs97WwHBYw8"
			},
			"geometry": { "type": "Point", "coordinates": [36.1871, 51.6159] }
		}
	]
}

var BagrationMonuments = {
	"type": "FeatureCollection",
	"name": "monuments",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
		{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Мемориальный комплекс 'Курган Славы'",
				"date": "1969-07-03",
				"description": "Мемориальный комплекс, посвященный битве под Оршей. Включает в себя обелиск,  могилы, плиты с именами погибших, музей.",
				"foto": "https://ekskursii.by/images/obj3/102267/1_clear_resize1.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [30.1755, 54.5283] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Мемориальный комплекс 'Память'",
				"date": "1968",
				"description": "Мемориальный комплекс, посвященный освобождению города Витебска. Включает в себя скульптурную композицию,  могилы, плиты с именами погибших, музей.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/d/d4/%D0%9C%D1%8D%D0%BC%D0%B0%D1%80%D1%8B%D1%8F%D0%BB%D1%8C%D0%BD%D1%8B_%D0%BA%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9F%D0%B0%D0%BC%D1%8F%D1%86%D1%8C.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [30.2066, 55.1936] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Мемориальный комплекс 'Освобождение'",
				"date": "1969",
				"description": "Мемориальный комплекс, посвященный освобождению города Минска. Включает в себя скульптурную композицию,  могилы, плиты с именами погибших, музей.",
				"foto": "https://avatars.mds.yandex.net/get-altay/3912953/2a00000174fbfde99712df96166d0c455ca7/XXXL"
			},
			"geometry": { "type": "Point", "coordinates": [27.5669, 53.9023] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Мемориальный комплекс 'Брестская крепость'",
				"date": "1971",
				"description": "Мемориальный комплекс, посвященный обороне Брестской крепости. Включает в себя руины крепости,  могилы, плиты с именами погибших, музей.",
				"foto": "https://a.d-cd.net/ec3ff16s-1920.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [23.7018, 52.1077] }
		}
	]
}

var BerlinOffensiveMonuments = {
	"type": "FeatureCollection",
	"name": "monuments",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
		{
			"type": "Feature",
			"properties": {
				"id": 1,
				"name": "Мемориал советским воинам в Трептов-парке",
				"date": "1949-05-08",
				"description": "Мемориальный комплекс, посвященный погибшим советским солдатам в Берлинской операции. Включает в себя скульптуру «Воин-освободитель», братские могилы,  памятник советским воинам, погибшим в боях за Берлин.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/1/13/Berlin_Treptow_Ehrenmal_07.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [13.4750, 52.4928] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 2,
				"name": "Мемориал советским воинам в Шёнхофе",
				"date": "1949",
				"description": "Мемориальный комплекс, посвященный погибшим советским солдатам в Берлинской операции. Включает в себя братские могилы,  памятник советским воинам, погибшим в боях за Берлин.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Soviet_Cemetery_Pankow_2009_SE.jpg/1280px-Soviet_Cemetery_Pankow_2009_SE.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [13.5259, 52.3681] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 3,
				"name": "Мемориал советским воинам в Тиргартене",
				"date": "1949",
				"description": "Мемориальный комплекс, посвященный погибшим советским солдатам в Берлинской операции. Включает в себя братские могилы,  памятник советским воинам, погибшим в боях за Берлин.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Sowjetisches_Denkmal_an_der_Strasse_des_17.Juni.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [13.3600, 52.5100] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 4,
				"name": "Мемориал советским воинам в Панков",
				"date": "1949",
				"description": "Мемориальный комплекс, посвященный погибшим советским солдатам в Берлинской операции. Включает в себя братские могилы,  памятник советским воинам, погибшим в боях за Берлин.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mother_Statue.Sch%C3%B6nholzer_Heide.Soviet_War_Memorial.JPG"
			},
			"geometry": { "type": "Point", "coordinates": [13.4325, 52.5675] }
		},
		{
			"type": "Feature",
			"properties": {
				"id": 5,
				"name": "Мемориал советским воинам в Карлсхорст",
				"date": "1949",
				"description": "Мемориальный комплекс, посвященный погибшим советским солдатам в Берлинской операции. Включает в себя братские могилы,  памятник советским воинам, погибшим в боях за Берлин.",
				"foto": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Denkmal_mit_sowjetischem_T34_Panzer.jpg/1280px-Denkmal_mit_sowjetischem_T34_Panzer.jpg"
			},
			"geometry": { "type": "Point", "coordinates": [13.5187, 52.4841] }
		}
	]
}