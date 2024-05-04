import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@radix-ui/react-checkbox";
import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <main className="py-52 px-80 bg-current"> 
      <Card className="p-4">
      <div className="flex justify-center">
          <Image src="/logotipo.png" width={200} height={200} alt="Logo Softtek"/>
        </div>
      <div className="mt-8 mx-12">
        <Label className="">Digite seu nome:</Label>
        <Input placeholder="Nome"/>
        <Label className="">Digite seu número de telefone:</Label>
        <Input placeholder="Número"/>
        <Label className="">Digite seu e-mail:</Label>
        <Input placeholder="E-mail"/>
        <Label>Digite sua senha:</Label>
        <Input placeholder="Senha"/>
        <Label>Confirme sua senha:</Label>
        <Input placeholder="Confirme sua Senha"/>
        <div>
          <DropdownMenuCheckboxItem>Clique aqui para concordar com os termos</Checkbo>
        </div>
        <div className="flex justify-center">
            <Button className="mt-4 px-24">Cadastrar</Button>
        </div>
      </div>
      </Card>
      <Card className="py-4 mt-4 text-center">
        <Link href="/sign-in">Já tem uma conta?</Link>
      </Card>
    </main>
  );
}
