interface StatsParagraph {
    title?: string;
    highlight?: string
    text?: string;
}

function parseText(text: string) {
    return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

export function Paragraph({ title, highlight, text }: StatsParagraph) {
    return (
        <div className="flex flex-col md:flex-row w-full gap-[24px]">
            <div className="w-[128px]">
                {title && <h2 className="text-[20px] text-[var(--primary)] uppercase">{title}</h2>}
            </div>
            <div className={`${highlight? 'gap-4': ''} flex flex-col flex-1`}>
                <span className="text-[24px] font-light whitespace-pre-wrap">{highlight ? parseText(highlight) : ''}</span>
                <p className="text-[14px] whitespace-pre-wrap">{text ? parseText(text) : ''}</p>
            </div>
        </div>
    )
}