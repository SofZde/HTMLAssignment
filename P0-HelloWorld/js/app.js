// lista med 3 arrays. Det finns tre index platser i listan. 0,1,2.
// //dessa används  senare för att generera ett random värde till datorVal
const val= [ "sten", "sax", "påse"];

let ScoreW= 0;let ScoreL= 0;let ScoreD= 0;

// hhämta element från html indexfil med det tilldelade id't i html filen.
const spelareDisplay= document.getElementById("spelareDisplay");
const datorDisplay= document.getElementById("datorDisplay");
const resultatDisplay= document.getElementById("resultatDisplay");
const resultatVinster= document.getElementById("resultatVinster");
const resultatFörluster=document.getElementById("resultatFörluster");
const resultatOavgjort= document.getElementById("resultatOavgjort");
// skapa funktion för spela spel, denna funktion används/triggas när spelaren trycker på en av knapparna.
// vid det tillfället tilldelas ett random heltal från listan "val" till datorval.
// spelarens Val hamnar i variabeln "spelarensVal" och tilldelas baserat på vilken knapp som trycks på.
//knapparn har tillhörande värden som placerass i functionen ( se index filen)
function SpelaSpel(spelareVal){
  const datorVal= val[Math.floor(Math.random()*3)]; // här genereras ett slumpmässigt indexvärde från listan "val"
   // test för att se om det funkar.
  console.log(datorVal);
  let resultat= "";


   // skapar variabel resultat där värdet (vinnaren) baseras på olika utfall.
  //skapar utfall (villkor) där spelare och dator har samma värde

if (spelareVal === datorVal){
  resultat= "OAVGJORT"; // båda väljer samma
}
else // skapar olika resultat baserat på villkor.
{
  switch (spelareVal){

    case"sten": // i fall där spelaren  väljer sten
      //villkor : om datorns val= sax så: Annars så:
      resultat= (datorVal=== "sax") ? "DU VANN! " : "DU FÖRLORADE!" ;
      break;
    case "sax": // i fall där spelaren väljer sax
      resultat=(datorVal=== "påse") ? "DU VANN!" : "DU FÖRLORADE!";
      break;

    case "påse": // i fall där spelaren väljer påse .
      resultat= (datorVal=== "sten") ? "DU VANN!" : "DU FÖRLORADE!" ;
      break;
  }


}
if (resultat=== "DU VANN!")
  {
    ScoreW= ++ScoreW;

  }
else if (resultat === "DU FÖRLORADE!")
{
ScoreL= ++ScoreL;


}

else
{
ScoreD= ++ScoreD;

}

  spelareDisplay.textContent = `SPELARE: ${spelareVal}` ;
  datorDisplay.textContent= `DATOR: ${datorVal}`;
  resultatDisplay.textContent= resultat;

  resultatVinster.textContent = `Vinster: ${ScoreW}` ;
  resultatFörluster.textContent= `Förluster: ${ScoreL}` ;
  resultatOavgjort.textContent= `Oavgjort: ${ScoreD}`;


}

