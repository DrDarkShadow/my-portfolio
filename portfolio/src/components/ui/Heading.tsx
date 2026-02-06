interface HeadingProps {
    title: string
    subtitle: string
}

export function Heading({ title, subtitle }: HeadingProps) {
    return (
        <div className="heading">
            <p>{subtitle}</p>
            <h2>{title}</h2>
        </div>
    )
}
