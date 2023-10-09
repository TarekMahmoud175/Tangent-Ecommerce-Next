const calcPage = (page: number) => {
    if (page == 1)
        return 0
    else
        return page - 1
}

export default calcPage