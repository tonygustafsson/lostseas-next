const names = [
  "Aaron",
  "Abbott",
  "Abel",
  "Abner",
  "Abraham",
  "Adam",
  "Addison",
  "Adler",
  "Adley",
  "Adrian",
  "Adrien",
  "Aedan",
  "Aiden",
  "Aiken",
  "Alan",
  "Allan",
  "Alastair",
  "Albern",
  "Albert",
  "Albion",
  "Alden",
  "Aldis",
  "Aldrich",
  "Alexander",
  "Alfie",
  "Alfred",
  "Algernon",
  "Alston",
  "Alton",
  "Alvin",
  "Ambrose",
  "Amery",
  "Amos",
  "Andrew",
  "Angus",
  "Ansel",
  "Anthony",
  "Archer",
  "Archibald",
  "Arlen",
  "Arnold",
  "Arthur",
  "Art",
  "Arvel",
  "Atwater",
  "Atwood",
  "Aubrey",
  "Austin",
  "Avery",
  "Axel",
  "Baird",
  "Baldwin",
  "Barclay",
  "Barnaby",
  "Baron",
  "Barrett",
  "Barry",
  "Bartholomew",
  "Basil",
  "Benedict",
  "Benjamin",
  "Benton",
  "Bernard",
  "Bert",
  "Bevis",
  "Blaine",
  "Blair",
  "Blake",
  "Bond",
  "Boris",
  "Bowen",
  "Braden",
  "Bradley",
  "Brandan",
  "Brendan",
  "Brendon",
  "Brent",
  "Bret",
  "Brett",
  "Brian",
  "Brice",
  "Brigham",
  "Brock",
  "Broderick",
  "Brooke",
  "Bruce",
  "Bruno",
  "Bryant",
  "Buck",
  "Bud",
  "Burgess",
  "Burton",
  "Byron",
  "Cadman",
  "Calvert",
  "Caldwell",
  "Caleb",
  "Calvin",
  "Carrick",
  "Carl",
  "Carlton",
  "Carney",
  "Carroll",
  "Carter",
  "Carver",
  "Cary",
  "Casey",
  "Casper",
  "Cecil",
  "Cedric",
  "Chad",
  "Chadwick",
  "Chalmers",
  "Chandler",
  "Channing",
  "Chapman",
  "Charles",
  "Chatwin",
  "Chester",
  "Christian",
  "Christopher",
  "Clarence",
  "Claude",
  "Clayton",
  "Clay",
  "Clifford",
  "Cliff",
  "Clive",
  "Clyde",
  "Coleman",
  "Colin",
  "Collier",
  "Conan",
  "Connell",
  "Connor",
  "Conrad",
  "Conroy",
  "Conway",
  "Corwin",
  "Crispin",
  "Crosby",
  "Culbert",
  "Culver",
  "Curt",
  "Curtis",
  "Cuthbert",
  "Craig",
  "Cyril",
  "Dale",
  "Daley",
  "Dalton",
  "Damon",
  "Daniel",
  "Darcy",
  "Darian",
  "Darell",
  "Darrel",
  "David",
  "Davin",
  "Dean",
  "Declan",
  "Delmar",
  "Denley",
  "Dennis",
  "Derek",
  "Dermot",
  "Derwin",
  "Des",
  "Desmond",
  "Dexter",
  "Dillon",
  "Dion",
  "Dirk",
  "Dixon",
  "Dominic",
  "Donald",
  "Dorian",
  "Douglas",
  "Doyle",
  "Drake",
  "Drew",
  "Driscoll",
  "Dudley",
  "Duncan",
  "Durwin",
  "Dwayne",
  "Dwight",
  "Dylan",
  "Earl",
  "Eaton",
  "Ebenezer",
  "Edan",
  "Edgar",
  "Edric",
  "Edmond",
  "Edmund",
  "Edward",
  "Eddie",
  "Edwin",
  "Efrain",
  "Egan",
  "Egbert",
  "Egerton",
  "Egil",
  "Elbert",
  "Eldon",
  "Eldwin",
  "Eli",
  "Ely",
  "Elijah",
  "Elias",
  "Eliot",
  "Elliott",
  "Ellery",
  "Elmer",
  "Elroy",
  "Elton",
  "Elvis",
  "Emerson",
  "Emery",
  "Emmanuel",
  "Emmett",
  "Emrick",
  "Enoch",
  "Eric",
  "Erik",
  "Ernest",
  "Errol",
  "Erskine",
  "Erwin",
  "Esmond",
  "Ethan",
  "Ethanael",
  "Ethen",
  "Eugene",
  "Evan",
  "Everett",
  "Ezra",
  "Fabian",
  "Fairfax",
  "Falkner",
  "Farley",
  "Farrell",
  "Felix",
  "Fenton",
  "Ferdinand",
  "Fergal",
  "Fergus",
  "Ferguson",
  "Ferris",
  "Finbar",
  "Fitzgerald",
  "Fleming",
  "Fletcher",
  "Floyd",
  "Forbes",
  "Forrest",
  "Foster",
  "Fox",
  "Francis",
  "Frank",
  "Frasier",
  "Frederick",
  "Freeman",
  "Gabriel",
  "Gale",
  "Galvin",
  "Gardner",
  "Garret",
  "Garrick",
  "Garth",
  "Gavin",
  "George",
  "Gerald",
  "Gerard",
  "Gerret",
  "Gideon",
  "Gifford",
  "Gilbert",
  "Giles",
  "Gilroy",
  "Glenn",
  "Goddard",
  "Godfrey",
  "Godwin",
  "Graham",
  "Grant",
  "Grayson",
  "Gregory",
  "Gresham",
  "Griswald",
  "Griswold",
  "Grover",
  "Guy",
  "Hadden",
  "Hadley",
  "Hadwin",
  "Hal",
  "Halbert",
  "Halden",
  "Hale",
  "Hall",
  "Halsey",
  "Hamlin",
  "Hanley",
  "Hardy",
  "Harlan",
  "Harland",
  "Harley",
  "Harold",
  "Harry",
  "Harris",
  "Harrison",
  "Hartley",
  "Heath",
  "Heathcliff",
  "Hector",
  "Henry",
  "Herbert",
  "Herman",
  "Homer",
  "Horace",
  "Horatio",
  "Howard",
  "Hubert",
  "Hugh",
  "Hugo",
  "Humphrey",
  "Hunter",
  "Ian",
  "Igor",
  "Irvin",
  "Irving",
  "Isaac",
  "Isaiah",
  "Ivan",
  "Iver",
  "Ivar",
  "Ives",
  "Jack",
  "Jacob",
  "James",
  "Jimmy",
  "Jarvis",
  "Jason",
  "Jasper",
  "Jed",
  "Jeffrey",
  "Jeremiah",
  "Jeremy",
  "Jerome",
  "Jesse",
  "John",
  "Jonathan",
  "Joseph",
  "Joey",
  "Joe",
  "Joshua",
  "Justin",
  "Kane",
  "Keene",
  "Keegan",
  "Keaton",
  "Keith",
  "Kelsey",
  "Kelvin",
  "Kendall",
  "Kendrick",
  "Kenneth",
  "Ken",
  "Kent",
  "Kenway",
  "Kenyon",
  "Kerry",
  "Kerwin",
  "Kevin",
  "Kiefer",
  "Kilby",
  "Kilian",
  "Kim",
  "Kimball",
  "Kingsley",
  "Kirby",
  "Kirk",
  "Kit",
  "Kody",
  "Konrad",
  "Kurt",
  "Kyle",
  "Lambert",
  "Lamont",
  "Lancelot",
  "Landon",
  "Landry",
  "Lane",
  "Lars",
  "Laurence",
  "Lee",
  "Leith",
  "Leonard",
  "Leo",
  "Leon",
  "Leroy",
  "Leslie",
  "Lester",
  "Lincoln",
  "Lionel",
  "Lloyd",
  "Logan",
  "Lombard",
  "Louis",
  "Lewis",
  "Lowell",
  "Lucas",
  "Luke",
  "Luther",
  "Lyndon",
  "Maddox",
  "Magnus",
  "Malcolm",
  "Melvin",
  "Marcus",
  "Mark",
  "Marc",
  "Marlon",
  "Martin",
  "Marvin",
  "Matthew",
  "Maurice",
  "Max",
  "Maxwell",
  "Medwin",
  "Melville",
  "Merlin",
  "Michael",
  "Milburn",
  "Miles",
  "Monroe",
  "Montague",
  "Montgomery",
  "Morgan",
  "Morris",
  "Morton",
  "Murray",
  "Nathaniel",
  "Nathan",
  "Neal",
  "Neville",
  "Nicholas",
  "Nigel",
  "Noel",
  "Norman",
  "Norris",
  "Olaf",
  "Olin",
  "Oliver",
  "Orson",
  "Oscar",
  "Oswald",
  "Otis",
  "Owen",
  "Paul",
  "Paxton",
  "Percival",
  "Percy",
  "Perry",
  "Peter",
  "Peyton",
  "Philbert",
  "Philip",
  "Phineas",
  "Pierce",
  "Quade",
  "Quenby",
  "Quillan",
  "Quimby",
  "Quentin",
  "Quinby",
  "Quincy",
  "Quinlan",
  "Quinn",
  "Ralph",
  "Ramsey",
  "Randolph",
  "Raymond",
  "Reginald",
  "Renfred",
  "Rex",
  "Rhett",
  "Richard",
  "Ridley",
  "Riley",
  "Robert",
  "Robin",
  "Roderick",
  "Rodney",
  "Roger",
  "Roland",
  "Rolf",
  "Ronald",
  "Rory",
  "Ross",
  "Roswell",
  "Roy",
  "Royce",
  "Rufus",
  "Rupert",
  "Russell",
  "Ryan",
  "Samson",
  "Samuel",
  "Scott",
  "Sean",
  "Sebastian",
  "Seth",
  "Seymour",
  "Shamus",
  "Shawn",
  "Shelley",
  "Sherard",
  "Sheridan",
  "Sherlock",
  "Sherman",
  "Sherwin",
  "Sidney",
  "Sigmund",
  "Silas",
  "Simon",
  "Sinclair",
  "Sloane",
  "Solomon",
  "Spencer",
  "Stacy",
  "Stanley",
  "Stan",
  "Stephen",
  "Stefan",
  "Sterling",
  "Stewart",
  "Stuart",
  "Theobold",
  "Theodore",
  "Thomas",
  "Timothy",
  "Titus",
  "Tobias",
  "Toby",
  "Todd",
  "Tony",
  "Travis",
  "Travers",
  "Trent",
  "Trevor",
  "Tristan",
  "Troy",
  "Truman",
  "Tyler",
  "Udolf",
  "Unwin",
  "Uriah",
  "Vance",
  "Vaughan",
  "Vernon",
  "Victor",
  "Vincent",
  "Wallace",
  "Walter",
  "Walton",
  "Ward",
  "Warren",
  "Washington",
  "Wayne",
  "Wesley",
  "Wilbur",
  "Willard",
  "William",
  "Will",
  "Willis",
  "Winston",
  "Winthrop",
  "Wyatt",
  "Wylie",
  "Wyman",
  "Zachariah",
  "Zachary",
  "Zebadiah",
  "Zane",
  "Zebediah",
]

const getEnglishMaleName = () => names[Math.floor(Math.random() * names.length)]

export default getEnglishMaleName
