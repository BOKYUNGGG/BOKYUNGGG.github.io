export default function Component(
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
                <li>A</li>
                <li>B</li>
            </ul>
        `
        return template
    }
    this.setEvent = () => {
        
    }
    this.render = () => {
        $target.innerHTML = template()
        this.setEvent()
    }

    this.setState(initialState)
}