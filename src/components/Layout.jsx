export default function Layout(props){

    const { children } = props

    const header = (
        <header>
            <h1>30Workouts</h1>
            <p>The 30 Simple Workouts Program</p>
        </header>
    )

    const footer = (
        <footer>
            <p>Built by <a href="https://github.com/Andy5841" target="_blank" rel="noopener noreferrer">Andy Huynh</a></p>
        </footer>
    )

    return(
        <>
            {header}
            {children}
            {footer}
        </>
    )
}
