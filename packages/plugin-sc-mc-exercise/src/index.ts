import { StateType, StatefulPlugin } from '@edtr-io/core'

import { ScMcExerciseEditor } from './editor'

export const AnswerProps = StateType.object({
  id: StateType.child(),
  isCorrect: StateType.boolean(false),
  feedback: StateType.child(),
  hasFeedback: StateType.boolean(false)
})

export const scMcExerciseState = StateType.object({
  isSingleChoice: StateType.boolean(false),
  answers: StateType.list(AnswerProps)
})

export function createScMcExercisePlugin(): StatefulPlugin<typeof scMcExerciseState> {
  return {
    Component: ScMcExerciseEditor,
    config: {},
    state: scMcExerciseState
  }
}
