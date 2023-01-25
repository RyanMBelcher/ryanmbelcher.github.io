export function NavItem({ content, onClick, page }) {
    return (
        <li>
            <a
                onClick={onClick}
                href={`#${page}`}
            >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 5h13v17h-24v-20h8l3 3zm-8 16v-12h20v-3h-12.414l-3-3h-6.586v18h2zm1 0h19v-11h-19v11z" /></svg>
                {content}
            </a>
        </li>
    );
};