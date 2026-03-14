import React from 'react';

function DefaultMenu(props) {
    return (
        <div id="default-menu" className={(props.active ? ' block ' : ' hidden ') + ' cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm'}>
            <a rel="noreferrer noopener" href="https://github.com/lingadevaru-hp/lingadevaru-hp.github.io" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">*</span> <span className="ml-2">Star this Project</span>
            </a>
            <a rel="noreferrer noopener" href="https://github.com/lingadevaru-hp/lingadevaru-hp.github.io/issues" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">!</span> <span className="ml-2">Report Issues</span>
            </a>
            <Devider />
            <a rel="noreferrer noopener" href="https://www.linkedin.com/in/lingadevaruhp/" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">in</span> <span className="ml-2">Follow on <strong>LinkedIn</strong></span>
            </a>
            <a rel="noreferrer noopener" href="https://github.com/lingadevaru-hp" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">gh</span> <span className="ml-2">Follow on <strong>GitHub</strong></span>
            </a>
            <a rel="noreferrer noopener" href="https://lingadevaru.in" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">@</span> <span className="ml-2">Visit Website</span>
            </a>
            <a rel="noreferrer noopener" href="mailto:contact@lingadevaru.in" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">mail</span> <span className="ml-2">Contact Me</span>
            </a>
            <Devider />
            <div onClick={() => { localStorage.clear(); window.location.reload(); }} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">reset</span> <span className="ml-2">Reset Ubuntu</span>
            </div>
        </div>
    );
}

function Devider() {
    return (
        <div className="flex justify-center w-full">
            <div className="border-t border-gray-900 py-1 w-2/5"></div>
        </div>
    );
}

export default DefaultMenu;
