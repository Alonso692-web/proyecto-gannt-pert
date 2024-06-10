import React, { Component } from 'react';
import Slider from './Slider';
import captura1 from '../assets/images/captura1.png'
import captura2 from '../assets/images/captura2.png'
import captura3 from '../assets/images/captura3.png'

class Home extends Component {

    render() {


        return (
            <div id='home'>
                <Slider
                    title="Crea tu propio PERT-CPM y Gantt"
                    btn="Crear"
                    size="slider-big<"
                />
                <div className="center">

                    <h2 >¿Qué es un PERT_CPM?</h2>

                    <p>El método CPM (Critical Path Method) y PERT (Program Evaluation and Review Technique) son
                        dos técnicas utilizadas en la gestión de proyectos para planificar y controlar las actividades
                        necesarias para completar un proyecto en un tiempo determinado.
                    </p>
                    <p>
                        El método CPM se centra en la secuencia de tareas y en la duración de cada una de ellas. Se
                        basa en identificar las tareas críticas, es decir, aquellas que no pueden retrasarse sin afectar
                        la fecha de finalización del proyecto. Para ello, se utiliza una red de actividades que muestra la
                        secuencia y dependencia entre las tareas.
                    </p>
                    <p>
                        El método PERT, por otro lado, se centra en la estimación de la duración de las tareas. Se basa
                        en una técnica de estimación probabilística, donde se consideran diferentes escenarios
                        posibles y se asigna una probabilidad a cada uno de ellos. Esto permite tener una visión más
                        realista de la duración del proyecto y tener en cuenta posibles retrasos o contratiempos.
                    </p>



                    <h2 >¿Qué es un grafica de Gantt?</h2>

                    <p>El diagrama de Gantt, también denominado cronograma de Gantt, gráfico de Gantt o tabla de Gantt, es un organizador gráfico que representa visualmente la duración de cada tarea o etapa de un proyecto, una meta o un proceso productivo de una empresa o una institución.
                    </p>
                    <p>
                        El diagrama de Gantt se realiza en la etapa de planificación para determinar cuánto tiempo demandará cada actividad respecto a la duración total de un proyecto. Además, permite organizar cómo se realizarán las tareas respecto a su secuencialidad o su superposición, ya que puede desarrollarse una después de otra o de manera simultánea.

                    </p>
                    <p>
                        Este diagrama cumple una función fundamental en la etapa de ejecución de un proyecto, porque se utiliza para controlar que todas las actividades se realicen a tiempo y para determinar si es necesario incluir modificaciones en el plan original.

                    </p>

                    <h2 >¿Como usar PlanificacionPERTfecta?</h2>
                    <h3>Inicio</h3>
                    <p>En la parte del menú tendras dos opciones, la primera "Crear con TE" la ocuparas
                        cuando ya sepas cual es tu tiempo esperado y no necesites calcularlo, la segunda
                        "Crear sin TE" la ocuparas cuando no tengas tiempo esperado y necesites calcularlo
                    </p>
                    <div className='cap'>
                        <img src={captura1} className='capturas' alt="Captura de pantalla sobre como usar PlanifacionPERTfecta"/>
                    </div>
                    <h3>Crear con TE</h3>
                    <p>
                        En esta parte tendras dos botones en la parte de arriba para que puedas agregar o 
                        quitar filas segun necesites, en la tabla tendras que ingresar todos los datos que 
                        se te solicitan, en la parte de abajo tendras dos botones que te permitiran generar 
                        el diagrama de Gantt y el de PERT_CPM, en la parte izquierda tendras el lugar donde 
                        te aparecera la ruta critica y un botón para limpiar todas las casillas de la tabla
                        junto con los diagramas que generaste posteriormente. Es importante que tengas una
                        actividad concetada a "-" que sera el nodo inicial y las demas actividades esten bien
                        concetadas para que no te marque ningun error.
                    </p>
                    <div className='cap'>
                        <img src={captura2} className='capturas'/>
                    </div>
                    <h3>Crear sin TE</h3>
                    <p>
                        En este tendras los mismos botones y funcionalidades que el anterior, pero ahora te
                        pedira el tiempo optimista, tiempo mas probables y tiempo pesimista, así como no te 
                        dejara agregar el tiempo esperado, ya que cuando tu generes cualquier diagrama te dira 
                        cual es el tiempo esperado.
                    </p>
                    <div className='cap'>
                        <img src={captura3} className='capturas'/>
                    </div>
                </div>

            </div>

        );
    }
}
export default Home;