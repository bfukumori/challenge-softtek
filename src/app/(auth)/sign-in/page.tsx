import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="p-80 bg-current">
      <Card className="p-4">
      <div className="flex justify-center">
          <Image src="/logotipo.png" width={200} height={200} alt="Logo Softtek"/>
        </div>
      <div className="mt-8 mx-12">
        <Label className="">Digite seu e-mail:</Label>
        <Input placeholder="E-mail"/>
        <Label>Digite sua senha:</Label>
        <Input placeholder="Senha"/>
        <div className="flex justify-center">
            <Button className="mt-4 px-24">Login</Button>
        </div>
        <div>
          <Label className="mt-8 flex justify-center">Esqueceu sua senha?</Label>
        </div>
      </div>
      </Card>
      <Card className="py-4 mt-4 text-center">
        <Link href="/sign-up">Ainda não tem uma conta?</Link>
      </Card>
      
    </main>
  );
}
