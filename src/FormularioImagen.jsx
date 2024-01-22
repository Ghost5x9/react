import { useState } from "react"

const FormularioImagen = (props) => {
    const [url, setUrl] = useState("")
    const [titulo, setTitulo] = useState("")

    const changerUrlHandler = (event) => {
        setUrl(event.target.value)
    }

    const changerTituloHandler = (event) => {
        setTitulo(event.target.value)
    }

    const guardarImagen = () => {
        props.guardar(url,titulo)
    }
    return <form>
        <div className="mb-3">
            <label for="txt_url_imagen" className="form-label">URL Imagen</label>
            <input type="text" className="form-control" value={url} onChange={changerUrlHandler} id="txt_url_imagen" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
            <label for="txt_url_imagen" className="form-label">Titulo</label>
            <input type="text" className="form-control" value={titulo} onChange={changerTituloHandler} id="txt_url_imagen" aria-describedby="emailHelp" />
        </div>
        <button type="button" className="btn btn-primary" onClick={guardarImagen}>Guardar</button>
    </form>
    }

export default FormularioImagen