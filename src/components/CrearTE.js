import React, { useState } from 'react';
import Slider from './Slider';
import Pert_Cpm from './Pert_Cpm';
import Gantt from './Gantt';
import Sidebar from './Sidebar';

function CrearTE() {

    const [rutaCritica, setRutaCritica] = useState('');


    const [tableData, setTableData] = useState([
        { id: 1, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '' },
        { id: 2, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: '' },
    ]);
    var [showPertCpm, setShowPertCpm] = useState(false);
    var [showGantt, setShowGantt] = useState(false);

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
            cell6: ''
        };
        setTableData([...tableData, newRow]);
    };

    const resRow = () => {
        if (tableData.length === 0) return;
        const updateTable = tableData.slice(0, -1);
        setTableData(updateTable);
    };

    const crearPC = () => {
        // Verificar si alguna celda está vacía
        const isEmpty = tableData.some(row => {
            return Object.values(row).some(value => value === '');
        });

        //console.log("Estado de isEmpty:", isEmpty); // Agregado para depuración
        // Si alguna celda está vacía, mostrar alerta y no mostrar Pert_Cpm
        if (isEmpty) {
            alert('Por favor completa todas las celdas antes de continuar. 1');
        } else {
            setShowPertCpm(true);
        }
    };

    const crearGantt = () => {
        // Aquí redirigimos a la página de la gráfica de Gantt
        const isEmpty = tableData.some(row => {
            return Object.values(row).some(value => value === '');
        });

        // Si alguna celda está vacía, mostrar alerta y no mostrar Pert_Cpm
        if (isEmpty) {
            alert('Por favor completa todas las celdas antes de continuar. 2');
        } else {
            setShowGantt(true);
        }
        
    };
    const resetState = () => {
        setTableData([
            { id: 1, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: ''},
            { id: 2, cell1: '', cell2: '', cell3: '', cell4: '', cell5: '', cell6: ''},
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
                                    <td>Tiempo esperado (TE) días</td>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map(row => (
                                    <tr key={row.id}>
                                        <td><input type='text' value={row.cell1} onChange={e => handleInputChange(row.id, 'cell1', e.target.value)} /></td>
                                        <td><textarea name="bio" value={row.cell2} onChange={e => handleInputChange(row.id, 'cell2', e.target.value)}></textarea></td>
                                        <td><input type='text' value={row.cell3} onChange={e => handleInputChange(row.id, 'cell3', e.target.value)} /></td>
                                        <td><input type='date' value={row.cell4} onChange={e => handleInputChange(row.id, 'cell4', e.target.value)} />{/*row.cell4*/}</td>
                                        <td><input type='text' value={row.cell5} onChange={e => handleInputChange(row.id, 'cell5', e.target.value)} /></td>
                                        <td><input type='text' value={row.cell6} onChange={e => handleInputChange(row.id, 'cell6', e.target.value)} /></td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <input type='button' value="Crear Gantt" className='btn-success' onClick={crearGantt} />
                    <input type='button' value="Crear PERT-CPM" className='btn-success' onClick={crearPC} />
                    {showPertCpm && <Pert_Cpm data={tableData} valor ="1" setRutaCritica={setRutaCritica}/>}
                    {showGantt && <Gantt data={tableData} valor ="1" />}
                </div>
                
                <Sidebar resetState={resetState} rutaCritica={rutaCritica} />
                
            </div>
        </div>
    );
}

export default CrearTE;
