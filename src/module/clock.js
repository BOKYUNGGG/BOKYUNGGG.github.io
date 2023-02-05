export const startInterval = (sec, callback) => {
    callback()
    return setInterval(callback, sec*1000)
}
export const getWeek = (index) =>{
    const arr = ["일", "월", '화', '수', '목', '금', '토']
    return arr[index]
} 