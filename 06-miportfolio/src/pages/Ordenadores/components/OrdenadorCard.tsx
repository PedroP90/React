import React, { FC } from 'react'
import { Button, Card } from 'react-bootstrap'
import { IOrdenador } from '../interfaces/IOrdenador'


//componente que recibe un parámetro(información) de ENTRADA
//1º Declarar el tipo(interface de ese dato de entrada)

interface InputData {
  equipo:IOrdenador
  //se puede agregar más parámetros de entrada
}

//2º Defino el parámetro de entrada en el componente
const OrdenadorCard:FC<InputData> = ({ equipo }) => {
  return (
    <div className='card'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{equipo.nombre}</Card.Title>
          <Card.Text>{equipo.descripcion}</Card.Text>
        <Button variant="primary">{equipo.precio.pReal} €</Button>
      </Card.Body>
    </Card>
        {/* <ul>
            <li>{ equipo.nombre}</li>
            <li>{ equipo.marca}</li>
            <li>{ equipo.precio.pReal}</li>
            <li>{ equipo.caracteristicas.procesador}</li>
            <li>{ equipo.caracteristicas.ram}</li>
        </ul> */}
    </div>
  )
}

export default OrdenadorCard