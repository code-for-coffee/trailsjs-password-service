# trailsjs-password-service
Basic Password hashing and comparison service using BCrypt

This is Service module for [Trails.js](https://github.com/trailsjs/trails). It is designed using [bcryptjs](https://github.com/dcodeIO/bcrypt.js).

## Methods

```js
/**
 * generateSalt(saltInt)
 * Generates a random Salt using BCrypt
 * @param {Integer} saltInt
 * @returns {string|*}
 */

/**
 * hashPassword(userInputPasswd)
 * Generates a hashed password from user input
 * @param {String} userInputPasswd
 * @returns {String}
 */

/**
 * hashPasswordWithCustomSalt(userInputPasswd, saltInt)
 * Generates a hashed password from user input
 * @param {String} userInputPasswd
 * @param {Integer} saltInt
 * @returns {String}
 */

/**
 * comparePassword(userInputPasswd, dbPasswdHash)
 * compares a user's password against a stored hash
 * @param {String} userInputPasswd
 * @param {String} dbPasswdHash
 * @returns {Boolean}
 */
```

#### How do I use this with Trails?

You'll need a trails app first. Don't know what Trails is? It is a framework similar to Ruby on Rails [Here's a getting started guide](https://github.com/trailsjs/trails-docs). You can use Hapi, Express, Sequelize, Mongoose, etc. 

Grab BCrypt - `npm install bcryptjs --save` and then generate a new trails service:

```bash
$ yo trails:service PasswordService
? Service Description TODO document Service
   create api/services/PasswordService.js
   create test/unit/services/PasswordService.test.js
    force api/services/index.js
```

Then copy the contents of PasswordService.js in this repository to your new `create api/services/PasswordService.js` file.

Then, serve trails: `node server.js`

You can test the PasswordService methods in the Trails console:

```bash
trails > app.services.PasswordService.generateSalt()
'$2a$10$yXZLkcAJlC.OqwGB6Fhnt.'

trails > app.services.PasswordService.hashPassword('yolo')
'$2a$10$8g1OI/ShAVC69q/Ur9609O6TjcQBwFwDJdaOq/F9Y9bqSAk2mNw72'

trails > app.services.PasswordService.comparePassword('yolo', app.services.PasswordService.hashPassword('yolo'))
true

trails > app.services.PasswordService.comparePassword('yolo', 'some-fake-pw')
false
```
