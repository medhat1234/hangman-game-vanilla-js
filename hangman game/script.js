
let btns = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
let playagainheader = document.getElementById("pa");

let clothesarr = ["clothes","tshirt", "jeans", "hoodie", "dress", "shirt", "skirt", "shorts", "sweater", "jacket", "blouse",
"pants", "sweatshirt", "coat", "scarf", "blazer", "tie", "leggings", "tanktop", "polo", "cardigan",
"suit", "vest", "overalls", "romper", "jumpsuit", "tunic", "sundress", "peacoat",
"kimono", "pajamas", "robe", "gloves", "socks", "hat", "cap", "beanie", "sunglasses", "swimsuit",
"raincoat", "poncho", "cargo", "sweatpants", "jersey", "shawl", "tiedye", "denim"];

let elementsarr = ["chemical elements", "hydrogen", "helium", "lithium", "beryllium", "boron", "carbon", "nitrogen", "oxygen", "fluorine", "neon",
"sodium", "magnesium", "aluminum", "silicon", "phosphorus", "sulfur", "chlorine", "argon", "potassium", "calcium",
"scandium", "titanium", "vanadium", "chromium", "manganese", "iron", "cobalt", "nickel", "copper", "zinc",
"gallium", "germanium", "arsenic", "selenium", "bromine", "krypton", "rubidium", "strontium", "yttrium", "zirconium",
"niobium", "molybdenum", "technetium", "ruthenium", "rhodium", "palladium", "silver", "cadmium", "indium", "tin"];

let householdsarr =["Households", "couch", "chair", "table", "bed", "lamp", "rug", "clock", "mirror", "sofa", "shelf",
"bookcase", "cabinet", "drawer", "mat", "mirror", "vase", "curtain", "blanket", "pillow", "mirror",
"dish", "plate", "cup", "fork", "spoon", "knife", "pot", "pan", "bowl", "glass",
"trashcan", "broom", "mop", "bucket", "dustpan", "vacuum", "towel", "basket", "hanger", "iron",
"toaster", "microwave", "blender", "fridge", "freezer", "oven", "clock", "calendar", "thermostat", "candle"];

let bodypartsarr =["body parts","head", "neck", "shoulder", "arm", "elbow", "wrist", "hand", "finger", "thumb",
"chest", "back", "waist", "hip", "leg", "thigh", "knee", "calf", "ankle", "foot", "toe",
"ear", "eye", "nose", "mouth", "lip", "tongue", "teeth", "jaw",
"hair", "skin", "nail", "fingernail", "toenail",
"heart", "lung", "liver", "stomach", "intestine", "kidney", "bladder", "spleen", "pancreas",
"brain", "spine", "nervous system", "muscle", "bone"];

let arrays =[clothesarr,elementsarr,householdsarr,bodypartsarr]
let wrongCount = 0;
let idxcount = 1;
let lost = false;
let paused = false;
 
//img
let img = document.getElementById("image");

//randomly choose the word
rn =Math.random();
let currentindex = 1;

let thehint = arrays[Math.round(rn*3)][0];
let theWord = arrays[Math.round(rn*3)][1+Math.round(Math.random()*48)];
let wordelement = document.getElementById("wId"); 
let hintelement = document.getElementById("hId"); 
hintelement.innerHTML =`hint:${thehint}`;

//intialize the word
let wordtext =theWord[0]+"*".repeat(theWord.length-currentindex);

let wordArr = theWord.split("");   ///split of the actual word
let encriptedWordArr = wordtext.split("");   //split of the ***word

wordelement.innerHTML =`${encriptedWordArr.join("")}`;




//build keyboard
let div = document.getElementById("btns");
let btnselements = [];

for(let i = 0;i<26;i++)   {
let element = document.createElement("div");
element.className ="grid-item";
element.innerHTML =`${btns[i]}`;
div.appendChild(element);
btnselements.push(element);
}

//functionalty to keyboard

playagainheader.onclick = function(){
   if(playagainheader.style.opacity>0){
   location.reload();
   }
}

btnselements.forEach(element => {
element.onclick = function(){
   if(paused || element.style.opacity ==="0"){
       
       return;
   }
   if(theWord.includes(element.innerHTML.toLowerCase())){

   for(let i = 1;i<wordArr.length;i++){
      if(element.innerHTML.toLowerCase() === wordArr[i])
      { encriptedWordArr[i] = wordArr[i];
         element.style.opacity = "0.4";
         element.style.backgroundColor ="green";
      }
      
   }

}else{
   wrongCount++
   element.style.opacity = 0;
   img.src =`gfx/${wrongCount}.svg`

}
   if(wordArr.join("") === encriptedWordArr.join("")){
      paused = true;
      lost = false;
      playagainheader.style.color ="green";
      playagainheader.style.opacity ="1";
      playagainheader.innerHTML =`won :) , press here to play agian`
    
   }else if(wrongCount ===7){
      playagainheader.innerHTML =`lost :(  and the word is: ${theWord} , press here to play agian`
      playagainheader.style.opacity ="1";
      lost = true;
      paused = true;
   }
   wordelement.innerHTML =`${encriptedWordArr.join("")}`;

 }
  
});

   
