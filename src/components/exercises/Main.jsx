import React, { Fragment } from 'react'
import { Delete, Edit } from '@material-ui/icons'
import {
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  IconButton,
  withStyles,
  Grid,
  Paper,
  List,
  ListItem
} from '@material-ui/core'
import Form from './Form'

const styles = {
  paper: { padding: 10, margin: 10, height: 500, overflowY: 'auto' },
  headline: { textTransform: 'capitalize' },
  leftPaneSubheading: { marginTop: 20 }
}

function Main({
  exercises,
  selectedMuscle,
  onSelect,
  onDelete,
  onEditMode,
  onEdit,
  editMode,
  muscles,
  classes,
  selectedExercise: {
    title = 'Welcome',
    description = 'Please select an exersice from the list on the left.'
  },
  selectedExercise
}) {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          {exercises.map(([group, exercises]) =>
            !selectedMuscle || selectedMuscle === group ? (
              <Fragment key={group}>
                <Typography variant="h6" color="secondary">
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => (
                    <ListItem
                      variant="body1"
                      key={id}
                      button
                      onClick={() => onSelect(id)}
                    >
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton>
                          <Edit onClick={() => onEditMode(id)} />
                        </IconButton>
                        <IconButton>
                          <Delete onClick={() => onDelete(id)} />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        {editMode ? (
          <Paper className={classes.paper}>
            <Form
              key={Math.random()}
              selectedExercise={selectedExercise}
              muscles={muscles}
              onSubmiting={onEdit}
              type="Edit"
            />
          </Paper>
        ) : (
          <Paper className={classes.paper}>
            <Typography variant="h4" color="secondary">
              {title}
            </Typography>
            <Typography variant="body1" className={classes.leftPaneSubheading}>
              {description}
            </Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Main)
