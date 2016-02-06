'use strict'
import {dirname} from 'path'
import findUp from 'find-up'

/**
 * Returns full path of .yo-rc.json or null if not found
 * @return {Promise<String | null>} - full path
 */
module.exports = () => findUp('.yo-rc.json')

/**
 * Returns directory of .yo-rc.json or null if not found
 * @return {Promise<String | null>} - directory
 */
module.exports.dir = () =>
  module.exports()
    .then(file => file && dirname(file))
