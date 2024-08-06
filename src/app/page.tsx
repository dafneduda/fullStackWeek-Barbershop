import { SearchIcon } from "lucide-react";
import { Button } from "./_components/ui/button";
import Header from "./_components/header";
import { Input } from "./_components/ui/input";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  //CHAMA A FUNÇÃO QUE BUSCA OS DADOS NO BANCO DE DADOS
  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2>Olá, Dafne!</h2>
        <p>Terça-feira, 06 de Agosto</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon size={24} />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Banner"
            src="/banner.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
        
        <h2 className="text-xs uppercase mt-6 mb-3 text-gray-400">
          Agendamentos
          </h2>
          
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">

            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia Uau</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">13</p>
              <p className="text-sm">18:00</p>
            </div>
            
          </CardContent>
        </Card>

        <h2 className="text-xs uppercase mt-6 mb-3 text-gray-400">
          Recomendados
          </h2>
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
      </div>
    </div>
  )
}

export default Home;