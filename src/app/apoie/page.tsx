import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="text-black mt-6 w-full">
      <div className="max-w-[900px] mx-auto">
        <h1 className="text-2xl font-semibold mb-2 ">Apoie um projeto</h1>
        <p className="mb-4">
          Você pode apoiar essas iniciativas não só doando, mas também se
          voluntariando.
        </p>
        <ul>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link
              href="https://atados.com.br/ong/instituto-regeneracao-global
"
            >
              Instituto Regeneração Global (IRG)
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link
              href="https://atados.com.br/ong/ecotece

"
            >
              Instituto Ecotece
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link
              href="https://atados.com.br/ong/instituto-lixo-zero-brasil

"
            >
              Instituto Lixo Zero Brasil (ILZB)
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link href="https://atados.com.br/ong/sustentarte">
              Sustentarte
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link href="https://www.instagram.com/imapinguari/">
              Instituto Mapinguari: Rede
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link href="https://www.instagram.com/redejandyras/">
              Rede Jandyras
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link href=" https://www.instagram.com/engajamundo/">
              Engajamundo
            </Link>
          </li>
          <li className="flex items-center mb-2">
            <Image
              alt=""
              src="/images/plant-thin.svg"
              height={35}
              width={35}
              className="mr-2"
            />
            <Link href="https://www.instagram.com/resama_org/">Resama</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
