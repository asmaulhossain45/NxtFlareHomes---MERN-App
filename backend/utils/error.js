export const errorHandler = (statusCode, message) => {
    const error = new Error(message); // Set the error message directly
    error.statusCode = statusCode;    // Add statusCode property
    error.name = 'CustomError';       // Optionally set a name
    Error.captureStackTrace(error, errorHandler); // Capture the stack trace
    return error;
  };
  