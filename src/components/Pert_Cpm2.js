import React, { useEffect, useRef } from 'react';

const Pert_Cpm2 = ({ data }) => {
    const canvasRef = useRef(null); // Referencia al elemento canvas

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Definir las propiedades del círculo
        let xCircle = 300;
        let yCircle = 20;
        const radiusCircle = 20;
        const startAngleCircle = 0;
        const endAngleCircle = Math.PI * 2;
        const fontSizeCircle = 20;
        const fontFamilyCircle = "Arial";
        const colorCircle = "white";

        //Flechas
        const lengthArrow = 10;

        //Letras o palabras
        const fontSizeLetter = 20;
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
        /*
        // FLechas
        const startArrow = { x: 200, y: 40 };
        const endArrow = { x: 200, y: 80 };
        const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
        const lengthArrow = 10;

        //Letras o palabras
        const textLetter = "A";
        const xLetter = 220;
        const yLetter = 55;
        const fontSizeLetter = 20;
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

        
        // Dibujar la línea de la flecha
        ctx.beginPath();
        ctx.moveTo(startArrow.x, startArrow.y);
        ctx.lineTo(endArrow.x, endArrow.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();

        // Dibujar la cabeza de la flecha
        ctx.beginPath();
        ctx.moveTo(endArrow.x, endArrow.y);
        ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow - Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow - Math.PI / 6));
        ctx.moveTo(endArrow.x, endArrow.y);
        ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow + Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow + Math.PI / 6));
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();   
        
        // Dibujar el texto
        ctx.font = `${fontSizeLetter}px ${fontFamilyLetter}`;
        ctx.fillStyle = colorLetter;
        ctx.fillText(textLetter, xLetter, yLetter);
        */

        // For para los ciclos
        let contadorNumero = 2;
        let diccionario = {};
        let contadorDiccionario = 0;
        let verificarErrorNodo = 0;
        diccionario[contadorDiccionario] = {
            actividad: "-",
            xNodo: xCircle,
            yNodo: yCircle,
            predecesor: "",
            flechasConectadas: 0
        };
        //*e.log(diccionario[contadorDiccionario])
        contadorDiccionario++;
        for (let i = 0; i < predecesores.length; i++) {
            //*e.log("Valor de i: " + i)

            verificarErrorNodo = 0;
            for (let j = 0; j < contadorDiccionario; j++) {
                const valores = predecesores[i].split(",");
                //*e.log("Predecesores: " + valores);
                if (diccionario[j].actividad === predecesores[i] && diccionario[j].flechasConectadas === 0) {
                    diccionario[j].flechasConectadas++;
                    verificarErrorNodo++;
                    ////*e.log("Actividad: " + diccionario[j].actividad + " Predecesor: " + predecesores[i]);
                    //Flecha
                    const startArrow = { x: diccionario[j].xNodo, y: diccionario[j].yNodo + 20 };
                    const endArrow = { x: diccionario[j].xNodo, y: diccionario[j].yNodo + 80 };
                    const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                    // Letra
                    const textLetter = actividades[i];
                    const xLetter = startArrow.x + 20;
                    const yLetter = startArrow.y + 15;
                    //Circulo
                    xCircle = endArrow.x;
                    yCircle = endArrow.y + 20;

                    // Dibujar la línea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(startArrow.x, startArrow.y);
                    ctx.lineTo(endArrow.x, endArrow.y);
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                    // Dibujar la cabeza de la flecha
                    ctx.beginPath();
                    ctx.moveTo(endArrow.x, endArrow.y);
                    ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow - Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow - Math.PI / 6));
                    ctx.moveTo(endArrow.x, endArrow.y);
                    ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow + Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow + Math.PI / 6));
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                    // Dibujar el texto
                    ctx.font = `${fontSizeLetter}px ${fontFamilyLetter}`;
                    ctx.fillStyle = colorLetter;
                    ctx.fillText(textLetter, xLetter, yLetter);
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
                    ctx.fillText(contadorNumero, xCircle, yCircle);
                    contadorNumero++;
                    diccionario[contadorDiccionario] = {
                        actividad: actividades[i],
                        xNodo: xCircle,
                        yNodo: yCircle,
                        predecesor: predecesores[i],
                        flechasConectadas: 0
                    };
                    //*e.log(diccionario[contadorDiccionario]);
                    contadorDiccionario++;
                } else if (diccionario[j].actividad === predecesores[i] && diccionario[j].flechasConectadas === 1) {
                    diccionario[j].flechasConectadas++;
                    verificarErrorNodo++;
                    const startArrow = { x: diccionario[j].xNodo + 20, y: diccionario[j].yNodo };
                    const endArrow = { x: diccionario[j].xNodo + 80, y: diccionario[j].yNodo };
                    const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                    // Letra
                    const textLetter = actividades[i];
                    const xLetter = startArrow.x + 20;
                    const yLetter = startArrow.y - 15;
                    //Circulo
                    xCircle = endArrow.x + 20;
                    yCircle = endArrow.y;
                    // Dibujar la línea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(startArrow.x, startArrow.y);
                    ctx.lineTo(endArrow.x, endArrow.y);
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                    // Dibujar la cabeza de la flecha
                    ctx.beginPath();
                    ctx.moveTo(endArrow.x, endArrow.y);
                    ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow - Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow - Math.PI / 6));
                    ctx.moveTo(endArrow.x, endArrow.y);
                    ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow + Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow + Math.PI / 6));
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                    // Dibujar el texto
                    ctx.font = `${fontSizeLetter}px ${fontFamilyLetter}`;
                    ctx.fillStyle = colorLetter;
                    ctx.fillText(textLetter, xLetter, yLetter);
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
                    ctx.fillText(contadorNumero, xCircle, yCircle);
                    contadorNumero++;
                    diccionario[contadorDiccionario] = {
                        actividad: actividades[i],
                        xNodo: xCircle,
                        yNodo: yCircle,
                        predecesor: predecesores[i],
                        flechasConectadas: 0
                    };
                    //*e.log(diccionario[contadorDiccionario]);
                    contadorDiccionario++;
                } else if (diccionario[j].actividad === predecesores[i] && diccionario[j].flechasConectadas === 2) {
                    diccionario[j].flechasConectadas++;
                    verificarErrorNodo++;
                    const startArrow = { x: diccionario[j].xNodo - 20, y: diccionario[j].yNodo };
                    const endArrow = { x: diccionario[j].xNodo - 80, y: diccionario[j].yNodo };
                    const angleArrow = Math.atan2(endArrow.y - startArrow.y, endArrow.x - startArrow.x);
                    // Letra
                    const textLetter = actividades[i];
                    const xLetter = startArrow.x - 20;
                    const yLetter = startArrow.y - 15;
                    //Circulo
                    xCircle = endArrow.x - 20;
                    yCircle = endArrow.y;
                    // Dibujar la línea de la flecha
                    ctx.beginPath();
                    ctx.moveTo(startArrow.x, startArrow.y);
                    ctx.lineTo(endArrow.x, endArrow.y);
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                    // Dibujar la cabeza de la flecha
                    ctx.beginPath();
                    ctx.moveTo(endArrow.x, endArrow.y);
                    ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow - Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow - Math.PI / 6));
                    ctx.moveTo(endArrow.x, endArrow.y);
                    ctx.lineTo(endArrow.x - lengthArrow * Math.cos(angleArrow + Math.PI / 6), endArrow.y - lengthArrow * Math.sin(angleArrow + Math.PI / 6));
                    ctx.strokeStyle = "black";
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                    // Dibujar el texto
                    ctx.font = `${fontSizeLetter}px ${fontFamilyLetter}`;
                    ctx.fillStyle = colorLetter;
                    ctx.fillText(textLetter, xLetter, yLetter);
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
                    ctx.fillText(contadorNumero, xCircle, yCircle);
                    contadorNumero++;
                    diccionario[contadorDiccionario] = {
                        actividad: actividades[i],
                        xNodo: xCircle,
                        yNodo: yCircle,
                        predecesor: predecesores[i],
                        flechasConectadas: 0
                    };
                    //*e.log(diccionario[contadorDiccionario]);
                    contadorDiccionario++;
                }
            }
            if (verificarErrorNodo === 0) {
                //alert("Error en los nodos");
                //break;
            }

        }

    }, []);

    // Recorrer los datos y guardar los valores en los arreglos correspondientes
    const actividades = [];
    const predecesores = [];
    const tiempoEsperado = [];
    data.forEach(row => {
        actividades.push(row.cell1);
        predecesores.push(row.cell4);
        tiempoEsperado.push(row.cell5);
    });

    // Aquí puedes utilizar los arreglos actividades, predecesores y tiempoEsperado según sea necesario

    return (
        <div className="center">
            <h1>Gráfica PERT_CPM</h1>
            {/*e.log(actividades)*/}
            {/*e.log(predecesores.length)*/}
            {/*e.log(tiempoEsperado)*/}
            <canvas ref={canvasRef} width={600} height={800} style={{ border: "1px solid black" }}></canvas>
        </div>
    );
};

export default Pert_Cpm2;
