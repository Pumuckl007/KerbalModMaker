(function(){
  kerbalModMaker.modView = this;
  this.elements = new Array;
  this.addElement = function(catagory, elementName){
    elements.push({Catagory:catagory, ElementName:elementName})
  }
  this.removeElement = function(elementName){
    for(var i = 0; i < elements.length; i++){
      if(elements[i].elementName = elementName){
        elements.splice(i, 1);
        return;
      }
    }
  }
})()
