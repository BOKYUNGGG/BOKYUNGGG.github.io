import Clock from "../components/Clock.js"
import { startInterval, getWeek } from "../module/clock.js"

export default function HomePage({
    $target
}){
    this.state = null
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }
    this.template = () => {
        const template = `
            <h1>홈페이지</h1>
            <section class='clock'></section>
        `
        return template
    }
    this.render = () => {
        $target.className = 'HomePage'
        $target.innerHTML = this.template()

        const $clock = $target.querySelector('.clock')
        const callback = () => {
            const today = new Date()
            const month = today.getMonth() + 1
            const date = today.getDate()
            const week = today.getDay()
            const hour = today.getHours()
            const minute = today.getMinutes()
            const now = {
                month : month,
                date : date,
                week : getWeek(week),
                hour : hour,
                minute : minute
            }
            new Clock({$target : $clock, initialState : now})
        }
        startInterval(60, callback)
    }
    


    this.setState(null)
}