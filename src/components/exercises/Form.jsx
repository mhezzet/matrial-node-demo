import React, { Component } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  formItems: {
    marginButtom: 12,
    marginTop: 12,
    marginRight: 30,
    marginLeft: 30,
    width: 400
  },
  createButton: { margin: 10, marginTop: 30 }
}

class Form extends Component {
  state = {
    title: '',
    description: '',
    muscles: ''
  }

  componentDidMount() {
    if (!this.props.selectedExercise) return
    this.setState({ ...this.props.selectedExercise })
  }

  componentWillReceiveProps({ selectedExercise }) {
    this.setState({ ...selectedExercise })
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
    const { classes, muscles: catagories, type } = this.props,
      { title, description, muscles } = this.state

    return (
      <form style={{ display: 'contents' }}>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.formItems}
        />
        <FormControl className={classes.formItems}>
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
          className={classes.formItems}
        />
        <Button
          onClick={this.handleSubmit}
          color="primary"
          variant="contained"
          className={classes.createButton}
        >
          {type}
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(Form)
