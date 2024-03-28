// helper.js

export const formatDate = (date, formatStr = 'dd.MM.yyyy') => {
    if (!date) {
        return ''
    }
    const dt = new Date(date)
    const day = dt.getDate()
    const month = dt.getMonth() + 1
    const year = dt.getFullYear()
    const hours = dt.getHours()
    const minutes = dt.getMinutes()
    const seconds = dt.getSeconds()

    return formatStr
        .replace('dd', String(day).padStart(2, '0'))
        .replace('MM', String(month).padStart(2, '0'))
        .replace('yyyy', year)
        .replace('HH', String(hours).padStart(2, '0'))
        .replace('mm', String(minutes).padStart(2, '0'))
        .replace('ss', String(seconds).padStart(2, '0'))
}