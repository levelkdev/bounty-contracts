import _ from 'lodash'
import requireContract from './requireContract'

module.exports = (opts) => {
  return _.assign({}, requireContract('BugBountyFactory', opts))
}
