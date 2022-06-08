
//antes del partido contra independiente
const  titulares = ['Torrico', 'Elias', 'Zapata', 'Gattoni', 'James', 'Mercau', 'Ortigoza', 'Rosane', 'Martegani',
 'Bareiro', 'Cerutti'] 

const suplentes = ["Batalla", "Lujan", "Flores", "Sabella", "Sequeira", "Leguizamon", "Blandi"]

const reservas = ["juanito", "pedrito","lucas","luis", "conrado" ]
//luego del partido: roja a rosane y zapata lesionado


//por los afectados del ultimo partido entran en su lugar:
titulares.splice (7, 1)
titulares.splice (2, 1)

titulares.push('Hernadez')
titulares.push('Perruzi')

console.log(titulares)

//al tecnico del equipo titular le gusto mucho el desempeño de luis y piensa subirlo a primera para darle minutos
if (reservas.includes("luis")){
     reservas.splice(3,1)
    
}
console.log(reservas)
suplentes.push("luis")

//equipo definido para la fecha siguiente
const jugadoresParaElPartido = titulares.concat(suplentes)
console.log(jugadoresParaElPartido)