class api_error extends Error {
    constructor(
        statuscode,
        message = "somthing went worng",
        errors = [],
        stack = ''
    ) {
        super(message)
        this.statuscode = statuscode,
            this.data = null,
            this.message = message,
            this.success = false,
            this.errors = errors

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {api_error}