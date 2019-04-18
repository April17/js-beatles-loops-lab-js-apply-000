// add solution here
function theBeatlesPlay(musicans, instruments){
  var array = []
  var string = ""
  for (var i = 0; i <  musicans.length; i++){
    string = musicans[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  var string = ""
  var array = []
  while (i < facts.length){
    string = facts[i] + "!!!"
    array.push(string)
    i++
  }
  return array
}
