import TodoForm from "../components/TodoForm.js"
import TodoList from '../components/TodoList.js'

export default function HomePage({
    $target
}){
    this.state = []
    this.setState = (nextState) => {
        this.state = [
            ...this.state,
            nextState
        ]
        console.log(this.state)
        this.render()
    }
    this.template = () => {
        const template = `
            <h1>홈페이지</h1>
            <section class='todo-form'></section>
            <section class='todo-list'></section>
        `
        return template
    }
    this.render = () => {
        $target.className = 'HomePage'
        $target.innerHTML = this.template()
        const $formSection = $target.querySelector(".todo-form")
        const $listSection = $target.querySelector('.todo-list')

        new TodoForm({
            $target : $formSection, 
            handler : this.setState
        })
        new TodoList({
            $target : $listSection,
            initialState : this.state
        })

    }
    


    this.setState([])
}