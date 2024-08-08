import { Avatar, AvatarImage } from "./ui/avatar";
import { Link, HomeIcon, LogOutIcon, CalendarIcon } from "lucide-react";
import { quickSearchOptions } from "../_constants/search";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";

const SidebarSheet = () => {
    return (
        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center py-5 border-b border-solid">
                <Avatar>
                    <AvatarImage src="https://avatars.githubusercontent.com/u/147463270?v=4" />
                </Avatar>
                <div>
                    <p className="font-bold px-2">Dafne Duda</p>
                    <p className="text-xs px-2">dafne@email.com</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
                <SheetClose asChild>
                    <Button className="justify-start gap-2" variant="ghost" asChild>
                        <Link href="/">
                            <HomeIcon size={18} />
                            Início
                        </Link>
                    </Button>
                </SheetClose>
                <Button className="justify-start gap-2" variant="ghost">
                    <CalendarIcon size={18} />
                    Agendamentos
                </Button>
            </div>

            <div className="flex flex-col gap-2 border-b border-solid py-5">
                {quickSearchOptions.map((option) => (
                    <Button
                        key={option.title}
                        variant="ghost"
                        className="justify-start gap-2"
                    >
                        <Image
                            alt={option.title}
                            src={option.imageUrl}
                            height={18}
                            width={18}
                        />
                        {option.title}
                    </Button>
                ))}
            </div>

            <div className="flex flex-col gap-2 py-5">
                <Button variant="ghost" className="justify-start gap-2">
                    <LogOutIcon size={18} />
                    Sair da conta
                </Button>
            </div>
        </SheetContent>
    );
}

export default SidebarSheet;