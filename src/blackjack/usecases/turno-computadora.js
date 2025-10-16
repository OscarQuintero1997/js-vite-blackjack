
import { pedirCarta, valorCarta, crearCartaHTML } from "./";
/**
 * turno de la computadora
 * @param {Number} puntosMinimos 
 * @param {HTMLElement} puntosHTML Elementos HTML para mostrar los puntos
 *  @param {HTMLElement} divCartasComputadora Elementos HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {
    
    let puntosComputadora = 0;
    
    if (!puntosMinimos) throw new Error ('Puntos Mínimos son necesarios');
    if (!puntosHTML) throw new Error ('Argumentos puntosHTML es necesario');
        
    
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML ( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}