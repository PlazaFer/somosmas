import useStyles from './decorativeLineStyle'

const DecorativeLineBW = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.black}></div>
        <div className={classes.grey}></div>
        <div className={classes.black}></div>
        <div className={classes.grey}></div>
      </div>
    </div>
  )
}

export default DecorativeLineBW
