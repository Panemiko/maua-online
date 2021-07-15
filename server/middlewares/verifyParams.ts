

/**
 * @param body - The body from the client request
 * @param params - The parameters to verify if the body have
 * @throws null-params
 */
export default function verifyParams(body: Object, params: string[]) {
    return new Promise<void>((resolve, reject) => {

        params.forEach(param => {
            if (!body[param]) return reject(`null-params`)
        })

        resolve()

    })
}
