import { ClipboardText, Timer, Scroll, ListChecks } from 'phosphor-react'
import { NoTasks } from './styles'


export function NoTasksHere() {
  return (
    <NoTasks>
      <ClipboardText size={50} />
      <h3>Que pena! Você ainda não tem tarefas cadastradas</h3>
      <p>Crie novas tarefas e aumente sua produtividade.</p>
      <br />
      <br />
      <p style={{ color: 'white', display: "flex", gap: "3px" }}>
        Utilize o Pomodoro, para controlar o tempo de execução da tarefa e do descanso
      </p>
      <p style={{ color: 'white', display: "flex", gap: "3px" }}>No menu Histórico você pode ver suas tarefas e os status de cada tarefa.</p>
      <p style={{ color: 'white', display: "flex", gap: "3px" }}>No menu Aulas DevClub você consegue acompanhar o seu andamento nas aulas DevClub</p>
    </NoTasks>
  )
}
