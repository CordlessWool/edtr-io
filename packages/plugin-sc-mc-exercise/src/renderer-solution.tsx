import { StateType, LegacyStatefulPluginEditorProps } from '@edtr-io/core'
import * as React from 'react'

import { ScMcAnswersRenderer } from './answers-renderer'
import { ScMcExerciseChoiceRenderer } from './choice-renderer'
import { AnswerProps, scMcExerciseState } from '.'

export class ScMcRendererSolution extends React.Component<
  LegacyStatefulPluginEditorProps<typeof scMcExerciseState>
> {
  public render() {
    return <ScMcAnswersRenderer {...this.props} showAnswer={this.showAnswer} />
  }

  private showAnswer = (
    answer: StateType.StateDescriptorReturnType<typeof AnswerProps>,
    index: number,
    centered: boolean
  ): React.ReactNode => {
    return (
      <ScMcExerciseChoiceRenderer
        key={index}
        index={index}
        selected={answer.isCorrect()}
        showFeedback
        {...this.props}
        centered={centered}
      >
        {answer.id.render()}
      </ScMcExerciseChoiceRenderer>
    )
  }
}
