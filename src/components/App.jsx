import React, { Component } from 'react'
import { Header, Footer } from './layouts'
import Main from './exercises/Main'
import { exercises, muscles } from '../store'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  '@global': {
    'html, body, #root': { height: '100vh' }
  },
  container: {
    height: '100vh'
  }
})

class App extends Component {
  state = {
    exercises,
    SelectedMuscle: '',
    selectedExercise: {},
    editMode: false
  }

  getExercisesByMuscles() {
    const initExercises = muscles.reduce(
      (exercises, muscle) => ({ ...exercises, [muscle]: [] }),
      {}
    )

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = [...exercises[muscles], exercise]

        return exercises
      }, initExercises)
    )
  }

  handleSelect = value => this.setState({ SelectedMuscle: value })

  handleSelectedExercise = id =>
    this.setState(({ exercises }) => ({
      selectedExercise: exercises.find(exercise => exercise.id === id),
      editMode: false
    }))

  handleCreate = exercise =>
    this.setState(({ exercises }) => ({ exercises: [...exercises, exercise] }))

  handleDelete = id =>
    this.setState(({ exercises, selectedExercise, editMode }) => ({
      exercises: exercises.filter(exercise => exercise.id !== id),
      selectedExercise: selectedExercise.id === id ? {} : selectedExercise,
      editMode: selectedExercise.id === id ? false : editMode
    }))

  handleEditMode = id =>
    this.setState(({ exercises }) => ({
      editMode: true,
      selectedExercise: exercises.find(exercise => exercise.id === id)
    }))

  handleEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      selectedExercise: {},
      editMode: false
    }))

  render() {
    const exercises = this.getExercisesByMuscles()
    const { SelectedMuscle, selectedExercise, editMode } = this.state,
      { classes } = this.props

    return (
      <div className={classes.container}>
        <Header muscles={muscles} onCreate={this.handleCreate} />
        <Main
          exercises={exercises}
          selectedMuscle={SelectedMuscle}
          onSelect={this.handleSelectedExercise}
          selectedExercise={selectedExercise}
          onDelete={this.handleDelete}
          onEditMode={this.handleEditMode}
          editMode={editMode}
          muscles={muscles}
          onCreate={this.handleCreate}
          onEdit={this.handleEdit}
        />
        <Footer
          muscles={muscles}
          onSelect={this.handleSelect}
          selectedMuscle={SelectedMuscle}
        />
      </div>
    )
  }
}

export default withStyles(styles)(App)
