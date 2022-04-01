import useStyles from './decorativeLineStyle'

const DecorativeLine = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.redBox}></div>
        <div className={classes.yellowBox}></div>
        <div className={classes.blueBox}></div>
      </div>
    </div>
  )
}

export default DecorativeLine
