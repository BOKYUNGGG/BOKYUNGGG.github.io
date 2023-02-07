export default function TodoForm(
    {
        $target,
        handler
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
                <p>Fill in this form to create an To-Do.</p>
                <hr>
            
                <label for="title"><b>title</b></label>
                <input type="text" placeholder="Enter title" name="title" value="${this.state.title}" required>
            
                <label for="memo"><b>memo</b></label>
                <input type="text" placeholder="Enter memo" name="memo" value="${this.state.memo}" required>

                <div class="clearfix">
                    <input type="submit" value="Write"></input>
                </div>
            </div>
        </form>
        `
        return template
    }
    this.setEvent = () => {
        const $form = $target.querySelector('#todo-form')

        $form.addEventListener('submit', (e)=>{
            e.preventDefault()
            const formData = new FormData($form)

            let input = {}
            for (const [key, value] of formData){
                input[key] = value
            }
            handler({
                title : input['title'],
                memo : input['memo']
            })
            this.setState({
                title : "",
                memo : ""
            })
        })
    }
    this.render = () => {
        $target.innerHTML = this.template()
        this.setEvent()
    }
    this.setState(
        {
            title : "",
            memo :""
        }
    )
}

