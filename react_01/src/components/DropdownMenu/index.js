import './DropdownMenu.css';

const DropdownMenu = (props) => {

    /* Map Method:

        array.map( (team, index) => {
            return <option></option>;
        });

    */

    const teams = [
        'Programación',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Móvil',
        'Innovación y Gestión',
    ];

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select>
            <option defaultValue="">{props.placeholder}</option>
            {teams.map((team, index) => <option key={index}>{team}</option>)};
        </select>
    </div>;
}

export default DropdownMenu;