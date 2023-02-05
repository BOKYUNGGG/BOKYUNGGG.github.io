import HomePage from '../pages/HomePage.js'
import LandingPage from '../pages/LandingPage.js'
import SignUpPage from '../pages/SignUpPage.js'
import SignInPage from '../pages/SignInPage.js'

import NavBar from './NavBar.js'

import { init } from '../pages/router.js'

export default function App ({
    $target
}) {
    const $header = document.createElement('header')
    const $main = document.createElement('main')
    $target.appendChild($header)
    $target.appendChild($main)

    this.render = () => {
        new NavBar({$target : $header}).render()
        init(this.setRoute)
        this.setRoute()
        this.setEvent()
    }
    this.setRoute = () => {
        const {pathname} = document.location        

        if(pathname === '/'){
            new HomePage({$target : $main})
        }
        else if(pathname === '/signup'){
            new SignUpPage({
                $target : $main
            })
        }
        else if(pathname === '/signin'){
            new SignInPage({
                $target : $main
            })
        }
        else if(pathname === '/landing'){
            new LandingPage({$target : $main})
        }
    }
    this.setEvent = () => {
        window.addEventListener('popstate', this.route)
    }


    this.render()
}
