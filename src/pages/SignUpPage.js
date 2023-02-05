import { routeChange } from "./router.js"
import { IsRepeated } from "../module/valiator.js"

export default function SignUpPage({
    $target,
}){
    this.template = () => {
        const template = `
        <form id='signup-form' style="border:1px solid #ccc">
            <div class="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
            
                <label for="id"><b>ID</b></label>
                <input type="text" placeholder="Enter ID" name="id" required>
            
                <label for="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required>
            
                <label for="password-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="password-repeat" required>
                
                <p>
                    Already have an accout?
                    <span id="navigator">Sign in 👉</span>
                </p>

                <div class="clearfix">
                    <input type="submit" value="Sign Up"></input>
                </div>
            </div>
        </form>
        `
        return template
    }
    this.setEvent = () => {
        const $form = $target.querySelector('#signup-form')
        const $navigator = $target.querySelector('#navigator')

        $form.addEventListener('submit', (e)=>{
            e.preventDefault()
            const formData = new FormData($form)

            let input ={}
            for (const [key, value] of formData){
                input[key] = value
            }
            
            if(IsRepeated(input['password'], input['password-repeat'])){
                alert(`${input['id']}님 가입을 환영합니다!`)
                routeChange('/')
            }
            else{
                alert(`비밀번호를 확인해주세요.`)
            }

        })
        $navigator.addEventListener('click', ()=>{
            routeChange('/signin')
        })
    }
    this.render = () => {
        $target.className = 'SignUpPage'
        $target.innerHTML = this.template()
        this.setEvent()
    }
    this.render()
}