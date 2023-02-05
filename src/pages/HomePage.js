import TodoForm from "../components/TodoForm.js"

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
            <section class='todo-form'></section>
        `
        return template
    }
    this.render = () => {
        $target.className = 'HomePage'
        $target.innerHTML = this.template()
        const $todoSection = $target.querySelector(".todo-form")
        new TodoForm({
            $target : $todoSection, 
            initialState : {
                title : "",
                memo : ""
            }
        })
    }
    


    this.setState(null)
}