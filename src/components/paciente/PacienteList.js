function PacienteList({ id, nome }) {
    return (
        <>
            {/* <li key={id}>{nome}</li> */}
            <a href={`rpd/${id}`}>{nome}</a>
        </>

    )
}

export default PacienteList;