import { StatefulPlugin, StateType } from '@edtr-io/core'

import { InputExerciseEditor } from './editor'

export const wrongAnswerObject = StateType.object({
  value: StateType.string(''),
  feedback: StateType.child()
})
export const inputExerciseState = StateType.object({
  type: StateType.string('Text'),
  correctAnswers: StateType.list(StateType.string('')),
  wrongAnswers: StateType.list(wrongAnswerObject)
})
export function createInputExercisePlugin(): StatefulPlugin<
  typeof inputExerciseState
> {
  return {
    Component: InputExerciseEditor,
    config: {},
    state: inputExerciseState
  }
}
