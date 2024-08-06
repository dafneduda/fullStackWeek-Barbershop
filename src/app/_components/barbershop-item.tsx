import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }) => {
    return 
    <Card className="w-[159px]">
        <CardContent>
            <div className="relative h-[159px] w-full">
                <Image fill className="object-contain" src={barbershop.imageUrl} alt={"Imagem"} />
            </div>
        </CardContent>
    </Card>
}

export default BarbershopItem