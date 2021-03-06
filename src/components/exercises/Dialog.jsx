import React, { Fragment, Component } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import Form from './Form'

class Create extends Component {
  state = {
    open: false
  }

  handleClick = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state,
      { onCreate, muscles } = this.props

    return (
      <Fragment>
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          onClick={this.handleClick}
          mini
        >
          <Add />
        </Button>
        <Dialog open={open} onClose={this.handleClose} fullWidth>
          <div style={{ margin: 20 }}>
            <DialogTitle id="form-dialog-title">
              Create a New Exercise
            </DialogTitle>
            <DialogContent>
              <DialogContentText>Please fill the form below</DialogContentText>
            </DialogContent>
            <Form
              muscles={muscles}
              onSubmiting={onCreate}
              type="create"
              onFinishSubmiting={this.handleClose}
            />
          </div>
        </Dialog>
      </Fragment>
    )
  }
}

export default Create
