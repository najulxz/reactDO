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
    <section>
    <header>
    </header>
      <div className="texto">
           <input className="primeirotexto" type="text" placeholder="Insira um título" />   
      </div>
      <div className="caixaFlex">
        <div className="lista">
          <input type="text" name="tarefa" placeholder="digite sua tarefa" value={tarefa.texto} onChange={(e) => setTarefa({id: Math.random(), texto: e.target.value, status: false}) }/>
          <i onClick={addTarefa}class="fa fa-arrow-down" aria-hidden="true"></i>

        
          <ul>
          {listaTarefas.map( (item, index) => (
            <li className={item.status ? "itemInativo" : "itemAtivo"} key={item.id}>{item.texto} <button onClick={() => statusTarefa(item.id, item.status )}>{item.status ? 
            <i class="fa fa-check-square" aria-hidden="true"></i>
            : <i class="fa fa-minus-square" aria-hidden="true"></i>
          }</button>
            <button onClick={() => excluirTarefa(item.id)}>  Remover</button></li>
          ))}
          </ul>
        </div>
        <div className="lista1">
          <textarea  placeholder="Insira Observações"> </textarea>
        </div>
      </div>
      
      
      
      <div>
        <textarea className="lista2" placeholder="Insira Observações Extras"> </textarea>
      </div>

     <p></p>

        
          

      
    </section>
  );
}
export default App;
