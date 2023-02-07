export default function TodoItem(
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
            <div>
                <h3>${this.state.title}</h3>
                <p>${this.state.memo}</p>
            </div>
        `
        return template
    }
    this.setEvent = () => {
        
    }
    this.render = () => {
        if(!this.state.title | !this.state.memo){
            return
        }
        $target.innerHTML = this.template()
        this.setEvent()
    }
    this.setState(initialState)
}