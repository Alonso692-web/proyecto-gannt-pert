import React, { useEffect, useRef } from 'react';

const Pert_Cpm = ({ data, valor, setRutaCritica }) => {

    const calcularRutaCritica = (diccionario, longitud) => {
        //*e.log("Ruta Critica");
        var rutaCritica = "";
        let primera = true;
        for (let i = 1; i < longitud; i++) {
            let a = diccionario[i].fip - diccionario[i].fil
            let b = diccionario[i].ftp - diccionario[i].ftl
            //*e.log(diccionario[i].actividad);
            if(b === 0 && a ===0){
                if(primera){
                    rutaCritica = diccionario[i].actividad;
                    primera = false;
                }else{
                    rutaCritica += " , " + diccionario[i].actividad;
                }
            }
        }
        setRutaCritica(rutaCritica); // Llama a la función para pasar la ruta crítica
    };

    const canvasRef = useRef(null); // Referencia al elemento canvas

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Definir las propiedades del círculo
        let xCircle = 300;
        let yCircle = 40;
        const radiusCircle = 20;
        const startAngleCircle = 0;
        const endAngleCircle = Math.PI * 2;
        const fontSizeCircle = 20;
        const fontFamilyCircle = "Arial";
        const colorCircle = "white";

        const xInicial = xCircle;
        const yInicial = yCircle;

        //Flechas
        const lengthArrow = 10;

        //Letras o palabras
        const fontSizeLetter = 20;
        const fontSizeLetter2 = 10;
        const fontFamilyLetter = "Arial";
        const colorLetter = "black";

        // Dibujar el círculo
        ctx.beginPath();
        ctx.arc(xCircle, yCircle, radiusCircle, startAngleCircle, endAngleCircle);
        ctx.fillStyle = "blue"; // Color de relleno del círculo
        ctx.fill();
        ctx.closePath();
        ctx.font = `${fontSizeCircle}px ${fontFamilyCircle}`;
        ctx.fillStyle = colorCircle;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("1", xCircle, yCircle);

        // Crear los objetos 
        var predecesorMulti = 0;
        let contadorNumero = 1;
        let diccionario = {};
        let contadorDiccionario = 0;
        let verificarErrorNodo = 0;
        diccionario[contadorDiccionario] = {
            actividad: "-",
            xCircle: xCircle,
            yCircle: yCircle,
            predecesor: "",
            conectado: "",
            ftp: 0,
            tiempoEsperado: 0,
            flechasConectadas: 0
        };
        contadorDiccionario++;
        for (let i = 0; i < predecesores.length; i++) {
            verificarErrorNodo = 0;
            let valores = 0;
            valores = predecesores[i].split(",");

            for (let j = 0; j < contadorDiccionario; j++) {


                if (valores.length === 1 && diccionario[j].actividad === predecesores[i] && diccionario[j].flechasConectadas === 0) {
                    diccionario[j].flechasConectadas++;
                    diccionario[j].conectado = diccionario[j].conectado + actividades[i] + ',';
                    verificarErrorNodo++;
                    //Flecha
                    const startArrow = { x: diccionario[j].xCircle, y: diccionario[j].yCircle + 20 };
                    const endArrow = { x: diccionario[j].xCircle, y: diccionario[j].yCircle + 80 };
                    const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                    // Letra
                    const textLetter = actividades[i];
                    const xLetter = startArrow.x + 20;
                    const yLetter = startArrow.y + 40;
                    //Circulo
                    xCircle = endArrow.x;
                    yCircle = endArrow.y + 20;


                    contadorNumero++;
                    diccionario[contadorDiccionario] = {
                        actividad: actividades[i],
                        startArrow: startArrow,
                        endArrow: endArrow,
                        angleArrow: angleArrow,
                        textLetter: textLetter,
                        xLetter: xLetter,
                        yLetter: yLetter,
                        xCircle: xCircle,
                        yCircle: yCircle,
                        contadorNumero: contadorNumero,
                        predecesor: predecesores[i],
                        predecesorMultiple: null,
                        conectado: "",
                        tiempoEsperado: tiempoEsperado[i],
                        flechasConectadas: 0
                    };
                    contadorDiccionario++;
                } else if (valores.length === 1 && diccionario[j].actividad === predecesores[i] && diccionario[j].flechasConectadas === 1) {
                    diccionario[j].flechasConectadas++;
                    diccionario[j].conectado = diccionario[j].conectado + actividades[i] + ',';
                    verificarErrorNodo++;
                    const startArrow = { x: diccionario[j].xCircle + 20, y: diccionario[j].yCircle };
                    const endArrow = { x: diccionario[j].xCircle + 80, y: diccionario[j].yCircle };
                    const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                    // Letra
                    const textLetter = actividades[i];
                    const xLetter = startArrow.x + 40;
                    const yLetter = startArrow.y - 15;
                    //Circulo
                    xCircle = endArrow.x + 20;
                    yCircle = endArrow.y;

                    contadorNumero++;
                    diccionario[contadorDiccionario] = {
                        actividad: actividades[i],
                        startArrow: startArrow,
                        endArrow: endArrow,
                        angleArrow: angleArrow,
                        textLetter: textLetter,
                        xLetter: xLetter,
                        yLetter: yLetter,
                        xCircle: xCircle,
                        yCircle: yCircle,
                        contadorNumero: contadorNumero,
                        predecesor: predecesores[i],
                        predecesorMultiple: null,
                        conectado: "",
                        tiempoEsperado: tiempoEsperado[i],
                        flechasConectadas: 0
                    };
                    contadorDiccionario++;
                } else if (valores.length === 1 && diccionario[j].actividad === predecesores[i] && diccionario[j].flechasConectadas === 2) {
                    diccionario[j].flechasConectadas++;
                    diccionario[j].conectado = diccionario[j].conectado + actividades[i] + ',';
                    verificarErrorNodo++;
                    const startArrow = { x: diccionario[j].xCircle - 20, y: diccionario[j].yCircle };
                    const endArrow = { x: diccionario[j].xCircle - 80, y: diccionario[j].yCircle };
                    const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                    // Letra
                    const textLetter = actividades[i];
                    const xLetter = startArrow.x - 40;
                    const yLetter = startArrow.y - 15;
                    //Circulo
                    xCircle = endArrow.x - 20;
                    yCircle = endArrow.y;

                    contadorNumero++;
                    diccionario[contadorDiccionario] = {
                        actividad: actividades[i],
                        startArrow: startArrow,
                        endArrow: endArrow,
                        angleArrow: angleArrow,
                        textLetter: textLetter,
                        xLetter: xLetter,
                        yLetter: yLetter,
                        xCircle: xCircle,
                        yCircle: yCircle,
                        contadorNumero: contadorNumero,
                        predecesor: predecesores[i],
                        predecesorMultiple: null,
                        conectado: "",
                        tiempoEsperado: tiempoEsperado[i],
                        flechasConectadas: 0
                    };
                    contadorDiccionario++;
                } else if (valores.length > 1) {
                    verificarErrorNodo++;
                    var auxDiccionario = [];
                    let contadorAuxDiccionario = 0;

                    for (let k = 0; k < valores.length; k++) {
                        for (let m = 1; m < contadorDiccionario; m++) {

                            if (diccionario[m].actividad === valores[k]) {
                                auxDiccionario[k] = m;
                                contadorAuxDiccionario++;
                            }
                        }
                    }
                    if (contadorAuxDiccionario === valores.length) {
                        if (valores.length === 2) {
                            if (diccionario[auxDiccionario[0]].yCircle === diccionario[auxDiccionario[1]].yCircle) {

                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";

                                if (diccionario[auxDiccionario[0]].xCircle > diccionario[auxDiccionario[1]].xCircle) {
                                    var xNueva = diccionario[auxDiccionario[0]].xCircle - (diccionario[auxDiccionario[0]].xCircle - diccionario[auxDiccionario[1]].xCircle) / 2;
                                    var anguloEnRadianes1 = 310 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 230 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                } else {
                                    var xNueva = diccionario[auxDiccionario[1]].xCircle - (diccionario[auxDiccionario[1]].xCircle - diccionario[auxDiccionario[0]].xCircle) / 2;
                                    var anguloEnRadianes1 = 230 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 310 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                }

                                contadorNumero--;
                                diccionario[auxDiccionario[0]].endArrow = { x: (coseno1 + xNueva), y: (seno1 + diccionario[auxDiccionario[0]].yCircle) };
                                diccionario[auxDiccionario[0]].xCircle = xNueva;
                                diccionario[auxDiccionario[0]].predecesorMultiple = predecesorMulti;
                                let angleArrow = Math.atan2(diccionario[auxDiccionario[0]].endArrow.y - diccionario[auxDiccionario[0]].startArrow.y, diccionario[auxDiccionario[0]].endArrow.x - diccionario[auxDiccionario[0]].startArrow.x);
                                diccionario[auxDiccionario[0]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[0]].contadorNumero = contadorNumero;

                                diccionario[auxDiccionario[1]].endArrow = { x: (coseno2 + xNueva), y: (seno2 + diccionario[auxDiccionario[1]].yCircle) };
                                diccionario[auxDiccionario[1]].xCircle = xNueva;
                                diccionario[auxDiccionario[1]].predecesorMultiple = predecesorMulti;
                                angleArrow = Math.atan2(diccionario[auxDiccionario[1]].endArrow.y - diccionario[auxDiccionario[1]].startArrow.y, diccionario[auxDiccionario[1]].endArrow.x - diccionario[auxDiccionario[1]].startArrow.x);
                                diccionario[auxDiccionario[1]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[1]].contadorNumero = contadorNumero;
                                predecesorMulti++;

                                const startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                const endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;
                            } else if ((diccionario[auxDiccionario[0]].xCircle > xInicial && diccionario[auxDiccionario[1]].xCircle < xInicial) || (diccionario[auxDiccionario[0]].xCircle < xInicial && diccionario[auxDiccionario[1]].xCircle > xInicial)) {
                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";

                                if (diccionario[auxDiccionario[0]].yCircle > diccionario[auxDiccionario[1]].yCircle) {
                                    var yNueva = diccionario[auxDiccionario[0]].yCircle - (diccionario[auxDiccionario[0]].yCircle - diccionario[auxDiccionario[1]].yCircle) / 2;
                                    var anguloEnRadianes1 = 50 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 310 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                } else {
                                    var yNueva = diccionario[auxDiccionario[1]].yCircle - (diccionario[auxDiccionario[1]].yCircle - diccionario[auxDiccionario[0]].yCircle) / 2;
                                    var anguloEnRadianes1 = 310 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 50 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                }
                                if (diccionario[auxDiccionario[0]].xCircle < diccionario[auxDiccionario[1]].xCircle) {
                                    var xNueva = diccionario[auxDiccionario[0]].xCircle;
                                    diccionario[auxDiccionario[1]].startArrow.x -= 40;
                                    diccionario[auxDiccionario[1]].xLetter = diccionario[auxDiccionario[1]].startArrow.x - 40;
                                    diccionario[auxDiccionario[1]].yLetter += 10;
                                    diccionario[auxDiccionario[0]].yLetter -= 10;
                                } else {
                                    var xNueva = diccionario[auxDiccionario[1]].xCircle;
                                    diccionario[auxDiccionario[0]].startArrow.x -= 40;
                                    diccionario[auxDiccionario[0]].xLetter = diccionario[auxDiccionario[0]].startArrow.x - 40;
                                    diccionario[auxDiccionario[0]].yLetter += 10;
                                    diccionario[auxDiccionario[1]].yLetter -= 10;
                                }
                                contadorNumero--;
                                diccionario[auxDiccionario[0]].endArrow = { x: (coseno1 + xNueva), y: (seno1 + yNueva) };
                                diccionario[auxDiccionario[0]].yCircle = yNueva;
                                diccionario[auxDiccionario[0]].xCircle = xNueva;
                                diccionario[auxDiccionario[0]].predecesorMultiple = predecesorMulti;
                                let angleArrow = Math.atan2(diccionario[auxDiccionario[0]].endArrow.y - diccionario[auxDiccionario[0]].startArrow.y, diccionario[auxDiccionario[0]].endArrow.x - diccionario[auxDiccionario[0]].startArrow.x);
                                diccionario[auxDiccionario[0]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[0]].contadorNumero = contadorNumero;

                                diccionario[auxDiccionario[1]].endArrow = { x: (coseno2 + xNueva), y: (seno2 + yNueva) };
                                diccionario[auxDiccionario[1]].yCircle = yNueva;
                                diccionario[auxDiccionario[1]].xCircle = xNueva;
                                diccionario[auxDiccionario[1]].predecesorMultiple = predecesorMulti;
                                angleArrow = Math.atan2(diccionario[auxDiccionario[1]].endArrow.y - diccionario[auxDiccionario[1]].startArrow.y, diccionario[auxDiccionario[1]].endArrow.x - diccionario[auxDiccionario[1]].startArrow.x);
                                diccionario[auxDiccionario[1]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[1]].contadorNumero = contadorNumero;
                                predecesorMulti++;

                                const startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                const endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;

                            } else if (diccionario[auxDiccionario[0]].predecesor === diccionario[auxDiccionario[1]].predecesor) {
                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";
                                // Establecer el patrón de la línea punteada
                                ctx.setLineDash([5, 5]); // [longitud de trazo, longitud de espacio]

                                // Iniciar el trazado de la línea
                                ctx.beginPath();
                                if (diccionario[auxDiccionario[0]].xCircle === xInicial && diccionario[auxDiccionario[1]].xCircle > xInicial) {
                                    ctx.moveTo(diccionario[auxDiccionario[1]].xCircle, diccionario[auxDiccionario[1]].yCircle + 20); // Mover a la posición inicial de la línea
                                    ctx.lineTo(diccionario[auxDiccionario[0]].xCircle + 20, diccionario[auxDiccionario[0]].yCircle); // Trazar la línea
                                    var startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                } else if (diccionario[auxDiccionario[0]].xCircle === xInicial && diccionario[auxDiccionario[1]].xCircle < xInicial) {
                                    ctx.moveTo(diccionario[auxDiccionario[1]].xCircle, diccionario[auxDiccionario[1]].yCircle + 20); // Mover a la posición inicial de la línea
                                    ctx.lineTo(diccionario[auxDiccionario[0]].xCircle - 20, diccionario[auxDiccionario[0]].yCircle); // Trazar la línea
                                    var startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                } else if (diccionario[auxDiccionario[1]].xCircle === xInicial && diccionario[auxDiccionario[0]].xCircle > xInicial) {
                                    ctx.moveTo(diccionario[auxDiccionario[0]].xCircle, diccionario[auxDiccionario[0]].yCircle + 20); // Mover a la posición inicial de la línea
                                    ctx.lineTo(diccionario[auxDiccionario[1]].xCircle + 20, diccionario[auxDiccionario[1]].yCircle); // Trazar la línea
                                    var startArrow = { x: diccionario[auxDiccionario[1]].xCircle, y: diccionario[auxDiccionario[1]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[1]].xCircle, y: diccionario[auxDiccionario[1]].yCircle + 80 };
                                } else if (diccionario[auxDiccionario[1]].xCircle === xInicial && diccionario[auxDiccionario[0]].xCircle < xInicial) {
                                    ctx.moveTo(diccionario[auxDiccionario[0]].xCircle, diccionario[auxDiccionario[0]].yCircle + 20); // Mover a la posición inicial de la línea
                                    ctx.lineTo(diccionario[auxDiccionario[1]].xCircle - 20, diccionario[auxDiccionario[1]].yCircle); // Trazar la línea
                                    var startArrow = { x: diccionario[auxDiccionario[1]].xCircle, y: diccionario[auxDiccionario[1]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[1]].xCircle, y: diccionario[auxDiccionario[1]].yCircle + 80 };
                                }

                                ctx.stroke(); // Dibujar la línea punteada
                                ctx.closePath();
                                // Restablecer el patrón de la línea a sólida
                                ctx.setLineDash([]); // Restablecer el patrón a una línea sólida                            

                                diccionario[auxDiccionario[0]].flechasConectadas++;
                                diccionario[auxDiccionario[1]].flechasConectadas++;

                                const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;
                            } else {
                                valores = 0;
                            }

                        } else if (valores.length === 3) {
                            if (diccionario[auxDiccionario[0]].predecesor === diccionario[auxDiccionario[1]].predecesor && diccionario[auxDiccionario[1]].predecesor === diccionario[auxDiccionario[2]].predecesor) {
                                ctx.setLineDash([5, 5]); // [longitud de trazo, longitud de espacio]
                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[2]].conectado += actividades[i] + ",";
                                // Iniciar el trazado de la línea
                                ctx.beginPath();
                                if (diccionario[auxDiccionario[0]].xCircle === xInicial) {
                                    if (diccionario[auxDiccionario[1]].xCircle > xInicial) {
                                        ctx.moveTo(diccionario[auxDiccionario[1]].xCircle, diccionario[auxDiccionario[1]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[0]].xCircle + 20, diccionario[auxDiccionario[0]].yCircle); // Trazar la línea
                                        ctx.moveTo(diccionario[auxDiccionario[2]].xCircle, diccionario[auxDiccionario[2]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[0]].xCircle - 20, diccionario[auxDiccionario[0]].yCircle); // Trazar la línea
                                    } else {
                                        ctx.moveTo(diccionario[auxDiccionario[2]].xCircle, diccionario[auxDiccionario[2]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[0]].xCircle + 20, diccionario[auxDiccionario[0]].yCircle); // Trazar la línea
                                        ctx.moveTo(diccionario[auxDiccionario[1]].xCircle, diccionario[auxDiccionario[1]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[0]].xCircle - 20, diccionario[auxDiccionario[0]].yCircle); // Trazar la línea
                                    }
                                    var startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };

                                } else if (diccionario[auxDiccionario[1]].xCircle === xInicial) {
                                    if (diccionario[auxDiccionario[0]].xCircle > xInicial) {
                                        ctx.moveTo(diccionario[auxDiccionario[0]].xCircle, diccionario[auxDiccionario[0]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[1]].xCircle + 20, diccionario[auxDiccionario[1]].yCircle); // Trazar la línea
                                        ctx.moveTo(diccionario[auxDiccionario[2]].xCircle, diccionario[auxDiccionario[2]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[1]].xCircle - 20, diccionario[auxDiccionario[1]].yCircle); // Trazar la línea
                                    } else {
                                        ctx.moveTo(diccionario[auxDiccionario[2]].xCircle, diccionario[auxDiccionario[2]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[1]].xCircle + 20, diccionario[auxDiccionario[1]].yCircle); // Trazar la línea
                                        ctx.moveTo(diccionario[auxDiccionario[0]].xCircle, diccionario[auxDiccionario[0]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[1]].xCircle - 20, diccionario[auxDiccionario[1]].yCircle); // Trazar la línea
                                    }
                                    var startArrow = { x: diccionario[auxDiccionario[1]].xCircle, y: diccionario[auxDiccionario[1]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[1]].xCircle, y: diccionario[auxDiccionario[1]].yCircle + 80 };

                                } else if (diccionario[auxDiccionario[2]].xCircle === xInicial) {
                                    if (diccionario[auxDiccionario[1]].xCircle > xInicial) {
                                        ctx.moveTo(diccionario[auxDiccionario[1]].xCircle, diccionario[auxDiccionario[1]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[2]].xCircle + 20, diccionario[auxDiccionario[2]].yCircle); // Trazar la línea
                                        ctx.moveTo(diccionario[auxDiccionario[0]].xCircle, diccionario[auxDiccionario[0]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[2]].xCircle - 20, diccionario[auxDiccionario[2]].yCircle); // Trazar la línea
                                    } else {
                                        ctx.moveTo(diccionario[auxDiccionario[0]].xCircle, diccionario[auxDiccionario[0]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[2]].xCircle + 20, diccionario[auxDiccionario[2]].yCircle); // Trazar la línea
                                        ctx.moveTo(diccionario[auxDiccionario[1]].xCircle, diccionario[auxDiccionario[1]].yCircle + 20); // Mover a la posición inicial de la línea
                                        ctx.lineTo(diccionario[auxDiccionario[2]].xCircle - 20, diccionario[auxDiccionario[2]].yCircle); // Trazar la línea
                                    }
                                    var startArrow = { x: diccionario[auxDiccionario[2]].xCircle, y: diccionario[auxDiccionario[2]].yCircle + 20 };
                                    var endArrow = { x: diccionario[auxDiccionario[2]].xCircle, y: diccionario[auxDiccionario[2]].yCircle + 80 };

                                }

                                ctx.stroke(); // Dibujar la línea punteada
                                ctx.closePath();
                                // Restablecer el patrón de la línea a sólida
                                ctx.setLineDash([]); // Restablecer el patrón a una línea sólida                            

                                diccionario[auxDiccionario[0]].flechasConectadas++;
                                diccionario[auxDiccionario[1]].flechasConectadas++;
                                diccionario[auxDiccionario[2]].flechasConectadas++;

                                const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;
                            } else if (diccionario[auxDiccionario[2]].xCircle === xInicial) {
                                diccionario[auxDiccionario[0]].xCircle = diccionario[auxDiccionario[2]].xCircle;
                                diccionario[auxDiccionario[1]].xCircle = diccionario[auxDiccionario[2]].xCircle;
                                diccionario[auxDiccionario[0]].yCircle = diccionario[auxDiccionario[2]].yCircle;
                                diccionario[auxDiccionario[1]].yCircle = diccionario[auxDiccionario[2]].yCircle;

                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[2]].conectado += actividades[i] + ",";

                                if (diccionario[auxDiccionario[0]].xCircle > diccionario[auxDiccionario[1]].xCircle) {
                                    var anguloEnRadianes1 = 230 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 310 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                } else {
                                    var anguloEnRadianes1 = 310 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 230 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                }

                                contadorNumero--;
                                contadorNumero--;
                                diccionario[auxDiccionario[1]].endArrow = { x: (coseno1 + diccionario[auxDiccionario[1]].xCircle), y: (seno1 + diccionario[auxDiccionario[1]].yCircle) };
                                diccionario[auxDiccionario[1]].predecesorMultiple = predecesorMulti;
                                let angleArrow = Math.atan2(diccionario[auxDiccionario[1]].endArrow.y - diccionario[auxDiccionario[1]].startArrow.y, diccionario[auxDiccionario[1]].endArrow.x - diccionario[auxDiccionario[1]].startArrow.x);
                                diccionario[auxDiccionario[1]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[1]].contadorNumero = contadorNumero;



                                diccionario[auxDiccionario[0]].endArrow = { x: (coseno2 + diccionario[auxDiccionario[2]].xCircle), y: (seno2 + diccionario[auxDiccionario[2]].yCircle) };
                                diccionario[auxDiccionario[0]].predecesorMultiple = predecesorMulti;
                                angleArrow = Math.atan2(diccionario[auxDiccionario[2]].endArrow.y - diccionario[auxDiccionario[2]].startArrow.y, diccionario[auxDiccionario[2]].endArrow.x - diccionario[auxDiccionario[2]].startArrow.x);
                                diccionario[auxDiccionario[0]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[0]].contadorNumero = contadorNumero;
                                predecesorMulti++;

                                const startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                const endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;

                            } else if (diccionario[auxDiccionario[1]].xCircle === xInicial) {
                                diccionario[auxDiccionario[0]].xCircle = diccionario[auxDiccionario[1]].xCircle;
                                diccionario[auxDiccionario[2]].xCircle = diccionario[auxDiccionario[1]].xCircle;
                                diccionario[auxDiccionario[0]].yCircle = diccionario[auxDiccionario[1]].yCircle;
                                diccionario[auxDiccionario[2]].yCircle = diccionario[auxDiccionario[1]].yCircle;

                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[2]].conectado += actividades[i] + ",";

                                if (diccionario[auxDiccionario[0]].xCircle > diccionario[auxDiccionario[1]].xCircle) {
                                    var anguloEnRadianes1 = 230 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 310 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                } else {
                                    var anguloEnRadianes1 = 310 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 230 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                }

                                contadorNumero--;
                                contadorNumero--;
                                diccionario[auxDiccionario[0]].endArrow = { x: (coseno1 + diccionario[auxDiccionario[0]].xCircle), y: (seno1 + diccionario[auxDiccionario[0]].yCircle) };
                                diccionario[auxDiccionario[0]].predecesorMultiple = predecesorMulti;
                                let angleArrow = Math.atan2(diccionario[auxDiccionario[0]].endArrow.y - diccionario[auxDiccionario[0]].startArrow.y, diccionario[auxDiccionario[0]].endArrow.x - diccionario[auxDiccionario[0]].startArrow.x);
                                diccionario[auxDiccionario[0]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[0]].contadorNumero = contadorNumero;

                                diccionario[auxDiccionario[1]].endArrow = { x: (coseno2 + diccionario[auxDiccionario[1]].xCircle), y: (seno2 + diccionario[auxDiccionario[1]].yCircle) };
                                diccionario[auxDiccionario[1]].predecesorMultiple = predecesorMulti;
                                angleArrow = Math.atan2(diccionario[auxDiccionario[1]].endArrow.y - diccionario[auxDiccionario[1]].startArrow.y, diccionario[auxDiccionario[1]].endArrow.x - diccionario[auxDiccionario[1]].startArrow.x);
                                diccionario[auxDiccionario[1]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[1]].contadorNumero = contadorNumero;
                                predecesorMulti++;

                                const startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                const endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;
                            } else if (diccionario[auxDiccionario[0]].xCircle === xInicial) {
                                diccionario[auxDiccionario[1]].xCircle = diccionario[auxDiccionario[0]].xCircle;
                                diccionario[auxDiccionario[2]].xCircle = diccionario[auxDiccionario[0]].xCircle;
                                diccionario[auxDiccionario[1]].yCircle = diccionario[auxDiccionario[0]].yCircle;
                                diccionario[auxDiccionario[2]].yCircle = diccionario[auxDiccionario[0]].yCircle;

                                diccionario[auxDiccionario[0]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[1]].conectado += actividades[i] + ",";
                                diccionario[auxDiccionario[2]].conectado += actividades[i] + ",";

                                if (diccionario[auxDiccionario[0]].xCircle > diccionario[auxDiccionario[1]].xCircle) {
                                    var anguloEnRadianes1 = 310 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 230 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                } else {
                                    var anguloEnRadianes1 = 230 * (Math.PI / 180);
                                    var anguloEnRadianes2 = 310 * (Math.PI / 180);
                                    var coseno1 = 20 * (Math.cos(anguloEnRadianes1));
                                    var seno1 = 20 * (Math.sin(anguloEnRadianes1));
                                    var coseno2 = 20 * (Math.cos(anguloEnRadianes2));
                                    var seno2 = 20 * (Math.sin(anguloEnRadianes2));
                                }

                                contadorNumero--;
                                contadorNumero--;
                                diccionario[auxDiccionario[2]].endArrow = { x: (coseno1 + diccionario[auxDiccionario[2]].xCircle), y: (seno1 + diccionario[auxDiccionario[2]].yCircle) };
                                diccionario[auxDiccionario[2]].predecesorMultiple = predecesorMulti;
                                let angleArrow = Math.atan2(diccionario[auxDiccionario[2]].endArrow.y - diccionario[auxDiccionario[2]].startArrow.y, diccionario[auxDiccionario[2]].endArrow.x - diccionario[auxDiccionario[2]].startArrow.x);
                                diccionario[auxDiccionario[2]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[2]].contadorNumero = contadorNumero;

                                diccionario[auxDiccionario[1]].endArrow = { x: (coseno2 + diccionario[auxDiccionario[1]].xCircle), y: (seno2 + diccionario[auxDiccionario[1]].yCircle) };
                                diccionario[auxDiccionario[1]].predecesorMultiple = predecesorMulti;
                                angleArrow = Math.atan2(diccionario[auxDiccionario[1]].endArrow.y - diccionario[auxDiccionario[1]].startArrow.y, diccionario[auxDiccionario[1]].endArrow.x - diccionario[auxDiccionario[1]].startArrow.x);
                                diccionario[auxDiccionario[1]].angleArrow = angleArrow;
                                diccionario[auxDiccionario[1]].contadorNumero = contadorNumero;
                                predecesorMulti++;

                                const startArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 20 };
                                const endArrow = { x: diccionario[auxDiccionario[0]].xCircle, y: diccionario[auxDiccionario[0]].yCircle + 80 };
                                angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                                // Letra
                                const textLetter = actividades[i];
                                const xLetter = startArrow.x + 20;
                                const yLetter = startArrow.y + 40;
                                //Circulo
                                xCircle = endArrow.x;
                                yCircle = endArrow.y + 20;

                                contadorNumero++;
                                diccionario[contadorDiccionario] = {
                                    actividad: actividades[i],
                                    startArrow: startArrow,
                                    endArrow: endArrow,
                                    angleArrow: angleArrow,
                                    textLetter: textLetter,
                                    xLetter: xLetter,
                                    yLetter: yLetter,
                                    xCircle: xCircle,
                                    yCircle: yCircle,
                                    contadorNumero: contadorNumero,
                                    predecesor: predecesores[i],
                                    predecesorMultiple: null,
                                    conectado: "",
                                    tiempoEsperado: tiempoEsperado[i],
                                    flechasConectadas: 0
                                };
                                valores = 0;
                                contadorDiccionario++;
                            }
                        }
                    } else {
                        alert("Error en los nodos1");
                    }
                }
            }
            if (verificarErrorNodo === 0) {
                alert("Error en los nodos2");
                break;
            }
        }

        // Calcular FIP, FTP
        for (let i = 1; i < contadorDiccionario; i++) {
            let valor = diccionario[i].predecesor.split(",");
            if (valor.length === 1) {
                for (let j = 0; j < contadorDiccionario; j++) {

                    if (diccionario[i].predecesor === diccionario[j].actividad) {
                        diccionario[i].fip = diccionario[j].ftp;
                        diccionario[i].ftp = diccionario[j].ftp + parseInt(diccionario[i].tiempoEsperado);
                    }
                }
            } else if (valor.length === 2) {
                let aux = [];
                for (let j = 0; j < contadorDiccionario; j++) {
                    if (valor[0] === diccionario[j].actividad) {
                        aux[0] = j;
                    } else if (valor[1] === diccionario[j].actividad) {
                        aux[1] = j;
                    }
                }
                if (diccionario[aux[0]].ftp >= diccionario[aux[1]].ftp) {
                    diccionario[i].fip = diccionario[aux[0]].ftp;
                    diccionario[i].ftp = diccionario[aux[0]].ftp + parseInt(diccionario[i].tiempoEsperado);
                } else {
                    diccionario[i].fip = diccionario[aux[1]].ftp;
                    diccionario[i].ftp = diccionario[aux[1]].ftp + parseInt(diccionario[i].tiempoEsperado);
                }
            } else if (valor.length === 3) {
                let aux = [];
                for (let j = 0; j < contadorDiccionario; j++) {
                    if (valor[0] === diccionario[j].actividad) {
                        aux[0] = j;
                    } else if (valor[1] === diccionario[j].actividad) {
                        aux[1] = j;
                    } else if (valor[2] === diccionario[j].actividad) {
                        aux[2] = j;
                    }
                }
                if (diccionario[aux[0]].ftp >= diccionario[aux[1]].ftp && diccionario[aux[0]].ftp >= diccionario[aux[2]].ftp) {
                    diccionario[i].fip = diccionario[aux[0]].ftp;
                    diccionario[i].ftp = diccionario[aux[0]].ftp + parseInt(diccionario[i].tiempoEsperado);
                } else if (diccionario[aux[1]].ftp >= diccionario[aux[0]].ftp && diccionario[aux[1]].ftp >= diccionario[aux[2]].ftp) {
                    diccionario[i].fip = diccionario[aux[1]].ftp;
                    diccionario[i].ftp = diccionario[aux[1]].ftp + parseInt(diccionario[i].tiempoEsperado);
                } else {
                    diccionario[i].fip = diccionario[aux[2]].ftp;
                    diccionario[i].ftp = diccionario[aux[2]].ftp + parseInt(diccionario[i].tiempoEsperado);
                }
            }

        }
        // Calcular FIL, FTL
        for (let i = contadorDiccionario - 1; i > 0; i--) {
            let valor = diccionario[i].conectado.split(",");
            //*e.log(valor.length)
            if (diccionario[i].conectado === "") {
                diccionario[i].fil = diccionario[i].fip;
                diccionario[i].ftl = diccionario[i].ftp;
            } else if ((valor.length - 1) === 1) {
                for (let j = 0; j < contadorDiccionario; j++) {
                    if (valor[0] === diccionario[j].actividad) {

                        diccionario[i].ftl = diccionario[j].fil;
                        diccionario[i].fil = diccionario[j].fil - parseInt(diccionario[i].tiempoEsperado);
                    }
                }
            } else if ((valor.length - 1) === 2) {
                let aux = [];
                for (let j = 0; j < contadorDiccionario; j++) {
                    if (valor[0] === diccionario[j].actividad) {
                        aux[0] = j;
                    } else if (valor[1] === diccionario[j].actividad) {
                        aux[1] = j;
                    }
                }
                if (diccionario[aux[0]].fil <= diccionario[aux[1]].fil) {
                    diccionario[i].ftl = diccionario[aux[0]].fil;
                    diccionario[i].fil = diccionario[aux[0]].fil - parseInt(diccionario[i].tiempoEsperado);
                } else {
                    diccionario[i].ftl = diccionario[aux[1]].fil;
                    diccionario[i].fil = diccionario[aux[1]].fil - parseInt(diccionario[i].tiempoEsperado);
                }
            } else if ((valor.length - 1) === 3) {
                let aux = [];
                for (let j = 0; j < contadorDiccionario; j++) {
                    if (valor[0] === diccionario[j].actividad) {
                        aux[0] = j;
                    } else if (valor[1] === diccionario[j].actividad) {
                        aux[1] = j;
                    } else if (valor[2] === diccionario[j].actividad) {
                        aux[2] = j;
                    }
                }
                if (diccionario[aux[0]].fil <= diccionario[aux[1]].fil && diccionario[aux[0]].fil <= diccionario[aux[2]].fil) {
                    diccionario[i].ftl = diccionario[aux[0]].fil;
                    diccionario[i].fil = diccionario[aux[0]].fil - parseInt(diccionario[i].tiempoEsperado);
                } else if (diccionario[aux[1]].fil <= diccionario[aux[0]].fil && diccionario[aux[1]].fil <= diccionario[aux[2]].fil) {
                    diccionario[i].ftl = diccionario[aux[1]].fil;
                    diccionario[i].fil = diccionario[aux[1]].fil - parseInt(diccionario[i].tiempoEsperado);
                } else {
                    diccionario[i].ftl = diccionario[aux[2]].fil;
                    diccionario[i].fil = diccionario[aux[2]].fil - parseInt(diccionario[i].tiempoEsperado);
                }
            }
            //*e.log(diccionario[i])
        }
        // Tamaño de la tabla
        const tablaSize = 35;
        const cellSize = tablaSize / 2;


        //Dibujar los objetos
        let count = 2;
        let aux = null;
        for (let i = 1; i < contadorDiccionario; i++) {

            ctx.fillStyle = "white"; // Establecer el color de relleno a blanco
            ctx.strokeStyle = "white"; // Establecer el color del borde a blanco
            // Dibujar la línea de la flecha
            ctx.beginPath();
            ctx.moveTo(diccionario[i].startArrow.x, diccionario[i].startArrow.y);
            ctx.lineTo(diccionario[i].endArrow.x, diccionario[i].endArrow.y);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
            // Dibujar la cabeza de la flecha
            ctx.beginPath();
            ctx.moveTo(diccionario[i].endArrow.x, diccionario[i].endArrow.y);
            ctx.lineTo(diccionario[i].endArrow.x - lengthArrow * Math.cos(diccionario[i].angleArrow - Math.PI / 6), diccionario[i].endArrow.y - lengthArrow * Math.sin(diccionario[i].angleArrow - Math.PI / 6));
            ctx.moveTo(diccionario[i].endArrow.x, diccionario[i].endArrow.y);
            ctx.lineTo(diccionario[i].endArrow.x - lengthArrow * Math.cos(diccionario[i].angleArrow + Math.PI / 6), diccionario[i].endArrow.y - lengthArrow * Math.sin(diccionario[i].angleArrow + Math.PI / 6));
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
            // Dibujar el texto
            ctx.font = `${fontSizeLetter}px ${fontFamilyLetter}`;
            ctx.fillStyle = colorLetter;
            ctx.fillText(diccionario[i].textLetter, diccionario[i].xLetter, diccionario[i].yLetter);
            // Dibujar el círculo
            ctx.beginPath();
            ctx.arc(diccionario[i].xCircle, diccionario[i].yCircle, radiusCircle, startAngleCircle, endAngleCircle);
            ctx.fillStyle = "blue"; // Color de relleno del círculo
            ctx.strokeStyle = "white";
            ctx.fill();
            ctx.closePath();
            ctx.font = `${fontSizeCircle}px ${fontFamilyCircle}`;
            ctx.fillStyle = colorCircle;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";




            ctx.fillText(count, diccionario[i].xCircle, diccionario[i].yCircle);
            if (diccionario[i].predecesorMultiple != null && !(aux === diccionario[i].predecesorMultiple)) {
                aux = diccionario[i].predecesorMultiple
            } else {
                count++;
            }
            ctx.strokeStyle = "black"; // Establecer el color del borde a blanco
            // Dibujar la tabla
            ctx.strokeRect(diccionario[i].xLetter + 15, diccionario[i].yLetter - 50, tablaSize, tablaSize); // x, y, width, height

            // Dibujar las líneas verticales
            ctx.beginPath(); // Comenzar un nuevo trazado
            ctx.strokeStyle = "black"; // Establecer el color del borde a negro
            ctx.moveTo(diccionario[i].xLetter + cellSize + 15, diccionario[i].yLetter - 50);
            ctx.lineTo(diccionario[i].xLetter + cellSize + 15, diccionario[i].yLetter - 15);
            ctx.stroke();

            // Dibujar las líneas horizontales
            ctx.beginPath(); // Comenzar un nuevo trazado
            ctx.strokeStyle = "black"; // Establecer el color del borde a negro
            ctx.moveTo(diccionario[i].xLetter + 15, diccionario[i].yLetter + cellSize - 50);
            ctx.lineTo(diccionario[i].xLetter + 50, diccionario[i].yLetter + cellSize - 50);
            ctx.stroke();


            // Números
            const numeros = [
                [diccionario[i].fip, diccionario[i].ftp],
                [diccionario[i].fil, diccionario[i].ftl]
            ];

            // Dibujar los números
            for (let k = 0; k < numeros.length; k++) {
                for (let j = 0; j < numeros[k].length; j++) {
                    ctx.font = `${fontSizeLetter2}px ${fontFamilyLetter}`;
                    ctx.fillStyle = colorLetter;
                    // Ajustar las coordenadas para centrar los números en las celdas
                    ctx.fillText(numeros[k][j], diccionario[i].xLetter + j * cellSize + cellSize / 4 + 20, diccionario[i].yLetter + k * cellSize + cellSize / 2 - 50);
                }
            }

        }
        calcularRutaCritica(diccionario, contadorDiccionario);
    }, []);

    // Recorrer los datos y guardar los valores en los arreglos correspondientes
    const actividades = [];
    const predecesores = [];
    const tiempoEsperado = [];
    if(valor === "1"){
        data.forEach(row => {
            actividades.push(row.cell1);
            predecesores.push(row.cell5);
            tiempoEsperado.push(row.cell6);
        });
        //*e.log("Crear con Tiempo esperado");
    }else if(valor === "2"){
        data.forEach(row => {
            actividades.push(row.cell1);
            predecesores.push(row.cell5);
            tiempoEsperado.push(row.cell9);
        });
        //*e.log("Crear sin Tiempo esperado");
    }
    


    return (
        <div className="center">
            <h1>Gráfica PERT_CPM</h1>

            <canvas ref={canvasRef} className="canvas" width={600} height={800} style={{ border: "1px solid black", height: "100%" }}></canvas>

        </div>
    );
};

export default Pert_Cpm;
