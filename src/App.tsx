import FirstComponent from "./components/FirstComponent"

const personas = [
  {
    id: 1,
    name: "Alinder",
    rol: "Programador"
  }, {
    id: 2,
    name: "liz",
    rol: "Programador"
  }
  , {
    id: 3,
    name: "otra persona",
    rol: "otro rol"
  }
]


function App() {
  const tipoRol = personas.filter(persona => persona.rol == "Administrador")
  console.log(tipoRol.length)


  return (
    <div>
      {tipoRol && tipoRol.length > 0 ? (<ul>
        {tipoRol.map(persona => (
          <li key={persona.id}>
            <FirstComponent name={persona.name} rol={persona.rol} />
          </li>
        ))}
      </ul>) : (<p>No hay personas con ese rol</p>)}

    </div>
  )
}

export default App
