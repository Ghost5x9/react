import Imagen from "./Imagen"
const ListaImagenes = (props) => {
    return <div>
        {
            props.listaImagenes.map((elem) => {
                return <Imagen 
                    url = {elem.url}
                    titulo = {elem.titulo}
                />
            })
        }
    </div>
}

export default ListaImagenes