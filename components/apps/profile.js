import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutLingadevaru extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: 'about',
            navbar: false,
        };
    }

    componentDidMount() {
        this.screens = {
            about: <About />,
            education: <Education />,
            skills: <Skills />,
            projects: <Projects />,
            achievements: <Achievements />,
            resume: <Resume />,
        };

        let lastVisitedScreen = localStorage.getItem('about-section');
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = 'about';
        }

        const screenNode = document.getElementById(lastVisitedScreen) || document.getElementById('about');
        this.changeScreen(screenNode);
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        localStorage.setItem('about-section', screen);
        ReactGA.send({ hitType: 'pageview', page: `/${screen}`, title: 'About Lingadevaru' });

        this.setState({
            screen: this.screens[screen],
            active_screen: screen,
        });
    };

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    };

    renderNavLinks = () => {
        return (
            <>
                <NavItem id="about" active={this.state.active_screen} onFocus={this.changeScreen} icon="./themes/Yaru/status/about.svg" label="About Me" />
                <NavItem id="education" active={this.state.active_screen} onFocus={this.changeScreen} icon="./themes/Yaru/status/education.svg" label="Education" />
                <NavItem id="skills" active={this.state.active_screen} onFocus={this.changeScreen} icon="./themes/Yaru/status/skills.svg" label="Skills" />
                <NavItem id="projects" active={this.state.active_screen} onFocus={this.changeScreen} icon="./themes/Yaru/status/projects.svg" label="Projects" />
                <NavItem id="achievements" active={this.state.active_screen} onFocus={this.changeScreen} icon="./themes/Yaru/status/experience.svg" label="Achievements" />
                <NavItem id="resume" active={this.state.active_screen} onFocus={this.changeScreen} icon="./themes/Yaru/status/download.svg" label="Resume" />
            </>
        );
    };

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className="w-3.5 border-t border-white"></div>
                    <div className="w-3.5 border-t border-white my-0.5"></div>
                    <div className="w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? 'visible animateShow z-30 ' : 'invisible ') + ' md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20'}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

function NavItem({ id, active, onFocus, icon, label }) {
    return (
        <div
            id={id}
            tabIndex="0"
            onFocus={onFocus}
            className={
                (active === id ? ' bg-ub-orange bg-opacity-100 hover:bg-opacity-95' : ' hover:bg-gray-50 hover:bg-opacity-5 ') +
                ' w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5'
            }
        >
            <img className="w-3 md:w-4" alt={label} src={icon} />
            <span className="ml-1 md:ml-2 text-gray-50">{label}</span>
        </div>
    );
}

function SectionHeader({ title }) {
    return (
        <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
            {title}
            <div className="absolute pt-px bg-white mt-px top-full w-full">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
            </div>
        </div>
    );
}

function About() {
    return (
        <>
            <div className="w-24 h-24 md:w-28 md:h-28 my-5 rounded-full bg-ub-orange flex items-center justify-center text-3xl md:text-4xl font-bold">
                LH
            </div>
            <div className="mt-2 md:mt-4 text-lg md:text-2xl text-center px-2">
                <div>my name is <span className="font-bold">Lingadevaru H P</span>,</div>
                <div className="font-normal">I build <span className="text-pink-500 font-bold">AI + Blockchain products</span>.</div>
            </div>
            <div className="mt-5 relative md:my-7 pt-px bg-white w-40 md:w-56">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className="mt-2 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className="list-pc">MCA student focused on Blockchain Systems, LLM fine-tuning, and AI-driven applications.</li>
                <li className="mt-3 list-building">Built and deployed production crypto assets on Solana with live DeFi trading.</li>
                <li className="mt-3 list-time">Fine-tuned Gemma-2-9B using QLoRA + PEFT with 4-bit quantization for efficient inference.</li>
                <li className="mt-3 list-star">Contact: <a href="mailto:contact@lingadevaru.in" className="underline">contact@lingadevaru.in</a> | <a href="https://lingadevaru.in" target="_blank" rel="noreferrer" className="underline">lingadevaru.in</a></li>
            </ul>
        </>
    );
}

function Education() {
    return (
        <>
            <SectionHeader title="Education" />
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1">
                <li className="list-disc">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">Siddaganga Institute of Technology, Tumakuru</div>
                    <div className="text-sm text-gray-400 mt-0.5">2024 - 2026</div>
                    <div className="text-sm md:text-base">Master of Computer Applications (MCA)</div>
                </li>
                <li className="list-disc mt-4">
                    <div className="text-lg md:text-xl text-left font-bold leading-tight">Seshadripuram Degree College, Tumakuru</div>
                    <div className="text-sm text-gray-400 mt-0.5">2022 - 2024</div>
                    <div className="text-sm md:text-base">Bachelor of Computer Applications (BCA)</div>
                    <div className="text-sm text-gray-300 font-bold mt-1">CGPA 8.2 / 10</div>
                </li>
            </ul>
        </>
    );
}

function SkillBlock({ title, items }) {
    return (
        <div className="w-full md:w-10/12 mb-4">
            <div className="text-base font-bold mb-1 text-ubt-gedit-orange">{title}</div>
            <div className="flex flex-wrap">
                {items.map((item, idx) => (
                    <span key={idx} className="px-2 py-0.5 mr-2 mb-2 text-xs md:text-sm border border-gray-300 rounded-full text-gray-100">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Skills() {
    return (
        <>
            <SectionHeader title="Technical Skills" />
            <div className="w-10/12 text-sm md:text-base mb-4">
                Focused on practical AI systems, blockchain products, and Linux-first development workflows.
            </div>
            <SkillBlock title="Languages" items={['Python', 'JavaScript', 'Solidity', 'Rust']} />
            <SkillBlock title="Blockchain" items={['Solana (SPL)', 'Ethereum', 'Smart Contracts', 'Web3.js', 'Truffle']} />
            <SkillBlock title="AI/ML" items={['PEFT', 'QLoRA', 'Unsloth', 'PyTorch', 'Hugging Face', 'Gradio']} />
            <SkillBlock title="Systems & DevOps" items={['Git', 'Docker', 'Linux', 'NixOS', 'Vim', 'Tmux']} />
            <SkillBlock title="Databases & Security" items={['ChromaDB', 'DNS', 'SPF', 'DKIM', 'DMARC', 'VPN']} />
        </>
    );
}

function Projects() {
    const projectList = [
        {
            name: 'FOSS Coin - SPL Token on Solana Blockchain',
            date: '2025',
            link: 'https://github.com/lingadevaru-hp/foss-coin',
            description: [
                'Developed and deployed a production-ready SPL token on Solana.',
                'Set up liquidity for decentralized trading and transparent on-chain verification.',
            ],
            stack: ['Solana', 'SPL Token', 'Rust', 'Web3.js', 'Orca DEX', 'DeFi'],
        },
        {
            name: 'Fine-Tuning LLM - Thoshan Flash',
            date: '2024',
            link: 'https://huggingface.co/lingadevaruhp/thoshan_Flash',
            description: [
                'Fine-tuned Gemma-2-9B using QLoRA + PEFT with 4-bit quantization.',
                'Deployed public model endpoint with Gradio and reached early community adoption.',
            ],
            stack: ['Python', 'Hugging Face', 'PEFT', 'Unsloth', 'PyTorch', 'QLoRA', 'Gradio'],
        },
        {
            name: 'Decentralized Insurance Claim D-App',
            date: '2023',
            link: 'https://lingadevaru.in',
            description: [
                'Built Ethereum smart contracts for automated claim processing.',
                'Integrated MetaMask and deployed testnet-ready frontend-to-blockchain flow.',
            ],
            stack: ['Solidity', 'Truffle', 'Web3.js', 'Ganache', 'MetaMask', 'React'],
        },
        {
            name: 'Home Wi-Fi Router with Network-wide Ad Blocking',
            date: '2024',
            link: '',
            description: [
                'Configured Pi-hole DNS filtering to block ads across TV, mobile, and desktop devices.',
                'Set up DNS, DHCP, and routing for privacy-focused home networking.',
            ],
            stack: ['Pi-hole', 'DNS', 'DHCP', 'Linux Networking'],
        },
    ];

    return (
        <>
            <SectionHeader title="Projects" />
            {projectList.map((project, index) => {
                const card = (
                    <div className="w-full py-2 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
                        <div className="flex flex-wrap justify-between items-center">
                            <div className="text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                            <div className="text-gray-300 font-light text-sm">{project.date}</div>
                        </div>
                        <ul className="tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                            {project.description.map((desc, idx) => (
                                <li key={idx} className="list-disc mt-1 text-gray-100">{desc}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap items-start justify-start text-xs py-2">
                            {project.stack.map((item, idx) => (
                                <span key={idx} className="px-1.5 py-0.5 w-max border border-ub-orange text-ub-orange m-1 rounded-full">{item}</span>
                            ))}
                        </div>
                    </div>
                );

                if (project.link) {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            {card}
                        </a>
                    );
                }

                return <div key={index} className="flex w-full flex-col px-4">{card}</div>;
            })}
        </>
    );
}

function Achievements() {
    return (
        <>
            <SectionHeader title="Achievements" />
            <ul className="w-10/12 mt-4 ml-4 px-0 md:px-1 text-sm md:text-base">
                <li className="list-disc mt-1">Yoga Ratna Award, Central Government of India (2018).</li>
                <li className="list-disc mt-2">Co-founder and President, Debate Society (Deb'Soc), Seshadripuram Degree College (2023).</li>
                <li className="list-disc mt-2">Elected Event Lead, Zerone 2.0, SIT Tumakuru; led an 80-member organizing team.</li>
                <li className="list-disc mt-2">NMIT 24-Hour Web3 Hackathon participant (2024).</li>
                <li className="list-disc mt-2">24-Hour Rapid Build Challenge (2025): privacy-focused e-commerce prototype on Tor.</li>
                <li className="list-disc mt-2">AI Systems Hackathon (2025): built a multi-agent autonomous workflow system.</li>
            </ul>

            <div className="w-10/12 mt-6">
                <div className="text-base font-bold mb-2 text-ubt-gedit-orange">Certifications</div>
                <ul className="ml-4 text-sm md:text-base">
                    <li className="list-disc mt-1">Linux Fundamentals: System Administration and Networking.</li>
                    <li className="list-disc mt-2">CS50's Introduction to Cybersecurity, Harvard University (ongoing).</li>
                </ul>
            </div>
        </>
    );
}

function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Lingadevaru-Resume.pdf" title="Lingadevaru resume" frameBorder="0"></iframe>
    );
}

export default AboutLingadevaru;

export const displayAboutLingadevaru = () => {
    return <AboutLingadevaru />;
};
