const listaClientes = () =>
    fetch('https://64ae0f57b470006a5ec692e4.mockapi.io/perfil/').then(respuesta => respuesta.json());

const crearCliente = (nombre, email) => {
    return fetch('https://64ae0f57b470006a5ec692e4.mockapi.io/perfil/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, email, id: uuid.v4() }),
    });
};

const eliminarCliente = (id) => {
    return fetch(`https://64ae0f57b470006a5ec692e4.mockapi.io/perfil/${id}`, {
        method: 'DELETE',
    });
};

const detalleCliente = (id) => {
    return fetch(`https://64ae0f57b470006a5ec692e4.mockapi.io/perfil/${id}`).then((respuesta) =>
        respuesta.json()
    );
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`https://64ae0f57b470006a5ec692e4.mockapi.io/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, email }),
    })
    .then(respuesta => respuesta)
    .catch((err) => console.log(err));
};

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};