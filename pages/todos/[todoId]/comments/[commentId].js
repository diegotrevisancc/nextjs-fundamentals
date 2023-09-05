import { useRouter } from "next/router"
import Link from "next/link";
export default function Comment() {
  const router = useRouter();
  
  const todoId = router.query.todoId;
  const commentId = router.query.commentId;

  return (
    <>
      <h1>Comentário n° {commentId}</h1>
      <Link href={`/todos/${todoId}`}>Voltar</Link>
      <p>Do Todo {todoId}</p>
    </>
  )
}