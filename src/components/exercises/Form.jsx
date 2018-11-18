import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button
} from '@material-ui/core'

class Form extends Component {
  state = { title: '', description: '', muscles: '' }

  componentDidMount() {
    if (!this.props.selectedExercise) return
    this.setState({ ...this.props.selectedExercise })
  }

  handleChange = name => ({ target: { value } }) =>
    this.setState({ [name]: value })

  handleSubmit = () => {
    //TODO:validate

    this.props.onSubmiting({
      id: `${this.state.title} - ${Math.random()}`,
      ...this.state
    })
    this.props.onFinishSubmiting && this.props.onFinishSubmiting()
  }

  render() {
    const { muscles: catagories, type } = this.props,
      { title, description, muscles } = this.state
    console.log(this.state)
    return (
      <form style={{ display: 'contents' }}>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          fullWidth
        />
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="age-native-simple">muscles</InputLabel>
          <Select
            value={muscles}
            displayEmpty
            onChange={this.handleChange('muscles')}
          >
            {catagories.map(muscle => (
              <option key={muscle} value={muscle}>
                {muscle}
              </option>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Description"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          multiline
          rows="4"
          fullWidth
        />
        <Button
          onClick={this.handleSubmit}
          color="primary"
          variant="contained"
          margin="normal"
          fullWidth
          disabled={!muscles || !title}
        >
          {type}
        </Button>
      </form>
    )
  }
}

export default Form
