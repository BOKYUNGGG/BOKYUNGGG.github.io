import Clock from "../components/Clock.js"
import { startInterval, getWeek } from "../module/clock.js"
import { routeChange } from "../pages/router.js"

export default function NavBar ({
    $target
}) {
    this.render = () => {
        const template = this.template()
        $target.innerHTML = template
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
        this.setEvent()        
    }
    this.template = () => {
        const template = `
            <ul>
                <li class="nav-item" data-route-path="home">Home</li>
                <li class="nav-item" data-route-path="landing">Landing Page</li>
                <li class="nav-item" data-route-path="signin">Sign In</li>
                <li class="nav-item" data-route-path="signup">Sign Up</li>
            </ul>
            <div class='clock'></div>
        `
        return template
    }
    this.setEvent = () =>{
        $target.addEventListener('click', (e)=>{
            const {routePath} = e.target.dataset

            routeChange(`/${routePath}`)
        })
    }
}
