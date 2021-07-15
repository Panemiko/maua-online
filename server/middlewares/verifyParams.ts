import type { Request } from 'express'

export default function verifyParams(body: Object, params: string[]) {
    return new Promise<void>((resolve, reject) => {

        params.forEach(param => {
            if (!body[param]) return reject(`null-params`)
        })

        resolve()

    })
}
