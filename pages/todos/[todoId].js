import Link from "next/link"
import { useRouter } from "next/router"

export default function Todo() {
  const router = useRouter();
  const todoId = router.query.todoId; //pega o parametro no final da url, no caso o id do todo que gera a página
  return (
    <>
      <Link href="/todos">Voltar</Link>
      <h1>Todoid dessa página: {todoId}</h1>
    </>
  )
}