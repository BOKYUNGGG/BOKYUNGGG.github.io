
export default function LandingPage({
    $target
}){
    $target.className = 'LandingPage'

    this.template = () => {
        const template = `
            <section>
                <h1>Store to-does on</h1>
                <h1>your local web-browser</h1>
                <button>Get Started</button>
            </section>
        `
        return template
    }
    this.render = () => {
        $target.innerHTML = this.template()
    }
    this.render()
}