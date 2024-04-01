import { ContainerInfo, Text } from './styles'
import { TasksContext } from '../../../../context/TaskContext'
import { useContext } from 'react'

export function Info() {
  const { tasks } = useContext(TasksContext)

  const totalCompleted = tasks.reduce((total, task) => {
    if (task.status === 'Concluida') {
      return total + 1
    } else {
      return total
    }
  }, 0)

  const inProgress = tasks.reduce((total, task) => {
    if (task.status === 'Em andamento') {
      return total + 1
    } else {
      return total
    }
  }, 0)

  return (
    <ContainerInfo>
      <span>
        <Text>Tarefas Não Iniciadas</Text>
        <div>
          <p>{tasks.length}</p>
        </div>
      </span>
      <span>
        <Text>Tarefas em Andamento</Text>
        <div>
          <p>{inProgress}</p>
        </div>
      </span>
      <span>
        <Text>Tarefas Concluídas</Text>
        <div className="info">
          <p>{totalCompleted}</p> <p>de</p> <p>{tasks.length}</p>
        </div>
      </span>
    </ContainerInfo>
  )
}
