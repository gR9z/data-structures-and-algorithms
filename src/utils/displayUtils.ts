/**
 * Display Function for Algorithm Execution and Timing
 *
 * This utility function is designed for executing and displaying the results of sorting or computational algorithms.
 * It provides a consistent format for logging the algorithm's name, execution time, and results.
 *
 * The function accepts three parameters:
 * - name: A string representing the name of the algorithm. This is used purely for display purposes to identify the algorithm during logging.
 * - fn: The algorithm function to be executed. This function should take an array of type T and return either an array or a single value of type T.
 * - data: The input array of type T on which the algorithm function will be executed.
 *
 * The function performs the following actions:
 * - Logs the name of the algorithm (for identification purposes) and the original input array.
 * - Measures and logs the execution time of the algorithm using console.time and console.timeEnd.
 * - Executes the algorithm function with the provided data and logs the result.
 * - Logs a closing statement to indicate the end of the algorithm's execution.
 *
 * @param {string} name The name of the algorithm, used for identification in logs.
 * @param {(input: T[]) => T[] | T} fn The algorithm function.
 * @param {T[]} data The input data for the algorithm.
 */
const display = <T>(
	name: string,
	fn: (input: T[], input2?: T) => T[] | T,
	data: T[],
	target?: T
): void => {
	console.log(`******* ${name} Algorithm *******`);

	console.log('Data: ', data);

	console.time(`${name}ExecutionTime`);
	const result = fn(data, target);
	console.timeEnd(`${name}ExecutionTime`);

	console.log('result:', result);
	console.log(`**** End of ${name} Algorithm ***`);
};

export default display;
