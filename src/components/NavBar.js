import { routeChange } from "../pages/router.js"

export default function NavBar ({
    $target
}) {
    this.render = () => {
        const template = this.template()
        $target.innerHTML = template
        this.setEvent()
        
        
        console.log("Navbar is rendered")
    }
    this.template = () => {
        const template = `
            <ul>
                <li class="nav-item" data-route-path="home">Home</li>
                <li class="nav-item" data-route-path="landing">Landing Page</li>
                <li class="nav-item" data-route-path="signin">Sign In</li>
                <li class="nav-item" data-route-path="signup">Sign Up</li>
            </ul>
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
