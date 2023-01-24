import { NavItem } from './NavItem'

export function Navigation() {
    return (
        <ul>
            <NavItem content='About Me' />
            <NavItem content='Portfolio' />
            <NavItem content='Contact' />
            <NavItem content='Resume' />
        </ul>
    );
};