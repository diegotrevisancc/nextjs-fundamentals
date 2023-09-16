import Link from "next/link";

export default function NotFound() {
    return (
      <>
        <h1>Essa página não existe</h1>
        <Link href="/">Voltar</Link>
      </>
    );
  }