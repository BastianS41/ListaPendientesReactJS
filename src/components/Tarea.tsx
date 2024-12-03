
type TareaProp = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: TareaProp) => {
  return (
    <div className="task">
        <span>{tarea}</span>
        <button onClick={borrarTarea}>Borrar Tarea</button>
    </div>
  )
}