import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-scroll';
import ProjectCard from "../components/ProjectCard";

export default function Home() {
    return (
        <div className="bg-gradient-to-br from-gray-700 via-gray-900 to-black text-gray-300">
            {/*bg-gradient-to-tl from-gray-900 via-purple-900 to-violet-600*/}
            {/*bg-gradient-to-br from-gray-700 via-gray-900 to-black*/}
            <Head>
                <title>Portfolio</title>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className="sticky top-0 z-10 bg-slate-600 p-3 shadow-md shadow-black/2">
                <nav>
                    <ul className="flex justify-around">
                        <li className="cursor-pointer">
                            <Link to="bio" spy={true} smooth={true} offset={-70} duration={300}>
                                <div className="flex items-center space-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                    </svg>
                                    <p className="hover:cursor-pointer">bio</p>
                                </div>
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to="projects" spy={true} smooth={true} offset={-70} duration={300}>
                                <div className="flex items-center space-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"/>
                                    </svg>
                                    <p className="hover:cursor-pointer">projects</p>
                                </div>
                            </Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to="tech-stack" spy={true} smooth={true} offset={-70} duration={300}>
                                <div className="flex items-center space-x-1.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"/>
                                    </svg>
                                    <p className="hover:cursor-pointer">Tech stack</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex flex-col relatie h-full w-full p-4 space-y-10">
                <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 relatie h-full w-full space-y-10">
                    <section id="bio" className="xs:w-96 h-min rounded-xl bg-slate-300 bg-opacity-20 p-3">
                        <figure className="w-32 float-left mr-3">
                            <Image src="/profile_picture.jpg" className="rounded-xl" alt="Profile picture"
                                   layout="responsive" width={509} height={741}/>
                        </figure>
                        <p>Hey, I&apos;m Nikola Petrov, an 18-year-old high school graduate from TUES. When I&apos;m not
                            behind a
                            screen, you&apos;ll find me soaking up the best moments with my friends. Whether it&apos;s
                            hitting
                            the road,
                            hitting the gym, exploring the city, jetting off on adventures, or grooving to my favorite
                            tunes,
                            I&apos;m all about making memories.

                            My heart beats for web development, where I&apos;m on a mission to create seamless online
                            experiences.
                            I&apos;m well-versed in both frontend and backend, but my true passion lies in bringing designs
                            to
                            life
                            and building captivating user interfaces.

                            Beyond the web, I&apos;ve dabbled in mobile development and even delved into the intricate world
                            of
                            embedded systems. Each line of code is a step closer to my goal in the ever-evolving tech
                            landscape. Feel free to explore my projects, and who knows, maybe we can collaborate on
                            something
                            awesome in the future!
                        </p>
                    </section>
                    <section id="projects" className="overflow-y-auto">
                    <h2 className="text-xl mb-5">Projects</h2>
                        <div className="flex flex-col space-y-5">
                            <ProjectCard
                                title="Wavary"
                                description="Wavary is a platform for craftsman to showcase their products in a more appealing way."
                                repo="https://github.com/ItsRizee/diploma_project"
                                deployment="https://diploma-project.vercel.app/"
                            />
                            <ProjectCard
                                title="Travel blog"
                                description="Travel blog where I post pictures and stories of the places I went to."
                                repo="https://github.com/ItsRizee/vot_project"
                                deployment={null}
                            />
                            <ProjectCard
                                title="Ecoware"
                                description="Mobile app that supports recycling to help the environment."
                                repo="https://github.com/MontBru/Ecoware"
                                deployment={null}
                            />
                            <ProjectCard
                                title="Alert"
                                description="SOS app to help people in need."
                                repo="https://github.com/MontBru/SOSApp"
                                deployment={null}
                            />
                        </div>
                    </section>
                </div>
                <section id="tech-stack">
                    <h2 className="text-xl mb-5">Tech stack</h2>
                </section>
            </main>
        </div>
    )
}
