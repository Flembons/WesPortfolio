import FadeIn from "../components/FadeIn";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <FadeIn>
                <h1 className="text-4xl font-semibold">Home</h1>
            </FadeIn>
        </div>
    )
}