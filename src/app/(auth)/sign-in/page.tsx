import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignIn() {
  return (
    <main className="h-screen">
      <div className="p-4 lg:p-8 m-auto max-w-[1200px] flex flex-col justify-center">
        <Card className="p-4 flex flex-col items-center">
          <Image
            src="/logotipo.png"
            width={200}
            height={200}
            alt="Logo Softtek"
          />
          <form className="mt-8 w-full max-w-[900px] mx-auto flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Digite seu e-mail:</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="E-mail"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Digite sua senha:</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Senha"
              />
            </div>
            <Button type="submit" className="self-center mt-4 px-24">
              Login
            </Button>
          </form>
        </Card>
        <Card className="py-4 mt-4 text-center">
          <Link href="/sign-up">Ainda não tem uma conta?</Link>
        </Card>
      </div>
    </main>
  );
}
