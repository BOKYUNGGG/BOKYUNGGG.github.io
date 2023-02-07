import TodoItem from "./TodoItem.js"

export default function TodoList(
    {
        $target,
        initialState
    }
){
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }
    this.template = () => {   
        const template = `
        <ul>
            ${this.state.map((item, index)=>
                `<li class="todo-item" id="${index}"></li>`
            ).join('')}
        </ul>
        `
        return template
    }
    this.setEvent = () => {
        
    }
    this.render = () => {
        $target.innerHTML = this.template()
        const $children = $target.querySelectorAll('.todo-item')
        $children.forEach((child, index) => {
            new TodoItem({
                $target : child,
                initialState : this.state[index]
            })
        });
        
        this.setEvent()
    }
    this.setState(initialState)
}