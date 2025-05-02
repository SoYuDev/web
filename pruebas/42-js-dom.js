/* Cambio en el DOM del Objeto 1 */
function cambiardom1() {
    document.getElementById('objeto1').innerHTML = '<img src="comida.png">';
}
document.getElementById('boton1').addEventListener('click', cambiardom1);


/* Cambio en el DOM del Objeto 2 */
function cambiardom2() {
    document.getElementById('objeto2').outerHTML = `
        <table border="1">
            <tr>
                <td>Nombre</td>
                <td>Edad</td>
            </tr>
            <tr>
                <td>Pepe</td>
                <td>19</td>
            </tr>
        </table>
    `;
}
document.getElementById('boton2').addEventListener('click', cambiardom2);


/* Cambio en el DOM del Objeto 3 */
function cambiardom3() {
    document.getElementById('objeto3').insertAdjacentHTML('beforebegin', `
        <p>Esto esta delante del objeto</p>
    `);
    document.getElementById('objeto3').insertAdjacentHTML('beforeend', `
        <p>Esto esta al final del objeto</p>
    `);
}
document.getElementById('boton3').addEventListener('click', cambiardom3);


/* Cambio en el DOM del Objeto 4 */
function cambiardom4() {
    /* crear nuevo objeto */
    var caja = document.createElement('div');
    caja.classList.add('objeto');
    
    /* Meter contenido */
    caja.innerHTML = 'Contenido de la nueva caja';
    
    /* Colocar el nuevo objeto */
    document.getElementById('objeto4').appendChild(caja);
    
    
}
document.getElementById('boton4').addEventListener('click', cambiardom4);


/* Cambio en el DOM del Objeto 5 */
function cambiardom5() {
    /* Vaciar objeto inicial */
    document.getElementById('objeto5').innerHTML = '';
    
    for (i=1; i <= 5 ; i = i + 1) {
        
        /* crear nuevo objeto */
        var caja = document.createElement('div');
        caja.classList.add('objeto');

        /* Meter contenido */
        caja.innerHTML = `
                <img src="madrid` + i + `.jpg" >
                <br> Madrid ` + i
        ;

        /* Colocar el nuevo objeto */
        document.getElementById('objeto5').appendChild(caja);
    }
}
document.getElementById('boton5').addEventListener('click', cambiardom5);





