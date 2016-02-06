'use strict'
import {dirname} from 'path'
import findUp from 'find-up'

/**
 * Returns full path of .yo-rc.json or null if not found
 * @return {Promise<String | null>} - full path
 */
module.exports = function () {
  return findUp('.yo-rc.json')
}

/**
 * Returns directory of .yo-rc.json or null if not found
 * @return {Promise<String | null>} - directory
 */
module.exports.dir = function () {
  return module.exports()
    .then(file => file && dirname(file))
}
