const names = [
  "Abrienda",
  "Abril",
  "Acacia",
  "Adalia",
  "Adana",
  "Adelina",
  "Adelita",
  "Adella",
  "Adonia",
  "Adoracion",
  "Adriana",
  "Adriana",
  "Agacia",
  "Agdta",
  "Agnese",
  "Agueda",
  "Aida",
  "Aidia",
  "Aintzane",
  "Alameda",
  "Alandra",
  "Alanza",
  "Alazne",
  "Albertine",
  "Alda",
  "Aldene",
  "Aldona",
  "Aldonsa",
  "Aldonza",
  "Aleece",
  "Alegria",
  "Alegria",
  "Alejandra",
  "Alejandrina",
  "Aleta",
  "Aletea",
  "Aletia",
  "Aletta",
  "Alfonsa",
  "Alfreda",
  "Alhertina",
  "Alicia",
  "Alisa",
  "Alise",
  "Alita",
  "Allegra",
  "Alliss",
  "Allyce",
  "Alma",
  "Almira",
  "Almunda",
  "Almundena",
  "Almundina",
  "Aloise",
  "Alona",
  "Alondra",
  "Alonsa",
  "Alta",
  "Altagracia",
  "Alvarita",
  "Alvera",
  "Alyce",
  "Alys",
  "Alyss",
  "Amada",
  "Amalia",
  "Amalur",
  "Amalure",
  "Amanda",
  "Amara",
  "Amaranta",
  "Amaris",
  "Amarissa",
  "Amata",
  "Amor",
  "Amora",
  "Amora",
  "Ana",
  "Analee",
  "Analeigh",
  "Analena",
  "Anamarie",
  "Anarosa",
  "Andeana",
  "Andeana",
  "Andera",
  "Andere",
  "Andrea",
  "Andria",
  "Angela",
  "Angelia",
  "Angelina",
  "Anica",
  "Anita",
  "Anitia",
  "Anjelica",
  "Anjelita",
  "Antonia",
  "Antonina",
  "Anunciacion",
  "Aquilina",
  "Araceli",
  "Aracelia",
  "Aracely",
  "Arama",
  "Arama",
  "Arcadia",
  "Arcelia",
  "Arcelia",
  "Arcilla",
  "Arella",
  "Aricela",
  "Ariela",
  "Armanda",
  "Artemisia",
  "Artura",
  "Ascencion",
  "Asuncion",
  "Atalaya",
  "Athalia",
  "Aurelia",
  "Aureliana",
  "Aurkena",
  "Aurkene",
  "Azura",
  "Beatrisa",
  "Beatriz",
  "Belen",
  "Belicia",
  "Belinda",
  "Belinda",
  "Belita",
  "Bella",
  "Benigna",
  "Benita",
  "Bernicia",
  "Berta",
  "Bibiana",
  "Bienvenida",
  "Blanca",
  "Blanca",
  "Blandina",
  "Blasa",
  "Bonita",
  "Bonita",
  "Breezy",
  "Brigida",
  "Brigidia",
  "Brisa",
  "Brisha",
  "Brisia",
  "Brissa",
  "Briza",
  "Bryssa",
  "Buena",
  "Calandria",
  "Calida",
  "Calida",
  "Calvina",
  "Camila",
  "Candi",
  "Candida",
  "Candie",
  "Cari",
  "Carilla",
  "Carisa",
  "Carla",
  "Carletta",
  "Carlita",
  "Carlota",
  "Carlota",
  "Carlotta",
  "Carmela",
  "Carmelita",
  "Carmelita",
  "Carmen",
  "Carmencita",
  "Carmina",
  "Carminda",
  "Carmita",
  "Carola",
  "Carona",
  "Carrola",
  "Casandra",
  "Casey",
  "Casta",
  "Catalin",
  "Catalina",
  "Catalina",
  "Celerina",
  "Celesta",
  "Celestina",
  "Cenobia",
  "Ceri",
  "Ceria",
  "Cesara",
  "Chalina",
  "Charo",
  "Charo",
  "Chavela",
  "Chavelle",
  "Chaya",
  "Chela",
  "ChicaChiquita",
  "Chiquita",
  "Chrisanna",
  "Chrisanne",
  "Chrysann",
  "Cipriana",
  "Cira",
  "Ciri",
  "Clareta",
  "Clarinda",
  "Clarisa",
  "Clarissa",
  "Claudia",
  "Clementina",
  "Clodovea",
  "Coco",
  "Coleta",
  "Concepcion",
  "Concetta",
  "Conchetta",
  "Conshita",
  "Consolacion",
  "Consolata",
  "Constantia",
  "Constanza",
  "Consuela",
  "Consuela",
  "Consuelo",
  "Consuelo",
  "Corazana",
  "Corazon",
  "Corazon",
  "Crisann",
  "Crisanna",
  "Crista",
  "Cristina",
  "Cristine",
  "Cyntia",
  "Dalila",
  "Damita",
  "Damita",
  "Dani",
  "Daniela",
  "Danita",
  "Daria",
  "Deiene",
  "Deikun",
  "Deina",
  "Delcine",
  "Delfina",
  "Delma",
  "Delmar",
  "Delmara",
  "Delphia",
  "Denisa",
  "Desideria",
  "Destina",
  "Devera",
  "Dia",
  "Diega",
  "Digna",
  "Dina",
  "Dinora",
  "Dionis",
  "Dionisa",
  "Dita",
  "Dolores",
  "Dolorita",
  "Domenica",
  "Dominga",
  "Dominica",
  "Dona",
  "Dorbeta",
  "Dorinda",
  "Dorotea",
  "Doroteia",
  "Dreena",
  "Drina",
  "Duena",
  "Duena",
  "Dukine",
  "Dukinea",
  "Dulce",
  "Dulce",
  "Dulcea",
  "Dulcina",
  "Dulcinea",
  "Dulcinia",
  "Earlena",
  "Earlene",
  "Earlina",
  "Edenia",
  "Edita",
  "Edita",
  "Elbertina",
  "Eldora",
  "Eldora",
  "Eleadora",
  "Eleanora",
  "Eleena",
  "Elena",
  "Elina",
  "Elisa",
  "Ella",
  "Eloisa",
  "Elsa",
  "Elvera",
  "Elvira",
  "Elvira",
  "Elvita",
  "Ema",
  "Emerald",
  "Emesta",
  "Emilia",
  "Emilie",
  "Encarnacion",
  "Engracia",
  "Enrica",
  "Enriqua",
  "Enriqueta",
  "Erendira",
  "Erendiria",
  "Erlene",
  "Erlina",
  "Ernesta",
  "Eskama",
  "Eskame",
  "Esma",
  "Esma",
  "Esme",
  "Esmeralda",
  "Esmerelda",
  "Esmerelda",
  "Esperanza",
  "Esperanza",
  "Estebana",
  "Estefana",
  "Estefani",
  "Estefania",
  "Estefany",
  "Estela",
  "Estelita",
  "Estella",
  "Estephanie",
  "Ester",
  "Esteva",
  "Estralita",
  "Estrella",
  "Estrella",
  "Estrellita",
  "Eva",
  "Evita",
  "Evita",
  "Exaltacion",
  "Ezmeralda",
  "Faqueza",
  "Fausta",
  "Faustina",
  "Fe",
  "Felicita",
  "Felicitas",
  "Felisa",
  "Fermina",
  "Fidelia",
  "Fidelina",
  "Filipa",
  "Flor",
  "Floramaria",
  "Florencia",
  "Florentina",
  "Florida",
  "Florida",
  "Florinia",
  "Florita",
  "Fonda",
  "Fonda",
  "Fortuna",
  "Francisca",
  "Freira",
  "Freira",
  "Frescura",
  "Gabriela",
  "Gabriella",
  "Gala",
  "Galena",
  "Galenia",
  "Garabina",
  "Garabine",
  "Garaitz",
  "Garbina",
  "Garbine",
  "Gaspara",
  "Gechina",
  "Generosa",
  "Gertrudes",
  "Gertrudis",
  "Gezana",
  "Grazia",
  "Guillermina",
  "Iliana",
  "Iluminada",
  "Imelda",
  "Immaculada",
  "InesInez",
  "Inez",
  "Inocencia",
  "Inoceneia",
  "Inocenta",
  "Iratze",
  "Irene",
  "Irune",
  "Isabel",
  "Isabel",
  "Isabela",
  "Isabella",
  "Isi",
  "Isidora",
  "Itsaso",
  "Itxaro",
  "Ivette",
  "Izar",
  "Izarra",
  "Izarre",
  "Izazkun",
  "Jacinta",
  "Jacinta",
  "Jade",
  "Jaione",
  "Jakinda",
  "Jasone",
  "Javiera",
  "Jesusa",
  "Jimena",
  "Joaquina",
  "Jordana",
  "Josefa",
  "Josefina",
  "Josune",
  "Jovana",
  "Jovanna",
  "Jovena",
  "Jovina",
  "Jovita",
  "Juana",
  "Juandalynn",
  "Juanetta",
  "Juanisha",
  "Juanita",
  "Juanita",
  "Juliana",
  "Julieta",
  "Julina",
  "Karmen",
  "Kasandra",
  "Katia",
  "Kemena",
  "Kemina",
  "Kesara",
  "Kesare",
  "Kiki",
  "Kita",
  "LaCienega",
  "Ladonna",
  "Lala",
  "Lali",
  "Lalia",
  "Lalla",
  "Landa",
  "Landra",
  "Landrada",
  "Lara",
  "Lareina",
  "LaReina",
  "Lareina",
  "Larunda",
  "Latoya",
  "Laura",
  "Laurana",
  "Laurencia",
  "Laurinda",
  "Laurita",
  "Lavina",
  "Lavinia",
  "Lea",
  "Leala",
  "Legarre",
  "Leira",
  "Lela",
  "Lenora",
  "Leonor",
  "Leonora",
  "Lera",
  "Letitia",
  "Levina",
  "Leya",
  "Lia",
  "Liana",
  "Linda",
  "Linda",
  "Llesenia",
  "Lluvia",
  "Lola",
  "Lola",
  "Loleta",
  "Lolita",
  "Lolitta",
  "Lora",
  "Lorda",
  "Lore",
  "Loretta",
  "Lourdes",
  "Louredes",
  "Lucena",
  "Lucila",
  "Lucita",
  "Lucrecia",
  "Luella",
  "Luisa",
  "Luiza",
  "Lupe",
  "Lupe",
  "Lupita",
  "Lupita",
  "Lur",
  "Luvenia",
  "Luvina",
  "Luz",
  "Luz",
  "Madalena",
  "Madalynn",
  "Madeira",
  "Madelynn",
  "Madena",
  "Madia",
  "Madina",
  "Madre",
  "Madrona",
  "Magdalen",
  "Magdalena",
  "Magdalena",
  "Magdalene",
  "Mahogony",
  "Maite",
  "Maitea",
  "Malaya",
  "Malia",
  "Malita",
  "Manda",
  "Manoela",
  "Manuela",
  "Marcela",
  "Margarita",
  "Margarita",
  "Maria",
  "Maria",
  "Mariana",
  "Maribel",
  "Maricel",
  "Maricela",
  "Maricelia",
  "Maricella",
  "Marietta",
  "Mariquita",
  "Marisa",
  "Marisela",
  "Marisol",
  "Marisol",
  "Marquilla",
  "Marta",
  "Martina",
  "Matia",
  "Maya",
  "Melisenda",
  "Melita",
  "Melosa",
  "Melosa",
  "Melosia",
  "Mendi",
  "Mercedes",
  "Mercedes",
  "Milagritos",
  "Milagros",
  "Milagrosa",
  "Mimi",
  "Mirabel",
  "Miranda",
  "Mirari",
  "Mireya",
  "Modesta",
  "Modeste",
  "Molara",
  "Monica",
  "Monita",
  "Mora",
  "Mora",
  "Morisa",
  "Morissa",
  "Moya",
  "Naiara",
  "Naiara",
  "Nalda",
  "Nana",
  "Narcisa",
  "Natalia",
  "Natividad",
  "Neiva",
  "Nekana",
  "Nekane",
  "Nelia",
  "Nelida",
  "Nerea",
  "Nerita",
  "Neta",
  "Neva",
  "Neva",
  "Nevada",
  "Nicanora",
  "Nieve",
  "Nieve",
  "Nina",
  "Nina",
  "Nita",
  "Nita",
  "Noemi",
  "Novia",
  "Odanda",
  "Oihane",
  "Oihane",
  "Olinda",
  "Oliveria",
  "Olivia",
  "Ora",
  "Ora",
  "Orquidea",
  "Orquidia",
  "Osana",
  "Osane",
  "Pabla",
  "Pabla",
  "Paciencia",
  "Palba",
  "Palma",
  "Palmira",
  "Paloma",
  "Paloma",
  "Paquita",
  "Pastora",
  "Patricia",
  "Paulita",
  "Paz",
  "Pedra",
  "Pepita",
  "Perfecta",
  "Pia",
  "Pilar",
  "Pilar",
  "Placida",
  "Presencia",
  "Presta",
  "Primavera",
  "Primavera",
  "Prudencia",
  "Puebla",
  "Pura",
  "Pureza",
  "Purisima",
  "Querida",
  "Quinta",
  "Raimunda",
  "Raina",
  "Ramira",
  "Ramona",
  "Raquel",
  "Raquel",
  "Regina",
  "Reia",
  "Reina",
  "Reina",
  "Remedios",
  "Reya",
  "Reyna",
  "Ria",
  "Rica",
  "Ricarda",
  "Rio",
  "Rita",
  "Rita",
  "Roana",
  "Roana",
  "Rocio",
  "Roderiga",
  "Roja",
  "Roldana",
  "Romana",
  "Rosalia",
  "Rosalind",
  "Rosalind",
  "Rosalinda",
  "Rosalinde",
  "Rosaline",
  "Rosalyn",
  "Rosamaria",
  "Rosario",
  "Rosemarie",
  "RosIyn",
  "Roz",
  "Rufa",
  "Rufina",
  "Sabana",
  "Sabina",
  "Salbatora",
  "Salma",
  "Salvadora",
  "Salvatora",
  "Sancha",
  "Sancha",
  "Sancia",
  "Sara",
  "Sarita",
  "Saturnina",
  "Savanna",
  "Savanna",
  "Savannah",
  "Savannah",
  "Segunda",
  "Seina",
  "Senalda",
  "Senalda",
  "Senona",
  "Senona",
  "Serafina",
  "Serena",
  "Sevilla",
  "Shoshana",
  "Sierra",
  "Simona",
  "Socorro",
  "Sofia",
  "Solana",
  "Soledad",
  "Soledad",
  "Soledada",
  "Sonora",
  "Suelita",
  "Susana",
  "Tabora",
  "Tanis",
  "Tea",
  "Tejana",
  "Telma",
  "Teodora",
  "Terceira",
  "Teresa",
  "Teresa",
  "Teresita",
  "Tia",
  "Tierra",
  "Tranquilla",
  "Trella",
  "Trella",
  "Tulia",
  "Ula",
  "Ursulina",
  "Usoa",
  "Usoa",
  "Valencia",
  "Valencia",
  "Valentina",
  "Vanesa",
  "Ventana",
  "Ventura",
  "Ventura",
  "Verda",
  "Verdad",
  "Verdad",
  "Veronica",
  "Veta",
  "Veta",
  "Vicenta",
  "Vina",
  "Vina",
  "Virginia",
  "Vittoria",
  "Xalbadora",
  "Xalvadora",
  "Xalvadora",
  "Xaviera",
  "Xaviera",
  "Xevera",
  "Xeveria",
  "Xiomara",
  "Xuxa",
  "Yadra",
  "Yanamaria",
  "Yanamarie",
  "Yesenia",
  "Yoana",
  "Yolanda",
  "Zamora",
  "Zamora",
  "Zandra",
  "Zaneta",
  "Zanetta",
  "Zanita",
  "Zarita",
  "Zaviera",
  "Zita",
  "Zita",
  "Zurina",
  "Zurina",
  "Zurine",
]

const getSpanishFemaleName = () =>
  names[Math.floor(Math.random() * names.length)]

export default getSpanishFemaleName