import Component from './CriarAgendamento'
import { connect } from 'react-redux'

const mapStateToProps = ({scheduleDate}, props) => {
  return {
    scheduleDate,
    ...props
  }
}

export default connect(mapStateToProps)(Component)
