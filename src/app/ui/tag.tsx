import "@/app/ui/layouts/tag.css"

export default function Tag({content = "coming soon"}){
    return (
        <p className={"tagBox"}>
            # {content}
        </p>
    )
}