const funcs = (() => {

//Factory creates task obj
const makeObj = (title, description, date, priority) => {
    return {
    title,
    description,
    date,
    priority
    }
}

//Factory creates project obj
const makeProject = (title, description) => {
    let tasks = []
    return {
        title,
        description,
        tasks
    }
}



return {
    makeObj,
    makeProject
}
})();

export {funcs}