import construction from "@/public/images/construction.jpg"
import Image from "next/image"

export function UnderConstruction() {

    return <section className="w-full flex flex-col justify-center items-center">
        <h1 className="p-4 text-3xl font-semibold">Sorry!</h1>
        <Image
            src={construction}
            alt="Under Construction image with yellow and black striped warning barriers and an orange and white traffic cone in front" />
        <p className="p-4">We're still working on this page.</p>
    </section>

}