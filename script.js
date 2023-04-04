let listaSpesa = ["Burro", "Uova", "Farina", "Pane", "Thè", "Acqua"];

/* Lista spesa con ciclo for e while:

for (let i = 0; i < listaSpesa.length; i++) {
    let elementoListaSpesa = listaSpesa[i];
    console.log(elementoListaSpesa);
}

let i = 0

while (i < listaSpesa.length) {
    let elementoListaSpesa = listaSpesa[i];
    i++;
    console.log(elementoListaSpesa);
}
*/

let i = 0

while (i < listaSpesa.length) {
    let elementoListaSpesa = (i+1) + " " + listaSpesa[i];
    i++;
    console.log(elementoListaSpesa);
}