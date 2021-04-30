$(document).ready(function(){

    /* array di oggetti contenente i gatti */

    const gatti = [
        {
            nome: 'Fuffi',
            età: 5,
            colore: '#a9acab81',
            sesso: 'maschio'
        },
        {
            nome: 'Tigre',
            età: 2.5,
            colore: '#ffffff',
            sesso: 'maschio'
        },
        {
            nome: 'Alex',
            età: 1.5,
            colore: '#ee82ee',
            sesso: 'maschio'
        },
        {
            nome: 'Micia',
            età: 7,
            colore: '#ffff00',
            sesso: 'femmina'
        },
        {
            nome: 'Bella',
            età: 4,
            colore: '#bd7e029f',
            sesso: 'femmina'
        }
    ];

    /* con un foreach stampo gli oggetti in base al colore e al nome */


    gatti.forEach((gatto) =>{
      
      $('#sec-1 ul').append(generaHtml(gatto.colore, gatto.nome))

    })

    const rosa = '#ffc0cb';
    const blu = '#0000ff';

    const newarray = gatti.map((gatto) =>{
        
     let colore = (gatto.sesso === 'femmina') ? rosa : blu;
     
     let opacità = gatto.età / 10;
     
     return {
         ...gatto,
         fiocco :{
         colore,
         opacità
         }
     }
    })/* fine map */
    
/*creo due array diversi dove con il filter gli inserisco in uno i maschi e nell'altro le femmine*/
    const gattifemmina = newarray.filter((gatto) =>  gatto.sesso === 'femmina');
    const gattimaschio = newarray.filter((gatto) =>  gatto.sesso === 'maschio'); 

    gattifemmina.forEach((gatto) =>{
        $('#sec-2-femmine ul').append(generaHtml(gatto.colore, gatto.nome, gatto.fiocco))
    })
    gattimaschio.forEach((gatto) =>{
        $('#sec-2-maschi ul').append(generaHtml(gatto.colore, gatto.nome, gatto.fiocco.colore, gatto.fiocco.opacità))
    })


    const gattiOrdinati = [...gattifemmina, ...gattimaschio];
    
    const newArrayDue = gattiOrdinati.map((gatto)=>{
         const {nome,colore,fiocco}=gatto;
         $('#sec-3 ul').append(generaHtml(colore, nome, fiocco.colore, fiocco.opacità));
         return {nome,colore,fiocco}
    });

    
    


}); /* fine docready */


/* funzione che mi genera l'html */
function generaHtml(colore,nome, ...fiocco){
    let fioccoTag = "";
    if(fiocco.length > 0){
        fioccoTag = `<i class="fas fa-ribbon" style="color:${fiocco[0]}; opacity:${fiocco[1]}"></i> `
    }
    if(fiocco.length > 0){}
    let html = `
     <li>
        <i class="fas fa-cat" style="color:${colore}"></i>
        ${fioccoTag}
        <span>${nome}</span>
    </li> 
     `;
return html;
}




