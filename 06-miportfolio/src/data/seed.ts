// Almacén de datos
//Los datos aquí almacenados deben ser procesadados como json code para usar un componente que defina su estructura
//Aquí se exportan los datos del array con la estructura implementada en la variable, es decir, antes de poder usarlos correctamente
//debemos construir su interfaz pegando cada array as json code en el archivo creado para esa interfaz, aquí se ve la interfaz
//IData que a su vez importa la interfaz IOrdenador

import { IOrdenador } from "../pages/Ordenadores/interfaces/IOrdenador";


interface IData {
    equipos: IOrdenador[];
    //trabajos
    //cualquier categoría
}

export const Data: IData = {
    equipos: [
        {
            nombre: "HP Victus 16",
            marca: "HP",
            descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
            caracteristicas: {
              procesador: "i7",
              ram: "16GB",
              hdd: "512GB"
            },
            precio: {
              pReal: 1399,
              dto: 0.3,
              oferta: true,
              cantidad: 10
            },
            imagenes: [],
            valoraciones: {
              positivas: 100,
              negativas:  30
            }
          },
          {
            nombre: "MacBook Air",
            marca: "Apple",
            descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
            caracteristicas: {
              procesador: "M1",
              ram: "16GB",
              hdd: "512GB"
            },
            precio: {
              pReal: 2000,
              dto: 0.3,
              oferta: true,
              cantidad: 5
            },
            imagenes: [],
            valoraciones: {
              positivas: 100,
              negativas:  30
            }
          },
          {
            nombre: "Asus ChromeBook",
            marca: "Asus",
            descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
            caracteristicas: {
              procesador: "i3",
              ram: "8GB",
              hdd: "512GB"
            },
            precio: {
              pReal: 1000,
              dto: 0.3,
              oferta: true,
              cantidad: 12
            },
            imagenes: [],
            valoraciones: {
              positivas: 100,
              negativas:  30
            }
          },
          {
            nombre: "Lenovo Ideapad Gaming",
            marca: "Lenovo",
            descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
            caracteristicas: {
              procesador: "i7",
              ram: "16GB",
              hdd: "512GB"
            },
            precio: {
              pReal: 1399,
              dto: 0.3,
              oferta: true,
              cantidad: 10
            },
            imagenes: [],
            valoraciones: {
              positivas: 100,
              negativas:  30
            }
          },
          {
            nombre: "HP 11-fq",
            marca: "HP",
            descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
            caracteristicas: {
              procesador: "i7",
              ram: "16GB",
              hdd: "512GB"
            },
            precio: {
              pReal: 1399,
              dto: 0.3,
              oferta: true,
              cantidad: 10
            },
            imagenes: [],
            valoraciones: {
              positivas: 100,
              negativas:  30
            }
          },
          {
            nombre: "Apple MacBook Pro",
            marca: "Apple",
            descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
            caracteristicas: {
              procesador: "M2",
              ram: "32GB",
              hdd: "2T"
            },
            precio: {
              pReal: 3000,
              dto: 0.3,
              oferta: true,
              cantidad: 10
            },
            imagenes: [],
            valoraciones: {
              positivas: 100,
              negativas:  30
            }
          }
    ]
}