import React from 'react'
import { Image, Table } from 'react-bootstrap'


const tecnologias = [
  { 
    name: 'React',
    autor: 'Jordan Walke',
    nivel: 'Certified React Developer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'
  },
  { 
    name: 'Vue',
    autor: 'Evan You',
    nivel: 'Certified Vue Developer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png'
  },
  { 
    name: 'Next JS',
    autor: 'Guillermo Rauch',
    nivel: 'Certified Next JS Developer',
    logo:'https://media.graphassets.com/VKHHNvEETYqZRkqgjybc'
  },
  { 
    name: 'Angular',
    autor: 'Miško Hevery',
    nivel: 'Certified Angular Developer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
  },
  { 
    name: 'Nuxt JS',
    autor: 'Alexandre Chopin',
    nivel: 'Certified Nuxt JS Developer',
    logo: 'https://miro.medium.com/max/1112/1*Qh_De3xsiql3dvvcbGD9nw.png'
  },
]


export const WebPage = () => {
  return (
    <>
        <h2>Diseñador Web y App's móviles</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, similique vel! Magni eveniet molestiae laborum ipsa obcaecati accusamus nostrum optio temporibus, ipsam aut maiores officiis error! Numquam veritatis voluptatem assumenda!</p>
        <Table striped bordered hover>
          <thead>
              <th>Logo</th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Certificación</th>
          </thead>
          <tbody>
              {
                tecnologias.map( (tecnologia) => (
                  <tr>
                    <td width='10%'><Image width='80%' src={tecnologia.logo} /> </td>
                    <td>{ tecnologia.name }</td>
                    <td>{ tecnologia.autor }</td>
                    <td>{ tecnologia.nivel }</td>
                  </tr>
                ))
              }
          </tbody>
        </Table>
    </>
  )
}
