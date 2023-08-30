import { useEffect, useState } from "react";

function App() {

  const [ listaTarefas, setListaTarefas ] = useState ([]);
  const [ tarefa, setTarefa ] = useState ({id:'', texto:"" , status:""});

  function addTarefa()
  {
    if( tarefa.texto !==""){
      setListaTarefas([...listaTarefas, tarefa]);
    }
  }

  function excluirTarefa(id )
  {
    const novaLista = listaTarefas.filter( (tarefa) => tarefa.id !== id);
    setListaTarefas( novaLista );
  }

  function statusTarefa( id, status )
{
   const index = listaTarefas.findIndex( (tarefa) => tarefa.id == id );
   setListaTarefas([...listaTarefas] );
   listaTarefas[index].status = !status ;

}

  useEffect(() => {
    setTarefa({id: "", texto: "" , status: ""});
  }, [listaTarefas])

  return (
    <>
    <header>
      <h1>react do</h1>
    </header>
      <div>
        <input type="text" name="tarefa" placeholder="digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status: false}) }/>
        <button onClick={addTarefa}> +</button>
      </div>
      <div>
        <ul>
        {listaTarefas.map( (item, index) => (
          <li  key={item.id}>{item.texto} <button onClick={() => statusTarefa(item.id, item.status )}>{item.status ? 'concluida': 'nao concluido'}</button>
          <button onClick={() => excluirTarefa(item.id)}>X</button></li>
        ))}
        </ul>
      </div>
    </>
  );
}
export default App;
