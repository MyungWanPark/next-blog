export type aboutDetail = {
    detail: {
        title: string;
        descList: string[];
    };
};

export default function AboutDescription({
    detail: { title, descList },
}: aboutDetail) {
    return (
        <article className="flex flex-col items-center ">
            <h1 className="font-bold">{title}</h1>
            <ul>
                {descList.map((desc, id) => {
                    return (
                        <li key={`${desc}_${id}`} className="text-center">
                            {desc}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
