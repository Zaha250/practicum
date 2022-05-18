export default function sum (...args) {
    if(args.length < 1) {
        throw Error('Функция должна принимать хотя бы 1 аргумент');
    }
    return args.reduce((acc, cur) => acc + cur, 0);
}