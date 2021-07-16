import type { ServerConfig } from '../types'

import jwt from 'jsonwebtoken'
import { config as dotenv } from 'dotenv'
import { readJSONSync } from 'fs-extra'

dotenv()

const config: ServerConfig = readJSONSync(`server-config.json`)
const expiresIn = config.api.accessDuration

/**
 * @param info - The object to be encrypted
 * @param type - The token type
 * @returns The object encrypted with the token type key
 */
export function createToken(info: Object, type: string) {
    return new Promise<string>((resolve, reject) => {

        switch (type) {
            case `refresh`:
                try {
                    resolve(jwt.sign(info, process.env.REFRESH_TOKEN))
                } catch (err) { return reject(err) }
                break
            case `access`:
                try {
                    resolve(jwt.sign(info, process.env.ACCESS_TOKEN, { expiresIn }))
                } catch (err) { return reject(err) }
        }

    })
}

/**
 * @param token - The token to be decrypted
 * @param type - The token type
 * @throws token-invalid
 * @returns The object decrypted
 */
export function readToken(token: string, type: string) {
    return new Promise<any>((resolve, reject) => {

        let tokenType: string

        switch (type) {
            case `refresh`:
                tokenType = process.env.REFRESH_TOKEN
                break
            case `access`:
                tokenType = process.env.ACCESS_TOKEN
        }

        jwt.verify(token, tokenType, (err, info) => {
            if (err) return reject(`token-invalid`)
            else return resolve(info)
        })

    })
}
