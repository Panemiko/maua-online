
/**
 * @param inputName - The classification name of the input
 * @param regex - The regex to be followed by the input
 * @param input - The input to be tested
 * @throws invalid-{inputName}-syntax
 * @description - Test the input with the regex passed
 */
export default function verifySyntax(inputName: string, regex: RegExp, input: string) {
    return new Promise<void>((resolve, reject) => {

        const test = regex.test(input)
        if (test) return resolve()
        else return reject(`${inputName}-invalid`)

    })
}
