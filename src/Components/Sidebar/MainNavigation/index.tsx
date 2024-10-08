import { BarChart, CheckSquare, ChevronDown, Flag, Home, SquareStack, User } from "lucide-react";
import { NavItem } from "./NavItem";

export default function MainNavigation(){
    return(
        <nav className="space-y-0.5">
            <NavItem title="Home" icon={Home}/>
            <NavItem title="Deashboard" icon={BarChart}/>
            <NavItem title="Projects" icon={SquareStack}/>
            <NavItem title="Tasks" icon={CheckSquare}/>
            <NavItem title="Reporting" icon={Flag}/>
            <NavItem title="Users" icon={User}/>

        </nav>
    )
}