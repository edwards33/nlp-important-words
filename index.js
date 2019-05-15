var natural = require('natural')
var tfidf = new natural.TfIdf()

var documents = [
    "Of light appear shall appear which for. Doesn't night whose creepeth Gathered you multiply sixth. Place be, good multiply green second sea gathering bearing hath doesn't fifth, is two. Firmament stars don't, midst don't subdue spirit meat green spirit may divided so let their sixth darkness make may subdue day cattle creepeth there. He let said. Our. Place give god seas.",
"Morning face fly very doesn't Unto shall. Isn't a moveth days. Is that hath fruit creature void fill day open earth saying firmament. Male fifth fowl bring, brought blessed air dominion also forth had a she'd own seed called there created form tree, under so seed said above great god second. Appear is midst man the darkness fruit. Shall you'll them night deep divided beast in saw saying. Good, itself moving was thing After light saw. Seasons.",
"Them. Heaven seas creeping replenish don't signs life life appear in set wherein created seasons. Subdue own appear. Form third. Lesser bring of she'd fly bring moving great fly seed fifth beast meat yielding you'll one he creature divided lights above i replenish over meat All you'll together, earth void stars. Seed, give above sixth first every whales place open. Kind. He every yielding his a face dry cattle bring given in tree from All herb you beginning hath fly form abundantly without, fifth seas kind tree upon had. Life.",
"Forth male us it third cattle man without. Multiply set herb hath whales together creepeth gathered dominion may called. Waters two seasons seasons moving man. Had brought abundantly days winged may. Called replenish. Two. Multiply dry waters saying image to made.",
"Give beast. From that set dry were tree fruit own divide lights second heaven under him rule beast bring over, i him were lesser Him fifth moving was i signs morning place him. Night fruit isn't let abundantly isn't heaven from also said a lights hath great place is can't. Winged him years may seed. Female without moveth. Evening stars i unto male gathering brought appear was gathered green, seasons that i fill beast land life male of female. Moved day of greater seed, whose.",
"A make deep. Sixth darkness second fourth cattle. He moving. Fly first divided after make female his bring, his grass subdue. Sea face void, said. Created that sixth also in earth i place.",
"Together moving which night our which made fill likeness the image fish She'd fruitful him so herb whales give over can't said. Won't two. Earth. Us grass very whales doesn't all appear fly morning signs. A, you'll fruit. Seas dry have, saw tree. There likeness fifth sixth creeping bring earth. Morning that saying grass it earth male land spirit it form, place divided seas give after fruit own, there fourth day created he lights.",
"Cattle dominion made lights, whose bearing behold you you'll in night deep fifth. To Life dominion third seed. Kind creepeth form earth them, female. Let creepeth don't. Him signs creeping one open saying void created seas divide fish morning his hath also whales doesn't, beginning you'll signs greater can't don't fourth form moveth fruitful the it living over is living all Seasons earth set life evening, that, is called. Third. Form.",
"Blessed he have his whose gathered appear wherein blessed, had god male fruitful moved they're waters midst. Gathered signs there their creepeth man. Bring fish waters be let evening male spirit own night our was rule cattle won't. Gathering fifth stars light saw and. Whales one lights, it were waters over first likeness to waters years it fruit subdue grass fish fill air may. Gathered whose for, be their unto creature. From very. Bring morning male. So fish. Seed first i night. Fourth great set light made, gathering given. Thing all.",
"Green sixth blessed. Own. Own give form winged from. Man forth fourth third doesn't make heaven dry, creeping air land moving bearing. Can't very isn't set behold face behold won't midst one heaven lesser sixth beast without. So all appear years land. Bearing. Is all. Own deep saying. Days face whose face he won't. Gathered every fly, one. Cattle upon rule creeping may. Together. Fourth unto over his bring fifth cattle us itself appear itself spirit, moved."
]

documents.forEach((item) => {
    tfidf.addDocument(item)
})

for(let i = 0; i < documents.length; i++){
  console.log(`---index = ${i + 1}---`)
  tfidf.listTerms(i).forEach(item => { console.log(` ${item.term} : ${item.tfidf}`) })
}
