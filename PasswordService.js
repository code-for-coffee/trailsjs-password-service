/**
 * @module PasswordService
 * @description Basic Password hashing and comparison service using BCrypt
 * Written by https://github.com/code-for-coffee
 * Released under the MIT license
 * Instructions here: https://github.com/code-for-coffee/trailsjs-password-service/new/master
 */
'use strict'

const Service = require('trails-service')
const BCrypt = require('bcryptjs')

module.exports = class PasswordService extends Service {

  /**
   * generateSalt generates a password salt
   * @param {Integer} saltInt
   * @returns {string|*}
   */
  generateSalt(saltInt){
    let Salt = (typeof salt === 'number') ? BCrypt.genSaltSync(saltInt) : BCrypt.genSaltSync(10)
    return Salt
  }

  /**
   * hashPassword generated a hashed password from user input
   * @param {String} userInputPasswd
   * @returns {String}
   */
  hashPassword(userInputPasswd) {
    return BCrypt.hashSync(userInputPasswd, this.generateSalt())
  }

  /**
   * hashPasswordWithCustomSalt generated a hashed password from user input
   * @param {String} userInputPasswd
   * @param {Integer} saltInt
   * @returns {String}
   */
  hashPasswordWithCustomSalt(userInputPasswd, saltInt) {
    return BCrypt.hashSync(userInputPasswd, this.generateSalt(saltInt))
  }

  /**
   * isMatchingPassword compares a user's password against a stored hash
   * @param {String} userInputPasswd
   * @param {String} dbPasswdHash
   * @returns {Boolean}
   */
  comparePassword(userInputPasswd, dbPasswdHash) {
    return BCrypt.compareSync(userInputPasswd, dbPasswdHash)
  }

}

