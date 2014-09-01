kerbalModMaker = [];
kerbalModMaker.modModel = [];
kerbalModMaker.modModel.parts = new Array();
kerbalModMaker.modModel.addPart = function(part){
  kerbalModMaker.modModel.parts.push(part);
}
kerbalModMaker.modModel.partExists = function(partName){
  for(var i = 0; i < kerbalModMaker.modModel.parts.length; i++){
    if(kerbalModMaker.modModel.parts[i].name === partName){
      return true;
    }
  }
  return false;
}
kerbalModMaker.modModel.getPartByName = function(partName){
  for(var i = 0; i < kerbalModMaker.modModel.parts.length; i++){
    if(kerbalModMaker.modModel.parts[i].name === partName){
      return kerbalModMaker.modModel.parts[i];
    }
  }
  return -1;
}
