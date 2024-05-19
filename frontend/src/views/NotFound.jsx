import error from '../assets/404.jpg'

export default function NotFound() {
    return (
        <section
            id="not-found"
            className="w-full h-screen"
            style={{ backgroundImage: `url(${error})` }}
        >
        </section>
    )
}