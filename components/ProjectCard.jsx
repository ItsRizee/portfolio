const ProjectCard = ({ title, description, repo, deployment }) => {
    return (
        <article className="flex flex-col w-full h-40 bg-slate-300 bg-opacity-20 rounded-xl p-5 space-y-3">
            <div className="flex justify-between">
                <h3 className="font-bold text-xl">{title}</h3>
                {deployment && (
                    <div className="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-4 h-4 ml-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                            />
                        </svg>
                        <a href={deployment} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:cursor-pointer">deployment</a>
                    </div>
                )}
            </div>
            <p className="line-clamp-2 flex-grow">{description}</p>
            <div className="flex items-center space-x-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                     stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"/>
                </svg>
                <a href={repo} target="_blank" rel="noopener noreferrer" className="truncate text-blue-400 hover:cursor-pointer">{repo}</a>
            </div>
        </article>
    );
};

export default ProjectCard;