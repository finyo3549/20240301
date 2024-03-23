import PropTypes from 'prop-types';

function ProcesszorTable(props) {
    const { processzor , updateClick, deleteClick } = props;
    return (

                <tr>
                    <td>
                        { processzor.gyarto }
                    </td>
                    <td>
                        { processzor.tipus }
                    </td>
                    <td>
                        { processzor.orajel }   
                    </td>
                    <td>
                        { processzor.architektura }
                    </td>
                    <td>
                        { processzor.megjelenes_datuma }
                    </td>
                    <td>
                    <button className="btn btn-danger"  onClick={() => {deleteClick(processzor.id)}}>Törlés</button>
                    </td>
                    <td>
                    <button className="btn btn-warning"  onClick={() => {updateClick(processzor.id)}}>Módosítás</button>
                    </td>
                </tr>
            
    );
    
}
ProcesszorTable.propTypes = {
    processzor: PropTypes.object.isRequired,
    updateClick: PropTypes.func.isRequired,
    deleteClick: PropTypes.func.isRequired
};
export default ProcesszorTable;