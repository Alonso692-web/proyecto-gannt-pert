import React, { useEffect } from 'react';
import 'https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.js';

const Gantt = ({ data, valor }) => {
  useEffect(() => {

    // Recorrer los datos y guardar los valores en los arreglos correspondientes
    const formatDate = (dateString) => {
      if (!dateString) return "";

      // Dividir la cadena de fecha en partes
      const [year, month, day] = dateString.split('-');

      // Devolver la fecha en formato dd/mm/yyyy
      return `${day}/${month}/${year}`;
  };

    const actividades = [];
    const encargados = [];
    const fechaInicio = [];
    const tiempoEsperado = [];
    if(valor === "1"){
      data.forEach(row => {
        
        actividades.push(row.cell1);
        encargados.push(row.cell3);
        fechaInicio.push(formatDate(row.cell4));
        tiempoEsperado.push(row.cell6);
        //*le.log("Fecha de inicio",formatDate(row.cell4));
      });
      //*le.log("Crear con Tiempo esperado");
  }else if(valor === "2"){
    data.forEach(row => {
      actividades.push(row.cell1);
      encargados.push(row.cell3);
      fechaInicio.push(formatDate(row.cell4));
      //*le.log("Sin TE", formatDate(row.cell4));
      tiempoEsperado.push(row.cell9);
    });
      //*le.log("Crear sin Tiempo esperado");
  }
    

    const ordenarDatos = () => {
      // Crear una matriz de objetos combinando los cuatro arreglos
      var matriz = actividades.map((actividad, index) => {
        return {
          actividad: actividad,
          encargado: encargados[index],
          fechaInicio: fechaInicio[index],
          tiempoEsperado: tiempoEsperado[index]
        };
      });

      // Ordenar la matriz por el encargado de las personas
      matriz.sort(function (a, b) {
        return new Date(a.fechaInicio) - new Date(b.fechaInicio);
      });
      // Mostrar la matriz ordenada
      //*le.log(matriz);

      // Inicializar el gráfico de Gantt después de ordenar los datos
      initGantt(matriz);
    };

    const initGantt = (matriz) => {
      window.gantt.init("gantt_here");

      // Obtener una lista de encargados únicos
      const encargadosUnicos = [...new Set(matriz.map(item => item.encargado))];

      // Crear un mapa de colores para cada encargado
      const colorPorEncargado = {};
      encargadosUnicos.forEach((encargado, index) => {
        colorPorEncargado[encargado] = getColorByIndex(index);
      });

      const ganttData = matriz.map((item, index) => {
        return {
          id: index + 1,
          text: item.actividad,
          start_date: item.fechaInicio,
          duration: item.tiempoEsperado,
          order: index + 1,
          progress: 0.0, // Puedes ajustar el progreso según tus necesidades
          color: colorPorEncargado[item.encargado] // Asignar un color basado en el encargado
        };
      });

      window.gantt.parse({ data: ganttData });
    };

    // Función para obtener un color basado en un índice
    const getColorByIndex = (index) => {
      const colors = [
        '#FF5733', '#33FF57', '#5733FF', '#FF33E1', '#33E1FF', '#E1FF33',
        '#FF3360', '#3360FF', '#60FF33', '#FF3395', '#3395FF', '#95FF33',
        '#FF3341', '#3341FF', '#41FF33', '#FF33B4', '#33B4FF', '#B4FF33',
        '#FF3332', '#3332FF', '#32FF33', '#FF33C7', '#33C7FF', '#C7FF33',
        '#FF33AA', '#33AAFF', '#AAFF33', '#FF335F', '#335FFF', '#5FFF33'
        // Puedes agregar más colores si es necesario
      ];
      return colors[index % colors.length];
    };



    ordenarDatos();
  }, [data]); // Se agrega 'data' como dependencia para que useEffect se ejecute cuando cambie el prop 'data'

  return (
    <div className="center">
      <h1>Gráfica de Gantt</h1>

      <div id="gantt_here" style={{ width: '100vw', height: '100vh' }} />;
    </div>
  );
};

export default Gantt;
