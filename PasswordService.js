'use strict'

const Service = require('trails-service')
const BCrypt = require('bcryptjs')

/**
 * @module PasswordService
 * @description Basic Password hashing and comparison service using BCrypt
 * Written by https://github.com/code-for-coffee
 */
module.exports = class PasswordService extends Service {

  /**
   * generateSalt(saltInt)
   * Generates a random Salt using BCrypt
   * @param {Integer} saltInt
   * @returns {string|*}
   */
  generateSalt(saltInt){
    let Salt = (typeof salt === 'number') ? BCrypt.genSaltSync(saltInt) : BCrypt.genSaltSync(10)
    return Salt
  }

  /**
   * hashPassword(userInputPasswd)
   * Generates a hashed password from user input
   * @param {String} userInputPasswd
   * @returns {String}
   */
  hashPassword(userInputPasswd) {
    return BCrypt.hashSync(userInputPasswd, this.generateSalt())
  }

  /**
   * hashPasswordWithCustomSalt(userInputPasswd, saltInt)
   * Generates a hashed password from user input
   * @param {String} userInputPasswd
   * @param {Integer} saltInt
   * @returns {String}
   */
  hashPasswordWithCustomSalt(userInputPasswd, saltInt) {
    return BCrypt.hashSync(userInputPasswd, this.generateSalt(saltInt))
  }

  /**
   * comparePassword(userInputPasswd, dbPasswdHash)
   * compares a user's password against a stored hash
   * @param {String} userInputPasswd
   * @param {String} dbPasswdHash
   * @returns {Boolean}
   */
  comparePassword(userInputPasswd, dbPasswdHash) {
    return BCrypt.compareSync(userInputPasswd, dbPasswdHash)
  }

}
