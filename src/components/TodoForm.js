export default function TodoForm(
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
        <form id='todo-form' style="border:1px solid #ccc">
            <div class="container">
                <h1>To Do</h1>
                <p>Please fill in this form to create an To-Do.</p>
                <hr>
            
                <label for="title"><b>title</b></label>
                <input type="text" placeholder="Enter title" name="title" required>
            
                <label for="memo"><b>memo</b></label>
                <input type="text" placeholder="Enter memo" name="memo" required>

                <div class="clearfix">
                    <input type="submit" value="Write"></input>
                </div>
            </div>
        </form>
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

