import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Pert_Cpm from './Pert_Cpm';
import Gantt from './Gantt';
import Sidebar from './Sidebar';

function CrearNTE() {

    const formatDate = (dateString) => {
        if (!dateString) return "";
  
        // Dividir la cadena de fecha en partes
        const [year, month, day] = dateString.split('-');
  
        // Devolver la fecha en formato dd/mm/yyyy
        return `${day}/${month}/${year}`;
    };

    const [postCalculationState, setPostCalculationState] = useState(null); // Estado para controlar la ejecución posterior al cálculo

    const [rutaCritica, setRutaCritica] = useState('');

    const [tableData, setTableData] = useState([
        { id: 1, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' },
        { id: 2, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' },
    ]);
    const [showPertCpm, setShowPertCpm] = useState(false);
    const [showGantt, setShowGantt] = useState(false);

    const handleInputChange = (id, field, value) => {
        const updatedData = tableData.map(row => {
            if (row.id === id) {
                return { ...row, [field]: value };
            }
            return row;
        });
        setTableData(updatedData);
    };

    const addRow = () => {
        const newRow = {
            id: tableData.length + 1,
            cell1: '',
            cell2: '',
            cell3: '',
            cell4: '',
            cell5: '',
            cell6: '',
            cell7: '',
            cell8: '',
            cell9: ''
        };
        setTableData([...tableData, newRow]);
    };

    const resRow = () => {
        if (tableData.length === 0) return;
        const updateTable = tableData.slice(0, -1);
        setTableData(updateTable);
    };
    const calcularTE = (x) => {
        const updatedTableData = tableData.map(row => {
            const ta = parseInt(row.cell6);
            const tm = parseInt(row.cell7);
            const tb = parseInt(row.cell8);
            if (!isNaN(ta) && !isNaN(tm) && !isNaN(tb) && ta !== 0 && tm !== 0 && tb !== 0) {
                return { ...row, cell9: (Math.round((ta + (4 * tm) + tb) / 6)).toString() };
            } else {
                alert('Error al ingresar los datos');
                return row;
            }
        });

        setTableData(updatedTableData);
        setPostCalculationState(x); // Actualizar postCalculationState después de calcular
    };

    useEffect(() => {
        // Verificar si la celda cell9 ha cambiado en alguna de las filas
        const hasCell9Changed = tableData.some(row => {
            // Comparar el valor actual de cell9 con el valor almacenado en el estado anterior
            return row.cell9 !== '' && row.cell9 !== undefined && row.cell9 !== postCalculationState;
        });

        if (hasCell9Changed) {
            // Si cell9 ha cambiado, determinar si mostrar Pert_Cpm o Gantt
            if (postCalculationState === 1) {
                setShowGantt(true);
            } else if (postCalculationState === 2) {
                setShowPertCpm(true);
            }
        }
    }, [tableData, postCalculationState]);

    const resetState = () => {
        setTableData([
            { id: 1, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' },
            { id: 2, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '', cell7: '', cell8: '', cell9: '' },
        ]);
        setShowPertCpm(false);
        setShowGantt(false);
        setRutaCritica('');
    };


    return (
        <div>
            <Slider
                title="Crear PERT-CPM y Gantt con tiempo esperado (TE)"
                size="slider-small"
            />
            <div className="center">
                <div id='content'>
                    
                    <input type='button' value="Agregar fila" className='btn-success' onClick={addRow} />
                    <input type='button' value="Quitar fila" className='btn-success' onClick={resRow} />
                    <div className='container'>
                        <table border="1" >
                            <thead>
                                <tr>
                                    <td>Actividades</td>
                                    <td>Descripcion</td>
                                    <td>Encargado</td>
                                    <td>Fecha de inicio</td>
                                    <td>Predecesores</td>
                                    <td>Tiempo obtimista(TA)</td>
                                    <td>Tiempo mas probable(TM)</td>
                                    <td>Tiempo pesimista(TB)</td>
                                    <td>Tiempo esperado(TE)</td>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(row => (
                                    <tr key={row.id}>
                                        <td><input type='text' value={row.cell1} onChange={e => handleInputChange(row.id, 'cell1', e.target.value)} /></td>
                                        <td><textarea name="bio" value={row.cell2} onChange={e => handleInputChange(row.id, 'cell2', e.target.value)}></textarea></td>
                                        <td><input type='text' value={row.cell3} onChange={e => handleInputChange(row.id, 'cell3', e.target.value)} /></td>
                                        <td><input type='date' value={row.cell4} onChange={e => handleInputChange(row.id, 'cell4', e.target.value)} />{/*"CrearNTE: "+formatDate(row.cell4)*/}</td>
                                        <td><input type='text' value={row.cell5} onChange={e => handleInputChange(row.id, 'cell5', e.target.value)} /></td>
                                        <td><input type='text' value={row.cell6} onChange={e => handleInputChange(row.id, 'cell6', e.target.value)} /></td>
                                        <td><input type='text' value={row.cell7} onChange={e => handleInputChange(row.id, 'cell7', e.target.value)} /></td>
                                        <td><input type='text' value={row.cell8} onChange={e => handleInputChange(row.id, 'cell8', e.target.value)} /></td>
                                        <td><input type='text' value={row.cell9} readOnly /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <input type='button' className='btn-success' value="Crear Gantt" onClick={() => calcularTE(1)} />
                    <input type='button' className='btn-success' value="Crear PERT-CPM" onClick={() => calcularTE(2)} />

                    {showPertCpm && <Pert_Cpm data={tableData} valor="2" setRutaCritica={setRutaCritica} />}
                    {showGantt && <Gantt data={tableData} valor="2" />}
                </div>
                <Sidebar resetState={resetState} rutaCritica={rutaCritica} />
            </div>
        </div>
    );
}

export default CrearNTE;
