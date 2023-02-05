export default function Clock(
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
        const {month, date, week, hour, minute} = this.state

        const template = `
            <div>${month}월 ${date}일 (${week}) ${hour}<span class="flicker">:</span>${minute}</div>
        `
        return template
    }
    this.setEvent = () => {
        
    }
    this.render = () => {
        $target.innerHTML = this.template()
        this.setEvent()
    }

    this.setState(initialState)
}

