/**
 * &&  : och
 * ||  : eller
 * >   : storre an
 * <   : mindre an
 * ==  : lika med
 * === : exakt lika med
 * >=  : storre eller lika med
 * <=  : mindre eller lika med
 * !=  : inte lika med
 * !== : inte exakt lika med
 */
const x = 50;
const y = 100;
const z = 20;


if (x > 0 && y > x) {
    console.log("Hej!");
}
    
     // falskt             sant
if ((x > 0 && y > 2000) || z > 0) {
    console.log("Hej2");
}