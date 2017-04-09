const request = require('request')
const chalk = require('chalk')
const emoji = require('node-emoji')

const getMayorVersion = (version) => version.split('.')[0]
const cleanVersion = (version) => version.replace('^', '').replace('~', '')

module.exports = (dep, deps) => {
  request(`http://registry.npmjs.org/${dep}`, (error, response, body) => {
    if (error) {
      console.log(
        chalk.red.bold(error)
      )
    }

    body = JSON.parse(body)
    const version = cleanVersion(deps[dep])

    // git packages
    if (version.indexOf('git') > -1) {
      return console.log(
        emoji.get('disappointed'),
        chalk.blue.bold(dep),
        'Ups! Sorry mate, we don\'t support git packages yet'
      )
    }

    const latest = cleanVersion(body['dist-tags'].latest);

    // updated!
    if (version === latest) {
      return console.log(
        emoji.get('surfer'),
        chalk.green.bold(dep),
        `(${version})`,
        'You\'re surfing the latest version'
      )
    }

    const mayorVersion = getMayorVersion(version)
    const mayorLatest = getMayorVersion(latest)

    // mayor version out to date
    if (mayorLatest !== mayorVersion) {
      return console.log(
        emoji.get('exclamation'),
        chalk.red.bold(dep),
        `(${version})`,
        'You\'re missing the big wave, consider looking for an update'
      )
    }

    // out to date
    return console.log(
        emoji.get('warning'),
        chalk.yellow.bold(dep),
        `(${version})`,
        'Dude! There are some easy updates available'
      )
  })
}