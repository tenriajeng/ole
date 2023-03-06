function CardLoading({ aspectRatio }) {
    aspectRatio = aspectRatio ?? "aspect-square";
    return (
        <>
            <div
                className={`w-full bg-slate-600 ${aspectRatio} mb-2 overflow-hidden rounded-xl`}
            ></div>
            <div
                className={`w-full bg-slate-600 ${aspectRatio} mb-2 overflow-hidden rounded-xl`}
            ></div>
            <div
                className={`w-full bg-slate-600 ${aspectRatio} mb-2 overflow-hidden rounded-xl`}
            ></div>
        </>
    );
}

export default CardLoading;
