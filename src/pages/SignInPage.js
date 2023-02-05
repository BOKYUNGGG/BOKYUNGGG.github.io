import { routeChange } from "../pages/router.js"
import { validateSignin } from "../module/valiator.js"

export default function SignInPage({
    $target
}){
    this.template = () => {
        const template = `
        <form id='signin-form' style="border:1px solid #ccc">
            <div class="container">
                <h1>Sign In</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
            
                <label for="id"><b>ID</b></label>
                <input type="text" placeholder="Enter ID" name="id" required>
            
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required>
            
                <p>
                    Do not have any account??
                    <span id="navigator">Sign up 👉</span>
                </p>


                <div class="clearfix">
                    <input type="submit" value="Sign In"></input>
                </div>
            </div>
        </form>
        `
        return template
    }
    this.setEvent = () => {
        const $form = $target.querySelector('#signin-form')
        const $navigator = $target.querySelector('#navigator')

        $form.addEventListener('submit', (e)=>{
            e.preventDefault()
            const formData = new FormData($form)

            let input = {}
            for (const [key, value] of formData){
                input[key] = value
            }
            if(validateSignin(input['id'], input['password'])){
                alert(`${input['id']}님 환영합니다!`)
                routeChange('/')
            }
            else {
                alert('아이디와 비밀번호가 틀립니다.')
            }
            
        })
        $navigator.addEventListener('click', ()=>{
            routeChange('/signup')
        })
    }
    this.render = () => {
        $target.className = 'SignUpPage'
        $target.innerHTML = this.template()
        this.setEvent()
    }
    this.render()
}